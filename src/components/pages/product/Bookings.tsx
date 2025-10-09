'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Calendar, Users, BarChart3, Clock, Heart, CheckCircle, ArrowRight, TrendingUp, Star, UserCheck, RotateCcw, Shield, ChevronDown, ChevronUp } from 'lucide-react'
import Card from '../../Card'
import Button from '../../shared/BaseButton'
import { useTranslations } from '../../../hooks/useTranslations'
import { type Locale } from '@/lib/i18n'

interface BookingsProps {
  locale: Locale
}

const Bookings: React.FC<BookingsProps> = ({ locale }) => {
  const t = useTranslations(locale)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const benefits = [
    {
      icon: Calendar,
      title: t.BOOKINGS_PAGE.FEATURES_SECTION.FEATURES[0].TITLE,
      description: t.BOOKINGS_PAGE.FEATURES_SECTION.FEATURES[0].DESCRIPTION,
      details: [
        'Embedded booking widget for your website',
        '24/7 reservation capture',
        'Real-time availability updates',
        'Mobile-optimized booking experience'
      ]
    },
    {
      icon: Users,
      title: t.BOOKINGS_PAGE.FEATURES_SECTION.FEATURES[1].TITLE,
      description: t.BOOKINGS_PAGE.FEATURES_SECTION.FEATURES[1].DESCRIPTION,
      details: [
        'Digital waitlist management',
        'SMS notifications for guests',
        'Walk-in queue optimization',
        'Estimated wait time tracking'
      ]
    },
    {
      icon: Heart,
      title: t.BOOKINGS_PAGE.FEATURES_SECTION.FEATURES[2].TITLE,
      description: t.BOOKINGS_PAGE.FEATURES_SECTION.FEATURES[2].DESCRIPTION,
      details: [
        'Comprehensive guest profiles',
        'Dining preferences tracking',
        'Visit history and notes',
        'Special occasion reminders'
      ]
    },
    {
      icon: BarChart3,
      title: t.BOOKINGS_PAGE.FEATURES_SECTION.FEATURES[3].TITLE,
      description: t.BOOKINGS_PAGE.FEATURES_SECTION.FEATURES[3].DESCRIPTION,
      details: [
        'Booking trend analysis',
        'No-show rate tracking',
        'Peak hour identification',
        'Revenue optimization insights'
      ]
    },
    {
      icon: Clock,
      title: t.BOOKINGS_PAGE.FEATURES_SECTION.FEATURES[4].TITLE,
      description: t.BOOKINGS_PAGE.FEATURES_SECTION.FEATURES[4].DESCRIPTION,
      details: [
        'Automated booking confirmations',
        'SMS and email reminders',
        'Customizable message templates',
        'Two-way communication system'
      ]
    },
    {
      icon: Star,
      title: t.BOOKINGS_PAGE.FEATURES_SECTION.FEATURES[5].TITLE,
      description: t.BOOKINGS_PAGE.FEATURES_SECTION.FEATURES[5].DESCRIPTION,
      details: [
        'Points-based loyalty system',
        'Automated reward tracking',
        'Special member pricing',
        'Birthday and anniversary perks'
      ]
    }
  ]

  const metrics = [
    {
      icon: UserCheck,
      value: t.BOOKINGS_PAGE.RESULTS_SECTION.STATS[0].TITLE,
      label: t.BOOKINGS_PAGE.RESULTS_SECTION.STATS[0].SUBTITLE,
      description: t.BOOKINGS_PAGE.RESULTS_SECTION.STATS[0].DESCRIPTION
    },
    {
      icon: RotateCcw,
      value: t.BOOKINGS_PAGE.RESULTS_SECTION.STATS[1].TITLE,
      label: t.BOOKINGS_PAGE.RESULTS_SECTION.STATS[1].SUBTITLE,
      description: t.BOOKINGS_PAGE.RESULTS_SECTION.STATS[1].DESCRIPTION
    },
    {
      icon: Shield,
      value: t.BOOKINGS_PAGE.RESULTS_SECTION.STATS[2].TITLE,
      label: t.BOOKINGS_PAGE.RESULTS_SECTION.STATS[2].SUBTITLE,
      description: t.BOOKINGS_PAGE.RESULTS_SECTION.STATS[2].DESCRIPTION
    }
  ]

  const faqs = [
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
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-ray-promise relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(13,121,229,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(111,191,115,0.1),transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-12 items-center">
            <div className="text-center lg:text-left relative">
              <div className="inline-flex items-center px-4 py-2 bg-ray-blue/10 rounded-full text-ray-blue text-sm font-medium mb-6">
                <Calendar className="w-4 h-4 mr-2" />
                {t.BOOKINGS_PAGE.BADGE}
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ray-dark-900 leading-tight mb-6">
                {t.BOOKINGS_PAGE.HERO_TITLE} {' '}
                <span className="text-ray-blue">
                  {t.BOOKINGS_PAGE.HERO_TITLE_HIGHLIGHT}
                </span>
              </h1>
              <p className="text-xl text-ray-dark-700 mb-8 max-w-2xl leading-relaxed">
                {t.BOOKINGS_PAGE.HERO_SUBTITLE}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => window.open('https://grader.rayapp.io/', '_blank')}
                  className="shadow-xl hover:shadow-2xl transition-all duration-300 group"
                  data-cta="grader"
                  data-analytics="bookings_hero"
                  aria-label="Scan your restaurant"
                >
                  {t.BOOKINGS_PAGE.CTA_PRIMARY}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  href={`/${locale}/demo`}
                  className="shadow-xl hover:shadow-2xl transition-all duration-300"
                  data-cta="demo-expert"
                  data-analytics="bookings_hero"
                  aria-label="Talk to an expert"
                >
                  {t.BOOKINGS_PAGE.CTA_SECONDARY}
                </Button>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-8 text-sm text-ray-dark-600">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-ray-green mr-2" />
                  <span>{t.BOOKINGS_PAGE.STATS.TABLE_UTILIZATION}</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-ray-green mr-2" />
                  <span>{t.BOOKINGS_PAGE.STATS.NO_SHOWS}</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src="/images/product-website/Temple-website-bookings.png"
                  alt={locale === 'es' ? 'Interfaz de reservas del sitio web de Temple' : 'Temple website booking interface'}
                  width={800}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-ray-blue/10 rounded-full text-ray-blue text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4 mr-2" />
              {t.BOOKINGS_PAGE.FEATURES_SECTION.BADGE}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-6">
              {locale === 'es' ? 'Obtén Más Reservas Directas. Conéctate con ' : 'Get More Direct Bookings. Connect with '}
              <span className="text-ray-blue">
                {locale === 'es' ? 'Cada Cliente' : 'Every Customer'}
              </span>
            </h2>
            <p className="text-xl text-ray-darkGray max-w-3xl mx-auto leading-relaxed">{t.BOOKINGS_PAGE.FEATURES_SECTION.SUBTITLE}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-ray-blue rounded-lg mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-ray-dark-900 mb-3">{benefit.title}</h3>
                <p className="text-ray-darkGray mb-4 flex-grow">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 relative overflow-hidden min-h-[600px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image 
            src="/images/bookings/fondo-bookings-01.jpg"
            alt="Restaurant booking background"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <div className="mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                {locale === 'es' ? 'Resultados Comprobados para Operaciones de Restaurantes' : 'Proven Results for Restaurant Operations'}
              </h2>
              <p className="text-xl text-white/90 leading-relaxed">
                {locale === 'es' ? 'Mira el impacto medible que nuestra plataforma de reservas tiene en la eficiencia y los ingresos del restaurante.' : 'See the measurable impact our booking platform has on restaurant efficiency and revenue.'}
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              {metrics.map((metric, index) => (
                <div key={index} className="text-left group">
                  <div className="flex items-start space-x-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl mb-2 group-hover:scale-110 transition-transform duration-300 shadow-lg flex-shrink-0">
                      <metric.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-2xl md:text-3xl font-black text-white mb-1 group-hover:text-ray-green transition-colors duration-300">{metric.value}</div>
                      <div className="text-base font-semibold text-white mb-1 leading-tight">{metric.label}</div>
                      <div className="text-sm text-white/80 font-medium">{metric.description}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-6">
              {locale === 'es' ? 'Preguntas Frecuentes' : 'Frequently Asked Questions'}
            </h2>
            <p className="text-xl text-ray-darkGray">
              {locale === 'es' ? 'Todo lo que necesitas saber sobre nuestro sistema de reservas.' : 'Everything you need to know about our reservation system.'}
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="overflow-hidden">
                <button
                  className="w-full p-6 text-left flex justify-between items-start hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => toggleFaq(index)}
                >
                  <div className="flex-1 pr-4">
                    <h3 className="text-lg font-semibold text-ray-dark-900 mb-2">
                      {faq.question}
                    </h3>
                  </div>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-ray-blue flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-ray-blue flex-shrink-0" />
                  )}
                </button>
                
                {openFaq === index && (
                  <div className="px-6 pb-6 border-t border-gray-200">
                    <p className="text-ray-dark-700 leading-relaxed pt-4">
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(13,121,229,0.1),transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center px-4 py-2 bg-ray-dark-900/10 rounded-full text-ray-dark-900 text-sm font-medium mb-6">
            <Calendar className="w-4 h-4 mr-2" />
            {t.BOOKINGS_PAGE.FINAL_CTA.BADGE}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-6">{t.BOOKINGS_PAGE.FINAL_CTA.TITLE}</h2>
          <p className="text-xl text-ray-dark-700 mb-8 max-w-3xl mx-auto leading-relaxed">{t.BOOKINGS_PAGE.FINAL_CTA.SUBTITLE}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              onClick={() => window.open('https://grader.rayapp.io/', '_blank')}
              className="shadow-xl hover:shadow-2xl transition-all duration-300 group"
              data-cta="grader"
              data-analytics="bookings_final_cta"
              aria-label="Scan your restaurant"
            >
              {t.BOOKINGS_PAGE.FINAL_CTA.CTA_PRIMARY}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button
              variant="secondary"
              size="lg"
              href={`/${locale}/demo`}
              className="shadow-xl hover:shadow-2xl transition-all duration-300"
              data-cta="demo-free"
              data-analytics="bookings_final_cta"
              aria-label="Request free demo"
            >
              {t.BOOKINGS_PAGE.FINAL_CTA.CTA_SECONDARY}
            </Button>
          </div>
          <div className="mt-8 flex items-center justify-center space-x-6 text-sm text-ray-dark-600">
            {t.BOOKINGS_PAGE.FINAL_CTA.GUARANTEES.map((guarantee: string, index: number) => (
              <div key={index} className="flex items-center">
                <div className="w-2 h-2 bg-ray-green rounded-full mr-2"></div>
                <span>{guarantee}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Bookings