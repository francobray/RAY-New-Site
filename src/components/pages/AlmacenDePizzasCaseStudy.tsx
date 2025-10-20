'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowLeft, TrendingUp, Star, Eye, Award } from 'lucide-react'
import Image from 'next/image'
import CTASection from '../CTASection'
import { type Locale } from '@/lib/i18n'

interface AlmacenDePizzasCaseStudyProps {
  locale: Locale
}

const AlmacenDePizzasCaseStudy: React.FC<AlmacenDePizzasCaseStudyProps> = ({ locale }) => {
  
  return (
    <>

      {/* AI-friendly page summary and metrics box */}
      <div className="sr-only">
        <h1>{locale === 'es' ? 'Caso de Estudio Almacen de Pizzas - 247% de Crecimiento en Pedidos de Delivery' : 'Almacen de Pizzas Case Study - 247% Growth in Delivery Orders'}</h1>
        <p>{locale === 'es' ? 'Ve cómo Almacen de Pizzas logró un aumento del 247% en pedidos de delivery y 89% de crecimiento en visibilidad online con la plataforma de RAY.' : 'See how Almacen de Pizzas achieved 247% increase in delivery orders and 89% growth in online visibility with RAY\'s platform.'}</p>
      </div>

      {/* Hero Section - Almacen de Pizzas Brand Style */}
      <section className="relative min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-red-900 text-white overflow-hidden">
        {/* Background Elements - Warm, Italian, Inviting */}
        <div className="absolute inset-0">
          {/* Gradient overlays inspired by Italian pizzeria aesthetic */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-900 via-orange-900 to-red-900"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(251,191,36,0.15),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(239,68,68,0.1),transparent_50%)]"></div>
          
          {/* Subtle texture pattern */}
          <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%2523ffffff%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%227%22 cy=%227%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
          <div className="w-full">
            {/* Breadcrumb */}
            <div className="mb-12">
              <Link 
                href={`/${locale}/case-studies`} 
                className="inline-flex items-center text-red-200 hover:text-white transition-colors duration-300 text-sm font-medium"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                {locale === 'es' ? 'Volver a Casos de Estudio' : 'Back to Case Studies'}
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Column - Content */}
              <div className="space-y-8">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-amber-500/20 to-red-500/20 backdrop-blur-sm rounded-full border border-amber-500/30">
                  <Award className="w-4 h-4 mr-2 text-amber-400" />
                  <span className="text-amber-400 text-sm font-bold uppercase tracking-wider">{locale === 'es' ? 'Historia de Éxito' : 'Success Story'}</span>
                </div>
                
                <div className="space-y-6">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[0.9] tracking-tight">
                    {locale === 'es' ? 'Almacen de Pizzas Aumenta' : 'Almacen de Pizzas Increases'}{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500">
                      {locale === 'es' ? 'Pedidos de Delivery en 247%' : 'Delivery Orders by 247%'}
                    </span>{' '}
                    {locale === 'es' ? 'y' : 'and'}{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                      {locale === 'es' ? 'Visibilidad Online en 89%' : 'Online Visibility by 89%'}
                    </span>
                  </h1>
                  
                  <p className="text-xl text-red-100 leading-relaxed font-light">
                    {locale === 'es' 
                      ? 'Usando las herramientas de optimización de delivery y SEO local de RAY, Almacen de Pizzas transformó su presencia online y construyó un próspero canal de delivery directo mientras reducía las comisiones de terceros.'
                      : 'Using RAY\'s delivery optimization and local SEO tools, Almacen de Pizzas transformed their online presence and built a thriving direct delivery channel while reducing third-party commissions.'
                    }
                  </p>
                </div>

                {/* KPI Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 backdrop-blur-sm rounded-2xl p-6 border border-amber-500/20">
                    <div className="flex items-center justify-center mb-3">
                      <TrendingUp className="w-8 h-8 text-amber-400" />
                    </div>
                    <div className="text-3xl font-black text-amber-400 mb-1">+247%</div>
                    <div className="text-red-100 text-sm font-medium">{locale === 'es' ? 'Pedidos de Delivery' : 'Delivery Orders'}</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-2xl p-6 border border-green-500/20">
                    <div className="flex items-center justify-center mb-3">
                      <Eye className="w-8 h-8 text-green-400" />
                    </div>
                    <div className="text-3xl font-black text-green-400 mb-1">+89%</div>
                    <div className="text-red-100 text-sm font-medium">{locale === 'es' ? 'Visibilidad Online' : 'Online Visibility'}</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 backdrop-blur-sm rounded-2xl p-6 border border-amber-500/20">
                    <div className="flex items-center justify-center mb-3">
                      <Star className="w-8 h-8 text-amber-400 fill-current" />
                    </div>
                    <div className="text-3xl font-black text-amber-400 mb-1">4.9★</div>
                    <div className="text-red-100 text-sm font-medium">{locale === 'es' ? 'Calificación Google' : 'Google Rating'}</div>
                  </div>
                </div>
              </div>

              {/* Right Column - Visual Element */}
              <div className="relative">
                <div className="relative">
                  {/* Glow effect */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 via-red-500/20 to-amber-500/20 rounded-3xl blur-2xl"></div>
                  
                  {/* Main visual container */}
                  <div className="relative bg-gradient-to-br from-red-950 to-red-900 rounded-3xl p-8 border border-red-800">
                    <div className="text-center space-y-6">
                      <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                        247%
                      </div>
                      <div className="text-xl text-red-100 font-medium">
                        {locale === 'es' ? 'Más Pedidos de Delivery' : 'More Delivery Orders'}
                      </div>
                      <div className="text-sm text-red-300">
                        {locale === 'es' ? 'Plataforma sin comisiones' : 'Zero-commission platform'}
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
          <div className="w-6 h-10 border-2 border-red-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-amber-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Team Image Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/images/success-stories/Almacen-de-pizzas.webp"
              alt="Almacen de Pizzas team celebrating delivery growth success"
              width={1200}
              height={600}
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8">
              <p className="text-white text-lg font-medium">
                {locale === 'es' ? 'Equipo de Almacen de Pizzas – celebrando el crecimiento explosivo en delivery' : 'Almacen de Pizzas team – celebrating explosive delivery growth'}
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
                    ? 'Almacen de Pizzas estaba perdiendo el 30% de sus ingresos en comisiones de delivery de terceros.'
                    : 'Almacen de Pizzas was losing 30% of revenue to third-party delivery commissions.'
                  }
                </p>
                
                <p className="font-medium text-white">
                  {locale === 'es' ? 'La auditoría de RAY reveló:' : 'RAY\'s audit revealed:'}
                </p>
                
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>{locale === 'es' ? 'Más de' : 'Over'} <strong className="text-red-400">$8,000/mes</strong> {locale === 'es' ? 'perdidos en comisiones de apps de delivery' : 'lost to delivery app commissions'}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>{locale === 'es' ? 'Visibilidad online limitada para canales de pedidos directos' : 'Limited online visibility for direct ordering channels'}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>{locale === 'es' ? 'El objetivo era construir un' : 'The goal was to build a'} <strong className="text-green-400">{locale === 'es' ? 'sistema de delivery sin comisiones' : 'zero-commission delivery system'}</strong> {locale === 'es' ? 'mientras se mejoraba el SEO local' : 'while improving local SEO'}</span>
                  </li>
                </ul>
              </div>

              {/* Challenge Visual */}
              <div className="mt-8 p-6 bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-2xl border border-red-500/20">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-red-400 font-medium mb-1">{locale === 'es' ? 'Pérdida Mensual en Comisiones' : 'Monthly Commission Loss'}</div>
                    <div className="text-4xl font-black text-red-400">$8K+</div>
                    <div className="text-sm text-gray-400">{locale === 'es' ? '30% de ingresos de delivery' : '30% of delivery revenue'}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-red-400 font-medium mb-1">{locale === 'es' ? 'Pedidos Directos' : 'Direct Orders'}</div>
                    <div className="text-4xl font-black text-red-400">{locale === 'es' ? 'Bajo' : 'Low'}</div>
                    <div className="text-sm text-gray-400">{locale === 'es' ? 'Mayoría vía terceros' : 'Majority via 3rd party'}</div>
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
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-black font-bold" />
                </div>
                <h3 className="text-xl font-black text-white mb-4">
                  {locale === 'es' ? 'Plataforma Sin Comisiones' : 'Zero-Commission Platform'}
                </h3>
                <p className="text-gray-300">
                  {locale === 'es' ? 'Implementamos el sistema de pedidos directos de RAY con integración de WhatsApp y sitio web de marca' : 'Implemented RAY\'s direct ordering system with WhatsApp integration and branded website'}
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Eye className="w-8 h-8 text-black font-bold" />
                </div>
                <h3 className="text-xl font-black text-white mb-4">
                  {locale === 'es' ? 'Impulso en SEO Local' : 'Local SEO Boost'}
                </h3>
                <p className="text-gray-300">
                  {locale === 'es' ? 'Optimizamos el Perfil de Negocio de Google y búsquedas locales para impulsar más descubrimiento directo' : 'Optimized Google Business Profile and local search to drive more direct discovery'}
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Star className="w-8 h-8 text-black font-bold" />
                </div>
                <h3 className="text-xl font-black text-white mb-4">
                  {locale === 'es' ? 'Lealtad de Clientes' : 'Customer Loyalty'}
                </h3>
                <p className="text-gray-300">
                  {locale === 'es' ? 'Construimos programa de lealtad para incentivar pedidos directos y clientes recurrentes' : 'Built loyalty program to incentivize direct ordering and repeat customers'}
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
                    ? '"¡RAY transformó nuestro negocio de delivery completamente! Nuestros pedidos directos aumentaron en '
                    : '"RAY transformed our delivery business completely! Our direct delivery orders increased by '
                  }
                  <span className="text-amber-400 font-black">247%</span>, 
                  {locale === 'es'
                    ? ' y ahora estamos ahorrando más de '
                    : ' and we\'re now saving over '
                  }
                  <span className="text-green-400 font-black">{locale === 'es' ? '$8,000 mensuales' : '$8,000 monthly'}</span>
                  {locale === 'es'
                    ? ' en comisiones. El sistema de pedidos por WhatsApp es increíblemente fácil para nuestros clientes. ¡Esto ha cambiado el juego para nuestra rentabilidad!"'
                    : ' on commissions. The WhatsApp ordering system is incredibly easy for our customers. This has been a game-changer for our profitability!"'
                  }
                </blockquote>
                
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <div className="font-black text-white text-lg">
                      {locale === 'es' ? 'Equipo de Gestión' : 'Management Team'}
                    </div>
                    <div className="text-gray-400">
                      Almacen de Pizzas
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
              <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 backdrop-blur-sm rounded-3xl p-6 border border-amber-500/20 text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-black font-bold" />
                  </div>
                </div>
                <div className="text-4xl font-black text-amber-400 mb-2">247%</div>
                <div className="text-white font-medium mb-1">{locale === 'es' ? 'Aumento' : 'Increase'}</div>
                <div className="text-sm text-gray-400">{locale === 'es' ? 'en pedidos de delivery' : 'in delivery orders'}</div>
              </div>

              <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-3xl p-6 border border-green-500/20 text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center">
                    <Eye className="w-6 h-6 text-black font-bold" />
                  </div>
                </div>
                <div className="text-4xl font-black text-green-400 mb-2">89%</div>
                <div className="text-white font-medium mb-1">{locale === 'es' ? 'Crecimiento' : 'Growth'}</div>
                <div className="text-sm text-gray-400">{locale === 'es' ? 'en visibilidad online' : 'in online visibility'}</div>
              </div>

              <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 backdrop-blur-sm rounded-3xl p-6 border border-amber-500/20 text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center">
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
                    <TrendingUp className="w-6 h-6 text-black font-bold" />
                  </div>
                </div>
                <div className="text-4xl font-black text-blue-400 mb-2">$8K+</div>
                <div className="text-white font-medium mb-1">{locale === 'es' ? 'Ahorro Mensual' : 'Saved Monthly'}</div>
                <div className="text-sm text-gray-400">{locale === 'es' ? 'cero comisiones' : 'zero commissions'}</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <CTASection locale={locale} />
    </>
  )
}

export default AlmacenDePizzasCaseStudy

