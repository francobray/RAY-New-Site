'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import posthog from 'posthog-js'
import { PostHogProvider as PHProvider } from 'posthog-js/react'
import { initPostHog } from '@/lib/posthog'

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  useEffect(() => {
    // Inicializar PostHog
    initPostHog()
  }, [])

  useEffect(() => {
    // Track pageviews manualmente (solo en el cliente)
    if (pathname && typeof window !== 'undefined') {
      const url = window.location.href
      
      // Verificar que PostHog esté cargado antes de capturar
      if (posthog && typeof posthog.capture === 'function') {
        posthog.capture('$pageview', {
          $current_url: url,
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

