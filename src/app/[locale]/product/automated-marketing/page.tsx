import { Metadata } from 'next'
import AutomatedMarketing from '../../../../components/pages/product/AutomatedMarketing'
import { Locale } from '../../../../lib/i18n'

interface PageProps {
  params: {
    locale: Locale
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = params
  
  const title = locale === 'es' 
    ? 'Marketing Automatizado para Restaurantes - RAY'
    : 'Automated Marketing for Restaurants - RAY'
    
  const description = locale === 'es'
    ? 'Marketing que genera dinero, impulsado por datos de clientes. Convierte cada pedido en datos valiosos y usa esos datos para ejecutar campañas de marketing automatizadas que hacen crecer tus ventas.'
    : 'Money-making marketing, powered by customer data. Turn every order into valuable data and use that data to run automated marketing campaigns that grow your sales.'

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

export default function AutomatedMarketingPage({ params }: PageProps) {
  return <AutomatedMarketing locale={params.locale} />
}
