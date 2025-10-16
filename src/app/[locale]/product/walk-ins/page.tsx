import { Metadata } from 'next'
import WalkIns from '@/components/pages/product/WalkIns'
import { type Locale, isValidLocale } from '@/lib/i18n'
import { generateFAQSchema, generateBreadcrumbSchema } from '@/utils/schema'

interface WalkInsPageProps {
  params: { locale: string }
}

export async function generateMetadata({ params }: WalkInsPageProps): Promise<Metadata> {
  const locale = params.locale as Locale
  
  if (!isValidLocale(locale)) {
    return {}
  }

  return {
    title: locale === 'es' ? 'Más Tráfico en Sucursal - Google Maps a Visitas | RAY' : 'Walk-Ins - Turn Searches Into Restaurant Visits | RAY',
    description: locale === 'es' ? 'Convierte búsquedas en Google Maps en visitas con la plataforma de marketing local impulsada por IA de RAY. Domina Google Maps, construye confianza a través de reseñas y aumenta el tráfico peatonal en un 47%.' : 'Turn searches into walk-ins with RAY\'s AI-powered local marketing platform. Dominate Google Maps, build trust through reviews, and drive 47% more foot traffic.',
    openGraph: {
      title: locale === 'es' ? 'Más Tráfico en Sucursal - Google Maps a Visitas | RAY' : 'Walk-Ins - Turn Searches Into Restaurant Visits | RAY',
      description: locale === 'es' ? 'Convierte búsquedas en Google Maps en visitas con la plataforma de marketing local impulsada por IA de RAY. Domina Google Maps, construye confianza a través de reseñas y aumenta el tráfico peatonal en un 47%.' : 'Turn searches into walk-ins with RAY\'s AI-powered local marketing platform. Dominate Google Maps, build trust through reviews, and drive 47% more foot traffic.',
      url: `https://rayapp.io/${locale}/product/walk-ins`,
    },
    twitter: {
      title: locale === 'es' ? 'Más Tráfico en Sucursal - Google Maps a Visitas | RAY' : 'Walk-Ins - Turn Searches Into Restaurant Visits | RAY',
      description: locale === 'es' ? 'Convierte búsquedas en Google Maps en visitas con la plataforma de marketing local impulsada por IA de RAY. Domina Google Maps, construye confianza a través de reseñas y aumenta el tráfico peatonal en un 47%.' : 'Turn searches into walk-ins with RAY\'s AI-powered local marketing platform. Dominate Google Maps, build trust through reviews, and drive 47% more foot traffic.',
    },
    alternates: {
      canonical: `https://rayapp.io/${locale}/product/walk-ins`,
    },
  }
}

export default function WalkInsPage({ params }: WalkInsPageProps) {
  const locale = params.locale as Locale
  
  // FAQ schema - using the same FAQs from the component
  const faqSchema = generateFAQSchema([
    {
      question: locale === 'es' ? '¿Qué son exactamente las "direcciones de Google Maps"?' : 'What exactly are "Google Maps directions"?',
      answer: locale === 'es' ? 'Son las veces que alguien hace clic en "Cómo llegar" en tu perfil de Google Business. Es una métrica clave que indica intención de visita.' : 'These are the times someone clicks "Directions" on your Google Business Profile. It\'s a key metric that indicates visit intent.'
    },
    {
      question: locale === 'es' ? '¿Cómo funciona la optimización de Google Business Profile?' : 'How does Google Business Profile optimization work?',
      answer: locale === 'es' ? 'Optimizamos tu perfil con información completa, fotos actualizadas, horarios correctos, y respuestas rápidas a reseñas para mejorar tu visibilidad.' : 'We optimize your profile with complete information, updated photos, correct hours, and quick responses to reviews to improve your visibility.'
    },
    {
      question: locale === 'es' ? '¿Cuánto tiempo toma ver resultados?' : 'How long does it take to see results?',
      answer: locale === 'es' ? 'La mayoría de nuestros clientes ven un aumento del 30-50% en direcciones de Google Maps dentro de los primeros 60 días.' : 'Most of our clients see a 30-50% increase in Google Maps directions within the first 60 days.'
    }
  ], `https://rayapp.io/${locale}/product/walk-ins`)

  // Breadcrumb schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: locale === 'es' ? 'Inicio' : 'Home', url: `https://rayapp.io/${locale}` },
    { name: locale === 'es' ? 'Productos' : 'Products', url: `https://rayapp.io/${locale}/products` },
    { name: locale === 'es' ? 'Más Caminantes' : 'Walk-ins', url: `https://rayapp.io/${locale}/product/walk-ins` }
  ])

  const combinedSchema = [faqSchema, breadcrumbSchema]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }}
      />
      <WalkIns locale={locale} />
    </>
  )
}