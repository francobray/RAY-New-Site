import { Metadata } from 'next'
import WalkIns from '@/components/pages/product/WalkIns'
import { type Locale, isValidLocale } from '@/lib/i18n'

interface WalkInsPageProps {
  params: { locale: string }
}

export async function generateMetadata({ params }: WalkInsPageProps): Promise<Metadata> {
  const locale = params.locale as Locale
  
  if (!isValidLocale(locale)) {
    return {}
  }

  return {
    title: locale === 'es' ? 'Más tráfico en sucursales - Convierte búsquedas en Google Maps en visitas | RAY' : 'Walk-Ins - Turn Searches Into Restaurant Visits | RAY',
    description: locale === 'es' ? 'Convierte búsquedas en Google Maps en visitas con la plataforma de marketing local impulsada por IA de RAY. Domina Google Maps, construye confianza a través de reseñas y aumenta el tráfico peatonal en un 47%.' : 'Turn searches into walk-ins with RAY\'s AI-powered local marketing platform. Dominate Google Maps, build trust through reviews, and drive 47% more foot traffic.',
    openGraph: {
      title: locale === 'es' ? 'Más tráfico en sucursales - Convierte búsquedas en Google Maps en visitas | RAY' : 'Walk-Ins - Turn Searches Into Restaurant Visits | RAY',
      description: locale === 'es' ? 'Convierte búsquedas en Google Maps en visitas con la plataforma de marketing local impulsada por IA de RAY. Domina Google Maps, construye confianza a través de reseñas y aumenta el tráfico peatonal en un 47%.' : 'Turn searches into walk-ins with RAY\'s AI-powered local marketing platform. Dominate Google Maps, build trust through reviews, and drive 47% more foot traffic.',
      url: 'https://rayapp.io/product/walk-ins',
    },
    twitter: {
      title: locale === 'es' ? 'Más tráfico en sucursales - Convierte búsquedas en Google Maps en visitas | RAY' : 'Walk-Ins - Turn Searches Into Restaurant Visits | RAY',
      description: locale === 'es' ? 'Convierte búsquedas en Google Maps en visitas con la plataforma de marketing local impulsada por IA de RAY. Domina Google Maps, construye confianza a través de reseñas y aumenta el tráfico peatonal en un 47%.' : 'Turn searches into walk-ins with RAY\'s AI-powered local marketing platform. Dominate Google Maps, build trust through reviews, and drive 47% more foot traffic.',
    },
    alternates: {
      canonical: 'https://rayapp.io/product/walk-ins',
    },
  }
}

export default function WalkInsPage({ params }: WalkInsPageProps) {
  const locale = params.locale as Locale
  return <WalkIns locale={locale} />
}