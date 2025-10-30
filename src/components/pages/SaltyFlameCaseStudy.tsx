'use client'

import React from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { ArrowLeft, TrendingUp, Users, Award, Flame } from 'lucide-react'
import Image from 'next/image'
import { type Locale } from '@/lib/i18n'

// Dynamically import CTASection to reduce initial bundle size
const CTASection = dynamic(() => import('../CTASection'), {
  ssr: true,
  loading: () => null,
})

interface SaltyFlameCaseStudyProps {
  locale: Locale
}

const SaltyFlameCaseStudy: React.FC<SaltyFlameCaseStudyProps> = ({ locale }) => {
  return (
    <>

      {/* AI-friendly page summary and metrics box */}
      <div className="sr-only">
        <h1>Salty Flame Case Study - Modern Grill Restaurant Success with RAY Platform</h1>
        <p>See how Salty Flame increased their modern grill restaurant's revenue and established themselves as the go-to destination for premium grilled cuisine using RAY's comprehensive digital marketing platform.</p>
      </div>

      {/* Hero Section - Salty Flame Brand Style */}
      <section className="relative min-h-screen bg-gradient-to-br from-orange-600 via-red-600 to-amber-700 text-white overflow-hidden">
        {/* Background Elements - Bold, Fiery, Modern */}
        <div className="absolute inset-0">
          {/* Gradient overlays inspired by Salty Flame's bold aesthetic */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-red-500 to-amber-600 opacity-90"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(239,68,68,0.3),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(251,146,60,0.2),transparent_50%)]"></div>
          
          {/* Fire texture pattern */}
          <div className={`absolute inset-0 opacity-10 bg-[url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M30 10 L35 25 L30 40 L25 25 Z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")]`}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
          <div className="w-full">
            {/* Breadcrumb */}
            <div className="mb-12">
              <Link 
                href={`/${locale}/case-studies`} 
                className="inline-flex items-center text-orange-200 hover:text-white transition-colors duration-300 text-sm font-medium"
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
                    <Flame className="w-4 h-4 mr-2" />
                    {locale === 'es' ? 'Caso de Estudio' : 'Case Study'}
                  </div>
                  
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                    <span className="block">Salty Flame</span>
                    <span className="block text-orange-200">Grill Perfection</span>
                  </h1>
                  
                  <p className="text-xl text-orange-100 leading-relaxed max-w-2xl">
                    {locale === 'es' 
                      ? 'Descubre cómo Salty Flame se estableció como el destino premium de parrilla moderna con la plataforma de marketing de RAY, triplicando reservas y capturando el mercado de comida a la parrilla de alta gama.'
                      : 'Discover how Salty Flame established themselves as the premium modern grill destination with RAY\'s marketing platform, tripling bookings and capturing the high-end grilled food market.'
                    }
                  </p>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="text-3xl font-bold text-white mb-2">+$78,000</div>
                    <div className="text-orange-200 text-sm">
                      {locale === 'es' ? 'Ingresos mensuales adicionales' : 'Additional monthly revenue'}
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="text-3xl font-bold text-white mb-2">312%</div>
                    <div className="text-orange-200 text-sm">
                      {locale === 'es' ? 'Crecimiento en reservas' : 'Growth in bookings'}
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <Link
                    href={`/${locale}/demo`}
                    className="inline-flex items-center px-8 py-4 bg-white text-orange-600 font-semibold rounded-xl hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 shadow-xl"
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
                    src="/images/success-stories/salty-flame.jpeg"
                    alt="Salty Flame - Modern Grill Restaurant Success"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  
                  {/* Floating Stats */}
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                    <div className="text-orange-600 font-bold text-lg">+$78K</div>
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
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
          </div>

          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="text-xl leading-relaxed mb-8">
              {locale === 'es' 
                ? 'Salty Flame, un restaurante moderno especializado en parrilla premium, enfrentaba dificultades para diferenciarse en un mercado saturado de asadores tradicionales. A pesar de ofrecer técnicas innovadoras de parrilla y cortes de alta calidad, no lograban captar la atención del mercado gourmet.'
                : 'Salty Flame, a modern restaurant specializing in premium grill, faced challenges differentiating in a market saturated with traditional steakhouses. Despite offering innovative grilling techniques and high-quality cuts, they couldn\'t capture the gourmet market\'s attention.'
              }
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
                <h3 className="text-lg font-semibold text-red-800 mb-3">
                  {locale === 'es' ? 'Mercado Saturado' : 'Saturated Market'}
                </h3>
                <p className="text-red-700">
                  {locale === 'es' 
                    ? 'Competencia intensa con asadores tradicionales bien establecidos.'
                    : 'Intense competition with well-established traditional steakhouses.'
                  }
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
                <h3 className="text-lg font-semibold text-red-800 mb-3">
                  {locale === 'es' ? 'Propuesta Única No Comunicada' : 'Unique Proposition Uncommunicated'}
                </h3>
                <p className="text-red-700">
                  {locale === 'es' 
                    ? 'Enfoque moderno y técnicas innovadoras no visibles digitalmente.'
                    : 'Modern approach and innovative techniques not visible digitally.'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              {locale === 'es' ? 'La Solución' : 'The Solution'}
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
          </div>

          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="text-xl leading-relaxed mb-8">
              {locale === 'es' 
                ? 'RAY desarrolló una estrategia que posicionó a Salty Flame como el líder en parrilla moderna y sofisticada. Implementamos contenido visual impactante mostrando las técnicas de cocción únicas, storytelling sobre la selección de cortes premium, y campañas destacando la experiencia gastronómica contemporánea.'
                : 'RAY developed a strategy positioning Salty Flame as the leader in modern, sophisticated grilling. We implemented impactful visual content showcasing unique cooking techniques, storytelling about premium cut selection, and campaigns highlighting the contemporary dining experience.'
              }
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white border border-orange-200 p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Flame className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {locale === 'es' ? 'Marketing Visual' : 'Visual Marketing'}
                </h3>
                <p className="text-gray-600">
                  {locale === 'es' 
                    ? 'Contenido impactante mostrando el arte de la parrilla moderna.'
                    : 'Impactful content showcasing the art of modern grilling.'
                  }
                </p>
              </div>

              <div className="bg-white border border-orange-200 p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {locale === 'es' ? 'Marketing Gourmet' : 'Gourmet Marketing'}
                </h3>
                <p className="text-gray-600">
                  {locale === 'es' 
                    ? 'Campañas dirigidas a amantes de la alta gastronomía.'
                    : 'Campaigns targeting high gastronomy enthusiasts.'
                  }
                </p>
              </div>

              <div className="bg-white border border-orange-200 p-6 rounded-xl shadow-xl">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {locale === 'es' ? 'SEO Especializado' : 'Specialized SEO'}
                </h3>
                <p className="text-gray-600">
                  {locale === 'es' 
                    ? 'Optimización para "mejor parrilla moderna" y "cocina a la llama".'
                    : 'Optimization for "best modern grill" and "flame-cooked cuisine".'
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
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6 bg-orange-50 rounded-2xl">
              <div className="text-xl sm:text-2xl font-bold text-orange-600 mb-2">+$78K</div>
              <div className="text-gray-600">
                {locale === 'es' ? 'Ingresos mensuales adicionales' : 'Additional monthly revenue'}
              </div>
            </div>

            <div className="text-center p-6 bg-orange-50 rounded-2xl">
              <div className="text-xl sm:text-2xl font-bold text-orange-600 mb-2">312%</div>
              <div className="text-gray-600">
                {locale === 'es' ? 'Crecimiento en reservas' : 'Growth in bookings'}
              </div>
            </div>

            <div className="text-center p-6 bg-orange-50 rounded-2xl">
              <div className="text-xl sm:text-2xl font-bold text-orange-600 mb-2">245%</div>
              <div className="text-gray-600">
                {locale === 'es' ? 'Aumento en búsquedas de marca' : 'Increase in brand searches'}
              </div>
            </div>

            <div className="text-center p-6 bg-orange-50 rounded-2xl">
              <div className="text-xl sm:text-2xl font-bold text-orange-600 mb-2">4.9★</div>
              <div className="text-gray-600">
                {locale === 'es' ? 'Calificación promedio' : 'Average rating'}
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="bg-gray-50 rounded-2xl p-8 text-center">
            <blockquote className="text-2xl font-medium text-gray-900 mb-6 italic">
              "{locale === 'es' 
                ? 'RAY nos ayudó a posicionarnos como el líder en parrilla moderna. Ahora somos el destino premium para amantes de la alta gastronomía a la parrilla. Nuestras reservas se triplicaron y constantemente estamos llenos.'
                : 'RAY helped us position ourselves as the leader in modern grilling. Now we are the premium destination for high gastronomy grilled food enthusiasts. Our bookings tripled and we are constantly full.'
              }"
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                <Flame className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">Salty Flame</div>
                <div className="text-gray-600">
                  {locale === 'es' ? 'Restaurante Parrilla Moderna' : 'Modern Grill Restaurant'}
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

export default SaltyFlameCaseStudy

