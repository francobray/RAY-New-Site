import { Metadata } from 'next'
import { generateFAQSchema, generateBreadcrumbSchema } from '@/utils/schema'
import { type Locale } from '@/lib/i18n'
import { getTranslations } from '@/hooks/useTranslations'
import PricingPageClient from './PricingPageClient'

interface PricingPageProps {
  params: { locale: Locale }
}

export async function generateMetadata({ params }: PricingPageProps): Promise<Metadata> {
  const locale = params.locale as Locale
  
  return {
    title: locale === 'es' ? 'Precios - Planes que crecen con tu restaurante | RAY' : 'Pricing - Plans that grow with your restaurant | RAY',
    description: locale === 'es' ? 'Elige el plan que se adapte a tus necesidades. Todos los planes incluyen nuestra plataforma comprobada para impulsar más visitas, pedidos y reseñas.' : 'Choose the plan that fits your needs. All plans include our proven platform to drive more visits, orders, and reviews.',
    openGraph: {
      title: locale === 'es' ? 'Precios - Planes que crecen con tu restaurante | RAY' : 'Pricing - Plans that grow with your restaurant | RAY',
      description: locale === 'es' ? 'Elige el plan que se adapte a tus necesidades. Todos los planes incluyen nuestra plataforma comprobada para impulsar más visitas, pedidos y reseñas.' : 'Choose the plan that fits your needs. All plans include our proven platform to drive more visits, orders, and reviews.',
      url: `https://rayapp.io/${locale}/pricing`,
    },
    twitter: {
      title: locale === 'es' ? 'Precios - Planes que crecen con tu restaurante | RAY' : 'Pricing - Plans that grow with your restaurant | RAY',
      description: locale === 'es' ? 'Elige el plan que se adapte a tus necesidades. Todos los planes incluyen nuestra plataforma comprobada para impulsar más visitas, pedidos y reseñas.' : 'Choose the plan that fits your needs. All plans include our proven platform to drive more visits, orders, and reviews.',
    },
    alternates: {
      canonical: `https://rayapp.io/${locale}/pricing`,
    },
  }
}

export default function PricingPage({ params }: PricingPageProps) {
  const locale = params.locale as Locale
  const t = getTranslations(locale)
  
  // FAQ schema
  const faqSchema = generateFAQSchema(t.PRICING_PAGE.FAQ.QUESTIONS, `https://rayapp.io/${locale}/pricing`)
  
  // Breadcrumb schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: locale === 'es' ? 'Inicio' : 'Home', url: `https://rayapp.io/${locale}` },
    { name: locale === 'es' ? 'Precios' : 'Pricing', url: `https://rayapp.io/${locale}/pricing` }
  ])

  const combinedSchema = [faqSchema, breadcrumbSchema]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }}
      />
      <PricingPageClient locale={locale} />
    </>
  )
}