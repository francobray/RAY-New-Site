import { useState } from 'react'

export const useHubSpotModal = () => {
  const [isGradeModalOpen, setIsGradeModalOpen] = useState(false)
  const [isTalkToExpertModalOpen, setIsTalkToExpertModalOpen] = useState(false)
  const [isBookDemoModalOpen, setIsBookDemoModalOpen] = useState(false)

  const openGradeModal = () => setIsGradeModalOpen(true)
  const closeGradeModal = () => setIsGradeModalOpen(false)
  
  const openTalkToExpertModal = () => setIsTalkToExpertModalOpen(true)
  const closeTalkToExpertModal = () => setIsTalkToExpertModalOpen(false)
  
  const openBookDemoModal = () => setIsBookDemoModalOpen(true)
  const closeBookDemoModal = () => setIsBookDemoModalOpen(false)

  return {
    // Grade Restaurant Modal
    isGradeModalOpen,
    openGradeModal,
    closeGradeModal,
    
    // Talk to Expert Modal
    isTalkToExpertModalOpen,
    openTalkToExpertModal,
    closeTalkToExpertModal,
    
    // Book Demo Modal
    isBookDemoModalOpen,
    openBookDemoModal,
    closeBookDemoModal
  }
}