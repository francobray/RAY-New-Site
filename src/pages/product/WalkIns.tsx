import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Star, TrendingUp, Eye, MessageSquare, Shield, ArrowRight, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import Card from '../../components/Card'
import Button from '../../components/Button'
import HubSpotGradeModal from '../../components/HubSpotGradeModal'
import HubSpotTalkToExpertModal from '../../components/HubSpotTalkToExpertModal'
import { useHubSpotModal } from '../../hooks/useHubSpotModal'

const features = [
  {
    icon: Eye,
    title: 'Visibility',
    subtitle: 'Dominate Google Maps & Local Search',
    description: 'Make sure your restaurant stands out and is easily found on Google and Apple Maps.',
    details: [
      'Google Maps optimization and ranking',
      'Local SEO for "restaurants near me" searches',
      'AI-powered keyword targeting',
      'Citation building across 50+ directories',
      'Competitor analysis and monitoring'
    ],
    ctaText: 'Check your rankings',
    ctaLink: '#'
  },
  {
    icon: Shield,
    title: 'Trust & Reputation',
    subtitle: 'Automated Review Management',
    description: 'Spot and handle unfair reviews before they hurt you. Build customer confidence with AI-powered reputation management.',
    details: [
      'Real-time review monitoring across all platforms',
      'AI-powered review response automation',
      'Review generation campaigns',
      'Negative review mitigation strategies',
      'Reputation score tracking and alerts'
    ],
    ctaText: 'Protect my reputation',
    ctaLink: '#'
  },
  {
    icon: MessageSquare,
    title: 'Engagement',
    subtitle: 'AI-Driven Customer Campaigns',
    description: 'Keep your profile fresh and engaging with AI. Automatically publish optimized content and responses.',
    details: [
      'Personalized email marketing campaigns',
      'SMS marketing for immediate impact',
      'Loyalty program management',
      'Event and promotion announcements',
      'Customer segmentation and targeting'
    ],
    ctaText: 'Automate my Google responses and posts!',
    ctaLink: '#'
  }
]

const customerStories = [
  {
    id: 'chef-burger',
    name: 'Chef Burger',
    owner: 'Tom Cesario',
    title: 'CEO & Founder',
    metric: '+$8,000/m',
    description: 'Monthly revenue increase',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    quote: 'RAY transformed our business completely. We went from struggling to get customers through the door to having consistent lines.',
    bgColor: 'from-blue-600 to-blue-700'
  },
  {
    id: 'dolcezza',
    name: 'Dolcezza',
    owner: 'Violeta Edelman',
    title: 'Co-Founder & CEO',
    metric: '+47%',
    description: 'Walk-ins increase',
    image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    quote: 'RAY helped us scale our marketing efforts across all our DC locations with incredible results.',
    bgColor: 'from-green-600 to-green-700'
  },
  {
    id: 'temple-craft',
    name: 'Temple Craft Wynwood',
    owner: 'Juan Cheramissano',
    title: 'CEO',
    metric: '+$12,000/m',
    description: 'Monthly revenue increase',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    quote: 'RAY understood our unique position in Wynwood and helped us build a marketing strategy that resonates.',
    bgColor: 'from-purple-600 to-purple-700'
  }
]

