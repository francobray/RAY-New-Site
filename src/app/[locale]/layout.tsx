import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { isValidLocale, type Locale, generateHreflangMetadata, generateOpenGraphLocale } from '@/lib/i18n'
import { getTranslations } from '@/hooks/useTranslations'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SimpleWebChat from '@/components/SimpleWebChat'
import '@/styles/critical.css'

interface LocaleLayoutProps {
  children: React.ReactNode
  params: { locale: string }
}

export async function generateMetadata({ params }: LocaleLayoutProps): Promise<Metadata> {
  const locale = params.locale as Locale
  
  if (!isValidLocale(locale)) {
    return {}
  }

  const t = getTranslations(locale)
  const hreflangData = generateHreflangMetadata('', locale) // Root path
  const ogLocale = generateOpenGraphLocale(locale)
  
  return {
    title: {
      default: `RAY - ${t.COMPANY.TAGLINE}`,
      template: `%s | RAY`
    },
    description: t.COMPANY.DESCRIPTION,
    alternates: hreflangData,
    openGraph: {
      title: `RAY - ${t.COMPANY.TAGLINE}`,
      description: t.COMPANY.DESCRIPTION,
      ...ogLocale,
    },
    other: {
      'google-site-verification': 'PageSpeed-friendly',
      'lighthouse': 'enabled',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

export async function generateStaticParams() {
  return [
    { locale: 'es' },
    { locale: 'en' }
  ]
}

export default function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const locale = params.locale as Locale
  
  // Validate locale
  if (!isValidLocale(locale)) {
    notFound()
  }

  // Check if chat webhook is configured
  const isChatEnabled = !!process.env.N8N_CHAT_WEBHOOK_URL
  
  if (!isChatEnabled) {
    console.log('💬 Chat widget disabled: N8N_CHAT_WEBHOOK_URL environment variable not configured')
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <meta 
          name="viewport" 
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"
        />
        {/* DNS Prefetch & Preconnect for external domains */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://grader.rayapp.io" />
        <link rel="preconnect" href="https://grader.rayapp.io" crossOrigin="anonymous" />
        {/* Preload self-hosted Inter font - eliminates Google Fonts render-blocking */}
        <link
          rel="preload"
          href="/fonts/Inter-Variable.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Inter-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* Inline Critical CSS - fonts + above-the-fold styles to eliminate render-blocking */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              @font-face {
                font-family: 'Inter';
                font-style: normal;
                font-weight: 100 900;
                font-display: swap;
                src: url('/fonts/Inter-Variable.woff2') format('woff2');
                unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
              }
              @font-face {
                font-family: 'Inter';
                font-style: normal;
                font-weight: 400;
                font-display: swap;
                src: url('/fonts/Inter-Regular.woff2') format('woff2');
              }
              *{box-sizing:border-box;margin:0;padding:0}
              body{font-family:'Inter',system-ui,-apple-system,sans-serif;line-height:1.6;color:#1C1C1C;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}
              .antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}
              img{max-width:100%;height:auto}
              #ray-widget{min-height:165px;height:165px;contain:layout style paint}
            `,
          }}
        />
      </head>
      <body className="antialiased">
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-CFH2T8RJ0P"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-CFH2T8RJ0P');
            `,
          }}
        />
        {!isChatEnabled && (
          <script
            dangerouslySetInnerHTML={{
              __html: `console.log('💬 Chat widget disabled: N8N_CHAT_WEBHOOK_URL environment variable not configured');`,
            }}
          />
        )}
        <Header locale={locale} />
        <main>
          {children}
        </main>
        <Footer locale={locale} />
        {isChatEnabled && <SimpleWebChat locale={locale} />}
      </body>
    </html>
  )
}




