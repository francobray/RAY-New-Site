# Performance Maintenance Runbook

## Quick Reference

### Performance Targets
- **Lighthouse Mobile:** ≥ 90
- **Lighthouse Desktop:** ≥ 95
- **LCP (Mobile):** ≤ 2.5s
- **CLS (Mobile):** ≤ 0.10
- **TBT (Mobile):** ≤ 200ms
- **First Load JS:** < 110KB
- **Individual Route:** < 6KB

### Performance Budget
```
Home JS:        < 6KB    (Currently: 3.22KB ✅)
First Load:     < 110KB  (Currently: 104KB ✅)
Shared Chunks:  < 90KB   (Currently: 87.2KB ✅)
```

---

## Daily Operations

### Before Merging Any PR

1. **Run build and check sizes:**
```bash
npm run build
# Check output for size regressions
# Flag if any route exceeds budget
```

2. **Test locally:**
```bash
npm run dev
# Open DevTools → Network
# Verify no 404s
# Check bundle sizes in Coverage tab
```

3. **Lighthouse test (optional but recommended):**
```bash
# Install Lighthouse CLI
npm install -g lighthouse

# Test home page
lighthouse http://localhost:3000 \
  --output html \
  --output-path ./lighthouse-home.html \
  --preset=desktop

# Test mobile
lighthouse http://localhost:3000 \
  --output html \
  --output-path ./lighthouse-mobile.html \
  --preset=mobile \
  --throttling.cpuSlowdownMultiplier=4
```

---

## When Adding New Features

### ✅ DO's

**Images:**
- ✅ Use Next.js `<Image>` component
- ✅ Provide width and height props
- ✅ Use `priority` only for above-fold images
- ✅ Use `loading="lazy"` for below-fold
- ✅ Prefer WebP/AVIF formats

**Components:**
- ✅ Keep components as server components by default
- ✅ Only add `'use client'` when absolutely necessary:
  - useState/useEffect needed
  - Event handlers required (onClick, onChange, etc.)
  - Browser-only APIs used
- ✅ Split large client components into smaller chunks

**CSS:**
- ✅ Use Tailwind utilities (tree-shakeable)
- ✅ Avoid large @keyframes animations
- ✅ Test with `prefers-reduced-motion` enabled

**JavaScript:**
- ✅ Import only what you need: `import { Button } from 'lib'`
- ✅ Use dynamic imports for heavy libraries
- ✅ Defer third-party scripts

### ❌ DON'Ts

**Images:**
- ❌ Don't use large unoptimized images (> 200KB)
- ❌ Don't use `priority` on multiple images
- ❌ Don't forget width/height (causes CLS)

**Components:**
- ❌ Don't add `'use client'` unless truly needed
- ❌ Don't import entire libraries: `import _ from 'lodash'` ❌
- ❌ Don't create components that require hydration for static content

**CSS:**
- ❌ Don't add animations that shift layout
- ❌ Don't use `animate-pulse`, `animate-bounce` on visible content
- ❌ Don't add unused styles

**JavaScript:**
- ❌ Don't bundle large libraries for small features
- ❌ Don't add blocking scripts to `<head>`
- ❌ Don't load analytics before critical content

---

## Component Guidelines

### Server Components (Preferred)
Use server components when:
- No state management needed
- No event handlers needed
- No browser APIs used
- Content is static or data-fetched

**Example:**
```tsx
// ✅ Server Component (no 'use client')
import Button from './Button'

export default function Hero() {
  return (
    <section>
      <h1>Welcome</h1>
      <Button href="/demo">Get Demo</Button>
    </section>
  )
}
```

### Client Components (When Necessary)
Only use client components when:
- Using React hooks (useState, useEffect, etc.)
- Handling browser events (onClick, onChange, onScroll)
- Using browser-only APIs (localStorage, window, etc.)
- Using third-party client libraries

