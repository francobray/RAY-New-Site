import React, { useEffect, useRef, useState } from 'react'
import { X } from 'lucide-react'
import { ModalConfig } from '../hooks/useHubSpotModal'

interface HubSpotUnifiedModalProps {
  isOpen: boolean
  onClose: () => void
  config: ModalConfig | null
}

// Extend Window interface for HubSpot
declare global {
  interface Window {
    hbspt: any
  }
}

const HubSpotUnifiedModal: React.FC<HubSpotUnifiedModalProps> = ({
  isOpen,
  onClose,
  config
}) => {
  const modalRef = useRef<HTMLDivElement>(null)
  const formContainerRef = useRef<HTMLDivElement>(null)
  const previousFocusRef = useRef<HTMLElement | null>(null)
  const [isFormReady, setIsFormReady] = useState(false)
  const [formError, setFormError] = useState<string | null>(null)
  const [showSuccess, setShowSuccess] = useState(false)
  const formTimeoutRef = useRef<number | null>(null)

  // Portal and region configuration
  const PORTAL_ID = '39590119'
  const REGION = 'na1'

  useEffect(() => {
    if (isOpen && config) {
      // Store the previously focused element
      previousFocusRef.current = document.activeElement as HTMLElement
      
      // Prevent body scroll
      document.body.style.overflow = 'hidden'
      
      // Reset states
      setIsFormReady(false)
      setFormError(null)
      setShowSuccess(false)
      
      // Load HubSpot form
      loadHubSpotForm()
    } else {
      // Restore body scroll
      document.body.style.overflow = 'unset'
      
      // Return focus to the trigger element
      if (previousFocusRef.current) {
        previousFocusRef.current.focus()
      }

      // Clear timeout if modal is closed
      if (formTimeoutRef.current) {
        clearTimeout(formTimeoutRef.current)
        formTimeoutRef.current = null
      }

      // Reset form states when modal closes
      setIsFormReady(false)
      setFormError(null)
      setShowSuccess(false)
    }

    return () => {
      document.body.style.overflow = 'unset'
      if (formTimeoutRef.current) {
        clearTimeout(formTimeoutRef.current)
      }
    }
  }, [isOpen, config])

  const loadHubSpotForm = () => {
    if (!formContainerRef.current || !config) return

    // Clear any existing content
    formContainerRef.current.innerHTML = ''
    setIsFormReady(false)
    setFormError(null)

    // Set timeout for form loading
    formTimeoutRef.current = window.setTimeout(() => {
      if (!isFormReady) {
        setFormError('Form is taking longer than expected to load. Please try again.')
      }
    }, 10000) // 10 second timeout

    try {
      // Create container for the form
      const formDiv = document.createElement('div')
      formDiv.id = `hubspot-form-${config.formId}`
      formContainerRef.current.appendChild(formDiv)

      // Check if v2 script is already loaded
      const existingScript = document.querySelector('script[src="//js.hsforms.net/forms/embed/v2.js"]')
      
      if (existingScript && window.hbspt) {
        // Script already loaded, create form directly
        createHubSpotForm(formDiv)
        return
      }

      // Load the v2 script
      const script = document.createElement('script')
      script.src = '//js.hsforms.net/forms/embed/v2.js'
      script.type = 'text/javascript'
      script.charset = 'utf-8'
      script.onload = () => {
        // Wait a bit for hbspt to be available
        setTimeout(() => {
          createHubSpotForm(formDiv)
        }, 500)
      }
      script.onerror = () => {
        console.error('Failed to load HubSpot v2 script')
        setFormError('Failed to load form script. Please try again.')
        if (formTimeoutRef.current) {
          clearTimeout(formTimeoutRef.current)
          formTimeoutRef.current = null
        }
      }
      
      document.head.appendChild(script)
    } catch (error) {
      console.error('Error creating HubSpot form:', error)
      setFormError('Failed to create form. Please try again.')
      if (formTimeoutRef.current) {
        window.clearTimeout(formTimeoutRef.current)
        formTimeoutRef.current = null
      }
    }
  }

  const createHubSpotForm = (targetDiv: HTMLElement) => {
    if (!config || !window.hbspt || !window.hbspt.forms) {
      console.error('HubSpot forms API not available or config missing')
      setFormError('Form API not available. Please try again.')
      return
    }

    // Get current page info for hidden fields
    const pageUrl = window.location.href
    const pageTitle = document.title

    window.hbspt.forms.create({
      portalId: PORTAL_ID,
      formId: config.formId,
      region: REGION,
      target: `#${targetDiv.id}`,
      onFormReady: () => {
        console.log('HubSpot form ready:', config.title)
        setIsFormReady(true)
        setFormError(null)
        if (formTimeoutRef.current) {
          clearTimeout(formTimeoutRef.current)
          formTimeoutRef.current = null
        }
      },
      onFormSubmit: () => {
        console.log('Form submitted:', config.title)
      },
      onFormSubmitted: () => {
        console.log('Form submission confirmed:', config.title)
        setShowSuccess(true)
        
        // Auto-close after 3 seconds
        setTimeout(() => {
          onClose()
        }, 3000)
      },
      // Add hidden fields
      onBeforeFormInit: (ctx: any) => {
        // Add hidden fields with page context
        if (ctx && ctx.formDefinition && ctx.formDefinition.formFieldGroups) {
          // Note: Hidden field injection depends on HubSpot form configuration
          // These would need to be set up in the HubSpot form builder
          console.log('Form context:', { intent: config.intent, pageUrl, pageTitle })
        }
      }
    })
  }

  const handleRetry = () => {
    setFormError(null)
    setIsFormReady(false)
    setShowSuccess(false)
    loadHubSpotForm()
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose()
    }
    
    // Trap focus within modal
    if (e.key === 'Tab') {
      const focusableElements = modalRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
      
      if (focusableElements && focusableElements.length > 0) {
        const firstElement = focusableElements[0] as HTMLElement
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement
        
        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault()
          lastElement.focus()
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault()
          firstElement.focus()
        }
      }
    }
  }

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  if (!isOpen || !config) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-md bg-white rounded-lg shadow-xl"
        role="document"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 id="modal-title" className="text-xl font-bold text-ray-dark-900">
            {config.title}
          </h2>
          <button
            onClick={onClose}
            className="p-2 text-ray-darkGray hover:text-ray-dark-900 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="min-h-[400px] relative">
            {/* Success State */}
            {showSuccess && (
              <div className="absolute inset-0 flex items-center justify-center bg-white">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-ray-dark-900 mb-2">Success!</h3>
                  <p className="text-ray-darkGray">{config.successMessage}</p>
                </div>
              </div>
            )}

            {/* Loading State */}
            {!isFormReady && !formError && !showSuccess && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex flex-col items-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-ray-blue mb-3"></div>
                  <span className="text-ray-darkGray">Loading form...</span>
                </div>
              </div>
            )}

            {/* Error State */}
            {formError && !showSuccess && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-red-500 mb-4">{formError}</div>
                  <button
                    onClick={handleRetry}
                    className="px-4 py-2 bg-ray-blue text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
                  >
                    Try Again
                  </button>
                </div>
              </div>
            )}

            {/* Form Container */}
            <div
              ref={formContainerRef}
              className={`transition-opacity duration-300 ${
                isFormReady && !showSuccess ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ minHeight: '400px' }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HubSpotUnifiedModal