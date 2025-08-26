import React from 'react'
import { MapPin, Star, Users } from 'lucide-react'
import Card from './Card'

const features = [
  {
    icon: MapPin,
    title: 'Local SEO Optimization',
    description: 'Dominate local search results and get found by hungry customers in your area.',
    benefits: ['Google My Business optimization', 'Local keyword targeting', 'Citation building']
  },
  {
    icon: Star,
    title: 'Online Reputation Management',
    description: 'Build trust and credibility with automated review management and response systems.',
    benefits: ['Review monitoring', 'Automated responses', 'Rating improvement strategies']
  },
  {
    icon: Users,
    title: 'Customer Engagement',
    description: 'Keep customers coming back with personalized marketing campaigns and loyalty programs.',
    benefits: ['Email marketing', 'SMS campaigns', 'Loyalty program management']
  }
]

const FeatureCards: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-4">
            Everything you need to grow your restaurant
          </h2>
          <p className="text-xl text-ray-darkGray max-w-3xl mx-auto">
            Our comprehensive platform combines local SEO, reputation management, 
            and customer engagement to drive real results for your business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <Card key={index} className="text-center hover:shadow-xl transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-ray-blue rounded-full mb-6">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-ray-dark-900 mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-ray-darkGray mb-6">
                  {feature.description}
                </p>
                
                <ul className="text-left space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-ray-dark-700">
                      <div className="w-2 h-2 bg-ray-green rounded-full mr-3 flex-shrink-0"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FeatureCards