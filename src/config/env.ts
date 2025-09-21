// Environment configuration with validation
interface EnvConfig {
  SITE_URL: string
  HUBSPOT_PORTAL_ID: string
  HUBSPOT_REGION: string
  NODE_ENV: 'development' | 'production' | 'test'
  BUILD_TIMESTAMP: string
  BUILD_VERSION: string
  ENABLE_ANALYTICS: boolean
  ENABLE_CHAT_WIDGET: boolean
}

// Validate required environment variables
const validateEnv = (): EnvConfig => {
  const requiredVars = {
    SITE_URL: import.meta.env.VITE_SITE_URL || process.env.SITE_URL || 'https://rayapp.io',
    HUBSPOT_PORTAL_ID: import.meta.env.VITE_HUBSPOT_PORTAL_ID || '39590119',
    HUBSPOT_REGION: import.meta.env.VITE_HUBSPOT_REGION || 'na1',
    NODE_ENV: (import.meta.env.MODE || 'production') as 'development' | 'production' | 'test',
    BUILD_TIMESTAMP: (globalThis as any).__BUILD_TIMESTAMP__ || new Date().toISOString(),
    BUILD_VERSION: (globalThis as any).__BUILD_VERSION__ || '1.0.0',
    ENABLE_ANALYTICS: import.meta.env.VITE_ENABLE_ANALYTICS !== 'false',
    ENABLE_CHAT_WIDGET: import.meta.env.VITE_ENABLE_CHAT_WIDGET === 'true'
  }

  // Validate SITE_URL format
  try {
    new URL(requiredVars.SITE_URL)
  } catch {
    throw new Error(`Invalid SITE_URL: ${requiredVars.SITE_URL}`)
  }

  return requiredVars
}

export const ENV = validateEnv()

// Helper functions
export const isDevelopment = ENV.NODE_ENV === 'development'
export const isProduction = ENV.NODE_ENV === 'production'
export const isTest = ENV.NODE_ENV === 'test'

// Runtime environment check
if (isProduction && ENV.SITE_URL.includes('localhost')) {
  console.warn('⚠️ Production build with localhost URL detected')
}