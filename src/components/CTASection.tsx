import React from 'react'
import Button from './Button'
import HubSpotFormModal from './HubSpotFormModal'

const CTASection: React.FC = () => {
  const [isFormModalOpen, setIsFormModalOpen] = React.useState(false)

  return (
    <>
      <section className="py-20 bg-ray-gradient-start">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-6">
          Ready to increase your restaurant revenue?
        </h2>
        
        <p className="text-xl text-ray-dark-700 mb-8 max-w-3xl mx-auto">
          Join hundreds of successful restaurants using RAY to drive more walk-ins, 
          orders, and positive reviews. Get your free restaurant scan today.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            variant="primary" 
            size="lg"
            onClick={() => setIsFormModalOpen(true)}
          >
            Scan Your Restaurant
          </Button>
          <Button 
            variant="secondary" 
            size="lg"
            onClick={() => console.log('Talk to expert')}
          >
            Talk to an Expert
          </Button>
        </div>
        
        <div className="mt-6 text-sm text-ray-dark-500">
          ✓ Free scan • ✓ No commitment • ✓ Results in 24 hours
        </div>
        </div>
      </section>
      
      {/* HubSpot Form Modal */}
      <HubSpotFormModal
        isOpen={isFormModalOpen}
        onClose={() => setIsFormModalOpen(false)}
        portalId="YOUR_PORTAL_ID"
        formId="YOUR_FORM_ID"
        formName="Scan Your Restaurant"
      />
    </>
  )
}

export default CTASection