import { readFileSync, existsSync } from 'fs'
import { statSync } from 'fs'
import { createRequire } from 'module'
import path from 'path'

const require = createRequire(import.meta.url)

interface ValidationResult {
  isValid: boolean
  errors: string[]
  warnings: string[]
  stats: {
    totalUrls: number
    uniqueUrls: number
    httpsUrls: number
    duplicates: number
  }
}

export class SitemapValidator {
  private sitemapPath: string
  private baseUrl: string

  constructor(sitemapPath?: string, baseUrl?: string) {
    this.sitemapPath = sitemapPath || path.join(process.cwd(), 'public', 'sitemap.xml')
    this.baseUrl = baseUrl || process.env.SITE_URL || 'https://rayapp.io'
  }

  async validate(): Promise<ValidationResult> {
    const result: ValidationResult = {
      isValid: true,
      errors: [],
      warnings: [],
      stats: {
        totalUrls: 0,
        uniqueUrls: 0,
        httpsUrls: 0,
        duplicates: 0
      }
    }

    // Check if sitemap exists
    if (!existsSync(this.sitemapPath)) {
      result.errors.push('Sitemap file not found')
      result.isValid = false
      return result
    }

    // Check if sitemap file is empty
    try {
      const stats = statSync(this.sitemapPath)
      if (stats.size === 0) {
        result.errors.push('Sitemap file is empty')
        result.isValid = false
        return result
      }
    } catch (error) {
      result.errors.push(`Failed to check sitemap file stats: ${error}`)
      result.isValid = false
      return result
    }

    try {
      const content = readFileSync(this.sitemapPath, 'utf-8')
      
      // Basic XML structure validation
      this.validateXmlStructure(content, result)
      
      // Extract and validate URLs
      this.validateUrls(content, result)
      
      // Check for required pages
      this.validateRequiredPages(content, result)
      
      // Validate metadata
      this.validateMetadata(content, result)
      
    } catch (error) {
      result.errors.push(`Failed to read sitemap: ${error}`)
      result.isValid = false
    }

    result.isValid = result.errors.length === 0
    return result
  }

  private validateXmlStructure(content: string, result: ValidationResult): void {
    // Check XML declaration
    if (!content.startsWith('<?xml')) {
      result.errors.push('Missing XML declaration')
    }

    // Check root element
    if (!content.includes('<urlset')) {
      result.errors.push('Missing urlset root element')
    }

    // Check namespace
    if (!content.includes('xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"')) {
      result.warnings.push('Missing or incorrect sitemap namespace')
    }

    // Basic XML well-formedness - check for proper closing tags
    const urlOpenTags = (content.match(/<url>/g) || []).length
    const urlCloseTags = (content.match(/<\/url>/g) || []).length
    const urlsetOpenTags = (content.match(/<urlset[^>]*>/g) || []).length
    const urlsetCloseTags = (content.match(/<\/urlset>/g) || []).length
    
    if (urlOpenTags !== urlCloseTags) {
      result.errors.push(`Mismatched url tags: ${urlOpenTags} open, ${urlCloseTags} close`)
    }
    
    if (urlsetOpenTags !== urlsetCloseTags) {
      result.errors.push(`Mismatched urlset tags: ${urlsetOpenTags} open, ${urlsetCloseTags} close`)
    }
  }

  private validateUrls(content: string, result: ValidationResult): void {
    const urlMatches = content.match(/<loc>(.*?)<\/loc>/g) || []
    const urls = urlMatches.map(match => match.replace(/<\/?loc>/g, ''))
    
    result.stats.totalUrls = urls.length
    
    if (urls.length === 0) {
      result.errors.push('No URLs found in sitemap')
      return
    }

    // Check for duplicates
    const uniqueUrls = new Set(urls)
    result.stats.uniqueUrls = uniqueUrls.size
    result.stats.duplicates = urls.length - uniqueUrls.size
    
    if (result.stats.duplicates > 0) {
      result.errors.push(`Found ${result.stats.duplicates} duplicate URLs`)
    }

    // Validate each URL
    for (const url of urls) {
      try {
        const urlObj = new URL(url)
        
        // Check protocol
        if (urlObj.protocol === 'https:') {
          result.stats.httpsUrls++
        } else if (urlObj.protocol === 'http:') {
          result.warnings.push(`Insecure HTTP URL: ${url}`)
        } else {
          result.errors.push(`Invalid protocol: ${url}`)
        }
        
        // Check if URL belongs to our domain
        if (!url.startsWith(this.baseUrl)) {
          result.warnings.push(`External URL in sitemap: ${url}`)
        }
        
        // Check for common issues
        if (url.includes(' ')) {
          result.errors.push(`URL contains spaces: ${url}`)
        }
        
        if (url.length > 2048) {
          result.warnings.push(`Very long URL (>2048 chars): ${url}`)
        }
        
      } catch (error) {
        result.errors.push(`Invalid URL format: ${url}`)
      }
    }
  }

