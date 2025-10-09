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




