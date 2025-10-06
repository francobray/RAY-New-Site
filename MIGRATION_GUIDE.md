# React/Vite to Next.js 14 Migration Guide

## Status: In Progress

This document outlines the migration from React (Vite) to Next.js 14 App Router.

## Completed Steps

### 1. Project Setup ✅
- ✅ Created Next.js configuration (`next.config.js`)
- ✅ Updated `package.json` with Next.js dependencies
- ✅ Updated `tsconfig.json` for Next.js
- ✅ Migrated Tailwind config to TypeScript (`tailwind.config.ts`)
- ✅ Created `globals.css` in `/src/app`
- ✅ Set up `.env.local` with environment variables

### 2. Core Layout ✅
- ✅ Created root layout (`src/app/layout.tsx`)
- ✅ Migrated global styles
- ✅ Set up base metadata

### 3. Components Migrated ✅
- ✅ Header (with `next/link` and `usePathname`)
- ✅ Footer (with `next/link`)
- ✅ BaseButton (with `next/link`)

### 4. Pages Created ✅
- ✅ Home page (`src/app/page.tsx`)

## Remaining Work

### Components to Migrate (Mark as 'use client' if they use hooks/state)

All components in `/src/components` need to be checked and updated:

1. **Client Components** (need `'use client'` directive):
   - Components using useState, useEffect, useRef
   - Components with event handlers (onClick, onChange, etc.)
   - Components using browser APIs
   - Existing: Hero, FeatureCards, ProductSection, TestimonialCarousel, CTASection, etc.

2. **Component Link Updates**:
   - Replace all `import { Link } from 'react-router-dom'` with `import Link from 'next/link'`
   - Replace all `to=` props with `href=`
   - Replace `useLocation()` with `usePathname()` from `next/navigation`
   - Replace `useNavigate()` with `useRouter()` from `next/navigation`

### Pages to Create

Each page needs to be created in the App Router structure. Pattern:

```typescript
// src/app/[route]/page.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Title',
  description: 'Page description',
  // ... other metadata
}

export default function PageName() {
  return (
    // Page content
  )
}
```

**Pages Required:**

- ✅ `/` → `src/app/page.tsx`
- ⬜ `/about` → `src/app/about/page.tsx`
- ⬜ `/case-studies` → `src/app/case-studies/page.tsx`
- ⬜ `/case-studies/[id]` → `src/app/case-studies/[id]/page.tsx`
- ⬜ `/case-studies/temple-craft-wynwood` → `src/app/case-studies/temple-craft-wynwood/page.tsx`
- ⬜ `/case-studies/chimba-miami` → `src/app/case-studies/chimba-miami/page.tsx`
- ⬜ `/features` → `src/app/features/page.tsx`
- ⬜ `/product/walk-ins` → `src/app/product/walk-ins/page.tsx`
- ⬜ `/product/online-orders` → `src/app/product/online-orders/page.tsx`
- ⬜ `/product/bookings` → `src/app/product/bookings/page.tsx`
- ⬜ `/product/ai-concierge` → `src/app/product/ai-concierge/page.tsx`
- ⬜ `/pricing` → `src/app/pricing/page.tsx`
- ⬜ `/contact` → `src/app/contact/page.tsx`
- ⬜ `/demo` → `src/app/demo/page.tsx`
- ⬜ `/privacy-policy` → `src/app/privacy-policy/page.tsx`
- ⬜ `/terms-of-service` → `src/app/terms-of-service/page.tsx`
- ⬜ `/cookie-policy` → `src/app/cookie-policy/page.tsx`
- ⬜ `/404` → `src/app/not-found.tsx`

### Image Optimization

Replace all `<img>` tags with Next.js `<Image>` component:

```typescript
import Image from 'next/image'

// Before:
<img src="/images/logo.webp" alt="Logo" width={120} height={40} />

// After:
<Image
  src="/images/logo.webp"
  alt="Logo"
  width={120}
  height={40}
  priority={true} // for above-fold images
/>
```

### Lazy Loading

Next.js handles lazy loading differently:

```typescript
// Before:
const Component = lazy(() => import('./Component'))

// After:
import dynamic from 'next/dynamic'
const Component = dynamic(() => import('./Component'), {
  loading: () => <LoadingSpinner />
})
```

### SEO Migration

Remove `react-helmet-async` usage. Use Next.js Metadata API:

```typescript
export const metadata: Metadata = {
  title: 'Page Title',
  description: 'Description',
  openGraph: { ... },
  twitter: { ... }
}
```

### Client-Side Scripts

Analytics and tracking scripts should be added in `layout.tsx` or use Next.js Script component:

```typescript
import Script from 'next/script'

<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_ID"
  strategy="afterInteractive"
/>
```

### Deployment Configuration

- Keep `netlify.toml` for Netlify deployment
- Or create `vercel.json` for Vercel deployment
- Headers and redirects are now in `next.config.js`

## Migration Checklist

### Phase 1: Core Setup ✅
- [x] Package.json
- [x] Config files
- [x] Root layout
- [x] Global styles

### Phase 2: Components (In Progress)
- [x] Header
- [x] Footer
- [x] BaseButton
- [ ] All other components (15+)

### Phase 3: Pages (In Progress)
- [x] Home
- [ ] All other pages (16+)

### Phase 4: Optimization
- [ ] Image optimization with next/image
- [ ] Dynamic imports where needed
- [ ] Font optimization
- [ ] Bundle analysis

### Phase 5: Testing & QA
- [ ] Build test
- [ ] Visual regression testing
- [ ] Performance audit
- [ ] SEO audit
- [ ] Accessibility audit

## Key Differences React Router → Next.js

| React Router | Next.js |
|--------------|---------|
| `<Link to="/path">` | `<Link href="/path">` |
| `useLocation()` | `usePathname()` |
| `useNavigate()` | `useRouter()` |
| `useParams()` | `useParams()` (same) |
| `<Routes>` | File-based routing |
| `lazy()` + `Suspense` | `dynamic()` |
| `react-helmet-async` | Metadata API |

## Environment Variables

- Rename all `VITE_*` variables to `NEXT_PUBLIC_*`
- Update in code: `import.meta.env.VITE_*` → `process.env.NEXT_PUBLIC_*`

## Commands

```bash
# Development
npm run dev

# Build
npm run build

# Start production server
npm run start

# Lint
npm run lint
```

## Notes

- All components using hooks, state, or browser APIs need `'use client'` directive
- Server Components (no `'use client'`) are the default and recommended when possible
- Images in `/public` are automatically optimized
- Next.js provides automatic code splitting
- API routes go in `/src/app/api/[route]/route.ts`
