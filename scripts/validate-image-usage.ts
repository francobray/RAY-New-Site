import fs from 'fs'
import path from 'path'

/**
 * Validates that all Image components in code have proper width/height attributes
 * Prevents layout shifts by ensuring dimensions are specified
 */

interface ValidationIssue {
  file: string
  line: number
  severity: 'error' | 'warning'
  message: string
  code?: string
}

const SRC_DIR = path.resolve(process.cwd(), 'src')

function walkSourceFiles(dir: string): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  const files: string[] = []
  
  for (const entry of entries) {
    if (entry.name.startsWith('.')) continue
    
    const full = path.join(dir, entry.name)
    
    if (entry.isDirectory()) {
      files.push(...walkSourceFiles(full))
    } else if (entry.name.match(/\.(tsx|jsx|ts|js)$/)) {
      files.push(full)
    }
  }
  
  return files
}

function relativeFromRoot(p: string): string {
  return path.relative(process.cwd(), p)
}

async function validateImageUsage(filePath: string): Promise<ValidationIssue[]> {
  const issues: ValidationIssue[] = []
  const content = fs.readFileSync(filePath, 'utf-8')
  const lines = content.split('\n')
  const relativePath = relativeFromRoot(filePath)

  // Check if file uses next/image
  const usesNextImage = content.includes('next/image') || content.includes('from "next/image"')
  
  if (!usesNextImage) {
    // Check for raw <img> tags (should use Next Image)
    lines.forEach((line, idx) => {
      const imgMatch = line.match(/<img\s/i)
      if (imgMatch) {
        issues.push({
          file: relativePath,
          line: idx + 1,
          severity: 'warning',
          message: 'Consider using Next.js Image component instead of <img> for optimization',
          code: line.trim(),
        })
      }
    })
    
    return issues
  }

  // Validate Next.js Image components have width/height or fill
  lines.forEach((line, idx) => {
    // Match <Image ... /> or <Image ...>
    const imageMatch = line.match(/<Image\s/i)
    
    if (imageMatch) {
      // Check if this is a multi-line component (opening tag without closing)
      let componentCode = line
      
      // If line doesn't end with /> or >, look ahead
      if (!line.trim().endsWith('/>') && !line.trim().endsWith('>')) {
        for (let i = idx + 1; i < Math.min(idx + 20, lines.length); i++) {
          componentCode += '\n' + lines[i]
          if (lines[i].includes('/>') || lines[i].includes('</Image>')) {
            break
          }
        }
      }

      // Check for required size attributes
      const hasWidth = componentCode.includes('width=')
      const hasHeight = componentCode.includes('height=')
      const hasFill = componentCode.includes('fill')
      const hasSizes = componentCode.includes('sizes=')
      
      // Image must have either (width + height) OR fill
      if (!hasFill && (!hasWidth || !hasHeight)) {
        issues.push({
          file: relativePath,
          line: idx + 1,
          severity: 'error',
          message: `Image component missing size attributes. Need either "width" + "height" OR "fill" prop`,
          code: componentCode.trim().substring(0, 100) + (componentCode.length > 100 ? '...' : ''),
        })
      }
      
      // If using fill, should have sizes for responsive images
      if (hasFill && !hasSizes) {
        issues.push({
          file: relativePath,
          line: idx + 1,
          severity: 'warning',
          message: 'Image with "fill" should include "sizes" prop for responsive optimization',
          code: componentCode.trim().substring(0, 100) + (componentCode.length > 100 ? '...' : ''),
        })
      }

      // Check for priority on above-fold images
      const hasPriority = componentCode.includes('priority')
      const hasFetchPriority = componentCode.includes('fetchPriority')
      
      // This is a heuristic - check if it's likely in Hero or above-fold components
      const isLikelyAboveFold = filePath.includes('Hero') || filePath.includes('hero')
      
      if (isLikelyAboveFold && !hasPriority && !hasFetchPriority) {
        issues.push({
          file: relativePath,
          line: idx + 1,
          severity: 'warning',
          message: 'Hero/above-fold images should have "priority" or "fetchPriority" for LCP',
          code: componentCode.trim().substring(0, 100) + (componentCode.length > 100 ? '...' : ''),
        })
      }
    }
  })

  return issues
}

async function main() {
  if (!fs.existsSync(SRC_DIR)) {
    console.error(`❌ Source directory not found: ${SRC_DIR}`)
    process.exit(1)
  }

  console.log(`🔍 Validating image usage in source code...\n`)

  const files = walkSourceFiles(SRC_DIR)
  const allIssues: ValidationIssue[] = []

  for (const file of files) {
    // eslint-disable-next-line no-await-in-loop
    const issues = await validateImageUsage(file)
    allIssues.push(...issues)
  }

  // Group and display issues
  const errors = allIssues.filter((i) => i.severity === 'error')
  const warnings = allIssues.filter((i) => i.severity === 'warning')

  if (errors.length > 0) {
    console.error('\n❌ ERRORS FOUND:\n')
    errors.forEach((issue) => {
      console.error(`  ❌ ${issue.file}:${issue.line}`)
      console.error(`     ${issue.message}`)
      if (issue.code) {
        console.error(`     Code: ${issue.code}`)
      }
      console.error('')
    })
  }

  if (warnings.length > 0) {
    console.warn('\n⚠️  WARNINGS:\n')
    warnings.forEach((issue) => {
      console.warn(`  ⚠️  ${issue.file}:${issue.line}`)
      console.warn(`     ${issue.message}`)
      if (issue.code) {
        console.warn(`     Code: ${issue.code}`)
      }
      console.warn('')
    })
  }

  if (errors.length === 0 && warnings.length === 0) {
    console.log('✅ All Image components are properly configured!')
    console.log(`   - ${files.length} source files checked`)
    console.log('   - All images have width/height or fill')
    console.log('   - No layout shift issues detected')
    return
  }

  // Summary
  console.log('\n' + '='.repeat(60))
  console.log('IMAGE USAGE VALIDATION SUMMARY')
  console.log('='.repeat(60))
  console.log(`Total source files checked: ${files.length}`)
  console.log(`Errors: ${errors.length}`)
  console.log(`Warnings: ${warnings.length}`)

  if (errors.length > 0) {
    console.error('\n❌ Image usage validation FAILED!')
    console.error('\n💡 To fix:')
    console.error('   1. Add width and height props to Image components')
    console.error('   2. OR use fill prop for responsive images')
    console.error('   3. Add "sizes" prop when using fill')
    console.error('\n   Example:')
    console.error('   <Image src="/img.jpg" width={800} height={600} alt="..." />')
    console.error('   <Image src="/img.jpg" fill sizes="(max-width: 768px) 100vw, 50vw" alt="..." />')
    process.exit(1)
  }

  if (warnings.length > 0) {
    console.warn('\n⚠️  Image usage validation passed with warnings.')
    console.warn('   Consider addressing warnings for better performance.')
  } else {
    console.log('\n✅ Image usage validation passed!')
  }
}

main().catch((err) => {
  console.error('❌ Fatal error during validation:')
  console.error(err)
  process.exit(1)
})

