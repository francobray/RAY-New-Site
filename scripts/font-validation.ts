import { existsSync, statSync } from 'fs'
import { createRequire } from 'module'
import path from 'path'

const require = createRequire(import.meta.url)

interface FontValidationResult {
  isValid: boolean
  errors: string[]
  warnings: string[]
  recommendations: string[]
}

export class FontValidator {
  private fontPath: string
  private publicPath: string

  constructor(fontPath?: string, publicPath?: string) {
    this.fontPath = fontPath || path.join(process.cwd(), 'public', 'fonts', 'Inter-Variable.woff2')
    this.publicPath = publicPath || path.join(process.cwd(), 'public')
  }

  async validate(): Promise<FontValidationResult> {
    const result: FontValidationResult = {
      isValid: true,
      errors: [],
      warnings: [],
      recommendations: []
    }

    // Check if font file exists
    this.validateFileExists(result)
    
    // Check file permissions
    this.validateFilePermissions(result)
    
    // Check file size
    this.validateFileSize(result)
    
    // Check file path case sensitivity
    this.validateCaseSensitivity(result)
    
    // Validate font loading implementation
    this.validateFontLoadingImplementation(result)
    
    // Add recommendations
    this.addRecommendations(result)

    result.isValid = result.errors.length === 0
    return result
  }

  private validateFileExists(result: FontValidationResult): void {
    if (!existsSync(this.fontPath)) {
      result.errors.push(`Font file not found at: ${this.fontPath}`)
      return
    }

    // Check if it's actually a file
    const stats = statSync(this.fontPath)
    if (!stats.isFile()) {
      result.errors.push(`Path exists but is not a file: ${this.fontPath}`)
    }
  }

  private validateFilePermissions(result: FontValidationResult): void {
    try {
      const stats = statSync(this.fontPath)
      const mode = stats.mode & parseInt('777', 8)
      
      // Check if file is readable (at least 444)
      if ((mode & parseInt('444', 8)) === 0) {
        result.errors.push('Font file is not readable - check file permissions')
      }
      
      // Recommend 644 permissions for web assets
      if (mode !== parseInt('644', 8)) {
        result.warnings.push(`Font file permissions are ${mode.toString(8)}, recommend 644 for web assets`)
      }
    } catch (error) {
      result.errors.push(`Cannot check file permissions: ${error}`)
    }
  }

  private validateFileSize(result: FontValidationResult): void {
    try {
      const stats = statSync(this.fontPath)
      const sizeInKB = stats.size / 1024
      
      if (stats.size === 0) {
        result.errors.push('Font file is empty (0 bytes)')
        return
      }
      
      // WOFF2 fonts should typically be under 100KB for good performance
      if (sizeInKB > 100) {
        result.warnings.push(`Font file is ${sizeInKB.toFixed(1)}KB, consider optimizing for better performance`)
      }
      
      // Very small files might be corrupted
      if (sizeInKB < 10) {
        result.warnings.push(`Font file is only ${sizeInKB.toFixed(1)}KB, verify it's not corrupted`)
      }
    } catch (error) {
      result.errors.push(`Cannot check file size: ${error}`)
    }
  }

  private validateCaseSensitivity(result: FontValidationResult): void {
    // Check that the font file has proper naming convention (woff2 extension)
    const actualFileName = path.basename(this.fontPath)
    
    if (!actualFileName.endsWith('.woff2')) {
      result.warnings.push(`Font file should use .woff2 format for best compression and browser support`)
    }
    
    // Check for proper naming convention (kebab-case or PascalCase, no spaces)
    if (actualFileName.includes(' ')) {
      result.warnings.push(`Font filename contains spaces. Consider using hyphens or camelCase for better compatibility`)
    }
  }

  private validateFontLoadingImplementation(result: FontValidationResult): void {
    // Check if HTML has proper preload
    const indexPath = path.join(this.publicPath, '..', 'index.html')
    if (existsSync(indexPath)) {
      try {
        const htmlContent = require('fs').readFileSync(indexPath, 'utf-8')
        
        const fontFileName = path.basename(this.fontPath)
        if (!htmlContent.includes('rel="preload"') || !htmlContent.includes(fontFileName)) {
          result.warnings.push('Font preloading not found in HTML - this may impact performance')
        }
        
        if (!htmlContent.includes('font-display: swap')) {
          result.warnings.push('font-display: swap not found - consider adding for better loading experience')
        }
        
        if (!htmlContent.includes('crossorigin')) {
          result.warnings.push('crossorigin attribute missing from font preload - may cause CORS issues')
        }
      } catch (error) {
        result.warnings.push('Could not validate HTML font implementation')
      }
    }
  }

  private addRecommendations(result: FontValidationResult): void {
    result.recommendations.push('Use font-display: swap for better loading performance')
    result.recommendations.push('Preload critical fonts with <link rel="preload">')
    result.recommendations.push('Add proper fallback fonts in CSS font-family stack')
    result.recommendations.push('Consider using font loading API for better control')
    result.recommendations.push('Implement font loading states (loading, loaded, failed)')
    result.recommendations.push('Use unicode-range to optimize font loading')
    result.recommendations.push('Set proper CORS headers for font files')
    result.recommendations.push('Use immutable caching for font files')
  }

  printResults(result: FontValidationResult): void {
    console.log('\n🔤 Font Validation Results')
    console.log('==========================')
    
    console.log(`📁 Font Path: ${this.fontPath}`)
    
    if (existsSync(this.fontPath)) {
      const stats = statSync(this.fontPath)
      console.log(`📊 File Size: ${(stats.size / 1024).toFixed(1)}KB`)
      console.log(`🔒 Permissions: ${(stats.mode & parseInt('777', 8)).toString(8)}`)
    }
    
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
    
    // Recommendations
    if (result.recommendations.length > 0) {
      console.log(`\n💡 Recommendations (${result.recommendations.length}):`)
      result.recommendations.forEach(rec => console.log(`   • ${rec}`))
    }
    
    // Overall result
    console.log(`\n${result.isValid ? '✅' : '❌'} Overall: ${result.isValid ? 'VALID' : 'INVALID'}`)
    console.log('==========================\n')
  }
}

// CLI usage
async function main() {
  const validator = new FontValidator()
  const result = await validator.validate()
  
  validator.printResults(result)
  
  if (!result.isValid) {
    process.exit(1)
  }
}

if (require.main === module) {
  main()
}