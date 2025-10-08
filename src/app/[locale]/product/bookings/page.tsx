import { Metadata } from 'next'
import Bookings from '@/components/pages/product/Bookings'
import { type Locale } from '@/constants/copy'

interface BookingsPageProps {
  params: { locale: Locale }
}

export const metadata: Metadata = {
  title: 'Simplify Bookings. Connect with Every Customer.',
  description: 'Maximize table occupancy with smart booking management. Handle reservations, walk-ins, and waitlists while building guest relationships that drive repeat visits.',
  openGraph: {
    title: 'Bookings - Maximize Table Occupancy & Guest Experience | RAY',
    description: 'Maximize table occupancy with smart booking management. Handle reservations, walk-ins, and waitlists while building guest relationships that drive repeat visits.',
    url: 'https://rayapp.io/product/bookings',
  },
  twitter: {
    title: 'Bookings - Maximize Table Occupancy & Guest Experience | RAY',
    description: 'Maximize table occupancy with smart booking management. Handle reservations, walk-ins, and waitlists while building guest relationships that drive repeat visits.',
  },
  alternates: {
    canonical: 'https://rayapp.io/product/bookings',
  },
}

export default function BookingsPage({ params }: BookingsPageProps) {
  return <Bookings locale={params.locale} />
}