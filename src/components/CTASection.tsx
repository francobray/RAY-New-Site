import React from 'react'
import { TrendingUp } from 'lucide-react'
import Button from './Button'
import HubSpotGradeModal from './HubSpotGradeModal'
import HubSpotTalkToExpertModal from './HubSpotTalkToExpertModal'
import { useHubSpotModal } from '../hooks/useHubSpotModal'

const CTASection: React.FC = () => {
  const { 
    isGradeModalOpen, 
    openGradeModal, 
    closeGradeModal,
    isTalkToExpertModalOpen,
    openTalkToExpertModal,
    closeTalkToExpertModal
  } = useHubSpotModal()

  return (
    <>
      <section className="py-24 bg-ray-promise relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(13,121,229,0.1),transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="inline-flex items-center px-4 py-2 bg-ray-dark-900/10 rounded-full text-ray-dark-900 text-sm font-medium mb-6">
          <TrendingUp className="w-4 h-4 mr-2" />
          Ready to Grow Your Restaurant?
        </div>
        
        <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-6">
          Ready to increase your restaurant revenue?
        </h2>
        
        <p className="text-xl text-ray-dark-700 mb-8 max-w-3xl mx-auto leading-relaxed">
          Join hundreds of successful restaurants using RAY to drive more walk-ins, 
          orders, and positive reviews. Get your free restaurant scan today.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            variant="primary" 
            size="lg"
            className="shadow-xl hover:shadow-2xl transition-all duration-300"
            onClick={openGradeModal}
            aria-label="Open restaurant grading form to get your free restaurant scan"
          >
            Grade Your Restaurant
          </Button>
          <Button 
            variant="secondary" 
            size="lg"
            className="shadow-xl hover:shadow-2xl transition-all duration-300"
            onClick={openTalkToExpertModal}
            aria-label="Open form to schedule a consultation with our restaurant marketing experts"
          >
            Talk to an Expert
          </Button>
        </div>
        
        <div className="mt-8 flex items-center justify-center space-x-6 text-sm text-ray-dark-600">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-ray-green rounded-full mr-2"></div>
            <span>Free scan</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-ray-green rounded-full mr-2"></div>
            <span>No commitment</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-ray-green rounded-full mr-2"></div>
            <span>Results in 24 hours</span>
          </div>
        </div>
        </div>
      </section>
      
      {/* HubSpot Modals */}
      <HubSpotGradeModal
        isOpen={isGradeModalOpen}
        onClose={closeGradeModal}
      />
      <HubSpotTalkToExpertModal
        isOpen={isTalkToExpertModalOpen}
        onClose={closeTalkToExpertModal}
      />
    </>
  )
}

export default CTASection