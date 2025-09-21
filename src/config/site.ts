import { ENV } from './env'

// Centralized site configuration - SINGLE SOURCE OF TRUTH
export const SITE_CONFIG = {
  // Canonical domain - NO EXCEPTIONS
  CANONICAL_URL: ENV.SITE_URL,
  CANONICAL_DOMAIN: 'rayapp.io',
  
  // Site metadata
  SITE_NAME: 'RAY',
  SITE_TITLE: 'RAY - Increase Restaurant Revenue',
  SITE_DESCRIPTION: 'RAY is the #1 sales platform helping restaurant owners and operators attract more customers, grow revenue from walk-ins, orders, and bookings, and protect their reputation.',
  
  // Social
  TWITTER_HANDLE: '@rayrestaurant',
  
  // Contact
  CONTACT_EMAIL: 'hello@rayapp.io',
  SUPPORT_EMAIL: 'support@rayapp.io',
  
  // Analytics & Tracking
  HUBSPOT_PORTAL_ID: ENV.HUBSPOT_PORTAL_ID,
  HUBSPOT_REGION: ENV.HUBSPOT_REGION,
  
  // SEO limits
  META_DESCRIPTION_MAX: 160,
  TITLE_MAX: 60,
  
  // Open Graph image dimensions
  OG_IMAGE: {
    WIDTH: 1200,
    HEIGHT: 630,
    DEFAULT: '/images/logo-rayapp-azulwebp-300x150.webp'
  },
  
  // Build info
  BUILD_TIMESTAMP: ENV.BUILD_TIMESTAMP,
  BUILD_VERSION: ENV.BUILD_VERSION
} as const

// Helper functions for URL generation
export const getCanonicalUrl = (path: string = ''): string => {
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  return `${SITE_CONFIG.CANONICAL_URL}${cleanPath}`
}

export const getAbsoluteUrl = (path: string): string => {
  return getCanonicalUrl(path)
}

// Validate that we're only using canonical domain
export const validateCanonicalDomain = (url: string): boolean => {
  try {
    const urlObj = new URL(url)
    return urlObj.hostname === SITE_CONFIG.CANONICAL_DOMAIN
  } catch {
    return false
  }
}