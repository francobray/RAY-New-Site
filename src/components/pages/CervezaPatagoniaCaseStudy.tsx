'use client'

import React from 'react'
import dynamic from 'next/dynamic'
// Dynamically import CTASection to reduce initial bundle size
const CTASection = dynamic(() => import('../CTASection'), {
  ssr: true,
  loading: () => null,
})
import Link from 'next/link'
import { ArrowLeft, TrendingUp, Star, Users, Award, MapPin, Eye } from 'lucide-react'
import Image from 'next/image'
import { type Locale } from '@/lib/i18n'

interface CervezaPatagoniaCaseStudyProps {
  locale: Locale
}

const CervezaPatagoniaCaseStudy: React.FC<CervezaPatagoniaCaseStudyProps> = ({ locale }) => {
  
  return (
    <>
      <div className="sr-only">
        <h1>{locale === 'es' ? 'Caso de Estudio Cerveza Patagonia - 334% de Crecimiento en Reservas de Eventos' : 'Cerveza Patagonia Case Study - 334% Growth in Event Bookings'}</h1>
        <p>{locale === 'es' ? 'Ve cómo Cerveza Patagonia logró un aumento del 334% en reservas de eventos y 218% de crecimiento en visitas a la sala de degustación con la plataforma de RAY.' : 'See how Cerveza Patagonia achieved 334% increase in event bookings and 218% growth in taproom visits with RAY\'s platform.'}</p>
      </div>

      <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-cyan-900 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-cyan-800 to-blue-900"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(34,211,238,0.15),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(6,182,212,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%2523ffffff%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%227%22 cy=%227%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
          <div className="w-full">
            <div className="mb-12">
              <Link 
                href={`/${locale}/case-studies`} 
                className="inline-flex items-center text-cyan-200 hover:text-white transition-colors duration-300 text-sm font-medium"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                {locale === 'es' ? 'Volver a Casos de Estudio' : 'Back to Case Studies'}
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-full border border-cyan-500/30">
                  <Award className="w-4 h-4 mr-2 text-cyan-400" />
                  <span className="text-cyan-400 text-sm font-bold uppercase tracking-wider">{locale === 'es' ? 'Historia de Éxito' : 'Success Story'}</span>
                </div>
                
                <div className="space-y-6">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[0.9] tracking-tight">
                    {locale === 'es' ? 'Cerveza Patagonia Aumenta' : 'Cerveza Patagonia Increases'}{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500">
                      {locale === 'es' ? 'Reservas de Eventos en 334%' : 'Event Bookings by 334%'}
                    </span>{' '}
                    {locale === 'es' ? 'y' : 'and'}{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                      {locale === 'es' ? 'Visitas a Taproom en 218%' : 'Taproom Visits by 218%'}
                    </span>
                  </h1>
                  
                  <p className="text-xl text-cyan-100 leading-relaxed font-light">
                    {locale === 'es'
                      ? 'Usando las herramientas de gestión de eventos y SEO local de RAY, Cerveza Patagonia transformó su taproom en el destino premium de cerveza artesanal para eventos y reuniones.'
                      : 'Using RAY\'s event management and local SEO tools, Cerveza Patagonia transformed their taproom into the premier craft beer destination for events and gatherings.'
                    }
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/20">
                    <div className="flex items-center justify-center mb-3">
                      <Users className="w-8 h-8 text-cyan-400" />
                    </div>
                    <div className="text-3xl font-black text-cyan-400 mb-1">+334%</div>
                    <div className="text-cyan-100 text-sm font-medium">{locale === 'es' ? 'Reservas de Eventos' : 'Event Bookings'}</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-2xl p-6 border border-green-500/20">
                    <div className="flex items-center justify-center mb-3">
                      <TrendingUp className="w-8 h-8 text-green-400" />
                    </div>
                    <div className="text-3xl font-black text-green-400 mb-1">+218%</div>
                    <div className="text-cyan-100 text-sm font-medium">{locale === 'es' ? 'Visitas a Taproom' : 'Taproom Visits'}</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/20">
                    <div className="flex items-center justify-center mb-3">
                      <Star className="w-8 h-8 text-cyan-400 fill-current" />
                    </div>
                    <div className="text-3xl font-black text-cyan-400 mb-1">4.8★</div>
                    <div className="text-cyan-100 text-sm font-medium">{locale === 'es' ? 'Calificación Google' : 'Google Rating'}</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-cyan-500/20 rounded-3xl blur-2xl"></div>
                  <div className="relative bg-gradient-to-br from-blue-950 to-cyan-900 rounded-3xl p-8 border border-cyan-800">
                    <div className="text-center space-y-6">
                      <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                        334%
                      </div>
                      <div className="text-xl text-cyan-100 font-medium">
                        {locale === 'es' ? 'Más Reservas de Eventos' : 'More Event Bookings'}
                      </div>
                      <div className="text-sm text-cyan-300">
                        {locale === 'es' ? 'Venue premium de cerveza artesanal' : 'Premier craft beer venue'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/images/success-stories/patagonia.webp"
              alt="Cerveza Patagonia taproom hosting successful events"
              width={1200}
              height={600}
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8">
              <p className="text-white text-lg font-medium">
                {locale === 'es' ? 'Cerveza Patagonia – el destino premium para eventos de cerveza artesanal' : 'Cerveza Patagonia – the premier destination for craft beer events'}
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
                    ? 'Cerveza Patagonia tenía un espacio de taproom increíble pero luchaba por llenarlo con eventos privados.'
                    : 'Cerveza Patagonia had an amazing taproom space but struggled to fill it with private events.'
                  }
                </p>
                
                <p className="font-medium text-white">
                  {locale === 'es' ? 'La auditoría de RAY reveló:' : 'RAY\'s audit revealed:'}
                </p>
                
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>{locale === 'es' ? 'Solo' : 'Only'} <strong className="text-red-400">{locale === 'es' ? '2-3 eventos' : '2-3 events'}</strong> {locale === 'es' ? 'por mes a pesar del venue premium' : 'per month despite premium venue'}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>{locale === 'es' ? 'Sin sistema de reservas de eventos online ni visibilidad' : 'No online event booking system or visibility'}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>{locale === 'es' ? 'El objetivo era convertirse en el' : 'The goal was to become the'} <strong className="text-green-400">{locale === 'es' ? 'venue de eventos de referencia' : 'go-to event venue'}</strong> {locale === 'es' ? 'para amantes de la cerveza artesanal' : 'for craft beer lovers'}</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-2xl border border-red-500/20">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-red-400 font-medium mb-1">{locale === 'es' ? 'Eventos Mensuales' : 'Monthly Events'}</div>
                    <div className="text-4xl font-black text-red-400">2-3</div>
                    <div className="text-sm text-gray-400">{locale === 'es' ? 'Espacio subutilizado' : 'Underutilized space'}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-red-400 font-medium mb-1">{locale === 'es' ? 'Reservas Online' : 'Online Bookings'}</div>
                    <div className="text-4xl font-black text-red-400">{locale === 'es' ? 'Ninguna' : 'None'}</div>
                    <div className="text-sm text-gray-400">{locale === 'es' ? 'Sin sistema implementado' : 'No system in place'}</div>
                  </div>
                </div>
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
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-white font-bold" />
                </div>
                <h3 className="text-xl font-black text-white mb-4">
                  {locale === 'es' ? 'Gestión de Eventos' : 'Event Management'}
                </h3>
                <p className="text-gray-300">
                  {locale === 'es' ? 'Implementamos sistema de reservas de eventos online con confirmaciones automáticas' : 'Implemented online event booking system with automated confirmations'}
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-8 h-8 text-white font-bold" />
                </div>
                <h3 className="text-xl font-black text-white mb-4">
                  {locale === 'es' ? 'SEO para Venue' : 'Venue SEO'}
                </h3>
                <p className="text-gray-300">
                  {locale === 'es' ? 'Optimizado para "venue de eventos cerca de mí" y "eventos de cerveza artesanal"' : 'Optimized for "event venue near me" and "craft beer events"'}
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-white font-bold" />
                </div>
                <h3 className="text-xl font-black text-white mb-4">
                  {locale === 'es' ? 'Promoción Social' : 'Social Promotion'}
                </h3>
                <p className="text-gray-300">
                  {locale === 'es' ? 'Promoción de eventos automatizada e integración de calendario' : 'Automated event promotion and calendar integration'}
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
                    ? '"¡RAY transformó nuestro taproom en el venue de eventos premium! Las reservas de eventos se dispararon en '
                    : '"RAY transformed our taproom into the premier event venue! Event bookings skyrocketed by '
                  }
                  <span className="text-cyan-400 font-black">334%</span>, 
                  {locale === 'es'
                    ? ' y las visitas regulares al taproom aumentaron en '
                    : ' and regular taproom visits increased by '
                  }
                  <span className="text-green-400 font-black">218%</span>. 
                  {locale === 'es'
                    ? ' Ahora organizamos 10-12 eventos mensuales y nos hemos convertido en el destino de referencia para celebraciones de cerveza artesanal. ¡Nuestros ingresos nunca han sido tan fuertes!"'
                    : ' We now host 10-12 events monthly and have become the go-to destination for craft beer celebrations. Our revenue has never been stronger!"'
                  }
                </blockquote>
                
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <div className="font-black text-white text-lg">
                      {locale === 'es' ? 'Equipo de Gestión' : 'Management Team'}
                    </div>
                    <div className="text-gray-400">
                      Cerveza Patagonia
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mb-8">
              <h3 className="text-2xl font-black text-white mb-8">
                {locale === 'es' ? 'Métricas Clave' : 'Key Metrics'}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-3xl p-6 border border-cyan-500/20 text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-white font-bold" />
                  </div>
                </div>
                <div className="text-4xl font-black text-cyan-400 mb-2">334%</div>
                <div className="text-white font-medium mb-1">{locale === 'es' ? 'Aumento' : 'Increase'}</div>
                <div className="text-sm text-gray-400">{locale === 'es' ? 'en reservas de eventos' : 'in event bookings'}</div>
              </div>

              <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-3xl p-6 border border-green-500/20 text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white font-bold" />
                  </div>
                </div>
                <div className="text-4xl font-black text-green-400 mb-2">218%</div>
                <div className="text-white font-medium mb-1">{locale === 'es' ? 'Crecimiento' : 'Growth'}</div>
                <div className="text-sm text-gray-400">{locale === 'es' ? 'en visitas a taproom' : 'in taproom visits'}</div>
              </div>

              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-3xl p-6 border border-cyan-500/20 text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center">
                    <Star className="w-6 h-6 text-white font-bold fill-current" />
                  </div>
                </div>
                <div className="text-4xl font-black text-cyan-400 mb-2">4.8★</div>
                <div className="text-white font-medium mb-1">{locale === 'es' ? 'Promedio' : 'Average'}</div>
                <div className="text-sm text-gray-400">{locale === 'es' ? 'calificación Google' : 'Google rating'}</div>
              </div>

              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-3xl p-6 border border-blue-500/20 text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                    <Eye className="w-6 h-6 text-white font-bold" />
                  </div>
                </div>
                <div className="text-4xl font-black text-blue-400 mb-2">10-12</div>
                <div className="text-white font-medium mb-1">{locale === 'es' ? 'Mensuales' : 'Monthly'}</div>
                <div className="text-sm text-gray-400">{locale === 'es' ? 'eventos organizados' : 'events hosted'}</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <CTASection locale={locale} />
    </>
  )
}

export default CervezaPatagoniaCaseStudy

