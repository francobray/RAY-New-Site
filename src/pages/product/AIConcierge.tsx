import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { MessageSquare, Clock, Globe, Shield, TrendingUp, ArrowRight, CheckCircle, Bot, Users, Star, ChevronDown, ChevronUp, Award, Zap, Languages, Phone } from 'lucide-react'
import SEOHead from '../../components/SEOHead'
import { generatePageMeta } from '../../utils/seo'
import { generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateServiceSchema } from '../../utils/schema'
import Card from '../../components/Card'
import Button from '../../components/shared/BaseButton'
import HubSpotUnifiedModal from '../../components/HubSpotUnifiedModal'
import { useHubSpotModal } from '../../hooks/useHubSpotModal'

const valueStats = [
  {
    icon: Clock,
    title: '24/7 Instant Replies',
    description: 'Never miss a customer message'
  },
  {
    icon: TrendingUp,
    title: '+30% More Actions',
    description: 'From Google & social channels'
  },
  {
    icon: Languages,
    title: 'Multilingual',
    description: 'English/Español support'
  }
]

const howItWorks = [
  {
    step: '1',
    title: 'Ask',
    description: 'Guests message you on WhatsApp, Instagram DMs, SMS, or Google.',
    icon: MessageSquare
  },
  {
    step: '2',
    title: 'Answer',
    description: 'AI Concierge replies in seconds: hours, menus, directions, reservations, reviews policy.',
    icon: Bot
  },
  {
    step: '3',
    title: 'Convert',
    description: 'Sends them to book, order, or visit—then logs interactions in your dashboard.',
    icon: TrendingUp
  }
]

const features = [
  {
    icon: Zap,
    title: 'Instant Answers, No Staff Load',
    description: 'Hours, menu, location, parking, promos—resolved in one message.',
    details: [
      'Automated responses to common questions',
      'Real-time business information updates',
      'No staff interruption during busy hours',
      'Consistent information across all channels'
    ]
  },
  {
    icon: Users,
    title: 'Bookings & Orders',
    description: 'Guides guests to your reservation link or first-party ordering.',
    details: [
      'Direct integration with booking systems',
      'Seamless order placement guidance',
      'Upselling and cross-selling opportunities',
      'Conversion tracking and optimization'
    ]
  },
  {
    icon: Shield,
    title: 'Reputation Protection',
    description: 'Deflects complaints to a private channel before they become public 1-star reviews.',
    details: [
      'Early complaint detection and routing',
      'Private resolution channels',
      'Staff notification for urgent issues',
      'Review sentiment monitoring'
    ]
  },
  {
    icon: Globe,
    title: 'Multilingual',
    description: 'English/Español out of the box.',
    details: [
      'Native Spanish and English support',
      'Cultural context awareness',
      'Automatic language detection',
      'Localized responses and recommendations'
    ]
  },
  {
    icon: Bot,
    title: 'Training on Your Brand',
    description: 'Uses your FAQs, policies, and tone; easy updates from the dashboard.',
    details: [
      'Custom brand voice and personality',
      'Easy FAQ management interface',
      'Policy and procedure integration',
      'Continuous learning and improvement'
    ]
  },
  {
    icon: CheckCircle,
    title: 'Compliance & Opt-in',
    description: 'Clear consent and opt-out; audit trail for peace of mind.',
    details: [
      'GDPR and privacy compliance',
      'Clear opt-in/opt-out mechanisms',
      'Complete interaction audit trails',
      'Data protection and security'
    ]
  }
]

const whyRAY = [
  {
    title: 'Una sola plataforma',
    description: 'SEO local, reseñas, analítica y ahora Concierge en un solo lugar.'
  },
  {
    title: 'Implementación rápida',
    description: 'Opt-in + QRs configurados en minutos.'
  },
  {
    title: 'Métricas en vivo',
    description: 'Ranking por local y equipo con dashboards en tiempo real.'
  }
]

const testimonials = [
  {
    quote: 'Subimos de 4.3 a 4.7 en 5 meses y aumentaron las visitas desde Maps.',
    author: 'Restaurant Owner',
    business: 'Local Restaurant'
  },
  {
    quote: 'Menos llamadas, más reservas confirmadas desde chat.',
    author: 'Manager',
    business: 'Busy Restaurant'
  }
]

const integrations = [
  {
    category: 'Channels',
    items: ['WhatsApp', 'SMS', 'Instagram DMs', 'Google Business Messages']
  },
  {
    category: 'Systems',
    items: ['POS y reservas de terceros', 'Formularios propios', 'Links de pedidos']
  }
]

