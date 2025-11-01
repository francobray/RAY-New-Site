'use client'

import React from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { ArrowLeft, TrendingUp, Star, Eye, Users, Award, MapPin } from 'lucide-react'
import Image from 'next/image'
import { type Locale } from '@/lib/i18n'

// Dynamically import CTASection to reduce initial bundle size
const CTASection = dynamic(() => import('../../shared/CTASection'), {
  ssr: true,
  loading: () => null,
})

interface LaParolacciaCaseStudyProps {
  locale: Locale
}

const LaParolacciaCaseStudy: React.FC<LaParolacciaCaseStudyProps> = ({ locale }) => {
  
  return (
    <>

      {/* AI-friendly page summary and metrics box */}
      <div className="sr-only">
        <h1>{locale === 'es' ? 'Caso de Estudio La Parolaccia - 198% de Crecimiento en Visibilidad Google Maps' : 'La Parolaccia Case Study - 198% Growth in Google Maps Visibility'}</h1>
        <p>{locale === 'es' ? 'Ve cómo La Parolaccia logró un aumento del 198% en visibilidad en Google Maps y 127% de crecimiento en reservas con la plataforma de RAY.' : 'See how La Parolaccia achieved 198% increase in Google Maps visibility and 127% growth in reservations with RAY\'s platform.'}</p>
      </div>

      {/* Hero Section - La Parolaccia Brand Style */}
      <section className="relative min-h-screen bg-gradient-to-br from-green-900 via-emerald-900 to-green-900 text-white overflow-hidden">
        {/* Background Elements - Authentic Italian, Rustic, Warm */}
        <div className="absolute inset-0">
          {/* Gradient overlays inspired by authentic Italian trattoria */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-teal-900 to-green-900"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(52,211,153,0.15),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(16,185,129,0.1),transparent_50%)]"></div>
          
          {/* Subtle texture pattern */}
          <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%2523ffffff%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%227%22 cy=%227%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Column - Content */}
              <div className="space-y-8">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 backdrop-blur-sm rounded-full border border-emerald-500/30">
                  <Award className="w-4 h-4 mr-2 text-emerald-400" />
                  <span className="text-emerald-400 text-sm font-bold uppercase tracking-wider">{locale === 'es' ? 'Historia de Éxito' : 'Success Story'}</span>
                </div>
                
                <div className="space-y-6">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[0.9] tracking-tight">
                    {locale === 'es' ? 'La Parolaccia Aumenta' : 'La Parolaccia Increases'}{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500">
                      {locale === 'es' ? 'Visibilidad Google Maps en 198%' : 'Google Maps Visibility by 198%'}
                    </span>{' '}
                    {locale === 'es' ? 'y' : 'and'}{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-400">
                      {locale === 'es' ? 'Reservas en 127%' : 'Reservations by 127%'}
                    </span>
                  </h1>
                  
                  <p className="text-xl text-green-100 leading-relaxed font-light">
                    {locale === 'es'
                      ? 'Usando las herramientas de SEO Local y reservas de RAY, La Parolaccia se convirtió en el restaurante italiano preferido de su vecindario, dominando búsquedas locales y llenando mesas cada noche.'
                      : 'Using RAY\'s Local SEO and booking tools, La Parolaccia became the go-to Italian restaurant in their neighborhood, dominating local search and filling tables every night.'
                    }
                  </p>
                </div>

                {/* KPI Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 backdrop-blur-sm rounded-2xl p-6 border border-emerald-500/20">
                    <div className="flex items-center justify-center mb-3">
                      <Eye className="w-8 h-8 text-emerald-400" />
                    </div>
                    <div className="text-3xl font-black text-emerald-400 mb-1">+198%</div>
                    <div className="text-green-100 text-sm font-medium">{locale === 'es' ? 'Visibilidad Google Maps' : 'Google Maps Visibility'}</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-yellow-500/10 to-amber-500/10 backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/20">
                    <div className="flex items-center justify-center mb-3">
                      <Users className="w-8 h-8 text-yellow-400" />
                    </div>
                    <div className="text-3xl font-black text-yellow-400 mb-1">+127%</div>
                    <div className="text-green-100 text-sm font-medium">{locale === 'es' ? 'Reservas' : 'Reservations'}</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 backdrop-blur-sm rounded-2xl p-6 border border-emerald-500/20">
                    <div className="flex items-center justify-center mb-3">
                      <Star className="w-8 h-8 text-emerald-400 fill-current" />
                    </div>
                    <div className="text-3xl font-black text-emerald-400 mb-1">4.7★</div>
                    <div className="text-green-100 text-sm font-medium">{locale === 'es' ? 'Calificación Google' : 'Google Rating'}</div>
                  </div>
                </div>
              </div>

              {/* Right Column - Visual Element */}
              <div className="relative">
                <div className="relative">
                  {/* Glow effect */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-emerald-500/20 rounded-3xl blur-2xl"></div>
                  
                  {/* Main visual container */}
                  <div className="relative bg-gradient-to-br from-green-950 to-emerald-900 rounded-3xl p-8 border border-emerald-800">
                    <div className="text-center space-y-6">
                      <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                        198%
                      </div>
                      <div className="text-xl text-green-100 font-medium">
                        {locale === 'es' ? 'Más Vistas en Google Maps' : 'More Google Maps Views'}
                      </div>
                      <div className="text-sm text-green-300">
                        {locale === 'es' ? 'Dominando búsquedas de cocina italiana local' : 'Dominating local Italian cuisine searches'}
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
          <div className="w-6 h-10 border-2 border-emerald-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-emerald-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Team Image Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/images/success-stories/parolaccia.webp"
              alt="La Parolaccia celebrating record reservations and local visibility"
              width={1200}
              height={600}
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8">
              <p className="text-white text-lg font-medium">
                {locale === 'es' ? 'La Parolaccia – convirtiéndose en el destino italiano favorito del vecindario' : 'La Parolaccia – becoming the neighborhood\'s favorite Italian destination'}
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
                    ? 'La Parolaccia se estaba perdiendo en búsquedas competitivas de restaurantes italianos locales.'
                    : 'La Parolaccia was getting lost in competitive local Italian restaurant searches.'
                  }
                </p>
                
                <p className="font-medium text-white">
                  {locale === 'es' ? 'La auditoría de RAY reveló:' : 'RAY\'s audit revealed:'}
                </p>
                
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>{locale === 'es' ? 'Posicionado en' : 'Ranking'} <strong className="text-red-400">#12</strong> {locale === 'es' ? 'para búsquedas de "restaurante italiano" en su área' : 'for "Italian restaurant" searches in their area'}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>{locale === 'es' ? 'Perfil de Negocio de Google desactualizado con información incompleta' : 'Outdated Google Business Profile with incomplete information'}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>{locale === 'es' ? 'El objetivo era convertirse en el' : 'The goal was to become the'} <strong className="text-green-400">{locale === 'es' ? 'mejor restaurante italiano' : 'top Italian restaurant'}</strong> {locale === 'es' ? 'en búsqueda local' : 'in local search'}</span>
                  </li>
                </ul>
              </div>

              {/* Challenge Visual */}
              <div className="mt-8 p-6 bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-2xl border border-red-500/20">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-red-400 font-medium mb-1">{locale === 'es' ? 'Posicionamiento Búsqueda Local' : 'Local Search Ranking'}</div>
                    <div className="text-4xl font-black text-red-400">#12</div>
                    <div className="text-sm text-gray-400">{locale === 'es' ? 'búsquedas restaurante italiano' : 'Italian restaurant searches'}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-red-400 font-medium mb-1">{locale === 'es' ? 'Estado del Perfil' : 'Profile Status'}</div>
                    <div className="text-4xl font-black text-red-400">{locale === 'es' ? 'Desactualizado' : 'Outdated'}</div>
                    <div className="text-sm text-gray-400">{locale === 'es' ? 'Falta info clave' : 'Missing key info'}</div>
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
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-8 h-8 text-white font-bold" />
                </div>
                <h3 className="text-xl font-black text-white mb-4">
                  {locale === 'es' ? 'Dominación SEO Local' : 'Local SEO Domination'}
                </h3>
                <p className="text-gray-300">
                  {locale === 'es' ? 'Perfil de Negocio de Google completamente optimizado con keywords de cocina italiana' : 'Completely optimized Google Business Profile with Italian cuisine keywords'}
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-black font-bold" />
                </div>
                <h3 className="text-xl font-black text-white mb-4">
                  {locale === 'es' ? 'Sistema de Reservas Inteligente' : 'Smart Booking System'}
                </h3>
                <p className="text-gray-300">
                  {locale === 'es' ? 'Implementamos reservas online sin fricciones con confirmaciones automáticas' : 'Implemented seamless online booking with automated confirmations'}
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Star className="w-8 h-8 text-white font-bold" />
                </div>
                <h3 className="text-xl font-black text-white mb-4">
                  {locale === 'es' ? 'Generación de Reseñas' : 'Review Generation'}
                </h3>
                <p className="text-gray-300">
                  {locale === 'es' ? 'Solicitudes de reseñas automatizadas para construir prueba social fuerte y calificaciones' : 'Automated review requests to build strong social proof and ratings'}
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
                    ? '"¡RAY nos ayudó a convertirnos en el restaurante italiano preferido de nuestro vecindario! Nuestra visibilidad en Google Maps aumentó en '
                    : '"RAY helped us become the go-to Italian restaurant in our neighborhood! Our Google Maps visibility increased by '
                  }
                  <span className="text-emerald-400 font-black">198%</span>, 
                  {locale === 'es'
                    ? ' y las reservas crecieron en '
                    : ' and reservations grew by '
                  }
                  <span className="text-yellow-400 font-black">127%</span>. 
                  {locale === 'es'
                    ? ' Ahora estamos completamente reservados la mayoría de las noches y atrayendo clientes que buscan específicamente cocina italiana auténtica. ¡Esto ha transformado nuestro negocio!"'
                    : ' We\'re now fully booked most nights and attracting customers who are specifically searching for authentic Italian cuisine. This has transformed our business!"'
                  }
                </blockquote>
                
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <div className="font-black text-white text-lg">
                      {locale === 'es' ? 'Gestión del Restaurante' : 'Restaurant Management'}
                    </div>
                    <div className="text-gray-400">
                      La Parolaccia
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
              <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 backdrop-blur-sm rounded-3xl p-6 border border-emerald-500/20 text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center">
                    <Eye className="w-6 h-6 text-white font-bold" />
                  </div>
                </div>
                <div className="text-4xl font-black text-emerald-400 mb-2">198%</div>
                <div className="text-white font-medium mb-1">{locale === 'es' ? 'Aumento' : 'Increase'}</div>
                <div className="text-sm text-gray-400">{locale === 'es' ? 'en vistas Google Maps' : 'in Google Maps views'}</div>
              </div>

              <div className="bg-gradient-to-br from-yellow-500/10 to-amber-500/10 backdrop-blur-sm rounded-3xl p-6 border border-yellow-500/20 text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-amber-500 rounded-2xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-black font-bold" />
                  </div>
                </div>
                <div className="text-4xl font-black text-yellow-400 mb-2">127%</div>
                <div className="text-white font-medium mb-1">{locale === 'es' ? 'Crecimiento' : 'Growth'}</div>
                <div className="text-sm text-gray-400">{locale === 'es' ? 'en reservas' : 'in reservations'}</div>
              </div>

              <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 backdrop-blur-sm rounded-3xl p-6 border border-emerald-500/20 text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center">
                    <Star className="w-6 h-6 text-white font-bold fill-current" />
                  </div>
                </div>
                <div className="text-4xl font-black text-emerald-400 mb-2">4.7★</div>
                <div className="text-white font-medium mb-1">{locale === 'es' ? 'Promedio' : 'Average'}</div>
                <div className="text-sm text-gray-400">{locale === 'es' ? 'calificación Google' : 'Google rating'}</div>
              </div>

              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-3xl p-6 border border-blue-500/20 text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white font-bold" />
                  </div>
                </div>
                <div className="text-4xl font-black text-blue-400 mb-2">#2</div>
                <div className="text-white font-medium mb-1">{locale === 'es' ? 'Posicionamiento' : 'Ranking'}</div>
                <div className="text-sm text-gray-400">{locale === 'es' ? 'restaurantes italianos' : 'Italian restaurants'}</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <CTASection locale={locale} />
    </>
  )
}

export default LaParolacciaCaseStudy

