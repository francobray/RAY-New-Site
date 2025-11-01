'use client'

import React from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { ArrowLeft, TrendingUp, Users, Award, Palmtree } from 'lucide-react'
import Image from 'next/image'
import { type Locale } from '@/lib/i18n'

// Dynamically import CTASection to reduce initial bundle size
const CTASection = dynamic(() => import('../../shared/CTASection'), {
  ssr: true,
  loading: () => null,
})

interface MarabuCaseStudyProps {
  locale: Locale
}

const MarabuCaseStudy: React.FC<MarabuCaseStudyProps> = ({ locale }) => {
  return (
    <>

      {/* AI-friendly page summary and metrics box */}
      <div className="sr-only">
        <h1>Marabu Case Study - Caribbean Fusion Restaurant Success with RAY Platform</h1>
        <p>See how Marabu increased their Caribbean fusion restaurant's revenue and established themselves as the go-to destination for tropical dining experiences using RAY's comprehensive digital marketing platform.</p>
      </div>

      {/* Hero Section - Marabu Brand Style */}
      <section className="relative min-h-screen bg-gradient-to-br from-emerald-600 via-teal-600 to-green-700 text-white overflow-hidden">
        {/* Background Elements - Tropical, Vibrant, Caribbean */}
        <div className="absolute inset-0">
          {/* Gradient overlays inspired by Marabu's tropical aesthetic */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-teal-500 to-green-600 opacity-90"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(16,185,129,0.3),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(45,212,191,0.2),transparent_50%)]"></div>
          
          {/* Tropical pattern */}
          <div className={`absolute inset-0 opacity-10 bg-[url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M30 15 L28 25 L32 25 Z M25 20 L30 30 L35 20 Z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")]`}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
          <div className="w-full">
            {/* Breadcrumb */}
            <div className="mb-12">
              <Link 
                href={`/${locale}/case-studies`} 
                className="inline-flex items-center text-teal-200 hover:text-white transition-colors duration-300 text-sm font-medium"
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
                    <Palmtree className="w-4 h-4 mr-2" />
                    {locale === 'es' ? 'Caso de Estudio' : 'Case Study'}
                  </div>
                  
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                    <span className="block">Marabu</span>
                    <span className="block text-teal-200">Caribbean Fusion</span>
                  </h1>
                  
                  <p className="text-xl text-teal-100 leading-relaxed max-w-2xl">
                    {locale === 'es' 
                      ? 'Descubre cómo Marabu se convirtió en el destino premium de cocina caribeña fusión con la plataforma de marketing de RAY, triplicando reservas y capturando el mercado de experiencias tropicales únicas.'
                      : 'Discover how Marabu became the premium Caribbean fusion destination with RAY\'s marketing platform, tripling bookings and capturing the unique tropical experiences market.'
                    }
                  </p>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="text-3xl font-bold text-white mb-2">+$68,000</div>
                    <div className="text-teal-200 text-sm">
                      {locale === 'es' ? 'Ingresos mensuales adicionales' : 'Additional monthly revenue'}
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="text-3xl font-bold text-white mb-2">298%</div>
                    <div className="text-teal-200 text-sm">
                      {locale === 'es' ? 'Crecimiento en reservas' : 'Growth in bookings'}
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <Link
                    href={`/${locale}/demo`}
                    className="inline-flex items-center px-8 py-4 bg-white text-emerald-600 font-semibold rounded-xl hover:bg-teal-50 transition-all duration-300 transform hover:scale-105 shadow-xl"
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
                    src="/images/success-stories/Marabu.jpg"
                    alt="Marabu - Caribbean Fusion Restaurant Success"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  
                  {/* Floating Stats */}
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                    <div className="text-emerald-600 font-bold text-lg">+$68K</div>
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
            <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full"></div>
          </div>

          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="text-xl leading-relaxed mb-8">
              {locale === 'es' 
                ? 'Marabu, un restaurante de cocina caribeña fusión, enfrentaba el reto de destacar su propuesta única en un mercado donde la cocina tropical era percibida como casual. A pesar de ofrecer una experiencia gastronómica sofisticada con sabores caribeños auténticos y presentación moderna, no lograban captar comensales dispuestos a pagar premium.'
                : 'Marabu, a Caribbean fusion restaurant, faced the challenge of highlighting their unique proposition in a market where tropical cuisine was perceived as casual. Despite offering a sophisticated dining experience with authentic Caribbean flavors and modern presentation, they couldn\'t attract diners willing to pay premium prices.'
              }
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
                <h3 className="text-lg font-semibold text-emerald-800 mb-3">
                  {locale === 'es' ? 'Percepción Casual' : 'Casual Perception'}
                </h3>
                <p className="text-emerald-700">
                  {locale === 'es' 
                    ? 'Cocina caribeña vista como comida rápida, no experiencia gourmet.'
                    : 'Caribbean cuisine seen as fast food, not gourmet experience.'
                  }
                </p>
              </div>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
                <h3 className="text-lg font-semibold text-emerald-800 mb-3">
                  {locale === 'es' ? 'Diferenciación Difusa' : 'Blurred Differentiation'}
                </h3>
                <p className="text-emerald-700">
                  {locale === 'es' 
                    ? 'Propuesta fusión sofisticada no comunicada efectivamente.'
                    : 'Sophisticated fusion proposition not effectively communicated.'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              {locale === 'es' ? 'La Solución' : 'The Solution'}
            </h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full"></div>
          </div>

          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="text-xl leading-relaxed mb-8">
              {locale === 'es' 
                ? 'RAY desarrolló una estrategia de reposicionamiento que elevó a Marabu como destino de alta cocina caribeña fusión. Implementamos contenido visual premium mostrando la sofisticación de los platillos, storytelling sobre técnicas culinarias innovadoras que fusionan tradición caribeña con gastronomía moderna, y campañas destacando la experiencia tropical elevada.'
                : 'RAY developed a repositioning strategy that elevated Marabu as a high-end Caribbean fusion destination. We implemented premium visual content showcasing dish sophistication, storytelling about innovative culinary techniques fusing Caribbean tradition with modern gastronomy, and campaigns highlighting the elevated tropical experience.'
              }
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white border border-emerald-200 p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <Palmtree className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {locale === 'es' ? 'Reposicionamiento Premium' : 'Premium Repositioning'}
                </h3>
                <p className="text-gray-600">
                  {locale === 'es' 
                    ? 'De casual a experiencia gastronómica tropical sofisticada.'
                    : 'From casual to sophisticated tropical dining experience.'
                  }
                </p>
              </div>

              <div className="bg-white border border-emerald-200 p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {locale === 'es' ? 'Marketing Fusión' : 'Fusion Marketing'}
                </h3>
                <p className="text-gray-600">
                  {locale === 'es' 
                    ? 'Storytelling de técnicas innovadoras y autenticidad caribeña.'
                    : 'Storytelling of innovative techniques and Caribbean authenticity.'
                  }
                </p>
              </div>

              <div className="bg-white border border-emerald-200 p-6 rounded-xl shadow-xl">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {locale === 'es' ? 'Experiencia Visual' : 'Visual Experience'}
                </h3>
                <p className="text-gray-600">
                  {locale === 'es' 
                    ? 'Contenido premium destacando presentación y ambiente tropical.'
                    : 'Premium content highlighting presentation and tropical ambiance.'
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
            <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full"></div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6 bg-emerald-50 rounded-2xl">
              <div className="text-xl sm:text-2xl font-bold text-emerald-600 mb-2">+$68K</div>
              <div className="text-gray-600">
                {locale === 'es' ? 'Ingresos mensuales adicionales' : 'Additional monthly revenue'}
              </div>
            </div>

            <div className="text-center p-6 bg-emerald-50 rounded-2xl">
              <div className="text-xl sm:text-2xl font-bold text-emerald-600 mb-2">298%</div>
              <div className="text-gray-600">
                {locale === 'es' ? 'Crecimiento en reservas' : 'Growth in bookings'}
              </div>
            </div>

            <div className="text-center p-6 bg-emerald-50 rounded-2xl">
              <div className="text-xl sm:text-2xl font-bold text-emerald-600 mb-2">220%</div>
              <div className="text-gray-600">
                {locale === 'es' ? 'Aumento en ticket promedio' : 'Increase in average ticket'}
              </div>
            </div>

            <div className="text-center p-6 bg-emerald-50 rounded-2xl">
              <div className="text-xl sm:text-2xl font-bold text-emerald-600 mb-2">4.7★</div>
              <div className="text-gray-600">
                {locale === 'es' ? 'Calificación promedio' : 'Average rating'}
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="bg-gray-50 rounded-2xl p-8 text-center">
            <blockquote className="text-2xl font-medium text-gray-900 mb-6 italic">
              "{locale === 'es' 
                ? 'RAY nos ayudó a reposicionar Marabu como experiencia gastronómica tropical premium. Ahora somos reconocidos por nuestra cocina fusión sofisticada. Las reservas se triplicaron y nuestro ticket promedio aumentó significativamente.'
                : 'RAY helped us reposition Marabu as a premium tropical dining experience. Now we are recognized for our sophisticated fusion cuisine. Bookings tripled and our average ticket increased significantly.'
              }"
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
                <Palmtree className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">Marabu</div>
                <div className="text-gray-600">
                  {locale === 'es' ? 'Restaurante Caribeño Fusión' : 'Caribbean Fusion Restaurant'}
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

export default MarabuCaseStudy

