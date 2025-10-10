'use client'

import React from 'react'
import Image from 'next/image'
import { type Locale } from '@/lib/i18n'

interface ProductShowcaseProps {
  locale: Locale
}

const ProductShowcase: React.FC<ProductShowcaseProps> = ({ locale }) => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Title */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            {locale === 'es' 
              ? (
                <>
                  Dale a tu restaurante la misma{' '}
                  <span className="bg-gradient-to-r from-ray-blue to-ray-green bg-clip-text text-transparent">
                    tecnología
                  </span>{' '}
                  que las grandes marcas
                </>
              )
              : (
                <>
                  Give your restaurant the same{' '}
                  <span className="bg-gradient-to-r from-ray-blue to-ray-green bg-clip-text text-transparent">
                    tech
                  </span>{' '}
                  as the big brands
                </>
              )
            }
          </h2>
        </div>


        {/* Product Showcase Image */}
        <div className="flex justify-center items-center">
          <div className="relative w-full max-w-4xl mx-auto">
            <Image
              src="/images/homepage-product.png"
              alt={locale === 'es' 
                ? 'Plataforma de tecnología para restaurantes - App móvil, sitio web con IA y sistema de pedidos online' 
                : 'Restaurant technology platform - Mobile app, AI website and online ordering system'
              }
              width={621}
              height={414}
              className="rounded-2xl shadow-2xl mx-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductShowcase
