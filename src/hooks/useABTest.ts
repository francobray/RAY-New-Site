'use client'

import { useEffect, useState } from 'react'
import { useFeatureFlagVariantKey, usePostHog } from 'posthog-js/react'

/**
 * Hook para A/B testing con PostHog
 * 
 * @param flagKey - El nombre del feature flag en PostHog
 * @param defaultVariant - La variante por defecto (control)
 * @returns variant, isLoading, y función trackConversion
 * 
 * @example
 * const { variant, trackConversion } = useABTest('hero-h1-test', 'control')
 * 
 * <h1>{variants[variant].title}</h1>
 * <button onClick={() => trackConversion('cta_click')}>Get Started</button>
 */
export function useABTest(flagKey: string, defaultVariant: string = 'control') {
  const posthog = usePostHog()
  const variant = useFeatureFlagVariantKey(flagKey)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    console.log('🎯 useABTest:', {
      flagKey,
      variant,
      hasPostHog: !!posthog,
      isLoading
    })

    // Timeout: si después de 2 segundos no hay variante, usar default
    const timeout = setTimeout(() => {
      if (variant === undefined) {
        console.warn('⏱️ Timeout: using default variant for', flagKey)
        setIsLoading(false)
      }
    }, 2000)

    // Esperar a que PostHog cargue los feature flags
    if (variant !== undefined) {
      clearTimeout(timeout)
      setIsLoading(false)
      
      console.log('✅ Feature flag loaded:', {
        flagKey,
        variant: variant || defaultVariant
      })

      // Track la exposición al test (impression)
      posthog?.capture('ab_test_impression', {
        test_name: flagKey,
        variant: variant || defaultVariant,
        page_path: window.location.pathname
      })

      // También enviar a GA4
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'ab_test_impression', {
          test_name: flagKey,
          variant: variant || defaultVariant,
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
    isLoading,
    trackConversion,
    trackEngagement,
    posthog
  }
}

