'use client'

import React from 'react'
import dynamic from 'next/dynamic'
// Dynamically import CTASection to reduce initial bundle size
const CTASection = dynamic(() => import('../CTASection'), {
  ssr: true,
  loading: () => null,
})
import Link from 'next/link'
import { ArrowLeft, TrendingUp, Star, Users, Award, MapPin } from 'lucide-react'
import Image from 'next/image'
import { type Locale } from '@/lib/i18n'

interface IslaBarCaseStudyProps {
  locale: Locale
}

const IslaBarCaseStudy: React.FC<IslaBarCaseStudyProps> = ({ locale }) => {
  
  return (
    <>

      {/* AI-friendly page summary and metrics box */}
      <div className="sr-only">
        <h1>{locale === 'es' ? 'Caso de Estudio Isla Bar - 312% de Crecimiento en Reservas Multi-Ubicación' : 'Isla Bar Case Study - 312% Growth in Multi-Location Bookings'}</h1>
        <p>{locale === 'es' ? 'Ve cómo Isla Bar logró un aumento del 312% en reservas online y 156% de crecimiento en walk-ins en múltiples ubicaciones con la plataforma de RAY.' : 'See how Isla Bar achieved 312% increase in online bookings and 156% growth in walk-ins across multiple locations with RAY\'s platform.'}</p>
      </div>

      {/* Hero Section - Isla Bar Brand Style */}
      <section className="relative min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900 text-white overflow-hidden">
        {/* Background Elements - Premium, Mediterranean, Upscale */}
        <div className="absolute inset-0">
          {/* Gradient overlays inspired by Mediterranean aesthetic */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-800 to-purple-900"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(168,85,247,0.15),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(99,102,241,0.1),transparent_50%)]"></div>
          
          {/* Subtle texture pattern */}
          <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%2523ffffff%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%227%22 cy=%227%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Column - Content */}
              <div className="space-y-8">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 backdrop-blur-sm rounded-full border border-purple-500/30">
                  <Award className="w-4 h-4 mr-2 text-purple-400" />
                  <span className="text-purple-400 text-sm font-bold uppercase tracking-wider">{locale === 'es' ? 'Éxito Multi-Ubicación' : 'Multi-Location Success'}</span>
                </div>
                
                <div className="space-y-6">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[0.9] tracking-tight">
                    {locale === 'es' ? 'Efes MG Group Aumenta' : 'Efes MG Group Increases'}{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-500">
                      {locale === 'es' ? 'Reservas en 312%' : 'Bookings by 312%'}
                    </span>{' '}
                    {locale === 'es' ? 'y' : 'and'}{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                      {locale === 'es' ? 'Walk-ins en 156%' : 'Walk-ins by 156%'}
                    </span>
                  </h1>
                  
                  <p className="text-xl text-purple-100 leading-relaxed font-light">
                    {locale === 'es'
                      ? 'Usando la gestión multi-ubicación y optimización de reservas de RAY, Efes MG Group unificó su imperio de restaurantes y logró un crecimiento sin precedentes en todas las ubicaciones.'
                      : 'Using RAY\'s multi-location management and booking optimization, Efes MG Group unified their restaurant empire and achieved unprecedented growth across all locations.'
                    }
                  </p>
                </div>

                {/* KPI Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-purple-500/10 to-indigo-500/10 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
                    <div className="flex items-center justify-center mb-3">
                      <Users className="w-8 h-8 text-purple-400" />
                    </div>
                    <div className="text-3xl font-black text-purple-400 mb-1">+312%</div>
                    <div className="text-purple-100 text-sm font-medium">{locale === 'es' ? 'Reservas Online' : 'Online Bookings'}</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-2xl p-6 border border-green-500/20">
                    <div className="flex items-center justify-center mb-3">
                      <TrendingUp className="w-8 h-8 text-green-400" />
                    </div>
                    <div className="text-3xl font-black text-green-400 mb-1">+156%</div>
                    <div className="text-purple-100 text-sm font-medium">{locale === 'es' ? 'Walk-Ins' : 'Walk-Ins'}</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-500/10 to-indigo-500/10 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
                    <div className="flex items-center justify-center mb-3">
                      <Star className="w-8 h-8 text-purple-400 fill-current" />
                    </div>
                    <div className="text-3xl font-black text-purple-400 mb-1">4.8★</div>
                    <div className="text-purple-100 text-sm font-medium">{locale === 'es' ? 'Calificación Promedio' : 'Average Rating'}</div>
                  </div>
                </div>
              </div>

              {/* Right Column - Visual Element */}
              <div className="relative">
                <div className="relative">
                  {/* Glow effect */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 via-indigo-500/20 to-purple-500/20 rounded-3xl blur-2xl"></div>
                  
                  {/* Main visual container */}
                  <div className="relative bg-gradient-to-br from-purple-950 to-indigo-900 rounded-3xl p-8 border border-purple-800">
                    <div className="text-center space-y-6">
                      <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
                        312%
                      </div>
                      <div className="text-xl text-purple-100 font-medium">
                        {locale === 'es' ? 'Más Reservas Online' : 'More Online Bookings'}
                      </div>
                      <div className="text-sm text-purple-300">
                        {locale === 'es' ? 'En todas las ubicaciones' : 'Across all locations'}
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
          <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Team Image Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/images/success-stories/Isla-Bar.webp"
              alt="Isla Bar locations celebrating record bookings"
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
                {locale === 'es' ? 'Isla Bar – celebrando éxito unificado en múltiples ubicaciones' : 'Isla Bar – celebrating unified success across multiple locations'}
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
                    ? 'Efes MG Group necesitaba unificar los sistemas de reservas en 8 ubicaciones de restaurantes.'
                    : 'Efes MG Group needed to unify booking systems across 8 restaurant locations.'
                  }
                </p>
                
                <p className="font-medium text-white">
                  {locale === 'es' ? 'La auditoría de RAY reveló:' : 'RAY\'s audit revealed:'}
                </p>
                
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>{locale === 'es' ? 'Cada ubicación usando' : 'Each location using'} <strong className="text-red-400">{locale === 'es' ? 'sistemas diferentes' : 'different systems'}</strong> {locale === 'es' ? 'sin datos centralizados' : 'with no centralized data'}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>{locale === 'es' ? 'Poca visibilidad online en Google Maps para múltiples ubicaciones' : 'Poor online visibility across Google Maps for multiple locations'}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>{locale === 'es' ? 'El objetivo era crear una' : 'The goal was to create a'} <strong className="text-green-400">{locale === 'es' ? 'experiencia de reservas unificada' : 'unified booking experience'}</strong> {locale === 'es' ? 'mientras se mejoraba el SEO local' : 'while improving local SEO'}</span>
                  </li>
                </ul>
              </div>

              {/* Challenge Visual */}
              <div className="mt-8 p-6 bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-2xl border border-red-500/20">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-red-400 font-medium mb-1">{locale === 'es' ? 'Sistema de Reservas' : 'Booking System'}</div>
                    <div className="text-4xl font-black text-red-400">{locale === 'es' ? 'Fragmentado' : 'Fragmented'}</div>
                    <div className="text-sm text-gray-400">{locale === 'es' ? '8 sistemas diferentes' : '8 different systems'}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-red-400 font-medium mb-1">{locale === 'es' ? 'Visibilidad de Datos' : 'Data Visibility'}</div>
                    <div className="text-4xl font-black text-red-400">{locale === 'es' ? 'Ninguna' : 'None'}</div>
                    <div className="text-sm text-gray-400">{locale === 'es' ? 'Sin analítica centralizada' : 'No centralized analytics'}</div>
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
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-white font-bold" />
                </div>
                <h3 className="text-xl font-black text-white mb-4">
                  {locale === 'es' ? 'Sistema de Reservas Unificado' : 'Unified Booking System'}
                </h3>
                <p className="text-gray-300">
                  {locale === 'es' ? 'Implementamos la plataforma de reservas multi-ubicación de RAY con gestión centralizada' : 'Implemented RAY\'s multi-location booking platform with centralized management'}
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-8 h-8 text-white font-bold" />
                </div>
                <h3 className="text-xl font-black text-white mb-4">
                  {locale === 'es' ? 'SEO Multi-Ubicación' : 'Multi-Location SEO'}
                </h3>
                <p className="text-gray-300">
                  {locale === 'es' ? 'Optimizamos los 8 Perfiles de Negocio de Google para máxima visibilidad local' : 'Optimized all 8 Google Business Profiles for maximum local visibility'}
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-white font-bold" />
                </div>
                <h3 className="text-xl font-black text-white mb-4">
                  {locale === 'es' ? 'Analítica de Datos' : 'Data Analytics'}
                </h3>
                <p className="text-gray-300">
                  {locale === 'es' ? 'Dashboard de analítica centralizada para insights en tiempo real en todas las ubicaciones' : 'Centralized analytics dashboard for real-time insights across all locations'}
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
                    ? '"¡RAY transformó cómo gestionamos nuestro grupo de restaurantes! Las reservas online aumentaron en '
                    : '"RAY transformed how we manage our restaurant group! Online bookings increased by '
                  }
                  <span className="text-purple-400 font-black">312%</span>, 
                  {locale === 'es'
                    ? ' y los walk-ins crecieron en '
                    : ' and walk-ins grew by '
                  }
                  <span className="text-green-400 font-black">156%</span> 
                  {locale === 'es'
                    ? ' en todas las ubicaciones. Tener todo en una plataforma unificada ha sido un cambio total para nuestras operaciones y crecimiento. ¡Finalmente tenemos la visibilidad y control que necesitábamos!"'
                    : ' across all locations. Having everything in one unified platform has been a game-changer for our operations and growth. We finally have the visibility and control we needed!"'
                  }
                </blockquote>
                
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <div className="font-black text-white text-lg">
                      {locale === 'es' ? 'Equipo de Gestión' : 'Management Team'}
                    </div>
                    <div className="text-gray-400">
                      Efes MG Group
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
              <div className="bg-gradient-to-br from-purple-500/10 to-indigo-500/10 backdrop-blur-sm rounded-3xl p-6 border border-purple-500/20 text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-white font-bold" />
                  </div>
                </div>
                <div className="text-4xl font-black text-purple-400 mb-2">312%</div>
                <div className="text-white font-medium mb-1">{locale === 'es' ? 'Aumento' : 'Increase'}</div>
                <div className="text-sm text-gray-400">{locale === 'es' ? 'en reservas online' : 'in online bookings'}</div>
              </div>

              <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-3xl p-6 border border-green-500/20 text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white font-bold" />
                  </div>
                </div>
                <div className="text-4xl font-black text-green-400 mb-2">156%</div>
                <div className="text-white font-medium mb-1">{locale === 'es' ? 'Crecimiento' : 'Growth'}</div>
                <div className="text-sm text-gray-400">{locale === 'es' ? 'en walk-ins' : 'in walk-ins'}</div>
              </div>

              <div className="bg-gradient-to-br from-purple-500/10 to-indigo-500/10 backdrop-blur-sm rounded-3xl p-6 border border-purple-500/20 text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center">
                    <Star className="w-6 h-6 text-white font-bold fill-current" />
                  </div>
                </div>
                <div className="text-4xl font-black text-purple-400 mb-2">4.8★</div>
                <div className="text-white font-medium mb-1">{locale === 'es' ? 'Promedio' : 'Average'}</div>
                <div className="text-sm text-gray-400">{locale === 'es' ? 'en todas las ubicaciones' : 'across locations'}</div>
              </div>

              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-3xl p-6 border border-blue-500/20 text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white font-bold" />
                  </div>
                </div>
                <div className="text-4xl font-black text-blue-400 mb-2">8</div>
                <div className="text-white font-medium mb-1">{locale === 'es' ? 'Ubicaciones' : 'Locations'}</div>
                <div className="text-sm text-gray-400">{locale === 'es' ? 'plataforma unificada' : 'unified platform'}</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <CTASection locale={locale} />
    </>
  )
}

export default IslaBarCaseStudy

