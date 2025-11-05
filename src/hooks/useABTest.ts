'use client'

import { useEffect, useState } from 'react'
import { useFeatureFlagVariantKey, usePostHog } from 'posthog-js/react'

/**
 * Hook para A/B testing con PostHog
 * 
 * @param flagKey - El nombre del feature flag en PostHog
 * @param defaultVariant - La variante por defecto (control)
 * @returns variant, payload, isLoading, y función trackConversion
 * 
 * @example
 * const { variant, payload, trackConversion } = useABTest('hero-h1-test', 'control')
 * 
 * // Si usas payloads (textos en PostHog):
 * <h1>{payload?.title || defaultTitle}</h1>
 * 
 * // Si usas variantes hardcodeadas:
 * <h1>{variants[variant].title}</h1>
 * <button onClick={() => trackConversion('cta_click')}>Get Started</button>
 */
export function useABTest(flagKey: string, defaultVariant: string = 'control') {
  const posthog = usePostHog()
  const variant = useFeatureFlagVariantKey(flagKey)
  const [isLoading, setIsLoading] = useState(true)
  const [payload, setPayload] = useState<any>(null)

  useEffect(() => {
    const finalVariant = variant || defaultVariant
    
    // Get the payload (JSON) for the active variant
    let flagPayload = posthog?.getFeatureFlagPayload?.(flagKey)
    
    // PostHog sometimes returns payloads as JSON strings, parse if needed
    if (flagPayload && typeof flagPayload === 'string') {
      try {
        // Remove any leading/trailing whitespace and newlines
        const cleanedPayload = flagPayload.trim().replace(/^\s+|\s+$/g, '')
        flagPayload = JSON.parse(cleanedPayload)
        console.log('📦 Parsed payload from string:', flagPayload)
      } catch (e) {
        console.warn('⚠️ Failed to parse payload JSON:', e, { rawPayload: flagPayload })
        flagPayload = null
      }
    }
    
    console.log('🎯 useABTest:', {
      flagKey,
      variant,
      finalVariant,
      payload: flagPayload,
      payloadType: typeof flagPayload,
      hasPostHog: !!posthog,
      isLoading,
      // Try to get flag directly from PostHog for debugging
      directFlagValue: posthog?.getFeatureFlag(flagKey) || 'not available'
    })

    // Update payload state
    if (flagPayload !== undefined && flagPayload !== null) {
      setPayload(flagPayload)
    }

    // Timeout: si después de 2 segundos no hay variante, usar default
    const timeout = setTimeout(() => {
      if (variant === undefined) {
        console.warn('⏱️ Timeout: using default variant for', flagKey, '→', defaultVariant)
        setIsLoading(false)
      }
    }, 2000)

    // Esperar a que PostHog cargue los feature flags
    if (variant !== undefined) {
      clearTimeout(timeout)
      setIsLoading(false)
      
      console.log('✅ Feature flag loaded successfully!', {
        flagKey,
        variant,
        finalVariant,
        payload: flagPayload,
        '🎲 This user will see variant:': finalVariant
      })

      // Track la exposición al test (impression)
      posthog?.capture('ab_test_impression', {
        test_name: flagKey,
        variant: finalVariant,
        page_path: window.location.pathname
      })

      // También enviar a GA4
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'ab_test_impression', {
          test_name: flagKey,
          variant: finalVariant,
          event_category: 'ab_testing'
        })
      }
    }

    return () => clearTimeout(timeout)
  }, [variant, flagKey, defaultVariant, posthog, isLoading])

  /**
   * Track conversion events (ej: clicks en CTA, form submissions, etc)
   */
  const trackConversion = (eventName: string, properties?: Record<string, any>) => {
    const finalVariant = variant || defaultVariant

    // PostHog event
    posthog?.capture(eventName, {
      test_name: flagKey,
      variant: finalVariant,
      ...properties
    })

    // GA4 event
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, {
        test_name: flagKey,
        variant: finalVariant,
        event_category: 'ab_testing',
        ...properties
      })
    }
  }

  /**
   * Track cuando el usuario hace scroll y ve el contenido
   */
  const trackEngagement = (engagementType: string = 'scroll') => {
    trackConversion('ab_test_engagement', {
      engagement_type: engagementType
    })
  }

  return {
    variant: (variant || defaultVariant) as string,
    payload, // JSON payload from PostHog (null if not configured)
    isLoading,
    trackConversion,
    trackEngagement,
    posthog
  }
}

