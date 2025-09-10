import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowLeft, TrendingUp, Star, MapPin, Calendar } from 'lucide-react'
import Card from '../components/Card'
import Button from '../components/Button'
import LazyImage from '../components/LazyImage'
import CTASection from '../components/CTASection'

const caseStudyData = {
  'chef-burger': {
    name: 'Chef Burger',
    owner: 'Tom Cesario',
    title: 'CEO & Founder, Chef Burger',
    location: 'Miami, FL',
    industry: 'Fast Casual Burger Restaurant',
    timeline: '6 months',
    heroImage: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    ownerImage: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    challenge: 'Chef Burger was struggling with low online visibility and inconsistent customer flow. Despite having great food and service, they were losing customers to competitors who appeared higher in local search results.',
    solution: 'RAY implemented a comprehensive local SEO strategy, optimized their Google My Business profile, and launched targeted customer engagement campaigns to drive more walk-ins and online orders.',
    results: [
      { metric: 'Monthly Revenue Increase', value: '+$8,000', description: 'Consistent month-over-month growth' },
      { metric: 'Walk-in Traffic', value: '+45%', description: 'More customers discovering the restaurant' },
      { metric: 'Online Reviews', value: '4.8★', description: 'Improved from 3.9★ average rating' },
      { metric: 'Google Maps Ranking', value: '#1', description: 'Top position for "burger restaurant near me"' }
    ],
    testimonial: {
      text: "RAY transformed our business completely. We went from struggling to get customers through the door to having consistent lines and a thriving online presence. The $8,000 monthly increase in revenue has allowed us to expand our team and improve our operations.",
      author: "Tom Cesario",
      title: "CEO & Founder, Chef Burger"
    }
  },
  'dolcezza': {
    name: 'Dolcezza',
    owner: 'Violeta Edelman',
    title: 'Co-Founder and co-CEO, Dolcezza',
    location: 'Washington, DC',
    industry: 'Artisanal Gelato & Coffee',
    timeline: '4 months',
    heroImage: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    ownerImage: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    challenge: 'With multiple DC locations, Dolcezza needed a unified approach to local marketing that could scale across all their stores while maintaining their artisanal brand identity.',
    solution: 'RAY developed a multi-location marketing strategy that optimized each store\'s local presence while maintaining brand consistency. We implemented location-specific campaigns and centralized reputation management.',
    results: [
      { metric: 'Monthly Revenue Increase', value: '+$8,000', description: 'Average across all locations' },
      { metric: 'Walk-in Traffic', value: '+47%', description: 'Significant increase in foot traffic' },
      { metric: 'Online Presence', value: '95%', description: 'Local search visibility improvement' },
      { metric: 'Customer Retention', value: '+35%', description: 'More repeat customers' }
    ],
    testimonial: {
      text: "RAY helped us scale our marketing efforts across all our DC locations. The systematic approach to local SEO and customer engagement has driven incredible results. We're seeing more customers than ever before, and our brand presence has never been stronger.",
      author: "Violeta Edelman",
      title: "Co-Founder and co-CEO, Dolcezza"
    }
  },
  'green-eat': {
    name: 'Green Eat',
    owner: 'Emilio Di Pasquo',
    title: 'CEO - MKT Director, Green Eat Pro Connection',
    location: 'Los Angeles, CA',
    industry: 'Healthy Fast Food',
    timeline: '5 months',
    heroImage: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    ownerImage: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    challenge: 'Green Eat was getting minimal visibility on Google despite offering healthy, high-quality food options. Their Google My Business profile was underperforming and they had very few online reviews.',
    solution: 'RAY focused on aggressive local SEO optimization, Google My Business enhancement, and review generation campaigns to establish Green Eat as the go-to healthy food option in their area.',
    results: [
      { metric: 'Google Visits', value: '3x increase', description: 'Triple the Google profile visits' },
      { metric: 'Search Ranking', value: 'Top 3', description: 'For "healthy food near me"' },
      { metric: 'Online Reviews', value: '+150%', description: 'Significant review volume increase' },
      { metric: 'Phone Calls', value: '+80%', description: 'More direct customer inquiries' }
    ],
    testimonial: {
      text: "The results speak for themselves - we tripled our Google visits and now consistently rank in the top 3 for healthy food searches. RAY's approach to local SEO has been a game-changer for our business visibility and customer acquisition.",
      author: "Emilio Di Pasquo",
      title: "CEO - MKT Director, Green Eat Pro Connection"
    }
  },
  'temple-craft': {
    name: 'Temple Craft Wynwood',
    owner: 'Juan Cheramissano',
    title: 'CEO - Temple Craft Wynwood',
    location: 'Miami, FL',
    industry: 'Craft Beer & Food',
    timeline: '6 months',
    heroImage: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    ownerImage: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    challenge: 'Located in the competitive Wynwood district, Temple Craft needed to stand out among numerous dining and entertainment options while building a loyal customer base.',
    solution: 'RAY implemented a comprehensive digital marketing strategy focusing on local community engagement, event promotion, and building a strong online presence that reflected the unique Wynwood culture.',
    results: [
      { metric: 'Monthly Revenue Increase', value: '+$12,000', description: 'Highest growth in the district' },
      { metric: 'Event Attendance', value: '+65%', description: 'More customers at special events' },
      { metric: 'Social Media Engagement', value: '+120%', description: 'Stronger community connection' },
      { metric: 'Repeat Customers', value: '+55%', description: 'Building customer loyalty' }
    ],
    testimonial: {
      text: "RAY understood our unique position in Wynwood and helped us build a marketing strategy that resonates with our community. The $12,000 monthly revenue increase has allowed us to expand our craft beer selection and host more events.",
      author: "Juan Cheramissano",
      title: "CEO - Temple Craft Wynwood"
    }
  },
  'chimba-miami': {
    name: 'Chimba Miami',
    owner: 'Franco Yametti',
    title: 'CEO - Chimba Miami',
    location: 'Miami, FL',
    industry: 'Latin American Cuisine',
    timeline: '5 months',
    heroImage: 'https://images.pexels.com/photos/1352278/pexels-photo-1352278.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    ownerImage: 'https://images.pexels.com/photos/1352278/pexels-photo-1352278.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    challenge: 'Chimba Miami wanted to establish itself as the premier Latin American dining destination in Miami, but faced intense competition from established restaurants in the area.',
    solution: 'RAY developed a culturally-focused marketing approach that highlighted Chimba\'s authentic cuisine and vibrant atmosphere, targeting both local Latin American communities and food enthusiasts.',
    results: [
      { metric: 'Monthly Revenue Increase', value: '+$14,000', description: 'Highest performing case study' },
      { metric: 'Weekend Bookings', value: '+85%', description: 'Consistently fully booked weekends' },
      { metric: 'Cultural Events', value: '12 events', description: 'Successful community gatherings' },
      { metric: 'Media Coverage', value: '8 features', description: 'Local food blog and magazine features' }
    ],
    testimonial: {
      text: "RAY helped us become the cultural hub we always envisioned. The $14,000 monthly revenue increase is just the beginning - we're now recognized as Miami's premier destination for authentic Latin American cuisine and culture.",
      author: "Franco Yametti",
      title: "CEO - Chimba Miami"
    }
  },
  'juan-valdez': {
    name: 'Juan Valdez',
    owner: 'Belen Garcia',
    title: 'CMO - Juan Valdez',
    location: 'Multiple Locations',
    industry: 'Coffee Chain',
    timeline: '8 months',
    heroImage: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    ownerImage: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    challenge: 'As an established coffee brand expanding in the US market, Juan Valdez needed to compete with major coffee chains while maintaining their premium Colombian coffee brand identity.',
    solution: 'RAY created a multi-location digital strategy that emphasized Juan Valdez\'s premium Colombian heritage while optimizing each location for local search and community engagement.',
    results: [
      { metric: 'Monthly Revenue Increase', value: '+$8,000', description: 'Per location average' },
      { metric: 'Brand Recognition', value: '+90%', description: 'In target markets' },
      { metric: 'Premium Product Sales', value: '+70%', description: 'Higher margin items' },
      { metric: 'Customer Loyalty', value: '+60%', description: 'Repeat purchase rate' }
    ],
    testimonial: {
      text: "RAY helped us successfully establish Juan Valdez as a premium coffee destination in the competitive US market. Their understanding of both local marketing and brand positioning has been invaluable to our expansion strategy.",
      author: "Belen Garcia",
      title: "CMO - Juan Valdez"
    }
  }
}

const CaseStudyDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const caseStudy = id ? caseStudyData[id as keyof typeof caseStudyData] : null

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-ray-dark-900 mb-4">Case Study Not Found</h1>
          <Link to="/case-studies" className="text-ray-blue hover:underline">
            ← Back to Case Studies
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <Helmet>
        <title>{caseStudy.name} Success Story - RAY Case Study</title>
        <meta name="description" content={`See how ${caseStudy.name} increased revenue with RAY's restaurant marketing platform. ${caseStudy.challenge}`} />
        <meta property="og:title" content={`${caseStudy.name} Success Story - RAY Case Study`} />
        <meta property="og:description" content={`See how ${caseStudy.name} increased revenue with RAY's restaurant marketing platform.`} />
        <link rel="canonical" href={`https://rayrestaurant.com/case-studies/${id}`} />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link 
              to="/case-studies" 
              className="inline-flex items-center text-ray-blue hover:text-blue-600 transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Case Studies
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={caseStudy.ownerImage}
                  alt={caseStudy.owner}
                  className="w-16 h-16 rounded-full border-2 border-gray-200"
                />
                <div>
                  <h2 className="text-lg font-semibold text-ray-dark-900">{caseStudy.owner}</h2>
                  <p className="text-ray-darkGray">{caseStudy.title}</p>
                </div>
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold text-ray-dark-900 mb-6">
                {caseStudy.name} Success Story
              </h1>

              <div className="flex flex-wrap gap-4 mb-6 text-sm text-ray-darkGray">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  {caseStudy.location}
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {caseStudy.timeline}
                </div>
                <div>{caseStudy.industry}</div>
              </div>

              <p className="text-xl text-ray-dark-700 leading-relaxed">
                {caseStudy.challenge}
              </p>
            </div>

            <div>
              <LazyImage
                src={caseStudy.heroImage}
                alt={caseStudy.name}
                width={600}
                height={400}
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-6">
              Results Achieved
            </h2>
            <p className="text-xl text-ray-darkGray max-w-3xl mx-auto">
              Here's how RAY's marketing platform transformed {caseStudy.name}'s business performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {caseStudy.results.map((result, index) => (
              <Card key={index} className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <TrendingUp className="w-8 h-8 text-ray-green" />
                </div>
                <div className="text-3xl font-bold text-ray-green mb-2">
                  {result.value}
                </div>
                <div className="text-lg font-semibold text-ray-dark-900 mb-2">
                  {result.metric}
                </div>
                <div className="text-sm text-ray-darkGray">
                  {result.description}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-8 text-center">
              Our Solution
            </h2>
            
            <Card className="p-8">
              <p className="text-lg text-ray-dark-700 leading-relaxed mb-8">
                {caseStudy.solution}
              </p>

              <div className="border-l-4 border-ray-blue pl-6">
                <blockquote className="text-xl text-ray-dark-700 italic mb-4">
                  "{caseStudy.testimonial.text}"
                </blockquote>
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-ray-dark-900">
                      {caseStudy.testimonial.author}
                    </div>
                    <div className="text-ray-darkGray text-sm">
                      {caseStudy.testimonial.title}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-6">
              More Success Stories
            </h2>
            <p className="text-xl text-ray-darkGray">
              See how other restaurants have transformed their business with RAY.
            </p>
          </div>

          <div className="text-center">
            <Link to="/case-studies">
              <Button variant="primary" size="lg">
                View All Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}

export default CaseStudyDetail