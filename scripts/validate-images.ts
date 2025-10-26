import fs from 'fs'
import path from 'path'

// Lazy import sharp to avoid requiring it during type-checks if not installed
let sharpLib: typeof import('sharp') | null = null
async function getSharp() {
  if (!sharpLib) {
    const mod = await import('sharp')
    sharpLib = mod.default || (mod as unknown as typeof import('sharp'))
  }
  return sharpLib!
}

type SupportedInput = 'jpg' | 'jpeg' | 'png' | 'webp' | 'gif' | 'tiff' | 'avif'

const INPUT_DIR = path.resolve(process.cwd(), 'public', 'images')
const VALID_EXT: SupportedInput[] = ['jpg', 'jpeg', 'png', 'webp', 'gif', 'tiff', 'avif']

// Validation thresholds
const MAX_IMAGE_SIZE_KB = 500 // Warn if source images > 500KB (likely not optimized)
const MAX_DIMENSIONS = 3840 // Max width/height (4K)
const MIN_DIMENSIONS = 1 // Min width/height

interface ValidationIssue {
  file: string
  severity: 'error' | 'warning'
  message: string
}

function isImage(filePath: string): boolean {
  const ext = path.extname(filePath).toLowerCase().replace('.', '')
  return VALID_EXT.includes(ext as SupportedInput)
}

function walk(dir: string): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  const files: string[] = []
  for (const entry of entries) {
    if (entry.name.startsWith('.')) continue
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...walk(full))
    } else {
      files.push(full)
    }
  }
  return files
}

function relativeFromRoot(p: string): string {
  return path.relative(process.cwd(), p)
}

function hasVariant(srcPath: string, ext: string): boolean {
  const dir = path.dirname(srcPath)
  const base = path.basename(srcPath, path.extname(srcPath))
  const variant = path.join(dir, `${base}.${ext}`)
  return fs.existsSync(variant)
}

async function validateImage(filePath: string): Promise<ValidationIssue[]> {
  const issues: ValidationIssue[] = []
  const relativePath = relativeFromRoot(filePath)
  const ext = path.extname(filePath).toLowerCase()

  // Skip WebP and AVIF files from variant checks (they ARE the variants)
  const isVariantFormat = ext === '.webp' || ext === '.avif'

  try {
    // Check file size
    const stat = fs.statSync(filePath)
    const sizeKB = stat.size / 1024

    // Source formats (JPG, PNG) should have WebP/AVIF variants
    if (!isVariantFormat && (ext === '.jpg' || ext === '.jpeg' || ext === '.png')) {
      // Check for WebP variant
      if (!hasVariant(filePath, 'webp')) {
        issues.push({
          file: relativePath,
          severity: 'error',
          message: 'Missing WebP variant',
        })
      }

      // Check for AVIF variant
      if (!hasVariant(filePath, 'avif')) {
        issues.push({
          file: relativePath,
          severity: 'error',
          message: 'Missing AVIF variant',
        })
      }

      // Check if source file is too large (likely not optimized)
      if (sizeKB > MAX_IMAGE_SIZE_KB) {
        issues.push({
          file: relativePath,
          severity: 'warning',
          message: `Large file size (${sizeKB.toFixed(1)}KB > ${MAX_IMAGE_SIZE_KB}KB) - may need optimization`,
        })
      }
    }

    // Get image metadata using sharp
    const sharp = await getSharp()
    const metadata = await sharp(filePath).metadata()

    // Check dimensions
    if (metadata.width && metadata.height) {
      if (metadata.width < MIN_DIMENSIONS || metadata.height < MIN_DIMENSIONS) {
        issues.push({
          file: relativePath,
          severity: 'error',
          message: `Invalid dimensions: ${metadata.width}x${metadata.height}px (too small)`,
        })
      }

      if (metadata.width > MAX_DIMENSIONS || metadata.height > MAX_DIMENSIONS) {
        issues.push({
          file: relativePath,
          severity: 'warning',
          message: `Large dimensions: ${metadata.width}x${metadata.height}px (consider resizing for web)`,
        })
      }
    } else {
      issues.push({
        file: relativePath,
        severity: 'error',
        message: 'Unable to read image dimensions',
      })
    }

    // Check for corruption
    if (!metadata.format) {
      issues.push({
        file: relativePath,
        severity: 'error',
        message: 'Unable to detect image format (possibly corrupted)',
      })
    }
  } catch (err) {
    issues.push({
      file: relativePath,
      severity: 'error',
      message: `Failed to validate: ${(err as Error).message}`,
    })
  }

  return issues
}

async function main() {
  const dir = INPUT_DIR
  if (!fs.existsSync(dir)) {
    console.error(`❌ Directory not found: ${relativeFromRoot(dir)}`)
    process.exit(1)
  }

  const files = walk(dir).filter(isImage)
  if (files.length === 0) {
    console.log('✅ No images found to validate.')
    return
  }

  console.log(`🔍 Validating ${files.length} images under ${relativeFromRoot(dir)} ...\n`)

  const allIssues: ValidationIssue[] = []

  for (const file of files) {
    // Sequential to avoid high memory usage with large batches
    // eslint-disable-next-line no-await-in-loop
    const issues = await validateImage(file)
    allIssues.push(...issues)
  }

  // Group and display issues
  const errors = allIssues.filter((i) => i.severity === 'error')
  const warnings = allIssues.filter((i) => i.severity === 'warning')

  if (errors.length > 0) {
    console.error('\n❌ ERRORS FOUND:\n')
    errors.forEach((issue) => {
      console.error(`  ❌ ${issue.file}`)
      console.error(`     ${issue.message}`)
    })
  }

  if (warnings.length > 0) {
    console.warn('\n⚠️  WARNINGS:\n')
    warnings.forEach((issue) => {
      console.warn(`  ⚠️  ${issue.file}`)
      console.warn(`     ${issue.message}`)
    })
  }

  if (errors.length === 0 && warnings.length === 0) {
    console.log('\n✅ All images validated successfully!')
    console.log(`   - ${files.length} images checked`)
    console.log('   - All images have proper dimensions')
    console.log('   - All images have WebP and AVIF variants')
    console.log('   - All images are properly optimized')
    return
  }

  // Summary
  console.log('\n' + '='.repeat(60))
  console.log('VALIDATION SUMMARY')
  console.log('='.repeat(60))
  console.log(`Total images checked: ${files.length}`)
  console.log(`Errors: ${errors.length}`)
  console.log(`Warnings: ${warnings.length}`)

  if (errors.length > 0) {
    console.error('\n❌ Image validation FAILED!')
    console.error('\n💡 To fix these issues, run:')
    console.error('   npm run optimize:images')
    console.error('\n   This will:')
    console.error('   - Generate missing WebP and AVIF variants')
    console.error('   - Optimize large images')
    console.error('   - Fix any optimization issues')
    process.exit(1)
  }

  if (warnings.length > 0) {
    console.warn('\n⚠️  Image validation passed with warnings.')
    console.warn('   Consider running: npm run optimize:images')
  } else {
    console.log('\n✅ Image validation passed!')
  }
}

main().catch((err) => {
  console.error('❌ Fatal error during validation:')
  console.error(err)
  process.exit(1)
})

