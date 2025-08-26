import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Check } from 'lucide-react'
import Card from '../components/Card'
import Button from '../components/Button'
import CTASection from '../components/CTASection'

const plans = [
  {
    name: 'Walk-ins Plan',
    price: '$299',
    period: 'per month',
    description: 'Perfect for single-location restaurants looking to increase foot traffic and online presence.',
    features: [
      'Google My Business optimization',
      'Local SEO optimization',
      'Review monitoring and responses',
      'Basic email marketing (up to 1,000 contacts)',
      'Monthly performance reports',
      'Phone support',
      'Citation building (25 directories)'
    ],
    popular: true
  },
  {
    name: 'Agency Add-on',
    price: '$199',
    period: 'per additional location',
    description: 'Scale your marketing efforts across multiple restaurant locations with our agency-level tools.',
    features: [
      'Everything in Walk-ins Plan',
      'Multi-location dashboard',
      'Advanced analytics and reporting',
      'Custom email campaigns',
      'SMS marketing capabilities',
      'Priority support',
      'Dedicated account manager',
      'White-label reporting'
    ],
    popular: false
  }
]

const Pricing: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Pricing - RAY Restaurant Marketing Plans</title>
        <meta name="description" content="Choose the perfect RAY marketing plan for your restaurant. Walk-ins Plan for single locations, Agency Add-on for multi-location restaurants." />
        <meta property="og:title" content="Pricing - RAY Restaurant Marketing Plans" />
        <meta property="og:description" content="Choose the perfect RAY marketing plan for your restaurant. Walk-ins Plan for single locations, Agency Add-on for multi-location restaurants." />
        <meta property="og:url" content="https://rayrestaurant.com/pricing" />
        <meta name="twitter:title" content="Pricing - RAY Restaurant Marketing Plans" />
        <meta name="twitter:description" content="Choose the perfect RAY marketing plan for your restaurant. Walk-ins Plan for single locations, Agency Add-on for multi-location restaurants." />
        <link rel="canonical" href="https://rayrestaurant.com/pricing" />
      </Helmet>
      
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-ray-dark-900 mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-ray-darkGray max-w-3xl mx-auto">
              Choose the plan that fits your restaurant's needs. No hidden fees, 
              no long-term contracts. Cancel anytime.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'ring-2 ring-ray-blue' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-ray-blue text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-ray-dark-900 mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-ray-dark-900">
                      {plan.price}
                    </span>
                    <span className="text-ray-darkGray ml-2">
                      {plan.period}
                    </span>
                  </div>
                  <p className="text-ray-darkGray">
                    {plan.description}
                  </p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-ray-green mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-ray-dark-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={plan.popular ? 'primary' : 'secondary'}
                  className="w-full"
                  onClick={() => console.log(`Selected ${plan.name}`)}
                >
                  Get Started
                </Button>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <h2 className="text-2xl font-bold text-ray-dark-900 mb-4">
              Not sure which plan is right for you?
            </h2>
            <p className="text-ray-darkGray mb-6">
              Get a free restaurant scan to see what opportunities we can identify for your business.
            </p>
            <Button 
              variant="ghost"
              onClick={() => console.log('Talk to expert')}
            >
              Talk to an Expert
            </Button>
          </div>
        </div>
      </div>
      
      <CTASection />
    </>
  )
}

export default Pricing