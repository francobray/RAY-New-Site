# Mobile QA Testing Checklist

## Overview
This checklist should be used to validate mobile responsiveness across all product pages after deployment.

---

## Test Devices & Viewports

### Required Test Points
- [ ] **360px** - Samsung Galaxy S8/S9 (Smallest common Android)
- [ ] **375px** - iPhone SE/X/12 Mini
- [ ] **414px** - iPhone 11/12/13 Pro Max
- [ ] **768px** - iPad Mini/Air Portrait
- [ ] **1024px** - iPad Pro Portrait / Small Laptop

### Browser Matrix
- [ ] iOS Safari (latest)
- [ ] Chrome Android (latest)
- [ ] Samsung Internet
- [ ] Firefox Mobile
- [ ] Edge Mobile

---

## Page-by-Page Checklist

### Product: Walk-Ins (`/product/walk-ins`)

#### Visual Layout (360px)
- [ ] Hero heading displays without overlap
- [ ] "Scan Your Restaurant" button fully visible and tappable
- [ ] "Get a Free Demo" button fully visible and tappable
- [ ] Trust indicators wrap to multiple lines without overflow
- [ ] Google Maps mockup scales appropriately
- [ ] Feature cards stack in single column
- [ ] No horizontal scroll throughout page

#### Visual Layout (414px)
- [ ] Same as 360px with better spacing
- [ ] Icons and badges properly sized

#### Visual Layout (768px)
- [ ] Trust indicators display in 2-3 items per row
- [ ] Feature cards display in 2 columns
- [ ] Hero section still single column or transitions to 2-column

#### Interactive Elements
- [ ] All buttons meet 44px minimum tap target
- [ ] Navigation hamburger menu opens smoothly
- [ ] Dropdown menus (if any) work on touch
- [ ] No accidental taps on nearby elements
- [ ] Scroll behavior smooth and natural

#### Typography
- [ ] Heading text is readable (not overlapping)
- [ ] Body text maintains 16px minimum
- [ ] Line spacing adequate for readability
- [ ] No text truncation or cutting off

#### Performance
- [ ] Page loads within 3 seconds
- [ ] Images lazy load appropriately
- [ ] No layout shift during load
- [ ] Animations smooth (no janking)

---

### Product: Bookings (`/product/bookings`)

#### Visual Layout (360px)
- [ ] Hero section displays correctly
- [ ] Calendar/booking visual scales properly
- [ ] Feature grid stacks single column
- [ ] Trust indicators wrap without overflow
- [ ] No horizontal scroll

#### Visual Layout (414px)
- [ ] Adequate spacing around all elements
- [ ] CTAs prominent and accessible

#### Visual Layout (768px)
- [ ] Feature cards display in 2 columns
- [ ] Hero may start transitioning to 2-column

#### Interactive Elements
- [ ] All buttons tappable (44px minimum)
- [ ] Navigation functional
- [ ] Forms (if present) usable on mobile

#### Typography
- [ ] All text readable
- [ ] No overlap or truncation
- [ ] Proper hierarchy maintained

---

### Product: Online Orders (`/product/online-orders`)

#### Visual Layout (360px)
- [ ] Hero image scales properly
- [ ] Dashboard screenshot readable
- [ ] Feature icons properly sized
- [ ] Stats/metrics display clearly
- [ ] No horizontal scroll

#### Visual Layout (414px)
- [ ] Dashboard preview maintains aspect ratio
- [ ] All text legible

#### Visual Layout (768px)
- [ ] Metrics display in grid format (2-4 columns)
- [ ] Feature cards in 2 columns

#### Interactive Elements
- [ ] "Grade Your Restaurant" button tappable
- [ ] Dashboard image not blocking interaction
- [ ] Navigation menu functional

---

### Product: AI Concierge (`/product/ai-concierge`)

#### Visual Layout (360px)
- [ ] Phone mockup (chat interface) scales properly
- [ ] Chat bubbles readable
- [ ] Feature cards stack single column
- [ ] FAQ accordions fully functional
- [ ] No horizontal scroll

#### Visual Layout (414px)
- [ ] Phone mockup maintains proportion
- [ ] Floating stat badges don't overlap content

#### Visual Layout (768px)
- [ ] How It Works section displays 2-3 columns
- [ ] Feature grid transitions to 2 columns
- [ ] FAQ section maintains readability

#### Interactive Elements
- [ ] FAQ expand/collapse works smoothly
- [ ] All CTAs tappable
- [ ] Phone mockup doesn't interfere with scroll
- [ ] Buttons in chat mockup (if interactive) properly sized

