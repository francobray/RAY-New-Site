# Release Workflow & Image Validation

Complete guide to the automated release workflow with image optimization and validation.

---

## 🚀 Quick Answer

**YES!** When you run `npm run release:minor` or `npm run release:major`:

✅ **All images are automatically optimized**
✅ **All images are validated** (dimensions, variants, sizes)
✅ **All Image components in code are checked** for width/height
✅ **Release is blocked** if any validation fails

---

## 📋 What Happens During Release

### Release Command Flow

```bash
npm run release:minor  # or release:major or release:patch
```

**Step-by-step execution:**

```
1. git pull --rebase                    # Get latest code
2. npm run prerelease                   # 👈 CRITICAL STEP
   ├─ npm run optimize:images           # Optimizes ALL images
   │  ├─ Creates missing WebP variants
   │  ├─ Creates missing AVIF variants
   │  ├─ Compresses oversized images
   │  └─ Optimizes all formats
   │
   └─ npm run validate:all              # Validates everything
      ├─ validate:fonts                 # Font files check
      ├─ validate:sitemap               # Sitemap validation
      ├─ validate:llms                  # LLMs.txt validation
      ├─ validate:images                # Image files validation
      │  ├─ Check dimensions (not too small/large)
      │  ├─ Check file sizes (<500KB)
      │  ├─ Verify WebP variants exist
      │  ├─ Verify AVIF variants exist
      │  └─ Check for corrupted images
      │
      └─ validate:image-usage           # Code usage validation
         ├─ Check <Image> has width/height
         ├─ Check fill prop has sizes
         ├─ Check priority on hero images
         └─ Warn about raw <img> tags

3. ✅ IF ALL VALIDATIONS PASS:
   ├─ npm run generate:all              # Generate sitemap, etc.
   ├─ git add -A                        # Stage all changes
   ├─ npm version minor                 # Bump version
   ├─ git push                          # Push code
   └─ git push --tags                   # Push tag

4. ❌ IF ANY VALIDATION FAILS:
   └─ RELEASE BLOCKED (exit code 1)
```

---

## 🎯 Image Validations Performed

### 1. Image File Validation (`validate:images`)

Checks images in `/public/images/`:

| Check | Description | Action |
|-------|-------------|--------|
| **Dimensions** | Width/height between 1px-3840px | ❌ Block if invalid |
| **File Size** | Source images <500KB | ⚠️ Warn if larger |
| **WebP Variant** | JPG/PNG must have .webp | ❌ Block if missing |
| **AVIF Variant** | JPG/PNG must have .avif | ❌ Block if missing |
| **Corruption** | Image readable by sharp | ❌ Block if corrupted |

**Example Output:**
```
🔍 Validating 247 images under public/images...

✅ All images validated successfully!
   - 247 images checked
   - All images have proper dimensions
   - All images have WebP and AVIF variants
   - All images are properly optimized
```

---

### 2. Image Usage Validation (`validate:image-usage`)

Checks `<Image>` components in `/src/`:

| Check | Description | Severity |
|-------|-------------|----------|
| **Width/Height** | `<Image>` has width + height props | ❌ Error |
| **Fill Alternative** | Or has `fill` prop instead | ✅ OK |
| **Sizes with Fill** | `fill` images have `sizes` prop | ⚠️ Warning |
| **Priority** | Hero images have `priority` | ⚠️ Warning |
| **Raw img tags** | Suggests using `<Image>` | ⚠️ Warning |

**Example Output:**
```
🔍 Validating image usage in source code...

✅ All Image components are properly configured!
   - 111 source files checked
   - All images have width/height or fill
   - No layout shift issues detected
```

---

### 3. Image Optimization (`optimize:images`)

Automatically fixes common issues:

```typescript
For each image in public/images/:
  1. Compress source image (if > 5KB)
     - PNG: quality 78, level 9
     - JPG: quality 78, mozjpeg
     - WebP: quality 78
     - AVIF: quality 50
  
  2. Generate WebP variant (if missing)
     └─ Creates: image.webp
  
  3. Generate AVIF variant (if missing)
     └─ Creates: image.avif
```

