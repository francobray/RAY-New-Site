import React, { useEffect, useRef, useState } from 'react'
import { X } from 'lucide-react'

interface HubSpotFormModalProps {
  isOpen: boolean
  onClose: () => void
  portalId: string
  formId: string
  formName: string
}

const HubSpotFormModal: React.FC<HubSpotFormModalProps> = ({
  isOpen,
  onClose,
  portalId,
  formId,
  formName
}) => {
  const modalRef = useRef<HTMLDivElement>(null)
  const previousFocusRef = useRef<HTMLElement | null>(null)
  const [isFormLoaded, setIsFormLoaded] = useState(false)

  useEffect(() => {
    if (isOpen) {
      // Store the previously focused element
      previousFocusRef.current = document.activeElement as HTMLElement
      
      // Prevent body scroll
      document.body.style.overflow = 'hidden'
      
      // Load HubSpot script if not already loaded
      if (!window.hbspt) {
        const script = document.createElement('script')
        script.src = '//js.hsforms.net/forms/embed/v2.js'
        script.async = true
        script.defer = true
        script.onload = () => {
          createForm()
        }
        document.head.appendChild(script)
      } else {
        createForm()
      }
    } else {
      // Restore body scroll
      document.body.style.overflow = 'unset'
      
      // Return focus to the trigger element
      if (previousFocusRef.current) {
        previousFocusRef.current.focus()
      }
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, portalId, formId])

  const createForm = () => {
    if (window.hbspt && modalRef.current) {
      const formContainer = modalRef.current.querySelector('#hubspot-form')
      if (formContainer) {
        window.hbspt.forms.create({
          region: 'na1',
          portalId: portalId,
          formId: formId,
          target: '#hubspot-form',
          onFormReady: () => {
            setIsFormLoaded(true)
          }
        })
      }
    }
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

        {/* Form Container - Fixed height to prevent CLS */}
        <div className="p-6">
          <div 
            id="hubspot-form" 
            className="min-h-[400px] flex items-center justify-center"
            style={{ minHeight: '400px' }}
          >
            {!isFormLoaded && (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-ray-blue"></div>
                <span className="ml-3 text-ray-darkGray">Loading form...</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

// Extend Window interface for HubSpot
declare global {
  interface Window {
    hbspt: any
  }
}

export default HubSpotFormModal