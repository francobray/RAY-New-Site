import React from 'react'
import { Helmet } from 'react-helmet-async'
import { MapPin, Star, Users, TrendingUp, Eye, MessageSquare } from 'lucide-react'
import Card from '../../components/Card'
import Button from '../../components/Button'
import LazyImage from '../../components/LazyImage'
import HubSpotFormModal from '../../components/HubSpotFormModal'

const features = [
  {
    icon: Eye,
    title: 'Visibility',
    subtitle: 'Dominate Local Search',
    description: 'Get found by hungry customers when they search for restaurants near them.',
    details: [
      'Google Maps optimization and ranking',
      'Local SEO for "restaurants near me" searches',
      'AI-powered keyword targeting',
      'Citation building across 50+ directories',
      'Competitor analysis and monitoring'
    ]
  },
  {
    icon: Star,
    title: 'Trust & Reputation',
    subtitle: 'Build Customer Confidence',
    description: 'Automated review management that builds trust and drives more walk-ins.',
    details: [
      'Real-time review monitoring across all platforms',
      'AI-powered review response automation',
      'Review generation campaigns',
      'Negative review mitigation strategies',
      'Reputation score tracking and alerts'
    ]
  },
  {
    icon: MessageSquare,
    title: 'Engagement',
    subtitle: 'Convert Interest into Visits',
    description: 'AI-driven campaigns that turn online interest into actual restaurant visits.',
    details: [
      'Personalized email marketing campaigns',
      'SMS marketing for immediate impact',
      'Loyalty program management',
      'Event and promotion announcements',
      'Customer segmentation and targeting'
    ]
  }
]

const successStories = [
  {
    restaurant: 'Dolcezza Gelato',
    location: 'Washington, DC',
    result: '+47% walk-ins',
    timeframe: '3 months',
    quote: 'RAY helped us dominate local search and our foot traffic has never been higher.',
    image: 'https://images.pexels.com/photos/1352278/pexels-photo-1352278.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
  },
  {
    restaurant: 'The Local Bistro',
    location: 'Austin, TX',
    result: '+60% repeat visits',
    timeframe: '4 months',
    quote: 'The engagement tools transformed how we connect with our customers.',
    image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
  }
]

