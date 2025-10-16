import { Metadata } from 'next'
import OnlineOrders from '@/components/pages/product/OnlineOrders'
import { type Locale, generateHreflangMetadata, generateOpenGraphLocale } from '@/lib/i18n'
import { generateProductWithReviewsSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/utils/schema'

interface OnlineOrdersPageProps {
  params: { locale: Locale }
}

export async function generateMetadata({ params }: OnlineOrdersPageProps): Promise<Metadata> {
  const { locale } = params
  const path = '/product/online-orders'
  const hreflangData = generateHreflangMetadata(path, locale)
  const ogLocale = generateOpenGraphLocale(locale)

  return {
    title: locale === 'es' ? 'Pedidos Online - Impulsa Ingresos Desde Canales Digitales | RAY' : 'Online Orders - Grow Restaurant Revenue From Digital Channels | RAY',
    description: locale === 'es' 
      ? 'Aumenta ingresos desde pedidos online, reservas y delivery con integraciones perfectas, sistemas de pedidos directos e insights basados en datos que incrementan márgenes de ganancia.'
      : 'Grow revenue from online orders, reservations, and deliveries with seamless integrations, direct ordering systems, and data-driven insights that increase profit margins.',
    alternates: hreflangData,
    openGraph: {
      title: locale === 'es' ? 'Pedidos Online - RAY' : 'Online Orders - RAY',
      description: locale === 'es' 
        ? 'Aumenta ingresos desde pedidos online, reservas y delivery con integraciones perfectas y sistemas de pedidos directos.'
        : 'Grow revenue from online orders, reservations, and deliveries with seamless integrations, direct ordering systems, and data-driven insights that increase profit margins.',
      url: `https://www.rayapp.io/${locale}${path}`,
      ...ogLocale,
    },
    twitter: {
      title: locale === 'es' ? 'Pedidos Online - RAY' : 'Online Orders - RAY',
      description: locale === 'es' 
        ? 'Aumenta ingresos desde pedidos online, reservas y delivery con integraciones perfectas.'
        : 'Grow revenue from online orders, reservations, and deliveries with seamless integrations.',
    },
  }
}

export default function OnlineOrdersPage({ params }: OnlineOrdersPageProps) {
  const locale = params.locale as Locale
  
  // Product schema with reviews
  const productSchema = generateProductWithReviewsSchema({
    name: 'Online Orders Platform',
    description: 'Grow revenue from online orders, reservations, and deliveries with seamless integrations, direct ordering systems, and data-driven insights that increase profit margins.',
    url: `https://www.rayapp.io/${locale}/product/online-orders`,
    price: '270',
    features: [
      'Direct ordering system',
      'Third-party platform integration',
      'Real-time analytics',
      'Customer data insights',
      'Revenue optimization tools'
    ],
    aggregateRating: {
      ratingValue: 4.8,
      reviewCount: 127
    },
    reviews: [
      {
        author: 'María González',
        rating: 5,
        reviewBody: 'Our online orders increased by 40% in just 2 months. The direct ordering system helps us keep more profit margins compared to third-party apps.',
        datePublished: '2024-11-15'
      },
      {
        author: 'Carlos Rodriguez',
        rating: 5,
        reviewBody: 'The integration with our POS system is seamless. We can now track all orders in one place and make better business decisions.',
        datePublished: '2024-10-28'
      },
      {
        author: 'Ana Martinez',
        rating: 4,
        reviewBody: 'Great platform for managing online orders. The analytics help us understand customer preferences and optimize our menu.',
        datePublished: '2024-09-12'
      }
    ]
  })

  // FAQ schema - using the same FAQs from the component
  const faqSchema = generateFAQSchema([
    {
      question: locale === 'es' ? '¿Cómo puedo hacer que mis clientes ordenen directamente?' : 'How can I get my customers to order directly?',
      answer: locale === 'es' ? 'Implementamos un sistema de pedidos directo en tu sitio web y redes sociales, junto con herramientas de marketing para promocionar el pedido directo sobre las apps de terceros.' : 'We implement a direct ordering system on your website and social media, along with marketing tools to promote direct ordering over third-party apps.'
    },
    {
      question: locale === 'es' ? '¿Qué tan rápido puedo ver resultados?' : 'How quickly can I see results?',
      answer: locale === 'es' ? 'La mayoría de nuestros clientes ven un aumento del 30-50% en pedidos directos dentro de los primeros 60 días de implementación.' : 'Most of our clients see a 30-50% increase in direct orders within the first 60 days of implementation.'
    },
    {
      question: locale === 'es' ? '¿Funciona con mi sistema POS actual?' : 'Does it work with my current POS system?',
      answer: locale === 'es' ? 'Sí, nos integramos con más de 50 sistemas POS populares para sincronizar pedidos, menús y datos de clientes automáticamente.' : 'Yes, we integrate with over 50 popular POS systems to automatically sync orders, menus, and customer data.'
    }
  ], `https://www.rayapp.io/${locale}/product/online-orders`, locale)

  // Breadcrumb schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: locale === 'es' ? 'Inicio' : 'Home', url: `https://www.rayapp.io/${locale}` },
    { name: locale === 'es' ? 'Productos' : 'Products', url: `https://www.rayapp.io/${locale}/products` },
    { name: locale === 'es' ? 'Pedidos Online' : 'Online Orders', url: `https://www.rayapp.io/${locale}/product/online-orders` }
  ])

  const combinedSchema = [productSchema, faqSchema, breadcrumbSchema]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }}
      />
      <OnlineOrders locale={locale} />
    </>
  )
}