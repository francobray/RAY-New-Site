import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    if (!body.message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      )
    }

    // Log incoming request for debugging
    console.log('[Chat API] 📨 Incoming request:', {
      message: body.message?.substring(0, 50) + '...',
      sessionId: body.sessionId,
      locale: body.locale,
      hasSessionId: !!body.sessionId
    })

    // Validate sessionId - it should always be provided by the frontend
    if (!body.sessionId) {
      console.warn('[Chat API] ⚠️ No sessionId provided, creating fallback')
    }

    // Get n8n chat webhook from environment
    const n8nChatWebhookUrl = process.env.N8N_CHAT_WEBHOOK_URL

    if (!n8nChatWebhookUrl) {
      console.error('N8N_CHAT_WEBHOOK_URL not configured')
      return NextResponse.json(
        { 
          error: 'Chat service not configured',
          response: body.locale === 'es'
            ? 'Lo siento, el servicio de chat no está disponible en este momento.'
            : 'Sorry, the chat service is not available at the moment.'
        },
        { status: 503 }
      )
    }

    // Use provided sessionId or create fallback (should rarely happen)
    const sessionId = body.sessionId || `webchat-session-fallback-${Date.now()}`
    
    const payload = {
      message: body.message,
      locale: body.locale || 'es',
      timestamp: new Date().toISOString(),
      sessionId: sessionId,
      source: 'rayapp-webchat'
    }

    console.log('[Chat API] 📤 Forwarding to n8n:', {
      sessionId: payload.sessionId,
      locale: payload.locale,
      messageLength: payload.message.length
    })

    // Forward the request to n8n webhook
    const response = await fetch(n8nChatWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    // Handle n8n response
    if (!response.ok) {
      console.error('N8N webhook error:', response.status, response.statusText)
      
      // Return a fallback response for common errors
      if (response.status === 404) {
        return NextResponse.json({
          response: body.locale === 'es' 
            ? 'Lo siento, el servicio de chat no está disponible en este momento. Por favor, intenta contactarnos directamente.'
            : 'Sorry, the chat service is not available at the moment. Please try contacting us directly.'
        })
      }
      
      return NextResponse.json(
        { 
          error: 'Service temporarily unavailable',
          response: body.locale === 'es'
            ? 'Lo siento, hubo un problema temporal. Por favor intenta de nuevo en un momento.'
            : 'Sorry, there was a temporary issue. Please try again in a moment.'
        },
        { status: 500 }
      )
    }

    const data = await response.json()
    
    // Handle different response formats from n8n
    let botResponse = ''
    
    if (Array.isArray(data) && data.length > 0) {
      // Handle array format: [{"reply": "..."}]
      botResponse = data[0].reply || data[0].response || data[0].message || ''
    } else if (typeof data === 'object') {
      // Handle object format: {"reply": "..."} or {"response": "..."}
      botResponse = data.reply || data.response || data.message || ''
    } else if (typeof data === 'string') {
      // Handle string format
      botResponse = data
    }
    
    // Return standardized response
    return NextResponse.json({
      response: botResponse || (body.locale === 'es' 
        ? 'Lo siento, no pude procesar la respuesta.'
        : 'Sorry, I couldn\'t process the response.')
    })

  } catch (error) {
    console.error('Chat API error:', error)
    
    // Determine locale for error message
    let locale = 'es'
    try {
      const body = await request.json()
      locale = body.locale || 'es'
    } catch {
      // Use default locale if can't parse body
    }
    
    return NextResponse.json(
      { 
        error: 'Internal server error',
        response: locale === 'es'
          ? 'Lo siento, hubo un error de conexión. Por favor intenta de nuevo en un momento.'
          : 'Sorry, there was a connection error. Please try again in a moment.'
      },
      { status: 500 }
    )
  }
}

// Handle OPTIONS request for CORS preflight
export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}
