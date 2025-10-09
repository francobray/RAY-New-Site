import { Metadata } from 'next'
import AutomatedMarketing from '../../../../components/pages/product/AutomatedMarketing'
import { Locale } from '../../../../lib/i18n'
import { generateFAQSchema, generateBreadcrumbSchema } from '@/utils/schema'

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
  const { locale } = params
  
  // FAQ schema - using the same FAQs from the component
  const faqSchema = generateFAQSchema([
    {
      question: locale === 'es' ? '¿Cómo funciona el marketing automatizado?' : 'How does automated marketing work?',
      answer: locale === 'es' ? 'Recopilamos datos de cada pedido y cliente, luego usamos IA para crear y enviar campañas personalizadas por email, SMS y redes sociales automáticamente.' : 'We collect data from every order and customer, then use AI to create and send personalized campaigns via email, SMS, and social media automatically.'
    },
    {
      question: locale === 'es' ? '¿Qué tipo de campañas pueden ejecutarse?' : 'What type of campaigns can be run?',
      answer: locale === 'es' ? 'Campañas de re-engagement, promociones personalizadas, recordatorios de cumpleaños, seguimiento post-visita, y campañas basadas en comportamiento de compra.' : 'Re-engagement campaigns, personalized promotions, birthday reminders, post-visit follow-ups, and campaigns based on purchase behavior.'
    },
    {
      question: locale === 'es' ? '¿Cómo miden el ROI de las campañas?' : 'How do you measure campaign ROI?',
      answer: locale === 'es' ? 'Proporcionamos análisis detallados que muestran el impacto de cada campaña en ventas, retención de clientes, y valor de vida del cliente.' : 'We provide detailed analytics showing each campaign\'s impact on sales, customer retention, and customer lifetime value.'
    }
  ], 'https://rayapp.io/product/automated-marketing')

  // Breadcrumb schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: locale === 'es' ? 'Inicio' : 'Home', url: `https://rayapp.io/${locale}` },
    { name: locale === 'es' ? 'Productos' : 'Products', url: `https://rayapp.io/${locale}/products` },
    { name: locale === 'es' ? 'Marketing Automatizado' : 'Automated Marketing', url: 'https://rayapp.io/product/automated-marketing' }
  ])

  const combinedSchema = [faqSchema, breadcrumbSchema]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }}
      />
      <AutomatedMarketing locale={locale} />
    </>
  )
}



