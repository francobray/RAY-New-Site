import { Metadata } from 'next'
import WebsiteBuilder from '../../../../components/pages/product/WebsiteBuilder'
import { Locale, generateHreflangMetadata, generateOpenGraphLocale } from '../../../../lib/i18n'
import { generateFAQSchema, generateBreadcrumbSchema } from '@/utils/schema'

interface PageProps {
  params: {
    locale: Locale
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = params
  const path = '/product/restaurant-website-ai'
  const hreflangData = generateHreflangMetadata(path, locale)
  const ogLocale = generateOpenGraphLocale(locale)
  
  const title = locale === 'es' 
    ? 'Website de tu restaurante - RAY'
    : 'Restaurant Website Builder - RAY'
    
  const description = locale === 'es'
    ? 'Sitios web de restaurante construidos para ventas primero, estilo después. Nuestro diseño comprobado genera tráfico de Google, optimiza aplicaciones de delivery y aloja tu competencia.'
    : 'Restaurant websites built for sales first, style second. Our proven design grows Google traffic, optimizes delivery apps, and hosts your competition.'

  return {
    title,
    description,
    alternates: hreflangData,
    openGraph: {
      title,
      description,
      type: 'website',
      url: `https://www.rayapp.io/${locale}${path}`,
      ...ogLocale,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description
    }
  }
}

export default function WebsiteBuilderPage({ params }: PageProps) {
  const { locale } = params
  
  // FAQ schema - using the same FAQs from the component
  const faqSchema = generateFAQSchema([
    {
      question: locale === 'es' ? '¿Qué incluye el sitio web personalizado?' : 'What does the custom website include?',
      answer: locale === 'es' ? 'Incluye diseño personalizado, integración con tu POS, sistema de reservas, pedidos online, y optimización SEO completa.' : 'Includes custom design, POS integration, reservation system, online ordering, and complete SEO optimization.'
    },
    {
      question: locale === 'es' ? '¿Cuánto tiempo toma crear mi sitio web?' : 'How long does it take to create my website?',
      answer: locale === 'es' ? 'El proceso completo toma entre 2-4 semanas, incluyendo diseño, desarrollo, integraciones y lanzamiento.' : 'The complete process takes 2-4 weeks, including design, development, integrations, and launch.'
    },
    {
      question: locale === 'es' ? '¿Puedo hacer cambios después del lanzamiento?' : 'Can I make changes after launch?',
      answer: locale === 'es' ? 'Sí, incluye un panel de administración fácil de usar para que puedas actualizar contenido, menús, y promociones por ti mismo.' : 'Yes, it includes an easy-to-use admin panel so you can update content, menus, and promotions yourself.'
    }
  ], `https://www.rayapp.io/${locale}/product/restaurant-website-ai`, locale)

  // Breadcrumb schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: locale === 'es' ? 'Inicio' : 'Home', url: `https://www.rayapp.io/${locale}` },
    { name: locale === 'es' ? 'Productos' : 'Products', url: `https://www.rayapp.io/${locale}/products` },
    { name: locale === 'es' ? 'Sitio Web IA' : 'AI Website Builder', url: `https://www.rayapp.io/${locale}/product/restaurant-website-ai` }
  ])

  const combinedSchema = [faqSchema, breadcrumbSchema]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }}
      />
      <WebsiteBuilder locale={locale} />
    </>
  )
}



