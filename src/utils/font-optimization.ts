// Font loading optimization utilities
export const FontOptimizer = {
  // Preload critical fonts
  preloadFont: (fontPath: string, fontType: string = 'font/woff2') => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'font'
    link.type = fontType
    link.href = fontPath
    link.crossOrigin = 'anonymous'
    document.head.appendChild(link)
  },

  // Check if font is loaded
  checkFontLoaded: async (fontFamily: string, timeout: number = 3000): Promise<boolean> => {
    if (!('fonts' in document)) {
      return false
    }

    try {
      await document.fonts.load(`1em ${fontFamily}`, 'test')
      return document.fonts.check(`1em ${fontFamily}`)
    } catch (error) {
      console.warn(`Font loading check failed for ${fontFamily}:`, error)
      return false
    }
  },

  // Add font loading class management
  manageFontLoadingClasses: async (fontFamily: string) => {
    document.documentElement.classList.add('font-loading')
    
    try {
      const isLoaded = await FontOptimizer.checkFontLoaded(fontFamily)
      if (isLoaded) {
        document.documentElement.classList.remove('font-loading')
        document.documentElement.classList.add('font-loaded')
      } else {
        document.documentElement.classList.add('font-failed')
      }
    } catch (error) {
      document.documentElement.classList.add('font-failed')
    }
  }
}

// Initialize font optimization
export const initFontOptimization = () => {
  // Preload critical font
  FontOptimizer.preloadFont('/fonts/Chopin.Trial-Regular.woff2')
  
  // Manage loading states
  FontOptimizer.manageFontLoadingClasses('Chopin.Trial')
}