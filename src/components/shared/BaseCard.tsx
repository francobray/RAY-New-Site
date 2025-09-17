import React from 'react'

interface BaseCardProps {
  children: React.ReactNode
  className?: string
  padding?: 'sm' | 'md' | 'lg'
  hover?: boolean
  onClick?: () => void
}

const BaseCard: React.FC<BaseCardProps> = ({ 
  children, 
  className = '', 
  padding = 'md', 
  hover = true,
  onClick 
}) => {
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  }
  
  const hoverClasses = hover ? 'hover:shadow-xl hover:-translate-y-1 transition-all duration-300' : ''
  const clickableClasses = onClick ? 'cursor-pointer' : ''
  
  return (
    <div 
      className={`bg-white rounded-xl shadow-lg border border-gray-100 ${paddingClasses[padding]} ${hoverClasses} ${clickableClasses} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export default BaseCard