/**
 * Critical CSS inlining utility
 * Helps reduce render blocking by inlining critical CSS
 */

export const getCriticalCSS = () => {
  return `
    /* Critical above-the-fold styles */
    body {
      margin: 0;
      padding: 0;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      line-height: 1.5;
      color: #1a1a1a;
      background-color: #ffffff;
    }
    
    .antialiased {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    
    /* Hero section critical styles */
    .bg-gradient-to-br {
      background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
    }
    
    .from-green-400 {
      --tw-gradient-from: #4ade80;
      --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(74, 222, 128, 0));
    }
    
    .to-yellow-400 {
      --tw-gradient-to: #facc15;
    }
    
    /* Layout critical styles */
    .min-h-screen {
      min-height: 100vh;
    }
    
    .container {
      width: 100%;
      margin-left: auto;
      margin-right: auto;
      padding-left: 1rem;
      padding-right: 1rem;
    }
    
    @media (min-width: 640px) {
      .container {
        max-width: 640px;
      }
    }
    
    @media (min-width: 768px) {
      .container {
        max-width: 768px;
      }
    }
    
    @media (min-width: 1024px) {
      .container {
        max-width: 1024px;
      }
    }
    
    @media (min-width: 1280px) {
      .container {
        max-width: 1280px;
      }
    }
    
    @media (min-width: 1536px) {
      .container {
        max-width: 1536px;
      }
    }
    
    /* Typography critical styles */
    h1, h2, h3, h4, h5, h6 {
      margin: 0;
      font-weight: 600;
      line-height: 1.25;
    }
    
    h1 {
      font-size: 2.25rem;
      line-height: 2.5rem;
    }
    
    h2 {
      font-size: 1.875rem;
      line-height: 2.25rem;
    }
    
    h3 {
      font-size: 1.5rem;
      line-height: 2rem;
    }
    
    /* Button critical styles */
    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 0.5rem;
      font-weight: 600;
      transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 150ms;
    }
    
    .btn-primary {
      background-color: #059669;
      color: #ffffff;
      padding: 0.75rem 1.5rem;
    }
    
    .btn-primary:hover {
      background-color: #047857;
    }
    
    /* Header critical styles */
    .header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 50;
      background-color: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(8px);
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }
    
    /* Loading states */
    .loading {
      opacity: 0.6;
      pointer-events: none;
    }
    
    /* Hide non-critical content initially */
    .lazy-load {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.3s ease, transform 0.3s ease;
    }
    
    .lazy-load.loaded {
      opacity: 1;
      transform: translateY(0);
    }
  `
}

export const injectCriticalCSS = () => {
  if (typeof document !== 'undefined') {
    const style = document.createElement('style')
    style.textContent = getCriticalCSS()
    style.setAttribute('data-critical', 'true')
    document.head.insertBefore(style, document.head.firstChild)
  }
}
