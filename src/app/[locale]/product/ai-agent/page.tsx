import { Metadata } from 'next'
import AIAgent from '@/components/pages/product/AIAgent'
import { type Locale } from '@/lib/i18n'

interface AIAgentPageProps {
  params: { locale: Locale }
}

export async function generateMetadata({ params: { locale } }: AIAgentPageProps): Promise<Metadata> {
  return {
    title: locale === 'es' 
      ? 'Agente de IA para Restaurantes - RAY' 
      : 'AI Agent for Restaurants - RAY',
    description: locale === 'es'
      ? 'Agente de IA que atiende a tus clientes 24/7 en WhatsApp, Instagram, tu sitio web y Facebook Messenger. Responde preguntas, toma reservas y procesa pedidos automáticamente.'
      : 'AI agent that serves your customers 24/7 on WhatsApp, Instagram, your website and Facebook Messenger. Answers questions, takes bookings and processes orders automatically.',
    alternates: {
      canonical: `/${locale}/product/ai-agent`,
      languages: {
        es: '/es/product/ai-agent',
        en: '/en/product/ai-agent',
      },
    },
    openGraph: {
      title: locale === 'es' 
        ? 'Agente de IA para Restaurantes - RAY' 
        : 'AI Agent for Restaurants - RAY',
      description: locale === 'es'
        ? 'Agente de IA que atiende a tus clientes 24/7 en WhatsApp, Instagram, tu sitio web y Facebook Messenger.'
        : 'AI agent that serves your customers 24/7 on WhatsApp, Instagram, your website and Facebook Messenger.',
      url: `/${locale}/product/ai-agent`,
      siteName: 'RAY',
      locale: locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: locale === 'es' 
        ? 'Agente de IA para Restaurantes - RAY' 
        : 'AI Agent for Restaurants - RAY',
      description: locale === 'es'
        ? 'Agente de IA que atiende a tus clientes 24/7 en múltiples plataformas.'
        : 'AI agent that serves your customers 24/7 across multiple platforms.',
    },
  }
}

export default function AIAgentPage({ params: { locale } }: AIAgentPageProps) {
  return <AIAgent locale={locale} />
}

