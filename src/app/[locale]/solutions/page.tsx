import { Metadata } from 'next'
import Link from 'next/link'
import { 
  Smartphone, 
  Calendar, 
  Heart, 
  ShoppingCart, 
  MessageCircle, 
  Globe, 
  Mic, 
  Truck,
  ArrowRight
} from 'lucide-react'
import Card from '@/components/Card'
import dynamic from 'next/dynamic'
import { type Locale } from '@/lib/i18n'
// Dynamically import CTASection to reduce initial bundle size
const CTASection = dynamic(() => import('@/components/CTASection'), {
  ssr: true,
  loading: () => null,
})

interface SolutionsPageProps {
  params: { locale: string }
}

export async function generateMetadata({ params }: SolutionsPageProps): Promise<Metadata> {
  const { locale } = params
  
  return {
    title: 'Solutions - Complete Restaurant Technology Platform | RAY',
    description: 'Discover RAY\'s 8 powerful solutions: Branded Apps, Direct Bookings, Loyalty Programs, Online Orders, WhatsApp Delivery, Restaurant Website AI, Voice Agent, and Zero-Commission Delivery. Everything you need to grow your restaurant.',
    openGraph: {
      title: 'Solutions - Complete Restaurant Technology Platform | RAY',
      description: 'Discover RAY\'s 8 powerful solutions: Branded Apps, Direct Bookings, Loyalty Programs, Online Orders, WhatsApp Delivery, Restaurant Website AI, Voice Agent, and Zero-Commission Delivery. Everything you need to grow your restaurant.',
      url: `https://www.rayapp.io/${locale}/solutions`,
    },
    twitter: {
      title: 'Solutions - Complete Restaurant Technology Platform | RAY',
      description: 'Discover RAY\'s 8 powerful solutions: Branded Apps, Direct Bookings, Loyalty Programs, Online Orders, WhatsApp Delivery, Restaurant Website AI, Voice Agent, and Zero-Commission Delivery. Everything you need to grow your restaurant.',
    },
    alternates: {
      canonical: `https://www.rayapp.io/${locale}/solutions`,
    },
  }
}

const solutions = [
  {
    icon: Smartphone,
    title: 'Branded Mobile Apps',
    description: 'Create your own branded mobile app to increase customer engagement and loyalty.',
    features: [
      'Custom branded mobile app',
      'Push notifications',
      'Loyalty program integration',
      'Online ordering system',
      'Customer analytics'
    ],
    link: '/product/branded-apps',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Calendar,
    title: 'Direct Bookings',
    description: 'Accept reservations directly through your website and reduce no-shows.',
    features: [
      'Online reservation system',
      'Table management',
      'Automated confirmations',
      'Waitlist management',
      'Integration with POS systems'
    ],
    link: '/product/direct-bookings',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Heart,
    title: 'Loyalty Programs',
    description: 'Build customer loyalty with personalized rewards and retention campaigns.',
    features: [
      'Points-based rewards system',
      'Tiered membership levels',
      'Birthday and anniversary rewards',
      'Referral programs',
      'Customer segmentation'
    ],
    link: '/product/loyalty',
    color: 'from-pink-500 to-pink-600'
  },
  {
    icon: ShoppingCart,
    title: 'Online Orders',
    description: 'Accept online orders directly through your website and increase revenue.',
    features: [
      'Online ordering system',
      'Menu management',
      'Payment processing',
      'Order tracking',
      'Delivery management'
    ],
    link: '/product/online-orders',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp Delivery',
    description: 'Accept orders through WhatsApp and provide seamless customer service.',
    features: [
      'WhatsApp integration',
      'Automated order processing',
      'Customer support chatbot',
      'Order status updates',
      'Payment collection'
    ],
    link: '/product/whatsapp-delivery',
    color: 'from-green-500 to-emerald-600'
  },
  {
    icon: Globe,
    title: 'Restaurant Website AI',
    description: 'AI-powered website that automatically updates with your menu and information.',
    features: [
      'AI-generated content',
      'Automatic menu updates',
      'SEO optimization',
      'Mobile-responsive design',
      'Analytics integration'
    ],
    link: '/product/restaurant-website-ai',
    color: 'from-indigo-500 to-indigo-600'
  },
  {
    icon: Mic,
    title: 'Voice Agent',
    description: 'AI voice assistant that handles phone calls and reservations 24/7.',
    features: [
      '24/7 phone automation',
      'Natural language processing',
      'Reservation management',
      'Customer service automation',
      'Multi-language support'
    ],
    link: '/product/voice-agent',
    color: 'from-orange-500 to-orange-600'
  },
  {
    icon: Truck,
    title: 'Zero-Commission Delivery',
    description: 'In-house delivery system that eliminates third-party commission fees.',
    features: [
      'In-house delivery management',
      'Driver tracking',
      'Route optimization',
      'Commission-free orders',
      'Customer notifications'
    ],
    link: '/product/zero-commission-delivery',
    color: 'from-red-500 to-red-600'
  }
]

export default function SolutionsPage({ params }: SolutionsPageProps) {
  const locale = params.locale as Locale
  const isSpanish = locale === 'es'
  
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-ray-blue to-blue-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              {isSpanish ? '8 Soluciones Completas para tu Restaurante' : '8 Complete Solutions for Your Restaurant'}
            </h1>
            <p className="text-xl lg:text-2xl mb-8 max-w-4xl mx-auto opacity-90">
              {isSpanish 
                ? 'Todo lo que necesitas para hacer crecer tu restaurante: desde apps móviles hasta entrega sin comisiones.'
                : 'Everything you need to grow your restaurant: from mobile apps to commission-free delivery.'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href={`/${locale}/demo`}
                className="inline-flex items-center px-8 py-4 bg-white text-ray-blue font-bold rounded-xl hover:bg-gray-100 transition-colors"
              >
                {isSpanish ? 'Reservar Demo Gratis' : 'Book Free Demo'}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                href={`/${locale}/pricing`}
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-ray-blue transition-colors"
              >
                {isSpanish ? 'Ver Precios' : 'View Pricing'}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon
              return (
                <Link key={index} href={`/${locale}${solution.link}`} className="group">
                  <Card className="h-full group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    <div className="p-8">
                      <div className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-ray-dark-900 mb-4 group-hover:text-ray-blue transition-colors">
                        {solution.title}
                      </h3>
                      
                      <p className="text-ray-darkGray mb-6 leading-relaxed">
                        {solution.description}
                      </p>
                      
                      <ul className="space-y-3 mb-6">
                        {solution.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-ray-green rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-sm text-ray-dark-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="flex items-center text-ray-blue font-semibold group-hover:text-ray-dark-900 transition-colors">
                        <span className="mr-2">
                          {isSpanish ? 'Saber más' : 'Learn more'}
                        </span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
      
      <CTASection locale={locale} />
    </div>
  )
}
