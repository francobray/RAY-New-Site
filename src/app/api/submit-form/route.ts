import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    // Get the Zapier webhook URL from environment variable
    const zapierWebhookUrl = process.env.ZAPIER_WEBHOOK_URL
    
    if (!zapierWebhookUrl) {
      console.error('ZAPIER_WEBHOOK_URL environment variable is not set')
      return NextResponse.json(
        { error: 'Configuration error' },
        { status: 500 }
      )
    }

    // Parse the incoming request body
    const body = await request.json()
    
    // Forward the data to Zapier webhook
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


