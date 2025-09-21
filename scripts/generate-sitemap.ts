import { writeFileSync, existsSync, mkdirSync } from 'fs'
import path from 'path'
import { SITE_CONFIG } from '../src/config/site.js'

interface SitemapUrl {
  loc: string
  lastmod: string
  priority: number
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
}

export class SitemapGenerator {
  private baseUrl: string
  private urls: SitemapUrl[] = []

  constructor(baseUrl?: string) {
    this.baseUrl = baseUrl || process.env.SITE_URL || 'https://rayapp.io'
  }

  addUrl(url: Partial<SitemapUrl> & { loc: string }): void {
    const today = new Date().toISOString().split('T')[0]
    
    this.urls.push({
      loc: `${this.baseUrl}${url.loc}`,
      lastmod: url.lastmod || today,
      priority: url.priority || 0.5,
      changefreq: url.changefreq || 'monthly'
    })
  }

  generateXml(): string {
    const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>'
    const urlsetOpen = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
    const urlsetClose = '</urlset>'

    const urlElements = this.urls.map(url => {
      return `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <priority>${url.priority}</priority>
    <changefreq>${url.changefreq}</changefreq>
  </url>`
    }).join('\n')

    return `${xmlHeader}\n${urlsetOpen}\n${urlElements}\n${urlsetClose}`
  }

  writeSitemap(outputPath?: string): void {
    const sitemap = this.generateXml()
    const filePath = outputPath || path.join(process.cwd(), 'public', 'sitemap.xml')
    
    // Ensure directory exists
    const dir = path.dirname(filePath)
    if (!existsSync(dir)) {
      mkdirSync(dir, { recursive: true })
    }
    
    writeFileSync(filePath, sitemap, 'utf-8')
    console.log(`✅ Sitemap generated: ${filePath}`)
    console.log(`📊 Total URLs: ${this.urls.length}`)
    console.log(`🌐 Base URL: ${this.baseUrl}`)
  }
}

// Main function to generate sitemap
function generateSitemap(): void {
  const generator = new SitemapGenerator()
  const today = new Date().toISOString().split('T')[0]

  // Main Pages
  generator.addUrl({
    loc: '/',
    lastmod: today,
    priority: 1.0,
    changefreq: 'weekly'
  })

  // Product Pages
  generator.addUrl({
    loc: '/product/bookings',
    lastmod: today,
    priority: 0.9,
    changefreq: 'monthly'
  })
  generator.addUrl({
    loc: '/product/walk-ins',
    lastmod: today,
    priority: 0.9,
    changefreq: 'monthly'
  })
  generator.addUrl({
    loc: '/product/online-orders',
    lastmod: today,
    priority: 0.9,
    changefreq: 'monthly'
  })

  // Core Pages
  generator.addUrl({
    loc: '/pricing',
    lastmod: today,
    priority: 0.8,
    changefreq: 'monthly'
  })
  generator.addUrl({
    loc: '/case-studies',
    lastmod: today,
    priority: 0.8,
    changefreq: 'weekly'
  })
  generator.addUrl({
    loc: '/features',
    lastmod: today,
    priority: 0.7,
    changefreq: 'monthly'
  })

  // Case Studies
  generator.addUrl({
    loc: '/case-studies/temple-craft-wynwood',
    lastmod: today,
    priority: 0.7,
    changefreq: 'monthly'
  })
  generator.addUrl({
    loc: '/case-studies/chimba-miami',
    lastmod: today,
    priority: 0.7,
    changefreq: 'monthly'
  })

  // Company Pages
  generator.addUrl({
    loc: '/about',
    lastmod: today,
    priority: 0.6,
    changefreq: 'monthly'
  })
  generator.addUrl({
    loc: '/contact',
    lastmod: today,
    priority: 0.6,
    changefreq: 'monthly'
  })

  // Legal Pages
  generator.addUrl({
    loc: '/privacy-policy',
    lastmod: today,
    priority: 0.3,
    changefreq: 'yearly'
  })
  generator.addUrl({
    loc: '/terms-of-service',
    lastmod: today,
    priority: 0.3,
    changefreq: 'yearly'
  })
  generator.addUrl({
    loc: '/cookie-policy',
    lastmod: today,
    priority: 0.3,
    changefreq: 'yearly'
  })

  // Generate and write sitemap
  generator.writeSitemap()
}

// CLI usage - Fixed for both ESM and CommonJS environments
const isMainModule = process.argv[1] && (
  import.meta.url === `file://${process.argv[1]}` ||
  import.meta.url.endsWith(process.argv[1])
)

if (isMainModule) {
  try {
    generateSitemap()
    console.log('🎉 Sitemap generation completed successfully!')
  } catch (error) {
    console.error('❌ Error generating sitemap:', error)
    process.exit(1)
  }
}

export { generateSitemap }