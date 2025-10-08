import { Metadata } from 'next'
import AIConcierge from '@/components/pages/product/AIConcierge'
import { type Locale } from '@/constants/copy'

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

export default function AIConciergeePage({ params }: AIConciergePageProps) {
  return <AIConcierge locale={params.locale} />
}