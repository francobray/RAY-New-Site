import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json(
    { 
      status: 'ok',
      timestamp: new Date().toISOString(),
      service: 'ray-new-site'
    },
    { status: 200 }
  )
}

// Disable caching for health checks
export const dynamic = 'force-dynamic'
export const revalidate = 0

