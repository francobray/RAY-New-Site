import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { isValidLocale, type Locale } from '@/lib/i18n'
import { getTranslations } from '@/hooks/useTranslations'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

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
        {/* Hreflang tags for SEO */}
        <link rel="alternate" hrefLang="es" href="https://rayapp.io/es" />
        <link rel="alternate" hrefLang="en" href="https://rayapp.io/en" />
        <link rel="alternate" hrefLang="x-default" href="https://rayapp.io/es" />
      </head>
      <body className="antialiased">
        <Header locale={locale} />
        <main>
          {children}
        </main>
        <Footer locale={locale} />
      </body>
    </html>
  )
}
