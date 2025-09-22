import React from 'react'
import { ArrowRight, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeader from './SectionHeader'
import { COPY } from '../constants/copy'

import { Calendar, MapPin, ShoppingCart } from 'lucide-react'

const products = [
  {
    icon: Calendar,
    name: COPY.PRODUCTS.BOOKINGS.NAME,
    description: COPY.PRODUCTS.BOOKINGS.DESCRIPTION,
    metric: COPY.PRODUCTS.BOOKINGS.METRIC,
    metricLabel: COPY.PRODUCTS.BOOKINGS.METRIC_LABEL,
    href: '/product/bookings',
    gradient: 'from-ray-green to-green-600'
  },
  {
    icon: MapPin,
    name: COPY.PRODUCTS.WALK_INS.NAME,
    description: COPY.PRODUCTS.WALK_INS.DESCRIPTION,
    metric: COPY.PRODUCTS.WALK_INS.METRIC,
    metricLabel: COPY.PRODUCTS.WALK_INS.METRIC_LABEL,
    href: '/product/walk-ins',
    gradient: 'from-ray-blue to-blue-600'
  },
  {
    icon: ShoppingCart,
    name: COPY.PRODUCTS.ONLINE_ORDERS.NAME,
    description: COPY.PRODUCTS.ONLINE_ORDERS.DESCRIPTION,
    metric: COPY.PRODUCTS.ONLINE_ORDERS.METRIC,
    metricLabel: COPY.PRODUCTS.ONLINE_ORDERS.METRIC_LABEL,
    href: '/product/online-orders',
    gradient: 'from-purple-500 to-purple-600'
  }
]
const ProductSection: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(13,121,229,0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(111,191,115,0.05),transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader
          badge={{ icon: TrendingUp, text: 'Proven Revenue Growth Platform' }}
          title={
            <>
              {COPY.HEADLINES.THREE_PRODUCTS.split('.')[0]}.{' '}
              <span className="bg-gradient-to-r from-ray-blue to-ray-green bg-clip-text text-transparent">
                One Powerful Platform.
              </span>
            </>
          }
          subtitle="RAY offers three integrated solutions designed to grow restaurant revenue both offline and online. Choose your focus or combine all for maximum impact."
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
                    <div className={`w-14 h-14 bg-gradient-to-r ${product.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md`}>
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
                  <Link to={product.href} className="block mt-auto">
                    <button className="w-full bg-ray-blue text-white px-6 py-4 rounded-xl font-semibold hover:bg-blue-600 transition-all duration-300 flex items-center justify-center group/btn shadow-md hover:shadow-lg hover:scale-105">
                      Learn More
                      <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-ray-darkGray mb-6">
            Ready to see how RAY can transform your restaurant?
          </p>
          <Link to="/pricing" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-ray-blue to-ray-green text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 group">
            View Pricing & Plans
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ProductSection