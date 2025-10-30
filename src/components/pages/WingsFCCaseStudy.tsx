'use client'

import React from 'react'
import dynamic from 'next/dynamic'
// Dynamically import CTASection to reduce initial bundle size
const CTASection = dynamic(() => import('../CTASection'), {
  ssr: true,
  loading: () => null,
})
import Link from 'next/link'
import { ArrowLeft, TrendingUp, MapPin, Users, Zap } from 'lucide-react'
import Image from 'next/image'
import { type Locale } from '@/lib/i18n'

interface WingsFCCaseStudyProps {
  locale: Locale
}

const WingsFCCaseStudy: React.FC<WingsFCCaseStudyProps> = ({ locale }) => {
  return (
    <>

      {/* AI-friendly page summary and metrics box */}
      <div className="sr-only">
        <h1>WingsFC Case Study - Sports Bar Success with RAY Platform</h1>
        <p>See how WingsFC increased their sports bar's game day revenue and customer engagement using RAY's comprehensive marketing platform.</p>
      </div>

      {/* Hero Section - WingsFC Brand Style */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-600 via-red-600 to-orange-700 text-white overflow-hidden">
        {/* Background Elements - Sports, Dynamic, Energetic */}
        <div className="absolute inset-0">
          {/* Gradient overlays inspired by WingsFC's sports aesthetic */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-red-500 to-orange-600 opacity-90"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(59,130,246,0.3),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(239,68,68,0.2),transparent_50%)]"></div>
          
          {/* Sports texture pattern */}
          <div className={`absolute inset-0 opacity-10 bg-[url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpolygon points='30,5 45,20 30,35 15,20'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")]`}></div>
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
                    <Zap className="w-4 h-4 mr-2" />
                    {locale === 'es' ? 'Caso de Estudio Sports Bar' : 'Sports Bar Case Study'}
                  </div>
                  
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                    <span className="block">WingsFC</span>
                    <span className="block text-blue-200">Game Day Success</span>
                  </h1>
                  
                  <p className="text-xl text-blue-100 leading-relaxed max-w-2xl">
                    {locale === 'es' 
                      ? 'Descubre cómo WingsFC transformó su sports bar usando la plataforma de marketing de RAY para maximizar ingresos en días de juego y crear experiencias memorables.'
                      : 'Discover how WingsFC transformed their sports bar using RAY\'s marketing platform to maximize game day revenue and create memorable experiences.'
                    }
                  </p>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="text-3xl font-bold text-white mb-2">+$35,000</div>
                    <div className="text-blue-200 text-sm">
                      {locale === 'es' ? 'Ingresos mensuales adicionales' : 'Additional monthly revenue'}
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="text-3xl font-bold text-white mb-2">280%</div>
                    <div className="text-blue-200 text-sm">
                      {locale === 'es' ? 'Crecimiento en días de juego' : 'Growth on game days'}
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
                    src="/images/success-stories/WingsFC.png"
                    alt="WingsFC - Sports Bar Success"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                    quality={85}
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                  />
                  
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  
                  {/* Floating Stats */}
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                    <div className="text-blue-600 font-bold text-lg">+$35K</div>
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
                ? 'WingsFC tenía el ambiente perfecto para ver deportes pero luchaba por llenar el bar en días de juego y maximizar sus ingresos. Competían contra otras opciones de entretenimiento y necesitaban una estrategia que los destacara como el destino número uno para fans deportivos.'
                : 'WingsFC had the perfect atmosphere for watching sports but struggled to fill the bar on game days and maximize their revenue. They competed against other entertainment options and needed a strategy that positioned them as the number one destination for sports fans.'
              }
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
                <h3 className="text-lg font-semibold text-red-800 mb-3">
                  {locale === 'es' ? 'Competencia de Entretenimiento' : 'Entertainment Competition'}
                </h3>
                <p className="text-red-700">
                  {locale === 'es' 
                    ? 'Competían contra cines, otros bares y opciones de entretenimiento en casa.'
                    : 'Competing against cinemas, other bars, and home entertainment options.'
                  }
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
                <h3 className="text-lg font-semibold text-red-800 mb-3">
                  {locale === 'es' ? 'Marketing Estacional' : 'Seasonal Marketing'}
                </h3>
                <p className="text-red-700">
                  {locale === 'es' 
                    ? 'Dificultad para mantener clientes durante la temporada baja de deportes.'
                    : 'Difficulty maintaining customers during the sports off-season.'
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
                ? 'RAY ayudó a WingsFC a crear el destino definitivo para fans deportivos, desarrollando estrategias de marketing que maximizaban los días de juego, organizaban eventos temáticos y construían una comunidad leal de aficionados.'
                : 'RAY helped WingsFC create the ultimate destination for sports fans, developing marketing strategies that maximized game days, organized themed events, and built a loyal community of enthusiasts.'
              }
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white border border-blue-200 p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {locale === 'es' ? 'Marketing de Días de Juego' : 'Game Day Marketing'}
                </h3>
                <p className="text-gray-600">
                  {locale === 'es' 
                    ? 'Campañas especializadas para maximizar asistencia y ventas en días de partidos importantes.'
                    : 'Specialized campaigns to maximize attendance and sales on important game days.'
                  }
                </p>
              </div>

              <div className="bg-white border border-blue-200 p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {locale === 'es' ? 'Eventos Temáticos' : 'Themed Events'}
                </h3>
                <p className="text-gray-600">
                  {locale === 'es' 
                    ? 'Organización de eventos especiales y promociones que atraen diferentes tipos de fans.'
                    : 'Organization of special events and promotions that attract different types of fans.'
                  }
                </p>
              </div>

              <div className="bg-white border border-blue-200 p-6 rounded-xl shadow-xl">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {locale === 'es' ? 'SEO de Sports Bar' : 'Sports Bar SEO'}
                </h3>
                <p className="text-gray-600">
                  {locale === 'es' 
                    ? 'Optimización para búsquedas relacionadas con bares deportivos y eventos deportivos locales.'
                    : 'Optimization for searches related to sports bars and local sporting events.'
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
              <div className="text-xl sm:text-2xl font-bold text-blue-600 mb-2">+$35K</div>
              <div className="text-gray-600">
                {locale === 'es' ? 'Ingresos mensuales adicionales' : 'Additional monthly revenue'}
              </div>
            </div>

            <div className="text-center p-6 bg-blue-50 rounded-2xl">
              <div className="text-xl sm:text-2xl font-bold text-blue-600 mb-2">280%</div>
              <div className="text-gray-600">
                {locale === 'es' ? 'Crecimiento en días de juego' : 'Growth on game days'}
              </div>
            </div>

            <div className="text-center p-6 bg-blue-50 rounded-2xl">
              <div className="text-xl sm:text-2xl font-bold text-blue-600 mb-2">190%</div>
              <div className="text-gray-600">
                {locale === 'es' ? 'Mejora en asistencia promedio' : 'Improvement in average attendance'}
              </div>
            </div>

            <div className="text-center p-6 bg-blue-50 rounded-2xl">
              <div className="text-xl sm:text-2xl font-bold text-blue-600 mb-2">5x</div>
              <div className="text-gray-600">
                {locale === 'es' ? 'ROI en marketing deportivo' : 'Sports marketing ROI'}
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="bg-gray-50 rounded-2xl p-8 text-center">
            <blockquote className="text-2xl font-medium text-gray-900 mb-6 italic">
              "{locale === 'es' 
                ? 'RAY transformó completamente nuestro negocio. Ahora somos el destino número uno para ver deportes en nuestra área, y nuestros días de juego están siempre llenos de fans emocionados.'
                : 'RAY completely transformed our business. Now we\'re the number one destination for watching sports in our area, and our game days are always packed with excited fans.'
              }"
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">WingsFC</div>
                <div className="text-gray-600">
                  {locale === 'es' ? 'Sports Bar' : 'Sports Bar'}
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

export default WingsFCCaseStudy
