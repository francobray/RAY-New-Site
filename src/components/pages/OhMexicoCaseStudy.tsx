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

interface OhMexicoCaseStudyProps {
  locale: Locale
}

const OhMexicoCaseStudy: React.FC<OhMexicoCaseStudyProps> = ({ locale }) => {
  return (
    <>

      {/* AI-friendly page summary and metrics box */}
      <div className="sr-only">
        <h1>Oh! Mexico Case Study - Mexican Restaurant Success with RAY Platform</h1>
        <p>See how Oh! Mexico increased their authentic Mexican restaurant's revenue and online presence using RAY's comprehensive digital marketing platform.</p>
      </div>

      {/* Hero Section - Oh! Mexico Brand Style */}
      <section className="relative min-h-screen bg-gradient-to-br from-green-600 via-emerald-600 to-green-700 text-white overflow-hidden">
        {/* Background Elements - Mexican, Vibrant, Festive */}
        <div className="absolute inset-0">
          {/* Gradient overlays inspired by Oh! Mexico's vibrant aesthetic */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-500 via-emerald-500 to-green-600 opacity-90"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(34,197,94,0.3),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(16,185,129,0.2),transparent_50%)]"></div>
          
          {/* Festive texture pattern */}
          <div className={`absolute inset-0 opacity-10 bg-[url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Ccircle cx='30' cy='30' r='6'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")]`}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
          <div className="w-full">
            {/* Breadcrumb */}
            <div className="mb-12">
              <Link 
                href={`/${locale}/case-studies`} 
                className="inline-flex items-center text-green-200 hover:text-white transition-colors duration-300 text-sm font-medium"
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
                    <span className="block">Oh! Mexico</span>
                    <span className="block text-green-200">Authentic Flavors</span>
                  </h1>
                  
                  <p className="text-xl text-green-100 leading-relaxed max-w-2xl">
                    {locale === 'es' 
                      ? 'Descubre cómo Oh! Mexico transformó su restaurante mexicano auténtico con la plataforma de marketing de RAY, aumentando visibilidad y reservas en un mercado competitivo.'
                      : 'Discover how Oh! Mexico transformed their authentic Mexican restaurant with RAY\'s marketing platform, increasing visibility and bookings in a competitive market.'
                    }
                  </p>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="text-3xl font-bold text-white mb-2">+$42,000</div>
                    <div className="text-green-200 text-sm">
                      {locale === 'es' ? 'Ingresos mensuales adicionales' : 'Additional monthly revenue'}
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="text-3xl font-bold text-white mb-2">215%</div>
                    <div className="text-green-200 text-sm">
                      {locale === 'es' ? 'Crecimiento en reservas' : 'Growth in bookings'}
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <Link
                    href={`/${locale}/demo`}
                    className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-semibold rounded-xl hover:bg-green-50 transition-all duration-300 transform hover:scale-105 shadow-xl"
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
                    src="/images/success-stories/oh!mexico.webp"
                    alt="Oh! Mexico - Authentic Mexican Restaurant Success"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  
                  {/* Floating Stats */}
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                    <div className="text-green-600 font-bold text-lg">+$42K</div>
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
            <div className="w-24 h-1 bg-green-500 mx-auto rounded-full"></div>
          </div>

          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="text-xl leading-relaxed mb-8">
              {locale === 'es' 
                ? 'Oh! Mexico, un restaurante mexicano familiar con recetas auténticas, enfrentaba dificultades para competir con cadenas de comida mexicana más grandes. Necesitaban destacar su autenticidad y atraer a comensales que buscaban experiencias culinarias genuinas.'
                : 'Oh! Mexico, a family-owned Mexican restaurant with authentic recipes, faced challenges competing against larger Mexican food chains. They needed to highlight their authenticity and attract diners seeking genuine culinary experiences.'
              }
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
                <h3 className="text-lg font-semibold text-red-800 mb-3">
                  {locale === 'es' ? 'Competencia de Cadenas' : 'Chain Competition'}
                </h3>
                <p className="text-red-700">
                  {locale === 'es' 
                    ? 'Cadenas con mayor presupuesto de marketing y reconocimiento de marca.'
                    : 'Chains with larger marketing budgets and brand recognition.'
                  }
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
                <h3 className="text-lg font-semibold text-red-800 mb-3">
                  {locale === 'es' ? 'Visibilidad Digital Limitada' : 'Limited Digital Visibility'}
                </h3>
                <p className="text-red-700">
                  {locale === 'es' 
                    ? 'Presencia online mínima y dificultad para atraer nuevos clientes digitalmente.'
                    : 'Minimal online presence and difficulty attracting new customers digitally.'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              {locale === 'es' ? 'La Solución' : 'The Solution'}
            </h2>
            <div className="w-24 h-1 bg-green-500 mx-auto rounded-full"></div>
          </div>

          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="text-xl leading-relaxed mb-8">
              {locale === 'es' 
                ? 'RAY desarrolló una estrategia de marketing digital que destacó la autenticidad de Oh! Mexico, enfatizando sus recetas familiares tradicionales y experiencia gastronómica única. Implementamos SEO local, gestión de reseñas y un sistema moderno de reservas online.'
                : 'RAY developed a digital marketing strategy that highlighted Oh! Mexico\'s authenticity, emphasizing their traditional family recipes and unique dining experience. We implemented local SEO, review management, and a modern online booking system.'
              }
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white border border-green-200 p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {locale === 'es' ? 'SEO Local Auténtico' : 'Authentic Local SEO'}
                </h3>
                <p className="text-gray-600">
                  {locale === 'es' 
                    ? 'Optimización para "comida mexicana auténtica" y "restaurante familiar mexicano".'
                    : 'Optimization for "authentic Mexican food" and "family-owned Mexican restaurant".'
                  }
                </p>
              </div>

              <div className="bg-white border border-green-200 p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {locale === 'es' ? 'Gestión de Reseñas' : 'Review Management'}
                </h3>
                <p className="text-gray-600">
                  {locale === 'es' 
                    ? 'Sistema automatizado para solicitar y gestionar reseñas de clientes satisfechos.'
                    : 'Automated system to request and manage reviews from satisfied customers.'
                  }
                </p>
              </div>

              <div className="bg-white border border-green-200 p-6 rounded-xl shadow-xl">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {locale === 'es' ? 'Reservas Online' : 'Online Bookings'}
                </h3>
                <p className="text-gray-600">
                  {locale === 'es' 
                    ? 'Plataforma moderna de reservas integrada con Google y redes sociales.'
                    : 'Modern booking platform integrated with Google and social media.'
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
            <div className="w-24 h-1 bg-green-500 mx-auto rounded-full"></div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6 bg-green-50 rounded-2xl">
              <div className="text-xl sm:text-2xl font-bold text-green-600 mb-2">+$42K</div>
              <div className="text-gray-600">
                {locale === 'es' ? 'Ingresos mensuales adicionales' : 'Additional monthly revenue'}
              </div>
            </div>

            <div className="text-center p-6 bg-green-50 rounded-2xl">
              <div className="text-xl sm:text-2xl font-bold text-green-600 mb-2">215%</div>
              <div className="text-gray-600">
                {locale === 'es' ? 'Crecimiento en reservas' : 'Growth in bookings'}
              </div>
            </div>

            <div className="text-center p-6 bg-green-50 rounded-2xl">
              <div className="text-xl sm:text-2xl font-bold text-green-600 mb-2">168%</div>
              <div className="text-gray-600">
                {locale === 'es' ? 'Aumento en búsquedas Google' : 'Increase in Google searches'}
              </div>
            </div>

            <div className="text-center p-6 bg-green-50 rounded-2xl">
              <div className="text-xl sm:text-2xl font-bold text-green-600 mb-2">4.8★</div>
              <div className="text-gray-600">
                {locale === 'es' ? 'Calificación promedio Google' : 'Average Google rating'}
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="bg-gray-50 rounded-2xl p-8 text-center">
            <blockquote className="text-2xl font-medium text-gray-900 mb-6 italic">
              "{locale === 'es' 
                ? 'RAY nos ayudó a destacar nuestra autenticidad mexicana en un mercado saturado. Ahora atraemos a clientes que realmente aprecian la comida casera y tradicional que ofrecemos. Nuestras reservas nunca habían sido tan altas.'
                : 'RAY helped us stand out for our Mexican authenticity in a saturated market. Now we attract customers who truly appreciate the homemade, traditional food we offer. Our bookings have never been higher.'
              }"
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">OM</span>
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">Oh! Mexico</div>
                <div className="text-gray-600">
                  {locale === 'es' ? 'Restaurante Mexicano Auténtico' : 'Authentic Mexican Restaurant'}
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

export default OhMexicoCaseStudy

