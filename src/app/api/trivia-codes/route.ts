import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL

    // Check if n8n webhook is configured
    if (!n8nWebhookUrl) {
      console.error('❌ N8N_WEBHOOK_URL environment variable is not set')
      return NextResponse.json(
        {
          error: 'Configuration Error',
          message: 'N8N_WEBHOOK_URL environment variable is not configured',
          details: 'Please set N8N_WEBHOOK_URL in your production environment variables and redeploy.',
          codes: [],
          source: 'error',
        },
        { status: 503 }
      )
    }

    console.log('🔄 Fetching codes from n8n webhook...')
    
    // Fetch data from n8n webhook
    const response = await fetch(n8nWebhookUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error(`❌ n8n webhook returned ${response.status}: ${errorText}`)
      
      return NextResponse.json(
        {
          error: 'Webhook Error',
          message: `n8n webhook returned ${response.status}`,
          details: `Check your n8n workflow is active and the webhook URL is correct. Response: ${errorText.substring(0, 100)}`,
          codes: [],
          source: 'error',
        },
        { status: response.status }
      )
    }

    const data = await response.json()

    // Expected format from n8n (from Google Sheets):
    // [
    //   { row_number: 2, Code: "0Qq5Qz0E", "Redemption Date": "" },
    //   { row_number: 3, Code: "1Zx8Lj4E", "Redemption Date": "2024-10-23" }
    // ]
    const sheetRows = Array.isArray(data) ? data : []

    if (sheetRows.length === 0) {
      console.warn('⚠️ n8n returned empty data array')
    }

    // Transform sheet data to our format
    const codes = sheetRows
      .filter(row => row.Code && row.Code.trim()) // Skip empty rows
      .map((row, index) => {
        const redemptionDate = row['Redemption Date'] || row.RedemptionDate || ''
        const hasRedemptionDate = redemptionDate.trim() !== ''
        const itemBonificado = row['Item bonificado'] || row['Item Bonificado'] || row.ItemBonificado || null
        
        return {
          id: String(index + 1),
          code: row.Code.toUpperCase().trim(),
          description: 'Código de trivia ganador',
          value: 'Premio',
          status: hasRedemptionDate ? 'redeemed' : 'active',
          redemptionDate: hasRedemptionDate ? redemptionDate : null,
          itemBonificado: itemBonificado ? String(itemBonificado).trim() : null,
        }
      })

    console.log(`✅ Successfully fetched ${codes.length} codes from n8n`)

    return NextResponse.json({
      codes,
      source: 'n8n',
      lastUpdated: new Date().toISOString(),
    })
  } catch (error) {
    console.error('❌ Error fetching from n8n:', error)
    
    return NextResponse.json(
      {
        error: 'Connection Error',
        message: error instanceof Error ? error.message : 'Unknown error connecting to n8n',
        details: 'Check that your n8n instance is accessible and the workflow is active.',
        codes: [],
        source: 'error',
      },
      { status: 500 }
    )
  }
}

