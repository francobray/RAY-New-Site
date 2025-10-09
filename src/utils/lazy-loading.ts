/**
 * Lazy loading utilities for performance optimization
 * Helps reduce initial bundle size by loading components on demand
 */

import { lazy } from 'react'

// Lazy load heavy components
export const LazyTestimonialCarousel = lazy(() => import('@/components/TestimonialCarousel'))
export const LazyFAQ = lazy(() => import('@/components/FAQ'))
export const LazyProductSection = lazy(() => import('@/components/ProductSection'))

// Preload critical resources
export const preloadCriticalResources = () => {
  if (typeof document === 'undefined') return

  // Preload critical fonts
  const fontPreload = document.createElement('link')
  fontPreload.rel = 'preload'
  fontPreload.as = 'font'
  fontPreload.type = 'font/woff2'
  fontPreload.crossOrigin = 'anonymous'
  document.head.appendChild(fontPreload)

  // Preload critical images
  const criticalImages = [
    '/images/logo-rayapp-azulwebp-300x150.webp',
    // Add other critical images here
  ]

  criticalImages.forEach((src) => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'image'
    link.href = src
    document.head.appendChild(link)
  })
}
