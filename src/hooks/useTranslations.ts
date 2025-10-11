import { COPY } from '@/constants/copy'
import { type Locale, defaultLocale } from '@/lib/i18n'

/**
 * Hook to get translations for the current locale
 * @param locale - The current locale ('es' or 'en')
 * @returns Translation object for the specified locale
 */
export function useTranslations(locale: Locale) {
  if (!locale || !COPY[locale]) {
    console.error(`Invalid locale: ${locale}. Falling back to default locale.`)
    return COPY[defaultLocale]
  }
  return COPY[locale]
}

/**
 * Get translations for a specific locale (can be used outside components)
 * @param locale - The locale to get translations for
 * @returns Translation object for the specified locale
 */
export function getTranslations(locale: Locale) {
  if (!locale || !COPY[locale]) {
    console.error(`Invalid locale: ${locale}. Falling back to default locale.`)
    return COPY[defaultLocale]
  }
  return COPY[locale]
}
