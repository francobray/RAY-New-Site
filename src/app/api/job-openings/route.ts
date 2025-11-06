import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const n8nJobOpeningsWebhookUrl = process.env.N8N_JOB_OPENINGS_WEBHOOK_URL

    // Return error if environment variable is not configured
    if (!n8nJobOpeningsWebhookUrl) {
      console.error('❌ N8N_JOB_OPENINGS_WEBHOOK_URL environment variable is not configured')
      return NextResponse.json(
        {
          error: 'Configuration Error',
          message: 'Job openings webhook URL is not configured',
          details: 'N8N_JOB_OPENINGS_WEBHOOK_URL environment variable is missing',
          jobs: [],
          source: 'error',
        },
        { status: 500 }
      )
    }

    console.log('🔄 Fetching job openings from n8n webhook...')
    
    // Fetch data from n8n webhook
    const response = await fetch(n8nJobOpeningsWebhookUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      // Add cache control to prevent stale data
      cache: 'no-store',
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error(`❌ n8n webhook returned ${response.status}: ${errorText}`)
      
      return NextResponse.json(
        {
          error: 'Webhook Error',
          message: `n8n webhook returned ${response.status}`,
          details: `Check your n8n workflow is active and the webhook URL is correct. Response: ${errorText.substring(0, 100)}`,
          jobs: [],
          source: 'error',
        },
        { status: response.status }
      )
    }

    const data = await response.json()

    // Handle different possible response formats from n8n
    // Format 1: Direct array of jobs
    // Format 2: Object with jobs array
    // Format 3: Single job object
    let jobs = []
    
    if (Array.isArray(data)) {
      jobs = data
    } else if (data && typeof data === 'object') {
      if (Array.isArray(data.jobs)) {
        jobs = data.jobs
      } else if (Array.isArray(data.data)) {
        jobs = data.data
      } else if (data.title || data.department) {
        // Single job object
        jobs = [data]
      }
    }

    // Normalize job data to our expected format
    const normalizedJobs = jobs
      .filter((job: any) => job && (job.title || job.Title || job.name)) // Filter out invalid entries
      .map((job: any, index: number) => {
        // Extract department and type from Modality field if present
        // Example: "Full-time / Customer Success & Support"
        const modality = job.Modality || job.modality || ''
        const modalityParts = modality.split('/').map((s: string) => s.trim())
        const extractedType = modalityParts[0] || ''
        const extractedDepartment = modalityParts[1] || ''
        
        return {
          id: job.id || job.row_number || String(index + 1),
          title: job.title || job.Title || job.name || '',
          department: job.department || job.team || job.category || extractedDepartment || '',
          area: job.Area || job.area || job.department || extractedDepartment || '',
          location: job.location || job.Where || job.where || job.remote || 'Remote',
          type: job.type || job.employmentType || job.timeType || extractedType || 'Full-Time',
          description: job.description || job.summary || job['What we look for'] || job.Impact || '',
          // Allow additional fields to pass through
          ...(job.url && { url: job.url }),
          ...(job.applyUrl && { applyUrl: job.applyUrl }),
          ...(job.postedDate && { postedDate: job.postedDate }),
          // Include additional fields from the webhook
          ...(job['What we look for'] && { whatWeLookFor: job['What we look for'] }),
          ...(job.Impact && { impact: job.Impact }),
          ...(job['Minimum requirements'] && { requirements: job['Minimum requirements'] }),
          ...(job['Pay and benefits'] && { payAndBenefits: job['Pay and benefits'] }),
        }
      })

    if (normalizedJobs.length === 0) {
      console.warn('⚠️ n8n returned no valid job openings')
    } else {
      console.log(`✅ Successfully fetched ${normalizedJobs.length} job openings from n8n`)
    }

    return NextResponse.json({
      jobs: normalizedJobs,
      source: 'n8n',
      lastUpdated: new Date().toISOString(),
    })
  } catch (error) {
    console.error('❌ Error fetching job openings from n8n:', error)
    
    return NextResponse.json(
      {
        error: 'Connection Error',
        message: error instanceof Error ? error.message : 'Unknown error connecting to n8n',
        details: 'Check that your n8n instance is accessible and the workflow is active.',
        jobs: [],
        source: 'error',
      },
      { status: 500 }
    )
  }
}

