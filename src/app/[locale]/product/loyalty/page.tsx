import { Metadata } from 'next'
import Loyalty from '@/components/pages/product/Loyalty'
import { type Locale } from '@/lib/i18n'
import { generateFAQSchema, generateBreadcrumbSchema } from '@/utils/schema'

interface LoyaltyPageProps {
  params: { locale: Locale }
}

export async function generateMetadata({ params }: LoyaltyPageProps): Promise<Metadata> {
  const { locale } = params
  
  return {
    title: 'Customer Loyalty Program for Restaurants | RAY',
    description: 'Build customer loyalty with a rewards program like the national chains. Keep guests coming back for more with points, rewards, and personalized offers.',
    openGraph: {
      title: 'Customer Loyalty Program for Restaurants | RAY',
      description: 'Build customer loyalty with a rewards program like the national chains. Keep guests coming back for more with points, rewards, and personalized offers.',
      url: `https://www.rayapp.io/${locale}/product/loyalty`,
    },
    twitter: {
      title: 'Customer Loyalty Program for Restaurants | RAY',
      description: 'Build customer loyalty with a rewards program like the national chains. Keep guests coming back for more with points, rewards, and personalized offers.',
    },
    alternates: {
      canonical: `https://www.rayapp.io/${locale}/product/loyalty`,
    },
  }
}

export default function LoyaltyPage({ params }: LoyaltyPageProps) {
  const locale = params.locale as Locale
  
  // FAQ schema - using the same FAQs from the component
  const faqSchema = generateFAQSchema([
    {
      question: locale === 'es' ? '¿Cómo funciona el programa de lealtad?' : 'How does the loyalty program work?',
      answer: locale === 'es' ? 'Los clientes ganan puntos por cada compra y pueden canjearlos por recompensas exclusivas. El sistema se integra automáticamente con tu POS.' : 'Customers earn points for every purchase and can redeem them for exclusive rewards. The system automatically integrates with your POS.'
    },
    {
      question: locale === 'es' ? '¿Qué tipo de recompensas puedo ofrecer?' : 'What kind of rewards can I offer?',
      answer: locale === 'es' ? 'Puedes crear recompensas personalizadas como descuentos, productos gratis, o experiencias exclusivas. También ofrecemos plantillas predefinidas.' : 'You can create custom rewards like discounts, free items, or exclusive experiences. We also provide predefined templates.'
    },
    {
      question: locale === 'es' ? '¿Cómo promociono el programa de lealtad?' : 'How do I promote the loyalty program?',
      answer: locale === 'es' ? 'Incluimos herramientas de marketing para promocionar tu programa de lealtad a través de email, SMS, redes sociales y en el punto de venta.' : 'We include marketing tools to promote your loyalty program through email, SMS, social media, and at the point of sale.'
    }
  ], `https://www.rayapp.io/${locale}/product/loyalty`)

  // Breadcrumb schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: locale === 'es' ? 'Inicio' : 'Home', url: `https://www.rayapp.io/${locale}` },
    { name: locale === 'es' ? 'Productos' : 'Products', url: `https://www.rayapp.io/${locale}/products` },
    { name: locale === 'es' ? 'Programa de Loyalty' : 'Loyalty Program', url: `https://www.rayapp.io/${locale}/product/loyalty` }
  ])

  const combinedSchema = [faqSchema, breadcrumbSchema]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }}
      />
      <Loyalty locale={locale} />
    </>
  )
}



