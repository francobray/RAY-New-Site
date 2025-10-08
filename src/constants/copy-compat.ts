// Temporary compatibility layer for existing components
// This allows existing components to work while we gradually migrate them

import { COPY as TRANSLATIONS, type Locale } from './copy'

// Create a compatibility layer that provides the old COPY structure
// but uses the default locale (Spanish) for existing components
const DEFAULT_LOCALE: Locale = 'es'

export const COPY = TRANSLATIONS[DEFAULT_LOCALE]

// Re-export the full translations for components that are already updated
export { COPY as TRANSLATIONS, type Locale } from './copy'
