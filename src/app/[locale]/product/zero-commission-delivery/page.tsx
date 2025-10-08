import { Metadata } from 'next'
import ZeroCommissionDelivery from '../../../../components/pages/product/ZeroCommissionDelivery'
import { Locale } from '../../../../lib/i18n'

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
  return <ZeroCommissionDelivery locale={params.locale} />
}
