'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}

export default function ClientAnalytics() {
  const pathname = usePathname()

  useEffect(() => {
    // Only run on client side after hydration
    if (typeof window !== 'undefined' && window.gtag) {
      // Send page view manually to avoid hydration conflicts
      window.gtag('config', 'G-CFH2T8RJ0P', {
        page_path: pathname,
        send_page_view: true
      })
    }
  }, [pathname])

  return null
}
