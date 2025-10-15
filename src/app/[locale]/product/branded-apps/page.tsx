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
      url: `https://rayapp.io/${locale}/product/branded-apps`,
    },
    twitter: {
      title: 'Mobile App for Restaurants | RAY',
      description: 'Imagine having your own restaurant mobile app. With a mobile app, send customers order directly — instead of going to third parties.',
    },
    alternates: {
      canonical: `https://rayapp.io/${locale}/product/branded-apps`,
    },
  }
}

export default function MobileAppPage({ params }: MobileAppPageProps) {
  const locale = params.locale as Locale
  const t = getTranslations(locale)
  
  // FAQ schema - using the same FAQs from the component
  const faqSchema = generateFAQSchema(t.MOBILE_APP_PAGE.FAQ.QUESTIONS, `https://rayapp.io/${locale}/product/branded-apps`)

  // Breadcrumb schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: locale === 'es' ? 'Inicio' : 'Home', url: `https://rayapp.io/${locale}` },
    { name: locale === 'es' ? 'Productos' : 'Products', url: `https://rayapp.io/${locale}/products` },
    { name: locale === 'es' ? 'App Personalizada' : 'Branded Apps', url: `https://rayapp.io/${locale}/product/branded-apps` }
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
