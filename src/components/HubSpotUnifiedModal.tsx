import React from 'react'
import { HubSpotModalConfig } from '../hooks/useHubSpotModal'

interface HubSpotUnifiedModalProps {
  isOpen: boolean
  onClose: () => void
  config: HubSpotModalConfig | null
}

const HubSpotUnifiedModal: React.FC<HubSpotUnifiedModalProps> = ({
  isOpen,
  onClose,
  config
}) => {
  if (!isOpen || !config) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Contact Us</h3>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ×
          </button>
        </div>
        <div className="space-y-4">
          <p>Get in touch with our team to learn more about RAY.</p>
          <a
            href="https://grader.rayapp.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-blue-600 text-white text-center py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
            onClick={onClose}
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  )
}

export default HubSpotUnifiedModal
