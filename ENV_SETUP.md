# Environment Variables Setup

## Required Environment Variables

Add the following variable to your `.env` or `.env.local` file:

```bash
# Zapier Webhook URL for form submissions
# This webhook receives form data from the Demo page and Restaurant Info modal
ZAPIER_WEBHOOK_URL=https://hooks.zapier.com/hooks/catch/21332246/u5dmyac/
```

## Important Notes

- Environment files (`.env.local`, `.env`) are git-ignored for security
- Never commit sensitive environment files to version control
- The Zapier webhook URL is now only accessible server-side via the API route at `/api/submit-form`
- Forms POST to `/api/submit-form` which securely forwards data to Zapier
- The webhook URL is no longer exposed in the frontend bundle

