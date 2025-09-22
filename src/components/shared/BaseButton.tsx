import React from 'react'
import { Link } from 'react-router-dom'

interface BaseButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'dark'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  fullWidth?: boolean
  href?: string
  external?: boolean
  onClick?: () => void
  disabled?: boolean
  className?: string
  'data-cta'?: string
  'data-analytics'?: string
  'aria-label'?: string
}

const BaseButton: React.FC<BaseButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '', 
  fullWidth = false,
  href,
  external = false,
  onClick,
  disabled = false,
  'data-cta': dataCta,
  'data-analytics': dataAnalytics,
  'aria-label': ariaLabel,
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 transform hover:scale-105 active:scale-95 cursor-pointer'
  
  const variantClasses = {
    primary: 'bg-ray-blue text-white hover:bg-blue-600 focus:ring-ray-blue shadow-md hover:shadow-lg',
    secondary: 'bg-white text-ray-blue border-2 border-ray-blue hover:bg-ray-blue hover:text-white focus:ring-ray-blue shadow-md hover:shadow-lg',
    ghost: 'text-ray-blue hover:bg-ray-blue hover:text-white focus:ring-ray-blue hover:shadow-md',
    dark: 'bg-ray-dark-900 text-white hover:bg-ray-dark-700 focus:ring-ray-dark-500 shadow-md hover:shadow-lg'
  }
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }
  
  const widthClass = fullWidth ? 'w-full' : ''
  
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${disabledClasses} ${className}`
  
  const commonProps = {
    className: classes,
    'data-cta': dataCta,
    'data-analytics': dataAnalytics,
    'aria-label': ariaLabel,
    style: { minHeight: '44px', minWidth: '44px' },
    disabled
  }
  
  // Handle analytics tracking
  const handleClick = (e: React.MouseEvent) => {
    if (disabled) {
      e.preventDefault()
      return
    }
    
    // Fire analytics event if specified
    if (dataCta && typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'cta_click', {
        event_category: 'engagement',
        event_label: dataCta,
        cta_location: dataAnalytics || 'unknown',
        value: 1
      })
    }
    
    // Call custom onClick if provided
    if (onClick) {
      onClick()
    }
  }
  
  // External link
  if (href && external) {
    return (
      <a
        {...commonProps}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
      >
        {children}
      </a>
    )
  }
  
  // Internal link
  if (href) {
    return (
      <Link {...commonProps} to={href} onClick={handleClick}>
        {children}
      </Link>
    )
  }
  
  // Button
  return (
    <button {...commonProps} onClick={handleClick}>
      {children}
    </button>
  )
}

export default BaseButton