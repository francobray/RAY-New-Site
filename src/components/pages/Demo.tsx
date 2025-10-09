'use client'

import { useState } from 'react'
import { useTranslations } from '../../hooks/useTranslations'
import { type Locale } from '@/lib/i18n'

interface DemoProps {
  locale: Locale
}

interface Benefit {
  TITLE: string
  DESCRIPTION: string
}

// Icons component for the lightning icons
const LightningIcon = () => (
  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
)

const Demo = ({ locale }: DemoProps) => {
  const t = useTranslations(locale)
  
  const [formData, setFormData] = useState({
    role: '',
    firstName: '',
    lastName: '',
    email: '',
    cellphone: '',
    phoneCountry: 'us',
    restaurantName: '',
    howDidYouHear: '',
    agreeToTexts: false
  })
  
  const [formErrors, setFormErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const validateForm = () => {
    const errors: Record<string, string> = {}
    
    if (!formData.role) {
      errors.role = t.DEMO_PAGE.FORM.VALIDATION.ROLE_REQUIRED
    }
    
    if (!formData.firstName.trim()) {
      errors.firstName = t.DEMO_PAGE.FORM.VALIDATION.FIRST_NAME_REQUIRED
    }
    
    if (!formData.lastName.trim()) {
      errors.lastName = t.DEMO_PAGE.FORM.VALIDATION.LAST_NAME_REQUIRED
    }
    
    if (!formData.email.trim()) {
      errors.email = t.DEMO_PAGE.FORM.VALIDATION.EMAIL_REQUIRED
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = t.DEMO_PAGE.FORM.VALIDATION.EMAIL_INVALID
    }
    
    if (!formData.cellphone.trim()) {
      errors.cellphone = t.DEMO_PAGE.FORM.VALIDATION.PHONE_REQUIRED
    } else {
      if (formData.phoneCountry === 'us') {
        if (!/^\d{10}$/.test(formData.cellphone.replace(/\D/g, ''))) {
          errors.cellphone = t.DEMO_PAGE.FORM.VALIDATION.PHONE_INVALID_US
        }
      } else {
        if (!/^\+\d{7,}$/.test(formData.cellphone)) {
          errors.cellphone = t.DEMO_PAGE.FORM.VALIDATION.PHONE_INVALID_INTL
        }
      }
    }
    
    return errors
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const newValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    
    setFormData(prev => ({
      ...prev,
      [name]: newValue
    }))
    
    // Clear error for this field when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    const errors = validateForm()
    
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors)
      setIsSubmitting(false)
      return
    }
    
    try {
      // Send data to Zapier webhook (URL-encoded to avoid CORS preflight)
      const encodedBody = new URLSearchParams()
      Object.entries(formData).forEach(([key, value]) => {
        encodedBody.append(key, String(value))
      })

      await fetch('https://hooks.zapier.com/hooks/catch/21332246/u9rougj/', {
        method: 'POST',
        body: encodedBody
      })
      
      setSubmitStatus('success')
      
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Results showcase component
  const ResultsShowcase = () => (
    <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
      <div className="flex items-center justify-between">
        <div className="text-center">
          <div className="text-2xl font-bold text-ray-blue">{t.DEMO_PAGE.STATS.NAVIGATION_INCREASE}</div>
          <div className="text-xs text-gray-600">{t.DEMO_PAGE.STATS.NAVIGATION_LABEL}</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-ray-green">{t.DEMO_PAGE.STATS.DAYS_TO_RESULTS}</div>
          <div className="text-xs text-gray-600">{t.DEMO_PAGE.STATS.DAYS_LABEL}</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900">{t.DEMO_PAGE.STATS.RESTAURANTS_COUNT}</div>
          <div className="text-xs text-gray-600">{t.DEMO_PAGE.STATS.RESTAURANTS_LABEL}</div>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <div className="bg-gray-50 min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
              
              {/* Left Column - Information */}
              <div className="p-8 lg:p-12 bg-gray-50">
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  {t.DEMO_PAGE.HERO_TITLE}
                </h1>
                
                <p className="text-lg text-gray-600 mb-6">
                  {t.DEMO_PAGE.HERO_SUBTITLE
                    .replace('{RESTAURANTS_COUNT}', t.TRUST.RESTAURANTS_COUNT)
                    .replace('{COMPANY_NAME}', t.COMPANY.NAME)}
                </p>
                
                <ResultsShowcase />
                
                <h2 className="text-xl font-semibold text-gray-900 mb-6">
                  {t.DEMO_PAGE.DEMO_INTRO}
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {t.DEMO_PAGE.BENEFITS.map((benefit: Benefit, index: number) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="flex items-start gap-3">
                        <LightningIcon />
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">
                            {benefit.TITLE}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {benefit.DESCRIPTION}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Trust Indicators */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                    <div className="text-2xl mb-2">📈</div>
                    <div className="font-semibold text-gray-900 text-sm">
                      {t.TRUST.GROWTH_GUARANTEE}
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                    <div className="text-2xl mb-2">🚀</div>
                    <div className="font-semibold text-gray-900 text-sm">
                      {t.TRUST.RESULTS_TIMEFRAME}
                    </div>
                  </div>
                </div>
                
                {/* Testimonial */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-start gap-4">
                    <img
                      src="/images/Temple_Team.jpeg"
                      alt="Restaurant Success Story"
                      className="w-12 h-12 rounded-full object-cover"
                      loading="lazy"
                    />
                    <div>
                      <p className="text-gray-700 italic mb-2">
                        "{t.DEMO_PAGE.TESTIMONIAL.QUOTE}"
                      </p>
                      <p className="text-sm font-semibold text-gray-900">
                        {t.DEMO_PAGE.TESTIMONIAL.AUTHOR}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Column - Form */}
              <div className="p-8 lg:p-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">
                  {t.DEMO_PAGE.FORM_TITLE}
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Role */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.DEMO_PAGE.FORM.ROLE_LABEL}
                    </label>
                    <select
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        formErrors.role ? 'border-red-500' : 'border-gray-300'
                      }`}
                      required
                    >
                      <option value="">{t.DEMO_PAGE.FORM.ROLE_PLACEHOLDER}</option>
                      <option value="owner">{t.DEMO_PAGE.FORM.ROLE_OPTIONS.OWNER}</option>
                      <option value="manager">{t.DEMO_PAGE.FORM.ROLE_OPTIONS.MANAGER}</option>
                      <option value="marketing">{t.DEMO_PAGE.FORM.ROLE_OPTIONS.MARKETING}</option>
                      <option value="other">{t.DEMO_PAGE.FORM.ROLE_OPTIONS.OTHER}</option>
                    </select>
                    {formErrors.role && (
                      <p className="text-red-500 text-sm mt-1">{formErrors.role}</p>
                    )}
                  </div>
                  
                  {/* Name fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t.DEMO_PAGE.FORM.FIRST_NAME_LABEL}
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder={t.DEMO_PAGE.FORM.FIRST_NAME_PLACEHOLDER}
                        className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                          formErrors.firstName ? 'border-red-500' : 'border-gray-300'
                        }`}
                        required
                      />
                      {formErrors.firstName && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.firstName}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t.DEMO_PAGE.FORM.LAST_NAME_LABEL}
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder={t.DEMO_PAGE.FORM.LAST_NAME_PLACEHOLDER}
                        className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                          formErrors.lastName ? 'border-red-500' : 'border-gray-300'
                        }`}
                        required
                      />
                      {formErrors.lastName && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.lastName}</p>
                      )}
                    </div>
                  </div>
                  
                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.DEMO_PAGE.FORM.EMAIL_LABEL}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder={t.DEMO_PAGE.FORM.EMAIL_PLACEHOLDER}
                      className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        formErrors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      required
                    />
                    {formErrors.email && (
                      <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                    )}
                  </div>
                  
                  {/* Cellphone */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.DEMO_PAGE.FORM.PHONE_LABEL}
                    </label>
                    <div className="flex">
                      <select
                        name="phoneCountry"
                        value={formData.phoneCountry}
                        onChange={handleInputChange}
                        className="px-3 py-2 border border-r-0 border-gray-300 rounded-l-lg bg-gray-50 text-sm focus:outline-none"
                      >
                        <option value="us">🇺🇸 US</option>
                        <option value="other">Other</option>
                      </select>
                      <input
                        type="tel"
                        name="cellphone"
                        value={formData.cellphone}
                        onChange={handleInputChange}
                        placeholder={t.DEMO_PAGE.FORM.PHONE_PLACEHOLDER}
                        className={`flex-1 px-3 py-2 border rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                          formErrors.cellphone ? 'border-red-500' : 'border-gray-300'
                        }`}
                        required
                      />
                    </div>
                    {formErrors.cellphone && (
                      <p className="text-red-500 text-sm mt-1">{formErrors.cellphone}</p>
                    )}
                  </div>
                  
                  {/* Restaurant name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.DEMO_PAGE.FORM.RESTAURANT_NAME_LABEL}
                    </label>
                    <input
                      type="text"
                      name="restaurantName"
                      value={formData.restaurantName}
                      onChange={handleInputChange}
                      placeholder={t.DEMO_PAGE.FORM.RESTAURANT_NAME_PLACEHOLDER}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      {t.DEMO_PAGE.FORM.RESTAURANT_NAME_HINT}
                    </p>
                  </div>
                  
                  {/* How did you hear about us */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.DEMO_PAGE.FORM.HOW_HEARD_LABEL}
                    </label>
                    <select
                      name="howDidYouHear"
                      value={formData.howDidYouHear}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">{t.DEMO_PAGE.FORM.HOW_HEARD_PLACEHOLDER}</option>
                      <option value="google">{t.DEMO_PAGE.FORM.HOW_HEARD_OPTIONS.GOOGLE}</option>
                      <option value="social">{t.DEMO_PAGE.FORM.HOW_HEARD_OPTIONS.SOCIAL}</option>
                      <option value="referral">{t.DEMO_PAGE.FORM.HOW_HEARD_OPTIONS.REFERRAL}</option>
                      <option value="advertising">{t.DEMO_PAGE.FORM.HOW_HEARD_OPTIONS.ADVERTISING}</option>
                      <option value="other">{t.DEMO_PAGE.FORM.HOW_HEARD_OPTIONS.OTHER}</option>
                    </select>
                  </div>
                  
                  {/* Checkbox */}
                  <div className="space-y-4">
                    <label className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        name="agreeToTexts"
                        checked={formData.agreeToTexts}
                        onChange={handleInputChange}
                        className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-600">
                        {t.DEMO_PAGE.FORM.CONSENT_TEXT.replace('{COMPANY_NAME}', t.COMPANY.NAME)}
                      </span>
                    </label>
                    <p className="text-xs text-gray-500">
                      {t.DEMO_PAGE.FORM.CONSENT_DISCLAIMER}
                    </p>
                  </div>
                  
                  {/* Status messages */}
                  {submitStatus === 'success' && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <p className="text-green-800 text-sm">
                        {t.DEMO_PAGE.FORM.SUCCESS_MESSAGE}
                      </p>
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <p className="text-red-800 text-sm">
                        {t.DEMO_PAGE.FORM.ERROR_MESSAGE}
                      </p>
                    </div>
                  )}

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-200 ${
                      isSubmitting
                        ? 'bg-blue-400 text-white cursor-not-allowed'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                        </svg>
                        {t.DEMO_PAGE.FORM.SUBMITTING}
                      </span>
                    ) : (
                      t.DEMO_PAGE.FORM.SUBMIT_BUTTON
                    )}
                  </button>
                  
                  {/* Legal text */}
                  <p className="text-xs text-gray-500 text-center">
                    {t.DEMO_PAGE.FORM.LEGAL_TEXT}{' '}
                    <a href={`/${locale}/terms-of-service`} className="text-blue-600 hover:underline">
                      {t.DEMO_PAGE.FORM.TERMS_LINK}
                    </a>{' '}
                    {locale === 'es' ? 'y' : 'and'}{' '}
                    <a href={`/${locale}/privacy-policy`} className="text-blue-600 hover:underline">
                      {t.DEMO_PAGE.FORM.PRIVACY_LINK}
                    </a>.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Demo