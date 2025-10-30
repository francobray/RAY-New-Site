import { Metadata } from 'next'
import MobileApp from '@/components/pages/product/MobileApp'
import { type Locale } from '@/lib/i18n'
import { generateFAQSchema, generateBreadcrumbSchema } from '@/utils/schema'
import { getTranslations } from '@/hooks/useTranslations'

interface MobileAppPageProps {
  params: { locale: Locale }
}

export async function generateMetadata({ params }: MobileAppPageProps): Promise<Metadata> {
  const { locale } = params
  
  return {
    title: 'Mobile App for Restaurants | RAY',
    description: 'Imagine having your own restaurant mobile app. With a mobile app, send customers order directly — instead of going to third parties.',
    openGraph: {
      title: 'Mobile App for Restaurants | RAY',
      description: 'Imagine having your own restaurant mobile app. With a mobile app, send customers order directly — instead of going to third parties.',
      url: `https://www.rayapp.io/${locale}/product/branded-apps`,
      type: 'website',
      siteName: 'RAY',
      images: [
        {
          url: `https://www.rayapp.io/images/branded-apps/Temple-mobile-app.webp`,
          width: 1200,
          height: 630,
          alt: 'Restaurant branded mobile app - RAY'
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Mobile App for Restaurants | RAY',
      description: 'Imagine having your own restaurant mobile app. With a mobile app, send customers order directly — instead of going to third parties.',
      images: [`https://www.rayapp.io/images/branded-apps/Temple-mobile-app.webp`],
    },
    alternates: {
      canonical: `https://www.rayapp.io/${locale}/product/branded-apps`,
    },
  }
}

export default function MobileAppPage({ params }: MobileAppPageProps) {
  const locale = params.locale as Locale
  const t = getTranslations(locale)
  
  // FAQ schema - using the same FAQs from the component
  const faqSchema = generateFAQSchema(t.MOBILE_APP_PAGE.FAQ.QUESTIONS, `https://www.rayapp.io/${locale}/product/branded-apps`)

  // Breadcrumb schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: locale === 'es' ? 'Inicio' : 'Home', url: `https://www.rayapp.io/${locale}` },
    { name: locale === 'es' ? 'Productos' : 'Products', url: `https://www.rayapp.io/${locale}/products` },
    { name: locale === 'es' ? 'App Personalizada' : 'Branded Apps', url: `https://www.rayapp.io/${locale}/product/branded-apps` }
  ])

  const combinedSchema = [faqSchema, breadcrumbSchema]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }}
      />
      <MobileApp locale={locale} />
    </>
  )
}
