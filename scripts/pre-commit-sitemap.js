#!/usr/bin/env node

/**
 * Pre-commit hook to ensure sitemap and llms.txt are up-to-date
 * This script checks if any route-related files have changed and regenerates both files
 */

const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

function main() {
  console.log('🔍 Checking sitemap and llms.txt status...')
  
  try {
    // Check if any route-related files have changed
    const changedFiles = execSync('git diff --cached --name-only', { encoding: 'utf8' })
      .split('\n')
      .filter(Boolean)
    
    const routeRelatedChanges = changedFiles.some(file => 
      file.includes('src/app/') || 
      file.includes('src/components/') ||
      file.includes('public/')
    )
    
    if (routeRelatedChanges) {
      console.log('📝 Route-related changes detected, regenerating sitemap and llms.txt...')
      
      // Generate new sitemap
      console.log('\n🗺️  Generating sitemap...')
      execSync('npm run sitemap:generate', { stdio: 'inherit' })
      
      // Generate new llms.txt
      console.log('\n🤖 Generating llms.txt...')
      execSync('npm run llms:generate', { stdio: 'inherit' })
      
      // Check if sitemap changed
      const sitemapChanges = execSync('git diff --name-only public/sitemap.xml', { encoding: 'utf8' }).trim()
      
      if (sitemapChanges) {
        console.log('✅ Sitemap updated and staged')
        execSync('git add public/sitemap.xml', { stdio: 'inherit' })
      } else {
        console.log('✅ Sitemap is already up-to-date')
      }
      
      // Check if llms.txt changed
      const llmsChanges = execSync('git diff --name-only public/llms.txt', { encoding: 'utf8' }).trim()
      
      if (llmsChanges) {
        console.log('✅ llms.txt updated and staged')
        execSync('git add public/llms.txt', { stdio: 'inherit' })
      } else {
        console.log('✅ llms.txt is already up-to-date')
      }
    } else {
      console.log('✅ No route-related changes, checks skipped')
    }
    
  } catch (error) {
    console.error('❌ Error in pre-commit hook:', error.message)
    process.exit(1)
  }
}

main()
