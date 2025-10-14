# 🤖 Automatic Sitemap Generation

This project includes a comprehensive sitemap automation system that keeps your `sitemap.xml` updated whenever your project structure changes.

## 🚀 How It Works

### 1. **Dynamic Sitemap Generation** (`src/app/sitemap.ts`)
- **Next.js App Router**: Uses Next.js 13+ built-in sitemap functionality
- **Filesystem Discovery**: Automatically scans `src/app/[locale]/product/` directory for new product pages
- **Bilingual Support**: Generates URLs for both Spanish (`/es`) and English (`/en`) locales
- **SEO Optimized**: Proper priorities, change frequencies, and last-modified dates

### 2. **Static Generation Script** (`scripts/generate-sitemap.ts`)
- **Build-time Generation**: Creates `public/sitemap.xml` for static hosting
- **Validation**: Includes comprehensive validation and statistics
- **CI/CD Ready**: Can be run in deployment pipelines

### 3. **Automated Workflows**

#### **GitHub Actions** (`.github/workflows/sitemap.yml`)
```yaml
# Triggers on:
- Push to main branch
- Changes to src/app/, public/, or scripts/
- Manual workflow dispatch
```

#### **Pre-commit Hook** (`scripts/pre-commit-sitemap.js`)
- **Automatic Updates**: Regenerates sitemap when route files change
- **Git Integration**: Stages updated sitemap automatically
- **Zero Manual Work**: Runs transparently during development

## 📋 Available Commands

```bash
# Generate sitemap manually
npm run sitemap:generate

# Validate sitemap
npm run validate:sitemap

# Generate and validate in one command
npm run sitemap:validate

# Run all validations (fonts + sitemap)
npm run validate:all
```

## 🔧 Configuration

### **Adding New Product Pages**
1. Create a new directory in `src/app/[locale]/product/your-new-product/`
2. Add a `page.tsx` file
3. The sitemap will automatically include it on the next generation (build, commit, or manual run)

### **Adding New Case Studies**
1. Add your case study component to `src/components/pages/`
2. Update the `caseStudyData` object in `src/app/[locale]/case-studies/[slug]/page.tsx`
3. Add the slug to the `generateStaticParams()` function in the same file
4. The sitemap will automatically include it - **no manual sitemap updates needed!**

### **Modifying Sitemap Structure**
Edit `src/app/sitemap.ts` to:
- Add new route categories
- Modify priorities and change frequencies
- Include dynamic content sources

### **Custom Validation Rules**
Edit `scripts/validate-sitemap.ts` to:
- Add new validation rules
- Modify required pages list
- Customize error/warning thresholds

## 📊 Current Sitemap Structure

```
📈 Sitemap Summary (89 URLs):
├── Main pages: 3 (/, /es, /en)
├── Product pages: 20 (10 products × 2 languages)
├── Core pages: 10 (pricing, about, contact, etc. × 2 languages)
├── Case studies: 48 (24 studies × 2 languages)
└── Legal pages: 6 (privacy, terms, cookies × 2 languages)
```

**✨ All sections are now fully automated and self-updating!**

## 🌐 SEO Benefits

- **Search Engine Discovery**: All pages automatically indexed
- **AI Crawler Friendly**: Referenced in `robots.txt` for AI systems
- **Proper Prioritization**: Product pages (0.9), core pages (0.6-0.8)
- **Update Frequencies**: Optimized for different content types
- **Multilingual**: Full support for Spanish and English

## 🔄 Automation Triggers

The sitemap **automatically** updates when:

1. ✅ **Build Process**: Every time you run `npm run build` (production deployments)
2. ✅ **Pre-commit Hook**: Before every git commit that modifies routes or components
3. ✅ **GitHub Actions**: When pushing to main branch with changes to `src/app/`, `public/`, or `scripts/`
4. ✅ **Manual Regeneration**: Via `npm run sitemap:generate` command

### What's Auto-Discovered:
- 🔍 **Product Pages**: Scans `src/app/[locale]/product/` directory
- 🔍 **Case Studies**: Reads from `generateStaticParams()` in case study page
- 🔍 **Deleted Pages**: Automatically removed if folders/params are deleted

## 🛠️ Troubleshooting

### **Sitemap Not Updating**
```bash
# Force regeneration
npm run sitemap:generate

# Check for errors
npm run validate:sitemap

# Clear Next.js cache
rm -rf .next
npm run build
```

### **Validation Failures**
- Check XML structure in `public/sitemap.xml`
- Verify all required pages are included
- Ensure proper URL formatting and priorities

### **Missing Pages**
- Verify page exists in `src/app/[locale]/` structure
- Check for proper `page.tsx` files
- Ensure directory follows Next.js App Router conventions

## 📝 Best Practices

1. **Always commit** the generated `sitemap.xml` to version control
2. **Test locally** before deploying with `npm run sitemap:validate`
3. **Monitor CI/CD** logs for sitemap generation issues
4. **Update priorities** based on page importance and traffic
5. **Regular validation** to catch issues early

## 🚀 Future Enhancements

- [ ] Dynamic content integration (blog posts, case studies)
- [ ] Image sitemap generation
- [ ] News sitemap for time-sensitive content
- [ ] Multi-domain support
- [ ] Performance monitoring and analytics

---

**Need help?** Check the validation output or run `npm run sitemap:validate` for detailed diagnostics.
