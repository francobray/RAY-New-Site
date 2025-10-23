# n8n Webhook para Redimir Códigos

Configura el webhook de n8n para actualizar automáticamente el Google Sheet cuando se redime un código.

## 🎯 Qué hace este webhook

Cuando un usuario canjea un código:
1. La app envía POST al webhook con el código
2. n8n busca el código en Google Sheet
3. n8n actualiza la columna "Redemption Date"
4. El código aparece automáticamente como "Redimido"

---

## 🔧 Crear el Workflow en n8n

### 1. Crear Nuevo Workflow

1. Ve a n8n
2. Click en "New Workflow"
3. Nombre: "Redeem Trivia Code"

---

### 2. Node 1: Webhook (Trigger)

**Configuración:**
- Node: "Webhook"
- HTTP Method: `POST`
- Path: `redeem-trivia-code`
- Authentication: None (o Basic Auth si prefieres)
- Response Mode: "Last Node"

**Copia la URL del webhook** - la necesitarás después.

---

### 3. Node 2: Google Sheets - Update Row

**Configuración:**
- Node: "Google Sheets"
- Credential: Tu cuenta de Google
- Operation: **"Update"**
- Spreadsheet: "RAY Trivia Codes"
- Sheet: "Sheet1"
- **Row Number:** Usar expresión

**Expresión para Row Number:**
```javascript
{{ $json.body.rowNumber }}
```

Espera, mejor usemos "Lookup and Update" para buscar por código:

---

### Mejor Opción: Node 2 - Code (Buscar Row Number)

**Node: Code**
- Language: JavaScript
- Mode: Run Once for All Items

**Código:**
```javascript
// Get the code to redeem from webhook
const codeToRedeem = $json.body.code;
const redemptionDate = $json.body.redemptionDate;

// We need to find the row number
// This will be done in the next step with Google Sheets lookup

return [{
  json: {
    code: codeToRedeem,
    redemptionDate: redemptionDate
  }
}];
```

---

### Node 3: Google Sheets - Lookup Row

**Configuración:**
- Node: "Google Sheets"  
- Operation: **"Lookup"**
- Spreadsheet: "RAY Trivia Codes"
- Sheet: "Sheet1"
- Lookup Column: "Code" (Column A)
- Lookup Value: `{{ $json.code }}`

---

### Node 4: IF - Verificar si encontró el código

**Node: IF**
- Condition: `{{ $json.row_number }}` exists

**True:** Continúa a actualizar
**False:** Retorna error

---

### Node 5: Google Sheets - Update (True branch)

**Configuración:**
- Node: "Google Sheets"
- Operation: **"Update"**
- Spreadsheet: "RAY Trivia Codes"  
- Sheet: "Sheet1"
- **Data Mode:** "Define Below"
- **Range:** `B{{ $('Google Sheets').item.json.row_number }}`
- **Values:** `{{ $('Code').item.json.redemptionDate }}`

O más simple con "Append or Update":

---

## 🎯 Opción Simplificada (Recomendada)

### Workflow Completo:

```
Webhook (POST)
    ↓
Code (Preparar datos)
    ↓
Google Sheets (Lookup Spreadsheet Row)
    ↓
IF (¿Se encontró?)
    ↓ TRUE
Google Sheets (Update Range)
    ↓
Respond (Success)

    ↓ FALSE
Respond (Error: Code not found)
```

---

### Node por Node Simplificado:

#### 1. Webhook
- Method: POST
- Path: `redeem-trivia-code`

#### 2. Google Sheets - Lookup Row
- Operation: **"Lookup Spreadsheet Row"**
- Lookup Column: Code (A)
- Lookup Value: `{{ $json.body.code }}`

#### 3. Google Sheets - Update
- Operation: **"Update"**
- Range: `B{{ $json.row_number }}`
- Values: `{{ $json.body.redemptionDate }}`

#### 4. Respond to Webhook
- Response: `{ "success": true, "code": "{{ $json.body.code }}" }`

---

## ⚙️ Código JavaScript para Node "Code"

Si usas un node de Code para formatear:

```javascript
// Recibir datos del webhook
const code = $json.body.code;
const redemptionDate = $json.body.redemptionDate;

// Retornar formato limpio
return [{
  json: {
    code: code.toUpperCase().trim(),
    redemptionDate: redemptionDate,
    timestamp: new Date().toISOString()
  }
}];
```

---

## 🧪 Testing

### Test desde n8n:

Click en "Execute Workflow" y usa test data:
```json
{
  "code": "0QQ5QZ0E",
  "redemptionDate": "2024-10-23"
}
```

### Test desde tu app:

```bash
curl -X POST http://localhost:3000/api/redeem-code \
  -H "Content-Type: application/json" \
  -d '{"code":"0QQ5QZ0E"}'
```

---

## 🔐 Agregar Variable de Entorno

Copia la URL del webhook de n8n y agrégala a tu `.env`:

```bash
# n8n Redeem Webhook
N8N_REDEEM_WEBHOOK_URL=https://franbreciano.app.n8n.cloud/webhook/redeem-trivia-code
```

---

## ✅ Verificar que Funciona

1. Activa el workflow en n8n
2. Reinicia tu app: `npm run dev`
3. Ve a `/internal`
4. Ingresa un código válido
5. Click "Canjear"
6. ¡Debería actualizarse automáticamente!

---

## 🎯 Flujo Completo

```
Usuario ingresa código
    ↓
App: POST /api/redeem-code
    ↓
n8n Webhook recibe código
    ↓
Busca código en Google Sheet
    ↓
Actualiza "Redemption Date"
    ↓
Retorna success
    ↓
App refresca lista
    ↓
Código aparece "Redimido" 🔴
```

---

**¡Todo automático!** 🚀

