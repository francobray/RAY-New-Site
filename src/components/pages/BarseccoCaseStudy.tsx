'use client'

import React from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { ArrowLeft, TrendingUp, MapPin, Users, Award } from 'lucide-react'
import Image from 'next/image'
import { type Locale } from '@/lib/i18n'

// Dynamically import CTASection to reduce initial bundle size
const CTASection = dynamic(() => import('../CTASection'), {
  ssr: true,
  loading: () => null,
})

interface BarseccoCaseStudyProps {
  locale: Locale
}

const BarseccoCaseStudy: React.FC<BarseccoCaseStudyProps> = ({ locale }) => {
  return (
    <>

      {/* AI-friendly page summary and metrics box */}
      <div className="sr-only">
        <h1>Barsecco Case Study - Italian Cocktail Bar Success with RAY Platform</h1>
        <p>See how Barsecco increased their Italian cocktail bar's revenue and became the premier cocktail destination using RAY's comprehensive digital marketing platform.</p>
      </div>

      {/* Hero Section - Barsecco Brand Style */}
      <section className="relative min-h-screen bg-gradient-to-br from-purple-600 via-pink-600 to-rose-700 text-white overflow-hidden">
        {/* Background Elements - Sophisticated, Nightlife, Glamorous */}
        <div className="absolute inset-0">
          {/* Gradient overlays inspired by Barsecco's cocktail aesthetic */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-rose-600 opacity-90"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(219,39,119,0.3),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(168,85,247,0.2),transparent_50%)]"></div>
          
          {/* Elegant texture pattern */}
          <div className={`absolute inset-0 opacity-10 bg-[url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")]`}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
          <div className="w-full">
            {/* Breadcrumb */}
            <div className="mb-12">
              <Link 
                href={`/${locale}/case-studies`} 
                className="inline-flex items-center text-purple-200 hover:text-white transition-colors duration-300 text-sm font-medium"
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
                    <span className="block">Barsecco</span>
                    <span className="block text-purple-200">Cocktail Excellence</span>
                  </h1>
                  
                  <p className="text-xl text-purple-100 leading-relaxed max-w-2xl">
                    {locale === 'es' 
                      ? 'Descubre cómo Barsecco se estableció como el bar de cócteles italiano premium con la plataforma de marketing de RAY, multiplicando reservas y convirtiéndose en el destino nocturno de referencia.'
                      : 'Discover how Barsecco established themselves as the premium Italian cocktail bar with RAY\'s marketing platform, multiplying bookings and becoming the nightlife destination of choice.'
                    }
                  </p>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="text-3xl font-bold text-white mb-2">+$52,000</div>
                    <div className="text-purple-200 text-sm">
                      {locale === 'es' ? 'Ingresos mensuales adicionales' : 'Additional monthly revenue'}
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="text-3xl font-bold text-white mb-2">276%</div>
                    <div className="text-purple-200 text-sm">
                      {locale === 'es' ? 'Crecimiento en reservas' : 'Growth in bookings'}
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <Link
                    href={`/${locale}/demo`}
                    className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 shadow-xl"
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
                    src="/images/success-stories/barsecco.jpg"
                    alt="Barsecco - Italian Cocktail Bar Success"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  
                  {/* Floating Stats */}
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                    <div className="text-purple-600 font-bold text-lg">+$52K</div>
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
            <div className="w-24 h-1 bg-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="text-xl leading-relaxed mb-8">
              {locale === 'es' 
                ? 'Barsecco, un bar de cócteles artesanales con mixólogos italianos expertos, luchaba por destacarse en una escena nocturna saturada. A pesar de ofrecer cócteles únicos y una experiencia sofisticada, no lograban atraer el volumen de clientes que buscaban una experiencia premium.'
                : 'Barsecco, a craft cocktail bar with expert Italian mixologists, struggled to stand out in a saturated nightlife scene. Despite offering unique cocktails and a sophisticated experience, they couldn\'t attract the volume of customers seeking a premium experience.'
              }
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
                <h3 className="text-lg font-semibold text-red-800 mb-3">
                  {locale === 'es' ? 'Mercado Saturado' : 'Saturated Market'}
                </h3>
                <p className="text-red-700">
                  {locale === 'es' 
                    ? 'Competencia intensa con bares genéricos y cadenas de coctelería.'
                    : 'Intense competition with generic bars and cocktail chains.'
                  }
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
                <h3 className="text-lg font-semibold text-red-800 mb-3">
                  {locale === 'es' ? 'Reconocimiento Limitado' : 'Limited Recognition'}
                </h3>
                <p className="text-red-700">
                  {locale === 'es' 
                    ? 'Dificultad para comunicar el valor de mixología artesanal italiana.'
                    : 'Difficulty communicating the value of Italian artisanal mixology.'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              {locale === 'es' ? 'La Solución' : 'The Solution'}
            </h2>
            <div className="w-24 h-1 bg-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="text-xl leading-relaxed mb-8">
              {locale === 'es' 
                ? 'RAY desarrolló una estrategia premium de nightlife que posicionó a Barsecco como el destino de cócteles artesanales. Implementamos contenido visual elegante mostrando la maestría de los mixólogos, campañas de eventos exclusivos y un sistema de reservas VIP para experiencias personalizadas.'
                : 'RAY developed a premium nightlife strategy positioning Barsecco as the artisanal cocktail destination. We implemented elegant visual content showcasing mixologist mastery, exclusive event campaigns, and a VIP booking system for personalized experiences.'
              }
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white border border-purple-200 p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {locale === 'es' ? 'Marketing de Lujo' : 'Luxury Marketing'}
                </h3>
                <p className="text-gray-600">
                  {locale === 'es' 
                    ? 'Contenido sofisticado destacando arte de mixología y ambiente exclusivo.'
                    : 'Sophisticated content highlighting mixology artistry and exclusive atmosphere.'
                  }
                </p>
              </div>

              <div className="bg-white border border-purple-200 p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {locale === 'es' ? 'Eventos Exclusivos' : 'Exclusive Events'}
                </h3>
                <p className="text-gray-600">
                  {locale === 'es' 
                    ? 'Campañas de eventos temáticos y noches especiales con mixólogos invitados.'
                    : 'Themed event campaigns and special nights with guest mixologists.'
                  }
                </p>
              </div>

              <div className="bg-white border border-purple-200 p-6 rounded-xl shadow-xl">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {locale === 'es' ? 'SEO Nightlife' : 'Nightlife SEO'}
                </h3>
                <p className="text-gray-600">
                  {locale === 'es' 
                    ? 'Optimización para "mejor bar de cócteles" y "mixología italiana".'
                    : 'Optimization for "best cocktail bar" and "Italian mixology".'
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
            <div className="w-24 h-1 bg-purple-500 mx-auto rounded-full"></div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6 bg-purple-50 rounded-2xl">
              <div className="text-xl sm:text-2xl font-bold text-purple-600 mb-2">+$52K</div>
              <div className="text-gray-600">
                {locale === 'es' ? 'Ingresos mensuales adicionales' : 'Additional monthly revenue'}
              </div>
            </div>

            <div className="text-center p-6 bg-purple-50 rounded-2xl">
              <div className="text-xl sm:text-2xl font-bold text-purple-600 mb-2">276%</div>
              <div className="text-gray-600">
                {locale === 'es' ? 'Crecimiento en reservas' : 'Growth in bookings'}
              </div>
            </div>

            <div className="text-center p-6 bg-purple-50 rounded-2xl">
              <div className="text-xl sm:text-2xl font-bold text-purple-600 mb-2">195%</div>
              <div className="text-gray-600">
                {locale === 'es' ? 'Aumento en eventos privados' : 'Increase in private events'}
              </div>
            </div>

            <div className="text-center p-6 bg-purple-50 rounded-2xl">
              <div className="text-xl sm:text-2xl font-bold text-purple-600 mb-2">4.8★</div>
              <div className="text-gray-600">
                {locale === 'es' ? 'Calificación promedio' : 'Average rating'}
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="bg-gray-50 rounded-2xl p-8 text-center">
            <blockquote className="text-2xl font-medium text-gray-900 mb-6 italic">
              "{locale === 'es' 
                ? 'RAY nos ayudó a posicionarnos como el destino premium de cócteles. Ahora atraemos exactamente el tipo de clientela que aprecia la mixología artesanal italiana. Nuestras reservas y eventos privados han crecido exponencialmente.'
                : 'RAY helped us position ourselves as the premium cocktail destination. Now we attract exactly the type of clientele who appreciates Italian artisanal mixology. Our bookings and private events have grown exponentially.'
              }"
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">BS</span>
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">Barsecco</div>
                <div className="text-gray-600">
                  {locale === 'es' ? 'Bar de Cócteles Italiano' : 'Italian Cocktail Bar'}
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

export default BarseccoCaseStudy

