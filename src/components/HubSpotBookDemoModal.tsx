import React from 'react'
import HubSpotFormModal from './HubSpotFormModal'

interface HubSpotBookDemoModalProps {
  isOpen: boolean
  onClose: () => void
}

const HubSpotBookDemoModal: React.FC<HubSpotBookDemoModalProps> = ({
  isOpen,
  onClose
}) => {
  return (
    <HubSpotFormModal
      isOpen={isOpen}
      onClose={onClose}
      formName="Book a Demo"
      formId="789dfc61-6b4a-416d-bec1-9f8c145f984a"
    />
  )
}

export default HubSpotBookDemoModal