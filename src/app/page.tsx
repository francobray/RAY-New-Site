import { redirect } from 'next/navigation'
import { headers } from 'next/headers'

export default function RootPage() {
  const headersList = headers()
  const acceptLanguage = headersList.get('accept-language') || ''
  
  // Simple locale detection: check if 'en' appears before 'es' in accept-language
  // or if accept-language starts with 'en'
  const preferEnglish = acceptLanguage.toLowerCase().startsWith('en') || 
                        (acceptLanguage.includes('en') && 
                         acceptLanguage.indexOf('en') < acceptLanguage.indexOf('es'))
  
  const locale = preferEnglish ? 'en' : 'es'
  redirect(`/${locale}`)
}

