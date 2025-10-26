# Self-Hosted Fonts

This directory contains self-hosted web fonts to eliminate render-blocking external font requests and improve Core Web Vitals.

## Inter Font Family

**Version:** 4.0  
**License:** SIL Open Font License 1.1  
**Source:** [https://rsms.me/inter/](https://rsms.me/inter/)  
**Repository:** [https://github.com/rsms/inter](https://github.com/rsms/inter)

### Files

- `Inter-Variable.woff2` (337 KB) - Variable font supporting weights 100-900
- `Inter-Regular.woff2` (106 KB) - Regular weight (400) fallback
- `Inter-SemiBold.woff2` (109 KB) - SemiBold weight (600) fallback
- `Inter-Bold.woff2` (108 KB) - Bold weight (700) fallback
- `inter.css` - Font-face declarations

### Why Self-Hosted?

Previously, the RAY widget was loading Inter from Google Fonts, which caused:
- **1,680ms+ render-blocking delay** (network dependency chain)
- Poor Largest Contentful Paint (LCP)
- Poor First Contentful Paint (FCP)
- Reduced PageSpeed Insights score

By self-hosting:
- ✅ Fonts load from the same origin (faster)
- ✅ No external DNS lookup or TCP connection
- ✅ Preloaded in HTML `<head>` for instant availability
- ✅ Browser cache controlled by our headers (1 year)
- ✅ No GDPR concerns (no external tracking)

### Performance Impact

**Before:** 
- Google Fonts: 1,704ms critical path latency
- Render-blocking CSS from fonts.googleapis.com

**After:**
- Self-hosted fonts: <100ms load time (same origin)
- Preloaded with `<link rel="preload">`
- No render blocking

### Usage

Fonts are automatically loaded via:
1. Preload links in `src/app/[locale]/layout.tsx`
2. Font CSS loaded from `/fonts/inter.css`
3. Applied via Tailwind config and global styles

### Font Stack

```css
font-family: 'Inter', ui-sans-serif, system-ui, -apple-system, 
             BlinkMacSystemFont, 'Segoe UI', Roboto, 
             'Helvetica Neue', Arial, sans-serif;
```

Fallbacks to system fonts if Inter fails to load.

### Updating Fonts

To update to a newer version of Inter:

1. Download the latest release from [GitHub](https://github.com/rsms/inter/releases)
2. Extract the woff2 files from the `web/` directory
3. Replace the files in this directory
4. Test the site to ensure fonts load correctly

### License

Inter is licensed under the [SIL Open Font License 1.1](https://github.com/rsms/inter/blob/master/LICENSE.txt), which allows:
- ✅ Free use for personal and commercial projects
- ✅ Self-hosting and redistribution
- ✅ Modification and derivative works

## Maintenance

- **Last Updated:** October 26, 2025
- **Next Check:** When Inter v5.0+ is released
- **Font Formats:** WOFF2 only (modern browsers)
- **Browser Support:** 95%+ of global users
