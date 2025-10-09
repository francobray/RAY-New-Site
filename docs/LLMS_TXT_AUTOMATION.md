# llms.txt Automation

## Overview

The `llms.txt` file is automatically generated from the project structure to provide LLM crawlers (like ChatGPT, Claude, Perplexity, etc.) with a comprehensive understanding of the RAY website. This file is kept in sync with the codebase through automated generation and validation.

## What is llms.txt?

`llms.txt` is a machine-readable file that describes:
- **Website structure** - All pages, routes, and their purposes
- **Product offerings** - Detailed descriptions of each product/service
- **Key information** - Metrics, guarantees, contact info, and target audience
- **AI usage guidelines** - What LLMs can and cannot do with our content
- **SEO keywords** - Important topics and search terms

This helps AI systems:
- Answer questions accurately about RAY
- Cite our content properly
- Understand our full product offering
- Provide correct URLs to users

## Automated System

### Scripts

#### 1. Generation Script
**File:** `scripts/generate-llms-txt.ts`
**Command:** `npm run llms:generate`

Automatically generates `public/llms.txt` by:
- Scanning the `src/app/[locale]/product/` directory for all product pages
- Reading route configurations from `src/app/sitemap.ts`
- Compiling comprehensive descriptions for each page
- Organizing content by categories (products, core pages, case studies, legal)
- Including metadata, metrics, and usage guidelines

**Output:**
```
📊 Total pages documented: 21
🌐 Total URLs (with locales): 42
📦 Product pages: 10
📁 Location: /path/to/public/llms.txt
📏 File size: 11.04 KB
```

#### 2. Validation Script
**File:** `scripts/validate-llms-txt.ts`
**Command:** `npm run validate:llms`

Validates the generated file by checking:
- File exists in `public/` directory
- Contains all required sections (15 sections)
- Has minimum number of URLs (40+)
- Includes contact information and key metrics
- File size is reasonable (5-50KB)
- Last updated date is current

**Output:**
```
📊 File Statistics:
   • File size: 11.05 KB
   • Line count: 294
   • URL count: 43
   • Sections found: 15/15

✅ llms.txt is valid!
```

#### 3. Pre-commit Hook
**File:** `scripts/pre-commit-sitemap.js`

Automatically runs when committing changes:
1. Detects changes to `src/app/`, `src/components/`, or `public/`
2. Regenerates both `sitemap.xml` and `llms.txt`
3. Validates both files
4. Auto-stages updated files if changes detected

**Output:**
```
🔍 Checking sitemap and llms.txt status...
📝 Route-related changes detected, regenerating sitemap and llms.txt...

🗺️  Generating sitemap...
✅ Sitemap generated successfully!

🤖 Generating llms.txt...
✅ llms.txt generated successfully!

✅ llms.txt updated and staged
```

## File Structure

The generated `llms.txt` contains:

### 1. Introduction
- Platform overview
- Guarantee information
- Supported languages

### 2. Website Structure
Organized by category:
- **Main Pages** - Homepage for each locale
- **Product Pages** - All 10 product offerings (ES + EN)
- **Core Pages** - Pricing, about, contact, demo, case studies
- **Case Studies** - Individual success stories
- **Legal Pages** - Privacy, terms, cookie policy

### 3. Key Information
- **Features & Solutions** - Local SEO, direct revenue channels, AI tools
- **Target Audience** - Restaurant owners, operators, multi-location groups
- **Key Metrics** - +47% directions, +35% table occupancy, etc.
- **Technology Stack** - Next.js 14, TypeScript, React

### 4. AI Usage Guidelines
- ✅ **Permitted Uses** - Answering questions, citing with attribution
- ⚠️ **Attribution Required** - How to cite RAY content
- ❌ **Not Permitted** - Copying proprietary methods, republishing without credit

### 5. SEO Keywords
List of important topics and search terms for AI context.

## NPM Scripts

```json
{
  "llms:generate": "Generate llms.txt from codebase structure",
  "llms:validate": "Generate and validate llms.txt",
  "validate:llms": "Validate existing llms.txt file",
  "generate:all": "Generate both sitemap.xml and llms.txt"
}
```

