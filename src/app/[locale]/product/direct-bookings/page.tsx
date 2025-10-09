import { Metadata } from 'next'
import Bookings from '@/components/pages/product/Bookings'
import { type Locale, generateHreflangMetadata, generateOpenGraphLocale } from '@/lib/i18n'

interface BookingsPageProps {
  params: { locale: Locale }
}

export async function generateMetadata({ params }: BookingsPageProps): Promise<Metadata> {
  const { locale } = params
  const path = '/product/direct-bookings'
  const hreflangData = generateHreflangMetadata(path, locale)
  const ogLocale = generateOpenGraphLocale(locale)

  return {
    title: locale === 'es' ? 'Reservas Directas - Gestión Inteligente de Mesas' : 'Direct Bookings - Smart Table Management',
    description: locale === 'es' 
      ? 'Maximiza la ocupación de mesas con gestión inteligente de reservas, listas de espera y herramientas de relación con clientes.'
      : 'Maximize table occupancy with smart booking management. Handle reservations, walk-ins, and waitlists while building guest relationships that drive repeat visits.',
    alternates: hreflangData,
    openGraph: {
      title: locale === 'es' ? 'Reservas Directas - RAY' : 'Direct Bookings - RAY',
      description: locale === 'es' 
        ? 'Maximiza la ocupación de mesas con gestión inteligente de reservas, listas de espera y herramientas de relación con clientes.'
        : 'Maximize table occupancy with smart booking management. Handle reservations, walk-ins, and waitlists while building guest relationships that drive repeat visits.',
      url: `https://rayapp.io/${locale}${path}`,
      ...ogLocale,
    },
    twitter: {
      title: locale === 'es' ? 'Reservas Directas - RAY' : 'Direct Bookings - RAY',
      description: locale === 'es' 
        ? 'Maximiza la ocupación de mesas con gestión inteligente de reservas, listas de espera y herramientas de relación con clientes.'
        : 'Maximize table occupancy with smart booking management. Handle reservations, walk-ins, and waitlists while building guest relationships that drive repeat visits.',
    },
  }
}

export default function BookingsPage({ params }: BookingsPageProps) {
  return <Bookings locale={params.locale} />
}