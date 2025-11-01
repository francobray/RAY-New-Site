'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { TrendingUp, ArrowRight, CheckCircle, Phone, ChevronDown, ChevronUp, DollarSign, Users } from 'lucide-react'
import Card from '../../shared/Card'
import Button from '../../shared/BaseButton'
import { type Locale } from '../../../lib/i18n'

interface ZeroCommissionDeliveryProps {
  locale?: Locale
}

const ZeroCommissionDelivery: React.FC<ZeroCommissionDeliveryProps> = ({ locale = 'es' }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const features = [
    {
      icon: DollarSign,
      title: locale === 'es' ? 'Tarifa fija para delivery' : 'Pay a flat rate for delivery',
      description: locale === 'es' ? 'Usa drivers de terceros a tarifas fijas favorables para delivery sin markup o drivers propios, tú eliges el mejor precio.' : 'Use third-party drivers at fixed rates favorable for delivery or small drivers, you choose the longer price.',
      details: locale === 'es' ? [
        'Tarifas transparentes sin sorpresas',
        'Control total sobre los costos de delivery'
      ] : [
        'Transparent rates with no surprises',
        'Full control over delivery costs'
      ]
    },
    {
      icon: Users,
      title: locale === 'es' ? 'Obtén los mejores drivers, sin comisión' : 'Get the best drivers, commission free',
      description: locale === 'es' ? 'Solo usamos drivers calificados 4.5 estrellas o más para entregar tu comida.' : 'We only use drivers rated 4.5 stars or higher to deliver your food.',
      details: locale === 'es' ? [
        'Drivers verificados y de alta calidad',
        'Servicio confiable para tus clientes'
      ] : [
        'Verified and high-quality drivers',
        'Reliable service for your customers'
      ]
    },
    {
      icon: Phone,
      title: locale === 'es' ? 'Una línea directa a tus clientes' : 'A direct line to your customers',
      description: locale === 'es' ? 'Puedes llamar a los clientes directamente. Cubrimos reembolsos por cualquier problema de delivery.' : 'You can call customers directly. We\'ll cover refunds for any delivery issues.',
      details: locale === 'es' ? [
        'Comunicación directa con clientes',
        'Soporte completo para problemas de delivery'
      ] : [
        'Direct communication with customers',
        'Full support for delivery issues'
      ]
    }
  ]

  const deliveryOptions = [
    {
      title: locale === 'es' ? 'Usa tus drivers internos, de terceros, o ambos.' : 'Use your in-house delivery drivers, third-party, or both.',
      description: locale === 'es' ? 'Opciones de delivery flexibles' : 'Flexible delivery options'
    },
    {
      title: locale === 'es' ? 'Los mejores drivers de terceros entregan por ti. Una tarifa fija. Sin markup de nosotros.' : 'Top third-party drivers deliver for you. One flat fee. No markup from us.',
      description: locale === 'es' ? 'Drivers de calidad con tarifas justas' : 'Quality drivers with fair rates'
    },
    {
      title: locale === 'es' ? 'Llama a tus clientes si es necesario. Pagaremos por cualquier problema de delivery.' : 'Call your customers if needed. We\'ll pay for any delivery problems.',
      description: locale === 'es' ? 'Soporte completo y garantía' : 'Full support and guarantee'
    }
  ]

  const faqs = [
    {
      question: locale === 'es' ? '¿Por qué los clientes ordenarían desde mi app en lugar de terceros?' : 'Why would customers order from my app instead of third parties?',
      answer: locale === 'es' ? 'Tu app ofrece una experiencia más directa y personalizada. Los clientes pueden ganar puntos de lealtad, obtener ofertas exclusivas, y tener comunicación directa contigo. Además, sus pedidos favoritos se guardan para reordenar fácilmente.' : 'Your app offers a more direct and personalized experience. Customers can earn loyalty points, get exclusive offers, and have direct communication with you. Plus, their favorite orders are saved for easy reordering.'
    },
    {
      question: locale === 'es' ? '¿Quién paga por el delivery, el cliente o el restaurante?' : 'Who pays for delivery, the guest or the restaurant?',
      answer: locale === 'es' ? 'Tú decides. Puedes cobrar a los clientes una tarifa de delivery, absorber el costo como parte de tu estrategia de precios, o usar un modelo híbrido. Te damos total flexibilidad para estructurar tus precios.' : 'You decide. You can charge customers a delivery fee, absorb the cost as part of your pricing strategy, or use a hybrid model. We give you total flexibility to structure your pricing.'
    },
    {
      question: locale === 'es' ? '¿Por qué las apps de terceros aceptarían esto?' : 'Why would third-party apps go for this?',
      answer: locale === 'es' ? 'Trabajamos con una red de drivers independientes y servicios de delivery que buscan más trabajo. Al ofrecer tarifas justas y volumen consistente, creamos una situación donde todos ganan: tú obtienes mejor servicio, los drivers ganan más, y los clientes reciben mejor experiencia.' : 'We work with a network of independent drivers and delivery services looking for more work. By offering fair rates and consistent volume, we create a win-win situation: you get better service, drivers earn more, and customers receive better experience.'
    }
  ]

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <>
      {/* AI-friendly page summary */}
      <div className="sr-only">
        <h1>{locale === 'es' ? 'RAY Delivery Sin Comisión - Delivery rentable y gran experiencia para clientes' : 'RAY Zero-Commission Delivery - Profitable delivery and great guest experience'}</h1>
        <p>{locale === 'es' ? 'RAY Delivery Sin Comisión ofrece delivery rentable con drivers de calidad y tarifas fijas transparentes.' : 'RAY Zero-Commission Delivery offers profitable delivery with quality drivers and transparent flat rates.'}</p>
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
                <TrendingUp className="w-4 h-4 mr-2 text-ray-blue" />
                <span className="text-sm font-medium text-ray-dark-900">
                  {locale === 'es' ? 'Delivery Rentable' : 'Profitable Delivery'}
                </span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ray-dark-900 leading-[0.9] mb-6">
                {locale === 'es' ? 'Delivery rentable y una ' : 'Profitable delivery and a '}
                <span className="bg-gradient-to-r from-ray-blue to-ray-green bg-clip-text text-transparent">
                  {locale === 'es' ? 'gran experiencia para clientes.' : 'great guest experience.'}
                </span>
              </h1>
              
              <p className="text-xl text-ray-dark-700 mb-8 leading-relaxed max-w-xl">
                {locale === 'es' ? 'Haz que tus clientes ordenen desde tu app, con drivers de alta calificación, a un precio justo.' : 'Get your customers to order from your app, with top-rated drivers, at a fair price.'}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Button 
                  variant="primary" 
                  size="lg"
                  className="shadow-xl hover:shadow-2xl transition-all duration-300 group"
                  href={`/${locale}/demo?utm_source=delivery-page&utm_medium=website&utm_campaign=site-cta-refresh-2025q4&utm_content=hero-demo`}
                  data-cta="demo"
                  data-analytics="delivery_hero"
                  aria-label="Get a demo"
                >
                  {locale === 'es' ? 'Agenda una Demo' : 'Get a demo'}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="shadow-xl hover:shadow-2xl transition-all duration-300"
                  href={`/${locale}/pricing?utm_source=delivery-page&utm_medium=website&utm_campaign=site-cta-refresh-2025q4&utm_content=hero-pricing`}
                  data-cta="pricing"
                  data-analytics="delivery_hero"
                  aria-label="View Pricing"
                >
                  {locale === 'es' ? 'Ver Precios' : 'View Pricing'}
                </Button>
              </div>
            </div>
            
            {/* Hero Visual - Desktop Order Tracking */}
            <div className="relative">
              <div className="relative max-w-lg mx-auto">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <picture>
                    <source
                      type="image/avif"
                      srcSet="/images/zero-commission/Temple-desktop-order-tracking-400w.avif 400w, /images/zero-commission/Temple-desktop-order-tracking-480w.avif 480w, /images/zero-commission/Temple-desktop-order-tracking-640w.avif 640w"
                      sizes="(max-width: 640px) 100vw, 480px"
                    />
                    <source
                      type="image/webp"
                      srcSet="/images/zero-commission/Temple-desktop-order-tracking-400w.webp 400w, /images/zero-commission/Temple-desktop-order-tracking-480w.webp 480w, /images/zero-commission/Temple-desktop-order-tracking-640w.webp 640w"
                      sizes="(max-width: 640px) 100vw, 480px"
                    />
                    <img
                      src="/images/zero-commission/Temple-desktop-order-tracking-480w.webp"
                      alt={locale === 'es' ? 'Interfaz de seguimiento de pedidos de escritorio de Temple' : 'Temple desktop order tracking interface'}
                      className="w-full h-auto"
                      width="480"
                      height="571"
                      fetchPriority="high"
                      loading="eager"
                    />
                  </picture>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-3 border border-gray-100">
                  <div className="text-lg font-bold text-ray-green">4.8★</div>
                  <div className="text-xs text-ray-darkGray">{locale === 'es' ? 'Drivers calificados' : 'Rated drivers'}</div>
                </div>
                
                <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl p-3 border border-gray-100">
                  <div className="text-lg font-bold text-ray-blue">$0</div>
                  <div className="text-xs text-ray-darkGray">{locale === 'es' ? 'Comisiones' : 'Commission'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-6">
              {locale === 'es' ? 'Delivery que es mejor para ti y tus clientes' : 'Delivery that\'s better for you and your guests'}
            </h2>
            <p className="text-xl text-ray-darkGray max-w-3xl mx-auto">
              {locale === 'es' ? 'Controla tu experiencia de delivery con drivers de calidad y precios transparentes.' : 'Control your delivery experience with quality drivers and transparent pricing.'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            {/* Left side - Real-time tracking app image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-xs mx-auto">
                <picture>
                  <source
                    type="image/avif"
                    srcSet="/images/online-ordering/Temple-App-RealTime-tracking-280w.avif 280w, /images/online-ordering/Temple-App-RealTime-tracking-320w.avif 320w, /images/online-ordering/Temple-App-RealTime-tracking-400w.avif 400w"
                    sizes="(max-width: 640px) 280px, 320px"
                  />
                  <source
                    type="image/webp"
                    srcSet="/images/online-ordering/Temple-App-RealTime-tracking-280w.webp 280w, /images/online-ordering/Temple-App-RealTime-tracking-320w.webp 320w, /images/online-ordering/Temple-App-RealTime-tracking-400w.webp 400w"
                    sizes="(max-width: 640px) 280px, 320px"
                  />
                  <img
                    src="/images/online-ordering/Temple-App-RealTime-tracking-320w.webp"
                    alt={locale === 'es' ? 'Interfaz de seguimiento en tiempo real de la app de Temple' : 'Temple app real-time tracking interface'}
                    className="w-full h-auto"
                    width="320"
                    height="692"
                    fetchPriority="high"
                    loading="eager"
                  />
                </picture>
              </div>
            </div>
            
            {/* Right side - Features */}
            <div className="space-y-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-ray-blue to-ray-green rounded-xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-ray-dark-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-ray-darkGray mb-4 leading-relaxed">
                        {feature.description}
                      </p>
                      <ul className="space-y-2">
                        {feature.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start text-sm text-ray-dark-700">
                            <CheckCircle className="w-4 h-4 text-ray-green mr-2 mt-0.5 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Options Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-6">
              {locale === 'es' ? 'Haz que tu comida sea entregada por drivers mejor calificados' : 'Get your food delivered by top-rated drivers'}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Zero commission drivers image */}
            <div className="relative">
              <Image
                src={`/images/zero-commission/zero-commission-drivers-${locale}.png`}
                alt={locale === 'es' ? 'Drivers de terceros sin comisión' : 'Third-party drivers without commission'}
                width={382}
                height={586}
                className="w-full h-auto max-w-sm mx-auto"
                sizes="(max-width: 768px) 100vw, 382px"
                quality={85}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
            </div>
            
            {/* Right side - Options list */}
            <div className="space-y-6">
              {deliveryOptions.map((option, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-ray-blue to-ray-green rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-ray-dark-900 mb-2">
                        {option.title}
                      </h3>
                      <p className="text-ray-darkGray text-sm">
                        {option.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-ray-dark-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            {locale === 'es' ? 'Haz crecer los re-pedidos con una app móvil' : 'Grow re-orders with a mobile app'}
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            {locale === 'es' ? 'Tu propia app móvil. RAY hace crecer tus pedidos repetidos con tu app móvil con marca.' : 'Your own mobile app. RAY grows your repeat orders with your branded mobile app.'}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="primary" 
              size="lg"
              className="shadow-xl hover:shadow-2xl transition-all duration-300"
              href={`/${locale}/demo?utm_source=delivery-page&utm_medium=website&utm_campaign=site-cta-refresh-2025q4&utm_content=final-demo`}
              data-cta="demo"
              data-analytics="delivery_final"
            >
              {locale === 'es' ? 'Agenda una Demo' : 'Get a demo'}
            </Button>
            <Button 
              variant="secondary" 
              size="lg"
              className="shadow-xl hover:shadow-2xl transition-all duration-300 bg-white text-ray-dark-900 hover:bg-gray-100"
              href={`/${locale}/product/branded-apps?utm_source=delivery-page&utm_medium=website&utm_campaign=site-cta-refresh-2025q4&utm_content=final-branded-apps`}
              data-cta="branded-apps"
              data-analytics="delivery_final"
            >
              {locale === 'es' ? 'Ver App Móvil' : 'See Mobile App'}
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-6">FAQs</h2>
            <p className="text-xl text-ray-darkGray">
              {locale === 'es' ? 'Respuestas a preguntas comunes sobre nuestro servicio de delivery sin comisión.' : 'Answers to common questions about our zero-commission delivery service.'}
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
    </>
  )
}

export default ZeroCommissionDelivery
