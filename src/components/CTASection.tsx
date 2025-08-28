import React from 'react'
import Button from './Button'
import HubSpotFormModal from './HubSpotFormModal'

const CTASection: React.FC = () => {
  const [isFormModalOpen, setIsFormModalOpen] = React.useState(false)

  return (
    <>
      <section className="py-24 bg-gradient-to-br from-ray-gradient-start via-ray-gradient-mid to-ray-gradient-end relative overflow-hidden">
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
            onClick={() => setIsFormModalOpen(true)}
          >
            Scan Your Restaurant
          </Button>
          <Button 
            variant="secondary" 
            size="lg"
            className="shadow-xl hover:shadow-2xl transition-all duration-300"
            onClick={() => console.log('Talk to expert')}
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