import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import JobDetail from '@/components/pages/company/JobDetail'
import { type Locale } from '@/lib/i18n'

interface JobDetailPageProps {
  params: { 
    locale: Locale
    jobId: string
  }
}

// This function will fetch the job data server-side
async function getJobById(jobId: string) {
  try {
    // In production, use absolute URL; in development, use localhost
    const baseUrl = process.env.NODE_ENV === 'production' 
      ? 'https://www.rayapp.io' 
      : 'http://localhost:3000'
    
    const response = await fetch(`${baseUrl}/api/job-openings`, {
      cache: 'no-store',
    })
    
    if (!response.ok) {
      return null
    }
    
    const data = await response.json()
    
    if (!data.jobs || !Array.isArray(data.jobs)) {
      return null
    }
    
    // Find the job by ID
    const job = data.jobs.find((j: any) => String(j.id) === jobId)
    return job || null
  } catch (error) {
    console.error('Error fetching job:', error)
    return null
  }
}

export async function generateMetadata({ params }: JobDetailPageProps): Promise<Metadata> {
  const job = await getJobById(params.jobId)
  
  if (!job) {
    return {
      title: 'Job Not Found - RAY Careers',
    }
  }
  
  const title = `${job.title} - RAY Careers`
  const description = job.description || `Join RAY as a ${job.title}`
  
  return {
    title,
    description,
    alternates: {
      canonical: `https://www.rayapp.io/${params.locale}/careers/${params.jobId}`
    },
    openGraph: {
      title,
      description,
      url: `https://www.rayapp.io/${params.locale}/careers/${params.jobId}`,
      type: 'website',
    },
  }
}

export default async function JobDetailPage({ params }: JobDetailPageProps) {
  const job = await getJobById(params.jobId)
  
  if (!job) {
    notFound()
  }
  
  return <JobDetail job={job} locale={params.locale} />
}

