import { Metadata } from 'next'
import AIConcierge from '@/components/pages/product/AIConcierge'
import { type Locale } from '@/constants/copy'
import { generateFAQSchema, generateBreadcrumbSchema } from '@/utils/schema'
import { getTranslations } from '@/hooks/useTranslations'

interface AIConciergePageProps {
  params: { locale: Locale }
}

export const metadata: Metadata = {
  title: 'WhatsApp Orders for Restaurants | RAY',
  description: 'Responde al instante, 24/7. Convierte mensajes en visitas, reservas y pedidos. Multilingüe. Piloto sin riesgo.',
  openGraph: {
    title: 'WhatsApp Orders for Restaurants | RAY',
    description: 'Responde al instante, 24/7. Convierte mensajes en visitas, reservas y pedidos. Multilingüe. Piloto sin riesgo.',
    url: 'https://rayapp.io/product/ai-concierge',
  },
  twitter: {
    title: 'WhatsApp Orders for Restaurants | RAY',
    description: 'Responde al instante, 24/7. Convierte mensajes en visitas, reservas y pedidos. Multilingüe. Piloto sin riesgo.',
  },
  alternates: {
    canonical: 'https://rayapp.io/product/ai-concierge',
  },
}

export default function AIConciergePage({ params }: AIConciergePageProps) {
  const locale = params.locale as Locale
  const t = getTranslations(locale)
  
  // FAQ schema - using the same FAQs from the component
  const faqSchema = generateFAQSchema(t.AI_CONCIERGE_PAGE.FAQ.QUESTIONS, 'https://rayapp.io/product/ai-concierge')

  // Breadcrumb schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: locale === 'es' ? 'Inicio' : 'Home', url: `https://rayapp.io/${locale}` },
    { name: locale === 'es' ? 'Productos' : 'Products', url: `https://rayapp.io/${locale}/products` },
    { name: locale === 'es' ? 'Asistente IA' : 'AI Concierge', url: 'https://rayapp.io/product/ai-concierge' }
  ])

  const combinedSchema = [faqSchema, breadcrumbSchema]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }}
      />
      <AIConcierge locale={locale} />
    </>
  )
}