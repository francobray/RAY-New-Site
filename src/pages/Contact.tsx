import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useEffect } from 'react'
import { Mail, Clock } from 'lucide-react'
import Card from '../components/Card'
import HubSpotGradeModal from '../components/HubSpotGradeModal'
import HubSpotTalkToExpertModal from '../components/HubSpotTalkToExpertModal'
import { useHubSpotModal } from '../hooks/useHubSpotModal'

// Extend Window interface for HubSpot
declare global {
  interface Window {
    hbspt: any
  }
}

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    details: 'hello@rayapp.io',
    description: 'Send us an email anytime'
  },
  {
    icon: Clock,
    title: 'Hours',
    details: 'Mon-Fri: 9AM-6PM EST',
    description: 'We\'re here to help'
  }
]

const Contact: React.FC = () => {
  const { 
    isTalkToExpertModalOpen,
    closeTalkToExpertModal
  } = useHubSpotModal()

  useEffect(() => {
    // Check if HubSpot script is already loaded
    const existingScript = document.querySelector('script[src="https://js.hsforms.net/forms/embed/39590119.js"]')
    
    if (!existingScript) {
      const script = document.createElement('script')
      script.src = 'https://js.hsforms.net/forms/embed/39590119.js'
      script.defer = true
      script.onload = () => {
        console.log('HubSpot contact form script loaded')
      }
      script.onerror = () => {
        console.error('Failed to load HubSpot contact form script')
      }
      
      document.head.appendChild(script)
    }

    // Cleanup function
    return () => {
      // Don't remove the script on unmount as it might be used by other components
    }
  }, [])

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
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                          {info.title === 'Email' ? (
                            <a 
                              href={`mailto:${info.details}`}
                              className="text-ray-dark-700 font-medium hover:text-ray-blue transition-colors duration-200"
                              aria-label={`Send email to ${info.details}`}
                            >
                              {info.details}
                            </a>
                          ) : (
                            <p className="text-ray-dark-700 font-medium">
                              {info.details}
                            </p>
                          )}
                          <p className="text-sm text-ray-darkGray">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  )
                })}
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <Card>
                <h2 className="text-2xl font-bold text-ray-dark-900 mb-6">
                  Send us a message
                </h2>
                
                {/* HubSpot Contact Form */}
                <div className="min-h-[400px]">
                  <div 
                    className="hs-form-frame" 
                    data-region="na1" 
                    data-form-id="88d103f6-3422-49d9-8748-856de11730e6" 
                    data-portal-id="39590119"
                  ></div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      {/* HubSpot Modals */}
      <HubSpotGradeModal
        isOpen={isGradeModalOpen}
        onClose={closeGradeModal}
      />
      <HubSpotTalkToExpertModal
        isOpen={isTalkToExpertModalOpen}
        onClose={closeTalkToExpertModal}
      />
    </>
  )
}

export default Contact