**Example:**
```tsx
// ✅ Client Component (needed for useState)
'use client'

export default function Counter() {
  const [count, setCount] = useState(0)
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>
}
```

---

## Troubleshooting

### Bundle Size Increased

**Symptom:** First Load JS > 110KB

**Diagnosis:**
```bash
# Analyze bundle
npm run build
# Check output for large chunks

# Find culprit
npx @next/bundle-analyzer
```

**Fix:**
1. Look for new imports in changed files
2. Check if entire library imported vs. specific functions
3. Consider code splitting with dynamic imports
4. Verify tree-shaking working for imported libraries

### Lighthouse Score Dropped

**Symptom:** Performance score < 90 (mobile) or < 95 (desktop)

**Diagnosis:**
```bash
lighthouse http://localhost:3000 \
  --preset=mobile \
  --view
```

**Common causes & fixes:**

| Metric | Likely Cause | Fix |
|--------|--------------|-----|
| LCP > 2.5s | Large image, slow server | Optimize image, add priority prop |
| CLS > 0.10 | Missing dimensions, animations | Add width/height, remove layout-shifting animations |
| TBT > 200ms | Large JavaScript bundle | Code split, defer non-critical scripts |
| FCP > 1.8s | Render-blocking resources | Inline critical CSS, defer fonts |

### 404 Errors in Console

**Symptom:** Network tab shows 404s

**Diagnosis:**
```bash
# Check for missing files
ls public/fonts/
ls public/images/

# Grep for references
rg "src=\"/images/" src/
rg "@font-face" src/
```

**Fix:**
1. Add missing files to /public/
2. Remove references to missing files
3. Update image paths to correct location

### CLS Regression

**Symptom:** Layout shifts on page load

**Diagnosis:**
```bash
# Open DevTools
# Performance → Record page load
# Look for Layout Shift events

# Or use Lighthouse
lighthouse http://localhost:3000 --preset=mobile --view
# Check "Avoid large layout shifts" diagnostic
```

**Common causes:**
- Images without width/height
- Web fonts loading (FOUT/FOIT)
- Animations that change dimensions
- Content injected after initial render
- Ads/embeds without reserved space

**Fix:**
```tsx
// ❌ Causes CLS
<img src="/hero.jpg" />

// ✅ Prevents CLS
<Image
  src="/hero.jpg"
  width={1200}
  height={630}
  alt="Hero"
/>
```

---

## Performance Testing

### Local Testing

**Quick test:**
```bash
npm run build
npm run start

# Open http://localhost:3000
# DevTools → Lighthouse → Mobile
# Run audit
```

**Full test:**
```bash
# Test all key pages
for page in "/" "/pricing"; do
  lighthouse http://localhost:3000$page \
    --preset=mobile \
    --output html \
    --output-path ./lighthouse$page.html
done
```

### Production Testing

**PageSpeed Insights:**
```
https://pagespeed.web.dev/
Enter: https://rayapp.io
```

**WebPageTest:**
```
https://www.webpagetest.org/
Settings:
- Location: Dulles, VA
- Device: Moto G4
- Connection: 4G
```

---

## Optimization Checklist

Use this checklist when optimizing:

### Critical Path
- [ ] Above-fold content renders without JavaScript
- [ ] Critical CSS inlined (< 14KB)
- [ ] Fonts preloaded with font-display: swap
- [ ] No render-blocking scripts in <head>

### Images
- [ ] All images have width & height
- [ ] Hero image uses priority prop
- [ ] Below-fold images lazy loaded
- [ ] Images < 200KB each
- [ ] Using WebP or AVIF format

### JavaScript
- [ ] First Load JS < 110KB
- [ ] Individual routes < 6KB
- [ ] No unused polyfills
- [ ] Third-party scripts deferred

### CSS
- [ ] No unused styles (check with Coverage)
- [ ] Tailwind purging configured
- [ ] No layout-shifting animations
- [ ] Critical styles inlined

