# Image Error Fix - Pexels Remote Images

## Issue
**Unhandled Runtime Error:** Invalid src prop for external images from Pexels.

```
Error: Invalid src prop (https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?...)
hostname "images.pexels.com" is not configured under images in your `next.config.js`
```

## Root Cause
The Next.js Image component requires external image domains to be explicitly configured in `next.config.js`. While the domain was added, the pathname pattern needed to be more specific.

## Solution Applied ✅

### Updated `next.config.js`

**Before:**
```javascript
remotePatterns: [
  {
    protocol: 'https',
    hostname: 'images.pexels.com',
  },
],
```

**After:**
```javascript
remotePatterns: [
  {
    protocol: 'https',
    hostname: 'images.pexels.com',
    port: '',
    pathname: '/photos/**',
  },
],
```

## Important: Restart Required

**After making config changes, you MUST restart the dev server:**

```bash
# Stop the current dev server (Ctrl+C or Command+C)
# Then restart:
npm run dev
```

Next.js only reads `next.config.js` on startup, so configuration changes require a restart.

## Verification Steps

1. **Stop dev server** if running
2. **Start dev server:**
   ```bash
   npm run dev
   ```
3. **Open browser** to http://localhost:3000
4. **Check console** - Error should be gone
5. **Verify images load** - Testimonial section should display correctly

## Alternative Solution: Use Local Images

If you prefer not to rely on external Pexels images, you can:

### Option 1: Download and Use Local Images

1. Download the Pexels images to `/public/images/`
2. Update `TestimonialCarousel.tsx` to use local paths:

```typescript
const customers = [
  {
    id: 'chef-burger',
    name: 'Chef Burger',
    owner: 'John Smith',
    title: 'Owner & Head Chef',
    image: '/images/testimonials/chef-burger.jpg', // Local image
    // ... rest of config
  },
  // ... other testimonials
]
```

### Option 2: Use Actual Restaurant Photos

Replace placeholder Pexels images with real restaurant photos from the case studies:

```typescript
const customers = [
  {
    id: 'chef-burger',
    name: 'Chef Burger',
    image: '/images/Restaurant-photo-ray.jpeg', // Existing local image
    // ... rest
  },
  {
    id: 'temple',
    name: 'Temple Craft Wynwood',
    image: '/images/Temple_Team.jpeg', // Existing local image
    // ... rest
  },
  // ... etc
]
```

## Current Status

✅ **Configuration Updated** - `next.config.js` now properly configured for Pexels images
✅ **Build Successful** - Project builds without errors
⚠️  **Dev Server Restart Required** - Restart to pick up config changes

## Testing Checklist

After restarting the dev server:

- [ ] No console errors about image configuration
- [ ] Testimonial carousel images load correctly
- [ ] No "Invalid src prop" errors
- [ ] Page loads without unhandled runtime errors
- [ ] All 4 testimonial images display properly

## Long-term Recommendation

For production, consider:

1. **Use local images** - Better performance, no external dependencies
2. **Use actual restaurant photos** - More authentic testimonials
3. **Implement image CDN** - If using many external images
4. **Add error boundaries** - Graceful fallback if images fail to load

## Files Modified

- ✅ `next.config.js` - Added proper Pexels image configuration

## Next Steps

1. Restart dev server
2. Verify error is resolved
3. Consider replacing Pexels images with local/real photos
4. Add image loading error boundaries for production

---

**Fix Applied:** October 6, 2025
**Status:** Configuration Updated - Restart Required
**Priority:** High
