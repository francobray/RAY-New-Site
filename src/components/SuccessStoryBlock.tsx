'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { type Locale } from '@/lib/i18n'

interface SuccessStoryBlockProps {
  locale: Locale
}

const SuccessStoryBlock: React.FC<SuccessStoryBlockProps> = ({ locale }) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Left side - Content */}
            <div className="flex flex-col justify-between">
              <div>
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                      Franco Yametti
                    </h2>
                    <p className="text-lg text-gray-600">
                      CEO - Chimba Miami
                    </p>
                  </div>
                  <Link
                    href={`/${locale}/case-studies/chimba-miami`}
                    className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 text-sm font-medium"
                  >
                    {locale === 'es' ? 'Ver historia completa >' : 'See full story >'}
                  </Link>
                </div>

                {/* Quote */}
                <blockquote className="text-lg text-gray-600 mb-8 italic">
                  "{locale === 'es' ? 'RAY es esencial para tener éxito online como restaurante independiente hoy en día.' : 'RAY is essential for independent restaurants to succeed online today.'}"
                </blockquote>

                {/* Statistics */}
                <div className="space-y-6">
                  <div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">
                      215%
                    </div>
                    <div className="text-sm text-gray-600">
                      {locale === 'es' ? 'Crecimiento de ventas después de cambiar a RAY' : 'Sales growth after switching to RAY'}
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">
                      {locale === 'es' ? 'increase in Google Maps directions' : 'increase in Google Maps directions'}
                    </div>
                    <div className="text-sm text-gray-600">
                      {locale === 'es' ? 'Mejora en visibilidad local' : 'Improvement in local visibility'}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image
                  src="/images/success-stories/Chimba_Miami_Celebrating.jpeg"
                  alt="Franco Yametti - Chimba Miami"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                
                {/* Bottom overlay with story link */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <Link
                    href={`/${locale}/case-studies/chimba-miami`}
                    className="bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-lg hover:bg-white transition-all duration-200"
                  >
                    <span className="text-sm font-medium">
                      {locale === 'es' ? 'Ver la historia Chimba Miami' : 'See the Chimba Miami story'}
                    </span>
                  </Link>

                  {/* Play button */}
                  <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-200">
                    <ChevronRight className="w-6 h-6 text-white ml-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="border-t border-gray-200 px-8 py-4">
            <div className="flex justify-between items-center">
              <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200">
                <ChevronLeft className="w-5 h-5" />
                <span className="text-sm">
                  {locale === 'es' ? 'Anterior Chef Burger' : 'Previous Chef Burger'}
                </span>
              </button>

              <div className="flex space-x-2">
                <div className="w-2 h-2 rounded-full bg-gray-900"></div>
                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              </div>

              <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200">
                <span className="text-sm">
                  {locale === 'es' ? 'Siguiente Temple Craft Wynwood' : 'Next Temple Craft Wynwood'}
                </span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SuccessStoryBlock



















