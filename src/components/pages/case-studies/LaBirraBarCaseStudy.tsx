'use client'

import React from 'react'
import dynamic from 'next/dynamic'
// Dynamically import CTASection to reduce initial bundle size
const CTASection = dynamic(() => import('../../shared/CTASection'), {
  ssr: true,
  loading: () => null,
})
import Link from 'next/link'
import { ArrowLeft, TrendingUp, MapPin, Users, Beer } from 'lucide-react'
import Image from 'next/image'
import { type Locale } from '@/lib/i18n'

interface LaBirraBarCaseStudyProps {
  locale: Locale
}

const LaBirraBarCaseStudy: React.FC<LaBirraBarCaseStudyProps> = ({ locale }) => {
  return (
    <>

      {/* AI-friendly page summary and metrics box */}
      <div className="sr-only">
        <h1>La Birra Bar Case Study - Craft Beer Bar Success with RAY Platform</h1>
        <p>See how La Birra Bar increased their craft beer bar's local visibility and customer engagement using RAY's comprehensive marketing platform.</p>
      </div>

      {/* Hero Section - La Birra Bar Brand Style */}
      <section className="relative min-h-screen bg-gradient-to-br from-amber-600 via-orange-600 to-red-700 text-white overflow-hidden">
        {/* Background Elements - Warm, Beer-inspired, Social */}
        <div className="absolute inset-0">
          {/* Gradient overlays inspired by La Birra Bar's beer aesthetic */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500 via-orange-500 to-red-600 opacity-90"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(251,146,60,0.3),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(249,115,22,0.2),transparent_50%)]"></div>
          
          {/* Beer texture pattern */}
          <div className={`absolute inset-0 opacity-10 bg-[url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M30 5c13.8 0 25 11.2 25 25S43.8 55 30 55 5 43.8 5 30 16.2 5 30 5zm0 5c-11 0-20 9-20 20s9 20 20 20 20-9 20-20-9-20-20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")]`}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
          <div className="w-full">
            {/* Breadcrumb */}
            <div className="mb-12">
              <Link 
                href={`/${locale}/case-studies`} 
                className="inline-flex items-center text-amber-200 hover:text-white transition-colors duration-300 text-sm font-medium"
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
                    <Beer className="w-4 h-4 mr-2" />
                    {locale === 'es' ? 'Caso de Estudio Bar de Cerveza' : 'Craft Beer Bar Case Study'}
                  </div>
                  
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                    <span className="block">La Birra Bar</span>
                    <span className="block text-amber-200">Craft Beer Success</span>
                  </h1>
                  
                  <p className="text-xl text-amber-100 leading-relaxed max-w-2xl">
                    {locale === 'es' 
                      ? 'Descubre cómo La Birra Bar transformó su bar de cerveza artesanal usando la plataforma de marketing de RAY para aumentar la visibilidad local y crear una comunidad de amantes de la cerveza.'
                      : 'Discover how La Birra Bar transformed their craft beer bar using RAY\'s marketing platform to increase local visibility and create a community of beer lovers.'
                    }
                  </p>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="text-3xl font-bold text-white mb-2">+$22,000</div>
                    <div className="text-amber-200 text-sm">
                      {locale === 'es' ? 'Ingresos mensuales adicionales' : 'Additional monthly revenue'}
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="text-3xl font-bold text-white mb-2">210%</div>
                    <div className="text-amber-200 text-sm">
                      {locale === 'es' ? 'Crecimiento en clientes regulares' : 'Growth in regular customers'}
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <Link
                    href={`/${locale}/demo`}
                    className="inline-flex items-center px-8 py-4 bg-white text-amber-600 font-semibold rounded-xl hover:bg-amber-50 transition-all duration-300 transform hover:scale-105 shadow-xl"
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
                    src="/images/success-stories/La-Birra-Bar.jpg"
                    alt="La Birra Bar - Craft Beer Bar Success"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  
                  {/* Floating Stats */}
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                    <div className="text-amber-600 font-bold text-lg">+$22K</div>
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
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
          </div>

          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="text-xl leading-relaxed mb-8">
              {locale === 'es' 
                ? 'La Birra Bar ofrecía una selección excepcional de cervezas artesanales pero luchaba por competir contra bares más establecidos con mayor presupuesto de marketing. Su presencia digital no reflejaba la pasión por la cerveza artesanal y la experiencia social única que ofrecían.'
                : 'La Birra Bar offered an exceptional selection of craft beers but struggled to compete against more established bars with bigger marketing budgets. Their digital presence didn\'t reflect their passion for craft beer and the unique social experience they provided.'
              }
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
                <h3 className="text-lg font-semibold text-red-800 mb-3">
                  {locale === 'es' ? 'Competencia Establecida' : 'Established Competition'}
                </h3>
                <p className="text-red-700">
                  {locale === 'es' 
                    ? 'Bares más grandes con mayor reconocimiento de marca y presupuesto de marketing.'
                    : 'Larger bars with greater brand recognition and marketing budgets.'
                  }
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
                <h3 className="text-lg font-semibold text-red-800 mb-3">
                  {locale === 'es' ? 'Falta de Comunidad' : 'Lack of Community'}
                </h3>
                <p className="text-red-700">
                  {locale === 'es' 
                    ? 'Dificultad para construir y mantener una comunidad leal de amantes de la cerveza.'
                    : 'Difficulty building and maintaining a loyal community of beer lovers.'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              {locale === 'es' ? 'La Solución' : 'The Solution'}
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
          </div>

          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="text-xl leading-relaxed mb-8">
              {locale === 'es' 
                ? 'RAY ayudó a La Birra Bar a posicionarse como el destino definitivo para amantes de la cerveza artesanal, desarrollando estrategias de marketing que destacaban su selección única, eventos de cerveza y experiencia social.'
                : 'RAY helped La Birra Bar position themselves as the ultimate destination for craft beer lovers, developing marketing strategies that highlighted their unique selection, beer events, and social experience.'
              }
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white border border-amber-200 p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <Beer className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {locale === 'es' ? 'Marketing de Cerveza' : 'Beer Marketing'}
                </h3>
                <p className="text-gray-600">
                  {locale === 'es' 
                    ? 'Campañas que destacan la selección única de cervezas artesanales y eventos especiales.'
                    : 'Campaigns highlighting the unique selection of craft beers and special events.'
                  }
                </p>
              </div>

              <div className="bg-white border border-amber-200 p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {locale === 'es' ? 'Construcción de Comunidad' : 'Community Building'}
                </h3>
                <p className="text-gray-600">
                  {locale === 'es' 
                    ? 'Estrategias para crear y mantener una comunidad activa de amantes de la cerveza.'
                    : 'Strategies to create and maintain an active community of beer lovers.'
                  }
                </p>
              </div>

              <div className="bg-white border border-amber-200 p-6 rounded-xl shadow-xl">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {locale === 'es' ? 'SEO de Bar de Cerveza' : 'Beer Bar SEO'}
                </h3>
                <p className="text-gray-600">
                  {locale === 'es' 
                    ? 'Optimización para búsquedas relacionadas con bares de cerveza artesanal y eventos de cerveza locales.'
                    : 'Optimization for searches related to craft beer bars and local beer events.'
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
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6 bg-amber-50 rounded-2xl">
              <div className="text-xl sm:text-2xl font-bold text-amber-600 mb-2">+$22K</div>
              <div className="text-gray-600">
                {locale === 'es' ? 'Ingresos mensuales adicionales' : 'Additional monthly revenue'}
              </div>
            </div>

            <div className="text-center p-6 bg-amber-50 rounded-2xl">
              <div className="text-xl sm:text-2xl font-bold text-amber-600 mb-2">210%</div>
              <div className="text-gray-600">
                {locale === 'es' ? 'Crecimiento en clientes regulares' : 'Growth in regular customers'}
              </div>
            </div>

            <div className="text-center p-6 bg-amber-50 rounded-2xl">
              <div className="text-xl sm:text-2xl font-bold text-amber-600 mb-2">185%</div>
              <div className="text-gray-600">
                {locale === 'es' ? 'Mejora en visibilidad local' : 'Improvement in local visibility'}
              </div>
            </div>

            <div className="text-center p-6 bg-amber-50 rounded-2xl">
              <div className="text-xl sm:text-2xl font-bold text-amber-600 mb-2">4x</div>
              <div className="text-gray-600">
                {locale === 'es' ? 'ROI en marketing de cerveza' : 'Beer marketing ROI'}
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="bg-gray-50 rounded-2xl p-8 text-center">
            <blockquote className="text-2xl font-medium text-gray-900 mb-6 italic">
              "{locale === 'es' 
                ? 'RAY nos ayudó a crear una verdadera comunidad de amantes de la cerveza. Ahora tenemos clientes regulares que vienen específicamente por nuestra selección y ambiente único.'
                : 'RAY helped us create a real community of beer lovers. Now we have regular customers who come specifically for our selection and unique atmosphere.'
              }"
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
                <Beer className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">La Birra Bar Team</div>
                <div className="text-gray-600">
                  {locale === 'es' ? 'Bar de Cerveza Artesanal' : 'Craft Beer Bar'}
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

export default LaBirraBarCaseStudy
