'use client'

import React, { useState } from 'react'
import { ArrowRight, ChevronDown, ChevronUp, Play } from 'lucide-react'
import Button from '../shared/BaseButton'
import { useTranslations } from '../../hooks/useTranslations'
import { type Locale } from '@/lib/i18n'

interface HowItWorksProps {
  locale: Locale
}

const HowItWorks: React.FC<HowItWorksProps> = ({ locale }) => {
  const t = useTranslations(locale)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const howItWorksContent = t.HOW_IT_WORKS_PAGE

  return (
    <>
      {/* AI-friendly page summary */}
      <div className="sr-only">
        <h1>{locale === 'es' ? 'Cómo Funciona RAY - Plataforma de Ventas para Restaurantes' : 'How RAY Works - Restaurant Sales Platform'}</h1>
        <p>{locale === 'es' ? 'Descubre cómo RAY ayuda a los restaurantes a crecer sus ventas online con pedidos directos, reservas y más tráfico local.' : 'Discover how RAY helps restaurants grow their online sales with direct orders, bookings, and more local traffic.'}</p>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ray-dark-900 leading-tight mb-6">
              {howItWorksContent?.HERO?.TITLE || (locale === 'es' ? 'Podrías estar ' : 'You could be getting')}{' '}
              <span className="bg-gradient-to-r from-ray-blue to-ray-green bg-clip-text text-transparent">
                {howItWorksContent?.HERO?.TITLE_HIGHLIGHT || (locale === 'es' ? 'VENDIENDO mucho más online.' : 'a LOT more online sales.')}
              </span>
            </h1>
            
            <p className="text-xl text-ray-dark-700 mb-8 leading-relaxed">
              {howItWorksContent?.HERO?.SUBTITLE || (locale === 'es' 
                ? 'RAY es la forma más fácil de posicionarte mejor en Google y ChatGPT, obtener más pedidos online y crear la mejor experiencia para tus clientes.'
                : 'RAY is the easiest way to rank higher on Google and ChatGPT, and create the best experience for your customers.')}
            </p>
            
            <Button 
              variant="primary" 
              size="lg"
              className="shadow-xl hover:shadow-2xl transition-all duration-300 group mb-12"
              href={`/${locale}/demo?utm_source=how-it-works-page&utm_medium=website&utm_campaign=site-cta-refresh-2025q4&utm_content=hero-demo`}
              data-cta="demo-free"
              data-analytics="how_it_works_hero"
              aria-label="Get a demo"
            >
              {howItWorksContent?.HERO?.CTA_DEMO || (locale === 'es' ? 'Agenda una demo' : 'Get a demo')}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>

            {/* Video Placeholder */}
            <div className="relative bg-blue-600 rounded-3xl shadow-2xl overflow-hidden max-w-3xl mx-auto aspect-video">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg cursor-pointer hover:scale-110 transition-transform duration-300">
                    <Play className="w-8 h-8 text-blue-600 ml-1" fill="currentColor" />
                  </div>
                  <p className="text-white text-sm font-medium">
                    {howItWorksContent?.HERO?.VIDEO_CTA || (locale === 'es' ? 'Reproduce el video' : 'Play the video')}
                  </p>
                </div>
              </div>
              {/* Background image placeholder - you would replace this with actual video or image */}
              <div className="w-full h-full bg-gradient-to-br from-blue-500 to-blue-700"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {/* Feature 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-6xl font-bold text-ray-blue mb-4">
                  {howItWorksContent?.FEATURES?.FEATURE_1?.NUMBER || '01.'}
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-4">
                  {howItWorksContent?.FEATURES?.FEATURE_1?.TITLE || (locale === 'es' ? 'Aparece en la parte superior de Google' : 'Show up at the top of Google')}
                </h2>
                <p className="text-xl text-ray-dark-700 mb-6">
                  {howItWorksContent?.FEATURES?.FEATURE_1?.DESCRIPTION || (locale === 'es' 
                    ? 'Vence a tu competencia con un sitio web perfectamente optimizado para Google. Obtén más pedidos de personas en tu área.'
                    : 'Beat your competition with a website perfectly optimized for Google. Get more orders from people in your area.')}
                </p>
                <Button 
                  variant="secondary" 
                  href={`/${locale}/product/walk-ins`}
                  aria-label="Learn more about Google optimization"
                >
                  {howItWorksContent?.FEATURES?.FEATURE_1?.CTA || (locale === 'es' ? 'Más información' : 'Learn more')}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 shadow-lg aspect-square flex items-center justify-center">
                {/* Placeholder for Google search result mockup */}
                <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-6">
                  <div className="flex items-start space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                    <div className="flex-1">
                      <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                      <div className="flex items-center space-x-1 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className="w-4 h-4 text-yellow-400">★</div>
                        ))}
                      </div>
                      <div className="h-3 bg-gray-200 rounded w-full mb-1"></div>
                      <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 shadow-lg aspect-square flex items-center justify-center">
                {/* Placeholder for online menu mockup */}
                <div className="w-full max-w-md space-y-4">
                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <div className="h-4 bg-gray-300 rounded w-1/2 mb-3"></div>
                    <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <div className="h-4 bg-gray-300 rounded w-1/2 mb-3"></div>
                    <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="text-6xl font-bold text-ray-blue mb-4">
                  {howItWorksContent?.FEATURES?.FEATURE_2?.NUMBER || '02.'}
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-4">
                  {howItWorksContent?.FEATURES?.FEATURE_2?.TITLE || (locale === 'es' ? 'Aumenta las ventas con los pedidos online más fáciles' : 'Grow sales with the easiest online ordering')}
                </h2>
                <p className="text-xl text-ray-dark-700 mb-6">
                  {howItWorksContent?.FEATURES?.FEATURE_2?.DESCRIPTION || (locale === 'es' 
                    ? 'Los clientes piden más cuando tu experiencia de pedidos online se siente familiar y fácil.'
                    : 'Guests order more when your online ordering experience feels familiar and easy.')}
                </p>
                <Button 
                  variant="secondary" 
                  href={`/${locale}/product/online-orders`}
                  aria-label="Learn more about online ordering"
                >
                  {howItWorksContent?.FEATURES?.FEATURE_2?.CTA || (locale === 'es' ? 'Más información' : 'Learn more')}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-6xl font-bold text-ray-blue mb-4">
                  {howItWorksContent?.FEATURES?.FEATURE_3?.NUMBER || '03.'}
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-4">
                  {howItWorksContent?.FEATURES?.FEATURE_3?.TITLE || (locale === 'es' ? 'Impulsa pedidos repetidos con tu app móvil y recompensas' : 'Drive re-orders with your mobile app and rewards')}
                </h2>
                <p className="text-xl text-ray-dark-700 mb-6">
                  {howItWorksContent?.FEATURES?.FEATURE_3?.DESCRIPTION || (locale === 'es' 
                    ? 'Obtén más pedidos repetidos con tu app. Impulsa la lealtad con un programa de recompensas, como los de Starbucks.'
                    : 'Get more repeat orders with your own app. Drive loyalty with a rewards program, just like Starbucks.')}
                </p>
                <Button 
                  variant="secondary" 
                  href={`/${locale}/product/mobile-app`}
                  aria-label="Learn more about mobile apps"
                >
                  {howItWorksContent?.FEATURES?.FEATURE_3?.CTA || (locale === 'es' ? 'Más información' : 'Learn more')}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 shadow-lg aspect-square flex items-center justify-center">
                {/* Placeholder for mobile app mockup */}
                <div className="w-64 h-96 bg-gray-800 rounded-[2.5rem] p-4 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[1.5rem] overflow-hidden">
                    <div className="h-16 bg-ray-blue"></div>
                    <div className="p-4 space-y-3">
                      <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                      <div className="h-20 bg-gray-200 rounded"></div>
                      <div className="h-20 bg-gray-200 rounded"></div>
                      <div className="h-20 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 shadow-lg aspect-square flex items-center justify-center">
                {/* Placeholder for marketing automation mockup */}
                <div className="w-full max-w-md space-y-4">
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <div className="flex items-center justify-between mb-4">
                      <div className="h-4 bg-blue-500 rounded w-32"></div>
                      <div className="h-3 bg-gray-300 rounded w-20"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-3 bg-gray-200 rounded w-full"></div>
                      <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <div className="flex items-center justify-between mb-4">
                      <div className="h-4 bg-green-500 rounded w-32"></div>
                      <div className="h-3 bg-gray-300 rounded w-20"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-3 bg-gray-200 rounded w-full"></div>
                      <div className="h-3 bg-gray-200 rounded w-4/6"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="text-6xl font-bold text-ray-blue mb-4">
                  {howItWorksContent?.FEATURES?.FEATURE_4?.NUMBER || '04.'}
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-4">
                  {howItWorksContent?.FEATURES?.FEATURE_4?.TITLE || (locale === 'es' ? 'Mantén a los clientes interesados con marketing automático' : 'Keep guests engaged with auto-marketing')}
                </h2>
                <p className="text-xl text-ray-dark-700 mb-6">
                  {howItWorksContent?.FEATURES?.FEATURE_4?.DESCRIPTION || (locale === 'es' 
                    ? 'Aumenta las ventas con campañas de marketing automatizadas y probadas. Envía correos de promociones y textos sin esfuerzo adicional.'
                    : 'Boost sales with proven, automated marketing campaigns. Send money-making emails and texts without lifting a finger.')}
                </p>
                <Button 
                  variant="secondary" 
                  href={`/${locale}/product/loyalty`}
                  aria-label="Learn more about marketing automation"
                >
                  {howItWorksContent?.FEATURES?.FEATURE_4?.CTA || (locale === 'es' ? 'Más información' : 'Learn more')}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 text-center mb-12">
            {howItWorksContent?.FAQ?.TITLE || 'FAQs'}
          </h2>
          
          <div className="space-y-4">
            {howItWorksContent?.FAQ?.QUESTIONS?.map((faq: any, index: number) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  aria-expanded={openFaq === index}
                >
                  <span className="text-lg font-semibold text-ray-dark-900 pr-8">
                    {faq.QUESTION || faq.question}
                  </span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-ray-blue flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-ray-blue flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-ray-dark-700 leading-relaxed">
                      {faq.ANSWER || faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      {howItWorksContent?.TESTIMONIAL && (
        <section className="py-20 bg-ray-promise">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12">
              <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-6"></div>
              <blockquote className="text-2xl font-medium text-ray-dark-900 mb-6">
                "{howItWorksContent.TESTIMONIAL.QUOTE}"
              </blockquote>
              <div className="text-ray-dark-700">
                <p className="font-semibold">{howItWorksContent.TESTIMONIAL.AUTHOR}</p>
                <p className="text-sm">{howItWorksContent.TESTIMONIAL.POSITION}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Final CTA Section */}
      <section className="py-20 bg-ray-dark-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(13,121,229,0.1),transparent_70%)]"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            {howItWorksContent?.FINAL_CTA?.TITLE || (locale === 'es' ? 'La forma más fácil de hacer crecer tu restaurante online.' : 'The easiest way to grow your restaurant online.')}
          </h2>
          <Button
            variant="primary"
            size="lg"
            href={`/${locale}/demo?utm_source=how-it-works-page&utm_medium=website&utm_campaign=site-cta-refresh-2025q4&utm_content=final-cta`}
            className="shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            {howItWorksContent?.FINAL_CTA?.CTA || (locale === 'es' ? 'Agenda una demo' : 'Get a demo')}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>
    </>
  )
}

export default HowItWorks