## Usage

### Manual Generation
```bash
# Generate llms.txt
npm run llms:generate

# Generate and validate
npm run llms:validate

# Generate both sitemap and llms.txt
npm run generate:all
```

### Validation Only
```bash
# Validate existing llms.txt
npm run validate:llms

# Validate everything
npm run validate:all
```

### Automatic (Pre-commit)
The file is automatically regenerated when you commit changes to:
- Any file in `src/app/`
- Any file in `src/components/`
- Any file in `public/`

No manual action required!

## When to Regenerate Manually

While the pre-commit hook handles most cases, manually regenerate when:

1. **Adding new product pages** - New directory in `src/app/[locale]/product/`
2. **Updating product descriptions** - Changes to page metadata or purpose
3. **Changing key metrics** - Updating guarantee percentages or results
4. **Modifying contact info** - Email addresses or support channels
5. **Before deployment** - Ensure production has latest version

## Customization

### Adding New Sections

Edit `scripts/generate-llms-txt.ts`:

```typescript
// Add to the content generation function
content += `\n### Your New Section\n\nYour content here\n`
```

### Updating Page Descriptions

Modify the `productDescriptions` object in `generate-llms-txt.ts`:

```typescript
const productDescriptions: Record<string, string> = {
  'your-product': 'Your detailed description here',
  // ...
}
```

### Changing Validation Rules

Edit `scripts/validate-llms-txt.ts`:

```typescript
// Add new required sections
const requiredSections = [
  '## Your New Required Section',
  // ...
]

// Adjust file size limits
const minSize = 5000 // bytes
const maxSize = 50000 // bytes
```

## Benefits

### For SEO & Discovery
- ✅ Better AI understanding of website structure
- ✅ Improved citations from ChatGPT, Claude, Perplexity
- ✅ Accurate information in AI responses
- ✅ Enhanced brand visibility in AI-generated content

### For Maintenance
- ✅ Always up-to-date with codebase changes
- ✅ Automatic validation prevents errors
- ✅ No manual file management required
- ✅ Version controlled and trackable

### For AI Systems
- ✅ Clear usage guidelines
- ✅ Structured, comprehensive information
- ✅ Easy to parse and understand
- ✅ Complete URL inventory with descriptions

## Troubleshooting

### File Not Generated
```bash
# Check if directory exists
ls -la public/

# Run generation manually
npm run llms:generate

# Check for errors
npm run llms:validate
```

### Validation Fails
```bash
# See detailed errors
npm run validate:llms

# Common fixes:
# 1. Ensure all product pages have descriptions
# 2. Verify required sections exist
# 3. Check file size is reasonable
# 4. Update date is current year
```

### Pre-commit Not Running
```bash
# Ensure hook is executable
chmod +x scripts/pre-commit-sitemap.js

# Test manually
node scripts/pre-commit-sitemap.js
```

## Related Files

- `public/llms.txt` - Generated file (served at /llms.txt)
- `scripts/generate-llms-txt.ts` - Generation script
- `scripts/validate-llms-txt.ts` - Validation script
- `scripts/pre-commit-sitemap.js` - Git hook (handles both sitemap and llms.txt)
- `src/app/sitemap.ts` - Route configuration source

## Best Practices

1. **Never edit `public/llms.txt` manually** - It will be overwritten
2. **Update descriptions in the generator** - Edit `generate-llms-txt.ts` instead
3. **Run validation before deployment** - Ensure file is valid
4. **Keep metrics current** - Update key results regularly
5. **Review AI guidelines periodically** - Ensure they reflect current policies

## Future Enhancements

Potential improvements:
- [ ] Multi-language llms.txt (separate files for ES/EN)
- [ ] Integration with CMS for dynamic descriptions
- [ ] Analytics tracking for AI crawler access
- [ ] A/B testing different content structures
- [ ] Automated metric updates from analytics

---

**Last Updated:** 2025-10-09  
**Maintained By:** RAY Development Team

