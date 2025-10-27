import fs from 'fs'
import path from 'path'

/**
 * Validates that all hero images are using optimized responsive formats
 * Ensures AVIF/WebP with proper srcSet instead of direct PNG/JPEG imports
 */

interface ValidationIssue {
  file: string
  line: number
  severity: 'error' | 'warning'
  message: string
  code?: string
}

const SRC_DIR = path.resolve(process.cwd(), 'src')
const PUBLIC_DIR = path.resolve(process.cwd(), 'public', 'images')

// Known hero images that should use optimized versions
const HERO_IMAGES = [
  'hero-banner',
  'Temple-ordering-2',
  'Temple-website-bookings',
  'Walkins-4',
  'Temple-desktop-order-tracking',
  'Temple-mobile-app',
  'Temple-mobile-app-menu',
  'Temple-App-RealTime-tracking',
  'Temple-website'
]

function walkSourceFiles(dir: string): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  const files: string[] = []
  
  for (const entry of entries) {
    if (entry.name.startsWith('.')) continue
    
    const full = path.join(dir, entry.name)
    
    if (entry.isDirectory()) {
      files.push(...walkSourceFiles(full))
    } else if (entry.name.match(/\.(tsx|jsx)$/)) {
      files.push(full)
    }
  }
  
  return files
}

function relativeFromRoot(p: string): string {
  return path.relative(process.cwd(), p)
}

function checkResponsiveVariantsExist(baseName: string): { avif: boolean; webp: boolean; variants: string[] } {
  const possiblePaths = [
    'home',
    'online-ordering',
    'product-website',
    'walkIns',
    'zero-commission',
    'branded-apps'
  ]

  let avifCount = 0
  let webpCount = 0
  const foundVariants: string[] = []

  for (const subdir of possiblePaths) {
    const dirPath = path.join(PUBLIC_DIR, subdir)
    
    if (!fs.existsSync(dirPath)) continue

    try {
      const files = fs.readdirSync(dirPath)
      
      for (const file of files) {
        if (file.startsWith(baseName) && file.includes('w.')) {
          foundVariants.push(file)
          
          if (file.endsWith('.avif')) avifCount++
          if (file.endsWith('.webp')) webpCount++
        }
      }
    } catch {}
  }

  return {
    avif: avifCount >= 3, // Should have at least 3 responsive sizes
    webp: webpCount >= 3,
    variants: foundVariants
  }
}

