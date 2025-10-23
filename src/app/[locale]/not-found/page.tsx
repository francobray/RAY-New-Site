'use client'

import Link from 'next/link'
import { ArrowLeft, Home, Search, Mail, Phone, Globe } from 'lucide-react'
import { type Locale } from '@/lib/i18n'

interface NotFoundPageProps {
  params: { locale: Locale }
}

export default function NotFoundPage({ params }: NotFoundPageProps) {
  const locale = params.locale || 'es'
  
  const isSpanish = locale === 'es'
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full text-center">
        {/* 404 Animation */}
        <div className="mb-12">
          <div className="relative inline-block">
            <h1 className="text-9xl sm:text-[12rem] font-black text-ray-blue opacity-20 select-none">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 bg-gradient-to-br from-ray-blue to-blue-600 rounded-full flex items-center justify-center animate-pulse">
                <Search className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            {isSpanish ? '¡Ups! Página No Encontrada' : 'Oops! Page Not Found'}
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            {isSpanish 
              ? 'La página que buscas parece haber desaparecido en el vacío digital. ¡No te preocupes, incluso los mejores restaurantes a veces cambian su menú!'
              : 'The page you\'re looking for seems to have vanished into the digital void. Don\'t worry, even the best restaurants sometimes change their menu!'
            }
          </p>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Link href={`/${locale}`} className="group">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-gray-200 h-full">
              <div className="w-16 h-16 bg-gradient-to-br from-ray-blue to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Home className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3 text-lg leading-tight">
                {isSpanish ? 'Ir al Inicio' : 'Go Home'}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {isSpanish ? 'Volver a nuestra página principal' : 'Return to our homepage'}
              </p>
            </div>
          </Link>

          <Link href={`/${locale}/solutions`} className="group">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-gray-200 h-full">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3 text-lg leading-tight">
                {isSpanish ? 'Explorar Soluciones' : 'Explore Solutions'}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {isSpanish ? 'Descubre nuestras 8 soluciones' : 'Discover our 8 solutions'}
              </p>
            </div>
          </Link>

          <Link href={`/${locale}/contact`} className="group">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-gray-200 h-full">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3 text-lg leading-tight">
                {isSpanish ? 'Contáctanos' : 'Contact Us'}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {isSpanish ? 'Ponte en contacto con nuestro equipo' : 'Get in touch with our team'}
              </p>
            </div>
          </Link>

          <Link href={`/${locale}/demo`} className="group">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-gray-200 h-full">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3 text-lg leading-tight">
                {isSpanish ? 'Reservar Demo' : 'Book Demo'}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {isSpanish ? 'Ve RAY en acción' : 'See RAY in action'}
              </p>
            </div>
          </Link>
        </div>

        {/* Popular Links */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            {isSpanish ? 'Páginas Populares' : 'Popular Pages'}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href={`/${locale}/pricing`} className="text-ray-blue hover:text-blue-600 font-medium transition-colors">
              {isSpanish ? 'Planes de Precios' : 'Pricing Plans'}
            </Link>
            <Link href={`/${locale}/case-studies`} className="text-ray-blue hover:text-blue-600 font-medium transition-colors">
              {isSpanish ? 'Historias de Éxito' : 'Success Stories'}
            </Link>
            <Link href={`/${locale}/product/branded-apps`} className="text-ray-blue hover:text-blue-600 font-medium transition-colors">
              {isSpanish ? 'Apps con Marca' : 'Branded Apps'}
            </Link>
            <Link href={`/${locale}/product/online-orders`} className="text-ray-blue hover:text-blue-600 font-medium transition-colors">
              {isSpanish ? 'Pedidos Online' : 'Online Orders'}
            </Link>
            <Link href={`/${locale}/product/loyalty`} className="text-ray-blue hover:text-blue-600 font-medium transition-colors">
              {isSpanish ? 'Programa de Lealtad' : 'Loyalty Program'}
            </Link>
            <Link href={`/${locale}/about`} className="text-ray-blue hover:text-blue-600 font-medium transition-colors">
              {isSpanish ? 'Acerca de RAY' : 'About RAY'}
            </Link>
          </div>
        </div>

        {/* Language Toggle */}
        <div className="mt-8 flex justify-center">
          <div className="flex items-center space-x-4 bg-white rounded-xl p-4 shadow-lg border border-gray-200">
            <Globe className="w-5 h-5 text-gray-500" />
            <span className="text-gray-600 font-medium">
              {isSpanish ? 'Cambiar idioma:' : 'Change language:'}
            </span>
            <Link 
              href={isSpanish ? '/en' : '/es'} 
              className="px-4 py-2 bg-ray-blue text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
            >
              {isSpanish ? 'English' : 'Español'}
            </Link>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-8">
          <button 
            onClick={() => window.history.back()}
            className="inline-flex items-center px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-xl transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {isSpanish ? 'Volver' : 'Go Back'}
          </button>
        </div>
      </div>
    </div>
  )
}
