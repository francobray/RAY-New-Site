import { NextRequest, NextResponse } from 'next/server'
import Negotiator from 'negotiator'
import { match as matchLocale } from '@formatjs/intl-localematcher'

// Supported locales - Spanish first (default)
const locales = ['es', 'en']
const defaultLocale = 'es'

// Get the preferred locale from the request
function getLocale(request: NextRequest): string {
  // Get the Accept-Language header
  const acceptedLanguage = request.headers.get('accept-language') ?? undefined
  const headers = { 'accept-language': acceptedLanguage }
  const languages = new Negotiator({ headers }).languages()
  
  // Match against supported locales, fallback to Spanish
  return matchLocale(languages, locales, defaultLocale)
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request)
    
    // Redirect to the detected locale
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
        request.url
      )
    )
  }
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|images|fonts).*)']
}