async function validateHeroImages(filePath: string): Promise<ValidationIssue[]> {
  const issues: ValidationIssue[] = []
  const content = fs.readFileSync(filePath, 'utf-8')
  const lines = content.split('\n')
  const relativePath = relativeFromRoot(filePath)

  // Check if file is a hero or product page component
  const isHeroComponent = 
    filePath.includes('Hero.tsx') ||
    filePath.includes('/product/') ||
    relativePath.includes('pages/product/')

  if (!isHeroComponent) {
    return issues
  }

  lines.forEach((line, idx) => {
    // Check 1: Direct imports of PNG/JPEG for hero images (BAD - should use optimized versions)
    const importMatch = line.match(/import\s+\w+\s+from\s+['"](.+\.(png|jpg|jpeg))['"]/i)
    if (importMatch) {
      const importPath = importMatch[1]
      const isHeroImage = HERO_IMAGES.some(hero => importPath.includes(hero))
      
      if (isHeroImage) {
        issues.push({
          file: relativePath,
          line: idx + 1,
          severity: 'error',
          message: 'Hero images should not be directly imported. Use <picture> with AVIF/WebP srcSet',
          code: line.trim(),
        })
      }
    }

    // Check 2: Next.js Image with src="/images/..." pointing to PNG/JPEG hero images (BAD)
    const nextImageMatch = line.match(/<Image\s+[^>]*src=["']\/images\/([^"']+\.(png|jpg|jpeg))["']/i)
    if (nextImageMatch) {
      const imagePath = nextImageMatch[1]
      const imageName = path.basename(imagePath, path.extname(imagePath))
      const isHeroImage = HERO_IMAGES.some(hero => imageName.includes(hero))

      if (isHeroImage) {
        // Get more context (multi-line component)
        let componentCode = line
        for (let i = idx + 1; i < Math.min(idx + 10, lines.length); i++) {
          componentCode += ' ' + lines[i].trim()
          if (lines[i].includes('/>') || lines[i].includes('</Image>')) break
        }

        const hasPriority = componentCode.includes('priority') || componentCode.includes('fetchPriority')
        
        issues.push({
          file: relativePath,
          line: idx + 1,
          severity: hasPriority ? 'error' : 'warning',
          message: `Hero image "${imageName}" using unoptimized format. Should use <picture> with responsive AVIF/WebP`,
          code: componentCode.substring(0, 120) + '...',
        })
      }
    }

    // Check 3: <picture> elements should have AVIF sources (GOOD - verify completeness)
    const pictureMatch = line.match(/<picture>/i)
    if (pictureMatch) {
      let pictureBlock = ''
      for (let i = idx; i < Math.min(idx + 30, lines.length); i++) {
        pictureBlock += lines[i] + '\n'
        if (lines[i].includes('</picture>')) break
      }

      // Check if it has AVIF source
      const hasAvif = pictureBlock.includes('type="image/avif"')
      const hasWebp = pictureBlock.includes('type="image/webp"')
      const hasSrcSet = pictureBlock.includes('srcSet=')
      const hasSizes = pictureBlock.includes('sizes=')

      if (!hasAvif) {
        issues.push({
          file: relativePath,
          line: idx + 1,
          severity: 'error',
          message: '<picture> element missing AVIF source (best compression)',
          code: pictureBlock.substring(0, 100) + '...',
        })
      }

      if (!hasWebp) {
        issues.push({
          file: relativePath,
          line: idx + 1,
          severity: 'warning',
          message: '<picture> element missing WebP fallback source',
          code: pictureBlock.substring(0, 100) + '...',
        })
      }

      if (!hasSrcSet) {
        issues.push({
          file: relativePath,
          line: idx + 1,
          severity: 'error',
          message: '<picture> sources should include srcSet for responsive images',
          code: pictureBlock.substring(0, 100) + '...',
        })
      }

      if (!hasSizes) {
        issues.push({
          file: relativePath,
          line: idx + 1,
          severity: 'warning',
          message: '<picture> sources should include sizes attribute for proper image selection',
          code: pictureBlock.substring(0, 100) + '...',
        })
      }

      // Check if fetchPriority="high" is present for hero images
      const hasFetchPriority = pictureBlock.includes('fetchPriority="high"') || pictureBlock.includes("fetchPriority='high'")
      if (isHeroComponent && !hasFetchPriority) {
        issues.push({
          file: relativePath,
          line: idx + 1,
          severity: 'warning',
          message: 'Hero <picture> should include fetchPriority="high" for LCP optimization',
          code: pictureBlock.substring(0, 100) + '...',
        })
      }
    }

    // Check 4: Images with priority/fetchPriority should use optimized formats
    if ((line.includes('priority') || line.includes('fetchPriority="high"')) && line.includes('<Image')) {
      issues.push({
        file: relativePath,
        line: idx + 1,
        severity: 'warning',
        message: 'Priority images should use <picture> with AVIF/WebP instead of Next.js Image',
        code: line.trim().substring(0, 120),
      })
    }
  })

  return issues
}

async function validateResponsiveVariants(): Promise<ValidationIssue[]> {
  const issues: ValidationIssue[] = []

  console.log('\n📁 Checking responsive image variants...\n')

  for (const heroImage of HERO_IMAGES) {
    const { avif, webp, variants } = checkResponsiveVariantsExist(heroImage)

    if (!avif || !webp) {
      issues.push({
        file: 'public/images/',
        line: 0,
        severity: 'error',
        message: `Missing responsive variants for "${heroImage}". Found: ${variants.join(', ') || 'none'}`,
      })
    } else {
      console.log(`  ✅ ${heroImage}: ${variants.length} variants (AVIF ✓, WebP ✓)`)
    }
  }

  return issues
}

async function main() {
  if (!fs.existsSync(SRC_DIR)) {
    console.error(`❌ Source directory not found: ${SRC_DIR}`)
    process.exit(1)
  }

  console.log(`🔍 Validating hero image optimization...\n`)

  const files = walkSourceFiles(SRC_DIR)
  const allIssues: ValidationIssue[] = []

  // Check source code
  for (const file of files) {
    // eslint-disable-next-line no-await-in-loop
    const issues = await validateHeroImages(file)
    allIssues.push(...issues)
  }

  // Check responsive variants exist
  const variantIssues = await validateResponsiveVariants()
  allIssues.push(...variantIssues)

  // Group and display issues
  const errors = allIssues.filter((i) => i.severity === 'error')
  const warnings = allIssues.filter((i) => i.severity === 'warning')

  if (errors.length > 0) {
    console.error('\n❌ ERRORS FOUND:\n')
    errors.forEach((issue) => {
      console.error(`  ❌ ${issue.file}${issue.line > 0 ? `:${issue.line}` : ''}`)
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
      console.warn(`  ⚠️  ${issue.file}${issue.line > 0 ? `:${issue.line}` : ''}`)
      console.warn(`     ${issue.message}`)
      if (issue.code) {
        console.warn(`     Code: ${issue.code}`)
      }
      console.warn('')
    })
  }

  if (errors.length === 0 && warnings.length === 0) {
    console.log('\n✅ All hero images are properly optimized!')
    console.log(`   - ${files.length} component files checked`)
    console.log(`   - ${HERO_IMAGES.length} hero images validated`)
    console.log('   - All using AVIF/WebP with responsive srcSet')
    console.log('   - Responsive variants present')
    return
  }

  // Summary
  console.log('\n' + '='.repeat(70))
  console.log('HERO IMAGE OPTIMIZATION VALIDATION SUMMARY')
  console.log('='.repeat(70))
  console.log(`Component files checked: ${files.length}`)
  console.log(`Hero images tracked: ${HERO_IMAGES.length}`)
  console.log(`Errors: ${errors.length}`)
  console.log(`Warnings: ${warnings.length}`)

  if (errors.length > 0) {
    console.error('\n❌ Hero image validation FAILED!')
    console.error('\n💡 To fix:')
    console.error('   1. Replace Next.js <Image> with <picture> for hero images')
    console.error('   2. Include AVIF sources (primary) and WebP (fallback)')
    console.error('   3. Use srcSet with multiple widths (560w, 640w, 800w, etc.)')
    console.error('   4. Add sizes attribute for proper image selection')
    console.error('   5. Include fetchPriority="high" for LCP images')
    console.error('\n   Example:')
    console.error('   <picture>')
    console.error('     <source type="image/avif" srcSet="img-640w.avif 640w, img-800w.avif 800w" />')
    console.error('     <source type="image/webp" srcSet="img-640w.webp 640w, img-800w.webp 800w" />')
    console.error('     <img src="img-640w.webp" fetchPriority="high" ... />')
    console.error('   </picture>')
    process.exit(1)
  }

  if (warnings.length > 0) {
    console.warn('\n⚠️  Hero image validation passed with warnings.')
    console.warn('   Consider addressing warnings for optimal performance.')
  } else {
    console.log('\n✅ Hero image validation passed!')
  }
}

main().catch((err) => {
  console.error('❌ Fatal error during validation:')
  console.error(err)
  process.exit(1)
})

