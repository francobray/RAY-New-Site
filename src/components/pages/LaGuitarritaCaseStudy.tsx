'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowLeft, TrendingUp, Star, Users, Award, MapPin, Eye } from 'lucide-react'
import Image from 'next/image'
import CTASection from '../CTASection'
import { type Locale } from '@/lib/i18n'

interface LaGuitarritaCaseStudyProps {
  locale: Locale
}

const LaGuitarritaCaseStudy: React.FC<LaGuitarritaCaseStudyProps> = ({ locale }) => {
  
  return (
    <>
      <div className="sr-only">
        <h1>{locale === 'es' ? 'Caso de Estudio La Guitarrita - 267% de Crecimiento en Pedidos de Delivery' : 'La Guitarrita Case Study - 267% Growth in Delivery Orders'}</h1>
        <p>{locale === 'es' ? 'Ve cómo La Guitarrita logró un aumento del 267% en pedidos de delivery y 178% de crecimiento en reservas de catering con la plataforma de RAY.' : 'See how La Guitarrita achieved 267% increase in delivery orders and 178% growth in catering bookings with RAY\'s platform.'}</p>
      </div>

      <section className="relative min-h-screen bg-gradient-to-br from-rose-900 via-pink-900 to-rose-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-rose-900 via-fuchsia-900 to-rose-900"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(244,114,182,0.15),transparent_50%)]"></div>
          <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%2523ffffff%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%227%22 cy=%227%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
          <div className="w-full">
            <div className="mb-12">
              <Link 
                href={`/${locale}/case-studies`} 
                className="inline-flex items-center text-rose-200 hover:text-white transition-colors duration-300 text-sm font-medium"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                {locale === 'es' ? 'Volver a Casos de Estudio' : 'Back to Case Studies'}
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-rose-500/20 to-pink-500/20 backdrop-blur-sm rounded-full border border-rose-500/30">
                  <Award className="w-4 h-4 mr-2 text-rose-400" />
                  <span className="text-rose-400 text-sm font-bold uppercase tracking-wider">{locale === 'es' ? 'Historia de Éxito' : 'Success Story'}</span>
                </div>
                
                <div className="space-y-6">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[0.9] tracking-tight">
                    {locale === 'es' ? 'La Guitarrita Aumenta' : 'La Guitarrita Increases'}{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-400 to-rose-500">
                      {locale === 'es' ? 'Pedidos de Delivery en 267%' : 'Delivery Orders by 267%'}
                    </span>{' '}
                    {locale === 'es' ? 'y' : 'and'}{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                      {locale === 'es' ? 'Reservas de Catering en 178%' : 'Catering Bookings by 178%'}
                    </span>
                  </h1>
                  
                  <p className="text-xl text-rose-100 leading-relaxed font-light">
                    {locale === 'es'
                      ? 'Usando las herramientas de pedidos por WhatsApp y gestión de catering de RAY, La Guitarrita expandió el alcance de su cocina mexicana y se convirtió en la opción preferida tanto para delivery como para eventos grandes.'
                      : 'Using RAY\'s WhatsApp ordering and catering management tools, La Guitarrita expanded their Mexican cuisine reach and became the go-to choice for both delivery and large events.'
                    }
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-rose-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-6 border border-rose-500/20">
                    <div className="flex items-center justify-center mb-3">
                      <TrendingUp className="w-8 h-8 text-rose-400" />
                    </div>
                    <div className="text-3xl font-black text-rose-400 mb-1">+267%</div>
                    <div className="text-rose-100 text-sm font-medium">{locale === 'es' ? 'Pedidos de Delivery' : 'Delivery Orders'}</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-2xl p-6 border border-green-500/20">
                    <div className="flex items-center justify-center mb-3">
                      <Users className="w-8 h-8 text-green-400" />
                    </div>
                    <div className="text-3xl font-black text-green-400 mb-1">+178%</div>
                    <div className="text-rose-100 text-sm font-medium">{locale === 'es' ? 'Reservas de Catering' : 'Catering Bookings'}</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-rose-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-6 border border-rose-500/20">
                    <div className="flex items-center justify-center mb-3">
                      <Star className="w-8 h-8 text-rose-400 fill-current" />
                    </div>
                    <div className="text-3xl font-black text-rose-400 mb-1">4.8★</div>
                    <div className="text-rose-100 text-sm font-medium">{locale === 'es' ? 'Calificación Google' : 'Google Rating'}</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-rose-500/20 via-pink-500/20 to-rose-500/20 rounded-3xl blur-2xl"></div>
                  <div className="relative bg-gradient-to-br from-rose-950 to-pink-900 rounded-3xl p-8 border border-rose-800">
                    <div className="text-center space-y-6">
                      <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-400">
                        267%
                      </div>
                      <div className="text-xl text-rose-100 font-medium">
                        {locale === 'es' ? 'Más Pedidos de Delivery' : 'More Delivery Orders'}
                      </div>
                      <div className="text-sm text-rose-300">
                        {locale === 'es' ? 'Vía WhatsApp y canales directos' : 'Via WhatsApp & direct channels'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-rose-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-rose-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/images/success-stories/la-guitarrita.webp"
              alt="La Guitarrita preparing authentic Mexican cuisine for delivery"
              width={1200}
              height={600}
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8">
              <p className="text-white text-lg font-medium">
                {locale === 'es' ? 'La Guitarrita – llevando auténtica cocina mexicana a cada puerta' : 'La Guitarrita – bringing authentic Mexican cuisine to every door'}
              </p>
            </div>
          </div>
        </div>
      </section>

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
                    ? 'La Guitarrita quería expandirse más allá del comedor para capturar los mercados de delivery y catering.'
                    : 'La Guitarrita wanted to expand beyond dine-in to capture delivery and catering markets.'
                  }
                </p>
                
                <p className="font-medium text-white">
                  {locale === 'es' ? 'La auditoría de RAY reveló:' : 'RAY\'s audit revealed:'}
                </p>
                
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>{locale === 'es' ? 'Perdiendo' : 'Losing'} <strong className="text-red-400">{locale === 'es' ? '35% de ingresos' : '35% of revenue'}</strong> {locale === 'es' ? 'en apps de delivery de terceros' : 'to third-party delivery apps'}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>{locale === 'es' ? 'Sin sistema para gestionar consultas y pedidos de catering' : 'No system for managing catering inquiries and orders'}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>{locale === 'es' ? 'El objetivo era construir' : 'The goal was to build'} <strong className="text-green-400">{locale === 'es' ? 'canales de pedidos directos' : 'direct ordering channels'}</strong> {locale === 'es' ? 'y expandir catering' : 'and expand catering'}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-white font-bold" />
                </div>
                <h3 className="text-xl font-black text-white mb-4">
                  {locale === 'es' ? 'Pedidos por WhatsApp' : 'WhatsApp Ordering'}
                </h3>
                <p className="text-gray-300">
                  {locale === 'es' ? 'Sistema de WhatsApp con IA para pedidos sin comisiones' : 'AI-powered WhatsApp system for zero-commission orders'}
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-white font-bold" />
                </div>
                <h3 className="text-xl font-black text-white mb-4">
                  {locale === 'es' ? 'Plataforma de Catering' : 'Catering Platform'}
                </h3>
                <p className="text-gray-300">
                  {locale === 'es' ? 'Sistema dedicado para gestionar pedidos de eventos grandes' : 'Dedicated system for managing large event orders'}
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-8 h-8 text-white font-bold" />
                </div>
                <h3 className="text-xl font-black text-white mb-4">
                  {locale === 'es' ? 'SEO Local' : 'Local SEO'}
                </h3>
                <p className="text-gray-300">
                  {locale === 'es' ? 'Optimizado para búsquedas de comida mexicana y catering' : 'Optimized for Mexican food and catering searches'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
              {locale === 'es' ? 'Los Resultados' : 'The Results'}
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-black to-gray-900 rounded-3xl p-8 md:p-12 mb-12 border border-gray-800">
              <div className="text-center">
                <blockquote className="text-2xl md:text-3xl text-white font-medium leading-relaxed mb-8">
                  {locale === 'es'
                    ? '"¡RAY transformó nuestro modelo de negocio completamente! Los pedidos directos de delivery aumentaron en '
                    : '"RAY transformed our business model completely! Direct delivery orders increased by '
                  }
                  <span className="text-rose-400 font-black">267%</span>, 
                  {locale === 'es'
                    ? ' y las reservas de catering crecieron en '
                    : ' and catering bookings grew by '
                  }
                  <span className="text-green-400 font-black">178%</span>. 
                  {locale === 'es'
                    ? ' El sistema de pedidos por WhatsApp es increíblemente popular con nuestros clientes, y estamos ahorrando miles en comisiones cada mes. ¡Hemos abierto un flujo de ingresos completamente nuevo!"'
                    : ' The WhatsApp ordering system is incredibly popular with our customers, and we\'re saving thousands on commissions every month. We\'ve opened a whole new revenue stream!"'
                  }
                </blockquote>
                
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <div className="font-black text-white text-lg">
                      {locale === 'es' ? 'Equipo de Gestión' : 'Management Team'}
                    </div>
                    <div className="text-gray-400">
                      La Guitarrita
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-rose-500/10 to-pink-500/10 backdrop-blur-sm rounded-3xl p-6 border border-rose-500/20 text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-500 rounded-2xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white font-bold" />
                  </div>
                </div>
                <div className="text-4xl font-black text-rose-400 mb-2">267%</div>
                <div className="text-white font-medium mb-1">{locale === 'es' ? 'Aumento' : 'Increase'}</div>
                <div className="text-sm text-gray-400">{locale === 'es' ? 'en pedidos de delivery' : 'in delivery orders'}</div>
              </div>

              <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-3xl p-6 border border-green-500/20 text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-white font-bold" />
                  </div>
                </div>
                <div className="text-4xl font-black text-green-400 mb-2">178%</div>
                <div className="text-white font-medium mb-1">{locale === 'es' ? 'Crecimiento' : 'Growth'}</div>
                <div className="text-sm text-gray-400">{locale === 'es' ? 'en reservas de catering' : 'in catering bookings'}</div>
              </div>

              <div className="bg-gradient-to-br from-rose-500/10 to-pink-500/10 backdrop-blur-sm rounded-3xl p-6 border border-rose-500/20 text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-500 rounded-2xl flex items-center justify-center">
                    <Star className="w-6 h-6 text-white font-bold fill-current" />
                  </div>
                </div>
                <div className="text-4xl font-black text-rose-400 mb-2">4.8★</div>
                <div className="text-white font-medium mb-1">{locale === 'es' ? 'Promedio' : 'Average'}</div>
                <div className="text-sm text-gray-400">{locale === 'es' ? 'calificación Google' : 'Google rating'}</div>
              </div>

              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-3xl p-6 border border-blue-500/20 text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                    <Eye className="w-6 h-6 text-white font-bold" />
                  </div>
                </div>
                <div className="text-4xl font-black text-blue-400 mb-2">0%</div>
                <div className="text-white font-medium mb-1">{locale === 'es' ? 'Comisiones' : 'Commissions'}</div>
                <div className="text-sm text-gray-400">{locale === 'es' ? 'en pedidos directos' : 'on direct orders'}</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <CTASection locale={locale} />
    </>
  )
}

export default LaGuitarritaCaseStudy

