# Basic Authentication Setup

Simple HTTP Basic Authentication for internal employee pages.

## Overview

The website uses **HTTP Basic Authentication** to protect internal routes. This is a simple, no-dependencies solution that requires just a username and password.

## Features

- 🔐 Simple username/password authentication
- 🚀 No external dependencies or services
- ⚡ Edge-compatible middleware
- 🛡️ Protects `/internal` routes
- 🔧 Easy to configure

## Setup Instructions

### 1. Create Environment Variables

Create a `.env.local` file in the root directory:

```bash
# Basic Authentication Credentials
INTERNAL_AUTH_USER=your-username
INTERNAL_AUTH_PASSWORD=your-secure-password
```

**Important:** Choose a strong password! This will be shared with your team.

### 2. Set Up Production Environment

Add the same variables to your production environment (Vercel, Railway, etc.):

```bash
INTERNAL_AUTH_USER=admin
INTERNAL_AUTH_PASSWORD=<strong-password-here>
```

### 3. Test It

1. Start dev server: `npm run dev`
2. Visit: `http://localhost:3000/internal`
3. Browser will show a login dialog
4. Enter your username and password
5. You're in! 🎉

## How It Works

1. User visits `/internal` (or any protected route)
2. Middleware checks for `Authorization` header
3. If missing → browser shows login dialog (401 response)
4. User enters credentials
5. Browser sends credentials with each request
6. Middleware validates against environment variables
7. ✅ Valid → access granted
8. ❌ Invalid → shows login dialog again

## Protected Routes

Currently protected:
- `/internal` - Códigos Trivia (código redemption page)

### Add More Protected Routes

Edit `middleware.ts` line 56:

```typescript
const protectedPaths = ['/internal', '/admin', '/dashboard']
```

Any path containing these strings will be protected.

## File Structure

```
src/
├── app/
│   └── internal/
│       └── page.tsx              # Protected internal page
└── middleware.ts                 # Basic auth logic
```

## Security Considerations

### ✅ Good For:
- Internal tools and dashboards
- Small teams (shared credentials)
- Development/staging environments
- Quick protections

### ❌ Not Ideal For:
- Individual user tracking
- Role-based permissions
- Public-facing authentication
- Large teams (credentials spread too widely)

### Security Best Practices:

1. **Use HTTPS in production** (automatic on Vercel)
2. **Choose a strong password** (16+ characters, random)
3. **Don't commit `.env.local`** (it's in `.gitignore`)
4. **Rotate credentials** when employees leave
5. **Use a password manager** to share credentials securely
6. **Consider IP whitelisting** for extra security

## Production Deployment

### Vercel

1. Go to project settings
2. Navigate to **Environment Variables**
3. Add:
   - `INTERNAL_AUTH_USER`
   - `INTERNAL_AUTH_PASSWORD`
4. Redeploy

### Other Platforms

Set environment variables according to your platform's documentation.

## Default Credentials

**⚠️ WARNING:** If you don't set environment variables, the default credentials are:
- Username: `admin`
- Password: `password`

**ALWAYS change these in production!**

## How to Change Credentials

1. Update `.env.local` (local)
2. Update environment variables in your hosting platform
3. Redeploy (or restart if needed)

No code changes required!

## Sharing Credentials with Team

### Secure Methods:
- ✅ Use a password manager (1Password, LastPass, Bitwarden)
- ✅ Share via encrypted messaging (Signal)
- ✅ In-person communication

### Insecure Methods:
- ❌ Email
- ❌ Slack/Teams messages
- ❌ Text messages
- ❌ Sticky notes 😄

## Browser Behavior

### First Visit:
- Browser shows login dialog
- Enter credentials
- Click "Sign In" or press Enter

### Subsequent Visits:
- Browser remembers credentials
- Automatic login

### Sign Out:
- Close all browser windows
- Or clear browsing data
- Or use incognito/private mode

**Note:** Basic Auth doesn't have a "sign out" button. The browser stores credentials until cleared.

## Troubleshooting

### Can't Access Internal Page

**Solution:** Check that:
1. `.env.local` exists with correct variables
2. You restarted the dev server after creating `.env.local`
3. You're using the correct username and password

### Wrong Credentials

**Browser shows login dialog again**

Clear your browser's cached credentials:
1. Chrome: Settings → Privacy → Clear browsing data → Passwords
2. Firefox: Settings → Privacy → Clear History → Active Logins
3. Safari: Safari → Clear History

Or use Incognito/Private mode to test.

### Production Not Working

**Cause:** Environment variables not set  
**Solution:** 
1. Check your hosting platform's environment variables
2. Ensure `INTERNAL_AUTH_USER` and `INTERNAL_AUTH_PASSWORD` are set
3. Redeploy

## Testing Different Credentials

Use `curl` to test:

```bash
# Wrong credentials
curl -u wronguser:wrongpass http://localhost:3000/internal
# Should return: 401 Authentication required

# Correct credentials
curl -u admin:password http://localhost:3000/internal
# Should return: 200 OK with page content
```

## Upgrading to Better Auth

If you need:
- Individual user accounts
- User management
- Role-based access
- OAuth (Google, GitHub, etc.)
- Session management

Consider upgrading to:
- **NextAuth.js** - Full-featured auth for Next.js
- **Clerk** - Drop-in authentication platform
- **Auth0** - Enterprise authentication
- **Supabase Auth** - Open source alternative

## Environment Variables Reference

| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| `INTERNAL_AUTH_USER` | No | `admin` | Username for basic auth |
| `INTERNAL_AUTH_PASSWORD` | No | `password` | Password for basic auth |

## FAQ

**Q: Can multiple people use the same credentials?**  
A: Yes! Basic auth uses shared credentials. Everyone uses the same username/password.

**Q: Can I have different credentials for different pages?**  
A: Not with this simple setup. All protected routes use the same credentials. For different permissions, you'd need to upgrade to a full auth system.

**Q: How secure is this?**  
A: Over HTTPS, it's reasonably secure for internal tools. The credentials are base64 encoded (not encrypted) but transmitted over TLS. Not suitable for sensitive data or public-facing auth.

**Q: Can I disable auth for development?**  
A: Yes! Just don't set the environment variables in `.env.local`, or set them to empty strings.

**Q: How do I add more users?**  
A: Basic auth doesn't support multiple users. Everyone shares the same credentials. For individual accounts, upgrade to NextAuth.js or similar.

---

**Last Updated:** October 2024  
**Version:** 1.0.0

