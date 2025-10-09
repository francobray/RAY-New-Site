'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}

export default function Analytics() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      // Get search params from window.location to avoid useSearchParams() SSR issues
      const searchParams = new URLSearchParams(window.location.search)
      const url = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : '')
      
      window.gtag('config', 'G-CFH2T8RJ0P', {
        page_path: url,
      })
    }
  }, [pathname])

  return null
}
