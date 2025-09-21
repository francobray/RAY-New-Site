import React, { useState } from 'react'

interface LazyImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  srcSet?: string
  sizes?: string
  priority?: boolean
  onLoad?: () => void
  onError?: () => void
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  srcSet,
  sizes,
  priority = false,
  onLoad: onLoadProp,
  onError: onErrorProp
}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  const handleLoad = () => {
    setIsLoaded(true)
    onLoadProp?.()
  }

  const handleError = () => {
    setHasError(true)
    setIsLoaded(true)
    onErrorProp?.()
  }

  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      style={{ width, height }}
    >
      {/* Placeholder */}
      {!isLoaded && (
        <div 
          className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center"
          style={{ width, height }}
          role="img"
          aria-label={`Loading ${alt}`}
        >
          <div className="text-gray-400 text-sm">Loading...</div>
        </div>
      )}
      
      {/* Image */}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        srcSet={srcSet}
        sizes={sizes}
        onLoad={handleLoad}
        onError={handleError}
        className={`transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${hasError ? 'hidden' : ''} ${className}`}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={priority ? 'high' : 'auto'}
      />
      
      {/* Error state */}
      {hasError && (
        <div 
          className="absolute inset-0 bg-gray-100 flex items-center justify-center"
          style={{ width, height }}
          role="img"
          aria-label={`Failed to load ${alt}`}
        >
          <div className="text-gray-500 text-sm">Failed to load image</div>
        </div>
      )}
    </div>
  )
}

export default LazyImage