#### Typography
- [ ] Chat text in mockup readable
- [ ] Heading line-height comfortable
- [ ] No text overflow in cards

---

### Core Pages

#### Products Overview (`/products`)
- [ ] Product cards stack on mobile (360px-414px)
- [ ] Product cards display 2 columns on tablet (768px)
- [ ] All product icons visible
- [ ] "Get a Free Demo" buttons accessible
- [ ] Trust indicators wrap properly

#### Pricing (`/pricing`)
- [ ] Pricing cards stack single column (360px-414px)
- [ ] Pricing cards display 2 columns (768px+)
- [ ] Price text clearly visible
- [ ] Feature lists readable
- [ ] "Get a Free Demo" buttons prominent
- [ ] FAQ accordions functional

#### Home (`/`)
- [ ] Hero section displays correctly
- [ ] Feature cards layout responsive
- [ ] Testimonial carousel (if present) swipeable
- [ ] CTA sections accessible
- [ ] Footer properly formatted

---

## Component-Specific Tests

### Header Navigation
- [ ] Logo displays at proper size
- [ ] Hamburger icon visible and tappable (lg: hidden)
- [ ] Menu opens with smooth animation
- [ ] Menu items have 44px+ tap targets
- [ ] Dropdown menus work on touch
- [ ] Menu closes when route changes
- [ ] "Scan your restaurant" button visible on desktop
- [ ] Login button accessible

### Footer
- [ ] Links organized in columns on desktop
- [ ] Links stack on mobile
- [ ] Social icons properly sized
- [ ] Copyright text readable
- [ ] All links tappable

### CTA Sections
- [ ] Buttons display full-width or centered on mobile
- [ ] Trust indicators wrap properly
- [ ] Background gradients display correctly
- [ ] Text remains readable on all backgrounds

### Forms (Demo page)
- [ ] Input fields full-width on mobile
- [ ] Labels properly associated
- [ ] Error messages display clearly
- [ ] Submit button fixed or easily accessible
- [ ] Keyboard opens without obscuring fields
- [ ] Dropdown selects work on mobile

---

## Horizontal Scroll Test

### How to Test
1. Open page in mobile viewport
2. Scroll vertically through entire page
3. Check for any horizontal scrollbar
4. Try swiping left/right to detect hidden overflow

### Common Problem Areas (All Fixed)
- ~~Trust indicator badges~~ ✅ Fixed
- ~~Multi-column layouts~~ ✅ Fixed
- ~~Wide images~~ ✅ Fixed
- ~~Navigation menus~~ ✅ Already compliant

---

## Typography Readability Test

### Line Height Test
**Instructions:**
1. View hero headings on mobile (360px)
2. Check for any text line overlap
3. Verify comfortable reading distance between lines

**Expected Results:**
- ✅ Hero headings use `leading-tight` on mobile
- ✅ Body text uses `leading-relaxed`
- ✅ No text overlap at any viewport

### Font Size Test
**Instructions:**
1. Verify minimum text size is 16px (or 14px for small labels)
2. Check that body text doesn't trigger iOS auto-zoom

**Expected Results:**
- ✅ Body text: 16px minimum
- ✅ Small text/labels: 14px minimum
- ✅ Headings scale: 36px → 48px → 60px

---

## Touch Target Test

### Manual Testing
**Instructions:**
1. Open page on actual mobile device (not just DevTools)
2. Try tapping all interactive elements
3. Note any missed taps or accidental taps on nearby elements

### Critical Touch Targets
- [ ] Navigation hamburger menu: 44x44px ✅
- [ ] CTA buttons: 44px height minimum ✅
- [ ] Form inputs: 44px height minimum
- [ ] Dropdown selects: 44px height minimum
- [ ] Link text: 44px tap area (via padding)
- [ ] Close buttons (modals): 44x44px

---

## Image Rendering Test

### Hero Images
- [ ] Images don't exceed viewport width
- [ ] Images maintain aspect ratio
- [ ] Loading state doesn't cause layout shift
- [ ] Lazy loading works for below-fold images

### Product Screenshots (Dashboard, etc.)
- [ ] Screenshots are readable on mobile
- [ ] Text in screenshots not too small
- [ ] Images don't cause horizontal scroll
- [ ] WebP format with fallback (future enhancement)

