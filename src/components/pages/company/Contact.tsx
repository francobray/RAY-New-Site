'use client'

import React, { useState } from 'react'
import { CheckCircle } from 'lucide-react'
import { useTranslations } from '../../../hooks/useTranslations'
import { type Locale } from '@/lib/i18n'

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

interface ContactProps {
  locale: Locale
}

interface SelectOption {
  value: string
  label: string
}

const Contact: React.FC<ContactProps> = ({ locale }) => {
  const t = useTranslations(locale)
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
    return {
      title: t.CONTACT_PAGE.TITLE,
      subtitle: t.CONTACT_PAGE.SUBTITLE,
      submitText: t.CONTACT_PAGE.FORM.SUBMIT_BUTTON,
      successMessage: t.CONTACT_PAGE.FORM.SUCCESS_MESSAGE
    }
  }

  const content = getPageContent()

  // Form validation
  const validateField = (name: keyof FormData, value: string): string | undefined => {
    switch (name) {
      case 'fullName':
        if (!value.trim()) return t.CONTACT_PAGE.FORM.VALIDATION.FULL_NAME_REQUIRED
        if (value.trim().length < 2) return t.CONTACT_PAGE.FORM.VALIDATION.FULL_NAME_MIN
        break
      case 'workEmail':
        if (!value.trim()) return t.CONTACT_PAGE.FORM.VALIDATION.EMAIL_REQUIRED
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(value)) return t.CONTACT_PAGE.FORM.VALIDATION.EMAIL_INVALID
        break
      case 'message':
        if (!value.trim()) return t.CONTACT_PAGE.FORM.VALIDATION.MESSAGE_REQUIRED
        if (value.trim().length < 10) return t.CONTACT_PAGE.FORM.VALIDATION.MESSAGE_MIN
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
        source: 'contact_page',
        page_url: window.location.href,
        utm_source: null,
        utm_medium: null,
        utm_campaign: null
      })
      
      setIsSubmitted(true)
    } catch (error) {
      setSubmitError('Something went wrong. Please try again or email us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      
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
                  {t.CONTACT_PAGE.FORM.SUCCESS_TITLE}
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
                </div>
              </div>
            ) : (
              <>
                {/* Form */}
                <form onSubmit={handleSubmit} className="p-8 md:p-12" noValidate>
                <div className="space-y-6">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-semibold text-ray-dark-900 mb-2">
                      {t.CONTACT_PAGE.FORM.FULL_NAME} *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      placeholder={t.CONTACT_PAGE.FORM.FULL_NAME_PLACEHOLDER}
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
                      {t.CONTACT_PAGE.FORM.WORK_EMAIL} *
                    </label>
                    <input
                      type="email"
                      id="workEmail"
                      value={formData.workEmail}
                      onChange={(e) => handleInputChange('workEmail', e.target.value)}
                      placeholder={t.CONTACT_PAGE.FORM.WORK_EMAIL_PLACEHOLDER}
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
                      {t.CONTACT_PAGE.FORM.COMPANY}
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      placeholder={t.CONTACT_PAGE.FORM.COMPANY_PLACEHOLDER}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-ray-dark-900 placeholder-ray-darkGray focus:outline-none focus:ring-2 focus:ring-ray-blue focus:border-transparent hover:border-gray-400 transition-colors duration-200"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-ray-dark-900 mb-2">
                      {t.CONTACT_PAGE.FORM.PHONE}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder={t.CONTACT_PAGE.FORM.PHONE_PLACEHOLDER}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-ray-dark-900 placeholder-ray-darkGray focus:outline-none focus:ring-2 focus:ring-ray-blue focus:border-transparent hover:border-gray-400 transition-colors duration-200"
                    />
                  </div>

                  {/* Number of Locations */}
                  <div>
                    <label htmlFor="locations" className="block text-sm font-semibold text-ray-dark-900 mb-2">
                      {t.CONTACT_PAGE.FORM.LOCATIONS}
                    </label>
                    <select
                      id="locations"
                      value={formData.locations}
                      onChange={(e) => handleInputChange('locations', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-ray-dark-900 focus:outline-none focus:ring-2 focus:ring-ray-blue focus:border-transparent hover:border-gray-400 transition-colors duration-200"
                    >
                      {t.CONTACT_PAGE.FORM.LOCATIONS_OPTIONS.map((option: SelectOption) => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-ray-dark-900 mb-2">
                      {t.CONTACT_PAGE.FORM.MESSAGE} *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder={t.CONTACT_PAGE.FORM.MESSAGE_PLACEHOLDER}
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
                    {isSubmitting ? t.CONTACT_PAGE.FORM.SUBMITTING : content.submitText}
                  </button>
                </div>
                </form>
                
                {/* HubSpot Form Embed - Removed to fix build errors */}
                {/* <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="hs-form-frame" data-region="na1" data-form-id="88d103f6-3422-49d9-8748-856de11730e6" data-portal-id="39590119"></div>
                </div> */}
              </>
            )}
            
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