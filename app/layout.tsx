import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GitResume — Turn GitHub Activity Into Resume Bullets',
  description: 'Analyze your GitHub commits, PRs, and issues to generate quantified resume achievements with business impact language. Land your next dev job faster.',
  keywords: 'github resume, developer resume, resume builder, github contributions, job search',
  openGraph: {
    title: 'GitResume — Turn GitHub Activity Into Resume Bullets',
    description: 'Analyze your GitHub commits, PRs, and issues to generate quantified resume achievements with business impact language.',
    type: 'website'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="007cd648-d56f-46d2-8c2a-fd0e052576f8"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  )
}
