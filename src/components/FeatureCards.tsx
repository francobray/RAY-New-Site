import React from 'react'
import { MapPin, Target, TrendingUp } from 'lucide-react'

const features = [
  {
    icon: MapPin,
    title: 'Drive More Traffic',
    description: 'Capture more customers nearby and dominate local search results.',
    benefits: [
      'Capture more customers nearby',
      'Dominate Google Search',
      'Be discovered in AI recommendations'
    ]
  },
  {
    icon: Target,
    title: 'Convert Better',
    description: 'Turn searches into visits and orders with seamless customer experiences.',
    benefits: [
      'Turn searches into visits & orders',
      'Seamless online ordering*',
      'Mobile-first customer experiences*'
    ]
  },
  {
    icon: TrendingUp,
    title: 'Boost Revenue',
    description: 'Increase revenue through multiple channels and customer touchpoints.',
    benefits: [
      'More walk-ins & bookings',
      'Increase gift card sales',
      'Grow online orders & repeat visits'
    ]
  }
]

const FeatureCards: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(13,121,229,0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(111,191,115,0.05),transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-ray-blue/10 rounded-full text-ray-blue text-sm font-medium mb-6">
            <MapPin className="w-4 h-4 mr-2" />
            Complete Restaurant Growth Platform
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-4">
            Do you want to be the favorite local spot?
          </h2>
          <p className="text-xl text-ray-darkGray max-w-3xl mx-auto leading-relaxed">
            Ray platform makes your restaurant more visible, more trusted, and more profitable through a proven process used by over 1,000 customers worldwide.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div key={index} className="group relative">
                {/* Gradient border effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-ray-blue to-ray-green rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                
                <div className="relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 text-center border border-gray-100">
                {/* Icon with gradient background */}
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-ray-blue to-blue-600 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-7 h-7 text-white" aria-hidden="true" />
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-ray-dark-900 mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-ray-darkGray mb-6 text-lg leading-relaxed">
                  {feature.description}
                </p>
                
                <ul className="text-left space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start text-sm text-ray-dark-700 font-medium">
                      <div className="w-2 h-2 bg-ray-green rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
                </div>
              </div>
            )
          })}
        </div>
        
        {/* Footnote */}
        <div className="text-center bg-white rounded-2xl p-6 shadow-lg border border-gray-100 max-w-4xl mx-auto">
          <p className="text-sm text-ray-darkGray">
            * Online ordering, booking and deliveries and Mobile app available at the end of 2025 and beginning of 2026 respectively.
          </p>
        </div>
      </div>
    </section>
  )
}

export default FeatureCards