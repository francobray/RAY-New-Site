import { useState } from 'react'

export interface ModalConfig {
  title: string
  formId: string
  intent: string
  successMessage: string
}

export const MODAL_CONFIGS: Record<string, ModalConfig> = {
  'demo-expert': {
    title: 'Get a Free Demo',
    formId: '789dfc61-6b4a-416d-bec1-9f8c145f984a', // Expert form ID
    intent: 'expert',
    successMessage: 'Thanks! Our expert team will reach out shortly to tailor a plan.'
  },
  'demo-free': {
    title: 'Get a Free Demo',
    formId: 'c8f9d2e1-5a6b-4c7d-8e9f-0a1b2c3d4e5f', // Demo form ID (placeholder)
    intent: 'demo',
    successMessage: "You're in! We'll email your demo details and next steps."
  }
}

export const useHubSpotModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentConfig, setCurrentConfig] = useState<ModalConfig | null>(null)

  const openModal = (ctaType: string) => {
    const config = MODAL_CONFIGS[ctaType]
    if (config) {
      // Track modal open event
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'modal_open', {
          event_category: 'engagement',
          event_label: ctaType,
          value: 1
        })
      }
      setCurrentConfig(config)
      setIsModalOpen(true)
    }
  }

  const closeModal = () => {
    // Track modal close event
    if (typeof window !== 'undefined' && (window as any).gtag && currentConfig) {
      (window as any).gtag('event', 'modal_close', {
        event_category: 'engagement',
        event_label: currentConfig.intent,
        value: 1
      })
    }
    setIsModalOpen(false)
    setCurrentConfig(null)
  }

  // Legacy support - map old methods to new system
  const openTalkToExpertModal = () => openModal('demo-expert')
  const openBookDemoModal = () => openModal('demo-free')

  return {
    // New unified modal system
    isModalOpen,
    currentConfig,
    openModal,
    closeModal,
    
    // Legacy support for existing components
    isTalkToExpertModalOpen: isModalOpen && currentConfig?.intent === 'expert',
    isBookDemoModalOpen: isModalOpen && currentConfig?.intent === 'demo',
    openTalkToExpertModal,
    closeTalkToExpertModal: closeModal,
    openBookDemoModal,
    closeBookDemoModal: closeModal,
    
    // Deprecated - keeping for backward compatibility
    isGradeModalOpen: false,
    openGradeModal: () => {},
    closeGradeModal: () => {}
  }
}