import { Metadata } from 'next'
import Bookings from '@/components/pages/product/Bookings'
import { type Locale, generateHreflangMetadata, generateOpenGraphLocale } from '@/lib/i18n'
import { generateFAQSchema, generateBreadcrumbSchema } from '@/utils/schema'

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
      url: `https://www.rayapp.io/${locale}${path}`,
      type: 'website',
      siteName: 'RAY',
      images: [
        {
          url: `https://www.rayapp.io/images/bookings/bookings-01.webp`,
          width: 1200,
          height: 630,
          alt: locale === 'es' ? 'Reservas directas para restaurantes - RAY' : 'Direct bookings for restaurants - RAY'
        }
      ],
      ...ogLocale,
    },
    twitter: {
      card: 'summary_large_image',
      title: locale === 'es' ? 'Reservas Directas - RAY' : 'Direct Bookings - RAY',
      description: locale === 'es' 
        ? 'Maximiza la ocupación de mesas con gestión inteligente de reservas, listas de espera y herramientas de relación con clientes.'
        : 'Maximize table occupancy with smart booking management. Handle reservations, walk-ins, and waitlists while building guest relationships that drive repeat visits.',
      images: [`https://www.rayapp.io/images/bookings/bookings-01.webp`],
    },
  }
}

export default function BookingsPage({ params }: BookingsPageProps) {
  const locale = params.locale as Locale
  
  // FAQ schema - using the same FAQs from the component
  const faqSchema = generateFAQSchema([
    {
      question: locale === 'es' ? '¿Cómo funciona el sistema de reservas?' : 'How does the reservation system work?',
      answer: locale === 'es' ? 'Nuestro sistema de reservas se integra directamente con tu sitio web y permite a los clientes reservar mesas 24/7. Los clientes reciben confirmaciones automáticas y recordatorios, mientras tú mantienes control total sobre la disponibilidad y configuración.' : 'Our reservation system integrates directly with your website and allows customers to book tables 24/7. Customers receive automatic confirmations and reminders, while you maintain full control over availability and settings.'
    },
    {
      question: locale === 'es' ? '¿Se integra con mi sistema POS actual?' : 'Does it integrate with my current POS system?',
      answer: locale === 'es' ? 'Sí, nuestro sistema de reservas se integra con los principales sistemas POS incluyendo Toast, Square, Clover, y muchos más. La integración permite sincronizar automáticamente las reservas con tu flujo de trabajo existente.' : 'Yes, our reservation system integrates with major POS systems including Toast, Square, Clover, and many more. The integration allows you to automatically sync reservations with your existing workflow.'
    },
    {
      question: locale === 'es' ? '¿Puedo gestionar walk-ins y listas de espera?' : 'Can I manage walk-ins and waitlists?',
      answer: locale === 'es' ? 'Absolutamente. Nuestro sistema incluye gestión digital de walk-ins y listas de espera con estimaciones automáticas de tiempo de espera. Los clientes reciben notificaciones SMS cuando su mesa está lista.' : 'Absolutely. Our system includes digital walk-in and waitlist management with automatic wait time estimates. Guests receive SMS notifications when their table is ready.'
    },
    {
      question: locale === 'es' ? '¿Cómo ayuda a reducir los no-shows?' : 'How does it help reduce no-shows?',
      answer: locale === 'es' ? 'Enviamos recordatorios automáticos por SMS y email antes de la reserva. También ofrecemos opciones de confirmación y políticas de cancelación personalizables. Esto ha demostrado reducir los no-shows hasta en un 40%.' : 'We send automatic SMS and email reminders before the reservation. We also offer customizable confirmation options and cancellation policies. This has been proven to reduce no-shows by up to 40%.'
    },
    {
      question: locale === 'es' ? '¿Qué datos de clientes obtengo?' : 'What customer data do I get?',
      answer: locale === 'es' ? 'Obtienes perfiles completos de clientes incluyendo historial de visitas, preferencias de mesa, información de contacto, y notas especiales. Esta información te ayuda a personalizar la experiencia y construir relaciones duraderas con tus clientes.' : 'You get complete guest profiles including visit history, table preferences, contact information, and special notes. This information helps you personalize the experience and build lasting relationships with your customers.'
    }
  ], `https://www.rayapp.io/${locale}/product/direct-bookings`, locale)

  // Breadcrumb schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: locale === 'es' ? 'Inicio' : 'Home', url: `https://www.rayapp.io/${locale}` },
    { name: locale === 'es' ? 'Productos' : 'Products', url: `https://www.rayapp.io/${locale}/products` },
    { name: locale === 'es' ? 'Reservas Directas' : 'Direct Bookings', url: `https://www.rayapp.io/${locale}/product/direct-bookings` }
  ])

  const combinedSchema = [faqSchema, breadcrumbSchema]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }}
      />
      <Bookings locale={locale} />
    </>
  )
}