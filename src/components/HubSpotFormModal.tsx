import React, { useEffect, useRef, useState } from 'react'
import { X } from 'lucide-react'

interface HubSpotFormModalProps {
  isOpen: boolean
  onClose: () => void
  formName: string
  formId: string
}

// Extend Window interface for HubSpot
declare global {
  interface Window {
    hbspt: any
  }
}

const HubSpotFormModal: React.FC<HubSpotFormModalProps> = ({
  isOpen,
  onClose,
  formName,
  formId
}) => {
  const modalRef = useRef<HTMLDivElement>(null)
  const formContainerRef = useRef<HTMLDivElement>(null)
  const previousFocusRef = useRef<HTMLElement | null>(null)
  const [isFormReady, setIsFormReady] = useState(false)
  const [formError, setFormError] = useState<string | null>(null)
  const formTimeoutRef = useRef<number | null>(null)

  // Portal and region configuration
  const PORTAL_ID = '39590119'
  const REGION = 'na1'
  
  // Different script URLs for different forms
  const GRADE_SCRIPT_URL = 'https://js.hsforms.net/forms/embed/39590119.js'
  const EXPERT_SCRIPT_URL = '//js.hsforms.net/forms/embed/v2.js'
  
  // Form IDs
  const GRADE_FORM_ID = '8e589758-c322-49aa-ac24-5e5f30516f19'
  const EXPERT_FORM_ID = '789dfc61-6b4a-416d-bec1-9f8c145f984a'

  useEffect(() => {
    if (isOpen) {
      // Store the previously focused element
      previousFocusRef.current = document.activeElement as HTMLElement
      
      // Prevent body scroll
      document.body.style.overflow = 'hidden'
      
      // Load HubSpot script and create form
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
    }

    return () => {
      document.body.style.overflow = 'unset'
      if (formTimeoutRef.current) {
        clearTimeout(formTimeoutRef.current)
      }
    }
  }, [isOpen])

  const loadHubSpotForm = () => {
    if (!formContainerRef.current) return

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
      if (formId === GRADE_FORM_ID) {
        // Use data attributes method for Grade form
        loadGradeForm()
      } else if (formId === EXPERT_FORM_ID) {
        // Use JavaScript API method for Expert form
        loadExpertForm()
      }
    } catch (error) {
      console.error('Error creating HubSpot form:', error)
      setFormError('Failed to create form. Please try again.')
      if (formTimeoutRef.current) {
        window.clearTimeout(formTimeoutRef.current)
        formTimeoutRef.current = null
      }
    }
  }

  const loadGradeForm = () => {
    // Create the form container div with HubSpot data attributes
    const formDiv = document.createElement('div')
    formDiv.className = 'hs-form-frame'
    formDiv.setAttribute('data-region', REGION)
    formDiv.setAttribute('data-form-id', GRADE_FORM_ID)
    formDiv.setAttribute('data-portal-id', PORTAL_ID)
    
    formContainerRef.current!.appendChild(formDiv)

    // Check if script is already loaded
    const existingScript = document.querySelector(`script[src="${GRADE_SCRIPT_URL}"]`)
    
    if (existingScript) {
      // Script already exists, form should render automatically
      setTimeout(() => {
        checkFormReady()
      }, 1000)
      return
    }

    // Load the script
    const script = document.createElement('script')
    script.src = GRADE_SCRIPT_URL
    script.defer = true
    script.onload = () => {
      // Form should render automatically after script loads
      setTimeout(() => {
        checkFormReady()
      }, 1000)
    }
    script.onerror = () => {
      console.error('Failed to load HubSpot script')
      setFormError('Failed to load form script. Please try again.')
      if (formTimeoutRef.current) {
        clearTimeout(formTimeoutRef.current)
        formTimeoutRef.current = null
      }
    }
    
    document.head.appendChild(script)
  }

  const loadExpertForm = () => {
    // Create container for the expert form
    const formDiv = document.createElement('div')
    formDiv.id = `hubspot-form-${EXPERT_FORM_ID}`
    formContainerRef.current!.appendChild(formDiv)

    // Check if v2 script is already loaded
    const existingScript = document.querySelector('script[src="//js.hsforms.net/forms/embed/v2.js"]')
    
    if (existingScript && window.hbspt) {
      // Script already loaded, create form directly
      createExpertForm(formDiv)
      return
    }

    // Load the v2 script
    const script = document.createElement('script')
    script.src = EXPERT_SCRIPT_URL
    script.type = 'text/javascript'
    script.charset = 'utf-8'
    script.onload = () => {
      // Wait a bit for hbspt to be available
      setTimeout(() => {
        createExpertForm(formDiv)
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
  }

  const createExpertForm = (targetDiv: HTMLElement) => {
    if (window.hbspt && window.hbspt.forms) {
      window.hbspt.forms.create({
        portalId: PORTAL_ID,
        formId: EXPERT_FORM_ID,
        region: REGION,
        target: `#${targetDiv.id}`,
        onFormReady: () => {
          console.log('HubSpot expert form ready')
          setIsFormReady(true)
          setFormError(null)
          if (formTimeoutRef.current) {
            clearTimeout(formTimeoutRef.current)
            formTimeoutRef.current = null
          }
        },
        onFormSubmit: () => {
          console.log('Form submitted')
        }
      })
    } else {
      console.error('HubSpot forms API not available')
      setFormError('Form API not available. Please try again.')
    }
  }

  const checkFormReady = () => {
    if (!formContainerRef.current) return

    // Check if form iframe has been created
    const iframe = formContainerRef.current.querySelector('iframe')
    if (iframe) {
      console.log('HubSpot form ready')
      setIsFormReady(true)
      setFormError(null)
      if (formTimeoutRef.current) {
        clearTimeout(formTimeoutRef.current)
        formTimeoutRef.current = null
      }
    } else {
      // Try again in 500ms
      setTimeout(() => {
        checkFormReady()
      }, 500)
    }
  }

  const handleRetry = () => {
    setFormError(null)
    setIsFormReady(false)
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

  if (!isOpen) return null

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
            {formName}
          </h2>
          <button
            onClick={onClose}
            className="p-2 text-ray-darkGray hover:text-ray-dark-900 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Container */}
        <div className="p-6">
          <div className="min-h-[400px] relative">
            {/* Loading State */}
            {!isFormReady && !formError && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex flex-col items-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-ray-blue mb-3"></div>
                  <span className="text-ray-darkGray">Loading form...</span>
                </div>
              </div>
            )}

            {/* Error State */}
            {formError && (
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
                isFormReady ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ minHeight: '400px' }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HubSpotFormModal