import React from 'react'
import { MapPin, Target, TrendingUp } from 'lucide-react'
import Button from './shared/BaseButton'

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
      'Seamless customer experiences',
      'Mobile-optimized visibility'
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
    <>
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-ray-blue/10 rounded-full text-ray-blue text-sm font-medium mb-6">
              <MapPin className="w-4 h-4 mr-2" />
              Complete Restaurant Growth Platform
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ray-dark-900 mb-6 leading-tight">
              How RAY Works
            </h2>
            <p className="text-lg sm:text-xl text-ray-darkGray max-w-4xl mx-auto leading-relaxed">
              RAY platform makes your restaurant more visible, more trusted, and more profitable through a proven platform used by over 1,000 restaurants worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div key={index} className="group relative">
                  {/* Gradient border effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 via-yellow-300 to-yellow-400 rounded-2xl opacity-0 group-hover:opacity-30 transition-all duration-300"></div>
                  
                  <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 md:p-8 text-center border border-gray-100 flex flex-col h-full group-hover:-translate-y-1">
                    {/* Icon with Promise gradient background */}
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 via-yellow-300 to-yellow-400 rounded-xl mb-6 group-hover:scale-105 transition-transform duration-300 shadow-md mx-auto">
                      <IconComponent className="w-8 h-8 text-ray-dark-900" aria-hidden="true" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl md:text-2xl font-bold text-ray-dark-900 mb-4 leading-tight">
                      {feature.title}
                    </h3>
                    
                    <p className="text-ray-darkGray mb-6 text-base md:text-lg leading-relaxed flex-grow">
                      {feature.description}
                    </p>
                    
                    <ul className="text-left space-y-3 mb-8">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start text-sm md:text-base text-ray-dark-700">
                          <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                    
                    {/* CTA Button with consistent sizing and Promise gradient */}
                    <div className="mt-auto">
                      <Button
                        variant="primary"
                        size="md"
                        className="w-full"
                        href="https://www.rayapp.io/demo?utm_source=website&utm_medium=cta&utm_campaign=feature_cards"
                        data-cta="demo"
                        data-analytics="feature_cards"
                        aria-label="Get a free demo"
                      >
                        Get a Free Demo
                      </Button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default FeatureCards