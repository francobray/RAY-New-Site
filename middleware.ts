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

// Basic Authentication Check
function checkBasicAuth(request: NextRequest): boolean {
  const authHeader = request.headers.get('authorization')
  
  // Require environment variables to be set - no defaults
  const validUser = process.env.INTERNAL_AUTH_USER
  const validPassword = process.env.INTERNAL_AUTH_PASSWORD

  if (!validUser || !validPassword) {
    console.error('INTERNAL_AUTH_USER and INTERNAL_AUTH_PASSWORD must be set in environment variables')
    return false
  }
  
  if (!authHeader) {
    return false
  }

  const auth = authHeader.split(' ')[1]
  const [user, password] = Buffer.from(auth, 'base64').toString().split(':')

  return user === validUser && password === validPassword
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // --- 1) Skip i18n for "bot files" & static assets ---
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
    pathname.startsWith('/cdn-cgi/') ||
    pathname.startsWith('/uploads/') ||
    pathname.match(/\.(?:svg|png|jpg|jpeg|gif|webp|ico|txt|xml|json|css|js|map)$/)

  if (isSkipped) {
    return NextResponse.next()
  }

  // --- 1.5) Basic Auth for protected routes ---
  const protectedPaths = ['/internal', '/es/internal', '/en/internal']
  const isProtectedPath = protectedPaths.some(
    (path) => pathname === path || pathname.startsWith(path + '/')
  )

  if (isProtectedPath) {
    console.log(`🔐 Auth check for protected path: ${pathname}`)
    
    const validUser = process.env.INTERNAL_AUTH_USER
    const validPassword = process.env.INTERNAL_AUTH_PASSWORD
    
    // Log environment status (without exposing values)
    console.log(`🔑 Auth env vars set: USER=${!!validUser}, PASS=${!!validPassword}`)
    
    const isAuthenticated = checkBasicAuth(request)
    
    if (!isAuthenticated) {
      console.log(`❌ Auth failed for ${pathname}`)
      return new NextResponse('Authentication required', {
        status: 401,
        headers: {
          'WWW-Authenticate': 'Basic realm="Internal Access", charset="UTF-8"',
        },
      })
    }
    
    console.log(`✅ Auth successful for ${pathname}`)
  }

  // --- 2) Locale redirect only for "real pages" ---
  // Skip locale redirect for /internal (it has its own root-level page)
  const skipLocaleRedirect = pathname === '/internal' || pathname.startsWith('/internal/')
  
  const hasLocalePrefix = locales.some(
    (loc) => pathname === `/${loc}` || pathname.startsWith(`/${loc}/`)
  )

  if (!hasLocalePrefix && !skipLocaleRedirect) {
    const locale = getLocale(request)
    const url = request.nextUrl.clone()
    // Keep path intact; avoid double slashes
    url.pathname = `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`
    // Use permanent redirect (301) for SEO
    return NextResponse.redirect(url, 301)
  }

  // --- 3) Optional headers only for HTML pages ---
  const res = NextResponse.next()
  res.headers.set('X-Content-Type-Options', 'nosniff')
  // Add Vary header for proper caching with language negotiation
  res.headers.set('Vary', 'Accept-Language')
  // Don't force X-Robots-Tag globally (robots.txt, XML, etc. don't need it)
  return res
}

// Run on everything EXCEPT what we listed to skip.
// Using a matcher keeps this fast at the edge.
export const config = {
  matcher: [
    '/((?!_next/static|_next/image|api|cdn-cgi|favicon.ico|robots.txt|sitemap.xml|manifest.webmanifest|images|fonts|uploads|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|txt|xml|json|css|js|map)$).*)',
  ],
}