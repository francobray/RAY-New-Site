'use client'

import React from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { ArrowLeft, TrendingUp, MapPin, Users, Coffee } from 'lucide-react'
import Image from 'next/image'
import { type Locale } from '@/lib/i18n'

// Dynamically import CTASection to reduce initial bundle size
const CTASection = dynamic(() => import('../CTASection'), {
  ssr: true,
  loading: () => null,
})

interface DolcezzaCaseStudyProps {
  locale: Locale
}

const DolcezzaCaseStudy: React.FC<DolcezzaCaseStudyProps> = ({ locale }) => {
  return (
    <>

      {/* AI-friendly page summary and metrics box */}
      <div className="sr-only">
        <h1>Dolcezza Case Study - Artisanal Gelato Success with RAY Platform</h1>
        <p>See how Dolcezza increased their artisanal gelato business's local visibility and customer engagement using RAY's comprehensive marketing platform.</p>
      </div>

      {/* Hero Section - Dolcezza Brand Style */}
      <section className="relative min-h-screen bg-gradient-to-br from-purple-600 via-pink-600 to-rose-700 text-white overflow-hidden">
        {/* Background Elements - Sweet, Artisanal, Elegant */}
        <div className="absolute inset-0">
          {/* Gradient overlays inspired by Dolcezza's sweet aesthetic */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-rose-600 opacity-90"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(168,85,247,0.3),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(236,72,153,0.2),transparent_50%)]"></div>
          
          {/* Sweet texture pattern */}
          <div className={`absolute inset-0 opacity-10 bg-[url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M30 10c11 0 20 9 20 20s-9 20-20 20S10 41 10 30s9-20 20-20zm0 5c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")]`}></div>
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
                    <Coffee className="w-4 h-4 mr-2" />
                    {locale === 'es' ? 'Caso de Estudio Gelatería' : 'Gelato Shop Case Study'}
                  </div>
                  
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                    <span className="block">Dolcezza</span>
                    <span className="block text-purple-200">Artisanal Excellence</span>
                  </h1>
                  
                  <p className="text-xl text-purple-100 leading-relaxed max-w-2xl">
                    {locale === 'es' 
                      ? 'Descubre cómo Dolcezza transformó su negocio de gelato artesanal usando la plataforma de marketing de RAY para aumentar la visibilidad local y el engagement de clientes.'
                      : 'Discover how Dolcezza transformed their artisanal gelato business using RAY\'s marketing platform to increase local visibility and customer engagement.'
                    }
                  </p>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="text-3xl font-bold text-white mb-2">+$8,000</div>
                    <div className="text-purple-200 text-sm">
                      {locale === 'es' ? 'Ingresos mensuales adicionales' : 'Additional monthly revenue'}
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="text-3xl font-bold text-white mb-2">145%</div>
                    <div className="text-purple-200 text-sm">
                      {locale === 'es' ? 'Crecimiento en clientes locales' : 'Growth in local customers'}
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
                    src="/images/success-stories/Dolcezza.png"
                    alt="Dolcezza - Artisanal Gelato Success"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  
                  {/* Floating Stats */}
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                    <div className="text-purple-600 font-bold text-lg">+$8K</div>
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
                ? 'Dolcezza producía gelato artesanal de la más alta calidad, pero luchaba por destacar en un mercado saturado de opciones de postres. Su presencia digital no reflejaba la artesanía y pasión detrás de sus productos, y competían contra cadenas más grandes con mayor presupuesto de marketing.'
                : 'Dolcezza produced the highest quality artisanal gelato, but struggled to stand out in a saturated dessert market. Their digital presence didn\'t reflect the craftsmanship and passion behind their products, and they competed against larger chains with bigger marketing budgets.'
              }
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
                <h3 className="text-lg font-semibold text-red-800 mb-3">
                  {locale === 'es' ? 'Mercado Saturado' : 'Saturated Market'}
                </h3>
                <p className="text-red-700">
                  {locale === 'es' 
                    ? 'Competían contra cadenas grandes y opciones de postres más económicas.'
                    : 'Competing against large chains and more affordable dessert options.'
                  }
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
                <h3 className="text-lg font-semibold text-red-800 mb-3">
                  {locale === 'es' ? 'Falta de Diferenciación' : 'Lack of Differentiation'}
                </h3>
                <p className="text-red-700">
                  {locale === 'es' 
                    ? 'Su mensaje artesanal no llegaba a clientes que valoraban la calidad premium.'
                    : 'Their artisanal message wasn\'t reaching customers who valued premium quality.'
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
                ? 'RAY ayudó a Dolcezza a posicionarse como la gelatería artesanal premium líder en su área, desarrollando estrategias de marketing que destacaban su proceso artesanal, ingredientes de calidad y experiencia única del cliente.'
                : 'RAY helped Dolcezza position themselves as the leading premium artisanal gelateria in their area, developing marketing strategies that highlighted their artisanal process, quality ingredients, and unique customer experience.'
              }
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white border border-purple-200 p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Coffee className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {locale === 'es' ? 'Marketing Artesanal' : 'Artisanal Marketing'}
                </h3>
                <p className="text-gray-600">
                  {locale === 'es' 
                    ? 'Campañas que destacan el proceso artesanal y los ingredientes premium de calidad.'
                    : 'Campaigns highlighting the artisanal process and premium quality ingredients.'
                  }
                </p>
              </div>

              <div className="bg-white border border-purple-200 p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {locale === 'es' ? 'Experiencia Premium' : 'Premium Experience'}
                </h3>
                <p className="text-gray-600">
                  {locale === 'es' 
                    ? 'Marketing que comunica la experiencia única y de alta calidad del cliente.'
                    : 'Marketing that communicates the unique and high-quality customer experience.'
                  }
                </p>
              </div>

              <div className="bg-white border border-purple-200 p-6 rounded-xl shadow-xl">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {locale === 'es' ? 'SEO de Gelatería' : 'Gelateria SEO'}
                </h3>
                <p className="text-gray-600">
                  {locale === 'es' 
                    ? 'Optimización para búsquedas relacionadas con gelato artesanal y postres premium locales.'
                    : 'Optimization for searches related to artisanal gelato and local premium desserts.'
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
              <div className="text-xl sm:text-2xl font-bold text-purple-600 mb-2">+$8K</div>
              <div className="text-gray-600">
                {locale === 'es' ? 'Ingresos mensuales adicionales' : 'Additional monthly revenue'}
              </div>
            </div>

            <div className="text-center p-6 bg-purple-50 rounded-2xl">
              <div className="text-xl sm:text-2xl font-bold text-purple-600 mb-2">145%</div>
              <div className="text-gray-600">
                {locale === 'es' ? 'Crecimiento en clientes locales' : 'Growth in local customers'}
              </div>
            </div>

            <div className="text-center p-6 bg-purple-50 rounded-2xl">
              <div className="text-xl sm:text-2xl font-bold text-purple-600 mb-2">125%</div>
              <div className="text-gray-600">
                {locale === 'es' ? 'Mejora en visibilidad local' : 'Improvement in local visibility'}
              </div>
            </div>

            <div className="text-center p-6 bg-purple-50 rounded-2xl">
              <div className="text-xl sm:text-2xl font-bold text-purple-600 mb-2">4x</div>
              <div className="text-gray-600">
                {locale === 'es' ? 'ROI en marketing premium' : 'Premium marketing ROI'}
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="bg-gray-50 rounded-2xl p-8 text-center">
            <blockquote className="text-2xl font-medium text-gray-900 mb-6 italic">
              "{locale === 'es' 
                ? 'RAY nos ayudó a comunicar la verdadera calidad y artesanía detrás de nuestros productos. Ahora nuestros clientes entienden por qué elegir gelato artesanal premium vale la pena.'
                : 'RAY helped us communicate the true quality and craftsmanship behind our products. Now our customers understand why choosing premium artisanal gelato is worth it.'
              }"
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                <Coffee className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">Violeta Edelman</div>
                <div className="text-gray-600">
                  {locale === 'es' ? 'Co-Fundadora - Dolcezza' : 'Co-Founder - Dolcezza'}
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

export default DolcezzaCaseStudy
