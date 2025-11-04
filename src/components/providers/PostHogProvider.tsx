'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import posthog from 'posthog-js'
import { PostHogProvider as PHProvider } from 'posthog-js/react'
import { initPostHog } from '@/lib/posthog'

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  useEffect(() => {
    console.log('📦 PostHogProvider mounted, initializing PostHog...', {
      pathname,
      timestamp: new Date().toISOString()
    })
    
    // Inicializar PostHog
    const ph = initPostHog()
    
    console.log('📦 PostHogProvider: initPostHog returned', {
      hasPostHog: !!ph,
      hasCapture: typeof ph?.capture === 'function',
      isLoaded: ph?.__loaded
    })
  }, [])

  useEffect(() => {
    // Track pageviews manualmente (solo en el cliente)
    if (pathname && typeof window !== 'undefined') {
      const url = window.location.href
      
      console.log('🔄 PostHogProvider: Page changed', { pathname, url })
      
      // Verificar que PostHog esté cargado antes de capturar
      if (posthog && typeof posthog.capture === 'function') {
        console.log('📊 PostHogProvider: Tracking pageview', { url })
        posthog.capture('$pageview', {
          $current_url: url,
        })
      } else {
        console.warn('⚠️ PostHogProvider: PostHog not ready for pageview tracking', {
          hasPostHog: !!posthog,
          hasCapture: typeof posthog?.capture === 'function'
        })
      }

      // También enviar a GA4 si existe
      if (window.gtag) {
        window.gtag('event', 'page_view', {
          page_path: pathname,
          page_location: url
        })
      }
    }
  }, [pathname])

  return <PHProvider client={posthog}>{children}</PHProvider>
}

