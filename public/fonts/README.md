# Fonts Directory

This directory is for custom font files.

## To add the Chopin.Trial font:

1. Upload the actual `Chopin.Trial-Regular.woff2` font file to this directory
2. Uncomment the font preload and @font-face declarations in `index.html`
3. Update the font-family references in `src/index.css` and `tailwind.config.js`

## Current Status:
- Using system fonts as fallback
- No custom fonts loaded to prevent 404 errors