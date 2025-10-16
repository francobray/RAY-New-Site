#!/usr/bin/env tsx

import fs from 'fs'
import path from 'path'

/**
 * Generate static sitemap.xml file from Next.js dynamic sitemap
 * This script runs the sitemap function and outputs the result to public/sitemap.xml
 */

async function generateStaticSitemap() {
  try {
    console.log('🚀 Generating sitemap.xml...')
    
    // Import the sitemap function
    const { default: sitemapFunction } = await import('../src/app/sitemap')
    
    // Generate sitemap data (await since it's now async)
    const sitemapData = await sitemapFunction()
    
    // Convert to XML format
    const xmlContent = generateXMLSitemap(sitemapData)
    
    // Write to public directory
    const publicDir = path.join(process.cwd(), 'public')
    const sitemapPath = path.join(publicDir, 'sitemap.xml')
    
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true })
    }
    
    fs.writeFileSync(sitemapPath, xmlContent, 'utf-8')
    
    console.log(`✅ Sitemap generated successfully!`)
    console.log(`📊 Total URLs: ${sitemapData.length}`)
    console.log(`📁 Location: ${sitemapPath}`)
    
    // Show summary
    const summary = getSitemapSummary(sitemapData)
    console.log('\n📈 Sitemap Summary:')
    console.log(`   • Main pages: ${summary.mainPages}`)
    console.log(`   • Product pages: ${summary.productPages}`)
    console.log(`   • Core pages: ${summary.corePages}`)
    console.log(`   • Case studies: ${summary.caseStudies}`)
    console.log(`   • Legal pages: ${summary.legalPages}`)
    
  } catch (error) {
    console.error('❌ Error generating sitemap:', error)
    process.exit(1)
  }
}

function generateXMLSitemap(sitemapData: any[]): string {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`

  sitemapData.forEach(entry => {
    xml += `
  <url>
    <loc>${entry.url}</loc>
    <lastmod>${entry.lastModified}</lastmod>
    <changefreq>${entry.changeFrequency}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`
  })

  xml += `
</urlset>`

  return xml
}

function getSitemapSummary(sitemapData: any[]) {
  const summary = {
    mainPages: 0,
    productPages: 0,
    corePages: 0,
    caseStudies: 0,
    legalPages: 0
  }

  sitemapData.forEach(entry => {
    const url = entry.url
    
    if (url.includes('/product/')) {
      summary.productPages++
    } else if (url.includes('/case-studies/')) {
      summary.caseStudies++
    } else if (url.includes('/privacy-policy') || url.includes('/terms-of-service') || url.includes('/cookie-policy')) {
      summary.legalPages++
    } else if (url.includes('/pricing') || url.includes('/about') || url.includes('/contact') || url.includes('/demo') || url.includes('/features')) {
      summary.corePages++
    } else if (url.endsWith('/es') || url.endsWith('/en') || url === 'https://www.rayapp.io/') {
      summary.mainPages++
    }
  })

  return summary
}

// Run if called directly
if (require.main === module) {
  generateStaticSitemap()
}

export { generateStaticSitemap }
