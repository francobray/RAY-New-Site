import { NextRequest, NextResponse } from 'next/server'
import Negotiator from 'negotiator'
import { match as matchLocale } from '@formatjs/intl-localematcher'

const locales = ['es', 'en'] as const
const defaultLocale = 'es'

function getLocale(request: NextRequest): string {
  const acceptedLanguage = request.headers.get('accept-language') ?? undefined
  const headers = { 'accept-language': acceptedLanguage }
  const languages = new Negotiator({ headers }).languages()
  return matchLocale(languages, locales as unknown as string[], defaultLocale)
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // --- 1) Skip i18n for “bot files” & static assets ---
  // Add any other files you want to keep path-stable (e.g., /humans.txt, /security.txt)
  const skipPaths = [
    '/robots.txt',
    '/sitemap.xml',
    '/favicon.ico',
    '/manifest.webmanifest',
  ]
  const isSkipped =
    skipPaths.includes(pathname) ||
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/api/') ||
    pathname.match(/\.(?:svg|png|jpg|jpeg|gif|webp|ico|txt|xml|json|css|js|map)$/)

  if (isSkipped) {
    return NextResponse.next()
  }

  // --- 2) Locale redirect only for “real pages” ---
  const hasLocalePrefix = locales.some(
    (loc) => pathname === `/${loc}` || pathname.startsWith(`/${loc}/`)
  )

  if (!hasLocalePrefix) {
    const locale = getLocale(request)
    const url = request.nextUrl.clone()
    // Keep path intact; avoid double slashes
    url.pathname = `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`
    return NextResponse.redirect(url)
  }

  // --- 3) Optional headers only for HTML pages ---
  const res = NextResponse.next()
  res.headers.set('X-Content-Type-Options', 'nosniff')
  // Don’t force X-Robots-Tag globally (robots.txt, XML, etc. don’t need it)
  return res
}

// Run on everything EXCEPT what we listed to skip.
// Using a matcher keeps this fast at the edge.
export const config = {
  matcher: [
    '/((?!_next/static|_next/image|api|favicon.ico|robots.txt|sitemap.xml|manifest.webmanifest|images|fonts|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|txt|xml|json|css|js|map)$).*)',
  ],
}