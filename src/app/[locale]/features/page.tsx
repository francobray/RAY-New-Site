import { Metadata } from 'next'
import { MapPin, Star, Users } from 'lucide-react'
import Card from '@/components/Card'
import CTASection from '@/components/CTASection'
import { type Locale } from '@/lib/i18n'

interface FeaturesPageProps {
  params: { locale: string }
}

export const metadata: Metadata = {
  title: 'Features - Complete Restaurant Marketing Platform | RAY',
  description: 'Discover all RAY features: Local SEO, review management, customer engagement, analytics, email marketing, and mobile optimization. Everything you need to grow your restaurant.',
  openGraph: {
    title: 'Features - Complete Restaurant Marketing Platform | RAY',
    description: 'Discover all RAY features: Local SEO, review management, customer engagement, analytics, email marketing, and mobile optimization. Everything you need to grow your restaurant.',
    url: 'https://rayapp.io/features',
  },
  twitter: {
    title: 'Features - Complete Restaurant Marketing Platform | RAY',
    description: 'Discover all RAY features: Local SEO, review management, customer engagement, analytics, email marketing, and mobile optimization. Everything you need to grow your restaurant.',
  },
  alternates: {
    canonical: 'https://rayapp.io/features',
  },
}

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
    description: 'Build trust and credibility with automated review management and response.',
    details: [
      'Automated review requests to satisfied customers',
      'Professional review response management',
      'Reputation monitoring across platforms',
      'Review analytics and insights',
      'Crisis management for negative reviews'
    ]
  },
  {
    icon: Users,
    title: 'Customer Engagement',
    description: 'Build lasting relationships with your customers through targeted communication.',
    details: [
      'Automated email marketing campaigns',
      'Customer segmentation and targeting',
      'Loyalty program management',
      'Event and promotion announcements',
      'Customer feedback collection'
    ]
  }
]

export default function FeaturesPage({ params }: FeaturesPageProps) {
  return (
    <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-ray-dark-900 mb-6">
              Powerful Features for Restaurant Growth
            </h1>
            <p className="text-xl text-ray-darkGray max-w-3xl mx-auto">
              Everything you need to attract more customers, build your reputation, and grow your restaurant business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <Card key={index} className="h-full">
                  <div className="p-8">
                    <div className="w-12 h-12 bg-ray-blue rounded-lg flex items-center justify-center mb-6">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-ray-dark-900 mb-4">
                      {feature.title}
                    </h3>
                    
                    <p className="text-ray-darkGray mb-6">
                      {feature.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {feature.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-ray-green rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-sm text-ray-dark-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      
      <CTASection locale={params.locale as Locale} />
    </div>
  )
}
