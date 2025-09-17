// UI Constants and Design Tokens
export const DESIGN_TOKENS = {
  // Colors
  COLORS: {
    PRIMARY: '#0D79E5',
    SECONDARY: '#6FBF73',
    DARK: '#1C1C1C',
    GRAY: '#A8A8A8',
    DARK_GRAY: '#5C5C5C'
  },
  
  // Spacing
  SPACING: {
    XS: '0.25rem',
    SM: '0.5rem',
    MD: '1rem',
    LG: '1.5rem',
    XL: '2rem',
    XXL: '3rem'
  },
  
  // Typography
  TYPOGRAPHY: {
    SIZES: {
      XS: '0.75rem',
      SM: '0.875rem',
      BASE: '1rem',
      LG: '1.125rem',
      XL: '1.25rem',
      '2XL': '1.5rem',
      '3XL': '1.875rem',
      '4XL': '2.25rem',
      '5XL': '3rem'
    },
    WEIGHTS: {
      NORMAL: '400',
      MEDIUM: '500',
      SEMIBOLD: '600',
      BOLD: '700',
      BLACK: '900'
    }
  },
  
  // Shadows
  SHADOWS: {
    SM: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    MD: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    LG: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    XL: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)'
  },
  
  // Border Radius
  RADIUS: {
    SM: '0.25rem',
    DEFAULT: '0.375rem',
    MD: '0.5rem',
    LG: '0.75rem',
    XL: '1rem',
    '2XL': '1.5rem',
    FULL: '9999px'
  }
} as const

// Common CSS Classes
export const CSS_CLASSES = {
  // Layout
  CONTAINER: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
  CONTAINER_SM: 'max-w-4xl mx-auto px-4 sm:px-6 lg:px-8',
  CONTAINER_XS: 'max-w-2xl mx-auto px-4 sm:px-6 lg:px-8',
  
  // Grid
  GRID_1: 'grid grid-cols-1',
  GRID_2: 'grid grid-cols-1 md:grid-cols-2',
  GRID_3: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  GRID_4: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  
  // Flex
  FLEX_CENTER: 'flex items-center justify-center',
  FLEX_BETWEEN: 'flex items-center justify-between',
  FLEX_COL: 'flex flex-col',
  
  // Text
  TEXT_CENTER: 'text-center',
  TEXT_LEFT: 'text-left',
  
  // Spacing
  SECTION_PADDING: 'py-20',
  SECTION_MARGIN: 'mb-16',
  
  // Animations
  FADE_IN: 'animate-in fade-in slide-in-from-bottom duration-700',
  HOVER_SCALE: 'hover:scale-105 transition-transform duration-300',
  HOVER_SHADOW: 'hover:shadow-xl transition-shadow duration-300'
} as const