### Icons & Logos
- [ ] Brand logo displays at correct size
- [ ] Feature icons properly sized (not too small)
- [ ] Icon + text combinations aligned properly

---

## Performance Checklist

### Load Time
- [ ] First Contentful Paint < 1.8s
- [ ] Time to Interactive < 3.9s
- [ ] Speed Index < 3.4s
- [ ] Largest Contentful Paint < 2.5s

### Lighthouse Scores (Mobile)
- [ ] Performance: 90+ (target)
- [ ] Accessibility: 95+ (target)
- [ ] Best Practices: 95+ (target)
- [ ] SEO: 95+ (target)

### Core Web Vitals
- [ ] LCP (Largest Contentful Paint): < 2.5s
- [ ] FID (First Input Delay): < 100ms
- [ ] CLS (Cumulative Layout Shift): < 0.1

---

## Screenshot Documentation

### Required Screenshots

For each product page, capture:

#### Mobile (360px)
1. Full-page screenshot showing:
   - Hero section
   - Feature cards
   - CTA sections
   - Footer

2. Detail screenshots showing:
   - Navigation menu (open state)
   - Trust indicators
   - Button spacing
   - Typography examples

#### Tablet (768px)
1. Full-page screenshot showing:
   - Layout transitions
   - Multi-column layouts
   - Responsive spacing

#### Before/After (If Available)
- Horizontal scroll issue (before fix)
- No horizontal scroll (after fix)
- Line height overlap (before fix)
- Proper line spacing (after fix)

### Screenshot Naming Convention
```
{page-name}_{viewport}_{section}_{timestamp}.png

Examples:
walk-ins_360px_hero_20251005.png
bookings_768px_features_20251005.png
ai-concierge_414px_navigation_20251005.png
```

---

## Browser DevTools Testing

### Chrome DevTools
1. Open DevTools (F12)
2. Toggle Device Toolbar (Ctrl+Shift+M)
3. Select device preset or enter custom dimensions
4. Test with:
   - Mobile S (360px)
   - iPhone 12 Pro (390px)
   - iPad (768px)
5. Use throttling: "Slow 3G" for performance testing

### Firefox Responsive Design Mode
1. Open DevTools (F12)
2. Click Responsive Design Mode icon
3. Test at: 360px, 414px, 768px
4. Check touch simulation enabled

### Safari Web Inspector (for iOS testing)
1. Enable on device: Settings > Safari > Advanced > Web Inspector
2. Connect device to Mac
3. Open Develop menu > [Device Name]
4. Test actual iOS Safari behavior

---

## Common Issues & Solutions

### Issue: Horizontal Scroll
**Solution:** Check for:
- Space-x-* classes without flex-wrap ✅ Fixed
- Absolute positioned elements extending beyond viewport
- Images without max-width: 100%
- Fixed-width containers

### Issue: Text Overlap
**Solution:**
- Use responsive line-height ✅ Fixed
- Check letter-spacing at small sizes
- Verify font-size scales properly

### Issue: Buttons Not Tappable
**Solution:**
- Ensure minimum 44px tap target ✅ Already compliant
- Add padding to increase hit area
- Check z-index conflicts

### Issue: Layout Breaks at Specific Viewport
**Solution:**
- Add intermediate breakpoint (e.g., sm:)
- Test at exact width where break occurs
- Check for hardcoded pixel values

---

## Regression Testing

### When to Re-test
- [ ] After any CSS changes
- [ ] After adding new components
- [ ] After framework/library updates
- [ ] Before major releases
- [ ] Monthly (at minimum)

### Quick Regression Checklist
1. Run build: `npm run build` ✅
2. Test at 360px, 414px, 768px
3. Check all product pages
4. Verify no horizontal scroll
5. Test button functionality
6. Check navigation menu

---

## Sign-Off

### Tested By: _________________
### Date: _________________
### Browser/Device: _________________
### Issues Found: _________________
### Status: [ ] Pass  [ ] Fail  [ ] Needs Review

---

## Automated Testing (Future)

### Recommended Tools
- [ ] Percy (Visual regression)
- [ ] Playwright (E2E mobile testing)
- [ ] Lighthouse CI (Performance monitoring)
- [ ] Axe DevTools (Accessibility)

### Test Scripts to Create
```bash
# Visual regression test
npm run test:visual

# Mobile E2E test
npm run test:mobile

# Lighthouse audit all pages
npm run lighthouse:mobile
```

---

**Version:** 1.0
**Last Updated:** 2025-10-05
**Next Review:** After Lighthouse testing