const faqs = [
  {
    question: '¿Cuánto tarda en implementarse?',
    answer: 'Opt-in en minutos; ajustes de contenido en 1 hora.'
  },
  {
    question: '¿Responde como "robot"?',
    answer: 'No. Usa tu tono y FAQs; puedes revisar y mejorar respuestas.'
  },
  {
    question: '¿Qué pasa con quejas?',
    answer: 'Las canaliza en privado y notifica a tu equipo.'
  },
  {
    question: '¿Multi-sede?',
    answer: 'Sí, contenido y horarios por local, con métricas por tienda.'
  },
  {
    question: '¿Privacidad y consentimiento?',
    answer: 'Opt-in/opt-out y registro de interacción incluidos.'
  }
]

const AIConcierge: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const { 
    isModalOpen,
    currentConfig,
    openModal,
    closeModal
  } = useHubSpotModal()

  const pageMeta = generatePageMeta({
    title: 'AI Concierge for Restaurants | RAY',
    description: 'Responde al instante, 24/7. Convierte mensajes en visitas, reservas y pedidos. Multilingüe. Piloto sin riesgo.',
    path: '/product/ai-concierge'
  })

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const productSchema = [
    generateProductSchema({
      name: 'AI Concierge',
      description: 'AI-powered customer service that converts messages into bookings and orders automatically',
      url: pageMeta.canonical,
      features: [
        '24/7 instant customer responses',
        'Multilingual support (English/Español)',
        'Booking and order conversion',
        'Reputation protection',
        'Brand-trained AI responses'
      ]
    }),
    generateServiceSchema({
      name: 'AI Concierge Service',
      description: 'Automated customer service that converts messages into restaurant visits and orders',
      url: pageMeta.canonical
    }),
    generateFAQSchema(faqs),
    generateBreadcrumbSchema([
      { name: 'Home', url: 'https://rayapp.io/' },
      { name: 'Products', url: 'https://rayapp.io/products' },
      { name: 'AI Concierge', url: 'https://rayapp.io/product/ai-concierge' }
    ])
  ]

  return (
    <>
      <SEOHead
        {...pageMeta}
        schema={productSchema}
      />
      
      {/* AI-friendly page summary */}
      <div className="sr-only">
        <h1>RAY AI Concierge - Turn Messages into Bookings & Orders Automatically</h1>
        <p>RAY's AI Concierge is an automated customer service solution that answers guest messages instantly on WhatsApp, Instagram DMs, SMS, and Google Business Messages. The AI converts conversations into bookings, orders, and visits while protecting restaurant reputation by routing complaints privately. Available 24/7 in English and Spanish with brand-trained responses.</p>
        <p>Key features: Instant automated responses, booking and order conversion, reputation protection, multilingual support, brand voice training, and compliance with privacy regulations. Results include 30% more actions from Google and social channels.</p>
      </div>
      
      {/* Hero Section */}
      <section className="py-20 bg-ray-promise relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(13,121,229,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(111,191,115,0.08),transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm mb-6">
                <Bot className="w-4 h-4 mr-2 text-ray-blue" />
                <span className="text-sm font-medium text-ray-dark-900">AI-Powered Customer Service</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ray-dark-900 leading-[0.9] mb-6">
                Turn Messages Into{' '}
                <span className="bg-gradient-to-r from-ray-blue to-ray-green bg-clip-text text-transparent">
                  Bookings & Orders
                </span>
                —Automatically
              </h1>
              
              <p className="text-xl text-ray-dark-700 mb-8 leading-relaxed max-w-xl">
                RAY's AI Concierge answers guests instantly, converts chats into visits, reservations, and orders, and protects your reputation—24/7, in multiple languages.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Button 
                  variant="primary" 
                  size="lg"
                  className="shadow-xl hover:shadow-2xl transition-all duration-300 group"
                  href="https://grader.rayapp.io/"
                  external={true}
                  data-cta="grader"
                  data-analytics="ai_concierge_hero"
                  aria-label="Scan your restaurant"
                >
                  Scan Your Restaurant
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="shadow-xl hover:shadow-2xl transition-all duration-300"
                  onClick={() => openModal('demo-expert')}
                  data-cta="demo-expert"
                  data-analytics="ai_concierge_hero"
                  aria-label="See how it works"
                >
                  See How It Works
                </Button>
              </div>
              
              {/* Value Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {valueStats.map((stat, index) => {
                  const IconComponent = stat.icon
                  return (
                    <div key={index} className="flex items-center justify-center lg:justify-start">
                      <div className="flex items-center px-3 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm">
                        <IconComponent className="w-4 h-4 text-ray-blue mr-2" />
                        <div className="text-sm">
                          <div className="font-semibold text-ray-dark-900">{stat.title}</div>
                          <div className="text-ray-darkGray text-xs">{stat.description}</div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            
            {/* Hero Visual - Chat Interface Mockup */}
            <div className="relative">
              <div className="relative max-w-sm mx-auto">
                {/* Phone Frame */}
                <div className="relative bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
                  {/* Screen */}
                  <div className="bg-white rounded-[2rem] overflow-hidden">
                    <div className="p-4 space-y-3">
                      {/* Header */}
                      <div className="flex items-center justify-between bg-ray-blue text-white p-3 rounded-lg">
                        <div className="flex items-center">
                          <Bot className="w-5 h-5 mr-2" />
                          <div className="text-sm font-bold">RAY Concierge</div>
                        </div>
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      </div>
                      
                      {/* Chat Messages */}
                      <div className="space-y-3">
                        {/* Customer message */}
                        <div className="flex justify-end">
                          <div className="bg-blue-500 text-white p-2 rounded-lg text-sm max-w-[80%]">
                            What time do you close tonight?
                          </div>
                        </div>
                        
                        {/* AI Response */}
                        <div className="flex justify-start">
                          <div className="bg-gray-100 text-gray-900 p-2 rounded-lg text-sm max-w-[80%]">
                            We're open until 11 PM tonight! Would you like to make a reservation? 🍽️
                          </div>
                        </div>
                        
                        {/* Customer follow-up */}
                        <div className="flex justify-end">
                          <div className="bg-blue-500 text-white p-2 rounded-lg text-sm max-w-[80%]">
                            Yes, table for 2 at 8 PM
                          </div>
                        </div>
                        
                        {/* AI booking response */}
                        <div className="flex justify-start">
                          <div className="bg-gray-100 text-gray-900 p-2 rounded-lg text-sm max-w-[80%]">
                            Perfect! Click here to complete your reservation: [Book Now]
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Phone Details */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-gray-800 rounded-full mt-2"></div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-3 border border-gray-100">
                  <div className="text-lg font-bold text-ray-green">24/7</div>
                  <div className="text-xs text-ray-darkGray">Always on</div>
                </div>
                
                <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl p-3 border border-gray-100">
                  <div className="text-lg font-bold text-ray-blue">+30%</div>
                  <div className="text-xs text-ray-darkGray">More actions</div>
                </div>
                
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-ray-blue/20 to-ray-green/20 rounded-[2.5rem] -z-10 blur-xl scale-110"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-ray-blue/10 rounded-full text-ray-blue text-sm font-medium mb-6">
              <MessageSquare className="w-4 h-4 mr-2" />
              Simple 3-Step Process
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-6">
              How It Works
            </h2>
            <p className="text-xl text-ray-darkGray max-w-3xl mx-auto">
              From first message to confirmed booking in seconds—completely automated.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {howItWorks.map((step, index) => {
              const IconComponent = step.icon
              return (
                <div key={index} className="text-center relative">
                  {/* Connection Line */}
                  {index < howItWorks.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-ray-blue to-ray-green opacity-30 transform translate-x-4"></div>
                  )}
                  
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-ray-blue to-ray-green rounded-full text-white text-2xl font-bold mb-6 shadow-lg">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-ray-dark-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-ray-darkGray leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Icon */}
                  <div className="mt-4 flex justify-center">
                    <IconComponent className="w-8 h-8 text-ray-blue opacity-60" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-6">
              Core Features
            </h2>
            <p className="text-xl text-ray-darkGray max-w-3xl mx-auto leading-relaxed">
              Everything you need to automate customer service and drive more revenue from every conversation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 h-full flex flex-col group">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-ray-blue rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-ray-dark-900 mb-3">
                    {feature.title}
                  </h3>
                  
                  <p className="text-ray-darkGray mb-4 flex-grow leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start text-sm text-ray-dark-700">
                        <div className="w-1.5 h-1.5 bg-ray-green rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
      
      {/* Why RAY Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-6">
              Why RAY vs. Manual or 3 Tools
            </h2>
            <p className="text-xl text-ray-darkGray max-w-3xl mx-auto leading-relaxed">
              Get everything you need in one integrated platform instead of juggling multiple solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {whyRAY.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-ray-blue to-ray-green rounded-full text-white text-xl font-bold mb-6">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-ray-dark-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-ray-darkGray leading-relaxed">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Social Proof Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-ray-green/10 rounded-full text-ray-green text-sm font-medium mb-6">
              <Award className="w-4 h-4 mr-2" />
              Customer Results
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-6">
              Results & Social Proof
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-lg text-ray-dark-700 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                
                <div>
                  <div className="font-bold text-ray-dark-900">
                    {testimonial.author}
                  </div>
                  <div className="text-ray-darkGray text-sm">
                    {testimonial.business}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Integrations Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-6">
              Integrations
            </h2>
            <p className="text-xl text-ray-darkGray max-w-3xl mx-auto leading-relaxed">
              Works with your existing systems and communication channels.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {integrations.map((integration, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-ray-dark-900 mb-6">
                  {integration.category}
                </h3>
                <div className="space-y-3">
                  {integration.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center justify-center">
                      <div className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-ray-dark-700">
                        {item}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-sm text-ray-darkGray italic">
              *Integrations subject to availability and third-party terms
            </p>
          </div>
        </div>
      </section>
      
      {/* Pricing CTA Section */}
      <section className="py-20 bg-ray-promise relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(13,121,229,0.1),transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center px-4 py-2 bg-ray-dark-900/10 rounded-full text-ray-dark-900 text-sm font-medium mb-6">
            <Shield className="w-4 h-4 mr-2" />
            Risk-Free Pilot Program
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-6">
            Empieza con un piloto sin riesgo
          </h2>
          
          <p className="text-xl text-ray-dark-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Garantía de 30%+ en acciones desde Google Maps en 6 meses o devolvemos la inversión.
          </p>
          
          <Button 
            variant="primary" 
            size="lg"
            className="shadow-xl hover:shadow-2xl transition-all duration-300 group"
            onClick={() => openModal('demo-free')}
            data-cta="demo-free"
            data-analytics="ai_concierge_pricing"
            aria-label="Start your pilot"
          >
            Start Your Pilot
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
          
          <div className="mt-8 flex items-center justify-center space-x-6 text-sm text-ray-dark-600">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-ray-green rounded-full mr-2"></div>
              <span>Setup in minutes</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-ray-green rounded-full mr-2"></div>
              <span>No long-term contracts</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-ray-green rounded-full mr-2"></div>
              <span>30%+ guarantee</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-ray-darkGray">
              Everything you need to know about AI Concierge.
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-ray-blue focus:ring-offset-2 rounded-lg"
                  aria-expanded={openFaq === index}
                >
                  <h3 className="text-lg font-semibold text-ray-dark-900 pr-4">
                    {faq.question}
                  </h3>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-ray-blue flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-ray-blue flex-shrink-0" />
                  )}
                </button>
                
                {openFaq === index && (
                  <div className="mt-4 pt-4 border-t border-gray-200 animate-in fade-in slide-in-from-top duration-200">
                    <p className="text-ray-dark-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Final CTA Section */}
      <section className="py-24 bg-ray-promise relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(13,121,229,0.1),transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center px-4 py-2 bg-ray-dark-900/10 rounded-full text-ray-dark-900 text-sm font-medium mb-6">
            <Bot className="w-4 h-4 mr-2" />
            Ready to Automate Customer Service?
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-6">
            ¿Listo para convertir mensajes en ventas?
          </h2>
          
          <p className="text-xl text-ray-dark-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Start your AI Concierge pilot today and see how automated customer service can transform your restaurant's revenue.
          </p>
          
          <Button 
            variant="primary" 
            size="lg"
            className="shadow-xl hover:shadow-2xl transition-all duration-300 group"
            href="https://grader.rayapp.io/"
            external={true}
            data-cta="grader"
            data-analytics="ai_concierge_final_cta"
            aria-label="Scan your restaurant"
          >
            Scan Your Restaurant
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
          
          <div className="mt-8 flex items-center justify-center space-x-6 text-sm text-ray-dark-600">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-ray-green rounded-full mr-2"></div>
              <span>30%+ actions guarantee</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-ray-green rounded-full mr-2"></div>
              <span>Setup in 1 hour</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-ray-green rounded-full mr-2"></div>
              <span>Multilingual support</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* HubSpot Modals */}
      <HubSpotUnifiedModal
        isOpen={isModalOpen}
        onClose={closeModal}
        config={currentConfig}
      />
    </>
  )
}

export default AIConcierge