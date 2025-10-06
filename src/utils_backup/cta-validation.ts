// CTA Validation Utilities
// Ensures CTAs follow accessibility and UX best practices

interface CTAValidationResult {
  isValid: boolean
  errors: string[]
  warnings: string[]
}

interface CTAElement {
  element: Element
  type: 'button' | 'link'
  hasNestedInteractive: boolean
  hasMinimumSize: boolean
  hasAccessibleLabel: boolean
  hasClickHandler: boolean
}

export class CTAValidator {
  private static instance: CTAValidator
  private validationResults: Map<string, CTAValidationResult> = new Map()

  static getInstance(): CTAValidator {
    if (!CTAValidator.instance) {
      CTAValidator.instance = new CTAValidator()
    }
    return CTAValidator.instance
  }

  /**
   * Validates all CTAs on the current page
   */
  validatePageCTAs(): CTAValidationResult {
    const errors: string[] = []
    const warnings: string[] = []

    // Find all potential CTA elements
    const ctaElements = this.findCTAElements()
    
    for (const cta of ctaElements) {
      const result = this.validateCTA(cta)
      errors.push(...result.errors)
      warnings.push(...result.warnings)
    }

    const result = {
      isValid: errors.length === 0,
      errors,
      warnings
    }

    // Store result for debugging
    this.validationResults.set(window.location.pathname, result)
    
    return result
  }

  /**
   * Finds all CTA elements on the page
   */
  private findCTAElements(): CTAElement[] {
    const selectors = [
      '[data-cta]',
      'button:not([data-exclude-validation])',
      'a[href]:not([data-exclude-validation])',
      '.btn-primary',
      '.btn-secondary',
      '[role="button"]'
    ]

    const elements = document.querySelectorAll(selectors.join(', '))
    
    return Array.from(elements).map(element => ({
      element,
      type: element.tagName.toLowerCase() === 'button' ? 'button' : 'link',
      hasNestedInteractive: this.hasNestedInteractiveElements(element),
      hasMinimumSize: this.hasMinimumSize(element),
      hasAccessibleLabel: this.hasAccessibleLabel(element),
      hasClickHandler: this.hasClickHandler(element)
    }))
  }

  /**
   * Validates a single CTA element
   */
  private validateCTA(cta: CTAElement): CTAValidationResult {
    const errors: string[] = []
    const warnings: string[] = []
    const elementInfo = this.getElementInfo(cta.element)

    // Check for nested interactive elements
    if (cta.hasNestedInteractive) {
      errors.push(`CTA ${elementInfo} has nested interactive elements (buttons/links inside buttons/links)`)
    }

    // Check minimum size (44x44px for touch targets)
    if (!cta.hasMinimumSize) {
      warnings.push(`CTA ${elementInfo} may be too small for touch interaction (minimum 44x44px recommended)`)
    }

    // Check accessible labeling
    if (!cta.hasAccessibleLabel) {
      errors.push(`CTA ${elementInfo} lacks accessible labeling (aria-label, aria-labelledby, or meaningful text content)`)
    }

    // Check for multiple click handlers
    const clickHandlers = this.getClickHandlerCount(cta.element)
    if (clickHandlers > 1) {
      warnings.push(`CTA ${elementInfo} has multiple click handlers which may cause duplicate events`)
    }

    // Check for proper focus management
    if (!this.hasFocusManagement(cta.element)) {
      warnings.push(`CTA ${elementInfo} may not have proper focus management`)
    }

    return {
      isValid: errors.length === 0,
      errors,
      warnings
    }
  }

  /**
   * Checks if element has nested interactive elements
   */
  private hasNestedInteractiveElements(element: Element): boolean {
    const interactiveSelectors = 'button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"]), [role="button"], [role="link"]'
    const nestedInteractive = element.querySelectorAll(interactiveSelectors)
    
    // Filter out the element itself
    return Array.from(nestedInteractive).some(nested => nested !== element)
  }

  /**
   * Checks if element meets minimum size requirements
   */
  private hasMinimumSize(element: Element): boolean {
    const rect = element.getBoundingClientRect()
    const minSize = 44 // 44px minimum for touch targets
    
    return rect.width >= minSize && rect.height >= minSize
  }

  /**
   * Checks if element has accessible labeling
   */
  private hasAccessibleLabel(element: Element): boolean {
    // Check for aria-label
    if (element.getAttribute('aria-label')) return true
    
    // Check for aria-labelledby
    if (element.getAttribute('aria-labelledby')) return true
    
    // Check for meaningful text content
    const textContent = element.textContent?.trim()
    if (textContent && textContent.length > 2) return true
    
    // Check for alt text on images
    const img = element.querySelector('img[alt]')
    if (img && img.getAttribute('alt')) return true
    
    return false
  }

  /**
   * Checks if element has click handlers
   */
  private hasClickHandler(element: Element): boolean {
    // Check for onclick attribute
    if (element.getAttribute('onclick')) return true
    
    // Check for event listeners (this is limited in what we can detect)
    return (element as any)._reactInternalFiber?.memoizedProps?.onClick !== undefined
  }

  /**
   * Counts the number of click handlers on an element
   */
  private getClickHandlerCount(element: Element): number {
    let count = 0
    
    // Check onclick attribute
    if (element.getAttribute('onclick')) count++
    
    // Check React props (limited detection)
    const reactProps = (element as any)._reactInternalFiber?.memoizedProps
    if (reactProps?.onClick) count++
    
    return count
  }

  /**
   * Checks if element has proper focus management
   */
  private hasFocusManagement(element: Element): boolean {
    const computedStyle = window.getComputedStyle(element)
    
    // Check if element is focusable
    const tabIndex = element.getAttribute('tabindex')
    if (tabIndex === '-1') return false
    
    // Check if focus styles are defined
    const hasFocusStyles = computedStyle.getPropertyValue('outline') !== 'none' ||
                          computedStyle.getPropertyValue('box-shadow').includes('focus') ||
                          element.matches(':focus-visible')
    
    return hasFocusStyles
  }

  /**
   * Gets a descriptive string for the element
   */
  private getElementInfo(element: Element): string {
    const tag = element.tagName.toLowerCase()
    const id = element.id ? `#${element.id}` : ''
    const classes = element.className ? `.${element.className.split(' ').join('.')}` : ''
    const text = element.textContent?.trim().slice(0, 30) || ''
    
    return `${tag}${id}${classes} "${text}"`
  }

  /**
   * Gets validation results for debugging
   */
  getValidationResults(): Map<string, CTAValidationResult> {
    return this.validationResults
  }

  /**
   * Logs validation results to console
   */
  logResults(result: CTAValidationResult): void {
    if (process.env.NODE_ENV === 'development') {
      if (result.errors.length > 0) {
        console.group('🚨 CTA Validation Errors')
        result.errors.forEach(error => console.error(error))
        console.groupEnd()
      }
      
      if (result.warnings.length > 0) {
        console.group('⚠️ CTA Validation Warnings')
        result.warnings.forEach(warning => console.warn(warning))
        console.groupEnd()
      }
      
      if (result.isValid) {
        console.log('✅ All CTAs passed validation')
      }
    }
  }
}

/**
 * Validates CTAs on page load and navigation
 */
export const initCTAValidation = (): void => {
  if (process.env.NODE_ENV !== 'development') return

  const validator = CTAValidator.getInstance()
  
  // Validate on initial load
  const validatePage = () => {
    setTimeout(() => {
      const result = validator.validatePageCTAs()
      validator.logResults(result)
    }, 1000) // Wait for React to render
  }
  
  // Validate on page load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', validatePage)
  } else {
    validatePage()
  }
  
  // Validate on navigation (for SPAs)
  let currentPath = window.location.pathname
  const observer = new MutationObserver(() => {
    if (window.location.pathname !== currentPath) {
      currentPath = window.location.pathname
      validatePage()
    }
  })
  
  observer.observe(document.body, {
    childList: true,
    subtree: true
  })
}

/**
 * Manual validation function for testing
 */
export const validateCTAs = (): CTAValidationResult => {
  const validator = CTAValidator.getInstance()
  const result = validator.validatePageCTAs()
  validator.logResults(result)
  return result
}