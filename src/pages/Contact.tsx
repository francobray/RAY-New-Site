import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useSearchParams } from 'react-router-dom'
import { Mail, MapPin, CheckCircle } from 'lucide-react'

// Trust indicators data
const trustIndicators = [
  {
    metric: '1,000+',
    label: 'Restaurants served'
  },
  {
    metric: '30%',
    label: 'Average growth'
  },
  {
    metric: '4.8★',
    label: 'Customer rating'
  }
]

// Form data types
interface FormData {
  fullName: string
  workEmail: string
  company: string
  phone: string
  locations: string
  message: string
}

interface FormErrors {
  [key: string]: string
}

const Contact: React.FC = () => {
  const [searchParams] = useSearchParams()
  const intent = searchParams.get('intent') || 'contact'
  
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    workEmail: '',
    company: '',
    phone: '',
    locations: '1',
    message: ''
  })
  const [errors, setErrors] = useState<FormErrors>({})

  // Dynamic content based on intent
  const getPageContent = () => {
    switch (intent) {
      case 'expert':
        return {
          title: 'Talk to an Expert',
          subtitle: 'Get personalized recommendations from our restaurant marketing specialists.',
          submitText: 'Talk to an Expert',
          successMessage: 'Thanks! Our expert team will reach out shortly to tailor a plan.'
        }
      case 'demo':
        return {
          title: 'Request a Free Demo',
          subtitle: 'See how RAY can transform your restaurant\'s marketing and revenue.',
          submitText: 'Request Free Demo',
          successMessage: 'You\'re in! We\'ll email your demo details and next steps.'
        }
      default:
        return {
          title: 'Get in Touch',
          subtitle: 'Fill out the form below, and we\'ll connect you to the right team. We look forward to hearing from you!',
          submitText: 'Send Message',
          successMessage: 'Thanks for reaching out! We\'ll get back to you within 24 hours.'
        }
    }
  }

  const content = getPageContent()

  // Form validation
  const validateField = (name: keyof FormData, value: string): string | undefined => {
    switch (name) {
      case 'fullName':
        if (!value.trim()) return 'Full name is required'
        if (value.trim().length < 2) return 'Please enter your full name'
        break
      case 'workEmail':
        if (!value.trim()) return 'Work email is required'
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(value)) return 'Please enter a valid email address'
        break
      case 'message':
        if (!value.trim()) return 'Message is required'
        if (value.trim().length < 10) return 'Please provide more details (at least 10 characters)'
        break
    }
    return undefined
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    
    // Validate required fields
    const requiredFields: (keyof FormData)[] = ['fullName', 'workEmail', 'message']
    requiredFields.forEach(field => {
      const error = validateField(field, formData[field])
      if (error) newErrors[field] = error
    })

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Handle input changes with inline validation
  const handleInputChange = (name: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error for this field if it exists
    if (errors[name]) {
      const newErrors = { ...errors }
      delete newErrors[name]
      setErrors(newErrors)
    }
    
    // Validate on blur for better UX
    if (value.trim()) {
      const error = validateField(name, value)
      if (error) {
        setErrors(prev => ({ ...prev, [name]: error }))
      }
    }
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      // Focus first error field
      const firstErrorField = Object.keys(errors)[0]
      const element = document.getElementById(firstErrorField)
      element?.focus()
      return
    }

    setIsSubmitting(true)
    setSubmitError(null)

    try {
      // Simulate form submission (replace with actual API call)
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // In real implementation, send to your backend or HubSpot
      console.log('Form submitted:', {
        ...formData,
        intent,
        source: 'contact_page',
        page_url: window.location.href,
        utm_source: searchParams.get('utm_source'),
        utm_medium: searchParams.get('utm_medium'),
        utm_campaign: searchParams.get('utm_campaign')
      })
      
      setIsSubmitted(true)
    } catch (error) {
      setSubmitError('Something went wrong. Please try again or email us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  // SEO content
  const seoTitle = content.title === 'Get in Touch' 
    ? 'Contact RAY - Get in Touch with Restaurant Marketing Experts'
    : `${content.title} - RAY Restaurant Marketing Platform`
    
  const seoDescription = content.title === 'Get in Touch'
    ? 'Contact RAY for restaurant marketing help. Get personalized recommendations to increase your revenue and grow your business.'
    : content.subtitle

  return (
    <>
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:url" content={`https://rayrestaurant.com/contact${intent !== 'contact' ? `?intent=${intent}` : ''}`} />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDescription} />
        <link rel="canonical" href={`https://rayrestaurant.com/contact${intent !== 'contact' ? `?intent=${intent}` : ''}`} />
        
        {/* ContactPage Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": content.title,
            "description": seoDescription,
            "url": `https://rayrestaurant.com/contact${intent !== 'contact' ? `?intent=${intent}` : ''}`,
            "mainEntity": {
              "@type": "Organization",
              "name": "RAY",
              "url": "https://rayrestaurant.com",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "hello@rayapp.io"
              }
            }
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30 py-12">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-ray-dark-900 mb-6 leading-tight">
              {content.title}
            </h1>
            <p className="text-xl text-ray-darkGray leading-relaxed max-w-xl mx-auto">
              {content.subtitle}
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            {isSubmitted ? (
              /* Success State */
              <div className="p-8 md:p-12 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-ray-dark-900 mb-4">
                  Message Sent Successfully!
                </h2>
                <p className="text-ray-darkGray mb-8 leading-relaxed">
                  {content.successMessage}
                </p>
                <div className="space-y-4">
                  <button
                    onClick={() => {
                      setIsSubmitted(false)
                      setFormData({
                        fullName: '',
                        workEmail: '',
                        company: '',
                        phone: '',
                        locations: '1',
                        message: ''
                      })
                    }}
                    className="text-ray-blue hover:text-blue-600 font-medium transition-colors duration-200"
                  >
                    Send another message
                  </button>
                  <div className="text-sm text-ray-darkGray">
                    Or email us directly at{' '}
                    <a href="mailto:hello@rayapp.io" className="text-ray-blue hover:underline">
                      hello@rayapp.io
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              /* Form */
              <form onSubmit={handleSubmit} className="p-8 md:p-12" noValidate>
                <div className="space-y-6">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-semibold text-ray-dark-900 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      placeholder="John Smith"
                      className={`w-full px-4 py-3 border rounded-lg text-ray-dark-900 placeholder-ray-darkGray focus:outline-none focus:ring-2 focus:ring-ray-blue focus:border-transparent transition-colors duration-200 ${
                        errors.fullName ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-gray-400'
                      }`}
                      aria-invalid={errors.fullName ? 'true' : 'false'}
                      aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                    />
                    {errors.fullName && (
                      <div id="fullName-error" className="mt-2 flex items-center text-sm text-red-600" role="alert">
                        {errors.fullName}
                      </div>
                    )}
                  </div>

                  {/* Work Email */}
                  <div>
                    <label htmlFor="workEmail" className="block text-sm font-semibold text-ray-dark-900 mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      id="workEmail"
                      value={formData.workEmail}
                      onChange={(e) => handleInputChange('workEmail', e.target.value)}
                      placeholder="john@restaurant.com"
                      className={`w-full px-4 py-3 border rounded-lg text-ray-dark-900 placeholder-ray-darkGray focus:outline-none focus:ring-2 focus:ring-ray-blue focus:border-transparent transition-colors duration-200 ${
                        errors.workEmail ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-gray-400'
                      }`}
                      aria-invalid={errors.workEmail ? 'true' : 'false'}
                      aria-describedby={errors.workEmail ? 'workEmail-error' : undefined}
                    />
                    {errors.workEmail && (
                      <div id="workEmail-error" className="mt-2 flex items-center text-sm text-red-600" role="alert">
                        {errors.workEmail}
                      </div>
                    )}
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-ray-dark-900 mb-2">
                      Restaurant/Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      placeholder="Your Restaurant Name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-ray-dark-900 placeholder-ray-darkGray focus:outline-none focus:ring-2 focus:ring-ray-blue focus:border-transparent hover:border-gray-400 transition-colors duration-200"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-ray-dark-900 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="(555) 123-4567"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-ray-dark-900 placeholder-ray-darkGray focus:outline-none focus:ring-2 focus:ring-ray-blue focus:border-transparent hover:border-gray-400 transition-colors duration-200"
                    />
                  </div>

                  {/* Number of Locations */}
                  <div>
                    <label htmlFor="locations" className="block text-sm font-semibold text-ray-dark-900 mb-2">
                      Number of Locations
                    </label>
                    <select
                      id="locations"
                      value={formData.locations}
                      onChange={(e) => handleInputChange('locations', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-ray-dark-900 focus:outline-none focus:ring-2 focus:ring-ray-blue focus:border-transparent hover:border-gray-400 transition-colors duration-200"
                    >
                      <option value="1">1 location</option>
                      <option value="2-5">2-5 locations</option>
                      <option value="6-10">6-10 locations</option>
                      <option value="11-25">11-25 locations</option>
                      <option value="25+">25+ locations</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-ray-dark-900 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Tell us about your restaurant and how we can help you grow..."
                      className={`w-full px-4 py-3 border rounded-lg text-ray-dark-900 placeholder-ray-darkGray focus:outline-none focus:ring-2 focus:ring-ray-blue focus:border-transparent transition-colors duration-200 resize-vertical ${
                        errors.message ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-gray-400'
                      }`}
                      aria-invalid={errors.message ? 'true' : 'false'}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    {errors.message && (
                      <div id="message-error" className="mt-2 flex items-center text-sm text-red-600" role="alert">
                        {errors.message}
                      </div>
                    )}
                  </div>

                  {/* Submit Error */}
                  {submitError && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg" role="alert">
                      <div className="text-sm text-red-600">
                        {submitError}
                      </div>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-ray-blue hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ray-blue focus:ring-offset-2"
                  >
                    {isSubmitting ? 'Sending...' : content.submitText}
                  </button>
                </div>
              </form>
            )}
            
            {/* HubSpot Form Embed */}
            <div className="p-8 md:p-12 text-center">
              <script charSet="utf-8" type="text/javascript" src="//js.hsforms.net/forms/embed/v2.js"></script>
              <script>
                {`hbspt.forms.create({
                  region: "na1",
                  portalId: "39590119",
                  formId: "789dfc61-6b4a-416d-bec1-9f8c145f984a"
                });`}
              </script>
            </div>
          </div>

          {/* Direct Contact Info */}
          <div className="mt-12 text-center">
            <div className="text-sm text-ray-darkGray mb-4">
              Prefer to reach out directly?
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
              <a 
                href="mailto:hello@rayapp.io" 
                className="flex items-center text-ray-blue hover:text-blue-600 transition-colors duration-200"
              >
                <Mail className="w-4 h-4 mr-2" />
                hello@rayapp.io
              </a>
              <div className="flex items-center text-ray-darkGray">
                <MapPin className="w-4 h-4 mr-2" />
                Available nationwide
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Live region for form status announcements */}
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        {isSubmitted && `Form submitted successfully. ${content.successMessage}`}
        {submitError && `Form submission failed. ${submitError}`}
      </div>
    </>
  )
}

export default Contact