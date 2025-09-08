import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import Button from './Button'
import HubSpotGradeModal from './HubSpotGradeModal'
import { useHubSpotModal } from '../hooks/useHubSpotModal'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<string | null>(null)
  const { 
    isGradeModalOpen, 
    openGradeModal, 
    closeGradeModal
  } = useHubSpotModal()
  const location = useLocation()

  const navigation = [
    { 
      name: 'Product', 
      href: '/',
      submenu: [
        { name: 'Walk-Ins', href: '/product/walk-ins' },
        { name: 'Online Orders', href: '/product/online-orders' }
      ]
    },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Pricing', href: '/pricing' },
    { 
      name: 'About', 
      href: '/about',
      submenu: [
        { name: 'Contact', href: '/contact' }
      ]
    },
    { name: 'Blog', href: 'https://blog.rayapp.io/en/', external: true },
  ]

  const isActive = (path: string) => location.pathname === path

  const handleKeyDown = (e: React.KeyboardEvent, itemName: string) => {
    if (e.key === 'Escape') {
      setActiveSubmenu(null)
      setMobileSubmenuOpen(null)
    } else if (e.key === 'Enter' || e.key === ' ') {
      if (itemName === 'About') {
        // Let the Link handle navigation
        return
      }
    }
  }

  const toggleMobileSubmenu = (itemName: string) => {
    setMobileSubmenuOpen(mobileSubmenuOpen === itemName ? null : itemName)
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100" style={{ zIndex: 9999 }}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center hover:opacity-80 transition-opacity duration-200">
              <img 
                src="/images/logo-rayapp-azulwebp-300x150.webp" 
                alt="RAY - Restaurant Marketing Platform" 
                className="h-8 w-auto"
                width={120}
                height={40}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.submenu ? (
                    <div
                      className="relative group"
                      onMouseEnter={() => setActiveSubmenu(item.name)}
                      onMouseLeave={() => setActiveSubmenu(null)}
                    >
                      <div className="flex items-center">
                        <Link
                          to={item.href}
                          className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 min-h-[44px] min-w-[44px] flex items-center ${
                            (item.name === 'Product' && (location.pathname === '/' || location.pathname.startsWith('/product'))) ||
                            (item.name === 'About' && (location.pathname === '/about' || location.pathname === '/contact'))
                              ? 'text-ray-blue bg-blue-50'
                              : 'text-ray-darkGray hover:text-ray-blue hover:bg-gray-50'
                          }`}
                          onKeyDown={(e) => handleKeyDown(e, item.name)}
                          aria-haspopup="true"
                          aria-expanded={activeSubmenu === item.name}
                        >
                          {item.name}
                        </Link>
                        <button
                          className={`p-2 rounded-md text-sm font-medium transition-colors duration-200 min-h-[44px] min-w-[44px] flex items-center justify-center ${
                            (item.name === 'Product' && (location.pathname === '/' || location.pathname.startsWith('/product'))) ||
                            (item.name === 'About' && (location.pathname === '/about' || location.pathname === '/contact'))
                              ? 'text-ray-blue bg-blue-50'
                              : 'text-ray-darkGray hover:text-ray-blue hover:bg-gray-50'
                          }`}
                          onKeyDown={(e) => handleKeyDown(e, item.name)}
                          aria-haspopup="true"
                          aria-expanded={activeSubmenu === item.name}
                          aria-label={`${item.name} submenu`}
                        >
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                            activeSubmenu === item.name ? 'rotate-180' : ''
                          }`} />
                        </button>
                      </div>
                      {activeSubmenu === item.name && (
                        <div 
                          className="absolute top-full left-0 mt-1 w-80 bg-white rounded-lg shadow-xl border border-gray-100 py-2 animate-in fade-in slide-in-from-top-2 duration-200"
                          style={{ zIndex: 10000 }}
                        >
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="block px-4 py-3 text-sm text-ray-darkGray hover:text-ray-blue hover:bg-blue-50 transition-all duration-200 font-medium border-l-2 border-transparent hover:border-ray-blue min-h-[44px] flex items-center"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    item.external ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 text-ray-darkGray hover:text-ray-blue hover:bg-gray-50 min-h-[44px] min-w-[44px] flex items-center"
                      >
                        {item.name}
                      </a>
                    ) : (
                      <Link
                        to={item.href}
                        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 min-h-[44px] min-w-[44px] flex items-center ${
                          isActive(item.href)
                            ? 'text-ray-blue bg-blue-50'
                            : 'text-ray-darkGray hover:text-ray-blue hover:bg-gray-50'
                        }`}
                      >
                        {item.name}
                      </Link>
                    )
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <div className="flex items-center gap-3">
              <Button 
                variant="ghost" 
                onClick={() => window.open('https://admin.rayapp.io/login', '_blank')}
                className="shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                aria-label="Log in to your RAY restaurant dashboard"
              >
                Log In
              </Button>
              <Button 
                variant="primary" 
                onClick={openGradeModal}
                className="shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                aria-label="Open restaurant grading form to get your free restaurant scan"
              >
                Grade Your Restaurant
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-ray-darkGray hover:text-ray-blue hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-ray-blue transition-colors duration-200 min-h-[44px] min-w-[44px]"
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
          <>
            <div className="md:hidden animate-in slide-in-from-top duration-200">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <div>
                      <div className="flex items-center justify-between">
                        <Link
                          to={item.href}
                          className={`flex-1 px-3 py-2 text-base font-medium transition-colors duration-200 min-h-[44px] flex items-center ${
                            isActive(item.href)
                              ? 'text-ray-blue bg-blue-50'
                              : 'text-ray-darkGray hover:text-ray-blue hover:bg-gray-50'
                          }`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                        <button
                          onClick={() => toggleMobileSubmenu(item.name)}
                          className="px-3 py-2 text-ray-darkGray hover:text-ray-blue transition-colors duration-200 min-h-[44px] min-w-[44px] flex items-center justify-center"
                          aria-expanded={mobileSubmenuOpen === item.name}
                          aria-label={`Toggle ${item.name} submenu`}
                        >
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                            mobileSubmenuOpen === item.name ? 'rotate-180' : ''
                          }`} />
                        </button>
                      </div>
                      {mobileSubmenuOpen === item.name && (
                        <div className="pl-4">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="block pl-6 pr-3 py-3 text-sm text-ray-darkGray hover:text-ray-blue hover:bg-blue-50 transition-colors duration-200 font-medium min-h-[44px] flex items-center"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    item.external ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 text-ray-darkGray hover:text-ray-blue hover:bg-gray-50 min-h-[44px] flex items-center"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    ) : (
                      <Link
                        to={item.href}
                        className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 min-h-[44px] flex items-center ${
                          (item.name === 'Product' && (location.pathname === '/' || location.pathname.startsWith('/product'))) ||
                          (item.name === 'About' && (location.pathname === '/about' || location.pathname === '/contact'))
                            ? 'text-ray-blue bg-blue-50'
                            : 'text-ray-darkGray hover:text-ray-blue hover:bg-gray-50'
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )
                  )}
                </div>
              ))}
            </div>
              <div className="pt-4">
                <div className="space-y-3">
                  <Button 
                    variant="ghost" 
                    className="w-full min-h-[44px]"
                    onClick={() => {
                      setIsMenuOpen(false)
                      window.open('https://admin.rayapp.io/login', '_blank')
                    }}
                  >
                    Log In
                  </Button>
                  <Button 
                    variant="primary" 
                    className="w-full min-h-[44px]"
                    onClick={() => {
                      setIsMenuOpen(false)
                      openGradeModal()
                    }}
                  >
                    Grade Your Restaurant
                  </Button>
                </div>
              </div>
            </div>
          </>
        )}
      </nav>
      
      {/* HubSpot Modals */}
      <HubSpotGradeModal
        isOpen={isGradeModalOpen}
        onClose={closeGradeModal}
      />
    </header>
  )
}

export default Header