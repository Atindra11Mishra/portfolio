import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github, Star } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  category: string
  techStack: string[]
  highlights: string[]
  impact?: { metric: string; detail: string }
  stars?: number
  links: {
    demo: string
    github: string
  }
}

export default function ProjectCard({
  title,
  description,
  category,
  techStack,
  highlights,
  impact,
  stars,
  links,
}: ProjectCardProps) {
  return (
    <div className="rounded-xl border bg-neutral-900/80 border-violet-500/30 hover:border-violet-400/60 shadow-lg shadow-violet-500/5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
      <div className="p-6 sm:p-8">
        {/* Header */}
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-neutral-100 mb-1.5 group-hover:text-violet-300 transition-colors">{title}</h3>
            <p className="text-xs font-mono text-violet-400/70">{category}</p>
          </div>
          {stars && (
            <div className="flex items-center gap-1 bg-neutral-800/60 px-2.5 py-1.5 rounded-lg border border-white/[0.06] whitespace-nowrap">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="text-xs font-mono text-neutral-300">{stars}</span>
            </div>
          )}
        </div>

        {/* Impact Metric — Amber for eye-catching hierarchy */}
        {impact && (
          <div className="mb-6 p-4 rounded-lg bg-amber-500/[0.06] border border-amber-500/20">
            <p className="text-xs font-mono text-amber-500/60 mb-1 uppercase tracking-wider">Impact</p>
            <p className="text-lg font-black font-mono tabular-nums text-amber-300">{impact.metric}</p>
            <p className="text-sm text-neutral-500 mt-0.5">{impact.detail}</p>
          </div>
        )}

        {/* Description */}
        <p className="text-neutral-400 text-sm leading-relaxed mb-6">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="mb-6">
          <p className="text-xs font-mono text-neutral-500 mb-3 uppercase tracking-wider">Stack</p>
          <div className="flex flex-wrap gap-1.5">
            {techStack.map((tech) => (
              <Badge key={tech} variant="secondary" className="bg-neutral-800/80 text-neutral-400 border-neutral-700/50 text-xs font-mono">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-6">
          <p className="text-xs font-mono text-neutral-500 mb-3 uppercase tracking-wider">Key Features</p>
          <ul className="space-y-2">
            {highlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-neutral-400">
                <span className="text-violet-400 font-mono mt-0.5 flex-shrink-0">→</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-2 pt-2">
          {links.demo !== '#' ? (
            <Button size="sm" className="bg-violet-600 hover:bg-violet-500 text-white font-semibold text-xs" asChild>
              <a href={links.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-3.5 w-3.5 mr-1.5" />
                Demo
              </a>
            </Button>
          ) : (
            <Button size="sm" className="bg-violet-600 hover:bg-violet-500 text-white font-semibold text-xs" disabled>
              <ExternalLink className="h-3.5 w-3.5 mr-1.5" />
              Demo
            </Button>
          )}
          {links.github !== '#' ? (
            <Button size="sm" variant="outline" className="border-white/10 text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800 text-xs" asChild>
              <a href={links.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-3.5 w-3.5 mr-1.5" />
                Code
              </a>
            </Button>
          ) : (
            <Button size="sm" variant="outline" className="border-white/10 text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800 text-xs" disabled>
              <Github className="h-3.5 w-3.5 mr-1.5" />
              Code
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
