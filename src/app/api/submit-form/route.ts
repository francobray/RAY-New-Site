import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    // Parse the incoming request body
    const body = await request.json()
    
    // Validate required fields based on the submission source BEFORE choosing the webhook
    const isEmpty = (val: any) => typeof val !== 'string' || val.trim().length === 0

    const validateBody = (): { valid: boolean; message?: string } => {
      switch (body.source) {
        case 'whatsapp-delivery-modal': {
          const { restaurantName, ownerName, email } = body
          if (isEmpty(restaurantName) || isEmpty(ownerName) || isEmpty(email)) {
            return { valid: false, message: 'Missing required fields for WhatsApp modal' }
          }
          // Basic email format check
          if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return { valid: false, message: 'Invalid email format' }
          }
          return { valid: true }
        }
        case 'demo-page': {
          const { firstName, lastName, email } = body
          if (isEmpty(firstName) || isEmpty(lastName) || isEmpty(email)) {
            return { valid: false, message: 'Missing required fields for demo page' }
          }
          if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return { valid: false, message: 'Invalid email format' }
          }
          return { valid: true }
        }
        case 'job-application': {
          const { firstName, lastName, email, phone, jobTitle, linkedIn, resumeUrl, coverLetter } = body
          if (isEmpty(firstName) || isEmpty(lastName) || isEmpty(email) || isEmpty(phone) || isEmpty(jobTitle) || isEmpty(linkedIn) || isEmpty(resumeUrl) || isEmpty(coverLetter)) {
            return { valid: false, message: 'Missing required fields for job application' }
          }
          if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return { valid: false, message: 'Invalid email format' }
          }
          // Validate that resumeUrl is a Google Drive link
          if (!/^https:\/\/(drive\.google\.com|docs\.google\.com)/.test(resumeUrl.trim())) {
            return { valid: false, message: 'Resume URL must be a Google Drive link' }
          }
          return { valid: true }
        }
        default:
          return { valid: false, message: 'Unknown submission source' }
      }
    }

    const validation = validateBody()
    if (!validation.valid) {
      console.warn('Blocked invalid submission:', validation.message, body)
      return NextResponse.json(
        { error: validation.message ?? 'Invalid submission' },
        { status: 400 }
      )
    }

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
      // Select webhook based on locale
      const locale = body.locale || 'en' // Default to 'en' if no locale provided
      
      console.log(`[DEBUG] Demo form submission - Locale received: ${locale}`)
      console.log(`[DEBUG] Demo form submission - Body:`, JSON.stringify(body, null, 2))
      
      if (locale === 'es') {
        zapierWebhookUrl = process.env.ZAPIER_DEMO_WEBHOOK_URL_ES
        console.log(`[DEBUG] Using Spanish webhook: ${zapierWebhookUrl ? 'CONFIGURED' : 'NOT CONFIGURED'}`)
        if (!zapierWebhookUrl) {
          console.error('ZAPIER_DEMO_WEBHOOK_URL_ES environment variable is not set')
          return NextResponse.json(
            { error: 'Demo webhook configuration error for Spanish' },
            { status: 500 }
          )
        }
      } else {
        // Default to English webhook
        zapierWebhookUrl = process.env.ZAPIER_DEMO_WEBHOOK_URL_EN
        console.log(`[DEBUG] Using English webhook: ${zapierWebhookUrl ? 'CONFIGURED' : 'NOT CONFIGURED'}`)
        if (!zapierWebhookUrl) {
          console.error('ZAPIER_DEMO_WEBHOOK_URL_EN environment variable is not set')
          return NextResponse.json(
            { error: 'Demo webhook configuration error for English' },
            { status: 500 }
          )
        }
      }
    } else if (body.source === 'job-application') {
      zapierWebhookUrl = process.env.ZAPIER_JOB_APPLICATION_WEBHOOK_URL
      console.log(`[DEBUG] Job application - Received body:`, JSON.stringify(body, null, 2))
      console.log(`[DEBUG] Using job application webhook: ${zapierWebhookUrl ? 'CONFIGURED' : 'NOT CONFIGURED'}`)
      if (!zapierWebhookUrl) {
        console.error('ZAPIER_JOB_APPLICATION_WEBHOOK_URL environment variable is not set')
        return NextResponse.json(
          { error: 'Job application webhook configuration error' },
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
      const errorText = await zapierResponse.text()
      console.error('Zapier webhook error:', {
        status: zapierResponse.status,
        statusText: zapierResponse.statusText,
        body: errorText,
        source: body.source
      })
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


