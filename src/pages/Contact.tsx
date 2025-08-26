import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import Card from '../components/Card'
import Button from '../components/Button'

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    details: 'hello@rayrestaurant.com',
    description: 'Send us an email anytime'
  },
  {
    icon: Phone,
    title: 'Phone',
    details: '1-800-RAY-HELP',
    description: 'Call us during business hours'
  },
  {
    icon: MapPin,
    title: 'Address',
    details: '123 Restaurant Row, Food City, FC 12345',
    description: 'Visit our office'
  },
  {
    icon: Clock,
    title: 'Hours',
    details: 'Mon-Fri: 9AM-6PM EST',
    description: 'We\'re here to help'
  }
]

const Contact: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Contact RAY - Get in Touch with Restaurant Marketing Experts</title>
        <meta name="description" content="Contact RAY for restaurant marketing help. Get your free restaurant scan or speak with our experts about increasing your revenue." />
        <meta property="og:title" content="Contact RAY - Get in Touch with Restaurant Marketing Experts" />
        <meta property="og:description" content="Contact RAY for restaurant marketing help. Get your free restaurant scan or speak with our experts about increasing your revenue." />
        <meta property="og:url" content="https://rayrestaurant.com/contact" />
        <meta name="twitter:title" content="Contact RAY - Get in Touch with Restaurant Marketing Experts" />
        <meta name="twitter:description" content="Contact RAY for restaurant marketing help. Get your free restaurant scan or speak with our experts about increasing your revenue." />
        <link rel="canonical" href="https://rayrestaurant.com/contact" />
      </Helmet>
      
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-ray-dark-900 mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-ray-darkGray max-w-3xl mx-auto">
              Ready to increase your restaurant's revenue? We're here to help. 
              Get your free restaurant scan or speak with one of our experts.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-ray-dark-900 mb-8">
                Contact Information
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon
                  return (
                    <Card key={index} padding="sm">
                      <div className="flex items-start">
                        <div className="flex-shrink-0">
                          <div className="inline-flex items-center justify-center w-10 h-10 bg-ray-blue rounded-lg">
                            <IconComponent className="w-5 h-5 text-white" />
                          </div>
                        </div>
                        <div className="ml-4">
                          <h3 className="text-lg font-semibold text-ray-dark-900">
                            {info.title}
                          </h3>
                          <p className="text-ray-dark-700 font-medium">
                            {info.details}
                          </p>
                          <p className="text-sm text-ray-darkGray">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  )
                })}
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-bold text-ray-dark-900 mb-4">
                  Ready to get started?
                </h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    variant="primary"
                    onClick={() => console.log('Open HubSpot form')}
                  >
                    Scan Your Restaurant
                  </Button>
                  <Button 
                    variant="secondary"
                    onClick={() => console.log('Schedule call')}
                  >
                    Schedule a Call
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <Card>
                <h2 className="text-2xl font-bold text-ray-dark-900 mb-6">
                  Send us a message
                </h2>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-ray-dark-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ray-blue focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-ray-dark-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ray-blue focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-ray-dark-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ray-blue focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="restaurant" className="block text-sm font-medium text-ray-dark-700 mb-2">
                      Restaurant Name
                    </label>
                    <input
                      type="text"
                      id="restaurant"
                      name="restaurant"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ray-blue focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-ray-dark-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ray-blue focus:border-transparent"
                      required
                    ></textarea>
                  </div>
                  
                  <Button type="submit" variant="primary" className="w-full">
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact