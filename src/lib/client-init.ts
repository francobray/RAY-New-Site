export function initializeFontOptimization() {
  if (typeof window === 'undefined') return

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => {
      document.documentElement.classList.add('fonts-loaded')
    })
  }
}

export function initializeCTAValidation() {
  if (typeof window === 'undefined') return
  if (process.env.NODE_ENV !== 'development') return

  const ctaElements = document.querySelectorAll('[data-cta]')
  ctaElements.forEach(el => {
    const ctaType = el.getAttribute('data-cta')
    if (!ctaType) {
      console.warn('CTA element missing type:', el)
    }
  })
}
