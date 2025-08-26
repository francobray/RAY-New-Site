import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Button from './Button'
import HubSpotFormModal from './HubSpotFormModal'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isFormModalOpen, setIsFormModalOpen] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: 'Features', href: '/features' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-ray-black">
              RAY
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-ray-blue bg-blue-50'
                      : 'text-ray-darkGray hover:text-ray-blue hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button variant="primary" onClick={() => setIsFormModalOpen(true)}>
              Scan Your Restaurant
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-ray-darkGray hover:text-ray-blue hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-ray-blue"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-ray-blue bg-blue-50'
                      : 'text-ray-darkGray hover:text-ray-blue hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4">
                <Button 
                  variant="primary" 
                  className="w-full"
                  onClick={() => {
                    setIsMenuOpen(false)
                    setIsFormModalOpen(true)
                  }}
                >
                  Scan Your Restaurant
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
      
      {/* HubSpot Form Modal */}
      <HubSpotFormModal
        isOpen={isFormModalOpen}
        onClose={() => setIsFormModalOpen(false)}
        portalId="YOUR_PORTAL_ID"
        formId="YOUR_FORM_ID"
        formName="Scan Your Restaurant"
      />
    </header>
  )
}

export default Header