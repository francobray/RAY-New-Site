import { Metadata } from 'next'
import ZeroCommissionDelivery from '../../../../components/pages/product/ZeroCommissionDelivery'
import { Locale } from '../../../../lib/i18n'
import { generateFAQSchema, generateBreadcrumbSchema } from '@/utils/schema'

interface PageProps {
  params: {
    locale: Locale
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = params
  
  const title = locale === 'es' 
    ? 'Delivery Sin Comisión para Restaurantes - RAY'
    : 'Zero-Commission Delivery for Restaurants - RAY'
    
  const description = locale === 'es'
    ? 'Delivery rentable y gran experiencia para huéspedes. Haz que tus clientes ordenen desde tu app, con drivers de alta calificación, a un precio justo.'
    : 'Profitable delivery and great guest experience. Get your customers to order from your app, with top-rated drivers, at a fair price.'

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description
    }
  }
}

export default function ZeroCommissionDeliveryPage({ params }: PageProps) {
  const { locale } = params
  
  // FAQ schema - using the same FAQs from the component
  const faqSchema = generateFAQSchema([
    {
      question: locale === 'es' ? '¿Por qué los clientes ordenarían desde mi app en lugar de terceros?' : 'Why would customers order from my app instead of third parties?',
      answer: locale === 'es' ? 'Ofrecemos mejores precios (sin comisiones), promociones exclusivas, y una experiencia más personalizada. Además, los clientes pueden acumular puntos de lealtad.' : 'We offer better prices (no commissions), exclusive promotions, and a more personalized experience. Plus, customers can earn loyalty points.'
    },
    {
      question: locale === 'es' ? '¿Cómo funciona el sistema de drivers?' : 'How does the driver system work?',
      answer: locale === 'es' ? 'Trabajamos con drivers de alta calificación y verificados. Puedes usar tus propios drivers o acceder a nuestra red de drivers profesionales.' : 'We work with high-rated and verified drivers. You can use your own drivers or access our network of professional drivers.'
    },
    {
      question: locale === 'es' ? '¿Qué tan rápido puedo implementar el sistema?' : 'How quickly can I implement the system?',
      answer: locale === 'es' ? 'La implementación completa toma entre 2-4 semanas, incluyendo configuración del sistema, capacitación del personal, y lanzamiento de la campaña de marketing.' : 'Complete implementation takes 2-4 weeks, including system setup, staff training, and marketing campaign launch.'
    }
  ], 'https://rayapp.io/product/zero-commission-delivery')

  // Breadcrumb schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: locale === 'es' ? 'Inicio' : 'Home', url: `https://rayapp.io/${locale}` },
    { name: locale === 'es' ? 'Productos' : 'Products', url: `https://rayapp.io/${locale}/products` },
    { name: locale === 'es' ? 'Delivery Sin Comisión' : 'Zero Commission Delivery', url: 'https://rayapp.io/product/zero-commission-delivery' }
  ])

  const combinedSchema = [faqSchema, breadcrumbSchema]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }}
      />
      <ZeroCommissionDelivery locale={locale} />
    </>
  )
}



