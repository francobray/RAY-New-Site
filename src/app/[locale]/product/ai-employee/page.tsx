import { Metadata } from 'next'
import AIEmployee from '@/components/pages/product/AIEmployee'
import { type Locale } from '@/lib/i18n'
import { generateFAQSchema, generateBreadcrumbSchema } from '@/utils/schema'
import { getTranslations } from '@/hooks/useTranslations'

interface AIEmployeePageProps {
  params: { locale: Locale }
}

export async function generateMetadata({ params }: AIEmployeePageProps): Promise<Metadata> {
  const { locale } = params
  
  return {
    title: locale === 'es' 
      ? 'Empleado AI - Asistente conversacional para restaurantes | RAY'
      : 'AI Employee - Conversational assistant for restaurants | RAY',
    description: locale === 'es'
      ? 'Agente de IA que responde preguntas, toma reservas, procesa pedidos e inscribe a programas de lealtad. Disponible en WhatsApp, Instagram, Website y Facebook Messenger.'
      : 'AI agent that answers questions, takes bookings, processes orders and signs up customers to loyalty programs. Available on WhatsApp, Instagram, Website and Facebook Messenger.',
    openGraph: {
      title: locale === 'es' 
        ? 'Empleado AI - Asistente conversacional para restaurantes | RAY'
        : 'AI Employee - Conversational assistant for restaurants | RAY',
      description: locale === 'es'
        ? 'Agente de IA que responde preguntas, toma reservas, procesa pedidos e inscribe a programas de lealtad.'
        : 'AI agent that answers questions, takes bookings, processes orders and signs up customers to loyalty programs.',
      url: `https://www.rayapp.io/${locale}/product/ai-employee`,
    },
    twitter: {
      title: locale === 'es' 
        ? 'Empleado AI - Asistente conversacional para restaurantes | RAY'
        : 'AI Employee - Conversational assistant for restaurants | RAY',
      description: locale === 'es'
        ? 'Agente de IA que responde preguntas, toma reservas, procesa pedidos e inscribe a programas de lealtad.'
        : 'AI agent that answers questions, takes bookings, processes orders and signs up customers to loyalty programs.',
    },
    alternates: {
      canonical: `https://www.rayapp.io/${locale}/product/ai-employee`,
    },
  }
}

export default function AIEmployeePage({ params }: AIEmployeePageProps) {
  const locale = params.locale as Locale
  const t = getTranslations(locale)
  
  // FAQ schema - using the same FAQs from the component
  const faqs = t.AI_EMPLOYEE_PAGE?.FAQ?.QUESTIONS || []
  const faqSchema = faqs.length > 0 
    ? generateFAQSchema(
        faqs.map((faq: any) => ({
          question: faq.QUESTION || faq.question || '',
          answer: faq.ANSWER || faq.answer || ''
        })),
        `https://www.rayapp.io/${locale}/product/ai-employee`,
        locale
      )
    : null

  // Breadcrumb schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: locale === 'es' ? 'Inicio' : 'Home', url: `https://www.rayapp.io/${locale}` },
    { name: locale === 'es' ? 'Productos' : 'Products', url: `https://www.rayapp.io/${locale}/products` },
    { name: locale === 'es' ? 'Empleado AI' : 'AI Employee', url: `https://www.rayapp.io/${locale}/product/ai-employee` }
  ])

  const combinedSchema = faqSchema ? [faqSchema, breadcrumbSchema] : [breadcrumbSchema]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }}
      />
      <AIEmployee locale={locale} />
    </>
  )
}

