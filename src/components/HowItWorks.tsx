import React from 'react'
import { Search, Target, TrendingUp } from 'lucide-react'

const steps = [
  {
    icon: Search,
    title: 'Scan & Analyze',
    description: 'We analyze your current online presence and identify opportunities for growth.',
    step: '01'
  },
  {
    icon: Target,
    title: 'Optimize & Execute',
    description: 'Our team implements proven strategies to improve your local visibility and reputation.',
    step: '02'
  },
  {
    icon: TrendingUp,
    title: 'Track & Grow',
    description: 'Monitor your progress with detailed analytics and watch your revenue increase.',
    step: '03'
  }
]

const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-4">
            How RAY works for your restaurant
          </h2>
          <p className="text-xl text-ray-darkGray max-w-3xl mx-auto">
            Our proven 3-step process helps restaurants increase revenue 
            through strategic local marketing and customer engagement.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <div key={index} className="relative text-center">
                {/* Step number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-ray-gradient-start rounded-full flex items-center justify-center text-ray-dark-900 font-bold text-lg">
                  {step.step}
                </div>
                
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-20 h-20 bg-ray-blue rounded-full mb-6">
                  <IconComponent className="w-10 h-10 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-ray-dark-900 mb-4">
                  {step.title}
                </h3>
                
                <p className="text-ray-darkGray">
                  {step.description}
                </p>
                
                {/* Connector line (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-ray-gradient-start to-ray-gradient-mid transform -translate-x-1/2"></div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks