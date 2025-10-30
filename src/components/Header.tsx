'use client'

import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Button from './shared/BaseButton'
import { useTranslations } from '@/hooks/useTranslations'
import { type Locale } from '@/lib/i18n'
import {
  Monitor,
  MapPin,
  Truck,
  ShoppingCart,
  Calendar,
  Smartphone,
  Heart
} from 'lucide-react'

interface ProductItem {
  name: string
  path: string
  description: string
  icon: React.ComponentType<{ className?: string }> | string
}

interface MenuItem {
  name: string
  path: string
  hasDropdown?: boolean
  dropdownItems?: { name: string; path: string }[]
  productItems?: ProductItem[]
  id?: string // Add consistent identifier
}

interface HeaderProps {
  locale: Locale
}

const Header: React.FC<HeaderProps> = ({ locale }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false)
  const pathname = usePathname()
  const menuRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})
  const dropdownTimeouts = useRef<{ [key: string]: number }>({})
  const languageDropdownDesktopRef = useRef<HTMLDivElement>(null)
  const languageDropdownMobileRef = useRef<HTMLDivElement>(null)
  const t = useTranslations(locale)

  // Enhanced language switcher function using direct navigation
  const switchLanguage = (newLocale: Locale) => {
    if (!pathname) return
    
    // Remove current locale from path
    // Handle both /locale and /locale/path patterns
    const segments = pathname.split('/').filter(Boolean)
    
    // If first segment is the current locale, remove it
    if (segments[0] === locale) {
      segments.shift()
    }
    
    // Build new path with new locale
    const pathWithoutLocale = segments.length > 0 ? `/${segments.join('/')}` : ''
    const newPath = `/${newLocale}${pathWithoutLocale}`
    
    // Use direct window navigation for reliability
    window.location.href = newPath
  }

  const menuItems: MenuItem[] = [
    { 
      id: 'products',
      name: locale === 'es' ? 'Productos' : 'Product', 
      path: `/${locale}/products`,
      hasDropdown: true,
      productItems: [
          {
            name: locale === 'es' ? 'Delivery por WhatsApp' : 'WhatsApp Delivery',
            path: `/${locale}/product/whatsapp-delivery`,
            description: locale === 'es' ? 'Convierte DMs de restaurante en pedidos automáticamente 24/7.' : 'Turn restaurant DMs into orders automatically 24/7.',
            icon: 'whatsapp'
          },
        { 
          name: locale === 'es' ? 'Website de tu restaurante' : 'Website Builder',
          path: `/${locale}/product/restaurant-website-ai`,
          description: locale === 'es' ? 'Convierte más visitantes en clientes con un sitio web impulsado por IA.' : 'Convert more visitors into customers with an AI-powered website.',
          icon: Monitor
        },
        { 
          name: locale === 'es' ? 'Walk-Ins' : 'Walk-Ins',
          path: `/${locale}/product/walk-ins`,
          description: locale === 'es' ? 'Convierte búsquedas en visitas con marketing local impulsado por IA.' : 'Turn searches into walk-ins with AI-powered local marketing.',
          icon: MapPin
        },
        { 
          name: locale === 'es' ? 'Delivery Sin Comisión' : 'Zero-Commission Delivery',
          path: `/${locale}/product/zero-commission-delivery`,
          description: locale === 'es' ? 'Delivery rentable por conductores mejor calificados a precio justo.' : 'Profitable delivery by top-rated drivers at a fair price.',
          icon: Truck
        },
        { 
          name: locale === 'es' ? 'Pedidos Online' : 'Online Ordering',
          path: `/${locale}/product/online-orders`,
          description: locale === 'es' ? 'Obtén más pedidos con pedidos online que se sienten familiares y fáciles.' : 'Get more orders with online ordering that feels familiar and easy.',
          icon: ShoppingCart
        },
        { 
          name: locale === 'es' ? 'Reservas Directas' : 'Direct Bookings',
          path: `/${locale}/product/direct-bookings`,
          description: locale === 'es' ? 'Maximiza la ocupación de mesas con gestión inteligente de reservas.' : 'Maximize table occupancy with intelligent booking management.',
          icon: Calendar
        },
        { 
          name: locale === 'es' ? 'App Móvil Personalizada' : 'Custom Mobile App',
          path: `/${locale}/product/branded-apps`,
          description: locale === 'es' ? 'Haz crecer pedidos repetidos con una app móvil de 5 estrellas.' : 'Grow repeat orders with a 5-star mobile app.',
          icon: Smartphone
        },
        { 
          name: locale === 'es' ? 'Programa de Loyalty' : 'Loyalty Program',
          path: `/${locale}/product/loyalty`,
          description: locale === 'es' ? 'Construye lealtad con un programa de recompensas inspirado en las grandes marcas.' : 'Build loyalty with a rewards program inspired by the big brands.',
          icon: Heart
        }
      ]
    },
    { 
      id: 'case-studies',
      name: locale === 'es' ? 'Casos de Éxito' : 'Case Studies', 
      path: `/${locale}/case-studies`, 
      hasDropdown: true, 
      dropdownItems: [
        { name: locale === 'es' ? 'Todos los Casos' : 'All Case Studies', path: `/${locale}/case-studies` },
        { name: 'Temple Craft Wynwood', path: `/${locale}/case-studies/temple-craft-wynwood` },
        { name: 'Chimba Miami', path: `/${locale}/case-studies/chimba-miami` },
        { name: 'Havana 1957', path: `/${locale}/case-studies/havana-1957` },
        { name: 'Oh! Mexico', path: `/${locale}/case-studies/oh-mexico` },
        { name: 'Mercato Della Pescheria', path: `/${locale}/case-studies/mercato-della-pescheria` },
        { name: 'Barsecco', path: `/${locale}/case-studies/barsecco` },
        { name: 'Salty Flame', path: `/${locale}/case-studies/salty-flame` },
        { name: 'Paperfish', path: `/${locale}/case-studies/paperfish` },
        { name: 'Marabu', path: `/${locale}/case-studies/marabu` },
        { name: 'Cortadito Cafe', path: `/${locale}/case-studies/cortadito-cafe` },
        { name: 'Green Eat', path: `/${locale}/case-studies/green-eat` },
        { name: 'Havanna', path: `/${locale}/case-studies/havanna` },
        { name: 'CRAFT', path: `/${locale}/case-studies/craft` },
        { name: 'WingsFC', path: `/${locale}/case-studies/wingsfc` },
        { name: 'Dolcezza', path: `/${locale}/case-studies/dolcezza` },
        { name: 'La Birra Bar', path: `/${locale}/case-studies/la-birra-bar` }
      ] 
    },
    { id: 'pricing', name: locale === 'es' ? 'Precios' : 'Pricing', path: `/${locale}/pricing` },
    { 
      id: 'company',
      name: locale === 'es' ? 'Compañía' : 'Company', 
      path: `/${locale}/about`,
      hasDropdown: true,
      dropdownItems: [
        { name: locale === 'es' ? 'Nuestra Historia' : 'Our Story', path: `/${locale}/about` },
        { name: locale === 'es' ? 'Contacto' : 'Contact', path: `/${locale}/contact` }
      ]
    },
    { id: 'blog', name: 'Blog', path: 'https://blog.rayapp.io/?utm_source=header&utm_medium=website&utm_campaign=site-cta-refresh-2025q4&utm_content=nav-blog' }
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
    setIsLanguageDropdownOpen(false)
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
      // Consider clicks inside desktop dropdowns or mobile menu as inside
      const isInsideMenu = Object.values(menuRefs.current).some(ref => 
        ref && ref.contains(target)
      ) || (target instanceof HTMLElement && target.closest('#mobile-menu'))
      
      // Check if click is inside language dropdown (desktop or mobile)
      const isInsideLanguageDropdown = 
        (languageDropdownDesktopRef.current && languageDropdownDesktopRef.current.contains(target)) ||
        (languageDropdownMobileRef.current && languageDropdownMobileRef.current.contains(target))
      
      if (!isInsideMenu && !isInsideLanguageDropdown) {
        setOpenDropdown(null)
        setIsLanguageDropdownOpen(false)
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
    <header className="bg-white shadow-sm sticky top-0 z-50 h-[70px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[70px]">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href={`/${locale}`}
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
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleDropdownClick(item.name);
                      }}
                      onKeyDown={(e) => handleKeyDown(e, item.name, true)}
                      className={`text-gray-700 hover:text-ray-blue px-3 py-2 text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ray-blue focus:ring-offset-2 rounded-md ${
                        pathname === item.path || 
                        item.dropdownItems?.some(subItem => pathname === subItem.path) ||
                        item.productItems?.some(subItem => pathname === subItem.path) ? 'text-ray-blue' : ''
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
                        className={`absolute top-full mt-1 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200 ${
                          item.productItems 
                            ? 'w-[900px] right-0 lg:left-0 lg:right-auto' 
                            : 'w-48 left-0'
                        }`}
                        role="menu"
                        onKeyDown={(e) => handleDropdownKeyDown(e, item.name)}
                      >
                        {item.productItems ? (
                          <div className="p-6">
                            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4 text-center">
                              {locale === 'es' ? 'Productos' : 'Product'}
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              {item.productItems.map((productItem) => (
                                <Link
                                  key={productItem.name}
                                  href={productItem.path}
                                  className="group flex items-start space-x-3 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:bg-gray-50"
                                  role="menuitem"
                                  data-analytics="nav"
                                >
                                  <div className="flex-shrink-0 text-gray-600">
                                    {productItem.icon === 'whatsapp' ? (
                                      <Image 
                                        src="/images/WhatsApp.svg.webp" 
                                        alt="WhatsApp" 
                                        className="w-6 h-6"
                                        width={24}
                                        height={24}
                                        style={{ aspectRatio: '1/1' }}
                                      />
                                    ) : (
                                      React.createElement(productItem.icon as React.ComponentType<{ className?: string }>, { className: "w-6 h-6" })
                                    )}
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="text-sm font-medium text-gray-900 group-hover:text-ray-blue">
                                      {productItem.name}
                                    </div>
                                    <div className="text-sm text-gray-500 mt-1 leading-5">
                                      {productItem.description}
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <>
                            {item.dropdownItems?.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.path}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-ray-blue focus:outline-none focus:bg-gray-100 focus:text-ray-blue"
                                role="menuitem"
                                data-analytics="nav"
                              >
                                {dropdownItem.name}
                              </Link>
                            ))}
                          </>
                        )}
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
            {/* Language Switcher */}
            <div className="relative" ref={languageDropdownDesktopRef}>
              <button
                onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-ray-blue hover:bg-gray-50 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ray-blue focus:ring-offset-2"
                aria-expanded={isLanguageDropdownOpen}
                aria-haspopup="true"
              >
                <span className="text-xs font-medium">{locale === 'es' ? 'ES' : 'EN'}</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isLanguageDropdownOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isLanguageDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
                  <button
                    onClick={() => {
                      switchLanguage('es')
                      setIsLanguageDropdownOpen(false)
                    }}
                    className={`w-full text-left px-4 py-2 text-sm flex items-center space-x-3 hover:bg-gray-50 transition-colors ${
                      locale === 'es' ? 'text-ray-blue bg-blue-50' : 'text-gray-700'
                    }`}
                  >
                    <span className="text-lg">🇪🇸</span>
                    <span>Español</span>
                  </button>
                  <button
                    onClick={() => {
                      switchLanguage('en')
                      setIsLanguageDropdownOpen(false)
                    }}
                    className={`w-full text-left px-4 py-2 text-sm flex items-center space-x-3 hover:bg-gray-50 transition-colors ${
                      locale === 'en' ? 'text-ray-blue bg-blue-50' : 'text-gray-700'
                    }`}
                  >
                    <span className="text-lg">🇺🇸</span>
                    <span>English</span>
                  </button>
                </div>
              )}
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              href={`/${locale}/demo?utm_source=header&utm_medium=website&utm_campaign=site-cta-refresh-2025q4&utm_content=nav-demo`}
              data-analytics="nav"
              aria-label="Get a demo of RAY's restaurant marketing platform"
            >
              {t.CTA.GET_FREE_DEMO}
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
              {t.CTA.GRADE_RESTAURANT}
            </Button>
          </div>

          {/* Mobile menu button and actions */}
          <div className="lg:hidden flex items-center space-x-4">
            {/* Language Dropdown */}
            <div className="relative" ref={languageDropdownMobileRef}>
              <button
                onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                className="flex items-center space-x-1 px-2 py-1.5 text-sm font-medium text-gray-700 hover:text-ray-blue rounded-md transition-colors duration-200"
                aria-expanded={isLanguageDropdownOpen}
                aria-haspopup="true"
              >
                <span className="text-base">{locale === 'es' ? '🇪🇸' : '🇺🇸'}</span>
                <svg
                  className={`w-3 h-3 transition-transform duration-200 ${
                    isLanguageDropdownOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isLanguageDropdownOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
                  <button
                    onClick={() => {
                      switchLanguage('es')
                      setIsLanguageDropdownOpen(false)
                    }}
                    className={`w-full text-left px-3 py-2 text-sm flex items-center space-x-2 hover:bg-gray-50 transition-colors ${
                      locale === 'es' ? 'text-ray-blue bg-blue-50' : 'text-gray-700'
                    }`}
                  >
                    <span className="text-base">🇪🇸</span>
                    <span>ES</span>
                  </button>
                  <button
                    onClick={() => {
                      switchLanguage('en')
                      setIsLanguageDropdownOpen(false)
                    }}
                    className={`w-full text-left px-3 py-2 text-sm flex items-center space-x-2 hover:bg-gray-50 transition-colors ${
                      locale === 'en' ? 'text-ray-blue bg-blue-50' : 'text-gray-700'
                    }`}
                  >
                    <span className="text-base">🇺🇸</span>
                    <span>EN</span>
                  </button>
                </div>
              )}
            </div>

            {/* Mobile menu toggle */}
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
            <div className="px-4 pt-4 pb-3 space-y-1 bg-white border-t border-gray-200">
              {/* Navigation Items */}
              {menuItems.map((item) => (
                <div key={item.id || item.name}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          handleDropdownClick(item.id || item.name);
                        }}
                        className="w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-ray-blue hover:bg-gray-50 rounded-md transition-colors duration-200 flex items-center justify-between min-h-[44px]"
                        aria-expanded={openDropdown === (item.id || item.name)}
                        data-analytics="nav"
                      >
                        {item.name}
                        <svg
                          className={`h-4 w-4 transition-transform duration-200 ${
                            openDropdown === (item.id || item.name) ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {openDropdown === (item.id || item.name) && (
                        <div className="pl-4 mt-1 space-y-1">
                          {item.productItems ? (
                            item.productItems.map((productItem) => (
                              <Link
                                key={productItem.name}
                                href={productItem.path}
                                className="flex items-start space-x-3 px-3 py-3 text-sm font-medium text-gray-600 hover:text-ray-blue hover:bg-gray-50 rounded-md transition-colors duration-200 min-h-[44px]"
                                data-analytics="nav"
                              >
                                <div className="flex-shrink-0 text-gray-600">
                                  {productItem.icon === 'whatsapp' ? (
                                    <Image 
                                      src="/images/WhatsApp.svg.webp" 
                                      alt="WhatsApp" 
                                      className="w-5 h-5"
                                      width={20}
                                      height={20}
                                      style={{ aspectRatio: '1/1' }}
                                    />
                                  ) : (
                                    React.createElement(productItem.icon as React.ComponentType<{ className?: string }>, { className: "w-5 h-5" })
                                  )}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="text-sm font-medium text-gray-900">
                                    {productItem.name}
                                  </div>
                                  <div className="text-xs text-gray-500 mt-1 leading-4">
                                    {productItem.description}
                                  </div>
                                </div>
                              </Link>
                            ))
                          ) : (
                            item.dropdownItems?.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.path}
                                className="block px-3 py-2 text-sm font-medium text-gray-600 hover:text-ray-blue hover:bg-gray-50 rounded-md transition-colors duration-200 min-h-[44px] flex items-center"
                                data-analytics="nav"
                              >
                                {dropdownItem.name}
                              </Link>
                            ))
                          )}
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
                        data-analytics="nav"
                      >
                        {item.name}
                      </Link>
                     )
                  )}
                </div>
              ))}

              {/* Action Buttons at Bottom */}
              <div className="pt-4 mt-4 border-t border-gray-200 space-y-2">
                <Button
                  variant="ghost"
                  size="md"
                  href={`/${locale}/demo?utm_source=header&utm_medium=website&utm_campaign=site-cta-refresh-2025q4&utm_content=nav-mobile-demo`}
                  className="w-full justify-center"
                  data-analytics="nav"
                  aria-label="Get a demo of RAY's restaurant marketing platform"
                  onClick={closeMenu}
                >
                  {t.CTA.GET_FREE_DEMO}
                </Button>
                <Button
                  variant="primary"
                  size="md"
                  href="https://grader.rayapp.io/?utm_source=header&utm_medium=website&utm_campaign=site-cta-refresh-2025q4&utm_content=nav-mobile"
                  external={true}
                  className="w-full justify-center"
                  data-cta="grader"
                  data-analytics="nav"
                  aria-label="Scan your restaurant - run a free 60-second audit to see how RAY can help"
                  onClick={() => {
                    handleScanClick()
                    closeMenu()
                  }}
                >
                  {t.CTA.GRADE_RESTAURANT}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header