import React from 'react'
import Image from 'next/image'
import { ArrowRight, Calendar, ShoppingCart, Globe, TrendingUp, Truck, Smartphone, Award } from 'lucide-react'
import Button from './BaseButton'
import SectionHeader from './SectionHeader'
import { useTranslations } from '@/hooks/useTranslations'
import { type Locale } from '@/lib/i18n'

interface ProductSectionProps {
  locale: Locale
}

const ProductSection: React.FC<ProductSectionProps> = ({ locale }) => {
  const t = useTranslations(locale)
  
  const products = [
    {
      icon: 'whatsapp',
      name: t.PRODUCTS.WHATSAPP_ORDERS.NAME,
      description: t.PRODUCTS.WHATSAPP_ORDERS.DESCRIPTION,
      metric: t.PRODUCTS.WHATSAPP_ORDERS.METRIC,
      metricLabel: t.PRODUCTS.WHATSAPP_ORDERS.METRIC_LABEL,
      href: '/product/whatsapp-delivery',
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: Globe,
      name: t.PRODUCTS.WEBSITE_BUILDER.NAME,
      description: t.PRODUCTS.WEBSITE_BUILDER.DESCRIPTION,
      metric: t.PRODUCTS.WEBSITE_BUILDER.METRIC,
      metricLabel: t.PRODUCTS.WEBSITE_BUILDER.METRIC_LABEL,
      href: '/product/restaurant-website-ai',
      gradient: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: TrendingUp,
      name: t.PRODUCTS.WALK_INS.NAME,
      description: t.PRODUCTS.WALK_INS.DESCRIPTION,
      metric: t.PRODUCTS.WALK_INS.METRIC,
      metricLabel: t.PRODUCTS.WALK_INS.METRIC_LABEL,
      href: '/product/walk-ins',
      gradient: 'from-pink-500 to-pink-600'
    },
    {
      icon: Truck,
      name: t.PRODUCTS.ZERO_COMMISSION_DELIVERY.NAME,
      description: t.PRODUCTS.ZERO_COMMISSION_DELIVERY.DESCRIPTION,
      metric: t.PRODUCTS.ZERO_COMMISSION_DELIVERY.METRIC,
      metricLabel: t.PRODUCTS.ZERO_COMMISSION_DELIVERY.METRIC_LABEL,
      href: '/product/zero-commission-delivery',
      gradient: 'from-orange-500 to-orange-600'
    },
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
      href: '/product/direct-bookings',
      gradient: 'from-ray-green to-green-700'
    },
    {
      icon: Smartphone,
      name: t.PRODUCTS.BRANDED_APPS.NAME,
      description: t.PRODUCTS.BRANDED_APPS.DESCRIPTION,
      metric: t.PRODUCTS.BRANDED_APPS.METRIC,
      metricLabel: t.PRODUCTS.BRANDED_APPS.METRIC_LABEL,
      href: '/product/branded-apps',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: Award,
      name: t.PRODUCTS.LOYALTY.NAME,
      description: t.PRODUCTS.LOYALTY.DESCRIPTION,
      metric: t.PRODUCTS.LOYALTY.METRIC,
      metricLabel: t.PRODUCTS.LOYALTY.METRIC_LABEL,
      href: '/product/loyalty',
      gradient: 'from-yellow-500 to-yellow-600'
    }
  ]
  
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden min-h-[800px]" style={{ contain: 'layout paint' }}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(13,121,229,0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(111,191,115,0.05),transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto" style={{ minHeight: '600px' }}>
          {products.map((product, index) => {
            const IconComponent = product.icon
            const isWhatsApp = product.icon === 'whatsapp'
            return (
              <div key={index} className="group relative">
                {/* Subtle gradient border effect on hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-ray-blue/20 to-ray-green/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 h-full flex flex-col">
                  {/* Icon with gradient background */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 ${isWhatsApp ? 'bg-gray-50' : `bg-gradient-to-r ${product.gradient}`} rounded-xl flex items-center justify-center shadow-md`}>
                      {isWhatsApp ? (
                        <Image 
                          src="/images/WhatsApp.svg.webp" 
                          alt="WhatsApp" 
                          className="w-8 h-8"
                          width={32}
                          height={32}
                          style={{ aspectRatio: '1/1' }}
                        />
                      ) : (
                        <IconComponent className="w-6 h-6 text-white" />
                      )}
                    </div>
                    
                    {/* Metric badge */}
                    <div className="text-right">
                      <div className="text-xl font-bold text-ray-green">{product.metric}</div>
                      <div className="text-xs text-ray-darkGray font-medium">{product.metricLabel}</div>
                    </div>
                  </div>

                  {/* Product name */}
                  <h3 className="text-lg font-bold text-ray-dark-900 mb-3">
                    {product.name}
                  </h3>

                  {/* Description */}
                  <p className="text-ray-darkGray mb-6 text-sm leading-relaxed flex-grow">
                    {product.description}
                  </p>

                  {/* CTA Button */}
                  <div className="mt-auto">
                    <Button
                      variant="primary"
                      size="sm"
                      href={`/${locale}${product.href}`}
                      className="w-full group/btn"
                      data-cta="learn-more"
                      data-analytics="product_section"
                      aria-label={`Learn more about ${product.name}`}
                    >
                      {t.CTA.LEARN_MORE}
                      <ArrowRight className="w-4 h-4 ml-2" />
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
            href={`/${locale}/pricing`}
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