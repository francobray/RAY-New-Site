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
            The RAY Platform: Two Powerful Growth Engines
          </h2>
          <p className="text-xl text-ray-darkGray max-w-3xl mx-auto">
            Our AI-powered platform drives measurable revenue growth through two proven channels. 
            Choose your focus or combine both for maximum impact.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Walk-Ins Card */}
          <Card className="text-center hover:shadow-xl transition-all duration-300 group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-ray-gradient rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
              <MapPin className="w-8 h-8 text-ray-dark-900" />
            </div>
            
            <h3 className="text-2xl font-bold text-ray-dark-900 mb-4">
              Walk-Ins
            </h3>
            
            <p className="text-ray-darkGray mb-6 text-lg leading-relaxed">
              Your potential customers are searching right now. RAY ensures your restaurant is at the top of search results in your area on Google Maps, Apple Maps, and key review platforms.
            </p>
            
            <div className="mb-6 p-4 bg-ray-gradient-start rounded-lg">
              <div className="text-sm text-ray-dark-700 font-medium">
                Average Results: <span className="text-ray-dark-900 font-bold">+34% walk-in traffic</span>
              </div>
            </div>
            
            <Link to="/product/walk-ins">
              <button className="inline-flex items-center justify-center w-full bg-ray-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-200 group">
                Learn More
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </Link>
          </Card>
          
          {/* Online Orders Card */}
          <Card className="text-center hover:shadow-xl transition-all duration-300 group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-ray-gradient rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
              <ShoppingCart className="w-8 h-8 text-ray-dark-900" />
            </div>
            
            <h3 className="text-2xl font-bold text-ray-dark-900 mb-4">
              Online Orders
            </h3>
            
            <p className="text-ray-darkGray mb-6 text-lg leading-relaxed">
              Our proven design drives more traffic, ranks in the top 90% for SEO, is AI-optimized, and fully mobile-friendly. All delivered within the first two weeks of setting up your RAY account.
            </p>
            
            <div className="mb-6 p-4 bg-ray-gradient-start rounded-lg">
              <div className="text-sm text-ray-dark-700 font-medium">
                Average Results: <span className="text-ray-dark-900 font-bold">+27% online orders</span>
              </div>
            </div>
            
            <Link to="/product/online-orders">
              <button className="inline-flex items-center justify-center w-full bg-ray-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-200 group">
                Learn More
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </Link>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default ProductSection