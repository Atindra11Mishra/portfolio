'use client'

import { useEffect, useRef, useState } from 'react'
import { experience } from '@/lib/constants'

export default function ExperienceSection() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set())
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute('data-idx'))
            setVisibleCards((prev) => new Set([...prev, idx]))
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">

        {/* Work Experience */}
        <div>
          <p className="text-xs font-mono text-violet-400 tracking-[0.2em] uppercase mb-3">// experience</p>
          <h2 className="text-4xl font-bold text-neutral-100 tracking-tight mb-3">Work History</h2>
          <p className="text-neutral-500 text-base mb-12">From freelance web development to production AI systems</p>

          {/* Timeline wrapper — single continuous line */}
          <div className="relative">
            {/* Single line spanning the full height of all cards */}
            <div className="absolute left-[5px] sm:left-[7px] top-5 bottom-5 w-px bg-gradient-to-b from-violet-500 via-violet-400/50 to-transparent" />

            <div className="space-y-8">
              {experience.map((exp, idx) => {
                const isVisible = visibleCards.has(idx)
                return (
                  <div
                    key={idx}
                    ref={(el) => { cardRefs.current[idx] = el }}
                    data-idx={idx}
                    className="relative pl-9 sm:pl-11"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
                      transition: `opacity 0.6s ease, transform 0.6s ease`,
                      transitionDelay: isVisible ? `${idx * 90}ms` : '0ms',
                    }}
                  >
                    {/* Animated dot — scales in after card starts appearing */}
                    <div
                      className="absolute left-0 sm:left-0.5 top-[22px] w-3 h-3 rounded-full bg-gradient-to-br from-violet-400 to-violet-600 ring-4 ring-neutral-950 z-10"
                      style={{
                        transform: isVisible ? 'scale(1)' : 'scale(0)',
                        opacity: isVisible ? 1 : 0,
                        transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease',
                        transitionDelay: isVisible ? `${idx * 90 + 180}ms` : '0ms',
                      }}
                    />

                    <div className="bg-neutral-900/60 rounded-xl p-6 sm:p-7 border border-white/[0.06] hover:border-violet-500/25 transition-colors duration-300 group">
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-3">
                        <h3 className="text-xl font-bold text-white group-hover:text-violet-300 transition-colors">
                          {exp.role}
                        </h3>
                        <span className="text-xs font-mono text-violet-400 bg-violet-500/10 px-3 py-1 rounded-md border border-violet-500/20 w-fit flex-shrink-0">
                          {exp.period}
                        </span>
                      </div>

                      <p className="text-violet-300/70 font-semibold mb-2 text-base">{exp.company}</p>
                      <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      {/* Metrics */}
                      {exp.metrics && (
                        <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/[0.05]">
                          <div>
                            <p className="text-xs font-mono text-neutral-500 uppercase tracking-wider mb-1">Team Size</p>
                            <p className="text-sm font-mono font-bold text-neutral-100">{exp.metrics.teamSize}</p>
                          </div>
                          <div>
                            <p className="text-xs font-mono text-neutral-500 uppercase tracking-wider mb-1">Projects</p>
                            <p className="text-sm font-mono font-bold text-neutral-100">{exp.metrics.projects}</p>
                          </div>
                          <div>
                            <p className="text-xs font-mono text-neutral-500 uppercase tracking-wider mb-1">Impact</p>
                            <p className="text-sm font-mono font-bold text-neutral-100">{exp.metrics.impact}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>


      </div>
    </section>
  )
}