**Example Output:**
```
Optimizing 247 images under public/images...

Compressed: public/images/hero-banner.jpg 842.3KB -> 387.1KB
Created: public/images/hero-banner.webp
Created: public/images/hero-banner.avif
...

✅ Image optimization complete.
```

---

## 🛠️ Manual Commands

You can run these individually for testing:

### Optimize Images
```bash
npm run optimize:images
```
Creates WebP/AVIF variants, compresses images.

### Validate Image Files
```bash
npm run validate:images
```
Checks dimensions, variants, corruption.

### Validate Image Usage in Code
```bash
npm run validate:image-usage
```
Checks `<Image>` components have proper attributes.

### Validate Everything
```bash
npm run validate:all
```
Runs all validations (fonts, sitemap, images, usage).

### Full Prerelease Check
```bash
npm run prerelease
```
Optimizes + validates (what runs before release).

---

## ✅ What Gets Fixed Automatically

When you add new images and run `npm run release:*`:

### Scenario 1: New JPG without variants
```
Before:
  public/images/new-photo.jpg (1.2 MB)

After optimize:images:
  public/images/new-photo.jpg (384 KB)   ← Compressed
  public/images/new-photo.webp (287 KB)  ← Created
  public/images/new-photo.avif (201 KB)  ← Created
```

### Scenario 2: Oversized PNG
```
Before:
  public/images/logo.png (850 KB)

After optimize:images:
  public/images/logo.png (156 KB)        ← Compressed
  public/images/logo.webp (98 KB)        ← Created
  public/images/logo.avif (72 KB)        ← Created
```

### Scenario 3: New image without dimensions in code
```typescript
// ❌ BEFORE (validation fails):
<Image src="/images/new-photo.jpg" alt="New" />

// ✅ AFTER (you must fix):
<Image 
  src="/images/new-photo.jpg" 
  width={800} 
  height={600} 
  alt="New" 
/>
```

---

## ❌ What Blocks Release

Release will **FAIL** if:

1. **Missing WebP variant** for JPG/PNG
2. **Missing AVIF variant** for JPG/PNG
3. **Corrupted image** files
4. **Invalid dimensions** (too small/large)
5. **Image component missing width/height** AND not using fill
6. **Font validation fails**
7. **Sitemap validation fails**

---

## 🔧 Fixing Common Issues

### Issue: "Image component missing size attributes"

**Error:**
```
❌ src/components/Hero.tsx:42
   Image component missing size attributes. 
   Need either "width" + "height" OR "fill" prop
```

**Fix Option 1 - Fixed dimensions:**
```tsx
<Image 
  src="/images/hero.jpg" 
  width={1200} 
  height={630} 
  alt="Hero"
/>
```

**Fix Option 2 - Responsive with fill:**
```tsx
<Image 
  src="/images/hero.jpg" 
  fill
  sizes="(max-width: 768px) 100vw, 50vw"
  alt="Hero"
/>
```

---

### Issue: "Missing WebP variant"

**Error:**
```
❌ public/images/new-photo.jpg
   Missing WebP variant
```

**Fix:**
```bash
npm run optimize:images
# This will automatically create the WebP variant
```

---

### Issue: "Large file size"

**Warning:**
```
⚠️  public/images/banner.jpg
   Large file size (1247.3KB > 500KB) - may need optimization
```

**Fix:**
```bash
npm run optimize:images
# This will compress the image automatically
```

---

## 📊 Validation Summary

| Validation | What It Checks | Blocks Release? |
|------------|----------------|-----------------|
| **validate:fonts** | Font files exist and valid | ✅ Yes |
| **validate:sitemap** | Sitemap.xml valid | ✅ Yes |
| **validate:llms** | LLMs.txt valid | ✅ Yes |
| **validate:images** | Image files optimized | ✅ Yes |
| **validate:image-usage** | Code has dimensions | ✅ Yes |

