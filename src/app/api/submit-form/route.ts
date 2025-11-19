import { NextRequest, NextResponse } from 'next/server'

// Retry fetch with exponential backoff
async function fetchWithRetry(
  url: string,
  options: RequestInit,
  maxRetries: number = 3
): Promise<Response> {
  let lastError: Error | null = null
  
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      console.log(`[DEBUG] Fetch attempt ${attempt}/${maxRetries} to webhook`)
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 10000) // 10 second timeout
      
      const response = await fetch(url, {
        ...options,
        signal: controller.signal,
      })
      
      clearTimeout(timeoutId)
      return response
    } catch (error: any) {
      lastError = error
      console.error(`[ERROR] Fetch attempt ${attempt}/${maxRetries} failed:`, {
        message: error.message,
        code: error.code,
        cause: error.cause?.message,
      })
      
      // If it's the last attempt, throw the error
      if (attempt === maxRetries) {
        throw error
      }
      
      // Wait before retrying (exponential backoff: 1s, 2s, 4s)
      const waitTime = Math.pow(2, attempt - 1) * 1000
      console.log(`[DEBUG] Waiting ${waitTime}ms before retry...`)
      await new Promise(resolve => setTimeout(resolve, waitTime))
    }
  }
  
  throw lastError || new Error('Fetch failed after retries')
}

export async function POST(request: NextRequest) {
  try {
    // Generate unique request ID to track duplicates
    const requestId = `req-${Date.now()}-${Math.random().toString(36).substring(7)}`
    const timestamp = new Date().toISOString()
    
    console.log(`[SUBMIT-FORM:${requestId}] 📨 POST request received at ${timestamp}`)
    console.log(`[SUBMIT-FORM:${requestId}] 🌐 Headers:`, {
      userAgent: request.headers.get('user-agent'),
      referer: request.headers.get('referer'),
      contentType: request.headers.get('content-type')
    })
    
    // Parse the incoming request body
    const body = await request.json()
    
    console.log(`[SUBMIT-FORM:${requestId}] 📦 Body parsed:`, {
      source: body.source,
      locale: body.locale,
      email: body.email?.substring(0, 3) + '***',
      firstName: body.firstName,
      restaurantName: body.restaurantName
    })
    
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
    
    // Forward the data to the appropriate Zapier webhook with retry logic
    console.log(`[SUBMIT-FORM:${requestId}] 🚀 Forwarding to Zapier webhook`)
    console.log(`[SUBMIT-FORM:${requestId}] 📍 Webhook URL:`, zapierWebhookUrl?.substring(0, 50) + '...')
    console.log(`[SUBMIT-FORM:${requestId}] 📦 Payload:`, JSON.stringify(body, null, 2))
    
    try {
      const zapierResponse = await fetchWithRetry(zapierWebhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })
      
      console.log(`[SUBMIT-FORM:${requestId}] ✅ Zapier response received:`, {
        status: zapierResponse.status,
        statusText: zapierResponse.statusText
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

      console.log(`[SUBMIT-FORM:${requestId}] ✅ SUCCESS - Form submitted successfully for source: ${body.source}`)
      console.log(`[SUBMIT-FORM:${requestId}] 🏁 Request completed at ${new Date().toISOString()}`)
      return NextResponse.json(
        { success: true, message: 'Form submitted successfully' },
        { status: 200 }
      )
    } catch (error: any) {
      console.error(`[SUBMIT-FORM:${requestId}] ❌ All retry attempts failed:`, {
        message: error.message,
        code: error.code,
        cause: error.cause,
        source: body.source,
      })
      
      // Check if it's a timeout or connection error
      if (error.name === 'AbortError') {
        return NextResponse.json(
          { error: 'Request timeout. Please try again.' },
          { status: 504 }
        )
      }
      
      if (error.code === 'ECONNRESET' || error.code === 'ECONNREFUSED') {
        return NextResponse.json(
          { error: 'Unable to connect to server. Please try again later.' },
          { status: 503 }
        )
      }
      
      return NextResponse.json(
        { error: 'Failed to submit form. Please try again.' },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('Error submitting form:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}


