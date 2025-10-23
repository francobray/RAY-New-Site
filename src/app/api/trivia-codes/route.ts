import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL

    // Check if n8n webhook is configured
    if (!n8nWebhookUrl) {
      console.log('n8n webhook not configured, using mock data')
      return NextResponse.json({
        codes: getMockCodes(),
        source: 'mock',
      })
    }

    // Fetch data from n8n webhook
    const response = await fetch(n8nWebhookUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error(`n8n webhook returned ${response.status}`)
    }

    const data = await response.json()

    // Expected format from n8n (from Google Sheets):
    // [
    //   { row_number: 2, Code: "0Qq5Qz0E", "Redemption Date": "" },
    //   { row_number: 3, Code: "1Zx8Lj4E", "Redemption Date": "2024-10-23" }
    // ]
    const sheetRows = Array.isArray(data) ? data : []

    // Transform sheet data to our format
    const codes = sheetRows
      .filter(row => row.Code && row.Code.trim()) // Skip empty rows
      .map((row, index) => {
        const redemptionDate = row['Redemption Date'] || row.RedemptionDate || ''
        const hasRedemptionDate = redemptionDate.trim() !== ''
        
        return {
          id: String(index + 1),
          code: row.Code.toUpperCase().trim(),
          description: 'Código de trivia ganador',
          value: 'Premio',
          status: hasRedemptionDate ? 'redeemed' : 'active',
          redemptionDate: hasRedemptionDate ? redemptionDate : null,
        }
      })

    return NextResponse.json({
      codes,
      source: 'n8n',
      lastUpdated: new Date().toISOString(),
    })
  } catch (error) {
    console.error('Error fetching from n8n:', error)
    
    // Fallback to mock data on error
    return NextResponse.json({
      codes: getMockCodes(),
      source: 'mock-fallback',
      error: error instanceof Error ? error.message : 'Unknown error',
    })
  }
}

// Mock data fallback (only used if n8n is not configured)
function getMockCodes() {
  return [
    {
      id: '1',
      code: 'DEMO1',
      description: 'Código de demo 1',
      value: 'Premio',
      status: 'active',
      redemptionDate: null,
    },
    {
      id: '2',
      code: 'DEMO2',
      description: 'Código de demo 2',
      value: 'Premio',
      status: 'active',
      redemptionDate: null,
    },
    {
      id: '3',
      code: 'DEMO3',
      description: 'Código de demo 3 (canjeado)',
      value: 'Premio',
      status: 'redeemed',
      redemptionDate: '2024-10-15',
    },
  ]
}

