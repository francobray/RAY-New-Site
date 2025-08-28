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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-4">
            RAY makes you the favorite local spot
          </h2>
          <p className="text-xl text-ray-darkGray max-w-3xl mx-auto">
            The RAY platform makes your restaurant more visible, more trusted, and more profitable through a proven process used by over 1,000 customers worldwide.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center">
                {/* Icon with gradient background */}
                <div className="inline-flex items-center justify-center w-12 h-12 bg-ray-gradient rounded-lg mb-6">
                  <IconComponent className="w-6 h-6 text-ray-dark-900" aria-hidden="true" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-ray-dark-900 mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-ray-darkGray mb-6">
                  {feature.description}
                </p>
                
                <ul className="text-left space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start text-sm text-ray-dark-700">
                      <div className="w-2 h-2 bg-ray-green rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
        
        {/* Footnote */}
        <div className="text-center">
          <p className="text-sm text-ray-darkGray">
            * Online ordering, booking and deliveries and Mobile app available at the end of 2025 and beginning of 2026 respectively.
          </p>
        </div>
      </div>
    </section>
  )
}

export default FeatureCards