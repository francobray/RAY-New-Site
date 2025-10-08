import React from 'react'
import { ArrowRight, TrendingUp } from 'lucide-react'
import Button from './shared/BaseButton'
import SectionHeader from './SectionHeader'
import { useTranslations } from '@/hooks/useTranslations'
import { type Locale } from '@/lib/i18n'

import { Calendar, MapPin, ShoppingCart } from 'lucide-react'

interface ProductSectionProps {
  locale: Locale
}

const ProductSection: React.FC<ProductSectionProps> = ({ locale }) => {
  const t = useTranslations(locale)
  
  const products = [
    {
      icon: ShoppingCart,
      name: t.PRODUCTS.ONLINE_ORDERS.NAME,
      description: t.PRODUCTS.ONLINE_ORDERS.DESCRIPTION,
      metric: t.PRODUCTS.ONLINE_ORDERS.METRIC,
      metricLabel: t.PRODUCTS.ONLINE_ORDERS.METRIC_LABEL,
      href: '/product/online-orders',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: Calendar,
      name: t.PRODUCTS.BOOKINGS.NAME,
      description: t.PRODUCTS.BOOKINGS.DESCRIPTION,
      metric: t.PRODUCTS.BOOKINGS.METRIC,
      metricLabel: t.PRODUCTS.BOOKINGS.METRIC_LABEL,
      href: '/product/bookings',
      gradient: 'from-ray-green to-green-600'
    },
    {
      icon: MapPin,
      name: t.PRODUCTS.WALK_INS.NAME,
      description: t.PRODUCTS.WALK_INS.DESCRIPTION,
      metric: t.PRODUCTS.WALK_INS.METRIC,
      metricLabel: t.PRODUCTS.WALK_INS.METRIC_LABEL,
      href: '/product/walk-ins',
      gradient: 'from-ray-blue to-blue-600'
    }
  ]
  
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(13,121,229,0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(111,191,115,0.05),transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader
          badge={{ icon: TrendingUp, text: t.HOMEPAGE.PRODUCTS_SECTION.BADGE }}
          title={
            <>
              {t.HEADLINES.THREE_PRODUCTS.split('.')[0]}.{' '}
              <span className="bg-gradient-to-r from-ray-blue to-ray-green bg-clip-text text-transparent">
                {t.HEADLINES.THREE_PRODUCTS.split('.')[1]}.
              </span>
            </>
          }
          subtitle={t.HOMEPAGE.PRODUCTS_SECTION.SUBTITLE}
          className="mb-20"
        />

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => {
            const IconComponent = product.icon
            return (
              <div key={index} className="group relative">
                {/* Subtle gradient border effect on hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-ray-blue/20 to-ray-green/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 h-full flex flex-col">
                  {/* Icon with gradient background */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 bg-gradient-to-r ${product.gradient} rounded-xl flex items-center justify-center shadow-md`}>
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    
                    {/* Metric badge */}
                    <div className="text-right">
                      <div className="text-2xl font-bold text-ray-green">{product.metric}</div>
                      <div className="text-xs text-ray-darkGray font-medium">{product.metricLabel}</div>
                    </div>
                  </div>

                  {/* Product name */}
                  <h3 className="text-2xl font-bold text-ray-dark-900 mb-4">
                    {product.name}
                  </h3>

                  {/* Description */}
                  <p className="text-ray-darkGray mb-8 text-base leading-relaxed flex-grow">
                    {product.description}
                  </p>

                  {/* CTA Button */}
                  <div className="mt-auto">
                    <Button
                      variant="primary"
                      size="md"
                      href={`/demo?utm_source=product-section&utm_medium=website&utm_campaign=site-cta-refresh-2025q4&utm_content=product-${product.name.toLowerCase().replace(' ', '-')}`}
                      className="w-full group/btn"
                      data-cta="demo"
                      data-analytics="product_section"
                      aria-label={`Get a free demo for ${product.name}`}
                    >
                      {t.CTA.GET_FREE_DEMO}
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-ray-darkGray mb-6">
            {t.HOMEPAGE.PRODUCTS_SECTION.BOTTOM_CTA}
          </p>
          <Button
            variant="primary"
            size="lg"
            href="/pricing"
            className="bg-gradient-to-r from-ray-blue to-ray-green hover:shadow-xl group"
            data-analytics="product_section_bottom"
            aria-label="View pricing and plans"
          >
            {t.HOMEPAGE.PRODUCTS_SECTION.VIEW_PRICING}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default ProductSection