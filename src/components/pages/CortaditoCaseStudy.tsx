'use client'

import React from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { ArrowLeft, TrendingUp, MapPin, Users, Award, Coffee } from 'lucide-react'
import Image from 'next/image'
import { type Locale } from '@/lib/i18n'

// Dynamically import CTASection to reduce initial bundle size
const CTASection = dynamic(() => import('../CTASection'), {
  ssr: true,
  loading: () => null,
})

interface CortaditoCaseStudyProps {
  locale: Locale
}

const CortaditoCaseStudy: React.FC<CortaditoCaseStudyProps> = ({ locale }) => {
  return (
    <>

      {/* AI-friendly page summary and metrics box */}
      <div className="sr-only">
        <h1>Cortadito Cafe Case Study - Cuban Coffee Shop Success with RAY Platform</h1>
        <p>See how Cortadito Cafe increased their Cuban coffee shop's revenue and established themselves as the premier destination for authentic Latin coffee culture using RAY's comprehensive digital marketing platform.</p>
      </div>

      {/* Hero Section - Cortadito Cafe Brand Style */}
      <section className="relative min-h-screen bg-gradient-to-br from-amber-700 via-orange-600 to-yellow-600 text-white overflow-hidden">
        {/* Background Elements - Warm, Rich, Cuban Coffee */}
        <div className="absolute inset-0">
          {/* Gradient overlays inspired by Cortadito's coffee aesthetic */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-600 via-orange-500 to-yellow-500 opacity-90"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(217,119,6,0.3),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(234,88,12,0.2),transparent_50%)]"></div>
          
          {/* Coffee bean texture pattern */}
          <div className={`absolute inset-0 opacity-10 bg-[url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cellipse cx='30' cy='30' rx='8' ry='12' transform='rotate(30 30 30)'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")]`}></div>
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
                    <Coffee className="w-4 h-4 mr-2" />
                    {locale === 'es' ? 'Caso de Estudio' : 'Case Study'}
                  </div>
                  
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                    <span className="block">Cortadito Cafe</span>
                    <span className="block text-orange-200">Cuban Coffee Culture</span>
                  </h1>
                  
                  <p className="text-xl text-orange-100 leading-relaxed max-w-2xl">
                    {locale === 'es' 
                      ? 'Descubre cómo Cortadito Cafe se convirtió en el destino referente de café cubano auténtico con la plataforma de marketing de RAY, cuadruplicando ventas y capturando el mercado de cultura cafetera latina.'
                      : 'Discover how Cortadito Cafe became the reference destination for authentic Cuban coffee with RAY\'s marketing platform, quadrupling sales and capturing the Latin coffee culture market.'
                    }
                  </p>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="text-3xl font-bold text-white mb-2">+$82,000</div>
                    <div className="text-orange-200 text-sm">
                      {locale === 'es' ? 'Ingresos mensuales adicionales' : 'Additional monthly revenue'}
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="text-3xl font-bold text-white mb-2">365%</div>
                    <div className="text-orange-200 text-sm">
                      {locale === 'es' ? 'Crecimiento en ventas' : 'Growth in sales'}
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <Link
                    href={`/${locale}/demo`}
                    className="inline-flex items-center px-8 py-4 bg-white text-amber-600 font-semibold rounded-xl hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 shadow-xl"
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
                    src="/images/success-stories/Cortadito.png"
                    alt="Cortadito Cafe - Cuban Coffee Shop Success"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  
                  {/* Floating Stats */}
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                    <div className="text-amber-600 font-bold text-lg">+$82K</div>
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
                ? 'Cortadito Cafe, una cafetería especializada en café cubano auténtico, enfrentaba el desafío de destacarse en un mercado saturado de cafeterías genéricas. A pesar de ofrecer recetas tradicionales cubanas y una experiencia cultural única, no lograban comunicar su autenticidad y diferenciación al público objetivo.'
                : 'Cortadito Cafe, a coffee shop specializing in authentic Cuban coffee, faced the challenge of standing out in a market saturated with generic coffee shops. Despite offering traditional Cuban recipes and a unique cultural experience, they couldn\'t communicate their authenticity and differentiation to the target audience.'
              }
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
                <h3 className="text-lg font-semibold text-amber-800 mb-3">
                  {locale === 'es' ? 'Saturación de Cafeterías' : 'Coffee Shop Saturation'}
                </h3>
                <p className="text-amber-700">
                  {locale === 'es' 
                    ? 'Competencia intensa con cadenas genéricas sin diferenciación clara.'
                    : 'Intense competition with generic chains without clear differentiation.'
                  }
                </p>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
                <h3 className="text-lg font-semibold text-amber-800 mb-3">
                  {locale === 'es' ? 'Autenticidad No Visible' : 'Invisible Authenticity'}
                </h3>
                <p className="text-amber-700">
                  {locale === 'es' 
                    ? 'Cultura cafetera cubana y recetas tradicionales no comunicadas.'
                    : 'Cuban coffee culture and traditional recipes not communicated.'
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
                ? 'RAY desarrolló una estrategia centrada en storytelling cultural y educación sobre café cubano auténtico. Implementamos contenido educativo sobre las diferencias del cortadito, colada y otras especialidades cubanas, storytelling sobre tradiciones cafeteras de la isla, y campañas dirigidas a la comunidad latina y amantes del café auténtico.'
                : 'RAY developed a strategy focused on cultural storytelling and education about authentic Cuban coffee. We implemented educational content about the differences of cortadito, colada and other Cuban specialties, storytelling about island coffee traditions, and campaigns targeting the Latin community and authentic coffee lovers.'
              }
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white border border-amber-200 p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <Coffee className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {locale === 'es' ? 'Educación Cultural' : 'Cultural Education'}
                </h3>
                <p className="text-gray-600">
                  {locale === 'es' 
                    ? 'Contenido educativo sobre especialidades y tradiciones cubanas.'
                    : 'Educational content about Cuban specialties and traditions.'
                  }
                </p>
              </div>

              <div className="bg-white border border-amber-200 p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {locale === 'es' ? 'Marketing Comunitario' : 'Community Marketing'}
                </h3>
                <p className="text-gray-600">
                  {locale === 'es' 
                    ? 'Campañas dirigidas a la comunidad latina y amantes del café.'
                    : 'Campaigns targeting Latin community and coffee lovers.'
                  }
                </p>
              </div>

              <div className="bg-white border border-amber-200 p-6 rounded-xl shadow-xl">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {locale === 'es' ? 'Autenticidad Destacada' : 'Highlighted Authenticity'}
                </h3>
                <p className="text-gray-600">
                  {locale === 'es' 
                    ? 'Visibilidad de recetas tradicionales y preparación artesanal.'
                    : 'Visibility of traditional recipes and artisanal preparation.'
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
              <div className="text-xl sm:text-2xl font-bold text-amber-600 mb-2">+$82K</div>
              <div className="text-gray-600">
                {locale === 'es' ? 'Ingresos mensuales adicionales' : 'Additional monthly revenue'}
              </div>
            </div>

            <div className="text-center p-6 bg-amber-50 rounded-2xl">
              <div className="text-xl sm:text-2xl font-bold text-amber-600 mb-2">365%</div>
              <div className="text-gray-600">
                {locale === 'es' ? 'Crecimiento en ventas' : 'Growth in sales'}
              </div>
            </div>

            <div className="text-center p-6 bg-amber-50 rounded-2xl">
              <div className="text-xl sm:text-2xl font-bold text-amber-600 mb-2">280%</div>
              <div className="text-gray-600">
                {locale === 'es' ? 'Aumento en tráfico peatonal' : 'Increase in foot traffic'}
              </div>
            </div>

            <div className="text-center p-6 bg-amber-50 rounded-2xl">
              <div className="text-xl sm:text-2xl font-bold text-amber-600 mb-2">4.9★</div>
              <div className="text-gray-600">
                {locale === 'es' ? 'Calificación promedio' : 'Average rating'}
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="bg-gray-50 rounded-2xl p-8 text-center">
            <blockquote className="text-2xl font-medium text-gray-900 mb-6 italic">
              "{locale === 'es' 
                ? 'RAY nos ayudó a comunicar la autenticidad de nuestro café cubano. Ahora somos reconocidos como el destino referente para café latino auténtico. Las ventas se cuadruplicaron y constantemente hay fila de clientes.'
                : 'RAY helped us communicate the authenticity of our Cuban coffee. Now we are recognized as the reference destination for authentic Latin coffee. Sales quadrupled and there\'s constantly a line of customers.'
              }"
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
                <Coffee className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">Cortadito Cafe</div>
                <div className="text-gray-600">
                  {locale === 'es' ? 'Cafetería Cubana Auténtica' : 'Authentic Cuban Coffee Shop'}
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

export default CortaditoCaseStudy