  private validateRequiredPages(content: string, result: ValidationResult): void {
    const requiredPages = [
      '/',
      '/pricing',
      '/case-studies',
      '/about',
      '/contact'
    ]

    for (const page of requiredPages) {
      // Check for both direct URLs and localized URLs
      const directUrl = `${this.baseUrl}${page}`
      const localizedUrl = `${this.baseUrl}/es${page}`
      
      if (!content.includes(`<loc>${directUrl}</loc>`) && 
          !content.includes(`<loc>${localizedUrl}</loc>`)) {
        result.warnings.push(`Missing important page: ${page}`)
      }
    }
  }

  private validateMetadata(content: string, result: ValidationResult): void {
    // Check for lastmod dates
    const lastmodMatches = content.match(/<lastmod>(.*?)<\/lastmod>/g) || []
    
    for (const match of lastmodMatches) {
      const dateStr = match.replace(/<\/?lastmod>/g, '')
      const date = new Date(dateStr)
      
      if (isNaN(date.getTime())) {
        result.errors.push(`Invalid lastmod date: ${dateStr}`)
      } else if (date > new Date()) {
        result.warnings.push(`Future lastmod date: ${dateStr}`)
      }
    }

    // Check priority values
    const priorityMatches = content.match(/<priority>(.*?)<\/priority>/g) || []
    
    for (const match of priorityMatches) {
      const priority = parseFloat(match.replace(/<\/?priority>/g, ''))
      
      if (isNaN(priority) || priority < 0 || priority > 1) {
        result.errors.push(`Invalid priority value: ${priority}`)
      }
    }

    // Check changefreq values
    const changefreqMatches = content.match(/<changefreq>(.*?)<\/changefreq>/g) || []
    const validFreqs = ['always', 'hourly', 'daily', 'weekly', 'monthly', 'yearly', 'never']
    
    for (const match of changefreqMatches) {
      const freq = match.replace(/<\/?changefreq>/g, '')
      
      if (!validFreqs.includes(freq)) {
        result.errors.push(`Invalid changefreq value: ${freq}`)
      }
    }
  }

  printResults(result: ValidationResult): void {
    console.log('\n📊 Sitemap Validation Results')
    console.log('================================')
    
    // Stats
    console.log(`📈 Statistics:`)
    console.log(`   Total URLs: ${result.stats.totalUrls}`)
    console.log(`   Unique URLs: ${result.stats.uniqueUrls}`)
    console.log(`   HTTPS URLs: ${result.stats.httpsUrls}`)
    console.log(`   Duplicates: ${result.stats.duplicates}`)
    
    // Errors
    if (result.errors.length > 0) {
      console.log(`\n❌ Errors (${result.errors.length}):`)
      result.errors.forEach(error => console.log(`   • ${error}`))
    }
    
    // Warnings
    if (result.warnings.length > 0) {
      console.log(`\n⚠️  Warnings (${result.warnings.length}):`)
      result.warnings.forEach(warning => console.log(`   • ${warning}`))
    }
    
    // Overall result
    console.log(`\n${result.isValid ? '✅' : '❌'} Overall: ${result.isValid ? 'VALID' : 'INVALID'}`)
    console.log('================================\n')
  }
}

// CLI usage
async function main() {
  const validator = new SitemapValidator()
  const result = await validator.validate()
  
  validator.printResults(result)
  
  if (!result.isValid) {
    process.exit(1)
  }
}

if (require.main === module) {
  main()
}