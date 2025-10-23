import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { code } = await request.json()

    if (!code) {
      return NextResponse.json(
        { success: false, message: 'Código requerido' },
        { status: 400 }
      )
    }

    const n8nRedeemWebhookUrl = process.env.N8N_REDEEM_WEBHOOK_URL

    if (!n8nRedeemWebhookUrl) {
      console.log('N8N_REDEEM_WEBHOOK_URL not configured')
      return NextResponse.json(
        { success: false, message: 'Webhook de redención no configurado' },
        { status: 500 }
      )
    }

    // Llamar al webhook de n8n para actualizar el Google Sheet
    const response = await fetch(n8nRedeemWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        code: code.toUpperCase().trim(),
        redemptionDate: new Date().toISOString().split('T')[0], // YYYY-MM-DD
      }),
    })

    if (!response.ok) {
      throw new Error(`n8n webhook returned ${response.status}`)
    }

    const result = await response.json()

    return NextResponse.json({
      success: true,
      message: 'Código redimido exitosamente',
      data: result,
    })
  } catch (error) {
    console.error('Error redeeming code:', error)
    return NextResponse.json(
      {
        success: false,
        message: 'Error al redimir código',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}

