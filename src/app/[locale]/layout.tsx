import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'
import { isValidLocale, type Locale } from '@/lib/i18n'
import { getTranslations } from '@/hooks/useTranslations'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ClientAnalytics from '@/components/ClientAnalytics'
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
  
  return {
    title: {
      default: `RAY - ${t.COMPANY.TAGLINE}`,
      template: `%s | RAY`
    },
    description: t.COMPANY.DESCRIPTION,
    openGraph: {
      title: `RAY - ${t.COMPANY.TAGLINE}`,
      description: t.COMPANY.DESCRIPTION,
      locale: locale === 'es' ? 'es_ES' : 'en_US',
      alternateLocale: locale === 'es' ? 'en_US' : 'es_ES',
    },
    alternates: {
      canonical: `https://rayapp.io/${locale}`,
      languages: {
        'es': 'https://rayapp.io/es',
        'en': 'https://rayapp.io/en',
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

  return (
    <html lang={locale}>
      <head>
        {/* Disable Cloudflare Rocket Loader to prevent hydration issues */}
        <script data-cfasync="false">
          {`// Disable Cloudflare Rocket Loader for this script`}
        </script>
        
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-CFH2T8RJ0P" data-cfasync="false"></script>
        <script
          data-cfasync="false"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-CFH2T8RJ0P', {
                send_page_view: false
              });
            `,
          }}
        />
        
        {/* Hreflang tags for SEO */}
        <link rel="alternate" hrefLang="es" href="https://rayapp.io/es" />
        <link rel="alternate" hrefLang="en" href="https://rayapp.io/en" />
        <link rel="alternate" hrefLang="x-default" href="https://rayapp.io/es" />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/images/logo-rayapp-azulwebp-300x150.webp" as="image" />
        
        {/* Optimize font loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" 
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Suspense fallback={null}>
          <ClientAnalytics />
        </Suspense>
        <Header locale={locale} />
        <main>
          {children}
        </main>
        <Footer locale={locale} />
      </body>
    </html>
  )
}




