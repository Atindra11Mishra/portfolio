import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Atindra Mishra | AI Engineer',
  description: 'AI Engineer specializing in agentic systems, LLMOps, and production-grade AI infrastructure. LangGraph, RAG, evals, and full-stack expertise.',
  keywords: ['AI Engineer', 'LLM', 'RAG', 'LangGraph', 'LLMOps', 'Agentic AI', 'FastAPI', 'Next.js'],
  authors: [{ name: 'Atindra Mishra' }],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth dark bg-neutral-950">
      <body className="font-sans antialiased bg-neutral-950 text-neutral-100">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
