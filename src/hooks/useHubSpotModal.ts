import { useState } from 'react'

export interface HubSpotModalConfig {
  type: string
  [key: string]: any
}

export const useHubSpotModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentConfig, setCurrentConfig] = useState<HubSpotModalConfig | null>(null)

  const openModal = (type: string, config?: any) => {
    setCurrentConfig({ type, ...config })
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setCurrentConfig(null)
  }

  return {
    isModalOpen,
    currentConfig,
    openModal,
    closeModal
  }
}