const WalkIns: React.FC = () => {
  const { 
    isGradeModalOpen, 
    openGradeModal, 
    closeGradeModal,
    isTalkToExpertModalOpen,
    openTalkToExpertModal,
    closeTalkToExpertModal
  } = useHubSpotModal()

  return (
    <>
      <Helmet>
        <title>Walk-Ins - Turn Searches Into Restaurant Visits | RAY</title>
        <meta name="description" content="Turn searches into walk-ins with AI-powered local marketing. Dominate Google Maps, build trust through reviews, and engage customers with personalized campaigns that drive foot traffic." />
        <meta property="og:title" content="Walk-Ins - Turn Searches Into Restaurant Visits | RAY" />
        <meta property="og:description" content="Turn searches into walk-ins with AI-powered local marketing. Dominate Google Maps, build trust through reviews, and engage customers with personalized campaigns that drive foot traffic." />
        <meta property="og:url" content="https://rayrestaurant.com/product/walk-ins" />
        <meta name="twitter:title" content="Walk-Ins - Turn Searches Into Restaurant Visits | RAY" />
        <meta name="twitter:description" content="Turn searches into walk-ins with AI-powered local marketing. Dominate Google Maps, build trust through reviews, and engage customers with personalized campaigns that drive foot traffic." />
        <link rel="canonical" href="https://rayrestaurant.com/product/walk-ins" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "RAY Walk-Ins Marketing Platform",
            "description": "AI-powered local marketing platform that helps restaurants increase walk-in traffic through Google Maps optimization, review management, and customer engagement.",
            "brand": {
              "@type": "Brand",
              "name": "RAY"
            },
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock",
              "priceCurrency": "USD"
            }
          })}
        </script>
      </Helmet>
      
      {/* Hero Section */}
      <section className="py-20 bg-ray-promise relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(13,121,229,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(111,191,115,0.1),transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-center lg:text-left relative">
              <div className="inline-flex items-center px-4 py-2 bg-ray-blue/10 rounded-full text-ray-blue text-sm font-medium mb-6">
                <TrendingUp className="w-4 h-4 mr-2" />
                AI-Powered Local Marketing
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ray-dark-900 leading-tight mb-6">
                Turn Searches Into{' '}
                <span className="text-ray-blue">
                  Walk-Ins
                </span>
              </h1>
              
              <p className="text-xl text-ray-dark-700 mb-8 max-w-2xl leading-relaxed">
                When customers search for "restaurants near me," make sure they find you first. 
                Our AI-driven platform optimizes your local presence, builds trust through reviews, 
                and engages customers with personalized campaigns that drive foot traffic.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Button 
                  variant="primary" 
                  size="lg"
                  onClick={openGradeModal}
                  className="shadow-xl hover:shadow-2xl transition-all duration-300 group"
                  aria-label="Open restaurant grading form to get your free restaurant scan"
                >
                  Grade Your Restaurant
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="shadow-xl hover:shadow-2xl transition-all duration-300"
                  onClick={openTalkToExpertModal}
                  aria-label="Open form to schedule a consultation with our restaurant marketing experts"
                >
                  Talk to an Expert
                </Button>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start space-x-8 text-sm text-ray-dark-600">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-ray-green mr-2" />
                  <span>Average +34% walk-in increase</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-ray-green mr-2" />
                  <span>4.8★ rating improvement</span>
                </div>
              </div>
            </div>
            
            {/* Hero Visual */}
            <div className="relative">
              {/* Mobile Phone Mockup with Real-Time Navigation */}
              <div className="relative max-w-sm mx-auto">
                {/* Phone Frame */}
                <div className="relative bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
                  {/* Screen */}
                  <div className="bg-white rounded-[2rem] overflow-hidden">
                    <div className="p-3 space-y-2">
                      {/* Header */}
                      <div className="flex items-center justify-between">
                        <div className="text-xs font-bold text-gray-900">Google Maps</div>
                        <div className="w-4 h-4 bg-ray-blue rounded-full"></div>
                      </div>
                      
                      {/* Active Navigation View */}
                      <div className="bg-blue-50 rounded-lg p-2 mb-2 border border-blue-200">
                        <div className="flex items-center mb-1">
                          <div className="w-2 h-2 bg-ray-blue rounded-full mr-2 animate-pulse"></div>
                          <div className="text-xs text-blue-700 font-medium">Walking to destination</div>
                        </div>
                        <div className="font-semibold text-gray-900 text-xs">Your Restaurant</div>
                        <div className="text-xs text-gray-600">2 min walk • 0.1 miles</div>
                        
                        {/* Route Progress */}
                        <div className="flex items-center mt-1">
                          <div className="w-1.5 h-1.5 bg-ray-blue rounded-full"></div>
                          <div className="flex-1 h-0.5 bg-gradient-to-r from-ray-blue to-ray-green mx-1"></div>
                          <div className="w-2 h-2 bg-ray-green rounded-full"></div>
                        </div>
                      </div>
                      
                      {/* Nearby Restaurants */}
                      <div className="space-y-1">
                        <div className="text-xs text-gray-500 mb-1">Nearby restaurants</div>
                        <div className="p-2 bg-green-50 rounded-lg border-l-2 border-green-500">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-semibold text-gray-900 text-xs">Your Restaurant</div>
                              <div className="text-xs text-gray-600">4.8★ • 847 reviews</div>
                            </div>
                            <div className="text-green-600 font-bold text-xs">#1</div>
                          </div>
                        </div>
                        
                        <div className="p-1.5 bg-gray-100 rounded-lg">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-medium text-gray-700 text-xs">Competitor A</div>
                              <div className="text-xs text-gray-500">4.2★ • 234 reviews</div>
                            </div>
                            <div className="text-gray-500 text-xs">#2</div>
                          </div>
                        </div>
                        
                        <div className="p-1.5 bg-gray-100 rounded-lg">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-medium text-gray-700 text-xs">Competitor B</div>
                              <div className="text-xs text-gray-500">4.0★ • 156 reviews</div>
                            </div>
                            <div className="text-gray-500 text-xs">#3</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Phone Details */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-gray-800 rounded-full mt-2"></div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-3 border border-gray-100">
                  <div className="text-lg font-bold text-ray-green">+34%</div>
                  <div className="text-xs text-ray-darkGray">More visibility</div>
                </div>
                
                <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl p-3 border border-gray-100">
                  <div className="text-lg font-bold text-ray-blue">4.8★</div>
                  <div className="text-xs text-ray-darkGray">Average rating</div>
                </div>
                
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-ray-blue/20 to-ray-green/20 rounded-[2.5rem] -z-10 blur-xl scale-110"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* How RAY Drives More Walk-Ins */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-ray-blue/10 rounded-full text-ray-blue text-sm font-medium mb-6">
              <Eye className="w-4 h-4 mr-2" />
              Comprehensive Growth Strategy
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-6">
              How RAY Drives More Walk-Ins
            </h2>
            <p className="text-xl text-ray-darkGray max-w-3xl mx-auto leading-relaxed">
              Our comprehensive approach ensures customers find you, trust you, and choose you 
              over the competition through proven strategies and AI-powered automation.
            </p>
          </div>
          
          <div className="space-y-0">
            {/* Feature 1: Visibility */}
            <div className="py-20 bg-white">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Content - Left */}
                <div>
                  <h3 className="text-3xl font-bold text-ray-dark-900 mb-4">
                    Visibility
                  </h3>
                  
                  <h4 className="text-xl font-semibold text-ray-blue mb-6">
                    Dominate Google Maps & Local Search
                  </h4>
                  
                  <p className="text-lg text-ray-darkGray mb-8 leading-relaxed">
                    Make sure your restaurant stands out and is easily found on Google and Apple Maps. 
                    Our AI-powered optimization ensures you appear at the top when hungry customers search.
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {features[0].details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start text-ray-dark-700">
                        <CheckCircle className="w-5 h-5 text-ray-green mr-3 flex-shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="inline-flex items-center text-ray-blue font-semibold hover:text-blue-600 transition-colors duration-200 group">
                    Check your rankings
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
                
                {/* Visual - Right */}
                <div>
                  <Card className="p-8 bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300">
                    <div className="space-y-6">
                      <div className="bg-gray-50 rounded-lg p-6">
                        <h5 className="font-semibold text-ray-dark-900 mb-4">Local Search Rankings</h5>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                            <span className="font-medium text-ray-dark-900">Your Restaurant</span>
                            <span className="text-ray-blue font-bold">#1</span>
                          </div>
                          <div className="flex items-center justify-between p-3 bg-gray-100 rounded-lg">
                            <span className="text-ray-darkGray">Competitor A</span>
                            <span className="text-ray-darkGray">#2</span>
                          </div>
                          <div className="flex items-center justify-between p-3 bg-gray-100 rounded-lg">
                            <span className="text-ray-darkGray">Competitor B</span>
                            <span className="text-ray-darkGray">#3</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-ray-green">+47%</div>
                        <div className="text-sm text-ray-darkGray">More visibility</div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
            
            {/* Feature 2: Trust & Reputation */}
          </div>
        </div>
      </section>
      
      {/* Feature 2: Trust & Reputation - Full Width Gray */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:grid-flow-col-dense">
            {/* Content - Right */}
            <div className="lg:col-start-2">
              <h3 className="text-3xl font-bold text-ray-dark-900 mb-4">
                Trust & Reputation
              </h3>
              
              <h4 className="text-xl font-semibold text-ray-blue mb-6">
                Automated Review Management
              </h4>
              
              <p className="text-lg text-ray-darkGray mb-8 leading-relaxed">
                Spot and handle unfair reviews before they hurt you. Build customer confidence 
                with AI-powered reputation management that responds instantly and professionally.
              </p>
              
              <ul className="space-y-3 mb-8">
                {features[1].details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-start text-ray-dark-700">
                    <CheckCircle className="w-5 h-5 text-ray-green mr-3 flex-shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
              
              <button className="inline-flex items-center text-ray-blue font-semibold hover:text-blue-600 transition-colors duration-200 group">
                Protect my reputation
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
            
            {/* Visual - Left */}
            <div className="lg:col-start-1">
              <Card className="p-8 bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h5 className="font-semibold text-ray-dark-900 mb-4">Review Management</h5>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <div>
                          <div className="font-medium text-ray-dark-900">Positive Review</div>
                          <div className="text-sm text-ray-darkGray">Auto-responded in 2 mins</div>
                        </div>
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      </div>
                      <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg border-l-4 border-red-500">
                        <div>
                          <div className="font-medium text-ray-dark-900">Negative Review</div>
                          <div className="text-sm text-ray-darkGray">Flagged & escalated</div>
                        </div>
                        <Shield className="w-5 h-5 text-red-500" />
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-ray-green">4.8★</div>
                    <div className="text-sm text-ray-darkGray">Average rating</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Feature 3: Engagement */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content - Left */}
            <div>
              <h3 className="text-3xl font-bold text-ray-dark-900 mb-4">
                Engagement
              </h3>
              
              <h4 className="text-xl font-semibold text-ray-blue mb-6">
                AI-Driven Customer Campaigns
              </h4>
              
              <p className="text-lg text-ray-darkGray mb-8 leading-relaxed">
                Keep your profile fresh and engaging with AI. Automatically publish optimized 
                content and responses that drive customer engagement and repeat visits.
              </p>
              
              <ul className="space-y-3 mb-8">
                {features[2].details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-start text-ray-dark-700">
                    <CheckCircle className="w-5 h-5 text-ray-green mr-3 flex-shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
              
              <button className="inline-flex items-center text-ray-blue font-semibold hover:text-blue-600 transition-colors duration-200 group">
                Automate my Google responses and posts!
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
            
            {/* Visual - Right */}
            <div>
              <Card className="p-8 bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h5 className="font-semibold text-ray-dark-900 mb-4">AI-Generated Content</h5>
                    <div className="space-y-3">
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <div className="font-medium text-ray-dark-900 mb-1">Weekly Special Post</div>
                        <div className="text-sm text-ray-darkGray">Auto-published with photos</div>
                      </div>
                      <div className="p-3 bg-purple-50 rounded-lg">
                        <div className="font-medium text-ray-dark-900 mb-1">Customer Response</div>
                        <div className="text-sm text-ray-darkGray">Personalized thank you message</div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-ray-green">+60%</div>
                    <div className="text-sm text-ray-darkGray">Engagement increase</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Feature 4: Server Revenue Impact */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:grid-flow-col-dense">
            {/* Content - Right */}
            <div className="lg:col-start-2">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-800 text-sm font-medium mb-6">
                <TrendingUp className="w-4 h-4 mr-2" />
              </div>
              
              <h3 className="text-3xl font-bold text-ray-dark-900 mb-4">
                Identify Your Top Performers
              </h3>
              
              <h4 className="text-xl font-semibold text-ray-blue mb-6">
                Staff Performance Analytics
              </h4>
              
              <p className="text-lg text-ray-darkGray mb-8 leading-relaxed">
                Top-performing servers generate over 2x the revenue compared to average servers 
                ($20,000 vs $10,000 per month). RAY's Review leaderboard makes it easy to identify 
                which staff members are driving the most positive reviews.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-ray-dark-700">
                  <CheckCircle className="w-5 h-5 text-ray-green mr-3 flex-shrink-0 mt-0.5" />
                  <span>Staff performance tracking and analytics</span>
                </li>
                <li className="flex items-start text-ray-dark-700">
                  <CheckCircle className="w-5 h-5 text-ray-green mr-3 flex-shrink-0 mt-0.5" />
                  <span>Review attribution to individual team members</span>
                </li>
                <li className="flex items-start text-ray-dark-700">
                  <CheckCircle className="w-5 h-5 text-ray-green mr-3 flex-shrink-0 mt-0.5" />
                  <span>Revenue impact measurement per server</span>
                </li>
              </ul>
              
              <button className="inline-flex items-center text-ray-blue font-semibold hover:text-blue-600 transition-colors duration-200 group">
                Identify Your Top Performers
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
            
            {/* Visual - Left */}
            <div className="lg:col-start-1">
              <Card className="p-8 bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="space-y-6">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-ray-darkGray">Top Performer</span>
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                        $20,000/month
                      </span>
                    </div>
                  </div>
                  
                  <div className="bg-gray-100 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-ray-darkGray">Average Server</span>
                      <span className="bg-gray-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                        $10,000/month
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-ray-green">+$10,000</div>
                      <div className="text-sm text-ray-darkGray">Additional Monthly Revenue</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-ray-blue">2x</div>
                      <div className="text-sm text-ray-darkGray">Revenue Multiplier</div>
                    </div>
                  </div>
                  
                  <div className="text-xs text-ray-darkGray text-center pt-4 border-t">
                    Based on average monthly revenue data across 1,000+ restaurants
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Customer Success Stories Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-ray-blue/10 rounded-full text-ray-blue text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Customer Success Stories
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-4">
              Trusted by restaurants nationwide
            </h2>
            <p className="text-xl text-ray-darkGray max-w-3xl mx-auto leading-relaxed">
              See how restaurant owners across the country have transformed 
              their walk-in traffic with RAY's marketing platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {customerStories.map((customer) => (
              <Link
                key={customer.id}
                to={`/case-studies/${customer.id}`}
                className="group block"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  {/* Background Image */}
                  <div className="relative h-80">
                    <img
                      src={customer.image}
                      alt={customer.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${customer.bgColor} opacity-80`}></div>
                    
                    {/* Content Overlay */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                      {/* Top Section - Owner Info */}
                      <div>
                        <div className="text-sm font-medium opacity-90 mb-1">
                          {customer.owner}
                        </div>
                        <div className="text-xs opacity-75 leading-tight">
                          {customer.title}
                        </div>
                      </div>
                      
                      {/* Bottom Section - Restaurant & Metrics */}
                      <div>
                        <div className="mb-3">
                          <h3 className="text-xl font-bold mb-1">
                            {customer.name}
                          </h3>
                          <div className="text-2xl font-bold text-ray-green">
                            {customer.metric}
                          </div>
                          <div className="text-sm opacity-90">
                            {customer.description}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/case-studies"
              className="inline-flex items-center px-6 py-3 bg-ray-blue text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors duration-200 group"
            >
              View All Success Stories
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Final CTA Section */}
      <section className="py-24 bg-ray-promise relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(13,121,229,0.1),transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center px-4 py-2 bg-ray-dark-900/10 rounded-full text-ray-dark-900 text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4 mr-2" />
            Ready to Grow Your Restaurant?
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-6">
            Ready to increase your walk-in traffic?
          </h2>
          
          <p className="text-xl text-ray-dark-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Get your free restaurant scan and discover exactly how RAY can drive more 
            customers to your door. See your opportunities in just 24 hours.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="primary" 
              size="lg"
              onClick={openGradeModal}
              className="shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              Grade Your Restaurant
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button 
              variant="secondary" 
              size="lg"
              className="shadow-xl hover:shadow-2xl transition-all duration-300"
              onClick={openTalkToExpertModal}
            >
              Talk to an Expert
            </Button>
          </div>
          
          <div className="mt-8 flex items-center justify-center space-x-6 text-sm text-ray-dark-600">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-ray-green rounded-full mr-2"></div>
              <span>Free scan</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-ray-green rounded-full mr-2"></div>
              <span>No commitment</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-ray-green rounded-full mr-2"></div>
              <span>Results in 24 hours</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* HubSpot Modals */}
      <HubSpotTalkToExpertModal
        isOpen={isTalkToExpertModalOpen}
        onClose={closeTalkToExpertModal}
      />
    </>
  )
}

export default WalkIns