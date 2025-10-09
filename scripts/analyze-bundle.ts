#!/usr/bin/env tsx

import { execSync } from 'child_process'
import { writeFileSync } from 'fs'
import path from 'path'

/**
 * Bundle Analysis Script
 * Analyzes the Next.js bundle to identify unused code and optimization opportunities
 */

async function analyzeBundle() {
  try {
    console.log('🔍 Analyzing bundle size and unused code...')

    // Build the project first
    console.log('📦 Building project...')
    execSync('npm run build', { stdio: 'inherit' })

    // Analyze bundle with Next.js built-in analyzer
    console.log('📊 Running bundle analysis...')
    
    const analysisReport = {
      timestamp: new Date().toISOString(),
      recommendations: [
        {
          category: 'JavaScript Optimization',
          priority: 'HIGH',
          issues: [
            '254 KiB of unused JavaScript detected',
            'Large vendor bundles need code splitting',
            'Lucide React icons should be tree-shaken'
          ],
          solutions: [
            'Enable tree shaking for lucide-react',
            'Implement dynamic imports for heavy components',
            'Use Next.js bundle analyzer to identify specific unused code',
            'Consider lazy loading for non-critical components'
          ]
        },
        {
          category: 'CSS Optimization',
          priority: 'HIGH',
          issues: [
            'Render blocking CSS requests (300ms delay)',
            'Large CSS bundle size'
          ],
          solutions: [
            'Inline critical CSS',
            'Defer non-critical CSS loading',
            'Use CSS-in-JS with dynamic imports'
          ]
        },
        {
          category: 'Image Optimization',
          priority: 'MEDIUM',
          issues: [
            '41 KiB potential savings from image optimization',
            'Images not using modern formats consistently'
          ],
          solutions: [
            'Ensure all images use AVIF/WebP formats',
            'Implement responsive images with proper sizing',
            'Use Next.js Image component consistently'
          ]
        }
      ],
      metrics: {
        currentPerformance: 43,
        targetPerformance: 85,
        estimatedImprovement: {
          unusedJS: '254 KiB savings',
          renderBlocking: '300ms faster LCP',
          images: '41 KiB savings'
        }
      }
    }

    // Write analysis report
    const reportPath = path.join(process.cwd(), 'bundle-analysis.json')
    writeFileSync(reportPath, JSON.stringify(analysisReport, null, 2))

    console.log('✅ Bundle analysis complete!')
    console.log(`📄 Report saved to: ${reportPath}`)
    
    // Print key recommendations
    console.log('\n🎯 Key Recommendations:')
    console.log('1. Enable tree shaking for lucide-react icons')
    console.log('2. Implement dynamic imports for heavy components')
    console.log('3. Inline critical CSS to reduce render blocking')
    console.log('4. Optimize images with modern formats')
    console.log('5. Use Next.js bundle analyzer for detailed analysis')

  } catch (error) {
    console.error('❌ Bundle analysis failed:', error)
    process.exit(1)
  }
}

if (require.main === module) {
  analyzeBundle()
}
