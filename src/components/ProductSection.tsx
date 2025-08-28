import React from 'react'
import { MapPin, ShoppingCart, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Card from './Card'

const ProductSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-6">
            Two Growth Engines. One Powerful Platform.
          </h2>
          <p className="text-xl text-ray-darkGray max-w-3xl mx-auto">
            RAY offers two integrated solutions designed to grow restaurant revenue both offline and online. 
            Choose your focus or combine both for maximum impact.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Walk-Ins Card */}
          <Card className="text-center hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
            {/* Subtle gradient background animation */}
            <div className="absolute inset-0 bg-gradient-to-br from-ray-gradient-start/5 to-ray-gradient-mid/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-ray-gradient rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-8 h-8 text-ray-dark-900" />
              </div>
              
              <h3 className="text-2xl font-bold text-ray-dark-900 mb-4">
                Turn Searches Into Walk-Ins
              </h3>
              
              <p className="text-ray-darkGray mb-6 text-lg leading-relaxed">
                Your potential customers are searching right now. RAY ensures your restaurant appears at the top of Google Maps, 
                Apple Maps, and review platforms when hungry customers look for places to dine in your area.
              </p>
              
              <div className="mb-6 p-4 bg-ray-gradient-start/10 rounded-lg border border-ray-gradient-start/20">
                <div className="text-sm text-ray-dark-700 font-medium">
                  Average Results: <span className="text-ray-dark-900 font-bold">+34% walk-in traffic</span>
                </div>
              </div>
              
              <Link to="/product/walk-ins">
                <button className="inline-flex items-center justify-center w-full bg-ray-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-all duration-200 group/btn">
                  See How It Works
                  <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </button>
              </Link>
            </div>
          </Card>
          
          {/* Online Orders Card */}
          <Card className="text-center hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
            {/* Subtle gradient background animation */}
            <div className="absolute inset-0 bg-gradient-to-br from-ray-gradient-mid/5 to-ray-gradient-end/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-ray-gradient rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <ShoppingCart className="w-8 h-8 text-ray-dark-900" />
              </div>
              
              <h3 className="text-2xl font-bold text-ray-dark-900 mb-4">
                Grow Online Orders & Bookings
              </h3>
              
              <p className="text-ray-darkGray mb-6 text-lg leading-relaxed">
                Transform your digital presence into a revenue-generating machine. Our platform integrates with booking systems, 
                optimizes direct ordering, and provides insights to maximize every online customer touchpoint.
              </p>
              
              <div className="mb-6 p-4 bg-ray-gradient-start/10 rounded-lg border border-ray-gradient-start/20">
                <div className="text-sm text-ray-dark-700 font-medium">
                  Average Results: <span className="text-ray-dark-900 font-bold">+27% online orders</span>
                </div>
              </div>
              
              <Link to="/product/online-orders">
                <button className="inline-flex items-center justify-center w-full bg-ray-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-all duration-200 group/btn">
                  See How It Works
                  <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default ProductSection