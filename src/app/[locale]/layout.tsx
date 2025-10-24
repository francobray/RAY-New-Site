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




