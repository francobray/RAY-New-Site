# 🔄 n8n Quick Start

Connect your Trivia Codes to Google Sheets using n8n - open-source workflow automation!

## Why n8n?

- ✅ Open-source and self-hosted
- ✅ No monthly fees (if self-hosted)
- ✅ Full control over your data
- ✅ Visual workflow editor
- ✅ Powerful data transformation
- ✅ 300+ integrations

---

## 🚀 Quick Setup (10 minutes)

### 1. Set Up n8n

**Option A: n8n Cloud (Easiest)**
```
1. Go to n8n.cloud
2. Sign up for free account
3. Create new workflow
```

**Option B: Self-Hosted (Docker)**
```bash
docker run -it --rm \
  --name n8n \
  -p 5678:5678 \
  -v ~/.n8n:/home/node/.n8n \
  n8nio/n8n
```

**Option C: npm**
```bash
npm install n8n -g
n8n start
```

Access at: `http://localhost:5678`

---

### 2. Create Google Sheet

```
1. Go to Google Sheets
2. Create new spreadsheet: "RAY Trivia Codes"
3. Add headers in Row 1:
   | Code | Redemption Date |
4. Add test data:
   | TEMPLE2024 | 2024-10-15 |
   | RAYSPECIAL | 2024-10-16 |
```

---

### 3. Create n8n Workflow

#### Node 1: Webhook (Trigger)

1. Click "+" to add node
2. Search: "Webhook"
3. Select "Webhook"
4. Method: `GET`
5. Path: `trivia-codes` (or whatever you want)
6. Response Mode: "Last Node"
7. Copy the **Production Webhook URL**
   - Format: `https://your-n8n.com/webhook/trivia-codes`

#### Node 2: Google Sheets

1. Click "+" after Webhook
2. Search: "Google Sheets"
3. Select "Google Sheets"
4. Operation: "Get All"
5. Click "Add Credential"
6. Follow OAuth flow to connect Google account
7. Select your spreadsheet: "RAY Trivia Codes"
8. Select sheet: "Sheet1"
9. Range: `A2:B` (skip header)

#### Node 3: Code (Format Data)

1. Click "+" after Google Sheets
2. Search: "Code"
3. Select "Code"
4. Mode: "Run Once for All Items"
5. Add this JavaScript code:

```javascript
// Get data from Google Sheets
const items = $input.all();

// Transform to the format your app expects
const codes = items
  .filter(item => item.json.Code) // Skip empty rows
  .map(item => ({
    code: (item.json.Code || '').toUpperCase().trim(),
    redemptionDate: item.json['Redemption Date'] || item.json.RedemptionDate || ''
  }));

// Return as array
return codes.map(code => ({ json: code }));
```

#### Node 4: Respond to Webhook

1. Click "+" after Code node
2. Search: "Respond to Webhook"
3. Select it
4. Response Body: `{{ $json }}`
5. Response Data: "All Entries"

---

### 4. Activate Workflow

1. Click "Active" toggle (top right)
2. Workflow is now live! 🔄
3. Copy your webhook URL

---

### 5. Configure App

Add to `.env.local`:

```bash
# n8n Configuration
N8N_WEBHOOK_URL=https://your-n8n.com/webhook/trivia-codes
```

If self-hosted locally:
```bash
N8N_WEBHOOK_URL=http://localhost:5678/webhook/trivia-codes
```

---

### 6. Restart & Test

```bash
npm run dev
```

Visit `/internal` and look for 🔄 icon!

---

## 📊 n8n Workflow Visual

```
┌─────────────────┐
│   Webhook       │  ← Your app calls this
│   (Trigger)     │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Google Sheets   │  ← Reads redemptions
│  Get All Rows   │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Code (JS)      │  ← Formats data
│  Transform      │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Respond to      │  ← Returns JSON
│   Webhook       │
└─────────────────┘
```

---

## 🧪 Testing

### Test in n8n

1. Click "Execute Workflow" button
2. Check each node's output
3. Final output should be:
   ```json
   [
     { "code": "TEMPLE2024", "redemptionDate": "2024-10-15" },
     { "code": "RAYSPECIAL", "redemptionDate": "2024-10-16" }
   ]
   ```

### Test from Browser

1. Copy your webhook URL
2. Open in browser
3. Should see JSON array of codes

### Test from App

1. Visit `/internal`
2. Look for 🔄 icon (means n8n is connected)
3. Click "Actualizar" to refresh data

---

## 🔄 Workflow Updates

### Add New Code Redemption

1. Open Google Sheet
2. Add row: `LOYALTY10 | 2024-10-23`
3. Go to app, click "Actualizar"
4. Code shows as "Canjeado"

### Debug Issues

In n8n:
1. Go to "Executions" tab
2. See all webhook calls
3. Click on execution to see data flow
4. Check each node's input/output

---

## 🚨 Troubleshooting

**🧪 Shows mock data?**
- Check `N8N_WEBHOOK_URL` in `.env.local`
- Restart dev server
- Verify workflow is "Active"

**❌ Error loading?**
- Test webhook URL in browser
- Check n8n execution logs
- Verify Google Sheets connection

**🔄 Wrong data format?**
- Check Code node JavaScript
- Must return array of objects
- Each object needs `code` and `redemptionDate`

---

## 💡 Pro Tips

### Tip 1: Add Caching
Add "Set" node to cache results:
- Reduces Google Sheets API calls
- Faster response times

### Tip 2: Add Error Handling
Add "IF" node:
- Check if Google Sheets returns data
- Return empty array if not

### Tip 3: Add Logging
Add "HTTP Request" node:
- Log each webhook call
- Send to your analytics

### Tip 4: Schedule Updates
Add "Cron" trigger:
- Run every 5 minutes
- Pre-populate cache

### Tip 5: Filter Empty Rows
In Code node:
```javascript
.filter(item => item.json.Code && item.json.Code.trim())
```

---

## 💰 Hosting Options

### n8n Cloud
- **Free:** 2,500 workflow executions/month
- **Starter ($20/mo):** 10,000 executions
- **Pro ($50/mo):** 50,000 executions
- ✅ Managed hosting, no maintenance

### Self-Hosted (Free)
- **Cost:** $0 (if you have server)
- **Options:**
  - VPS (DigitalOcean, Hetzner)
  - Railway, Render, Fly.io
  - Your own server
- ✅ Unlimited executions
- ❌ You manage updates

**For this use case:** Free tier is plenty!

---

## 🎓 Advanced Features

### Two-Way Sync

**Workflow 1: Read (Current)**
- Webhook → Google Sheets → Return Data

**Workflow 2: Write (New)**
- Webhook → Receive Code → Add to Sheet

```javascript
// In Code node for Write workflow
const code = $json.code;
const date = new Date().toISOString().split('T')[0];

return [{
  json: {
    Code: code,
    'Redemption Date': date
  }
}];
```

### Add Authentication

Add "IF" node after Webhook:
```javascript
// Check for auth header
$node["Webhook"].json.headers.authorization === "Bearer your-secret-token"
```

### Multiple Sheets

Use "Switch" node:
- Route to different sheets based on parameter
- Example: `/webhook/trivia-codes?event=october`

### Rate Limiting

Add "Wait" node:
- Prevent too many requests
- Add delay between calls

---

## 📚 Full Documentation

See `docs/N8N_SETUP.md` for:
- Detailed workflow setup
- Code node examples
- Error handling
- Production deployment
- Security best practices

---

**Get started with n8n in 10 minutes!** 🔄

