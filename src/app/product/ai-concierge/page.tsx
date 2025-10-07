import { Metadata } from 'next'
import AIConcierge from '@/pages/product/AIConcierge'

export const metadata: Metadata = {
  title: 'AI Concierge for Restaurants | RAY',
  description: 'Responde al instante, 24/7. Convierte mensajes en visitas, reservas y pedidos. Multilingüe. Piloto sin riesgo.',
  openGraph: {
    title: 'AI Concierge for Restaurants | RAY',
    description: 'Responde al instante, 24/7. Convierte mensajes en visitas, reservas y pedidos. Multilingüe. Piloto sin riesgo.',
    url: 'https://rayapp.io/product/ai-concierge',
  },
  twitter: {
    title: 'AI Concierge for Restaurants | RAY',
    description: 'Responde al instante, 24/7. Convierte mensajes en visitas, reservas y pedidos. Multilingüe. Piloto sin riesgo.',
  },
  alternates: {
    canonical: 'https://rayapp.io/product/ai-concierge',
  },
}

export default function AIConciergeePage() {
  return <AIConcierge />
}