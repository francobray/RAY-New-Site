'use client'

import React, { useState } from 'react'
import { X } from 'lucide-react'
import { type Locale } from '@/lib/i18n'

interface JobApplicationModalProps {
  isOpen: boolean
  onClose: () => void
  jobTitle: string
  locale: Locale
}

const JobApplicationModal: React.FC<JobApplicationModalProps> = ({
  isOpen,
  onClose,
  jobTitle,
  locale
}) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    linkedIn: '',
    coverLetter: '',
    resumeUrl: ''
  })

  const [formErrors, setFormErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const validateForm = () => {
    const errors: Record<string, string> = {}
    
    if (!formData.firstName.trim()) {
      errors.firstName = locale === 'es' ? 'El nombre es requerido' : 'First name is required'
    }
    
    if (!formData.lastName.trim()) {
      errors.lastName = locale === 'es' ? 'El apellido es requerido' : 'Last name is required'
    }
    
    if (!formData.email.trim()) {
      errors.email = locale === 'es' ? 'El email es requerido' : 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = locale === 'es' ? 'Email inválido' : 'Invalid email'
    }
    
    if (!formData.phone.trim()) {
      errors.phone = locale === 'es' ? 'El teléfono es requerido' : 'Phone is required'
    }
    
    if (!formData.linkedIn.trim()) {
      errors.linkedIn = locale === 'es' ? 'El LinkedIn es requerido' : 'LinkedIn is required'
    }
    
    if (!formData.resumeUrl.trim()) {
      errors.resumeUrl = locale === 'es' ? 'El CV/Resume es requerido' : 'Resume URL is required'
    } else {
      // Validate that the URL is a Google Drive link
      const isGoogleDrive = /^https:\/\/(drive\.google\.com|docs\.google\.com)/.test(formData.resumeUrl.trim())
      if (!isGoogleDrive) {
        errors.resumeUrl = locale === 'es' 
          ? 'Por favor proporciona un enlace de Google Drive' 
          : 'Please provide a Google Drive link'
      }
    }
    
    if (!formData.coverLetter.trim()) {
      errors.coverLetter = locale === 'es' ? 'La carta de presentación es requerida' : 'Cover letter is required'
    }
    
    return errors
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
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
      const payload = {
        ...formData,
        jobTitle,
        locale,
        source: 'job-application'
      }
      
      console.log('[DEBUG] Sending job application:', payload)
      console.log('[DEBUG] Payload stringified:', JSON.stringify(payload, null, 2))
      
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      })

      console.log('[DEBUG] Response status:', response.status)
      console.log('[DEBUG] Response ok:', response.ok)
      
      if (!response.ok) {
        const errorText = await response.text()
        console.error('[DEBUG] Error response:', errorText)
        throw new Error(`Form submission failed: ${response.status} - ${errorText}`)
      }
      
      setSubmitStatus('success')
      
      // Reset form after 2 seconds and close modal
      setTimeout(() => {
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          linkedIn: '',
          coverLetter: '',
          resumeUrl: ''
        })
        setSubmitStatus('idle')
        onClose()
      }, 2000)
      
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative bg-white rounded-2xl shadow-xl max-w-[773px] w-full max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-2xl">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {locale === 'es' ? 'Aplicar para el Puesto' : 'Apply for Position'}
              </h2>
              <p className="text-sm text-gray-600 mt-1">{jobTitle}</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {/* Name fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {locale === 'es' ? 'Nombre' : 'First Name'} *
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
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
                  {locale === 'es' ? 'Apellido' : 'Last Name'} *
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
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

            {/* Email and Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    formErrors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  required
                />
                {formErrors.email && (
                  <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {locale === 'es' ? 'Teléfono' : 'Phone'} *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    formErrors.phone ? 'border-red-500' : 'border-gray-300'
                  }`}
                  required
                />
                {formErrors.phone && (
                  <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>
                )}
              </div>
            </div>

            {/* LinkedIn and Resume URL */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  LinkedIn URL *
                </label>
                <input
                  type="url"
                  name="linkedIn"
                  value={formData.linkedIn}
                  onChange={handleInputChange}
                  placeholder="https://linkedin.com/in/..."
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    formErrors.linkedIn ? 'border-red-500' : 'border-gray-300'
                  }`}
                  required
                />
                {formErrors.linkedIn && (
                  <p className="text-red-500 text-sm mt-1">{formErrors.linkedIn}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {locale === 'es' ? 'URL de CV/Resume (Google Drive)' : 'Resume URL (Google Drive)'} *
                </label>
                <input
                  type="url"
                  name="resumeUrl"
                  value={formData.resumeUrl}
                  onChange={handleInputChange}
                  placeholder={locale === 'es' ? 'https://drive.google.com/...' : 'https://drive.google.com/...'}
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    formErrors.resumeUrl ? 'border-red-500' : 'border-gray-300'
                  }`}
                  required
                />
                {formErrors.resumeUrl && (
                  <p className="text-red-500 text-sm mt-1">{formErrors.resumeUrl}</p>
                )}
                <p className="text-xs text-gray-500 mt-1">
                  {locale === 'es' ? 'Solo se aceptan enlaces de Google Drive' : 'Only Google Drive links are accepted'}
                </p>
              </div>
            </div>

            {/* Cover Letter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {locale === 'es' ? 'Carta de Presentación' : 'Cover Letter'} *
              </label>
              <textarea
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleInputChange}
                rows={4}
                placeholder={locale === 'es' 
                  ? 'Cuéntanos por qué estás interesado en esta posición...'
                  : 'Tell us why you\'re interested in this position...'
                }
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none ${
                  formErrors.coverLetter ? 'border-red-500' : 'border-gray-300'
                }`}
                required
              />
              {formErrors.coverLetter && (
                <p className="text-red-500 text-sm mt-1">{formErrors.coverLetter}</p>
              )}
            </div>

            {/* Status messages */}
            {submitStatus === 'success' && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-800 text-sm">
                  {locale === 'es' 
                    ? '¡Aplicación enviada exitosamente! Te contactaremos pronto.'
                    : 'Application submitted successfully! We\'ll contact you soon.'
                  }
                </p>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-red-800 text-sm">
                  {locale === 'es'
                    ? 'Hubo un error al enviar tu aplicación. Por favor intenta nuevamente.'
                    : 'There was an error submitting your application. Please try again.'
                  }
                </p>
              </div>
            )}

            {/* Submit button */}
            <div className="flex gap-3 pt-4 border-t border-gray-200">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 py-3 px-6 rounded-lg font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
              >
                {locale === 'es' ? 'Cancelar' : 'Cancel'}
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-colors duration-200 ${
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
                    {locale === 'es' ? 'Enviando...' : 'Submitting...'}
                  </span>
                ) : (
                  locale === 'es' ? 'Enviar Aplicación' : 'Submit Application'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default JobApplicationModal

