import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Users, Target, Award } from 'lucide-react'
import Card from '../components/Card'
import CTASection from '../components/CTASection'
import LazyImage from '../components/LazyImage'

const values = [
  {
    icon: Users,
    title: 'Customer-Centric',
    description: 'We put restaurant owners first, understanding the unique challenges of the food service industry.'
  },
  {
    icon: Target,
    title: 'Results-Driven',
    description: 'Every strategy we implement is designed to deliver measurable results that impact your bottom line.'
  },
  {
    icon: Award,
    title: 'Industry Expertise',
    description: 'Our team combines years of restaurant industry experience with cutting-edge marketing technology.'
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
        <meta property="og:url" content="https://rayrestaurant.com/about" />
        <meta name="twitter:title" content="About RAY - Restaurant Marketing Experts" />
        <meta name="twitter:description" content="Learn about RAY's mission to help restaurants increase revenue through proven local marketing strategies. Meet our team of restaurant marketing experts." />
        <link rel="canonical" href="https://rayrestaurant.com/about" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="py-20 bg-ray-gradient-start">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-ray-dark-900 mb-6">
                We're on a mission to help restaurants thrive
              </h1>
              <p className="text-xl text-ray-dark-700 mb-6">
                RAY was founded by restaurant industry veterans who understand the challenges 
                of attracting customers in today's competitive landscape. We combine proven 
                marketing strategies with cutting-edge technology to help restaurants increase 
                revenue and build lasting customer relationships.
              </p>
              <p className="text-lg text-ray-dark-700">
                Since our founding, we've helped hundreds of restaurants across the country 
                increase their walk-in traffic, improve their online reputation, and grow 
                their revenue by an average of 35%.
              </p>
            </div>
            <div>
              <LazyImage
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Restaurant team working together"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-ray-darkGray max-w-3xl mx-auto">
              These core values guide everything we do and shape how we serve 
              our restaurant partners.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <Card key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-ray-blue rounded-full mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-ray-dark-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-ray-darkGray">
                    {value.description}
                  </p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-20 bg-ray-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Our Impact
            </h2>
            <p className="text-xl text-ray-gray max-w-3xl mx-auto">
              The numbers speak for themselves - we're proud of the results 
              we've achieved for our restaurant partners.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-ray-green mb-2">500+</div>
              <div className="text-ray-gray">Restaurants Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-ray-green mb-2">35%</div>
              <div className="text-ray-gray">Average Revenue Increase</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-ray-green mb-2">4.8★</div>
              <div className="text-ray-gray">Average Review Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-ray-green mb-2">98%</div>
              <div className="text-ray-gray">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
      
      <CTASection />
    </>
  )
}

export default About