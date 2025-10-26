// Supported locales configuration
export const locales = ['es', 'en'] as const
export const defaultLocale = 'es' as const

export type Locale = typeof locales[number]

// Locale detection utilities
export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale)
}

// URL helpers
export function getLocalizedPath(path: string, locale: Locale): string {
  return `/${locale}${path.startsWith('/') ? path : `/${path}`}`
}

export function removeLocaleFromPath(path: string): string {
  const segments = path.split('/')
  if (segments.length > 1 && isValidLocale(segments[1])) {
    return '/' + segments.slice(2).join('/')
  }
  return path
}

// SEO Metadata helpers
export function generateHreflangMetadata(path: string, currentLocale: Locale) {
  const baseUrl = 'https://rayapp.io'
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  
  // Ensure canonical URL matches sitemap structure
  // For root path, use locale prefix; for other paths, ensure locale is included
  let canonicalPath = cleanPath
  if (cleanPath === '/' || cleanPath === '') {
    canonicalPath = `/${currentLocale}`
  } else if (!cleanPath.startsWith(`/${currentLocale}`)) {
    canonicalPath = `/${currentLocale}${cleanPath}`
  }
  
  return {
    canonical: `${baseUrl}${canonicalPath}`,
    languages: {
      'es': `${baseUrl}/es${cleanPath === '/' ? '' : cleanPath}`,
      'en': `${baseUrl}/en${cleanPath === '/' ? '' : cleanPath}`,
      'x-default': `${baseUrl}/es${cleanPath === '/' ? '' : cleanPath}`, // Spanish as primary market default
    },
  }
}

export function generateOpenGraphLocale(locale: Locale) {
  return {
    locale: locale === 'es' ? 'es_ES' : 'en_US',
    alternateLocale: locale === 'es' ? ['en_US'] : ['es_ES'],
  }
}







