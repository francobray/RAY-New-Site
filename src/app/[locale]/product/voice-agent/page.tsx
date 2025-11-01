import { Metadata } from 'next'
import VoiceAgent from '@/components/pages/product/VoiceAgent'
import { type Locale } from '@/lib/i18n'
import { generateFAQSchema, generateBreadcrumbSchema } from '@/utils/schema'
import { getTranslations } from '@/hooks/useTranslations'

interface VoiceAgentPageProps {
  params: { locale: Locale }
}

export async function generateMetadata({ params }: VoiceAgentPageProps): Promise<Metadata> {
  const { locale } = params
  
  return {
    title: 'Voice Agent for Restaurants | RAY',
    description: 'AI-powered phone assistant that answers calls, takes bookings, responds to FAQs, and provides menu information 24/7.',
    openGraph: {
      title: 'Voice Agent for Restaurants | RAY',
      description: 'AI-powered phone assistant that answers calls, takes bookings, responds to FAQs, and provides menu information 24/7.',
      url: `https://www.rayapp.io/${locale}/product/voice-agent`,
    },
    twitter: {
      title: 'Voice Agent for Restaurants | RAY',
      description: 'AI-powered phone assistant that answers calls, takes bookings, responds to FAQs, and provides menu information 24/7.',
    },
    alternates: {
      canonical: `https://www.rayapp.io/${locale}/product/voice-agent`,
    },
  }
}

export default function VoiceAgentPage({ params }: VoiceAgentPageProps) {
  const locale = params.locale as Locale
  const t = getTranslations(locale)
  
  // FAQ schema - using the same FAQs from the component
  const faqSchema = generateFAQSchema(
    t.VOICE_AGENT_PAGE.FAQ.QUESTIONS,
    `https://www.rayapp.io/${locale}/product/voice-agent`,
    locale
  )

  // Breadcrumb schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: locale === 'es' ? 'Inicio' : 'Home', url: `https://www.rayapp.io/${locale}` },
    { name: locale === 'es' ? 'Productos' : 'Products', url: `https://www.rayapp.io/${locale}/products` },
    { name: locale === 'es' ? 'Asistente de Voz' : 'Voice Agent', url: `https://www.rayapp.io/${locale}/product/voice-agent` }
  ])

  const combinedSchema = [faqSchema, breadcrumbSchema]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }}
      />
      <VoiceAgent locale={locale} />
    </>
  )
}
