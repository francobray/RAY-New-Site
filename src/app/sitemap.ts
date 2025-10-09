import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'
import { type Locale } from '../lib/i18n'

// Configuration
const BASE_URL = 'https://rayapp.io'
const LOCALES: Locale[] = ['es', 'en']

// Static routes that don't follow the [locale] pattern
const STATIC_ROUTES = [
  { path: '/', priority: 1.0, changefreq: 'weekly' },
]

// Core pages that exist for all locales
const CORE_ROUTES = [
  { path: '/pricing', priority: 0.8, changefreq: 'monthly' },
  { path: '/case-studies', priority: 0.8, changefreq: 'weekly' },
  { path: '/features', priority: 0.7, changefreq: 'monthly' },
  { path: '/about', priority: 0.6, changefreq: 'monthly' },
  { path: '/contact', priority: 0.6, changefreq: 'monthly' },
  { path: '/demo', priority: 0.7, changefreq: 'monthly' },
]

// Legal pages
const LEGAL_ROUTES = [
  { path: '/privacy-policy', priority: 0.3, changefreq: 'yearly' },
  { path: '/terms-of-service', priority: 0.3, changefreq: 'yearly' },
  { path: '/cookie-policy', priority: 0.3, changefreq: 'yearly' },
]

// Case studies (static data)
const CASE_STUDIES = [
  'temple-craft-wynwood',
  'chimba-miami'
]

/**
 * Dynamically discover product pages from the filesystem
 */
function getProductPages(): string[] {
  const productDir = path.join(process.cwd(), 'src/app/[locale]/product')
  
  if (!fs.existsSync(productDir)) {
    console.warn('Product directory not found, using fallback routes')
    return [
      'restaurant-website-ai',
      'automated-marketing', 
      'zero-commission-delivery',
      'online-orders',
      'branded-apps',
      'loyalty',
      'direct-bookings',
      'walk-ins',
      'ai-concierge',
      'whatsapp-delivery'
    ]
  }

  try {
    const items = fs.readdirSync(productDir, { withFileTypes: true })
    return items
      .filter(item => item.isDirectory())
      .map(item => item.name)
      .filter(name => name !== 'page.tsx') // Exclude any page files
      .sort()
  } catch (error) {
    console.warn('Error reading product directory:', error)
    return []
  }
}

/**
 * Generate sitemap entry for a route
 */
function createSitemapEntry(
  path: string, 
  priority: number = 0.5, 
  changefreq: string = 'monthly'
): MetadataRoute.Sitemap[0] {
  const today = new Date().toISOString().split('T')[0]
  
  return {
    url: `${BASE_URL}${path}`,
    lastModified: today,
    changeFrequency: changefreq as any,
    priority,
  }
}

/**
 * Generate sitemap entry for localized route
 */
function createLocalizedSitemapEntry(
  locale: Locale,
  path: string,
  priority: number = 0.5,
  changefreq: string = 'monthly'
): MetadataRoute.Sitemap[0] {
  const today = new Date().toISOString().split('T')[0]
  
  return {
    url: `${BASE_URL}/${locale}${path}`,
    lastModified: today,
    changeFrequency: changefreq as any,
    priority,
  }
}

/**
 * Main sitemap generator
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const sitemap: MetadataRoute.Sitemap = []
  
  // Add static routes (root)
  STATIC_ROUTES.forEach(route => {
    sitemap.push(createSitemapEntry(route.path, route.priority, route.changefreq))
  })

  // Add localized main pages
  LOCALES.forEach(locale => {
    sitemap.push(createLocalizedSitemapEntry(locale, '', 1.0, 'weekly'))
  })

  // Add product pages for each locale
  const productPages = getProductPages()
  productPages.forEach(product => {
    LOCALES.forEach(locale => {
      sitemap.push(createLocalizedSitemapEntry(
        locale, 
        `/product/${product}`, 
        0.9, 
        'monthly'
      ))
    })
  })

  // Add core pages for each locale
  CORE_ROUTES.forEach(route => {
    LOCALES.forEach(locale => {
      sitemap.push(createLocalizedSitemapEntry(
        locale, 
        route.path, 
        route.priority, 
        route.changefreq
      ))
    })
  })

  // Add case studies for each locale
  CASE_STUDIES.forEach(study => {
    LOCALES.forEach(locale => {
      sitemap.push(createLocalizedSitemapEntry(
        locale, 
        `/case-studies/${study}`, 
        0.7, 
        'monthly'
      ))
    })
  })

  // Add legal pages for each locale
  LEGAL_ROUTES.forEach(route => {
    LOCALES.forEach(locale => {
      sitemap.push(createLocalizedSitemapEntry(
        locale, 
        route.path, 
        route.priority, 
        route.changefreq
      ))
    })
  })

  // Sort by priority (highest first) then by URL
  return sitemap.sort((a, b) => {
    if (a.priority !== b.priority) {
      return (b.priority || 0) - (a.priority || 0)
    }
    return a.url.localeCompare(b.url)
  })
}
