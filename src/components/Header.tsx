import React, { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Button from './Button'

interface SubmenuItem {
  name: string
  href: string
  description?: string
}

interface NavigationItem {
  name: string
  href: string
  submenu?: SubmenuItem[]
  external?: boolean
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<string | null>(null)
  
  const hoverTimeoutRef = useRef<number | null>(null)
  const hoverIntentTimeoutRef = useRef<number | null>(null)
  const menuRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})
  const buttonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({})
  
  const location = useLocation()

  const navigation: NavigationItem[] = [
    { 
      name: 'Product', 
      href: '/',
      submenu: [
        { 
          name: 'Bookings', 
          href: '/product/bookings',
          description: 'Maximize table occupancy with smart reservation management'
        },
        { 
          name: 'Walk-Ins', 
          href: '/product/walk-ins',
          description: 'Turn searches into walk-ins with AI-powered local marketing'
        },
        { 
          name: 'Online Orders', 
          href: '/product/online-orders',
          description: 'Grow revenue from digital channels with integrated ordering'
        }
      ]
    },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Pricing', href: '/pricing' },
    { 
      name: 'About', 
      href: '/about',
      submenu: [
        { 
          name: 'About Us', 
          href: '/about',
          description: 'Learn about our mission and team'
        },
        { 
          name: 'Contact', 
          href: '/contact',
          description: 'Get in touch with our experts'
        }
      ]
    },
    { name: 'Blog', href: 'https://blog.rayapp.io/en/', external: true },
  ]

  const isActive = (path: string) => location.pathname === path

  // Clear timeouts on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current)
      }
      if (hoverIntentTimeoutRef.current) {
        clearTimeout(hoverIntentTimeoutRef.current)
      }
    }
  }, [])

  // Handle click outside to close menus
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node
      const isInsideMenu = Object.values(menuRefs.current).some(ref => 
        ref && ref.contains(target)
      )
      const isInsideButton = Object.values(buttonRefs.current).some(ref => 
        ref && ref.contains(target)
      )
      
      if (!isInsideMenu && !isInsideButton) {
        setActiveSubmenu(null)
      }
    }

    if (activeSubmenu) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [activeSubmenu])

  // Handle window resize
  useEffect(() => {
    let resizeTimeout: number
    const handleResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = window.setTimeout(() => {
        // Close menus on resize to prevent positioning issues
        setActiveSubmenu(null)
      }, 150)
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
      clearTimeout(resizeTimeout)
    }
  }, [])

  const handleMouseEnter = (itemName: string) => {
    // Clear any existing timeouts
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
    }
    if (hoverIntentTimeoutRef.current) {
      clearTimeout(hoverIntentTimeoutRef.current)
    }

    // Implement hover intent - small delay before opening
    hoverIntentTimeoutRef.current = window.setTimeout(() => {
      setActiveSubmenu(itemName)
    }, 100)
  }

  const handleMouseLeave = () => {
    // Clear hover intent timeout
    if (hoverIntentTimeoutRef.current) {
      clearTimeout(hoverIntentTimeoutRef.current)
    }

    // Delay closing to prevent flicker
    hoverTimeoutRef.current = window.setTimeout(() => {
      setActiveSubmenu(null)
    }, 200)
  }

  const handleSubmenuMouseEnter = () => {
    // Cancel close timeout when entering submenu
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
    }
  }

  const handleSubmenuMouseLeave = () => {
    // Start close timeout when leaving submenu
    hoverTimeoutRef.current = window.setTimeout(() => {
      setActiveSubmenu(null)
    }, 200)
  }

  const handleClick = (itemName: string) => {
    // Toggle on click (fallback for no-JS or touch devices)
    setActiveSubmenu(activeSubmenu === itemName ? null : itemName)
  }

  const handleKeyDown = (e: React.KeyboardEvent, itemName: string) => {
    const item = navigation.find(nav => nav.name === itemName)
    if (!item?.submenu) return

    switch (e.key) {
      case 'Enter':
      case ' ':
      case 'ArrowDown':
        e.preventDefault()
        setActiveSubmenu(itemName)
        // Focus first menu item
        setTimeout(() => {
          const menu = menuRefs.current[itemName]
          const firstLink = menu?.querySelector('a')
          firstLink?.focus()
        }, 50)
        break
      case 'Escape':
        e.preventDefault()
        setActiveSubmenu(null)
        buttonRefs.current[itemName]?.focus()
        break
    }
  }

  const handleSubmenuKeyDown = (e: React.KeyboardEvent, itemName: string) => {
    const menu = menuRefs.current[itemName]
    if (!menu) return

    const links = Array.from(menu.querySelectorAll('a')) as HTMLAnchorElement[]
    const currentIndex = links.findIndex(link => link === document.activeElement)

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        const nextIndex = currentIndex < links.length - 1 ? currentIndex + 1 : 0
        links[nextIndex]?.focus()
        break
      case 'ArrowUp':
        e.preventDefault()
        const prevIndex = currentIndex > 0 ? currentIndex - 1 : links.length - 1
        links[prevIndex]?.focus()
        break
      case 'Escape':
        e.preventDefault()
        setActiveSubmenu(null)
        buttonRefs.current[itemName]?.focus()
        break
      case 'Tab':
        // Allow natural tab behavior but close menu
        setActiveSubmenu(null)
        break
    }
  }

  const toggleMobileSubmenu = (itemName: string) => {
    setMobileSubmenuOpen(mobileSubmenuOpen === itemName ? null : itemName)
  }

  const getSubmenuPosition = (itemName: string) => {
    const button = buttonRefs.current[itemName]
    if (!button) return {}

    const rect = button.getBoundingClientRect()
    const viewportWidth = window.innerWidth
    const menuWidth = 320 // Approximate menu width

    // Check if menu would overflow right edge
    const wouldOverflow = rect.left + menuWidth > viewportWidth
    
    return wouldOverflow 
      ? { right: 0 } 
      : { left: 0 }
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100" style={{ zIndex: 9999 }}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" role="menubar">
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
                      className="relative"
                      onMouseEnter={() => handleMouseEnter(item.name)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <button
                        ref={el => { buttonRefs.current[item.name] = el }}
                        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 min-h-[44px] min-w-[44px] flex items-center ${
                          (item.name === 'Product' && (location.pathname === '/' || location.pathname.startsWith('/product'))) ||
                          (item.name === 'About' && (location.pathname === '/about' || location.pathname === '/contact'))
                            ? 'text-ray-blue bg-blue-50'
                            : 'text-ray-darkGray hover:text-ray-blue hover:bg-gray-50'
                        }`}
                        onClick={() => handleClick(item.name)}
                        onKeyDown={(e) => handleKeyDown(e, item.name)}
                        aria-haspopup="true"
                        aria-expanded={activeSubmenu === item.name}
                        aria-controls={`submenu-${item.name}`}
                        role="menuitem"
                      >
                        {item.name}
                      </button>
                      
                      {/* Desktop Submenu */}
                      {activeSubmenu === item.name && (
                        <div 
                          ref={el => menuRefs.current[item.name] = el}
                          id={`submenu-${item.name}`}
                          className="absolute top-full mt-1 w-80 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50"
                          style={{
                            ...getSubmenuPosition(item.name),
                            animation: 'fadeInSlideDown 150ms ease-out forwards'
                          }}
                          onMouseEnter={handleSubmenuMouseEnter}
                          onMouseLeave={handleSubmenuMouseLeave}
                          onKeyDown={(e) => handleSubmenuKeyDown(e, item.name)}
                          role="menu"
                          aria-labelledby={`submenu-${item.name}`}
                        >
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="block px-4 py-3 text-sm hover:bg-blue-50 transition-all duration-200 border-l-2 border-transparent hover:border-ray-blue min-h-[44px] flex flex-col justify-center focus:outline-none focus:bg-blue-50 focus:border-ray-blue"
                              role="menuitem"
                              onClick={() => setActiveSubmenu(null)}
                            >
                              <div className="font-medium text-ray-dark-900 hover:text-ray-blue transition-colors duration-200">
                                {subItem.name}
                              </div>
                              {subItem.description && (
                                <div className="text-xs text-ray-darkGray mt-1">
                                  {subItem.description}
                                </div>
                              )}
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
                        role="menuitem"
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
                        role="menuitem"
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
                className="shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                aria-label="Open restaurant grading form to get your free restaurant scan"
              >
                <a 
                  href="https://grader.rayapp.io/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full h-full"
                  aria-label="Grade your restaurant with RAY's free assessment tool"
                >
                  Grade Your Restaurant
                </a>
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-ray-darkGray hover:text-ray-blue hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-ray-blue transition-colors duration-200 min-h-[44px] min-w-[44px]"
              aria-expanded={isMenuOpen}
              aria-label="Toggle main menu"
            >
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
                          <span className={`transform transition-transform duration-200 ${
                            mobileSubmenuOpen === item.name ? 'rotate-180' : ''
                          }`}>
                            ▼
                          </span>
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
                >
                  <a 
                    href="https://grader.rayapp.io/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full h-full"
                    onClick={() => setIsMenuOpen(false)}
                    aria-label="Grade your restaurant with RAY's free assessment tool"
                  >
                    Grade Your Restaurant
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
      
      <style jsx>{`
        @keyframes fadeInSlideDown {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }

        /* Hover behavior for fine pointer devices */
        @media (hover: hover) and (pointer: fine) {
          .dropdown-hover:hover .dropdown-menu {
            display: block;
          }
        }

        /* Touch behavior for coarse pointer devices */
        @media (hover: none), (pointer: coarse) {
          .dropdown-hover:hover .dropdown-menu {
            display: none;
          }
        }
      `}</style>
    </header>
  )
}

export default Header