---

## 🎯 Best Practices

### Adding New Images

1. **Add image to `/public/images/`**
   ```
   public/images/products/new-product.jpg
   ```

2. **Use in code with dimensions:**
   ```tsx
   <Image 
     src="/images/products/new-product.jpg"
     width={800}
     height={600}
     alt="New Product"
   />
   ```

3. **Run optimization (or let release do it):**
   ```bash
   npm run optimize:images
   ```

4. **Verify:**
   ```bash
   npm run validate:all
   ```

5. **Release:**
   ```bash
   npm run release:minor
   # Automatically optimizes and validates!
   ```

---

### Responsive Images

For responsive layouts, use `fill` with `sizes`:

```tsx
<div className="relative w-full h-[400px]">
  <Image
    src="/images/responsive-banner.jpg"
    fill
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    className="object-cover"
    alt="Banner"
  />
</div>
```

**Sizes prop explained:**
- Mobile (<768px): 100% viewport width
- Tablet (<1200px): 50% viewport width
- Desktop: 33% viewport width

---

### Hero/Above-Fold Images

Always add `priority` for LCP optimization:

```tsx
<Image
  src="/images/hero-banner.jpg"
  width={1920}
  height={1080}
  priority
  alt="Hero"
/>
```

---

## 🚦 Release Checklist

Before running `npm run release:*`:

- [ ] New images added to `/public/images/`
- [ ] Images used in code with `<Image>` component
- [ ] Width/height specified (or fill + sizes)
- [ ] Alt text provided for accessibility
- [ ] Hero images have `priority` prop
- [ ] Code committed and tested locally

Then:
```bash
npm run release:minor
# Everything else is automatic! ✨
```

---

## 📈 Performance Impact

### What This Achieves

✅ **Zero Layout Shifts** - All images have dimensions
✅ **Optimal Format** - WebP/AVIF for modern browsers
✅ **Fast Loading** - Compressed, optimized images
✅ **Responsive** - Right size for device
✅ **Consistent** - Automated, not manual

### Metrics

- **CLS (Cumulative Layout Shift):** <0.1 target ✅
- **LCP (Largest Contentful Paint):** <2.5s target ✅
- **Image Size Reduction:** ~60-80% with WebP/AVIF
- **PageSpeed Score:** 90+ maintained ✅

---

## 🔍 Troubleshooting

### Release Fails with Image Errors

```bash
# 1. Check what's wrong
npm run validate:all

# 2. Fix images
npm run optimize:images

# 3. Verify fix
npm run validate:all

# 4. Try release again
npm run release:minor
```

### Can't Find Image Dimensions

Use browser DevTools or:
```bash
# macOS
sips -g pixelWidth -g pixelHeight public/images/image.jpg

# Or use image viewer properties
```

### Skip Validation (NOT RECOMMENDED)

```bash
# If you MUST skip (not recommended):
npm version minor
git push && git push --tags

# But you'll miss optimizations and risk layout shifts!
```

---

## 📚 Related Documentation

- `docs/FONT_OPTIMIZATION.md` - Font self-hosting
- `docs/PAGESPEED_OPTIMIZATIONS.md` - Performance guide
- `OPTIMIZATION_SUMMARY.md` - What we've optimized

---

## ✨ Summary

**When you run `npm run release:minor` or `npm run release:major`:**

✅ Images are **automatically optimized**
✅ WebP/AVIF variants are **automatically created**
✅ File sizes are **automatically checked**
✅ Code usage is **automatically validated**
✅ Release is **automatically blocked** if issues found

**You just need to:**
1. Add images to `/public/images/`
2. Use `<Image>` with width/height in code
3. Run `npm run release:*`
4. Everything else is automatic! 🎉

---

**Last Updated:** October 26, 2025  
**Status:** ✅ Fully Automated  
**Confidence:** 100% - No manual image checks needed!

