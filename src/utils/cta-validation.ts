// CTA Validation Utilities
// This file provides utilities to validate CTA implementation and prevent common issues

export interface CTAValidationResult {
  isValid: boolean
  errors: string[]
  warnings: string[]
}

/**
 * Validates that a CTA element follows best practices
 */
export const validateCTAElement = (element: HTMLElement): CTAValidationResult => {
  const result: CTAValidationResult = {
    isValid: true,
    errors: [],
    warnings: []
  }

  // Check for nested interactive elements
  const interactiveElements = element.querySelectorAll('a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])')
  if (interactiveElements.length > 1) {
    result.errors.push('CTA contains nested interactive elements')
    result.isValid = false
  }

  // Check minimum hit area (44x44px)
  const rect = element.getBoundingClientRect()
  if (rect.width < 44 || rect.height < 44) {
    result.warnings.push('CTA hit area is smaller than recommended 44x44px')
  }

  // Check for proper ARIA labels
  const hasAriaLabel = element.hasAttribute('aria-label') || element.hasAttribute('aria-labelledby')
  if (!hasAriaLabel) {
    result.warnings.push('CTA missing aria-label for screen readers')
  }

  // Check for focus indicators
  const computedStyle = window.getComputedStyle(element, ':focus')
  if (!computedStyle.outline && !computedStyle.boxShadow.includes('ring')) {
    result.warnings.push('CTA missing visible focus indicator')
  }

  return result
}

/**
 * Validates all CTAs on the current page
 */
export const validatePageCTAs = (): CTAValidationResult => {
  const result: CTAValidationResult = {
    isValid: true,
    errors: [],
    warnings: []
  }

  // Find all elements with CTA data attributes
  const ctaElements = document.querySelectorAll('[data-cta], [data-analytics*="cta"]')
  
  ctaElements.forEach((element, index) => {
    const elementResult = validateCTAElement(element as HTMLElement)
    
    if (!elementResult.isValid) {
      result.isValid = false
      result.errors.push(`CTA ${index + 1}: ${elementResult.errors.join(', ')}`)
    }
    
    result.warnings.push(...elementResult.warnings.map(warning => `CTA ${index + 1}: ${warning}`))
  })

  return result
}

/**
 * Prevents double-firing of analytics events
 */
export const createAnalyticsHandler = (eventName: string, eventData: any) => {
  let fired = false
  
  return () => {
    if (fired) return
    fired = true
    
    // Reset after a short delay to allow for legitimate re-clicks
    setTimeout(() => {
      fired = false
    }, 1000)
    
    // Fire analytics event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', eventName, eventData)
    }
  }
}

/**
 * Development-only function to check for CTA issues
 */
export const runCTAValidation = () => {
  if (process.env.NODE_ENV !== 'development') return

  const result = validatePageCTAs()
  
  if (!result.isValid) {
    console.error('❌ CTA Validation Failed:', result.errors)
  }
  
  if (result.warnings.length > 0) {
    console.warn('⚠️ CTA Warnings:', result.warnings)
  }
  
  if (result.isValid && result.warnings.length === 0) {
    console.log('✅ All CTAs validated successfully')
  }
}

// Auto-run validation in development
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  // Run validation after DOM is loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(runCTAValidation, 1000)
    })
  } else {
    setTimeout(runCTAValidation, 1000)
  }
}