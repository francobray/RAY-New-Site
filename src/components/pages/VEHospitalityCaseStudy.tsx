'use client'

import React from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { ArrowLeft, TrendingUp, MapPin, Eye, Award } from 'lucide-react'
import Image from 'next/image'
import { type Locale } from '@/lib/i18n'

// Dynamically import CTASection to reduce initial bundle size
const CTASection = dynamic(() => import('../CTASection'), {
  ssr: true,
  loading: () => null,
})

interface VEHospitalityCaseStudyProps {
  locale: Locale
}

const VEHospitalityCaseStudy: React.FC<VEHospitalityCaseStudyProps> = ({ locale }) => {
  return (
    <>

      {/* AI-friendly page summary and metrics box */}
      <div className="sr-only">
        <h1>Havana 1957 Case Study - Cuban Restaurant Success with RAY Platform</h1>
        <p>See how Havana 1957 increased revenue and customer engagement using RAY's comprehensive marketing platform for authentic Cuban dining.</p>
      </div>

      {/* Hero Section - Havana 1957 Brand Style */}
      <section className="relative min-h-screen bg-gradient-to-br from-red-600 via-orange-600 to-amber-700 text-white overflow-hidden">
        {/* Background Elements - Cuban, Vibrant, Tropical */}
        <div className="absolute inset-0">
          {/* Gradient overlays inspired by Havana 1957's Cuban aesthetic */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-500 via-orange-500 to-amber-600 opacity-90"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(239,68,68,0.3),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(249,115,22,0.2),transparent_50%)]"></div>
          
          {/* Professional texture pattern */}
          <div className={`absolute inset-0 opacity-10 bg-[url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Crect x='0' y='0' width='30' height='30'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")]`}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
          <div className="w-full">
            {/* Breadcrumb */}
            <div className="mb-12">
              <Link 
                href={`/${locale}/case-studies`} 
                className="inline-flex items-center text-red-200 hover:text-white transition-colors duration-300 text-sm font-medium"
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
                    <span className="block">Havana 1957</span>
                    <span className="block text-red-200">Cuban Excellence</span>
                  </h1>
                  
                  <p className="text-xl text-red-100 leading-relaxed max-w-2xl">
                    {locale === 'es' 
                      ? 'Descubre cómo Havana 1957 elevó su experiencia de restaurante cubano auténtico usando la plataforma integral de marketing de RAY para aumentar reservas y visibilidad.'
                      : 'Discover how Havana 1957 elevated their authentic Cuban restaurant experience using RAY\'s comprehensive marketing platform to increase bookings and visibility.'
                    }
                  </p>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="text-3xl font-bold text-white mb-2">+$58,000</div>
                    <div className="text-red-200 text-sm">
                      {locale === 'es' ? 'Ingresos mensuales adicionales' : 'Additional monthly revenue'}
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="text-3xl font-bold text-white mb-2">242%</div>
                    <div className="text-red-200 text-sm">
                      {locale === 'es' ? 'Crecimiento en reservas' : 'Growth in bookings'}
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <Link
                    href={`/${locale}/demo`}
                    className="inline-flex items-center px-8 py-4 bg-white text-red-600 font-semibold rounded-xl hover:bg-red-50 transition-all duration-300 transform hover:scale-105 shadow-xl"
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
                    src="/images/success-stories/Havana-1957.jpg"
                    alt="Havana 1957 - Cuban Restaurant Success"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  
                  {/* Floating Stats */}
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                    <div className="text-red-600 font-bold text-lg">+$58K</div>
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
            <div className="w-24 h-1 bg-red-500 mx-auto rounded-full"></div>
          </div>

          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="text-xl leading-relaxed mb-8">
              {locale === 'es' 
                ? 'Havana 1957, un restaurante cubano auténtico, enfrentaba intensa competencia en el mercado de comida latina. A pesar de ofrecer cocina cubana tradicional de alta calidad, luchaban por destacarse digitalmente y atraer nuevos clientes mientras mantenían su base de comensales regulares.'
                : 'Havana 1957, an authentic Cuban restaurant, faced intense competition in the Latin food market. Despite offering high-quality traditional Cuban cuisine, they struggled to stand out digitally and attract new customers while maintaining their base of regular diners.'
              }
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
                <h3 className="text-lg font-semibold text-red-800 mb-3">
                  {locale === 'es' ? 'Competencia Intensa' : 'Intense Competition'}
                </h3>
                <p className="text-red-700">
                  {locale === 'es' 
                    ? 'Mercado saturado de restaurantes latinos y cadenas con mayor presencia digital.'
                    : 'Saturated market of Latin restaurants and chains with greater digital presence.'
                  }
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
                <h3 className="text-lg font-semibold text-red-800 mb-3">
                  {locale === 'es' ? 'Reservas Limitadas' : 'Limited Bookings'}
                </h3>
                <p className="text-red-700">
                  {locale === 'es' 
                    ? 'Sistema de reservas tradicional que limitaba la capacidad de captar clientes nuevos.'
                    : 'Traditional booking system that limited ability to capture new customers.'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              {locale === 'es' ? 'La Solución' : 'The Solution'}
            </h2>
            <div className="w-24 h-1 bg-red-500 mx-auto rounded-full"></div>
          </div>

          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="text-xl leading-relaxed mb-8">
              {locale === 'es' 
                ? 'RAY implementó una estrategia digital completa para Havana 1957, destacando su autenticidad cubana y experiencia culinaria única. Desde optimización SEO local hasta un sistema de reservas moderno, transformamos su presencia digital mientras preservamos su esencia tradicional.'
                : 'RAY implemented a comprehensive digital strategy for Havana 1957, highlighting their Cuban authenticity and unique culinary experience. From local SEO optimization to a modern booking system, we transformed their digital presence while preserving their traditional essence.'
              }
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white border border-red-200 p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {locale === 'es' ? 'SEO Local' : 'Local SEO'}
                </h3>
                <p className="text-gray-600">
                  {locale === 'es' 
                    ? 'Optimización para búsquedas de "restaurante cubano auténtico" y cocina caribeña.'
                    : 'Optimization for "authentic Cuban restaurant" and Caribbean cuisine searches.'
                  }
                </p>
              </div>

              <div className="bg-white border border-red-200 p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {locale === 'es' ? 'Sistema de Reservas' : 'Booking System'}
                </h3>
                <p className="text-gray-600">
                  {locale === 'es' 
                    ? 'Plataforma moderna de reservas online integrada con Google y redes sociales.'
                    : 'Modern online booking platform integrated with Google and social media.'
                  }
                </p>
              </div>

              <div className="bg-white border border-red-200 p-6 rounded-xl shadow-xl">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {locale === 'es' ? 'Marketing Cultural' : 'Cultural Marketing'}
                </h3>
                <p className="text-gray-600">
                  {locale === 'es' 
                    ? 'Campañas destacando la autenticidad y tradición culinaria cubana.'
                    : 'Campaigns highlighting authenticity and Cuban culinary tradition.'
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
            <div className="w-24 h-1 bg-red-500 mx-auto rounded-full"></div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6 bg-red-50 rounded-2xl">
              <div className="text-xl sm:text-2xl font-bold text-red-600 mb-2">+$58K</div>
              <div className="text-gray-600">
                {locale === 'es' ? 'Ingresos mensuales adicionales' : 'Additional monthly revenue'}
              </div>
            </div>

            <div className="text-center p-6 bg-red-50 rounded-2xl">
              <div className="text-xl sm:text-2xl font-bold text-red-600 mb-2">242%</div>
              <div className="text-gray-600">
                {locale === 'es' ? 'Crecimiento en reservas' : 'Growth in bookings'}
              </div>
            </div>

            <div className="text-center p-6 bg-red-50 rounded-2xl">
              <div className="text-xl sm:text-2xl font-bold text-red-600 mb-2">185%</div>
              <div className="text-gray-600">
                {locale === 'es' ? 'Aumento en visibilidad local' : 'Increase in local visibility'}
              </div>
            </div>

            <div className="text-center p-6 bg-red-50 rounded-2xl">
              <div className="text-xl sm:text-2xl font-bold text-red-600 mb-2">4.2x</div>
              <div className="text-gray-600">
                {locale === 'es' ? 'ROI en marketing' : 'Marketing ROI'}
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="bg-gray-50 rounded-2xl p-8 text-center">
            <blockquote className="text-2xl font-medium text-gray-900 mb-6 italic">
              "{locale === 'es' 
                ? 'RAY transformó completamente nuestra presencia digital. Ahora atraemos más clientes que nunca mientras mantenemos la autenticidad cubana que nos define. La plataforma es esencial para cualquier restaurante que busque crecer.'
                : 'RAY completely transformed our digital presence. We now attract more customers than ever while maintaining the Cuban authenticity that defines us. The platform is essential for any restaurant looking to grow.'
              }"
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">H57</span>
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">Havana 1957</div>
                <div className="text-gray-600">
                  {locale === 'es' ? 'Restaurante Cubano Auténtico' : 'Authentic Cuban Restaurant'}
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

export default VEHospitalityCaseStudy
