'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowLeft, TrendingUp, Star, Eye, Users, Award, MapPin } from 'lucide-react'
import Image from 'next/image'
import CTASection from '../CTASection'
import { type Locale } from '@/lib/i18n'

const LaPaneraRosaCaseStudy: React.FC<{ locale: Locale }> = ({ locale }) => {
  
  return (
    <>
      <div className="sr-only">
        <h1>{locale === 'es' ? 'Caso de Estudio La Panera Rosa - 256% de Crecimiento en Pedidos de Desayuno' : 'La Panera Rosa Case Study - 256% Growth in Breakfast Orders'}</h1>
        <p>{locale === 'es' ? 'Ve cómo La Panera Rosa logró un aumento del 256% en pedidos de desayuno y 189% de crecimiento en uso de app móvil con la plataforma de RAY.' : 'See how La Panera Rosa achieved 256% increase in breakfast orders and 189% growth in mobile app usage with RAY\'s platform.'}</p>
      </div>

      <section className="relative min-h-screen bg-gradient-to-br from-pink-900 via-rose-900 to-pink-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-900 via-rose-800 to-pink-900"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(236,72,153,0.15),transparent_50%)]"></div>
          <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%2523ffffff%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%227%22 cy=%227%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
          <div className="w-full">
            <div className="mb-12">
              <Link href={`/${locale}/case-studies`} className="inline-flex items-center text-pink-200 hover:text-white transition-colors duration-300 text-sm font-medium">
                <ArrowLeft className="w-4 h-4 mr-2" />
                {locale === 'es' ? 'Volver a Casos de Estudio' : 'Back to Case Studies'}
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-500/20 to-rose-500/20 backdrop-blur-sm rounded-full border border-pink-500/30">
                  <Award className="w-4 h-4 mr-2 text-pink-400" />
                  <span className="text-pink-400 text-sm font-bold uppercase tracking-wider">{locale === 'es' ? 'Historia de Éxito' : 'Success Story'}</span>
                </div>
                
                <div className="space-y-6">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[0.9] tracking-tight">
                    {locale === 'es' ? 'La Panera Rosa Aumenta' : 'La Panera Rosa Increases'}{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-400 to-pink-500">
                      {locale === 'es' ? 'Pedidos de Desayuno en 256%' : 'Breakfast Orders by 256%'}
                    </span>{' '}
                    {locale === 'es' ? 'y' : 'and'}{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                      {locale === 'es' ? 'Uso de App en 189%' : 'App Usage by 189%'}
                    </span>
                  </h1>
                  
                  <p className="text-xl text-pink-100 leading-relaxed font-light">
                    {locale === 'es'
                      ? 'Usando la app móvil de marca y optimización de desayuno de RAY, La Panera Rosa se convirtió en el destino matutino para pasteles frescos y construyó una comunidad leal de clientes diarios.'
                      : 'Using RAY\'s branded mobile app and breakfast optimization, La Panera Rosa became the morning destination for fresh pastries and built a loyal community of daily customers.'
                    }
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-pink-500/10 to-rose-500/10 backdrop-blur-sm rounded-2xl p-6 border border-pink-500/20">
                    <div className="flex items-center justify-center mb-3"><TrendingUp className="w-8 h-8 text-pink-400" /></div>
                    <div className="text-3xl font-black text-pink-400 mb-1">+256%</div>
                    <div className="text-pink-100 text-sm font-medium">{locale === 'es' ? 'Pedidos de Desayuno' : 'Breakfast Orders'}</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-2xl p-6 border border-green-500/20">
                    <div className="flex items-center justify-center mb-3"><Users className="w-8 h-8 text-green-400" /></div>
                    <div className="text-3xl font-black text-green-400 mb-1">+189%</div>
                    <div className="text-pink-100 text-sm font-medium">{locale === 'es' ? 'Uso de App' : 'App Usage'}</div>
                  </div>
                  <div className="bg-gradient-to-br from-pink-500/10 to-rose-500/10 backdrop-blur-sm rounded-2xl p-6 border border-pink-500/20">
                    <div className="flex items-center justify-center mb-3"><Star className="w-8 h-8 text-pink-400 fill-current" /></div>
                    <div className="text-3xl font-black text-pink-400 mb-1">4.9★</div>
                    <div className="text-pink-100 text-sm font-medium">{locale === 'es' ? 'Calificación de App' : 'App Rating'}</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-pink-500/20 via-rose-500/20 to-pink-500/20 rounded-3xl blur-2xl"></div>
                  <div className="relative bg-gradient-to-br from-pink-950 to-rose-900 rounded-3xl p-8 border border-pink-800">
                    <div className="text-center space-y-6">
                      <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400">256%</div>
                      <div className="text-xl text-pink-100 font-medium">{locale === 'es' ? 'Más Pedidos de Desayuno' : 'More Breakfast Orders'}</div>
                      <div className="text-sm text-pink-300">{locale === 'es' ? 'Tu panadería matutina' : 'Your morning bakery'}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-pink-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-pink-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <Image src="/images/success-stories/Panera_Rosa.jpeg" alt="La Panera Rosa fresh pastries" width={1200} height={600} className="w-full h-[400px] md:h-[500px] object-cover" sizes="(max-width: 768px) 100vw, 1200px" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8">
              <p className="text-white text-lg font-medium">{locale === 'es' ? 'La Panera Rosa – pasteles frescos que comienzan tu día perfecto' : 'La Panera Rosa – fresh pastries that start your day right'}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12"><h2 className="text-3xl sm:text-4xl font-black text-white mb-6">{locale === 'es' ? 'El Desafío' : 'The Challenge'}</h2></div>
            <div className="bg-gradient-to-br from-black to-gray-900 rounded-3xl p-8 md:p-12 border border-gray-800">
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p className="text-xl font-medium text-white">{locale === 'es' ? 'La Panera Rosa necesitaba capturar el activo mercado de commuters matutinos.' : 'La Panera Rosa needed to capture the busy morning commuter market.'}</p>
                <p className="font-medium text-white">{locale === 'es' ? 'La auditoría de RAY reveló:' : 'RAY\'s audit revealed:'}</p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start"><div className="w-2 h-2 bg-red-400 rounded-full mt-3 mr-4 flex-shrink-0"></div><span>{locale === 'es' ? 'Largos tiempos de espera matutinos causando' : 'Long morning wait times causing'} <strong className="text-red-400">{locale === 'es' ? 'frustración del cliente' : 'customer frustration'}</strong></span></li>
                  <li className="flex items-start"><div className="w-2 h-2 bg-red-400 rounded-full mt-3 mr-4 flex-shrink-0"></div><span>{locale === 'es' ? 'Sin pedidos móviles para commuters ocupados' : 'No mobile ordering for busy commuters'}</span></li>
                  <li className="flex items-start"><div className="w-2 h-2 bg-yellow-400 rounded-full mt-3 mr-4 flex-shrink-0"></div><span>{locale === 'es' ? 'El objetivo era habilitar' : 'The goal was to enable'} <strong className="text-green-400">{locale === 'es' ? 'conveniencia de pedidos anticipados' : 'order-ahead convenience'}</strong></span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12"><h2 className="text-3xl sm:text-4xl font-black text-white mb-6">{locale === 'es' ? 'La Solución' : 'The Solution'}</h2></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-6"><TrendingUp className="w-8 h-8 text-white font-bold" /></div>
                <h3 className="text-xl font-black text-white mb-4">{locale === 'es' ? 'App Móvil de Marca' : 'Branded Mobile App'}</h3>
                <p className="text-gray-300">{locale === 'es' ? 'App móvil 5 estrellas con funcionalidad de pedidos anticipados' : '5-star mobile app with order-ahead functionality'}</p>
              </div>
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6"><Users className="w-8 h-8 text-white font-bold" /></div>
                <h3 className="text-xl font-black text-white mb-4">{locale === 'es' ? 'Recompensas de Lealtad' : 'Loyalty Rewards'}</h3>
                <p className="text-gray-300">{locale === 'es' ? 'Puntos por cada compra para impulsar visitas repetidas' : 'Points for every purchase to drive repeat visits'}</p>
              </div>
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6"><MapPin className="w-8 h-8 text-white font-bold" /></div>
                <h3 className="text-xl font-black text-white mb-4">{locale === 'es' ? 'SEO para Desayuno' : 'Breakfast SEO'}</h3>
                <p className="text-gray-300">{locale === 'es' ? 'Optimizado para búsquedas de panadería matutina y desayuno' : 'Optimized for morning bakery and breakfast searches'}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16"><h2 className="text-3xl sm:text-4xl font-black text-white mb-6">{locale === 'es' ? 'Los Resultados' : 'The Results'}</h2></div>
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-black to-gray-900 rounded-3xl p-8 md:p-12 mb-12 border border-gray-800">
              <div className="text-center">
                <blockquote className="text-2xl md:text-3xl text-white font-medium leading-relaxed mb-8">
                  {locale === 'es'
                    ? '"¡La app móvil de RAY transformó nuestro rush matutino! Los pedidos de desayuno aumentaron en '
                    : '"RAY\'s mobile app transformed our morning rush! Breakfast orders increased by '
                  }
                  <span className="text-pink-400 font-black">256%</span>, 
                  {locale === 'es'
                    ? ' y el uso de la app creció en '
                    : ' and app usage grew by '
                  }
                  <span className="text-green-400 font-black">189%</span>. 
                  {locale === 'es'
                    ? ' Los commuters aman pedir con anticipación y saltar la fila. ¡Nos hemos convertido en su ritual matutino diario!"'
                    : ' Commuters love ordering ahead and skipping the line. We\'ve become their daily morning ritual!"'
                  }
                </blockquote>
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <div className="font-black text-white text-lg">{locale === 'es' ? 'Equipo de Gestión' : 'Management Team'}</div>
                    <div className="text-gray-400">La Panera Rosa</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-pink-500/10 to-rose-500/10 backdrop-blur-sm rounded-3xl p-6 border border-pink-500/20 text-center">
                <div className="flex items-center justify-center mb-4"><div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center"><TrendingUp className="w-6 h-6 text-white font-bold" /></div></div>
                <div className="text-4xl font-black text-pink-400 mb-2">256%</div>
                <div className="text-white font-medium mb-1">{locale === 'es' ? 'Aumento' : 'Increase'}</div>
                <div className="text-sm text-gray-400">{locale === 'es' ? 'en pedidos de desayuno' : 'in breakfast orders'}</div>
              </div>
              <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-3xl p-6 border border-green-500/20 text-center">
                <div className="flex items-center justify-center mb-4"><div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center"><Users className="w-6 h-6 text-white font-bold" /></div></div>
                <div className="text-4xl font-black text-green-400 mb-2">189%</div>
                <div className="text-white font-medium mb-1">{locale === 'es' ? 'Crecimiento' : 'Growth'}</div>
                <div className="text-sm text-gray-400">{locale === 'es' ? 'en uso de app' : 'in app usage'}</div>
              </div>
              <div className="bg-gradient-to-br from-pink-500/10 to-rose-500/10 backdrop-blur-sm rounded-3xl p-6 border border-pink-500/20 text-center">
                <div className="flex items-center justify-center mb-4"><div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center"><Star className="w-6 h-6 text-white font-bold fill-current" /></div></div>
                <div className="text-4xl font-black text-pink-400 mb-2">4.9★</div>
                <div className="text-white font-medium mb-1">{locale === 'es' ? 'Promedio' : 'Average'}</div>
                <div className="text-sm text-gray-400">{locale === 'es' ? 'calificación de app' : 'app rating'}</div>
              </div>
              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-3xl p-6 border border-blue-500/20 text-center">
                <div className="flex items-center justify-center mb-4"><div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center"><Eye className="w-6 h-6 text-white font-bold" /></div></div>
                <div className="text-4xl font-black text-blue-400 mb-2">2.3K</div>
                <div className="text-white font-medium mb-1">{locale === 'es' ? 'Activos' : 'Active'}</div>
                <div className="text-sm text-gray-400">{locale === 'es' ? 'usuarios de app' : 'app users'}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection locale={locale} />
    </>
  )
}

export default LaPaneraRosaCaseStudy

