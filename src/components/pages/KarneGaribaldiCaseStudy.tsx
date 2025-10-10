'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowLeft, TrendingUp, Star, Eye, Users, Award } from 'lucide-react'
import Image from 'next/image'
import CTASection from '../CTASection'
import { type Locale } from '@/lib/i18n'

interface KarneGaribaldiCaseStudyProps {
  locale: Locale
}

const KarneGaribaldiCaseStudy: React.FC<KarneGaribaldiCaseStudyProps> = ({ locale }) => {
  
  return (
    <>
      <div className="sr-only">
        <h1>{locale === 'es' ? 'Caso de Estudio Karne Garibaldi - 289% de Crecimiento en Rotación de Mesas' : 'Karne Garibaldi Case Study - 289% Growth in Table Turnover'}</h1>
        <p>{locale === 'es' ? 'Ve cómo Karne Garibaldi logró un aumento del 289% en rotación de mesas y 195% de crecimiento en reservas con la plataforma de RAY.' : 'See how Karne Garibaldi achieved 289% increase in table turnover and 195% growth in reservations with RAY\'s platform.'}</p>
      </div>

      <section className="relative min-h-screen bg-gradient-to-br from-orange-900 via-red-900 to-orange-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-900 via-red-800 to-orange-900"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(251,146,60,0.15),transparent_50%)]"></div>
          <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%2523ffffff%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%227%22 cy=%227%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
          <div className="w-full">
            <div className="mb-12">
              <Link 
                href={`/${locale}/case-studies`} 
                className="inline-flex items-center text-orange-200 hover:text-white transition-colors duration-300 text-sm font-medium"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                {locale === 'es' ? 'Volver a Casos de Estudio' : 'Back to Case Studies'}
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm rounded-full border border-orange-500/30">
                  <Award className="w-4 h-4 mr-2 text-orange-400" />
                  <span className="text-orange-400 text-sm font-bold uppercase tracking-wider">{locale === 'es' ? 'Historia de Éxito' : 'Success Story'}</span>
                </div>
                
                <div className="space-y-6">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[0.9] tracking-tight">
                    {locale === 'es' ? 'Karne Garibaldi Aumenta' : 'Karne Garibaldi Increases'}{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-400 to-orange-500">
                      {locale === 'es' ? 'Rotación de Mesas en 289%' : 'Table Turnover by 289%'}
                    </span>{' '}
                    {locale === 'es' ? 'y' : 'and'}{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                      {locale === 'es' ? 'Reservas en 195%' : 'Reservations by 195%'}
                    </span>
                  </h1>
                  
                  <p className="text-xl text-orange-100 leading-relaxed font-light">
                    {locale === 'es'
                      ? 'Usando las herramientas de reservas inteligentes y gestión de lista de espera de RAY, Karne Garibaldi optimizó su famoso modelo de servicio rápido y maximizó la capacidad del restaurante durante las horas pico.'
                      : 'Using RAY\'s smart booking and waitlist management, Karne Garibaldi optimized their famous fast-service model and maximized restaurant capacity during peak hours.'
                    }
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 backdrop-blur-sm rounded-2xl p-6 border border-orange-500/20">
                    <div className="flex items-center justify-center mb-3">
                      <TrendingUp className="w-8 h-8 text-orange-400" />
                    </div>
                    <div className="text-3xl font-black text-orange-400 mb-1">+289%</div>
                    <div className="text-orange-100 text-sm font-medium">{locale === 'es' ? 'Rotación de Mesas' : 'Table Turnover'}</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-2xl p-6 border border-green-500/20">
                    <div className="flex items-center justify-center mb-3">
                      <Users className="w-8 h-8 text-green-400" />
                    </div>
                    <div className="text-3xl font-black text-green-400 mb-1">+195%</div>
                    <div className="text-orange-100 text-sm font-medium">{locale === 'es' ? 'Reservas' : 'Reservations'}</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 backdrop-blur-sm rounded-2xl p-6 border border-orange-500/20">
                    <div className="flex items-center justify-center mb-3">
                      <Star className="w-8 h-8 text-orange-400 fill-current" />
                    </div>
                    <div className="text-3xl font-black text-orange-400 mb-1">4.7★</div>
                    <div className="text-orange-100 text-sm font-medium">{locale === 'es' ? 'Calificación Google' : 'Google Rating'}</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 via-red-500/20 to-orange-500/20 rounded-3xl blur-2xl"></div>
                  <div className="relative bg-gradient-to-br from-orange-950 to-red-900 rounded-3xl p-8 border border-orange-800">
                    <div className="text-center space-y-6">
                      <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                        289%
                      </div>
                      <div className="text-xl text-orange-100 font-medium">
                        {locale === 'es' ? 'Mejor Eficiencia de Mesas' : 'Better Table Efficiency'}
                      </div>
                      <div className="text-sm text-orange-300">
                        {locale === 'es' ? 'Capacidad maximizada' : 'Maximized capacity'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-orange-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-orange-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/images/success-stories/Chef_burguer.jpeg"
              alt="Karne Garibaldi bustling restaurant at peak capacity"
              width={1200}
              height={600}
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8">
              <p className="text-white text-lg font-medium">
                {locale === 'es' ? 'Karne Garibaldi – maximizando capacidad con gestión inteligente de reservas' : 'Karne Garibaldi – maximizing capacity with smart reservation management'}
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
                    ? 'Karne Garibaldi necesitaba optimizar su legendario modelo de servicio rápido durante las horas pico.'
                    : 'Karne Garibaldi needed to optimize their legendary fast-service model during peak hours.'
                  }
                </p>
                
                <p className="font-medium text-white">
                  {locale === 'es' ? 'La auditoría de RAY reveló:' : 'RAY\'s audit revealed:'}
                </p>
                
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>{locale === 'es' ? 'Largos tiempos de espera causando' : 'Long wait times causing'} <strong className="text-red-400">{locale === 'es' ? 'abandono de clientes' : 'customer walkouts'}</strong> {locale === 'es' ? 'durante el rush del almuerzo' : 'during lunch rush'}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>{locale === 'es' ? 'Gestión manual de lista de espera creando cuellos de botella' : 'Manual waitlist management creating bottlenecks'}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>{locale === 'es' ? 'El objetivo era' : 'The goal was to'} <strong className="text-green-400">{locale === 'es' ? 'maximizar la rotación de mesas' : 'maximize table turnover'}</strong> {locale === 'es' ? 'sin comprometer el servicio' : 'without compromising service'}</span>
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
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-white font-bold" />
                </div>
                <h3 className="text-xl font-black text-white mb-4">
                  {locale === 'es' ? 'Lista de Espera Inteligente' : 'Smart Waitlist'}
                </h3>
                <p className="text-gray-300">
                  {locale === 'es' ? 'Lista de espera digital automatizada con notificaciones por SMS' : 'Automated digital waitlist with SMS notifications'}
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-white font-bold" />
                </div>
                <h3 className="text-xl font-black text-white mb-4">
                  {locale === 'es' ? 'Sistema de Reservas' : 'Reservation System'}
                </h3>
                <p className="text-gray-300">
                  {locale === 'es' ? 'Optimización de franjas horarias para máxima eficiencia' : 'Time-slot optimization for maximum efficiency'}
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Eye className="w-8 h-8 text-white font-bold" />
                </div>
                <h3 className="text-xl font-black text-white mb-4">
                  {locale === 'es' ? 'Analítica de Capacidad' : 'Capacity Analytics'}
                </h3>
                <p className="text-gray-300">
                  {locale === 'es' ? 'Monitoreo y optimización de capacidad en tiempo real' : 'Real-time capacity monitoring and optimization'}
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
                    ? '"¡RAY nos ayudó a optimizar nuestro legendario modelo de servicio rápido! La rotación de mesas aumentó en '
                    : '"RAY helped us optimize our legendary fast-service model! Table turnover increased by '
                  }
                  <span className="text-orange-400 font-black">289%</span>, 
                  {locale === 'es'
                    ? ' y las reservas crecieron en '
                    : ' and reservations grew by '
                  }
                  <span className="text-green-400 font-black">195%</span>. 
                  {locale === 'es'
                    ? ' Ahora estamos sirviendo más clientes que nunca mientras mantenemos nuestra famosa calidad y velocidad. ¡La lista de espera digital eliminó los abandonos por completo!"'
                    : ' We\'re now serving more customers than ever while maintaining our famous quality and speed. The digital waitlist eliminated walkouts completely!"'
                  }
                </blockquote>
                
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <div className="font-black text-white text-lg">
                      {locale === 'es' ? 'Equipo de Gestión' : 'Management Team'}
                    </div>
                    <div className="text-gray-400">
                      Karne Garibaldi
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 backdrop-blur-sm rounded-3xl p-6 border border-orange-500/20 text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white font-bold" />
                  </div>
                </div>
                <div className="text-4xl font-black text-orange-400 mb-2">289%</div>
                <div className="text-white font-medium mb-1">{locale === 'es' ? 'Aumento' : 'Increase'}</div>
                <div className="text-sm text-gray-400">{locale === 'es' ? 'en rotación de mesas' : 'in table turnover'}</div>
              </div>

              <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-3xl p-6 border border-green-500/20 text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-white font-bold" />
                  </div>
                </div>
                <div className="text-4xl font-black text-green-400 mb-2">195%</div>
                <div className="text-white font-medium mb-1">{locale === 'es' ? 'Crecimiento' : 'Growth'}</div>
                <div className="text-sm text-gray-400">{locale === 'es' ? 'en reservas' : 'in reservations'}</div>
              </div>

              <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 backdrop-blur-sm rounded-3xl p-6 border border-orange-500/20 text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center">
                    <Star className="w-6 h-6 text-white font-bold fill-current" />
                  </div>
                </div>
                <div className="text-4xl font-black text-orange-400 mb-2">4.7★</div>
                <div className="text-white font-medium mb-1">{locale === 'es' ? 'Promedio' : 'Average'}</div>
                <div className="text-sm text-gray-400">{locale === 'es' ? 'calificación Google' : 'Google rating'}</div>
              </div>

              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-3xl p-6 border border-blue-500/20 text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                    <Eye className="w-6 h-6 text-white font-bold" />
                  </div>
                </div>
                <div className="text-4xl font-black text-blue-400 mb-2">0</div>
                <div className="text-white font-medium mb-1">{locale === 'es' ? 'Abandonos' : 'Walkouts'}</div>
                <div className="text-sm text-gray-400">{locale === 'es' ? 'durante horas pico' : 'during peak hours'}</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <CTASection locale={locale} />
    </>
  )
}

export default KarneGaribaldiCaseStudy

