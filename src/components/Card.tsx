import React from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
  padding?: 'sm' | 'md' | 'lg'
  hover?: boolean
}

const Card: React.FC<CardProps> = ({ children, className = '', padding = 'md', hover = true }) => {
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  }
  
  const hoverClasses = hover ? 'hover:shadow-xl hover:-translate-y-1 transition-all duration-300' : ''
  
  return (
    <div className={`bg-white rounded-xl shadow-lg border border-gray-100 ${paddingClasses[padding]} ${hoverClasses} ${className}`}>
      {children}
    </div>
  )
}

export default Card