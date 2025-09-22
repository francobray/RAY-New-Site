import React from 'react'
import { Helmet } from 'react-helmet-async'
import { MapPin, Star, Users, BarChart3, Mail, Smartphone } from 'lucide-react'
import Card from '../components/Card'
import CTASection from '../components/CTASection'

const features = [
  {
    icon: MapPin,
    title: 'Local SEO Optimization',
    description: 'Dominate local search results and get found by hungry customers in your area.',
    details: [
      'Google My Business optimization and management',
      'Local keyword research and targeting',
      'Citation building across 50+ directories',
      'Local schema markup implementation',
      'Competitor analysis and monitoring'
    ]
  },
  {
    icon: Star,
    title: 'Online Reputation Management',
    description: 'Build trust and credibility with automated review management and response systems.',
    details: [
      'Real-time review monitoring across all platforms',
      'Automated review response templates',
      'Review generation campaigns',
      'Negative review mitigation strategies',
      'Reputation score tracking and reporting'
    ]
  },
  {
    icon: Users,
    title: 'Customer Engagement',
    description: 'Keep customers coming back with personalized marketing campaigns and loyalty programs.',
    details: [
      'Email marketing automation',
      'SMS campaign management',
      'Loyalty program setup and management',
      'Customer segmentation and targeting',
      'Personalized offers and promotions'
    ]
  },
  {
    icon: BarChart3,
    title: 'Analytics & Reporting',
    description: 'Track your progress with detailed analytics and actionable insights.',
    details: [
      'Revenue tracking and attribution',
      'Customer acquisition metrics',
      'Review sentiment analysis',
      'Local search performance monitoring',
      'Custom dashboard and reporting'
    ]
  },
  {
    icon: Mail,
    title: 'Email Marketing',
    description: 'Engage customers with targeted email campaigns that drive repeat visits.',
    details: [
      'Automated welcome series',
      'Birthday and anniversary campaigns',
      'Seasonal promotion emails',
      'Event and special offer announcements',
      'A/B testing and optimization'
    ]
  },
  {
    icon: Smartphone,
    title: 'Mobile Optimization',
    description: 'Ensure your restaurant is easily discoverable and accessible on mobile devices.',
    details: [
      'Mobile-first website optimization',
      'Click-to-call and directions integration',
      'Mobile review management',
      'SMS marketing campaigns',
      'Mobile app integration support'
    ]
  }
]

const Features: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Features - RAY Restaurant Marketing Platform</title>
        <meta name="description" content="Discover RAY's comprehensive restaurant marketing features: Local SEO, Online Reputation Management, Customer Engagement, and more." />
        <meta property="og:title" content="Features - RAY Restaurant Marketing Platform" />
        <meta property="og:description" content="Discover RAY's comprehensive restaurant marketing features: Local SEO, Online Reputation Management, Customer Engagement, and more." />
        <meta property="og:url" content="https://rayrestaurant.com/features" />
        <meta name="twitter:title" content="Features - RAY Restaurant Marketing Platform" />
        <meta name="twitter:description" content="Discover RAY's comprehensive restaurant marketing features: Local SEO, Online Reputation Management, Customer Engagement, and more." />
        <link rel="canonical" href="https://rayrestaurant.com/features" />
      </Helmet>
      
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-ray-dark-900 mb-6">
              Powerful Features for Restaurant Growth
            </h1>
            <p className="text-xl text-ray-darkGray max-w-3xl mx-auto">
              Everything you need to attract more customers, build your reputation, 
              and increase revenue - all in one comprehensive platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-ray-blue rounded-lg mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-ray-dark-900 mb-3">
                    {feature.title}
                  </h3>
                  
                  <p className="text-ray-darkGray mb-4">
                    {feature.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start text-sm text-ray-dark-700">
                        <div className="w-1.5 h-1.5 bg-ray-green rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
      
      <CTASection />
    </>
  )
}

export default Features