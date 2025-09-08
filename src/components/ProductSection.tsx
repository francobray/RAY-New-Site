import React from 'react'
import { MapPin, ShoppingCart, ArrowRight, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'

const ProductSection: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(13,121,229,0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(111,191,115,0.05),transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-ray-blue/10 rounded-full text-ray-blue text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4 mr-2" />
            Proven Revenue Growth Platform
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-ray-dark-900 mb-6 leading-tight">
            Two Growth Engines.{' '}
            <span className="bg-gradient-to-r from-ray-blue to-ray-green bg-clip-text text-transparent">
              One Powerful Platform.
            </span>
          </h2>
          <p className="text-xl text-ray-darkGray max-w-3xl mx-auto leading-relaxed">
            RAY offers two integrated solutions designed to grow restaurant revenue both offline and online. 
            Choose your focus or combine both for maximum impact.
          </p>
        </div>

        {/* Product Cards - New Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          {/* Walk-Ins Card */}
          <div className="group relative">
            {/* Card Background with Gradient Border */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-ray-blue to-ray-green rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            
            <div className="relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100">
              {/* Header Section */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="w-14 h-14 bg-ray-blue rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-ray-dark-900 mb-3">
                    Turn Searches Into Walk-Ins
                  </h3>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-ray-green">+47%</div>
                  <div className="text-sm text-ray-darkGray">avg. increase</div>
                </div>
              </div>

              {/* Description */}
              <p className="text-ray-darkGray mb-6 text-lg leading-relaxed">
                Your potential customers are searching right now. RAY ensures your restaurant appears at the top of Google Maps, 
                Apple Maps, and review platforms when hungry customers look for places to dine in your area.
              </p>

              {/* Features List */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center text-ray-dark-700">
                  <div className="w-2 h-2 bg-ray-green rounded-full mr-3"></div>
                  <span className="text-sm font-medium">Dominate Google Maps & local search</span>
                </div>
                <div className="flex items-center text-ray-dark-700">
                  <div className="w-2 h-2 bg-ray-green rounded-full mr-3"></div>
                  <span className="text-sm font-medium">AI-powered reputation management</span>
                </div>
                <div className="flex items-center text-ray-dark-700">
                  <div className="w-2 h-2 bg-ray-green rounded-full mr-3"></div>
                  <span className="text-sm font-medium">Automated customer engagement</span>
                </div>
              </div>

              {/* CTA */}
              <Link to="/product/walk-ins" className="block">
                <button className="w-full bg-ray-blue text-white px-6 py-4 rounded-xl font-semibold hover:bg-blue-600 transition-all duration-300 flex items-center justify-center group/btn shadow-lg hover:shadow-xl">
                  Learn More About Walk-Ins
                  <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </Link>
            </div>
          </div>

          {/* Online Orders Card */}
          <div className="group relative">
            {/* Card Background with Gradient Border */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-ray-green to-ray-blue rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            
            <div className="relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100">
              {/* Header Section */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="w-14 h-14 bg-ray-blue rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <ShoppingCart className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-ray-dark-900 mb-3">
                    Grow Online Orders & Bookings
                  </h3>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-ray-green">+27%</div>
                  <div className="text-sm text-ray-darkGray">avg. increase</div>
                </div>
              </div>

              {/* Description */}
              <p className="text-ray-darkGray mb-6 text-lg leading-relaxed">
                Transform your digital presence into a revenue-generating machine. Our platform integrates with booking systems, 
                optimizes direct ordering, and provides insights to maximize every online customer touchpoint.
              </p>

              {/* Features List */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center text-ray-dark-700">
                  <div className="w-2 h-2 bg-ray-green rounded-full mr-3"></div>
                  <span className="text-sm font-medium">Revenue optimization tools</span>
                </div>
                <div className="flex items-center text-ray-dark-700">
                  <div className="w-2 h-2 bg-ray-green rounded-full mr-3"></div>
                  <span className="text-sm font-medium">Customer engagement automation</span>
                </div>
                <div className="flex items-center text-ray-dark-700">
                  <div className="w-2 h-2 bg-ray-green rounded-full mr-3"></div>
                  <span className="text-sm font-medium">Performance analytics & insights</span>
                </div>
              </div>

              {/* CTA */}
              <Link to="/product/online-orders" className="block">
                <button className="w-full bg-ray-blue text-white px-6 py-4 rounded-xl font-semibold hover:bg-blue-600 transition-all duration-300 flex items-center justify-center group/btn shadow-lg hover:shadow-xl">
                  Learn More About Online Orders
                  <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductSection