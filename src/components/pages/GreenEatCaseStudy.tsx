'use client'

import React from 'react'
import dynamic from 'next/dynamic'
// Dynamically import CTASection to reduce initial bundle size
const CTASection = dynamic(() => import('../CTASection'), {
  ssr: true,
  loading: () => null,
})
import Link from 'next/link'
import { ArrowLeft, TrendingUp, MapPin, Users, Leaf } from 'lucide-react'
import Image from 'next/image'
import { type Locale } from '@/lib/i18n'

interface GreenEatCaseStudyProps {
  locale: Locale
}

const GreenEatCaseStudy: React.FC<GreenEatCaseStudyProps> = ({ locale }) => {
  return (
    <>

      {/* AI-friendly page summary and metrics box */}
      <div className="sr-only">
        <h1>Green Eat Case Study - Sustainable Restaurant Success with RAY Platform</h1>
        <p>See how Green Eat increased their eco-friendly restaurant's visibility and revenue using RAY's sustainable marketing platform.</p>
      </div>

      {/* Hero Section - Green Eat Brand Style */}
      <section className="relative min-h-screen bg-gradient-to-br from-green-600 via-emerald-600 to-teal-700 text-white overflow-hidden">
        {/* Background Elements - Natural, Organic, Sustainable */}
        <div className="absolute inset-0">
          {/* Gradient overlays inspired by Green Eat's natural aesthetic */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-500 via-emerald-500 to-teal-600 opacity-90"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(34,197,94,0.3),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(16,185,129,0.2),transparent_50%)]"></div>
          
          {/* Natural texture pattern */}
          <div className={`absolute inset-0 opacity-10 bg-[url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M30 30c0-11 9-20 20-20s20 9 20 20-9 20-20 20-20-9-20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")]`}></div>
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

            {/* Hero Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Text Content */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                    <Leaf className="w-4 h-4 mr-2" />
                    {locale === 'es' ? 'Caso de Estudio Sostenible' : 'Sustainable Case Study'}
                  </div>
                  
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                    <span className="block">Green Eat</span>
                    <span className="block text-green-200">Sustainable Success</span>
                  </h1>
                  
                  <p className="text-xl text-green-100 leading-relaxed max-w-2xl">
                    {locale === 'es' 
                      ? 'Descubre cómo Green Eat transformó su restaurante ecológico en un éxito local usando la plataforma de marketing sostenible de RAY.'
                      : 'Discover how Green Eat transformed their eco-friendly restaurant into a local success using RAY\'s sustainable marketing platform.'
                    }
                  </p>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="text-3xl font-bold text-white mb-2">+$18,000</div>
                    <div className="text-green-200 text-sm">
                      {locale === 'es' ? 'Ingresos mensuales adicionales' : 'Additional monthly revenue'}
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="text-3xl font-bold text-white mb-2">240%</div>
                    <div className="text-green-200 text-sm">
                      {locale === 'es' ? 'Crecimiento en clientes conscientes' : 'Growth in conscious customers'}
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <Link
                    href={`/${locale}/demo`}
                    className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-semibold rounded-xl hover:bg-green-50 transition-all duration-300 transform hover:scale-105 shadow-xl"
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
                    src="/images/success-stories/Green-Eat.jpg"
                    alt="Green Eat - Sustainable Restaurant Success"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                    quality={85}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                  
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  
                  {/* Floating Stats */}
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                    <div className="text-green-600 font-bold text-lg">+$18K</div>
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
            <div className="w-24 h-1 bg-green-500 mx-auto rounded-full"></div>
          </div>

          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="text-xl leading-relaxed mb-8">
              {locale === 'es' 
                ? 'Green Eat se enfocaba en ingredientes orgánicos y prácticas sostenibles, pero luchaba por comunicar su valor único a los clientes potenciales. Su presencia digital no reflejaba su compromiso ecológico, y competían contra restaurantes tradicionales sin destacar sus beneficios ambientales.'
                : 'Green Eat focused on organic ingredients and sustainable practices, but struggled to communicate their unique value to potential customers. Their digital presence didn\'t reflect their ecological commitment, and they competed against traditional restaurants without highlighting their environmental benefits.'
              }
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
                <h3 className="text-lg font-semibold text-red-800 mb-3">
                  {locale === 'es' ? 'Falta de Visibilidad Verde' : 'Lack of Green Visibility'}
                </h3>
                <p className="text-red-700">
                  {locale === 'es' 
                    ? 'Su mensaje sostenible no llegaba a clientes conscientes del medio ambiente.'
                    : 'Their sustainable message wasn\'t reaching environmentally conscious customers.'
                  }
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
                <h3 className="text-lg font-semibold text-red-800 mb-3">
                  {locale === 'es' ? 'Competencia Tradicional' : 'Traditional Competition'}
                </h3>
                <p className="text-red-700">
                  {locale === 'es' 
                    ? 'Competían en precio sin destacar su valor diferencial sostenible.'
                    : 'Competing on price without highlighting their sustainable differential value.'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              {locale === 'es' ? 'La Solución' : 'The Solution'}
            </h2>
            <div className="w-24 h-1 bg-green-500 mx-auto rounded-full"></div>
          </div>

          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="text-xl leading-relaxed mb-8">
              {locale === 'es' 
                ? 'RAY ayudó a Green Eat a posicionarse como el restaurante sostenible líder en su área, desarrollando estrategias de marketing que destacaban sus prácticas ecológicas y conectaban con clientes conscientes del medio ambiente.'
                : 'RAY helped Green Eat position themselves as the leading sustainable restaurant in their area, developing marketing strategies that highlighted their ecological practices and connected with environmentally conscious customers.'
              }
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white border border-green-200 p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Leaf className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {locale === 'es' ? 'Marketing Verde' : 'Green Marketing'}
                </h3>
                <p className="text-gray-600">
                  {locale === 'es' 
                    ? 'Campañas que destacan prácticas sostenibles y ingredientes orgánicos.'
                    : 'Campaigns highlighting sustainable practices and organic ingredients.'
                  }
                </p>
              </div>

              <div className="bg-white border border-green-200 p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {locale === 'es' ? 'Comunidad Consciente' : 'Conscious Community'}
                </h3>
                <p className="text-gray-600">
                  {locale === 'es' 
                    ? 'Construcción de una comunidad de clientes comprometidos con la sostenibilidad.'
                    : 'Building a community of customers committed to sustainability.'
                  }
                </p>
              </div>

              <div className="bg-white border border-green-200 p-6 rounded-xl shadow-xl">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {locale === 'es' ? 'SEO Local Verde' : 'Local Green SEO'}
                </h3>
                <p className="text-gray-600">
                  {locale === 'es' 
                    ? 'Optimización para búsquedas relacionadas con restaurantes ecológicos locales.'
                    : 'Optimization for searches related to local eco-friendly restaurants.'
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
            <div className="w-24 h-1 bg-green-500 mx-auto rounded-full"></div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6 bg-green-50 rounded-2xl">
              <div className="text-xl sm:text-2xl font-bold text-green-600 mb-2">+$18K</div>
              <div className="text-sm text-gray-600 leading-tight">
                {locale === 'es' ? 'Ingresos mensuales adicionales' : 'Additional monthly revenue'}
              </div>
            </div>

            <div className="text-center p-6 bg-green-50 rounded-2xl">
              <div className="text-xl sm:text-2xl font-bold text-green-600 mb-2">240%</div>
              <div className="text-sm text-gray-600 leading-tight">
                {locale === 'es' ? 'Crecimiento en clientes conscientes' : 'Growth in conscious customers'}
              </div>
            </div>

            <div className="text-center p-6 bg-green-50 rounded-2xl">
              <div className="text-xl sm:text-2xl font-bold text-green-600 mb-2">85%</div>
              <div className="text-sm text-gray-600 leading-tight">
                {locale === 'es' ? 'Mejora en visibilidad verde' : 'Improvement in green visibility'}
              </div>
            </div>

            <div className="text-center p-6 bg-green-50 rounded-2xl">
              <div className="text-xl sm:text-2xl font-bold text-green-600 mb-2">4x</div>
              <div className="text-sm text-gray-600 leading-tight">
                {locale === 'es' ? 'ROI en marketing sostenible' : 'Sustainable marketing ROI'}
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="bg-gray-50 rounded-2xl p-8 text-center">
            <blockquote className="text-2xl font-medium text-gray-900 mb-6 italic">
              "{locale === 'es' 
                ? 'RAY nos ayudó a conectar con nuestra audiencia ideal. Ahora los clientes conscientes del medio ambiente nos encuentran fácilmente y valoran nuestro compromiso con la sostenibilidad.'
                : 'RAY helped us connect with our ideal audience. Now environmentally conscious customers find us easily and value our commitment to sustainability.'
              }"
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">Green Eat</div>
                <div className="text-gray-600">
                  {locale === 'es' ? 'Restaurante Sostenible' : 'Sustainable Restaurant'}
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

export default GreenEatCaseStudy
