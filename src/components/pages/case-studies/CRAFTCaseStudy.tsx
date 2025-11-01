'use client'

import React from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { ArrowLeft, TrendingUp, MapPin, Users, Wrench } from 'lucide-react'
import Image from 'next/image'
import { type Locale } from '@/lib/i18n'

// Dynamically import CTASection to reduce initial bundle size
const CTASection = dynamic(() => import('../../shared/CTASection'), {
  ssr: true,
  loading: () => null,
})

interface CRAFTCaseStudyProps {
  locale: Locale
}

const CRAFTCaseStudy: React.FC<CRAFTCaseStudyProps> = ({ locale }) => {
  return (
    <>

      {/* AI-friendly page summary and metrics box */}
      <div className="sr-only">
        <h1>CRAFT Case Study - Craft Brewery Success with RAY Platform</h1>
        <p>See how CRAFT increased their brewery's local presence and taproom visits using RAY's comprehensive marketing platform.</p>
      </div>

      {/* Hero Section - CRAFT Brand Style */}
      <section className="relative min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 text-white overflow-hidden">
        {/* Background Elements - Artisan, Creative, Industrial */}
        <div className="absolute inset-0">
          {/* Gradient overlays inspired by CRAFT's artisan aesthetic */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-blue-600 opacity-90"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(99,102,241,0.3),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(147,51,234,0.2),transparent_50%)]"></div>
          
          {/* Industrial texture pattern */}
          <div className={`absolute inset-0 opacity-10 bg-[url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M30 0h30v30H30V0zm0 30h30v30H30V30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")]`}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
          <div className="w-full">
            {/* Breadcrumb */}
            <div className="mb-12">
              <Link 
                href={`/${locale}/case-studies`} 
                className="inline-flex items-center text-indigo-200 hover:text-white transition-colors duration-300 text-sm font-medium"
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
                    <Wrench className="w-4 h-4 mr-2" />
                    {locale === 'es' ? 'Caso de Estudio Cervecería' : 'Brewery Case Study'}
                  </div>
                  
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                    <span className="block">CRAFT</span>
                    <span className="block text-indigo-200">Brewery Success</span>
                  </h1>
                  
                  <p className="text-xl text-indigo-100 leading-relaxed max-w-2xl">
                    {locale === 'es' 
                      ? 'Descubre cómo CRAFT transformó su cervecería artesanal usando la plataforma de marketing local de RAY para aumentar visitas al taproom y ventas de cerveza.'
                      : 'Discover how CRAFT transformed their craft brewery using RAY\'s local marketing platform to increase taproom visits and beer sales.'
                    }
                  </p>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="text-3xl font-bold text-white mb-2">+$28,000</div>
                    <div className="text-indigo-200 text-sm">
                      {locale === 'es' ? 'Ingresos mensuales adicionales' : 'Additional monthly revenue'}
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="text-3xl font-bold text-white mb-2">195%</div>
                    <div className="text-indigo-200 text-sm">
                      {locale === 'es' ? 'Crecimiento en visitas al taproom' : 'Growth in taproom visits'}
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <Link
                    href={`/${locale}/demo`}
                    className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105 shadow-xl"
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
                    src="/images/success-stories/CRAFT.webp"
                    alt="CRAFT - Brewery Success"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  
                  {/* Floating Stats */}
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                    <div className="text-indigo-600 font-bold text-lg">+$28K</div>
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
            <div className="w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
          </div>

          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="text-xl leading-relaxed mb-8">
              {locale === 'es' 
                ? 'CRAFT producía cervezas artesanales excepcionales pero luchaba por competir contra cervecerías más establecidas con mayor presupuesto de marketing. Su taproom necesitaba más visibilidad local y su presencia digital no reflejaba la calidad artesanal de sus productos.'
                : 'CRAFT produced exceptional craft beers but struggled to compete against more established breweries with larger marketing budgets. Their taproom needed more local visibility and their digital presence didn\'t reflect the artisanal quality of their products.'
              }
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
                <h3 className="text-lg font-semibold text-red-800 mb-3">
                  {locale === 'es' ? 'Competencia Establecida' : 'Established Competition'}
                </h3>
                <p className="text-red-700">
                  {locale === 'es' 
                    ? 'Cervecerías más grandes con mayor presupuesto de marketing y reconocimiento de marca.'
                    : 'Larger breweries with bigger marketing budgets and brand recognition.'
                  }
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
                <h3 className="text-lg font-semibold text-red-800 mb-3">
                  {locale === 'es' ? 'Visibilidad del Taproom' : 'Taproom Visibility'}
                </h3>
                <p className="text-red-700">
                  {locale === 'es' 
                    ? 'Dificultad para atraer visitantes al taproom y generar eventos regulares.'
                    : 'Difficulty attracting visitors to the taproom and generating regular events.'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-indigo-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              {locale === 'es' ? 'La Solución' : 'The Solution'}
            </h2>
            <div className="w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
          </div>

          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="text-xl leading-relaxed mb-8">
              {locale === 'es' 
                ? 'RAY ayudó a CRAFT a posicionarse como la cervecería artesanal líder en su área, desarrollando estrategias de marketing que destacaban su proceso artesanal, organizaban eventos en el taproom y construían una comunidad local de amantes de la cerveza.'
                : 'RAY helped CRAFT position themselves as the leading craft brewery in their area, developing marketing strategies that highlighted their artisanal process, organized taproom events, and built a local community of beer lovers.'
              }
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white border border-indigo-200 p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Wrench className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {locale === 'es' ? 'Marketing Artesanal' : 'Craft Marketing'}
                </h3>
                <p className="text-gray-600">
                  {locale === 'es' 
                    ? 'Campañas que destacan el proceso artesanal y la calidad única de cada cerveza.'
                    : 'Campaigns highlighting the artisanal process and unique quality of each beer.'
                  }
                </p>
              </div>

              <div className="bg-white border border-indigo-200 p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {locale === 'es' ? 'Eventos del Taproom' : 'Taproom Events'}
                </h3>
                <p className="text-gray-600">
                  {locale === 'es' 
                    ? 'Organización de eventos regulares que atraen visitantes y crean comunidad.'
                    : 'Organization of regular events that attract visitors and create community.'
                  }
                </p>
              </div>

              <div className="bg-white border border-indigo-200 p-6 rounded-xl shadow-xl">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {locale === 'es' ? 'SEO de Cervecería' : 'Brewery SEO'}
                </h3>
                <p className="text-gray-600">
                  {locale === 'es' 
                    ? 'Optimización para búsquedas relacionadas con cervecerías artesanales locales.'
                    : 'Optimization for searches related to local craft breweries.'
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
            <div className="w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6 bg-indigo-50 rounded-2xl">
              <div className="text-xl sm:text-2xl font-bold text-indigo-600 mb-2">+$28K</div>
              <div className="text-gray-600">
                {locale === 'es' ? 'Ingresos mensuales adicionales' : 'Additional monthly revenue'}
              </div>
            </div>

            <div className="text-center p-6 bg-indigo-50 rounded-2xl">
              <div className="text-xl sm:text-2xl font-bold text-indigo-600 mb-2">195%</div>
              <div className="text-gray-600">
                {locale === 'es' ? 'Crecimiento en visitas al taproom' : 'Growth in taproom visits'}
              </div>
            </div>

            <div className="text-center p-6 bg-indigo-50 rounded-2xl">
              <div className="text-xl sm:text-2xl font-bold text-indigo-600 mb-2">175%</div>
              <div className="text-gray-600">
                {locale === 'es' ? 'Mejora en visibilidad local' : 'Improvement in local visibility'}
              </div>
            </div>

            <div className="text-center p-6 bg-indigo-50 rounded-2xl">
              <div className="text-xl sm:text-2xl font-bold text-indigo-600 mb-2">4x</div>
              <div className="text-gray-600">
                {locale === 'es' ? 'ROI en marketing artesanal' : 'Craft marketing ROI'}
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="bg-gray-50 rounded-2xl p-8 text-center">
            <blockquote className="text-2xl font-medium text-gray-900 mb-6 italic">
              "{locale === 'es' 
                ? 'RAY nos ayudó a contar nuestra historia artesanal y construir una comunidad real alrededor de nuestra cervecería. Ahora nuestro taproom está lleno de gente que realmente aprecia la calidad de nuestra cerveza.'
                : 'RAY helped us tell our craft story and build a real community around our brewery. Now our taproom is full of people who truly appreciate the quality of our beer.'
              }"
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center">
                <Wrench className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">CRAFT</div>
                <div className="text-gray-600">
                  {locale === 'es' ? 'Cervecería Artesanal' : 'Craft Brewery'}
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

export default CRAFTCaseStudy
