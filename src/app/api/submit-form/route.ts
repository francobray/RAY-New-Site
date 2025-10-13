import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    // Parse the incoming request body
    const body = await request.json()
    
    // Determine which webhook URL to use based on the source
    let zapierWebhookUrl: string | undefined
    
    if (body.source === 'whatsapp-delivery-modal') {
      zapierWebhookUrl = process.env.ZAPIER_WA_MODAL_WEBHOOK_URL
      if (!zapierWebhookUrl) {
        console.error('ZAPIER_WA_MODAL_WEBHOOK_URL environment variable is not set')
        return NextResponse.json(
          { error: 'WhatsApp webhook configuration error' },
          { status: 500 }
        )
      }
    } else if (body.source === 'demo-page') {
      zapierWebhookUrl = process.env.ZAPIER_DEMO_WEBHOOK_URL
      if (!zapierWebhookUrl) {
        console.error('ZAPIER_DEMO_WEBHOOK_URL environment variable is not set')
        return NextResponse.json(
          { error: 'Demo webhook configuration error' },
          { status: 500 }
        )
      }
    } else {
      console.error('Invalid or missing source in request:', body.source)
      return NextResponse.json(
        { error: 'Invalid request source' },
        { status: 400 }
      )
    }
    
    // Forward the data to the appropriate Zapier webhook
    const zapierResponse = await fetch(zapierWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })

    if (!zapierResponse.ok) {
      console.error('Zapier webhook error:', zapierResponse.statusText)
      return NextResponse.json(
        { error: 'Failed to submit form' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: true, message: 'Form submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error submitting form:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}


