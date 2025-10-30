'use client'

import React from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { ArrowLeft, TrendingUp, Users, Award } from 'lucide-react'
import Image from 'next/image'
import { type Locale } from '@/lib/i18n'

// Dynamically import CTASection to reduce initial bundle size
const CTASection = dynamic(() => import('../CTASection'), {
  ssr: true,
  loading: () => null,
})

interface MercatoDellaPescheriaCaseStudyProps {
  locale: Locale
}

const MercatoDellaPescheriaCaseStudy: React.FC<MercatoDellaPescheriaCaseStudyProps> = ({ locale }) => {
  return (
    <>

      {/* AI-friendly page summary and metrics box */}
      <div className="sr-only">
        <h1>Mercato Della Pescheria Case Study - Italian Seafood Restaurant Success with RAY Platform</h1>
        <p>See how Mercato Della Pescheria increased their Italian seafood restaurant's revenue and reservations using RAY's comprehensive digital marketing platform.</p>
      </div>

      {/* Hero Section - Mercato Della Pescheria Brand Style */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-700 text-white overflow-hidden">
        {/* Background Elements - Mediterranean, Fresh, Elegant */}
        <div className="absolute inset-0">
          {/* Gradient overlays inspired by Mediterranean seafood aesthetic */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-600 opacity-90"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(6,182,212,0.3),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(20,184,166,0.2),transparent_50%)]"></div>
          
          {/* Ocean texture pattern */}
          <div className={`absolute inset-0 opacity-10 bg-[url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M30 30 Q 40 25, 50 30 T 70 30'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")]`}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
          <div className="w-full">
            {/* Breadcrumb */}
            <div className="mb-12">
              <Link 
                href={`/${locale}/case-studies`} 
                className="inline-flex items-center text-blue-200 hover:text-white transition-colors duration-300 text-sm font-medium"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                {locale === 'es' ? 'Volver a Casos de Estudio' : 'Back to Case Studies'}
              </Link>
            </div>

            {/* Hero Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Text Content */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                    <Award className="w-4 h-4 mr-2" />
                    {locale === 'es' ? 'Caso de Estudio' : 'Case Study'}
                  </div>
                  
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                    <span className="block">Mercato Della</span>
                    <span className="block text-blue-200">Pescheria</span>
                  </h1>
                  
                  <p className="text-xl text-blue-100 leading-relaxed max-w-2xl">
                    {locale === 'es' 
                      ? 'Descubre cómo Mercato Della Pescheria elevó su restaurante italiano de mariscos con la plataforma de marketing de RAY, triplicando reservas y estableciéndose como el destino premium de mariscos.'
                      : 'Discover how Mercato Della Pescheria elevated their Italian seafood restaurant with RAY\'s marketing platform, tripling bookings and establishing themselves as the premium seafood destination.'
                    }
                  </p>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="text-3xl font-bold text-white mb-2">+$65,000</div>
                    <div className="text-blue-200 text-sm">
                      {locale === 'es' ? 'Ingresos mensuales adicionales' : 'Additional monthly revenue'}
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="text-3xl font-bold text-white mb-2">298%</div>
                    <div className="text-blue-200 text-sm">
                      {locale === 'es' ? 'Crecimiento en reservas' : 'Growth in bookings'}
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <Link
                    href={`/${locale}/demo`}
                    className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-xl"
                  >
                    {locale === 'es' ? 'Replicar este Éxito' : 'Replicate This Success'}
                    <TrendingUp className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </div>

              {/* Right Column - Image */}
              <div className="relative">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/success-stories/mercato.jpg"
                    alt="Mercato Della Pescheria - Italian Seafood Restaurant Success"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  
                  {/* Floating Stats */}
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                    <div className="text-blue-600 font-bold text-lg">+$65K</div>
                    <div className="text-gray-600 text-xs">Monthly Revenue</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              {locale === 'es' ? 'El Desafío' : 'The Challenge'}
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="text-xl leading-relaxed mb-8">
              {locale === 'es' 
                ? 'Mercato Della Pescheria, un auténtico restaurante italiano de mariscos, luchaba por comunicar su calidad premium y diferenciarse en un mercado saturado. A pesar de ofrecer mariscos frescos importados y preparaciones tradicionales italianas, no lograban atraer el volumen de reservas que su calidad merecía.'
                : 'Mercato Della Pescheria, an authentic Italian seafood restaurant, struggled to communicate their premium quality and differentiate in a saturated market. Despite offering fresh imported seafood and traditional Italian preparations, they couldn\'t attract the booking volume their quality deserved.'
              }
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
                <h3 className="text-lg font-semibold text-red-800 mb-3">
                  {locale === 'es' ? 'Valor No Comunicado' : 'Uncommunicated Value'}
                </h3>
                <p className="text-red-700">
                  {locale === 'es' 
                    ? 'Calidad premium de mariscos no reflejada en presencia digital.'
                    : 'Premium seafood quality not reflected in digital presence.'
                  }
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
                <h3 className="text-lg font-semibold text-red-800 mb-3">
                  {locale === 'es' ? 'Reservas Insuficientes' : 'Insufficient Bookings'}
                </h3>
                <p className="text-red-700">
                  {locale === 'es' 
                    ? 'Mesas vacías a pesar de ofrecer cocina de alta calidad.'
                    : 'Empty tables despite offering high-quality cuisine.'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              {locale === 'es' ? 'La Solución' : 'The Solution'}
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="text-xl leading-relaxed mb-8">
              {locale === 'es' 
                ? 'RAY desarrolló una estrategia premium que destacó la calidad excepcional de Mercato Della Pescheria. Implementamos fotografía profesional de platos, storytelling sobre el origen de los mariscos, y un sistema de reservas exclusivo que reflejaba la experiencia gastronómica de alta gama.'
                : 'RAY developed a premium strategy that highlighted Mercato Della Pescheria\'s exceptional quality. We implemented professional dish photography, storytelling about seafood origins, and an exclusive booking system reflecting the high-end dining experience.'
              }
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white border border-blue-200 p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {locale === 'es' ? 'Marketing Premium' : 'Premium Marketing'}
                </h3>
                <p className="text-gray-600">
                  {locale === 'es' 
                    ? 'Contenido visual de alta calidad destacando la frescura y preparación artesanal.'
                    : 'High-quality visual content highlighting freshness and artisanal preparation.'
                  }
                </p>
              </div>

              <div className="bg-white border border-blue-200 p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {locale === 'es' ? 'SEO Gourmet' : 'Gourmet SEO'}
                </h3>
                <p className="text-gray-600">
                  {locale === 'es' 
                    ? 'Optimización para búsquedas de alta intención: "mejor restaurante mariscos".'
                    : 'Optimization for high-intent searches: "best seafood restaurant".'
                  }
                </p>
              </div>

              <div className="bg-white border border-blue-200 p-6 rounded-xl shadow-xl">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {locale === 'es' ? 'Reservas VIP' : 'VIP Bookings'}
                </h3>
                <p className="text-gray-600">
                  {locale === 'es' 
                    ? 'Sistema de reservas premium con experiencias personalizadas.'
                    : 'Premium booking system with personalized experiences.'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              {locale === 'es' ? 'Resultados' : 'Results'}
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6 bg-blue-50 rounded-2xl">
              <div className="text-xl sm:text-2xl font-bold text-blue-600 mb-2">+$65K</div>
              <div className="text-gray-600">
                {locale === 'es' ? 'Ingresos mensuales adicionales' : 'Additional monthly revenue'}
              </div>
            </div>

            <div className="text-center p-6 bg-blue-50 rounded-2xl">
              <div className="text-xl sm:text-2xl font-bold text-blue-600 mb-2">298%</div>
              <div className="text-gray-600">
                {locale === 'es' ? 'Crecimiento en reservas' : 'Growth in bookings'}
              </div>
            </div>

            <div className="text-center p-6 bg-blue-50 rounded-2xl">
              <div className="text-xl sm:text-2xl font-bold text-blue-600 mb-2">225%</div>
              <div className="text-gray-600">
                {locale === 'es' ? 'Aumento en búsquedas de marca' : 'Increase in brand searches'}
              </div>
            </div>

            <div className="text-center p-6 bg-blue-50 rounded-2xl">
              <div className="text-xl sm:text-2xl font-bold text-blue-600 mb-2">4.9★</div>
              <div className="text-gray-600">
                {locale === 'es' ? 'Calificación promedio' : 'Average rating'}
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="bg-gray-50 rounded-2xl p-8 text-center">
            <blockquote className="text-2xl font-medium text-gray-900 mb-6 italic">
              "{locale === 'es' 
                ? 'RAY transformó completamente cómo comunicamos nuestra calidad. Ahora atraemos exactamente el tipo de comensal que aprecia nuestros mariscos importados y preparaciones tradicionales. Nuestras reservas se triplicaron y el ticket promedio aumentó significativamente.'
                : 'RAY completely transformed how we communicate our quality. Now we attract exactly the type of diner who appreciates our imported seafood and traditional preparations. Our bookings tripled and average ticket increased significantly.'
              }"
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">MP</span>
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">Mercato Della Pescheria</div>
                <div className="text-gray-600">
                  {locale === 'es' ? 'Restaurante Italiano de Mariscos' : 'Italian Seafood Restaurant'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection locale={locale} />
    </>
  )
}

export default MercatoDellaPescheriaCaseStudy

