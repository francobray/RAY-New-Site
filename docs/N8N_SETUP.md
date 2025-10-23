# n8n Setup for Trivia Codes

Complete guide to connecting your Google Sheet using n8n workflow automation.

## 📋 Overview

**What is n8n?**
- Open-source workflow automation tool
- Similar to Zapier but self-hostable
- Visual workflow builder
- 300+ integrations
- Free to use (self-hosted)

**Why n8n?**
- ✅ No recurring fees (if self-hosted)
- ✅ Full data control
- ✅ Unlimited executions
- ✅ More powerful than Zapier
- ✅ Open-source & extendable

---

## 🚀 Part 1: n8n Installation

### Option A: n8n Cloud (Recommended for Beginners)

**Pros:** Managed hosting, no maintenance, free tier  
**Cons:** Limited executions on free plan

1. Go to [n8n.cloud](https://n8n.cloud)
2. Sign up for free account
3. Verify email
4. You're ready!

**Free Plan:**
- 2,500 workflow executions/month
- 20 active workflows
- Perfect for this use case

### Option B: Docker (Recommended for Self-Hosting)

**Pros:** Easy setup, isolated, portable  
**Cons:** Requires Docker knowledge

```bash
# Run n8n
docker run -it --rm \
  --name n8n \
  -p 5678:5678 \
  -v ~/.n8n:/home/node/.n8n \
  n8nio/n8n

# With database (production)
docker run -it --rm \
  --name n8n \
  -p 5678:5678 \
  -e DB_TYPE=postgresdb \
  -e DB_POSTGRESDB_HOST=postgres \
  -e DB_POSTGRESDB_DATABASE=n8n \
  -e DB_POSTGRESDB_USER=n8n \
  -e DB_POSTGRESDB_PASSWORD=n8n \
  -v ~/.n8n:/home/node/.n8n \
  n8nio/n8n
```

Access at: `http://localhost:5678`

### Option C: npm

**Pros:** Simple, no Docker needed  
**Cons:** System-wide installation

```bash
# Install globally
npm install n8n -g

# Start n8n
n8n start

# Or with custom port
n8n start --port 5679
```

### Option D: Cloud Platforms

**Railway:**
```bash
# One-click deploy
# Visit: railway.app
# Search for n8n template
```

**Render:**
```bash
# Deploy from Docker image
# Image: n8nio/n8n
```

**DigitalOcean App Platform:**
```bash
# Deploy n8n container
# Enable persistent volume
```

---

## 🔧 Part 2: Workflow Setup

### Step 1: Create New Workflow

1. Open n8n (cloud or self-hosted)
2. Click "New Workflow"
3. Name it: "Trivia Codes API"
4. Click "Save"

### Step 2: Add Webhook Node (Trigger)

**Add Node:**
1. Click the "+" button
2. Search: "Webhook"
3. Click "Webhook"

**Configure:**
- **HTTP Method:** `GET`
- **Path:** `trivia-codes`
- **Authentication:** None (or Basic Auth if you want)
- **Response Mode:** Last Node
- **Response Code:** 200

**Get Webhook URL:**
- **Production URL:** `https://your-n8n.com/webhook/trivia-codes`
- **Test URL:** `https://your-n8n.com/webhook-test/trivia-codes`

**Copy the Production URL** - you'll need it later!

### Step 3: Add Google Sheets Node

**Add Node:**
1. Click "+" after Webhook
2. Search: "Google Sheets"
3. Click "Google Sheets"

**Configure:**
- **Operation:** `Get All`
- **Credential:** Click "Create New"

**Connect Google Account:**
1. Click "Connect"
2. Choose OAuth2
3. Follow Google sign-in flow
4. Allow n8n access
5. Credential is saved

**Select Sheet:**
- **Spreadsheet:** "RAY Trivia Codes"
- **Sheet:** "Sheet1"
- **Range:** `A2:B` (starts from row 2, skips header)
- **Data Mode:** "Object"
- **Key Row:** 1 (uses first row as keys)

### Step 4: Add Code Node (Transform)

**Add Node:**
1. Click "+" after Google Sheets
2. Search: "Code"
3. Click "Code"

**Configure:**
- **Language:** JavaScript
- **Mode:** Run Once for All Items

**JavaScript Code:**
```javascript
// Get all items from Google Sheets
const items = $input.all();

// Transform to required format
const codes = items
  .filter(item => {
    // Skip empty rows
    return item.json.Code && item.json.Code.trim();
  })
  .map(item => {
    // Format each code
    return {
      code: (item.json.Code || '').toUpperCase().trim(),
      redemptionDate: item.json['Redemption Date'] || item.json.RedemptionDate || ''
    };
  });

// Return array of codes
return codes.map(code => ({ json: code }));
```

**Alternative (if using column indices):**
```javascript
const items = $input.all();

const codes = items
  .filter(item => item.json['0']) // Column A not empty
  .map(item => ({
    code: (item.json['0'] || '').toUpperCase().trim(),
    redemptionDate: item.json['1'] || ''
  }));

return codes.map(code => ({ json: code }));
```

### Step 5: Add Respond to Webhook Node

**Add Node:**
1. Click "+" after Code
2. Search: "Respond to Webhook"
3. Click "Respond to Webhook"

**Configure:**
- **Response Code:** 200
- **Response Body:** JSON
- **Response Data:** All Entries

This node automatically returns the data from previous node.

### Step 6: Test Workflow

**Execute Workflow:**
1. Click "Execute Workflow" button (top)
2. Watch each node execute
3. Check output of each node

**Expected Output (Code node):**
```json
[
  {
    "code": "TEMPLE2024",
    "redemptionDate": "2024-10-15"
  },
  {
    "code": "RAYSPECIAL",
    "redemptionDate": "2024-10-16"
  }
]
```

### Step 7: Activate Workflow

1. Toggle "Active" switch (top right)
2. Workflow is now live!
3. Your webhook URL is ready to use

---

## ⚙️ Part 3: App Configuration

### Update Environment Variables

Edit `.env.local`:

```bash
# n8n Webhook Configuration
N8N_WEBHOOK_URL=https://your-n8n-instance.com/webhook/trivia-codes
```

**Examples:**

**n8n Cloud:**
```bash
N8N_WEBHOOK_URL=https://myworkspace.app.n8n.cloud/webhook/trivia-codes
```

**Self-Hosted:**
```bash
N8N_WEBHOOK_URL=http://localhost:5678/webhook/trivia-codes
```

**Custom Domain:**
```bash
N8N_WEBHOOK_URL=https://n8n.yourdomain.com/webhook/trivia-codes
```

### Restart Development Server

```bash
npm run dev
```

### Verify Connection

1. Visit: `http://localhost:3000/internal`
2. Look for 🔄 icon
3. If you see 🔄 → Connected to n8n!
4. If you see 🧪 → Using mock data (check config)

---

## 🧪 Testing & Debugging

### Test Webhook URL Directly

Open in browser:
```
https://your-n8n.com/webhook/trivia-codes
```

Should return JSON array:
```json
[
  {"code": "TEMPLE2024", "redemptionDate": "2024-10-15"},
  {"code": "RAYSPECIAL", "redemptionDate": "2024-10-16"}
]
```

### Check n8n Execution Logs

1. Go to n8n interface
2. Click "Executions" (sidebar)
3. See all webhook calls
4. Click on execution to see details
5. Check input/output of each node

### Test from App

1. Open browser DevTools (F12)
2. Network tab
3. Visit `/internal`
4. Check `/api/trivia-codes` request
5. Should see: `"source": "n8n"`

### Debug Common Issues

**Node fails:**
- Click on failed node
- Check error message
- Verify credentials
- Test Google Sheets connection

**Wrong data format:**
- Check Code node output
- Use `console.log()` in Code node
- Verify array structure

**Timeout:**
- Increase webhook timeout in n8n settings
- Optimize Google Sheets query
- Add caching

---

## 🎨 Advanced Workflow Features

### Add Error Handling

**Add IF Node after Google Sheets:**
```javascript
// Check if data exists
$json.length > 0
```

**True path:** Continue to Code node  
**False path:** Return empty array

### Add Caching

**Add Set Node:**
```javascript
// Cache results for 5 minutes
{
  "codes": $json,
  "cachedAt": new Date().toISOString(),
  "expiresAt": new Date(Date.now() + 5*60*1000).toISOString()
}
```

### Add Logging

**Add HTTP Request Node (parallel):**
- Method: POST
- URL: Your logging service
- Body: `{{ $json }}`
- Logs each webhook call

### Add Authentication

**Update Webhook Node:**
- Authentication: Header Auth
- Name: `Authorization`
- Value: `Bearer your-secret-token`

**In your app:**
```javascript
await fetch(n8nUrl, {
  headers: {
    'Authorization': 'Bearer your-secret-token'
  }
})
```

### Multiple Environments

**Use different paths:**
- Production: `/webhook/trivia-codes-prod`
- Staging: `/webhook/trivia-codes-staging`
- Development: `/webhook/trivia-codes-dev`

### Schedule Pre-Warming

**Create second workflow:**
1. Trigger: Schedule (Cron)
2. Schedule: Every 5 minutes
3. Action: Call main webhook
4. Cache results

---

## 🔒 Security Best Practices

### 1. Use Authentication

Add Basic Auth or Bearer Token:
```javascript
// In Webhook node settings
Authentication: Basic Auth
Username: admin
Password: strong-password
```

### 2. Rate Limiting

Add Rate Limit node:
```javascript
// Allow max 60 requests per minute
{
  "limit": 60,
  "window": 60000
}
```

### 3. IP Whitelisting

In self-hosted n8n, configure nginx:
```nginx
location /webhook/ {
    allow 123.456.789.0;  # Your app server
    deny all;
    proxy_pass http://n8n:5678;
}
```

### 4. HTTPS Only

Use SSL certificate:
- Let's Encrypt (free)
- Cloudflare (free)
- Your hosting provider

### 5. Secure Credentials

- Store Google credentials securely in n8n
- Don't hardcode secrets
- Rotate credentials regularly

---

## 🌐 Production Deployment

### n8n Cloud (Easiest)

1. Already production-ready
2. Automatic SSL
3. Managed updates
4. Built-in monitoring

### Self-Hosted with Docker Compose

**docker-compose.yml:**
```yaml
version: '3.7'

services:
  postgres:
    image: postgres:13
    environment:
      POSTGRES_USER: n8n
      POSTGRES_PASSWORD: n8n
      POSTGRES_DB: n8n
    volumes:
      - postgres_data:/var/lib/postgresql/data

  n8n:
    image: n8nio/n8n
    ports:
      - "5678:5678"
    environment:
      - DB_TYPE=postgresdb
      - DB_POSTGRESDB_HOST=postgres
      - DB_POSTGRESDB_PORT=5432
      - DB_POSTGRESDB_DATABASE=n8n
      - DB_POSTGRESDB_USER=n8n
      - DB_POSTGRESDB_PASSWORD=n8n
      - N8N_BASIC_AUTH_ACTIVE=true
      - N8N_BASIC_AUTH_USER=admin
      - N8N_BASIC_AUTH_PASSWORD=change-this
      - WEBHOOK_URL=https://n8n.yourdomain.com
    depends_on:
      - postgres
    volumes:
      - n8n_data:/home/node/.n8n

volumes:
  postgres_data:
  n8n_data:
```

### Reverse Proxy (nginx)

**nginx.conf:**
```nginx
server {
    listen 80;
    server_name n8n.yourdomain.com;
    
    location / {
        proxy_pass http://localhost:5678;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### SSL with Certbot

```bash
# Install certbot
sudo apt install certbot python3-certbot-nginx

# Get certificate
sudo certbot --nginx -d n8n.yourdomain.com
```

### Environment Variables for Production

Update your app's `.env` (not `.env.local`):
```bash
N8N_WEBHOOK_URL=https://n8n.yourdomain.com/webhook/trivia-codes
```

---

## 📊 Monitoring & Maintenance

### Check Workflow Health

**In n8n:**
1. Executions → Success rate
2. Check for errors
3. Monitor response times

### Set Up Alerts

Create alert workflow:
1. Trigger: Webhook (from main workflow on error)
2. Action: Send email/SMS
3. Notify on failures

### Backup Workflows

```bash
# Export workflow
n8n export:workflow --id=123 --output=backup.json

# Import workflow
n8n import:workflow --input=backup.json
```

### Update n8n

**Docker:**
```bash
docker pull n8nio/n8n:latest
docker-compose restart
```

**npm:**
```bash
npm update -g n8n
```

---

## 💡 Tips & Tricks

### Tip 1: Test with Sample Data

Use "Set" node to inject test data:
```javascript
[
  { json: { Code: "TEST123", "Redemption Date": "2024-10-23" } }
]
```

### Tip 2: Add Descriptive Notes

Right-click node → Add Note:
- Explain what each node does
- Document weird edge cases

### Tip 3: Use Sticky Notes

Add visual organization:
- Group related nodes
- Add section headers
- Color code by function

### Tip 4: Version Control

Export workflow JSON:
- Commit to git
- Track changes
- Easy rollback

### Tip 5: Duplicate for Testing

Duplicate workflow:
- Test changes safely
- Compare versions
- AB testing

---

## 🔄 Workflow Templates

### Template 1: Basic (Current)

```
Webhook → Google Sheets → Code → Respond
```

### Template 2: With Caching

```
Webhook → Check Cache → [Hit: Return Cache] / [Miss: Google Sheets → Code → Save Cache → Respond]
```

### Template 3: With Validation

```
Webhook → Validate Auth → Google Sheets → Filter Empty → Transform → Respond
```

### Template 4: Two-Way Sync

**Read Workflow:**
```
Webhook (GET) → Google Sheets → Transform → Respond
```

**Write Workflow:**
```
Webhook (POST) → Validate Code → Google Sheets (Append) → Respond
```

---

## 📚 Resources

**Official Documentation:**
- https://docs.n8n.io
- https://community.n8n.io

**Video Tutorials:**
- n8n YouTube Channel
- Community tutorials

**Templates:**
- https://n8n.io/workflows
- Community workflows

**Support:**
- Community forum
- Discord server
- GitHub issues

---

## 🆘 Troubleshooting

### Common Errors

**"Workflow is not active"**
- Toggle Active switch
- Save workflow
- Check for errors

**"Cannot connect to Google Sheets"**
- Reconnect Google OAuth
- Check spreadsheet permissions
- Verify spreadsheet ID

**"Webhook timeout"**
- Increase timeout setting
- Optimize query
- Add caching

**"Invalid JSON response"**
- Check Code node output
- Verify array structure
- Test each node individually

---

**You're all set with n8n!** 🔄

Last Updated: October 2024

