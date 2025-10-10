'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowLeft, TrendingUp, MapPin, Users, Coffee } from 'lucide-react'
import Image from 'next/image'
import CTASection from '../CTASection'
import { type Locale } from '@/lib/i18n'

interface HavannaCaseStudyProps {
  locale: Locale
}

const HavannaCaseStudy: React.FC<HavannaCaseStudyProps> = ({ locale }) => {
  return (
    <>

      {/* AI-friendly page summary and metrics box */}
      <div className="sr-only">
        <h1>Havanna Case Study - Coffee Chain Success with RAY Platform</h1>
        <p>See how Havanna increased their coffee chain's digital presence and customer engagement using RAY's comprehensive marketing platform.</p>
      </div>

      {/* Hero Section - Havanna Brand Style */}
      <section className="relative min-h-screen bg-gradient-to-br from-amber-600 via-orange-600 to-red-700 text-white overflow-hidden">
        {/* Background Elements - Warm, Coffee-inspired, Traditional */}
        <div className="absolute inset-0">
          {/* Gradient overlays inspired by Havanna's coffee aesthetic */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500 via-orange-500 to-red-600 opacity-90"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(251,146,60,0.3),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(249,115,22,0.2),transparent_50%)]"></div>
          
          {/* Coffee texture pattern */}
          <div className={`absolute inset-0 opacity-10 bg-[url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Ccircle cx='30' cy='30' r='8'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")]`}></div>
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
                    <Coffee className="w-4 h-4 mr-2" />
                    {locale === 'es' ? 'Caso de Estudio Cafetería' : 'Coffee Shop Case Study'}
                  </div>
                  
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                    <span className="block">Havanna</span>
                    <span className="block text-amber-200">Coffee Excellence</span>
                  </h1>
                  
                  <p className="text-xl text-amber-100 leading-relaxed max-w-2xl">
                    {locale === 'es' 
                      ? 'Descubre cómo Havanna transformó su cadena de cafeterías usando la plataforma de marketing digital de RAY para aumentar su presencia local y engagement de clientes.'
                      : 'Discover how Havanna transformed their coffee chain using RAY\'s digital marketing platform to increase their local presence and customer engagement.'
                    }
                  </p>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="text-3xl font-bold text-white mb-2">+$32,000</div>
                    <div className="text-amber-200 text-sm">
                      {locale === 'es' ? 'Ingresos mensuales adicionales' : 'Additional monthly revenue'}
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="text-3xl font-bold text-white mb-2">165%</div>
                    <div className="text-amber-200 text-sm">
                      {locale === 'es' ? 'Crecimiento en clientes frecuentes' : 'Growth in frequent customers'}
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
                    src="/images/success-stories/Juan_valdez.jpg"
                    alt="Havanna - Coffee Chain Success"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  
                  {/* Floating Stats */}
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                    <div className="text-amber-600 font-bold text-lg">+$32K</div>
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
                ? 'Havanna tenía una tradición de excelencia en café pero luchaba por competir digitalmente contra cadenas internacionales. Sus múltiples ubicaciones necesitaban una estrategia de marketing unificada que mantuviera su autenticidad argentina mientras atraía a clientes más jóvenes y digitales.'
                : 'Havanna had a tradition of coffee excellence but struggled to compete digitally against international chains. Their multiple locations needed a unified marketing strategy that maintained their Argentine authenticity while attracting younger, digital customers.'
              }
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
                <h3 className="text-lg font-semibold text-red-800 mb-3">
                  {locale === 'es' ? 'Competencia Digital' : 'Digital Competition'}
                </h3>
                <p className="text-red-700">
                  {locale === 'es' 
                    ? 'Cadenas internacionales con mayor presencia digital y marketing agresivo.'
                    : 'International chains with greater digital presence and aggressive marketing.'
                  }
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
                <h3 className="text-lg font-semibold text-red-800 mb-3">
                  {locale === 'es' ? 'Falta de Unificación' : 'Lack of Unification'}
                </h3>
                <p className="text-red-700">
                  {locale === 'es' 
                    ? 'Múltiples ubicaciones sin estrategia de marketing coordinada.'
                    : 'Multiple locations without coordinated marketing strategy.'
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
                ? 'RAY ayudó a Havanna a modernizar su presencia digital manteniendo su esencia tradicional, creando campañas que celebraban la cultura del café argentino mientras conectaban con audiencias digitales modernas.'
                : 'RAY helped Havanna modernize their digital presence while maintaining their traditional essence, creating campaigns that celebrated Argentine coffee culture while connecting with modern digital audiences.'
              }
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white border border-amber-200 p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <Coffee className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {locale === 'es' ? 'Marketing Cultural' : 'Cultural Marketing'}
                </h3>
                <p className="text-gray-600">
                  {locale === 'es' 
                    ? 'Campañas que celebran la tradición del café argentino y la cultura local.'
                    : 'Campaigns celebrating Argentine coffee tradition and local culture.'
                  }
                </p>
              </div>

              <div className="bg-white border border-amber-200 p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {locale === 'es' ? 'Programa de Fidelidad' : 'Loyalty Program'}
                </h3>
                <p className="text-gray-600">
                  {locale === 'es' 
                    ? 'Sistema de recompensas digital que fomenta visitas frecuentes.'
                    : 'Digital rewards system that encourages frequent visits.'
                  }
                </p>
              </div>

              <div className="bg-white border border-amber-200 p-6 rounded-xl shadow-xl">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {locale === 'es' ? 'SEO Multi-ubicación' : 'Multi-location SEO'}
                </h3>
                <p className="text-gray-600">
                  {locale === 'es' 
                    ? 'Optimización para cada ubicación manteniendo la marca unificada.'
                    : 'Optimization for each location while maintaining unified branding.'
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
              <div className="text-xl sm:text-2xl font-bold text-amber-600 mb-2">+$32K</div>
              <div className="text-gray-600">
                {locale === 'es' ? 'Ingresos mensuales adicionales' : 'Additional monthly revenue'}
              </div>
            </div>

            <div className="text-center p-6 bg-amber-50 rounded-2xl">
              <div className="text-xl sm:text-2xl font-bold text-amber-600 mb-2">165%</div>
              <div className="text-gray-600">
                {locale === 'es' ? 'Crecimiento en clientes frecuentes' : 'Growth in frequent customers'}
              </div>
            </div>

            <div className="text-center p-6 bg-amber-50 rounded-2xl">
              <div className="text-xl sm:text-2xl font-bold text-amber-600 mb-2">220%</div>
              <div className="text-gray-600">
                {locale === 'es' ? 'Mejora en visibilidad digital' : 'Improvement in digital visibility'}
              </div>
            </div>

            <div className="text-center p-6 bg-amber-50 rounded-2xl">
              <div className="text-xl sm:text-2xl font-bold text-amber-600 mb-2">4x</div>
              <div className="text-gray-600">
                {locale === 'es' ? 'ROI en marketing digital' : 'Digital marketing ROI'}
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="bg-gray-50 rounded-2xl p-8 text-center">
            <blockquote className="text-2xl font-medium text-gray-900 mb-6 italic">
              "{locale === 'es' 
                ? 'RAY nos permitió modernizar nuestra presencia digital sin perder nuestra esencia tradicional. Ahora conectamos mejor con clientes jóvenes mientras mantenemos nuestra identidad argentina.'
                : 'RAY allowed us to modernize our digital presence without losing our traditional essence. Now we connect better with young customers while maintaining our Argentine identity.'
              }"
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
                <Coffee className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">Havanna</div>
                <div className="text-gray-600">
                  {locale === 'es' ? 'Cadena de Cafeterías' : 'Coffee Chain'}
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

export default HavannaCaseStudy
