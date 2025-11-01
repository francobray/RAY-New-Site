import { Metadata } from 'next'
import HowItWorks from '@/components/pages/HowItWorks'
import { type Locale } from '@/lib/i18n'
import { generateFAQSchema, generateBreadcrumbSchema } from '@/utils/schema'
import { getTranslations } from '@/hooks/useTranslations'

interface HowItWorksPageProps {
  params: { locale: Locale }
}

export async function generateMetadata({ params }: HowItWorksPageProps): Promise<Metadata> {
  const { locale } = params
  
  const title = locale === 'es' 
    ? 'Cómo Funciona RAY - Plataforma de Ventas para Restaurantes' 
    : 'How RAY Works - Restaurant Sales Platform'
  
  const description = locale === 'es'
    ? 'Descubre cómo RAY ayuda a los restaurantes a crecer sus ventas online con pedidos directos, reservas, optimización de Google y más tráfico local.'
    : 'Discover how RAY helps restaurants grow online sales with direct orders, bookings, Google optimization, and more local traffic.'

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://www.rayapp.io/${locale}/how-it-works`,
    },
    twitter: {
      title,
      description,
    },
    alternates: {
      canonical: `https://www.rayapp.io/${locale}/how-it-works`,
    },
  }
}

export default function HowItWorksPage({ params }: HowItWorksPageProps) {
  const { locale } = params
  const t = getTranslations(locale)
  
  // Generate FAQ schema
  const faqs = t.HOW_IT_WORKS_PAGE?.FAQ?.QUESTIONS || []
  const faqSchema = faqs.length > 0 ? generateFAQSchema(
    faqs.map((faq: any) => ({
      question: faq.QUESTION || faq.question || '',
      answer: faq.ANSWER || faq.answer || ''
    }))
  ) : null

  // Generate breadcrumb schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: locale === 'es' ? 'Inicio' : 'Home', url: `/${locale}` },
    { name: locale === 'es' ? 'Cómo Funciona' : 'How It Works', url: `/${locale}/how-it-works` }
  ])

  // Combine schemas
  const combinedSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      breadcrumbSchema,
      ...(faqSchema ? [faqSchema] : [])
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }}
      />
      <HowItWorks locale={locale} />
    </>
  )
}

