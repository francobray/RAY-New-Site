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

const DEFAULT_QUALITY = 78
const WEBP_QUALITY = 78
const AVIF_QUALITY = 50

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

function outputIfMissing(srcPath: string, newExt: string): string | null {
  const dir = path.dirname(srcPath)
  const base = path.basename(srcPath, path.extname(srcPath))
  const out = path.join(dir, `${base}.${newExt}`)
  return fs.existsSync(out) ? null : out
}

async function optimizeFile(filePath: string): Promise<void> {
  if (!isImage(filePath)) return
  const sharp = await getSharp()

  const ext = path.extname(filePath).toLowerCase()
  
  // Check if file is tiny (< 5KB) - skip compression but still create variants
  let skipCompression = false
  try {
    const stat = fs.statSync(filePath)
    if (stat.size < 5 * 1024) {
      skipCompression = true
    }
  } catch {}

  const basePipeline = sharp(filePath)

  // Lossless/lossy compression for source format (skip for tiny files)
  if (!skipCompression) {
    try {
      const tempOut = filePath + '.opt'
      if (ext === '.png') {
        await basePipeline.png({ quality: DEFAULT_QUALITY, compressionLevel: 9, adaptiveFiltering: true }).toFile(tempOut)
      } else if (ext === '.jpg' || ext === '.jpeg') {
        await basePipeline.jpeg({ quality: DEFAULT_QUALITY, mozjpeg: true }).toFile(tempOut)
      } else if (ext === '.webp') {
        await basePipeline.webp({ quality: WEBP_QUALITY }).toFile(tempOut)
      } else if (ext === '.avif') {
        await basePipeline.avif({ quality: AVIF_QUALITY }).toFile(tempOut)
      } else if (ext === '.tiff') {
        await basePipeline.tiff({ quality: DEFAULT_QUALITY }).toFile(tempOut)
      } else if (ext === '.gif') {
        // sharp converts first frame; keep original gif to avoid animation loss; skip source recompress
      }

      if (fs.existsSync(tempOut)) {
        const original = fs.statSync(filePath).size
        const optimized = fs.statSync(tempOut).size
        if (optimized > 0 && optimized < original) {
          fs.renameSync(tempOut, filePath)
          // eslint-disable-next-line no-console
          console.log(`Compressed: ${relativeFromRoot(filePath)} ${(original / 1024).toFixed(1)}KB -> ${(optimized / 1024).toFixed(1)}KB`)
        } else {
          fs.unlinkSync(tempOut)
        }
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.warn(`Skip source compress for ${filePath}:`, (err as Error).message)
    }
  }

  // Generate WebP and AVIF variants if missing
  const outWebp = outputIfMissing(filePath, 'webp')
  if (outWebp) {
    try {
      await sharp(filePath).webp({ quality: WEBP_QUALITY }).toFile(outWebp)
      // eslint-disable-next-line no-console
      console.log(`Created: ${relativeFromRoot(outWebp)}`)
    } catch (err) {
      // eslint-disable-next-line no-console
      console.warn(`Failed WebP for ${filePath}:`, (err as Error).message)
    }
  }

  const outAvif = outputIfMissing(filePath, 'avif')
  if (outAvif) {
    try {
      await sharp(filePath).avif({ quality: AVIF_QUALITY }).toFile(outAvif)
      // eslint-disable-next-line no-console
      console.log(`Created: ${relativeFromRoot(outAvif)}`)
    } catch (err) {
      // eslint-disable-next-line no-console
      console.warn(`Failed AVIF for ${filePath}:`, (err as Error).message)
    }
  }
}

function relativeFromRoot(p: string): string {
  return path.relative(process.cwd(), p)
}

async function main() {
  const dir = INPUT_DIR
  if (!fs.existsSync(dir)) {
    // eslint-disable-next-line no-console
    console.error(`Directory not found: ${relativeFromRoot(dir)}`)
    process.exit(1)
  }

  const files = walk(dir).filter(isImage)
  if (files.length === 0) {
    // eslint-disable-next-line no-console
    console.log('No images found to optimize.')
    return
  }

  // eslint-disable-next-line no-console
  console.log(`Optimizing ${files.length} images under ${relativeFromRoot(dir)} ...`)

  for (const file of files) {
    // Sequential to avoid high memory usage with large batches
    // eslint-disable-next-line no-await-in-loop
    await optimizeFile(file)
  }

  // eslint-disable-next-line no-console
  console.log('Image optimization complete.')
}

main().catch((err) => {
  // eslint-disable-next-line no-console
  console.error(err)
  process.exit(1)
})


