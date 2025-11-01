'use client'

import React from 'react'
import dynamic from 'next/dynamic'
// Dynamically import CTASection to reduce initial bundle size
const CTASection = dynamic(() => import('../../shared/CTASection'), {
  ssr: true,
  loading: () => null,
})
import Link from 'next/link'
import { ArrowLeft, TrendingUp, Star, Users, Award, MapPin, Eye } from 'lucide-react'
import Image from 'next/image'
import { type Locale } from '@/lib/i18n'

interface LibertinoCafeCaseStudyProps {
  locale: Locale
}

const LibertinoCafeCaseStudy: React.FC<LibertinoCafeCaseStudyProps> = ({ locale }) => {
  
  return (
    <>

      {/* AI-friendly page summary and metrics box */}
      <div className="sr-only">
        <h1>{locale === 'es' ? 'Caso de Estudio Libertino Cafe - 276% de Crecimiento en Tráfico Matutino' : 'Libertino Cafe Case Study - 276% Growth in Morning Traffic'}</h1>
        <p>{locale === 'es' ? 'Ve cómo Libertino Cafe logró un aumento del 276% en tráfico matutino y 145% de crecimiento en miembros de lealtad con la plataforma de RAY.' : 'See how Libertino Cafe achieved 276% increase in morning traffic and 145% growth in loyalty members with RAY\'s platform.'}</p>
      </div>

      {/* Hero Section - Libertino Cafe Brand Style */}
      <section className="relative min-h-screen bg-gradient-to-br from-amber-900 via-yellow-900 to-amber-900 text-white overflow-hidden">
        {/* Background Elements - Cozy Cafe, Morning Warmth */}
        <div className="absolute inset-0">
          {/* Gradient overlays inspired by warm coffee shop aesthetic */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900 via-orange-900 to-amber-900"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(251,191,36,0.15),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(245,158,11,0.1),transparent_50%)]"></div>
          
          {/* Subtle texture pattern */}
          <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%2523ffffff%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%227%22 cy=%227%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Column - Content */}
              <div className="space-y-8">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 backdrop-blur-sm rounded-full border border-amber-500/30">
                  <Award className="w-4 h-4 mr-2 text-amber-400" />
                  <span className="text-amber-400 text-sm font-bold uppercase tracking-wider">{locale === 'es' ? 'Historia de Éxito' : 'Success Story'}</span>
                </div>
                
                <div className="space-y-6">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[0.9] tracking-tight">
                    {locale === 'es' ? 'Libertino Cafe Aumenta' : 'Libertino Cafe Increases'}{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500">
                      {locale === 'es' ? 'Tráfico Matutino en 276%' : 'Morning Traffic by 276%'}
                    </span>{' '}
                    {locale === 'es' ? 'y' : 'and'}{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                      {locale === 'es' ? 'Miembros de Lealtad en 145%' : 'Loyalty Members by 145%'}
                    </span>
                  </h1>
                  
                  <p className="text-xl text-amber-100 leading-relaxed font-light">
                    {locale === 'es'
                      ? 'Usando el programa de lealtad y herramientas de SEO local de RAY, Libertino Cafe se convirtió en el spot de café favorito del vecindario y construyó una próspera comunidad de clientes regulares.'
                      : 'Using RAY\'s loyalty program and local SEO tools, Libertino Cafe became the neighborhood\'s favorite coffee spot and built a thriving community of regular customers.'
                    }
                  </p>
                </div>

                {/* KPI Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-amber-500/10 to-yellow-500/10 backdrop-blur-sm rounded-2xl p-6 border border-amber-500/20">
                    <div className="flex items-center justify-center mb-3">
                      <Users className="w-8 h-8 text-amber-400" />
                    </div>
                    <div className="text-3xl font-black text-amber-400 mb-1">+276%</div>
                    <div className="text-amber-100 text-sm font-medium">{locale === 'es' ? 'Tráfico Matutino' : 'Morning Traffic'}</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-2xl p-6 border border-green-500/20">
                    <div className="flex items-center justify-center mb-3">
                      <TrendingUp className="w-8 h-8 text-green-400" />
                    </div>
                    <div className="text-3xl font-black text-green-400 mb-1">+145%</div>
                    <div className="text-amber-100 text-sm font-medium">{locale === 'es' ? 'Miembros de Lealtad' : 'Loyalty Members'}</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-amber-500/10 to-yellow-500/10 backdrop-blur-sm rounded-2xl p-6 border border-amber-500/20">
                    <div className="flex items-center justify-center mb-3">
                      <Star className="w-8 h-8 text-amber-400 fill-current" />
                    </div>
                    <div className="text-3xl font-black text-amber-400 mb-1">4.9★</div>
                    <div className="text-amber-100 text-sm font-medium">{locale === 'es' ? 'Calificación Google' : 'Google Rating'}</div>
                  </div>
                </div>
              </div>

              {/* Right Column - Visual Element */}
              <div className="relative">
                <div className="relative">
                  {/* Glow effect */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 via-yellow-500/20 to-amber-500/20 rounded-3xl blur-2xl"></div>
                  
                  {/* Main visual container */}
                  <div className="relative bg-gradient-to-br from-amber-950 to-yellow-900 rounded-3xl p-8 border border-amber-800">
                    <div className="text-center space-y-6">
                      <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">
                        276%
                      </div>
                      <div className="text-xl text-amber-100 font-medium">
                        {locale === 'es' ? 'Más Clientes Matutinos' : 'More Morning Customers'}
                      </div>
                      <div className="text-sm text-amber-300">
                        {locale === 'es' ? 'Construyendo comunidad a través del café' : 'Building community through coffee'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-amber-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-amber-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Team Image Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/images/success-stories/Libertino_Cafe.webp"
              alt="Libertino Cafe team serving morning customers"
              width={1200}
              height={600}
              className="w-full h-[400px] md:h-[500px] object-cover"
              sizes="(max-width: 768px) 100vw, 1200px"
              priority
              quality={85}
              placeholder="blur"
              blurDataURL="data:image/webp;base64,UklGRh4AAABXRUJQVlA4IBIAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA="
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8">
              <p className="text-white text-lg font-medium">
                {locale === 'es' ? 'Libertino Cafe – construyendo comunidad una taza a la vez' : 'Libertino Cafe – building community one cup at a time'}
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* The Challenge */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
                {locale === 'es' ? 'El Desafío' : 'The Challenge'}
              </h2>
            </div>

            <div className="bg-gradient-to-br from-black to-gray-900 rounded-3xl p-8 md:p-12 border border-gray-800">
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p className="text-xl font-medium text-white">
                  {locale === 'es'
                    ? 'Libertino Cafe luchaba con tráfico matutino inconsistente y retención de clientes.'
                    : 'Libertino Cafe struggled with inconsistent morning traffic and customer retention.'
                  }
                </p>
                
                <p className="font-medium text-white">
                  {locale === 'es' ? 'La auditoría de RAY reveló:' : 'RAY\'s audit revealed:'}
                </p>
                
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>{locale === 'es' ? 'La hora pico matutina era impredecible con' : 'Morning rush hour was unpredictable with'} <strong className="text-red-400">{locale === 'es' ? '40% de asientos vacíos' : '40% empty seats'}</strong></span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>{locale === 'es' ? 'Sin programa de lealtad para incentivar visitas repetidas' : 'No loyalty program to incentivize repeat visits'}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>{locale === 'es' ? 'El objetivo era convertirse en el' : 'The goal was to become the'} <strong className="text-green-400">{locale === 'es' ? 'spot matutino preferido' : 'go-to morning spot'}</strong> {locale === 'es' ? 'con tráfico consistente' : 'with consistent traffic'}</span>
                  </li>
                </ul>
              </div>

              {/* Challenge Visual */}
              <div className="mt-8 p-6 bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-2xl border border-red-500/20">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-red-400 font-medium mb-1">{locale === 'es' ? 'Ocupación Matutina' : 'Morning Occupancy'}</div>
                    <div className="text-4xl font-black text-red-400">60%</div>
                    <div className="text-sm text-gray-400">{locale === 'es' ? 'Tráfico inconsistente' : 'Inconsistent traffic'}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-red-400 font-medium mb-1">{locale === 'es' ? 'Programa de Loyalty' : 'Loyalty Program'}</div>
                    <div className="text-4xl font-black text-red-400">{locale === 'es' ? 'Ninguno' : 'None'}</div>
                    <div className="text-sm text-gray-400">{locale === 'es' ? 'Sin incentivos de repetición' : 'No repeat incentives'}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
                {locale === 'es' ? 'La Solución' : 'The Solution'}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-black font-bold" />
                </div>
                <h3 className="text-xl font-black text-white mb-4">
                  {locale === 'es' ? 'Programa de Loyalty Inteligente' : 'Smart Loyalty Program'}
                </h3>
                <p className="text-gray-300">
                  {locale === 'es' ? 'Implementamos sistema de recompensas basado en puntos para impulsar visitas repetidas' : 'Implemented points-based rewards system to drive repeat visits'}
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-8 h-8 text-white font-bold" />
                </div>
                <h3 className="text-xl font-black text-white mb-4">
                  {locale === 'es' ? 'SEO Local de Café' : 'Local Coffee SEO'}
                </h3>
                <p className="text-gray-300">
                  {locale === 'es' ? 'Optimizado para búsquedas de "café cerca de mí" y desayuno' : 'Optimized for "coffee near me" and breakfast searches'}
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-white font-bold" />
                </div>
                <h3 className="text-xl font-black text-white mb-4">
                  {locale === 'es' ? 'Pedidos Móviles' : 'Mobile Ordering'}
                </h3>
                <p className="text-gray-300">
                  {locale === 'es' ? 'Pedidos por WhatsApp para commuters ocupados que piden por adelantado' : 'WhatsApp ordering for busy commuters to order ahead'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Results */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
              {locale === 'es' ? 'Los Resultados' : 'The Results'}
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Testimonial */}
            <div className="bg-gradient-to-br from-black to-gray-900 rounded-3xl p-8 md:p-12 mb-12 border border-gray-800">
              <div className="text-center">
                <blockquote className="text-2xl md:text-3xl text-white font-medium leading-relaxed mb-8">
                  {locale === 'es'
                    ? '"¡RAY transformó nuestro café en una institución del vecindario! Nuestro tráfico matutino aumentó en '
                    : '"RAY transformed our cafe into a neighborhood institution! Our morning traffic increased by '
                  }
                  <span className="text-amber-400 font-black">276%</span>, 
                  {locale === 'es'
                    ? ' y ahora tenemos '
                    : ' and we now have '
                  }
                  <span className="text-green-400 font-black">{locale === 'es' ? 'más de 1,200 miembros de lealtad' : 'over 1,200 loyalty members'}</span>. 
                  {locale === 'es'
                    ? ' La función de pedidos móviles es un cambio total para nuestros commuters matutinos ocupados. ¡Hemos construido una verdadera comunidad alrededor de nuestro café!"'
                    : ' The mobile ordering feature is a game-changer for our busy morning commuters. We\'ve built a real community around our coffee!"'
                  }
                </blockquote>
                
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <div className="font-black text-white text-lg">
                      {locale === 'es' ? 'Equipo de Gestión' : 'Management Team'}
                    </div>
                    <div className="text-gray-400">
                      Libertino Cafe
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Results */}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-black text-white mb-8">
                {locale === 'es' ? 'Métricas Clave' : 'Key Metrics'}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-amber-500/10 to-yellow-500/10 backdrop-blur-sm rounded-3xl p-6 border border-amber-500/20 text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-2xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-black font-bold" />
                  </div>
                </div>
                <div className="text-4xl font-black text-amber-400 mb-2">276%</div>
                <div className="text-white font-medium mb-1">{locale === 'es' ? 'Aumento' : 'Increase'}</div>
                <div className="text-sm text-gray-400">{locale === 'es' ? 'en tráfico matutino' : 'in morning traffic'}</div>
              </div>

              <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-3xl p-6 border border-green-500/20 text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white font-bold" />
                  </div>
                </div>
                <div className="text-4xl font-black text-green-400 mb-2">145%</div>
                <div className="text-white font-medium mb-1">{locale === 'es' ? 'Crecimiento' : 'Growth'}</div>
                <div className="text-sm text-gray-400">{locale === 'es' ? 'en miembros de lealtad' : 'in loyalty members'}</div>
              </div>

              <div className="bg-gradient-to-br from-amber-500/10 to-yellow-500/10 backdrop-blur-sm rounded-3xl p-6 border border-amber-500/20 text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-2xl flex items-center justify-center">
                    <Star className="w-6 h-6 text-black font-bold fill-current" />
                  </div>
                </div>
                <div className="text-4xl font-black text-amber-400 mb-2">4.9★</div>
                <div className="text-white font-medium mb-1">{locale === 'es' ? 'Promedio' : 'Average'}</div>
                <div className="text-sm text-gray-400">{locale === 'es' ? 'calificación Google' : 'Google rating'}</div>
              </div>

              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-3xl p-6 border border-blue-500/20 text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                    <Eye className="w-6 h-6 text-white font-bold" />
                  </div>
                </div>
                <div className="text-4xl font-black text-blue-400 mb-2">1.2K</div>
                <div className="text-white font-medium mb-1">{locale === 'es' ? 'Activos' : 'Active'}</div>
                <div className="text-sm text-gray-400">{locale === 'es' ? 'miembros de lealtad' : 'loyalty members'}</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <CTASection locale={locale} />
    </>
  )
}

export default LibertinoCafeCaseStudy

