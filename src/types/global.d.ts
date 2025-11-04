// Global type declarations for window extensions

interface Window {
  // Google Analytics gtag
  gtag?: (
    command: 'config' | 'event' | 'js' | 'set',
    targetId: string | Date,
    config?: Record<string, any>
  ) => void
  
  // Google Analytics dataLayer
  dataLayer?: Array<any>
  
  // RAY Widget
  RAYWidget?: new (config: Record<string, any>) => any
}

