import { Metadata } from 'next'
import WebsiteBuilder from '../../../../components/pages/product/WebsiteBuilder'
import { Locale } from '../../../../lib/i18n'

interface PageProps {
  params: {
    locale: Locale
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = params
  
  const title = locale === 'es' 
    ? 'Constructor de Sitios Web para Restaurantes - RAY'
    : 'Restaurant Website Builder - RAY'
    
  const description = locale === 'es'
    ? 'Sitios web de restaurante construidos para ventas primero, estilo segundo. Nuestro diseño comprobado genera tráfico de Google, optimiza aplicaciones de delivery y aloja tu competencia.'
    : 'Restaurant websites built for sales first, style second. Our proven design grows Google traffic, optimizes delivery apps, and hosts your competition.'

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

export default function WebsiteBuilderPage({ params }: PageProps) {
  return <WebsiteBuilder locale={params.locale} />
}