### Fonts
- [ ] Only 1-2 font families loaded
- [ ] font-display: swap set
- [ ] Preload only critical fonts
- [ ] No font 404s

### Caching
- [ ] Static assets: max-age=31536000
- [ ] HTML: max-age=0
- [ ] Fonts: immutable cache header
- [ ] Images: long cache duration

---

## Emergency Rollback

If performance regresses severely:

### Quick Fix
```bash
# Revert last commit
git revert HEAD
git push

# Or revert specific files
git checkout HEAD~1 src/app/globals.css
git checkout HEAD~1 src/components/Hero.tsx
git commit -m "Revert performance changes"
git push
```

### Full Rollback
```bash
# Find last good commit
git log --oneline

# Revert to it
git revert <commit-hash>
git push
```

### Rollback Specific Optimizations

**Restore animations:**
```bash
git checkout <commit-before-optimization> src/app/globals.css
```

**Restore client components:**
```bash
# Add 'use client' back to component
echo "'use client'\n\n$(cat src/components/Hero.tsx)" > src/components/Hero.tsx
```

**Restore font loading:**
```bash
git checkout <commit> public/fonts/
git checkout <commit> src/app/layout.tsx
```

---

## Monitoring Setup

### Lighthouse CI (Recommended)

**Install:**
```bash
npm install -D @lhci/cli
```

**Configure (.lighthouserc.js):**
```javascript
module.exports = {
  ci: {
    collect: {
      staticDistDir: './out',
      url: ['http://localhost:3000', 'http://localhost:3000/pricing'],
    },
    assert: {
      assertions: {
        'categories:performance': ['error', {minScore: 0.9}],
        'categories:accessibility': ['warn', {minScore: 0.98}],
        'categories:best-practices': ['warn', {minScore: 0.98}],
        'categories:seo': ['warn', {minScore: 0.98}],
      },
    },
  },
}
```

**Add to CI:**
```yaml
# .github/workflows/lighthouse.yml
name: Lighthouse CI
on: [pull_request]
jobs:
  lighthouse:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm ci
      - run: npm run build
      - run: npx @lhci/cli autorun
```

### Bundle Size Monitoring

**Add to package.json:**
```json
{
  "scripts": {
    "analyze": "ANALYZE=true npm run build"
  }
}
```

**Check in CI:**
```bash
npm run build > build-output.txt
# Parse and alert if sizes exceed budgets
```

---

## Support & Escalation

### Get Help

1. **Check this runbook** for common issues
2. **Review PERFORMANCE_OPTIMIZATIONS.md** for what was changed
3. **Check git history** for recent performance-related changes
4. **Test locally** to reproduce
5. **Gather data:** Lighthouse report, bundle analysis, Network tab

### Report Issues

Include:
- Lighthouse report (JSON export)
- Bundle size comparison (before/after)
- Specific pages affected
- Browser/device tested
- Steps to reproduce

---

## Quick Commands Reference

```bash
# Build & check sizes
npm run build

# Local dev server
npm run dev

# Lighthouse mobile audit
lighthouse http://localhost:3000 --preset=mobile --view

# Lighthouse desktop audit
lighthouse http://localhost:3000 --preset=desktop --view

# Analyze bundle
npx @next/bundle-analyzer

# Check for 404s
npm run dev
# Open http://localhost:3000
# DevTools → Network → filter:404
```

---

## Success Metrics

Track these weekly:

- **Build Size:** First Load JS trend
- **Lighthouse Scores:** All pages ≥ targets
- **Real User Metrics:**
  - P75 LCP ≤ 2.5s
  - P75 CLS ≤ 0.10
  - P75 FID ≤ 100ms
- **Error Rate:** Zero 404s
- **Conversion Rate:** Monitor CTA clicks (ensure no drops)

Alert if:
- Any metric regresses > 10%
- Lighthouse score drops > 5 points
- New 404 errors appear
- Bundle size increases > 15KB
