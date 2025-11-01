import { Metadata } from 'next'
import WhatsAppDelivery from '@/components/pages/product/WhatsAppDelivery'
import { type Locale } from '@/lib/i18n'

interface WhatsAppDeliveryPageProps {
  params: { locale: Locale }
}

export async function generateMetadata({ params }: WhatsAppDeliveryPageProps): Promise<Metadata> {
  const { locale } = params
  
  return {
    title: 'WhatsApp Delivery for Restaurants | RAY',
    description: 'Responde al instante, 24/7. Convierte mensajes en visitas, reservas y pedidos. Multilingüe. Piloto sin riesgo.',
    openGraph: {
      title: 'WhatsApp Delivery for Restaurants | RAY',
      description: 'Responde al instante, 24/7. Convierte mensajes en visitas, reservas y pedidos. Multilingüe. Piloto sin riesgo.',
      url: `https://www.rayapp.io/${locale}/product/whatsapp-delivery`,
    },
    twitter: {
      title: 'WhatsApp Delivery for Restaurants | RAY',
      description: 'Responde al instante, 24/7. Convierte mensajes en visitas, reservas y pedidos. Multilingüe. Piloto sin riesgo.',
    },
    alternates: {
      canonical: `https://www.rayapp.io/${locale}/product/whatsapp-delivery`,
    },
  }
}

export default function WhatsAppDeliveryPage({ params }: WhatsAppDeliveryPageProps) {
  return <WhatsAppDelivery locale={params.locale} />
}
