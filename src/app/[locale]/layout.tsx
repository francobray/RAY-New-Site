import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { isValidLocale, type Locale } from '@/lib/i18n'
import { getTranslations } from '@/hooks/useTranslations'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
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
        {/* Google Analytics will be loaded client-side only to avoid hydration issues */}
        
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
        <Header locale={locale} />
        <main>
          {children}
        </main>
        <Footer locale={locale} />
        
        {/* Google Analytics - Load after page is ready */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('load', function() {
                if (typeof window.dataLayer === 'undefined') {
                  window.dataLayer = [];
                }
                function gtag(){dataLayer.push(arguments);}
                window.gtag = gtag;
                gtag('js', new Date());
                gtag('config', 'G-CFH2T8RJ0P');
                
                var script = document.createElement('script');
                script.async = true;
                script.src = 'https://www.googletagmanager.com/gtag/js?id=G-CFH2T8RJ0P';
                script.setAttribute('data-cfasync', 'false');
                document.head.appendChild(script);
              });
            `,
          }}
        />
      </body>
    </html>
  )
}