const WalkIns: React.FC = () => {
  const [isFormModalOpen, setIsFormModalOpen] = React.useState(false)
  const [currentStory, setCurrentStory] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStory((prev) => (prev + 1) % successStories.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <Helmet>
        <title>Increase Walk-Ins - RAY Restaurant Marketing Platform</title>
        <meta name="description" content="Turn searches into walk-ins with AI-powered local marketing. Dominate Google Maps, build trust through reviews, and engage customers with personalized campaigns." />
        <meta property="og:title" content="Increase Walk-Ins - RAY Restaurant Marketing Platform" />
        <meta property="og:description" content="Turn searches into walk-ins with AI-powered local marketing. Dominate Google Maps, build trust through reviews, and engage customers with personalized campaigns." />
        <meta property="og:url" content="https://rayrestaurant.com/product/walk-ins" />
        <link rel="canonical" href="https://rayrestaurant.com/product/walk-ins" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="py-20 bg-ray-gradient-start">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ray-dark-900 leading-tight mb-6">
                Turn searches into walk-ins with{' '}
                <span className="text-ray-blue">AI-powered local marketing</span>
              </h1>
              
              <p className="text-xl text-ray-dark-700 mb-8 leading-relaxed">
                When customers search for "restaurants near me," make sure they find you first. 
                Our AI-driven platform optimizes your local presence, builds trust through reviews, 
                and engages customers with personalized campaigns that drive foot traffic.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  variant="primary" 
                  size="lg"
                  onClick={() => setIsFormModalOpen(true)}
                >
                  Scan Your Restaurant
                </Button>
                <Button 
                  variant="secondary" 
                  size="lg"
                  onClick={() => console.log('View demo')}
                >
                  See How It Works
                </Button>
              </div>
              
              <div className="flex items-center gap-6 text-sm text-ray-dark-600">
                <div className="flex items-center">
                  <TrendingUp className="w-4 h-4 text-ray-green mr-2" />
                  <span>Average +47% walk-in increase</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-500 mr-2" />
                  <span>4.8★ average rating improvement</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <LazyImage
                src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Busy restaurant with customers dining"
                width={600}
                height={400}
                className="rounded-xl shadow-2xl"
              />
              
              {/* Floating success metric */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-xl p-4 border border-gray-100">
                <div className="text-2xl font-bold text-ray-green">+47%</div>
                <div className="text-sm text-ray-darkGray">More walk-ins</div>
                <div className="text-xs text-ray-darkGray">in 3 months</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-6">
              How RAY Drives More Walk-Ins
            </h2>
            <p className="text-xl text-ray-darkGray max-w-3xl mx-auto">
              Our three-pillar approach ensures customers find you, trust you, and choose you 
              over the competition.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <Card key={index} className="text-center hover:shadow-xl transition-shadow duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-ray-blue rounded-xl mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-ray-dark-900 mb-2">
                    {feature.title}
                  </h3>
                  
                  <h4 className="text-lg font-semibold text-ray-blue mb-4">
                    {feature.subtitle}
                  </h4>
                  
                  <p className="text-ray-darkGray mb-6">
                    {feature.description}
                  </p>
                  
                  <ul className="text-left space-y-2">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start text-sm text-ray-dark-700">
                        <div className="w-2 h-2 bg-ray-green rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
      
      {/* Success Stories Carousel */}
      <section className="py-20 bg-ray-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Real Results from Real Restaurants
            </h2>
            <p className="text-xl text-ray-gray max-w-3xl mx-auto">
              See how restaurants like yours have transformed their walk-in traffic with RAY.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <LazyImage
                    src={successStories[currentStory].image}
                    alt={successStories[currentStory].restaurant}
                    width={300}
                    height={200}
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>
                
                <div>
                  <div className="text-4xl font-bold text-ray-green mb-2">
                    {successStories[currentStory].result}
                  </div>
                  <div className="text-ray-darkGray mb-4">
                    in {successStories[currentStory].timeframe}
                  </div>
                  
                  <blockquote className="text-lg text-ray-dark-700 mb-4 italic">
                    "{successStories[currentStory].quote}"
                  </blockquote>
                  
                  <div className="font-semibold text-ray-dark-900">
                    {successStories[currentStory].restaurant}
                  </div>
                  <div className="text-ray-darkGray text-sm">
                    {successStories[currentStory].location}
                  </div>
                </div>
              </div>
              
              {/* Dots indicator */}
              <div className="flex justify-center mt-8 space-x-2">
                {successStories.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentStory(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                      index === currentStory ? 'bg-ray-blue' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to story ${index + 1}`}
                  />
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-ray-gradient-start">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-6">
            Ready to increase your walk-in traffic?
          </h2>
          
          <p className="text-xl text-ray-dark-700 mb-8 max-w-3xl mx-auto">
            Get your free restaurant scan and discover exactly how RAY can drive more 
            customers to your door. See your opportunities in just 24 hours.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="primary" 
              size="lg"
              onClick={() => setIsFormModalOpen(true)}
            >
              Scan Your Restaurant
            </Button>
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => console.log('Talk to expert')}
            >
              Talk to an Expert
            </Button>
          </div>
          
          <div className="mt-6 text-sm text-ray-dark-500">
            ✓ Free scan • ✓ No commitment • ✓ Results in 24 hours
          </div>
        </div>
      </section>
      
      {/* HubSpot Form Modal */}
      <HubSpotFormModal
        isOpen={isFormModalOpen}
        onClose={() => setIsFormModalOpen(false)}
        portalId="YOUR_PORTAL_ID"
        formId="YOUR_FORM_ID"
        formName="Scan Your Restaurant - Walk-Ins"
      />
    </>
  )
}

export default WalkIns