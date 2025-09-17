import React from 'react'

interface BaseSectionHeaderProps {
  badge?: {
    icon?: React.ComponentType<{ className?: string }>
    text: string
  }
  title: string | React.ReactNode
  subtitle?: string
  className?: string
  titleLevel?: 'h1' | 'h2' | 'h3'
  centered?: boolean
}

const BaseSectionHeader: React.FC<BaseSectionHeaderProps> = ({
  badge,
  title,
  subtitle,
  className = '',
  titleLevel = 'h2',
  centered = true
}) => {
  const TitleTag = titleLevel
  const alignmentClass = centered ? 'text-center' : ''
  
  return (
    <div className={`${alignmentClass} ${className}`}>
      {badge && (
        <div className="inline-flex items-center px-4 py-2 bg-ray-blue/10 rounded-full text-ray-blue text-sm font-medium mb-6">
          {badge.icon && <badge.icon className="w-4 h-4 mr-2" />}
          <span>{badge.text}</span>
        </div>
      )}
      
      <TitleTag className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ray-dark-900 mb-6 leading-tight">
        {title}
      </TitleTag>
      
      {subtitle && (
        <p className="text-xl text-ray-darkGray max-w-4xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default BaseSectionHeader