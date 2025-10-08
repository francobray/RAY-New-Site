import { COPY, type Locale } from '@/constants/copy'

/**
 * Hook to get translations for the current locale
 * @param locale - The current locale ('es' or 'en')
 * @returns Translation object for the specified locale
 */
export function useTranslations(locale: Locale) {
  return COPY[locale]
}

/**
 * Get translations for a specific locale (can be used outside components)
 * @param locale - The locale to get translations for
 * @returns Translation object for the specified locale
 */
export function getTranslations(locale: Locale) {
  return COPY[locale]
}
