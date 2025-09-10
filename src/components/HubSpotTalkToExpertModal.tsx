import React from 'react'
import HubSpotFormModal from './HubSpotFormModal'

interface HubSpotTalkToExpertModalProps {
  isOpen: boolean
  onClose: () => void
}

const HubSpotTalkToExpertModal: React.FC<HubSpotTalkToExpertModalProps> = ({
  isOpen,
  onClose
}) => {
  return (
    <HubSpotFormModal
      isOpen={isOpen}
      onClose={onClose}
      formName="Talk to an Expert"
      formId="789dfc61-6b4a-416d-bec1-9f8c145f984a"
    />
  )
}

export default HubSpotTalkToExpertModal