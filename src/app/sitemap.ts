import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'
import { type Locale } from '../lib/i18n'

// Configuration
const BASE_URL = 'https://www.rayapp.io'
const LOCALES: Locale[] = ['es', 'en']

// Static routes that don't follow the [locale] pattern
const STATIC_ROUTES = [
  { path: '/', priority: 1.0, changefreq: 'weekly' },
]

// Core pages that exist for all locales
const CORE_ROUTES = [
  { path: '/pricing', priority: 0.8, changefreq: 'monthly' },
  { path: '/how-it-works', priority: 0.8, changefreq: 'monthly' },
  { path: '/case-studies', priority: 0.8, changefreq: 'weekly' },
  { path: '/features', priority: 0.7, changefreq: 'monthly' },
  { path: '/about', priority: 0.6, changefreq: 'monthly' },
  { path: '/careers', priority: 0.6, changefreq: 'monthly' },
  { path: '/contact', priority: 0.6, changefreq: 'monthly' },
  { path: '/partner', priority: 0.7, changefreq: 'monthly' },
  { path: '/demo', priority: 0.7, changefreq: 'monthly' },
]

// Legal pages (noindex by design). Excluded from sitemap by default to avoid warnings.
const LEGAL_ROUTES = [
  { path: '/privacy-policy', priority: 0.3, changefreq: 'yearly' },
  { path: '/terms-of-service', priority: 0.3, changefreq: 'yearly' },
  { path: '/cookie-policy', priority: 0.3, changefreq: 'yearly' },
]
const INCLUDE_LEGAL_IN_SITEMAP = process.env.INCLUDE_LEGAL_IN_SITEMAP === 'true'

/**
 * Dynamically discover product pages from the filesystem
 */
function getProductPages(): string[] {
  const productDir = path.join(process.cwd(), 'src/app/[locale]/product')
  
  if (!fs.existsSync(productDir)) {
    console.warn('Product directory not found, using fallback routes')
    return [
      'restaurant-website-ai',
      'walk-ins', 
      'zero-commission-delivery',
      'online-orders',
      'branded-apps',
      'loyalty',
      'direct-bookings',
      'walk-ins',
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
 * Dynamically discover case study pages from the case study page data
 * This reads the generateStaticParams export to get all case study slugs
 */
async function getCaseStudies(): Promise<string[]> {
  try {
    // Import the case study page module
    const caseStudyModule = await import('./[locale]/case-studies/[slug]/page')
    
    // Get the static params (which contain all slugs)
    const params = await caseStudyModule.generateStaticParams()
    
    // Extract slugs from the params
    return params.map((param: { slug: string }) => param.slug).sort()
  } catch (error) {
    console.warn('Error reading case studies from page module:', error)
    // Fallback to hardcoded list if import fails
    return [
      'chimba-miami',
      'temple',
      'havana-1957',
      'green-eat',
      'havanna',
      'craft',
      'wingsfc',
      'dolcezza',
      'la-birra-bar',
      'almacen-de-pizzas',
      'isla-bar',
      'la-parolaccia',
      'libertino-cafe',
      'cerveza-patagonia',
      'karne-garibaldi',
      'la-guitarrita',
      'le-pain-quotidien',
      'la-panera-rosa',
      'ninina',
      'pasta-rossa',
      'rapanui',
      'tea-connection',
      'tostado',
      'ypf-full',
      'oh-mexico',
      'mercato-della-pescheria',
      'barsecco',
      'salty-flame',
      'paperfish',
      'marabu',
      'cortadito-cafe'
    ].sort()
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
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
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

  // Add case studies for each locale (dynamically discovered)
  const caseStudies = await getCaseStudies()
  caseStudies.forEach(study => {
    LOCALES.forEach(locale => {
      sitemap.push(createLocalizedSitemapEntry(
        locale, 
        `/case-studies/${study}`, 
        0.7, 
        'monthly'
      ))
    })
  })

  // Add legal pages for each locale (opt-in only)
  if (INCLUDE_LEGAL_IN_SITEMAP) {
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
  }

  // Sort by priority (highest first) then by URL
  return sitemap.sort((a, b) => {
    if (a.priority !== b.priority) {
      return (b.priority || 0) - (a.priority || 0)
    }
    return a.url.localeCompare(b.url)
  })
}
