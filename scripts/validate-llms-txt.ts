#!/usr/bin/env tsx

import fs from 'fs'
import path from 'path'

/**
 * Validate llms.txt file
 * Ensures the file exists, is properly formatted, and contains all required sections
 */

interface ValidationResult {
  valid: boolean
  errors: string[]
  warnings: string[]
  stats: {
    fileSize: number
    lineCount: number
    urlCount: number
    sectionCount: number
  }
}

function validateLLMsTxt(): ValidationResult {
  const result: ValidationResult = {
    valid: true,
    errors: [],
    warnings: [],
    stats: {
      fileSize: 0,
      lineCount: 0,
      urlCount: 0,
      sectionCount: 0
    }
  }

  const llmsPath = path.join(process.cwd(), 'public', 'llms.txt')

  // Check if file exists
  if (!fs.existsSync(llmsPath)) {
    result.valid = false
    result.errors.push('llms.txt file does not exist in public directory')
    return result
  }

  // Read file content
  const content = fs.readFileSync(llmsPath, 'utf-8')
  const lines = content.split('\n')

  // Update stats
  result.stats.fileSize = Buffer.byteLength(content, 'utf-8')
  result.stats.lineCount = lines.length
  result.stats.urlCount = (content.match(/https:\/\/rayapp\.io/g) || []).length

  // Required sections
  const requiredSections = [
    '# RAY - Restaurant Marketing Platform',
    '## About This Website',
    '## Website Structure',
    '### Product Pages',
    '### Core Pages',
    '### Case Studies',
    '### Legal Pages',
    '## Key Features & Solutions',
    '## Target Audience',
    '## Allowed Uses for AI Systems',
    '## Key Metrics & Results',
    '## Technology Stack',
    '## Contact Information',
    '## Updates & Maintenance',
    '## SEO Keywords & Topics'
  ]

  // Check for required sections
  requiredSections.forEach(section => {
    if (content.includes(section)) {
      result.stats.sectionCount++
    } else {
      result.errors.push(`Missing required section: ${section}`)
      result.valid = false
    }
  })

  // Check file size (should be reasonable, not too small or too large)
  const minSize = 5000 // 5KB
  const maxSize = 50000 // 50KB
  
  if (result.stats.fileSize < minSize) {
    result.errors.push(`File too small (${result.stats.fileSize} bytes). Expected at least ${minSize} bytes`)
    result.valid = false
  } else if (result.stats.fileSize > maxSize) {
    result.warnings.push(`File is large (${result.stats.fileSize} bytes). Consider optimizing.`)
  }

  // Check for last updated date
  const currentYear = new Date().getFullYear()
  if (!content.includes(`**Last Updated:** ${currentYear}`)) {
    result.warnings.push(`Last updated date may be outdated. Expected year ${currentYear}`)
  }

  // Check for minimum number of URLs
  const minUrls = 40 // We have ~21 pages x 2 locales
  if (result.stats.urlCount < minUrls) {
    result.errors.push(`Too few URLs (${result.stats.urlCount}). Expected at least ${minUrls}`)
    result.valid = false
  }

  // Check for required contact information
  const requiredInfo = ['support@rayapp.io', 'https://www.rayapp.io']
  requiredInfo.forEach(info => {
    if (!content.includes(info)) {
      result.errors.push(`Missing required contact information: ${info}`)
      result.valid = false
    }
  })

  // Check for key metrics
  const keyMetrics = ['+47%', '+35%', '+30%', '+27%']
  keyMetrics.forEach(metric => {
    if (!content.includes(metric)) {
      result.warnings.push(`Missing key metric: ${metric}`)
    }
  })

  return result
}

function main() {
  console.log('🔍 Validating llms.txt...\n')
  
  const result = validateLLMsTxt()
  
  // Display stats
  console.log('📊 File Statistics:')
  console.log(`   • File size: ${(result.stats.fileSize / 1024).toFixed(2)} KB`)
  console.log(`   • Line count: ${result.stats.lineCount}`)
  console.log(`   • URL count: ${result.stats.urlCount}`)
  console.log(`   • Sections found: ${result.stats.sectionCount}/15`)
  console.log('')

  // Display errors
  if (result.errors.length > 0) {
    console.log('❌ Errors:')
    result.errors.forEach(error => {
      console.log(`   • ${error}`)
    })
    console.log('')
  }

  // Display warnings
  if (result.warnings.length > 0) {
    console.log('⚠️  Warnings:')
    result.warnings.forEach(warning => {
      console.log(`   • ${warning}`)
    })
    console.log('')
  }

  // Final result
  if (result.valid) {
    console.log('✅ llms.txt is valid!')
    process.exit(0)
  } else {
    console.log('❌ llms.txt validation failed!')
    process.exit(1)
  }
}

if (require.main === module) {
  main()
}

export { validateLLMsTxt }

