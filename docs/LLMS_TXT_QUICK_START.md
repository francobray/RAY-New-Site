# llms.txt - Quick Start Guide

## What's New? 🎉

Your RAY website now has **automated llms.txt generation** - similar to how sitemap.xml works!

## What is llms.txt?

A file that tells AI systems (ChatGPT, Claude, Perplexity, etc.) everything about your website:
- All pages and products
- What each page does
- Key metrics and results
- How to cite your content
- Contact information

**View it:** https://rayapp.io/llms.txt

## How It Works

### Automatic Generation ✨
The file is **automatically generated** from your codebase:
- Scans `src/app/[locale]/product/` for all product pages
- Reads route configurations
- Compiles descriptions for each page
- Includes both ES and EN versions
- Updates whenever you commit code changes

### Pre-Commit Hook 🪝
Every time you commit changes to routes or pages, the system:
1. ✅ Detects file changes
2. ✅ Regenerates `llms.txt`
3. ✅ Validates the file
4. ✅ Auto-stages if updated

**No manual work needed!**

## Quick Commands

```bash
# Generate llms.txt
npm run llms:generate

# Generate and validate
npm run llms:validate

# Validate existing file
npm run validate:llms

# Generate both sitemap + llms.txt
npm run generate:all
```

## What's Included?

The generated file contains:

### 📋 **Complete Page Inventory**
- 10 Product pages (ES + EN) = 20 URLs
- 5 Core pages (ES + EN) = 10 URLs  
- 2 Case studies (ES + EN) = 4 URLs
- 3 Legal pages (ES + EN) = 6 URLs
- **Total: ~43 URLs documented**

### 📊 **Key Information**
- Product descriptions
- Success metrics (+47% directions, etc.)
- Target audience
- Technology stack
- Contact information

### 🤖 **AI Guidelines**
- What AI systems can do with your content
- How to cite RAY properly
- What's not permitted

### 🔑 **SEO Keywords**
List of important topics for AI context:
- restaurant marketing
- local SEO
- Google Maps optimization
- zero commission delivery
- etc.

## File Location

- **Source:** `scripts/generate-llms-txt.ts`
- **Output:** `public/llms.txt`
- **Served at:** https://rayapp.io/llms.txt

## Example Output

```markdown
# RAY - Restaurant Marketing Platform
# AI-Powered Solutions for Independent Restaurants

> RAY helps restaurants increase revenue through local SEO...

## Product Pages

**https://rayapp.io/es/product/ai-concierge**
AI-powered WhatsApp concierge that takes orders, books 
reservations, and answers menu questions 24/7...

**https://rayapp.io/en/product/ai-concierge**
AI-powered WhatsApp concierge that takes orders...

... (40+ more URLs)
```

## Benefits

### For Your Business 💼
- ✅ AI systems understand your full product offering
- ✅ More accurate AI responses about RAY
- ✅ Better citations from ChatGPT, Claude, etc.
- ✅ Enhanced brand visibility in AI-generated content

### For You 👨‍💻
- ✅ Always up-to-date automatically
- ✅ No manual file maintenance
- ✅ Validated on every commit
- ✅ One less thing to worry about

## When to Review

Check the file when:
1. Adding new product pages
2. Updating key metrics (e.g., from +47% to +52%)
3. Changing contact information
4. Launching major features

## Customization

Want to update descriptions?

Edit `scripts/generate-llms-txt.ts`:

```typescript
const productDescriptions: Record<string, string> = {
  'your-product': 'Your new description here',
  // ...
}
```

Then run: `npm run llms:generate`

## Validation

The validator checks:
- ✅ File exists
- ✅ All 15 required sections present
- ✅ Minimum 40 URLs included
- ✅ Contact info present
- ✅ File size reasonable (5-50KB)
- ✅ Current year in date

**Current status:** ✅ All checks passing!

## Troubleshooting

### Problem: File not updating
```bash
# Manually regenerate
npm run llms:generate

# Check for errors
npm run validate:llms
```

### Problem: Pre-commit hook not running
```bash
# Make hook executable
chmod +x scripts/pre-commit-sitemap.js

# Test manually
node scripts/pre-commit-sitemap.js
```

## More Info

See full documentation: `docs/LLMS_TXT_AUTOMATION.md`

## Questions?

Contact the dev team or check the full docs for detailed information.

---

**Created:** 2025-10-09  
**Status:** ✅ Active & Automated

