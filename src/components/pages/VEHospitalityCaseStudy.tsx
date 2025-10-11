'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowLeft, TrendingUp, MapPin, Eye, Award } from 'lucide-react'
import Image from 'next/image'
import CTASection from '../CTASection'
import { type Locale } from '@/lib/i18n'

interface VEHospitalityCaseStudyProps {
  locale: Locale
}

const VEHospitalityCaseStudy: React.FC<VEHospitalityCaseStudyProps> = ({ locale }) => {
  return (
    <>

      {/* AI-friendly page summary and metrics box */}
      <div className="sr-only">
        <h1>V&E Hospitality Case Study - Restaurant Group Success with RAY Platform</h1>
        <p>See how V&E Hospitality Group increased revenue across multiple restaurant locations using RAY's comprehensive marketing platform.</p>
      </div>

      {/* Hero Section - V&E Hospitality Brand Style */}
      <section className="relative min-h-screen bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 text-white overflow-hidden">
        {/* Background Elements - Professional, Modern, Growth-oriented */}
        <div className="absolute inset-0">
          {/* Gradient overlays inspired by V&E's professional aesthetic */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-600 opacity-90"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(16,185,129,0.3),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(6,182,212,0.2),transparent_50%)]"></div>
          
          {/* Professional texture pattern */}
          <div className={`absolute inset-0 opacity-10 bg-[url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Crect x='0' y='0' width='30' height='30'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")]`}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
          <div className="w-full">
            {/* Breadcrumb */}
            <div className="mb-12">
              <Link 
                href={`/${locale}/case-studies`} 
                className="inline-flex items-center text-emerald-200 hover:text-white transition-colors duration-300 text-sm font-medium"
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
                    <span className="block">V&E Hospitality</span>
                    <span className="block text-emerald-200">Group Success</span>
                  </h1>
                  
                  <p className="text-xl text-emerald-100 leading-relaxed max-w-2xl">
                    {locale === 'es' 
                      ? 'Descubre cómo V&E Hospitality Group transformó múltiples ubicaciones de restaurantes usando la plataforma integral de marketing de RAY.'
                      : 'Discover how V&E Hospitality Group transformed multiple restaurant locations using RAY\'s comprehensive marketing platform.'
                    }
                  </p>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="text-3xl font-bold text-white mb-2">+$45,000</div>
                    <div className="text-emerald-200 text-sm">
                      {locale === 'es' ? 'Ingresos mensuales adicionales' : 'Additional monthly revenue'}
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="text-3xl font-bold text-white mb-2">180%</div>
                    <div className="text-emerald-200 text-sm">
                      {locale === 'es' ? 'Crecimiento en reservas' : 'Growth in bookings'}
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <Link
                    href={`/${locale}/demo`}
                    className="inline-flex items-center px-8 py-4 bg-white text-emerald-600 font-semibold rounded-xl hover:bg-emerald-50 transition-all duration-300 transform hover:scale-105 shadow-xl"
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
                    src="/images/success-stories/Restaurant-photo-ray.jpeg"
                    alt="V&E Hospitality Group - Restaurant Success"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  
                  {/* Floating Stats */}
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                    <div className="text-emerald-600 font-bold text-lg">+$45K</div>
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
                ? 'V&E Hospitality Group manejaba múltiples conceptos de restaurantes pero luchaba por mantener consistencia en su presencia digital y marketing. Cada ubicación operaba de manera independiente, resultando en estrategias de marketing fragmentadas y falta de visibilidad online coordinada.'
                : 'V&E Hospitality Group managed multiple restaurant concepts but struggled to maintain consistency in their digital presence and marketing. Each location operated independently, resulting in fragmented marketing strategies and lack of coordinated online visibility.'
              }
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
                <h3 className="text-lg font-semibold text-red-800 mb-3">
                  {locale === 'es' ? 'Marketing Fragmentado' : 'Fragmented Marketing'}
                </h3>
                <p className="text-red-700">
                  {locale === 'es' 
                    ? 'Cada restaurante manejaba su marketing por separado sin coordinación central.'
                    : 'Each restaurant handled its marketing separately without central coordination.'
                  }
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
                <h3 className="text-lg font-semibold text-red-800 mb-3">
                  {locale === 'es' ? 'Visibilidad Inconsistente' : 'Inconsistent Visibility'}
                </h3>
                <p className="text-red-700">
                  {locale === 'es' 
                    ? 'Presencia online irregular entre las diferentes ubicaciones del grupo.'
                    : 'Irregular online presence across the group\'s different locations.'
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
                ? 'RAY proporcionó una plataforma unificada que permitió a V&E Hospitality Group gestionar todas sus ubicaciones desde un dashboard central, implementando estrategias de marketing consistentes y midiendo resultados en tiempo real.'
                : 'RAY provided a unified platform that allowed V&E Hospitality Group to manage all their locations from a central dashboard, implementing consistent marketing strategies and measuring results in real-time.'
              }
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white border border-emerald-200 p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {locale === 'es' ? 'Dashboard Central' : 'Central Dashboard'}
                </h3>
                <p className="text-gray-600">
                  {locale === 'es' 
                    ? 'Gestión unificada de todas las ubicaciones desde una sola plataforma.'
                    : 'Unified management of all locations from a single platform.'
                  }
                </p>
              </div>

              <div className="bg-white border border-emerald-200 p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {locale === 'es' ? 'Marketing Automatizado' : 'Automated Marketing'}
                </h3>
                <p className="text-gray-600">
                  {locale === 'es' 
                    ? 'Campañas coordinadas y automatizadas para todas las ubicaciones.'
                    : 'Coordinated and automated campaigns for all locations.'
                  }
                </p>
              </div>

              <div className="bg-white border border-emerald-200 p-6 rounded-xl shadow-xl">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {locale === 'es' ? 'Analytics en Tiempo Real' : 'Real-time Analytics'}
                </h3>
                <p className="text-gray-600">
                  {locale === 'es' 
                    ? 'Seguimiento de rendimiento y ROI para cada ubicación.'
                    : 'Performance tracking and ROI for each location.'
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
              <div className="text-xl sm:text-2xl font-bold text-emerald-600 mb-2">+$45K</div>
              <div className="text-gray-600">
                {locale === 'es' ? 'Ingresos mensuales adicionales' : 'Additional monthly revenue'}
              </div>
            </div>

            <div className="text-center p-6 bg-emerald-50 rounded-2xl">
              <div className="text-xl sm:text-2xl font-bold text-emerald-600 mb-2">180%</div>
              <div className="text-gray-600">
                {locale === 'es' ? 'Crecimiento en reservas' : 'Growth in bookings'}
              </div>
            </div>

            <div className="text-center p-6 bg-emerald-50 rounded-2xl">
              <div className="text-xl sm:text-2xl font-bold text-emerald-600 mb-2">95%</div>
              <div className="text-gray-600">
                {locale === 'es' ? 'Mejora en visibilidad local' : 'Improvement in local visibility'}
              </div>
            </div>

            <div className="text-center p-6 bg-emerald-50 rounded-2xl">
              <div className="text-xl sm:text-2xl font-bold text-emerald-600 mb-2">3x</div>
              <div className="text-gray-600">
                {locale === 'es' ? 'ROI en marketing' : 'Marketing ROI'}
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="bg-gray-50 rounded-2xl p-8 text-center">
            <blockquote className="text-2xl font-medium text-gray-900 mb-6 italic">
              "{locale === 'es' 
                ? 'RAY nos permitió unificar nuestro marketing y obtener resultados consistentes en todas nuestras ubicaciones. La plataforma es esencial para cualquier grupo de restaurantes que busque escalar.'
                : 'RAY allowed us to unify our marketing and achieve consistent results across all our locations. The platform is essential for any restaurant group looking to scale.'
              }"
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">VE</span>
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">V&E Hospitality Group</div>
                <div className="text-gray-600">
                  {locale === 'es' ? 'Grupo de Restaurantes' : 'Restaurant Group'}
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
