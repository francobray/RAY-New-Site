import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Users, MessageSquare, Heart, Waves, Lightbulb } from 'lucide-react'
import Card from '../components/Card'
import LazyImage from '../components/LazyImage'
import { generateBreadcrumbSchema } from '../utils/schema'

const industryStats = [
  {
    number: '1M+',
    label: 'Restaurant Locations',
    description: 'across the U.S.'
  },
  {
    number: '15M+',
    label: 'Employees',
    description: 'second-largest private sector employer'
  },
  {
    number: '1 in 2',
    label: 'Adults',
    description: 'had their first job in a restaurant'
  }
]

const values = [
  {
    icon: Users,
    title: 'Leaders Without a Title',
    description: 'Every team member takes initiative, leads by example, and steps up—regardless of job title.'
  },
  {
    icon: MessageSquare,
    title: 'We Speak the Truth',
    description: 'We communicate with clarity and honesty—no fluff, no ambiguity.'
  },
  {
    icon: Heart,
    title: 'We Build Positive Relationships',
    description: 'A positive mindset helps us build strong, authentic connections that stand the test of challenge.'
  },
  {
    icon: Waves,
    title: 'We Flow Like Water',
    description: 'We stay flexible, adapt quickly, and keep moving forward—no matter the obstacles.'
  },
  {
    icon: Lightbulb,
    title: 'The Best Idea Wins',
    description: 'We embrace constant, respectful feedback. Ego doesn\'t stand in the way of progress.'
  }
]

const About: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About RAY - Restaurant Marketing Experts</title>
        <meta name="description" content="Learn about RAY's mission to help restaurants increase revenue through proven local marketing strategies. Meet our team of restaurant marketing experts." />
        <meta property="og:title" content="About RAY - Restaurant Marketing Experts" />
        <meta property="og:description" content="Learn about RAY's mission to help restaurants increase revenue through proven local marketing strategies. Meet our team of restaurant marketing experts." />
        <meta property="og:url" content="https://rayapp.io/about" />
        <meta name="twitter:title" content="About RAY - Restaurant Marketing Experts" />
        <meta name="twitter:description" content="Learn about RAY's mission to help restaurants increase revenue through proven local marketing strategies. Meet our team of restaurant marketing experts." />
        <link rel="canonical" href="https://rayapp.io/about" />
        <script type="application/ld+json">
          {JSON.stringify([
            generateBreadcrumbSchema([
              { name: 'Home', url: 'https://rayapp.io/' },
              { name: 'About', url: 'https://rayapp.io/about' }
            ]),
            {
              "@context": "https://schema.org",
              "@type": "AboutPage",
              "name": "About RAY - Restaurant Marketing Experts",
              "description": "Learn about RAY's mission to help restaurants increase revenue through proven local marketing strategies",
              "url": "https://rayapp.io/about",
              "@id": "https://rayapp.io/about#aboutpage",
              "mainEntity": {
                "@id": "https://rayapp.io/#organization"
              }
            }
          ])}
        </script>
      </Helmet>
      
      {/* AI-friendly page summary */}
      <div className="sr-only">
        <h1>About RAY - Restaurant Marketing Platform</h1>
        <p>RAY is a restaurant marketing platform founded to help restaurant owners increase revenue through proven local marketing strategies. The restaurant industry employs over 15 million people across 1 million+ locations in the U.S., making it the second-largest private sector employer. RAY's mission is to empower restaurant owners with tools and strategies that guarantee a 30%+ increase in Google Business Profile navigations.</p>
        <p>Our core values include leadership without titles, transparent communication, positive relationship building, adaptability, and merit-based decision making. Founded by Franco (CEO & Co-Founder), RAY serves restaurants nationwide with local SEO, reputation management, and customer engagement solutions.</p>
      </div>
      
      {/* Hero Section */}
      <section className="py-20 bg-ray-promise relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(13,121,229,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(111,191,115,0.1),transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ray-dark-900 leading-tight mb-6">
                Restaurants Power America.{' '}
                <span className="text-ray-blue">We Power Restaurants.</span>
              </h1>
              
              <p className="text-xl text-ray-dark-700 mb-8 max-w-2xl leading-relaxed">
                The restaurant industry is the backbone of American communities, employing millions 
                and bringing people together every day. At RAY, we're dedicated to empowering 
                restaurant owners with proven strategies that guarantee a 30%+ increase in Google Business Profile navigations.
              </p>
            </div>
            
            {/* Right side - Industry Stats */}
            <div className="grid grid-cols-1 gap-6">
              {industryStats.map((stat, index) => (
                <Card key={index} className="text-center hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl font-bold text-ray-blue mb-2">
                    {stat.number}
                  </div>
                  <div className="text-xl font-semibold text-ray-dark-900 mb-1">
                    {stat.label}
                  </div>
                  <div className="text-ray-darkGray">
                    {stat.description}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-ray-darkGray max-w-3xl mx-auto">
              These core principles guide everything we do and shape how we serve 
              our restaurant partners every day.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <Card key={index} className="text-center hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-ray-blue rounded-full mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-ray-dark-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm text-ray-darkGray leading-relaxed flex-grow">
                    {value.description}
                  </p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
      
      {/* Letter from the CEO */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Franco's Image */}
            <div className="text-center lg:text-left">
              <div className="relative inline-block">
                <LazyImage
                  src="/images/Franco_Breciano.jpg"
                  alt="Franco, CEO & Co-Founder of RAY"
                  width={400}
                  height={500}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
                  <div className="text-sm font-semibold text-ray-dark-900">Franco</div>
                  <div className="text-xs text-ray-darkGray">CEO & Co-Founder</div>
                </div>
              </div>
            </div>
            
            {/* Right side - Letter Content */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-8">
                A Letter from Our CEO
              </h2>
              
              <div className="prose prose-lg text-ray-dark-700 leading-relaxed space-y-6">
                <p>
                  Dear Restaurant Community,
                </p>
                
                <p>
                  When I started my first restaurant, I quickly learned that great food and 
                  exceptional service weren't enough. In today's digital world, restaurants 
                  need to be found online, build trust through reviews, and create lasting 
                  relationships with their customers.
                </p>
                
                <p>
                  That's why we built RAY. We saw too many incredible restaurants struggling 
                  to attract customers despite serving amazing food. We knew there had to be 
                  a better way to help restaurant owners focus on what they do best—creating 
                  memorable dining experiences—while we handle the marketing that drives 
                  customers through their doors.
                </p>
                
                <p>
                  Our mission is simple: to empower every restaurant with the tools and 
                  strategies they need to thrive. We believe that when restaurants succeed, 
                  entire communities flourish. That's the future we're building together.
                </p>
                
                <div className="pt-6">
                  <div className="text-xl font-semibold text-ray-dark-900">Franco</div>
                  <div className="text-ray-darkGray">CEO & Co-Founder, RAY</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About