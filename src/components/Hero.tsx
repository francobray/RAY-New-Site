import React from 'react'
import Button from './Button'
import LazyImage from './LazyImage'
import HubSpotFormModal from './HubSpotFormModal'

const Hero: React.FC = () => {
  const [isFormModalOpen, setIsFormModalOpen] = React.useState(false)

  return (
    <>
      <section className="relative bg-gradient-to-br from-ray-gradient-start via-ray-gradient-mid to-ray-gradient-end overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(13,121,229,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(111,191,115,0.1),transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-center lg:text-left relative">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ray-dark-900 leading-tight">
                Increase revenue by driving more{' '}
                <span className="text-ray-blue">walk-ins, orders and bookings</span>
              </h1>
              
              <p className="mt-6 text-xl text-ray-dark-700 max-w-2xl">
                RAY is the #1 sales platform helping restaurant owners and operators attract more walk-ins, boost their online reputation, and increase revenue through online orders and bookings.
              </p>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  variant="primary" 
                  size="lg"
                  className="shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => setIsFormModalOpen(true)}
                >
                  Scan Your Restaurant
                </Button>
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => console.log('Talk to expert')}
                >
                  Talk to an Expert
                </Button>
              </div>
              
              <div className="mt-8 flex items-center justify-center lg:justify-start space-x-6 text-sm text-ray-dark-600">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-ray-green rounded-full mr-2"></div>
                  <span>Free restaurant scan</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-ray-green rounded-full mr-2"></div>
                  <span>No minimum commitment</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-ray-green rounded-full mr-2"></div>
                  <span>Guaranteed Results</span>
                </div>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="relative">
              {/* Gradient border effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-ray-blue to-ray-green rounded-xl opacity-20"></div>
              
              <LazyImage
                src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop&fm=webp"
                alt="Restaurant interior with customers dining"
                width={600}
                height={450}
                className="relative rounded-xl shadow-2xl"
                srcSet="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop&fm=webp 400w,
                        https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop&fm=webp 800w"
                sizes="(max-width: 768px) 400px, 800px"
              />
              
              {/* Floating stats */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
                <div className="text-2xl font-bold text-ray-green">+47%</div>
                <div className="text-sm text-ray-darkGray">Walk-ins increase</div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
                <div className="text-2xl font-bold text-ray-blue">4.8★</div>
                <div className="text-sm text-ray-darkGray">Average rating</div>
              </div>
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

export default Hero