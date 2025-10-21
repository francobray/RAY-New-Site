import { Metadata } from 'next'
import VoiceAgent from '@/components/pages/product/VoiceAgent'
import { type Locale } from '@/lib/i18n'

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
      url: `https://rayapp.io/${locale}/product/voice-agent`,
    },
    twitter: {
      title: 'Voice Agent for Restaurants | RAY',
      description: 'AI-powered phone assistant that answers calls, takes bookings, responds to FAQs, and provides menu information 24/7.',
    },
    alternates: {
      canonical: `https://rayapp.io/${locale}/product/voice-agent`,
    },
  }
}

export default function VoiceAgentPage({ params }: VoiceAgentPageProps) {
  return <VoiceAgent locale={params.locale} />
}
