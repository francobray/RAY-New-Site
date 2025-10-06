'use client'

import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Button from './shared/BaseButton'

interface MenuItem {
  name: string
  path: string
  hasDropdown?: boolean
  dropdownItems?: { name: string; path: string }[]
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const pathname = usePathname()
  const menuRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})
  const dropdownTimeouts = useRef<{ [key: string]: number }>({})

  const menuItems: MenuItem[] = [
    { 
      name: 'Products', 
      path: '/products',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Bookings', path: '/product/bookings' },
        { name: 'Walk-ins', path: '/product/walk-ins' },
        { name: 'Online Orders', path: '/product/online-orders' },
        { name: 'AI Concierge', path: '/product/ai-concierge' }
      ]
    },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Pricing', path: '/pricing' },
    { 
      name: 'About Us', 
      path: '/about',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Our Story', path: '/about' },
        { name: 'Contact', path: '/contact' }
      ]
    },
    { name: 'Blog', path: 'https://blog.rayapp.io/?utm_source=header&utm_medium=website&utm_campaign=site-cta-refresh-2025q4&utm_content=nav-blog' }
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    if (isMenuOpen) {
      setOpenDropdown(null)
    }
  }

  const handleDropdownHover = (itemName: string, isEntering: boolean) => {
    // Clear any existing timeout for this item
    if (dropdownTimeouts.current[itemName]) {
      clearTimeout(dropdownTimeouts.current[itemName])
      delete dropdownTimeouts.current[itemName]
    }

    if (isEntering) {
      setOpenDropdown(itemName)
    } else {
      // Add small delay before closing to prevent flickering
      dropdownTimeouts.current[itemName] = window.setTimeout(() => {
        setOpenDropdown(null)
        delete dropdownTimeouts.current[itemName]
      }, 150)
    }
  }

  const handleDropdownClick = (itemName: string) => {
    // For mobile/touch devices
    setOpenDropdown(openDropdown === itemName ? null : itemName)
  }

  const handleKeyDown = (event: React.KeyboardEvent, itemName: string, hasDropdown: boolean) => {
    if (!hasDropdown) return

    switch (event.key) {
      case 'Enter':
      case ' ':
      case 'ArrowDown':
        event.preventDefault()
        setOpenDropdown(itemName)
        // Focus first dropdown item
        setTimeout(() => {
          const firstItem = menuRefs.current[itemName]?.querySelector('[role="menuitem"]') as HTMLElement
          firstItem?.focus()
        }, 0)
        break
      case 'Escape':
        setOpenDropdown(null)
        break
    }
  }

  const handleDropdownKeyDown = (event: React.KeyboardEvent, itemName: string) => {
    const dropdown = menuRefs.current[itemName]
    if (!dropdown) return

    const items = Array.from(dropdown.querySelectorAll('[role="menuitem"]')) as HTMLElement[]
    const currentIndex = items.findIndex(item => item === document.activeElement)

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault()
        const nextIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0
        items[nextIndex]?.focus()
        break
      case 'ArrowUp':
        event.preventDefault()
        const prevIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1
        items[prevIndex]?.focus()
        break
      case 'Escape':
        event.preventDefault()
        setOpenDropdown(null)
        // Return focus to trigger
        const trigger = document.querySelector(`[aria-controls="${itemName}-dropdown"]`) as HTMLElement
        trigger?.focus()
        break
      case 'Tab':
        // Allow natural tab behavior but close dropdown
        void event;
        setOpenDropdown(null)
        break
    }
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    setOpenDropdown(null)
  }

  const handleScanClick = () => {
    // Analytics tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'cta_click', {
        event_category: 'engagement',
        event_label: 'grader_header',
        value: 1
      })
    }
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node
      const isInsideMenu = Object.values(menuRefs.current).some(ref => 
        ref && ref.contains(target)
      )
      
      if (!isInsideMenu) {
        setOpenDropdown(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      // Clear all timeouts on unmount
      Object.values(dropdownTimeouts.current).forEach(timeout => clearTimeout(timeout))
    }
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    closeMenu()
  }, [pathname])

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="flex items-center hover:opacity-80 transition-opacity duration-200"
              data-analytics="nav"
            >
              <Image
                src="/images/logo-rayapp-azulwebp-300x150.webp"
                alt="RAY - Restaurant Marketing Platform"
                width={120}
                height={40}
                className="h-8 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8" role="menubar">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                ref={el => { menuRefs.current[item.name] = el }}
                onMouseEnter={() => item.hasDropdown && handleDropdownHover(item.name, true)}
                onMouseLeave={() => item.hasDropdown && handleDropdownHover(item.name, false)}
              >
                {item.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => handleDropdownClick(item.name)}
                      onKeyDown={(e) => handleKeyDown(e, item.name, true)}
                      className={`text-gray-700 hover:text-ray-blue px-3 py-2 text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ray-blue focus:ring-offset-2 rounded-md ${
                        pathname === item.path || item.dropdownItems?.some(subItem => pathname === subItem.path) ? 'text-ray-blue' : ''
                      }`}
                      aria-expanded={openDropdown === item.name}
                      aria-haspopup="true"
                      aria-controls={`${item.name}-dropdown`}
                      role="menuitem"
                      data-analytics="nav"
                    >
                      {item.name}
                    </button>
                    {openDropdown === item.name && (
                      <div 
                        id={`${item.name}-dropdown`}
                        className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200"
                        role="menu"
                        onKeyDown={(e) => handleDropdownKeyDown(e, item.name)}
                      >
                        {item.dropdownItems?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.path}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-ray-blue focus:outline-none focus:bg-gray-100 focus:text-ray-blue"
                            onClick={closeMenu}
                            role="menuitem"
                            data-analytics="nav"
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                   item.path.startsWith('http') ? (
                    <a
                      href={item.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-ray-blue px-3 py-2 text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ray-blue focus:ring-offset-2 rounded-md"
                      role="menuitem"
                      data-analytics="nav"
                     aria-label={`Visit ${item.name} - opens in new tab`}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      href={item.path}
                      className={`text-gray-700 hover:text-ray-blue px-3 py-2 text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ray-blue focus:ring-offset-2 rounded-md ${
                        pathname === item.path ? 'text-ray-blue' : ''
                      }`}
                      role="menuitem"
                      data-analytics="nav"
                    >
                      {item.name}
                    </Link>
                   )
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              href="https://admin-v2.preprod.rayapp.io/dashboard"
              external={true}
              data-analytics="nav"
              aria-label="Log in to your RAY dashboard"
            >
              Log in
            </Button>
            <Button
              variant="primary"
              size="sm"
              href="https://grader.rayapp.io/?utm_source=header&utm_medium=website&utm_campaign=site-cta-refresh-2025q4&utm_content=nav-desktop"
              external={true}
              data-cta="grader"
              data-analytics="nav"
              aria-label="Scan your restaurant - run a free 60-second audit to see how RAY can help"
              onClick={handleScanClick}
            >
              Scan your restaurant
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-ray-blue focus:outline-none focus:ring-2 focus:ring-ray-blue focus:ring-offset-2 rounded-md p-2"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle navigation menu"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div id="mobile-menu" className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {/* Actions Block */}
              <div className="mb-4 pb-4 border-b border-gray-200">
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-3">
                  Actions
                </div>
                <div className="space-y-2">
                  <Button
                    variant="ghost"
                    size="md"
                    href="https://admin-v2.preprod.rayapp.io/dashboard"
                    external={true}
                    className="w-full justify-start"
                    data-analytics="nav"
                    aria-label="Log in to your RAY dashboard"
                    onClick={closeMenu}
                  >
                    Log in
                  </Button>
                  <Button
                    variant="primary"
                    size="md"
                    href="https://grader.rayapp.io/?utm_source=header&utm_medium=website&utm_campaign=site-cta-refresh-2025q4&utm_content=nav-mobile"
                    external={true}
                    className="w-full"
                    data-cta="grader"
                    data-analytics="nav"
                    aria-label="Scan your restaurant - run a free 60-second audit to see how RAY can help"
                    onClick={() => {
                      handleScanClick()
                      closeMenu()
                    }}
                  >
                    Scan your restaurant
                  </Button>
                </div>
              </div>

              {/* Navigation Items */}
              {menuItems.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => handleDropdownClick(item.name)}
                        className="w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-ray-blue hover:bg-gray-50 rounded-md transition-colors duration-200 flex items-center justify-between min-h-[44px]"
                        aria-expanded={openDropdown === item.name}
                        data-analytics="nav"
                      >
                        {item.name}
                        <svg
                          className={`h-4 w-4 transition-transform duration-200 ${
                            openDropdown === item.name ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {openDropdown === item.name && (
                        <div className="pl-4 mt-1 space-y-1">
                          {item.dropdownItems?.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.path}
                              className="block px-3 py-2 text-sm font-medium text-gray-600 hover:text-ray-blue hover:bg-gray-50 rounded-md transition-colors duration-200 min-h-[44px] flex items-center"
                              onClick={closeMenu}
                              data-analytics="nav"
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                     item.path.startsWith('http') ? (
                      <a
                        href={item.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-ray-blue hover:bg-gray-50 rounded-md transition-colors duration-200 min-h-[44px] flex items-center"
                        onClick={closeMenu}
                        data-analytics="nav"
                       aria-label={`Visit ${item.name} - opens in new tab`}
                      >
                        {item.name}
                      </a>
                    ) : (
                      <Link
                        href={item.path}
                        className={`block px-3 py-2 text-base font-medium hover:text-ray-blue hover:bg-gray-50 rounded-md transition-colors duration-200 min-h-[44px] flex items-center ${
                          pathname === item.path ? 'text-ray-blue bg-blue-50' : 'text-gray-700'
                        }`}
                        onClick={closeMenu}
                        data-analytics="nav"
                      >
                        {item.name}
                      </Link>
                     )
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header