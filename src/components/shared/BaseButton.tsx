import React from 'react'
import { Link } from 'react-router-dom'

interface BaseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'dark'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  fullWidth?: boolean
  href?: string
  external?: boolean
  'data-cta'?: string
  'data-analytics'?: string
}

const BaseButton: React.FC<BaseButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '', 
  fullWidth = false,
  href,
  external = false,
  'data-cta': dataCta,
  'data-analytics': dataAnalytics,
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 transform hover:scale-105 active:scale-95'
  
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
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`
  
  const commonProps = {
    className: classes,
    style: { minHeight: '44px', minWidth: '44px' },
    'data-cta': dataCta,
    'data-analytics': dataAnalytics,
    ...props
  }
  
  // External link
  if (href && external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        {...commonProps}
      >
        {children}
      </a>
    )
  }
  
  // Internal link
  if (href && !external) {
    return (
      <Link
        to={href}
        {...commonProps}
      >
        {children}
      </Link>
    )
  }
  
  // Button
  return (
    <button 
      {...commonProps}
    >
      {children}
    </button>
  )
}

export default BaseButton