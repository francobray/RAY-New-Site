# Environment Variables Setup

## Required Environment Variables

Add the following variables to your `.env` or `.env.local` file:

```bash
# Zapier Webhook URL for WhatsApp Modal form submissions
# This webhook receives form data from the WhatsApp Delivery modal
ZAPIER_WA_MODAL_WEBHOOK_URL=https://hooks.zapier.com/hooks/catch/YOUR_WA_WEBHOOK_ID

# Zapier Webhook URL for Demo page form submissions
# This webhook receives form data from the Demo page
ZAPIER_DEMO_WEBHOOK_URL=https://hooks.zapier.com/hooks/catch/YOUR_DEMO_WEBHOOK_ID
```

## Important Notes

- Environment files (`.env.local`, `.env`) are git-ignored for security
- Never commit sensitive environment files to version control
- The Zapier webhook URLs are only accessible server-side via the API route at `/api/submit-form`
- Forms POST to `/api/submit-form` which securely forwards data to the appropriate Zapier webhook based on the form source
- The webhook URLs are never exposed in the frontend bundle
- Each form type (WhatsApp modal, Demo page) has its own dedicated webhook for better tracking and automation

