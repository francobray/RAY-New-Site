'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

declare global {
  interface Window {
    gtag: (...args: any[]) => void
    dataLayer: any[]
  }
}

export default function ClientAnalytics() {
  const pathname = usePathname()

  useEffect(() => {
    // Only run on client side after hydration
    if (typeof window === 'undefined') return

    // Initialize Google Analytics client-side only
    const loadGoogleAnalytics = () => {
      // Initialize dataLayer
      window.dataLayer = window.dataLayer || []
      
      // Define gtag function
      function gtag(...args: any[]) {
        window.dataLayer.push(args)
      }
      
      // Set gtag on window
      window.gtag = gtag
      
      // Load the GA script
      const script = document.createElement('script')
      script.async = true
      script.src = 'https://www.googletagmanager.com/gtag/js?id=G-CFH2T8RJ0P'
      script.setAttribute('data-cfasync', 'false')
      document.head.appendChild(script)
      
      // Initialize GA
      gtag('js', new Date())
      gtag('config', 'G-CFH2T8RJ0P', {
        page_path: pathname,
        send_page_view: true
      })
    }

    // Load GA after a short delay to ensure hydration is complete
    const timer = setTimeout(loadGoogleAnalytics, 100)
    
    return () => clearTimeout(timer)
  }, [pathname])

  return null
}
