'use client'

import { Button } from '@/components/ui/button'
import { Mail, Linkedin, Github, Download, Twitter } from 'lucide-react'
import { RESUME_URL } from '@/lib/constants'

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <p className="text-xs font-mono text-violet-400 tracking-[0.2em] uppercase mb-4">// contact</p>
        <h2 className="text-5xl sm:text-6xl font-black text-white tracking-tight mb-4">Ready to Connect?</h2>
        <p className="text-lg text-neutral-400 mb-12 max-w-2xl mx-auto">
          Open to AI Engineer roles, agentic systems collaborations, and discussions about LLMOps, evals, and production AI architecture.
        </p>

        {/* Quick Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="inline-block">
            <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-violet-600 to-violet-700 hover:from-violet-500 hover:to-violet-600 text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-violet-500/25 transition-all">
              <Download className="h-5 w-5 mr-2" />
              Download Resume
            </Button>
          </a>
          <a href="mailto:atin.mishra11@gmail.com" className="inline-block">
            <Button size="lg" variant="outline" className="w-full sm:w-auto border border-white/10 text-neutral-300 hover:bg-white/5 hover:border-violet-500/30 px-8 py-6 text-lg font-semibold rounded-lg transition-all">
              <Mail className="h-5 w-5 mr-2" />
              Email Me
            </Button>
          </a>
        </div>

        {/* Social Links Grid */}
        <div className="mb-16">
          <p className="text-neutral-600 text-xs font-mono mb-6 uppercase tracking-[0.15em]">// or reach me on</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <a
              href="mailto:atin.mishra11@gmail.com"
              className="group flex flex-col items-center justify-center gap-3 p-6 bg-neutral-900/60 border border-white/[0.06] rounded-xl hover:border-violet-500/25 hover:bg-neutral-900 transition-all duration-300 hover:-translate-y-1"
            >
              <Mail className="h-6 w-6 text-neutral-500 group-hover:text-violet-400 transition-colors" />
              <span className="text-sm font-medium text-neutral-400 group-hover:text-neutral-100 transition-colors">Email</span>
            </a>
            <a
              href="https://www.linkedin.com/in/atindra-mishra-ab0577202/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center gap-3 p-6 bg-neutral-900/60 border border-white/[0.06] rounded-xl hover:border-violet-500/25 hover:bg-neutral-900 transition-all duration-300 hover:-translate-y-1"
            >
              <Linkedin className="h-6 w-6 text-neutral-500 group-hover:text-violet-400 transition-colors" />
              <span className="text-sm font-medium text-neutral-400 group-hover:text-neutral-100 transition-colors">LinkedIn</span>
            </a>
            <a
              href="https://github.com/Atindra11Mishra/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center gap-3 p-6 bg-neutral-900/60 border border-white/[0.06] rounded-xl hover:border-violet-500/25 hover:bg-neutral-900 transition-all duration-300 hover:-translate-y-1"
            >
              <Github className="h-6 w-6 text-neutral-500 group-hover:text-violet-400 transition-colors" />
              <span className="text-sm font-medium text-neutral-400 group-hover:text-neutral-100 transition-colors">GitHub</span>
            </a>
            <a
              href="https://x.com/AtinMishra11"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center gap-3 p-6 bg-neutral-900/60 border border-white/[0.06] rounded-xl hover:border-violet-500/25 hover:bg-neutral-900 transition-all duration-300 hover:-translate-y-1"
            >
              <Twitter className="h-6 w-6 text-neutral-500 group-hover:text-violet-400 transition-colors" />
              <span className="text-sm font-medium text-neutral-400 group-hover:text-neutral-100 transition-colors">Twitter / X</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
