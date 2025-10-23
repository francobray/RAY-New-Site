# 🔐 Basic Auth Quick Start

Simple HTTP Basic Authentication is now set up for your internal pages!

## 2-Minute Setup

### 1. Create `.env.local`

```bash
# In the project root
cat > .env.local << EOF
INTERNAL_AUTH_USER=admin
INTERNAL_AUTH_PASSWORD=your-secure-password-here
EOF
```

### 2. Start Dev Server

```bash
npm run dev
```

### 3. Test It

Visit: `http://localhost:3000/internal`

A browser login dialog will appear. Enter:
- **Username:** `admin`
- **Password:** `your-secure-password-here`

That's it! 🎉

---

## What's Protected

- `/internal` - Códigos Trivia (código redemption page)
  - View all active promo codes
  - Redeem codes with validation
  - Search and filter codes
  - Real-time usage tracking
  - **Optional:** Connect to Google Sheets for easy management

**Add more routes:** Edit `middleware.ts` line 56:
```typescript
const protectedPaths = ['/internal', '/admin', '/dashboard']
```

---

## Production Setup

Set environment variables in your hosting platform:

```bash
INTERNAL_AUTH_USER=admin
INTERNAL_AUTH_PASSWORD=<strong-password>
```

### Vercel:
Project Settings → Environment Variables → Add

### Railway:
Variables → Add New Variable

---

## Default Credentials

⚠️ **If you don't set environment variables:**
- Username: `admin`
- Password: `password`

**CHANGE THESE IN PRODUCTION!**

---

## How Basic Auth Works

1. Visit protected page → Browser shows login dialog
2. Enter credentials → Browser stores them
3. All requests include credentials automatically
4. Middleware validates each request

### Browser Remembers:
Your browser saves the credentials, so you won't need to log in again until you:
- Close all browser windows
- Clear browsing data
- Use incognito/private mode

---

## Sharing Credentials

**One username/password for the whole team.**

Share securely via:
- Password manager (1Password, LastPass, Bitwarden)
- Encrypted messaging (Signal)
- In person

Don't share via:
- ❌ Email
- ❌ Slack/Teams
- ❌ Text messages

---

## Files Modified

- **middleware.ts** - Added basic auth check
- **src/app/internal/page.tsx** - Protected internal portal

---

## Troubleshooting

### Can't access internal page?
1. Check `.env.local` exists
2. Restart dev server: `npm run dev`
3. Try incognito mode to clear cached credentials

### Wrong credentials cached?
Clear browser's saved passwords or use incognito mode.

### Production not working?
1. Verify environment variables are set in hosting platform
2. Redeploy application

---

## Test with cURL

```bash
# Should fail (401)
curl http://localhost:3000/internal

# Should work (200)
curl -u admin:password http://localhost:3000/internal
```

---

## Upgrading Later

Need individual users, roles, or OAuth? Consider:
- **NextAuth.js** - Full Next.js auth
- **Clerk** - Drop-in auth platform
- **Supabase Auth** - Open source

---

## Security Notes

✅ **Good for:**
- Internal tools
- Small teams
- Quick protection
- Dev/staging

❌ **Not for:**
- Individual user tracking
- Public-facing pages
- Complex permissions

---

**Documentation:** `docs/BASIC_AUTH_SETUP.md`

**Authentication Ready!** 🚀

