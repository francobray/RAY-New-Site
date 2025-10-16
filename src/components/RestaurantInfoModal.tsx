'use client'

import { useState } from 'react'
import { X, MapPin, Mail, User, ArrowRight } from 'lucide-react'
import PlacesAutocomplete from './PlacesAutocomplete'
import { type Locale } from '@/lib/i18n'

interface RestaurantInfoModalProps {
  isOpen: boolean
  onClose: () => void
  onSuccess: (restaurantName: string, ownerName: string, email: string) => void
  locale?: Locale
}

interface FormData {
  restaurantName: string
  ownerName: string
  email: string
}

const RestaurantInfoModal = ({ isOpen, onClose, onSuccess, locale = 'es' }: RestaurantInfoModalProps) => {
  const [formData, setFormData] = useState<FormData>({
    restaurantName: '',
    ownerName: '',
    email: ''
  })
  
  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const content = {
    es: {
      title: 'Comencemos con tu restaurante',
      subtitle: 'Completa estos datos y prueba el agente en WhatsApp como si fuera tu restaurante',
      restaurantLabel: 'Nombre del restaurante',
      restaurantPlaceholder: 'Busca tu restaurante...',
      nameLabel: 'Tu nombre completo',
      namePlaceholder: 'Ej: Juan Pérez',
      emailLabel: 'Correo electrónico',
      emailPlaceholder: 'tu@email.com',
      submitButton: 'Probarlo en mi restaurante',
      submitting: 'Procesando...',
      successMessage: '¡Perfecto! Te contactaremos pronto para configurar tu WhatsApp.',
      errorMessage: 'Hubo un error. Por favor intenta de nuevo.',
      validation: {
        restaurantRequired: 'El nombre del restaurante es requerido',
        nameRequired: 'Tu nombre es requerido',
        emailRequired: 'El correo electrónico es requerido',
        emailInvalid: 'Por favor ingresa un correo electrónico válido'
      }
    },
    en: {
      title: 'Let\'s start with your restaurant',
      subtitle: 'Tell us a bit about your business to personalize your experience',
      restaurantLabel: 'Restaurant name',
      restaurantPlaceholder: 'Search for your restaurant...',
      nameLabel: 'Your full name',
      namePlaceholder: 'e.g. John Smith',
      emailLabel: 'Email address',
      emailPlaceholder: 'your@email.com',
      submitButton: 'Start WhatsApp Setup',
      submitting: 'Processing...',
      successMessage: 'Perfect! We\'ll contact you soon to set up your WhatsApp.',
      errorMessage: 'There was an error. Please try again.',
      validation: {
        restaurantRequired: 'Restaurant name is required',
        nameRequired: 'Your name is required',
        emailRequired: 'Email address is required',
        emailInvalid: 'Please enter a valid email address'
      }
    }
  }

  const t = content[locale]

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {}

    if (!formData.restaurantName.trim()) {
      newErrors.restaurantName = t.validation.restaurantRequired
    }

    if (!formData.ownerName.trim()) {
      newErrors.ownerName = t.validation.nameRequired
    }

    if (!formData.email.trim()) {
      newErrors.email = t.validation.emailRequired
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t.validation.emailInvalid
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error for this field
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }))
    }
  }

  const handleRestaurantNameChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      restaurantName: value
    }))
    
    // Clear error for restaurant name
    if (errors.restaurantName) {
      setErrors(prev => ({
        ...prev,
        restaurantName: undefined
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Send data to our API route which forwards to Zapier
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          source: 'whatsapp-delivery-modal',
          restaurantName: formData.restaurantName,
          ownerName: formData.ownerName,
          email: formData.email,
          locale: locale
        })
      })

      if (response.ok) {
        setSubmitStatus('success')
        // After showing success, trigger the chat modal
        setTimeout(() => {
          onSuccess(formData.restaurantName, formData.ownerName, formData.email)
          onClose()
          setSubmitStatus('idle')
          setFormData({
            restaurantName: '',
            ownerName: '',
            email: ''
          })
        }, 1500)
      } else {
        throw new Error('Network response was not ok')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl my-auto max-h-[95vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white p-4 sm:p-6 rounded-t-2xl sticky top-0 z-10">
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-start space-x-2 sm:space-x-3 flex-1 min-w-0">
              <div className="bg-white bg-opacity-20 rounded-full p-1.5 sm:p-2 flex items-center justify-center flex-shrink-0">
                <img 
                  src="/images/WhatsApp.svg" 
                  alt="WhatsApp" 
                  className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
                  width={20}
                  height={20}
                />
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-lg sm:text-xl font-bold leading-tight">{t.title}</h2>
                <p className="text-emerald-100 text-xs sm:text-sm mt-1 leading-snug">{t.subtitle}</p>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="text-white hover:bg-white hover:bg-opacity-20 rounded-full p-1.5 sm:p-2 transition-colors flex-shrink-0"
              disabled={isSubmitting}
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Form */}
        <div className="p-4 sm:p-6">
          {submitStatus === 'success' ? (
            <div className="text-center py-6 sm:py-8">
              <div className="bg-green-100 rounded-full p-3 w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 flex items-center justify-center">
                <ArrowRight className="w-7 h-7 sm:w-8 sm:h-8 text-green-600" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">¡Listo!</h3>
              <p className="text-sm sm:text-base text-gray-600">{t.successMessage}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {/* Restaurant Name */}
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 inline mr-1" />
                  {t.restaurantLabel}
                </label>
                <PlacesAutocomplete
                  value={formData.restaurantName}
                  onChange={handleRestaurantNameChange}
                  placeholder={t.restaurantPlaceholder}
                  className={`w-full px-3 py-2.5 sm:px-4 sm:py-3 border rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors ${
                    errors.restaurantName ? 'border-red-500' : 'border-gray-300'
                  }`}
                  required
                />
                {errors.restaurantName && (
                  <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.restaurantName}</p>
                )}
              </div>

              {/* Owner Name */}
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                  <User className="w-3.5 h-3.5 sm:w-4 sm:h-4 inline mr-1" />
                  {t.nameLabel}
                </label>
                <input
                  type="text"
                  name="ownerName"
                  value={formData.ownerName}
                  onChange={handleInputChange}
                  placeholder={t.namePlaceholder}
                  className={`w-full px-3 py-2.5 sm:px-4 sm:py-3 border rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors ${
                    errors.ownerName ? 'border-red-500' : 'border-gray-300'
                  }`}
                  required
                />
                {errors.ownerName && (
                  <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.ownerName}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                  <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 inline mr-1" />
                  {t.emailLabel}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder={t.emailPlaceholder}
                  className={`w-full px-3 py-2.5 sm:px-4 sm:py-3 border rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  required
                />
                {errors.email && (
                  <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3 sm:p-4">
                  <p className="text-red-800 text-xs sm:text-sm">{t.errorMessage}</p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg text-sm sm:text-base font-semibold transition-all duration-200 flex items-center justify-center space-x-2 ${
                  isSubmitting
                    ? 'bg-emerald-400 text-white cursor-not-allowed'
                    : 'bg-emerald-600 text-white hover:bg-emerald-700 active:scale-95 sm:hover:scale-105'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                    <span>{t.submitting}</span>
                  </>
                ) : (
                  <>
                    <span>{t.submitButton}</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default RestaurantInfoModal
