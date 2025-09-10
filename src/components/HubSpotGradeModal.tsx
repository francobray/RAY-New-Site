import React from 'react'
import HubSpotFormModal from './HubSpotFormModal'

interface HubSpotGradeModalProps {
  isOpen: boolean
  onClose: () => void
}

const HubSpotGradeModal: React.FC<HubSpotGradeModalProps> = ({
  isOpen,
  onClose
}) => {
  return (
    <HubSpotFormModal
      isOpen={isOpen}
      onClose={onClose}
      formName="Receive your full report"
      formId="8e589758-c322-49aa-ac24-5e5f30516f19"
    />
  )
}

export default HubSpotGradeModal