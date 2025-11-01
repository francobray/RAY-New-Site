'use client'

import React from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { ArrowLeft, TrendingUp, Users, Award, Fish } from 'lucide-react'
import Image from 'next/image'
import { type Locale } from '@/lib/i18n'

// Dynamically import CTASection to reduce initial bundle size
const CTASection = dynamic(() => import('../../shared/CTASection'), {
  ssr: true,
  loading: () => null,
})

interface PaperfishCaseStudyProps {
  locale: Locale
}

const PaperfishCaseStudy: React.FC<PaperfishCaseStudyProps> = ({ locale }) => {
  return (
    <>

      {/* AI-friendly page summary and metrics box */}
      <div className="sr-only">
        <h1>Paperfish Case Study - Sustainable Seafood Restaurant Success with RAY Platform</h1>
        <p>See how Paperfish increased their sustainable seafood restaurant's revenue and established themselves as the premier destination for eco-conscious seafood dining using RAY's comprehensive digital marketing platform.</p>
      </div>

      {/* Hero Section - Paperfish Brand Style */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-700 text-white overflow-hidden">
        {/* Background Elements - Fresh, Oceanic, Sustainable */}
        <div className="absolute inset-0">
          {/* Gradient overlays inspired by Paperfish's fresh ocean aesthetic */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-600 opacity-90"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(34,211,238,0.3),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(20,184,166,0.2),transparent_50%)]"></div>
          
          {/* Wave texture pattern */}
          <div className={`absolute inset-0 opacity-10 bg-[url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M0 30 Q15 20 30 30 T60 30 V40 Q45 30 30 40 T0 40 Z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")]`}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
          <div className="w-full">
            {/* Breadcrumb */}
            <div className="mb-12">
              <Link 
                href={`/${locale}/case-studies`} 
                className="inline-flex items-center text-cyan-200 hover:text-white transition-colors duration-300 text-sm font-medium"
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
                    <Fish className="w-4 h-4 mr-2" />
                    {locale === 'es' ? 'Caso de Estudio' : 'Case Study'}
                  </div>
                  
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                    <span className="block">Paperfish</span>
                    <span className="block text-cyan-200">Sustainable Seafood</span>
                  </h1>
                  
                  <p className="text-xl text-cyan-100 leading-relaxed max-w-2xl">
                    {locale === 'es' 
                      ? 'Descubre cómo Paperfish se convirtió en el referente de mariscos sostenibles con la plataforma de marketing de RAY, cuadruplicando reservas y capturando el mercado eco-consciente de alta gama.'
                      : 'Discover how Paperfish became the sustainable seafood reference with RAY\'s marketing platform, quadrupling bookings and capturing the high-end eco-conscious market.'
                    }
                  </p>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="text-3xl font-bold text-white mb-2">+$92,000</div>
                    <div className="text-cyan-200 text-sm">
                      {locale === 'es' ? 'Ingresos mensuales adicionales' : 'Additional monthly revenue'}
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="text-3xl font-bold text-white mb-2">385%</div>
                    <div className="text-cyan-200 text-sm">
                      {locale === 'es' ? 'Crecimiento en reservas' : 'Growth in bookings'}
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <Link
                    href={`/${locale}/demo`}
                    className="inline-flex items-center px-8 py-4 bg-white text-cyan-600 font-semibold rounded-xl hover:bg-cyan-50 transition-all duration-300 transform hover:scale-105 shadow-xl"
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
                    src="/images/success-stories/Paperfish.jpeg"
                    alt="Paperfish - Sustainable Seafood Restaurant Success"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  
                  {/* Floating Stats */}
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                    <div className="text-cyan-600 font-bold text-lg">+$92K</div>
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
            <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full"></div>
          </div>

          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="text-xl leading-relaxed mb-8">
              {locale === 'es' 
                ? 'Paperfish, un restaurante especializado en mariscos sostenibles y pescado de origen responsable, luchaba por comunicar su compromiso ambiental y diferenciarse en un mercado saturado. A pesar de ofrecer productos de máxima calidad y prácticas ecológicas ejemplares, no lograban atraer al público consciente del medio ambiente.'
                : 'Paperfish, a restaurant specializing in sustainable seafood and responsibly sourced fish, struggled to communicate their environmental commitment and differentiate in a saturated market. Despite offering top-quality products and exemplary eco-practices, they couldn\'t attract the environmentally conscious audience.'
              }
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">
                  {locale === 'es' ? 'Historia No Contada' : 'Untold Story'}
                </h3>
                <p className="text-blue-700">
                  {locale === 'es' 
                    ? 'Compromiso sostenible y prácticas responsables invisibles online.'
                    : 'Sustainable commitment and responsible practices invisible online.'
                  }
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">
                  {locale === 'es' ? 'Público Objetivo Perdido' : 'Missing Target Audience'}
                </h3>
                <p className="text-blue-700">
                  {locale === 'es' 
                    ? 'No llegaban a comensales eco-conscientes dispuestos a pagar premium.'
                    : 'Not reaching eco-conscious diners willing to pay premium prices.'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-cyan-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              {locale === 'es' ? 'La Solución' : 'The Solution'}
            </h2>
            <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full"></div>
          </div>

          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="text-xl leading-relaxed mb-8">
              {locale === 'es' 
                ? 'RAY desarrolló una estrategia centrada en storytelling ambiental y transparencia de origen. Implementamos contenido educativo sobre sostenibilidad marina, certificaciones destacadas, rastreabilidad de productos, y campañas dirigidas a consumidores eco-conscientes premium dispuestos a invertir en alimentación responsable.'
                : 'RAY developed a strategy focused on environmental storytelling and origin transparency. We implemented educational content about marine sustainability, highlighted certifications, product traceability, and campaigns targeting premium eco-conscious consumers willing to invest in responsible dining.'
              }
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white border border-cyan-200 p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                  <Fish className="w-6 h-6 text-cyan-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {locale === 'es' ? 'Storytelling Sostenible' : 'Sustainable Storytelling'}
                </h3>
                <p className="text-gray-600">
                  {locale === 'es' 
                    ? 'Contenido educativo sobre origen responsable y prácticas ecológicas.'
                    : 'Educational content about responsible sourcing and eco practices.'
                  }
                </p>
              </div>

              <div className="bg-white border border-cyan-200 p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-cyan-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {locale === 'es' ? 'Marketing Eco-Premium' : 'Eco-Premium Marketing'}
                </h3>
                <p className="text-gray-600">
                  {locale === 'es' 
                    ? 'Campañas dirigidas a consumidores conscientes de alta gama.'
                    : 'Campaigns targeting high-end conscious consumers.'
                  }
                </p>
              </div>

              <div className="bg-white border border-cyan-200 p-6 rounded-xl shadow-xl">
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-cyan-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {locale === 'es' ? 'Certificaciones Destacadas' : 'Highlighted Certifications'}
                </h3>
                <p className="text-gray-600">
                  {locale === 'es' 
                    ? 'Visibilidad de certificaciones sostenibles y rastreabilidad.'
                    : 'Visibility of sustainable certifications and traceability.'
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
            <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full"></div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6 bg-cyan-50 rounded-2xl">
              <div className="text-xl sm:text-2xl font-bold text-cyan-600 mb-2">+$92K</div>
              <div className="text-gray-600">
                {locale === 'es' ? 'Ingresos mensuales adicionales' : 'Additional monthly revenue'}
              </div>
            </div>

            <div className="text-center p-6 bg-cyan-50 rounded-2xl">
              <div className="text-xl sm:text-2xl font-bold text-cyan-600 mb-2">385%</div>
              <div className="text-gray-600">
                {locale === 'es' ? 'Crecimiento en reservas' : 'Growth in bookings'}
              </div>
            </div>

            <div className="text-center p-6 bg-cyan-50 rounded-2xl">
              <div className="text-xl sm:text-2xl font-bold text-cyan-600 mb-2">290%</div>
              <div className="text-gray-600">
                {locale === 'es' ? 'Aumento en búsquedas de marca' : 'Increase in brand searches'}
              </div>
            </div>

            <div className="text-center p-6 bg-cyan-50 rounded-2xl">
              <div className="text-xl sm:text-2xl font-bold text-cyan-600 mb-2">4.8★</div>
              <div className="text-gray-600">
                {locale === 'es' ? 'Calificación promedio' : 'Average rating'}
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="bg-gray-50 rounded-2xl p-8 text-center">
            <blockquote className="text-2xl font-medium text-gray-900 mb-6 italic">
              "{locale === 'es' 
                ? 'RAY nos ayudó a comunicar nuestra misión sostenible al público correcto. Ahora somos reconocidos como el líder en mariscos responsables y nuestros clientes valoran nuestro compromiso ambiental. Las reservas se cuadruplicaron.'
                : 'RAY helped us communicate our sustainable mission to the right audience. Now we are recognized as the leader in responsible seafood and our customers value our environmental commitment. Bookings quadrupled.'
              }"
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center">
                <Fish className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">Paperfish</div>
                <div className="text-gray-600">
                  {locale === 'es' ? 'Restaurante Mariscos Sostenibles' : 'Sustainable Seafood Restaurant'}
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

export default PaperfishCaseStudy

