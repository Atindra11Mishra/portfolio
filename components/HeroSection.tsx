import { Button } from '@/components/ui/button'
import { heroStats, RESUME_URL } from '@/lib/constants'
import { ArrowRight, Briefcase, Calendar, Layers, Star } from 'lucide-react'

const iconMap: Record<string, any> = {
  briefcase: Briefcase,
  calendar: Calendar,
  layers: Layers,
  star: Star
}

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Badges row */}
        <div className="mb-8 flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-semibold uppercase tracking-wider">
              Open to Opportunities
            </span>
          </div>
          <span className="px-4 py-2 rounded-full bg-neutral-900 border border-white/[0.06] text-neutral-500 text-xs font-mono">
            Working on: Agent Evals (Open Source)
          </span>
        </div>

        {/* Name + Headline */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-gradient-to-r from-violet-500 to-transparent" />
            <p className="text-base font-mono tracking-[0.18em] uppercase">
              <span className="text-neutral-100 font-semibold">Atindra</span>
              <span className="text-violet-400 font-semibold"> Mishra</span>
            </p>
            <span className="h-px w-8 bg-gradient-to-l from-violet-500 to-transparent" />
          </div>
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white leading-tight tracking-tighter">
            AI Engineer &
            <br />
            <span className="bg-gradient-to-r from-white via-violet-200 to-violet-400 bg-clip-text text-transparent">
              Systems Builder
            </span>
          </h1>
        </div>

        {/* Keyword line */}
        <p className="text-sm sm:text-base text-neutral-500 mb-4 font-mono tracking-wide">
          Agentic AI &nbsp;·&nbsp; LLMOps &amp; Evals &nbsp;·&nbsp; Production RAG &nbsp;·&nbsp; Full-Stack
        </p>

        <p className="text-neutral-300 mb-10 max-w-2xl text-lg leading-relaxed">
          I build AI systems that ship: multi-agent orchestration with LangGraph, eval-driven RAG pipelines,
          and LLMOps infrastructure with observability from day one.
        </p>

        {/* Stat Boxes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
          {heroStats.map((stat) => {
            const IconComponent = iconMap[stat.icon]
            return (
              <div
                key={stat.label}
                className="group p-4 md:p-5 rounded-xl bg-neutral-900/60 border border-white/[0.06] hover:border-violet-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/5 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-3">
                  {IconComponent && <IconComponent className="w-5 h-5 text-violet-400 group-hover:scale-110 transition-transform" />}
                </div>
                <p className="text-3xl md:text-4xl font-black font-mono tabular-nums text-white mb-1 leading-none">{stat.value}</p>
                <p className="text-neutral-500 text-sm font-medium">{stat.label}</p>
              </div>
            )
          })}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <a href="#projects" className="inline-block">
            <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-violet-600 to-violet-700 hover:from-violet-500 hover:to-violet-600 text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-violet-500/25 transition-all">
              View My Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
          <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="inline-block">
            <Button size="lg" className="w-full sm:w-auto bg-neutral-900 hover:bg-neutral-800 text-white border border-white/[0.06] px-8 py-6 text-lg font-semibold rounded-lg transition-all">
              Download Resume
            </Button>
          </a>
          <a href="#contact" className="inline-block">
            <Button size="lg" variant="outline" className="w-full sm:w-auto border border-white/10 text-neutral-300 hover:bg-white/5 hover:border-violet-500/30 px-8 py-6 text-lg font-semibold rounded-lg transition-all">
              Get in Touch
            </Button>
          </a>
        </div>

        {/* Featured Tech */}
        <div className="mb-12 p-5 rounded-xl bg-neutral-900/40 border border-white/[0.04]">
          <p className="text-neutral-600 text-xs font-mono mb-3 uppercase tracking-[0.15em]">// featured stack</p>
          <div className="flex flex-wrap gap-2">
            {['LangGraph Agents', 'LLMOps & Evals', 'Python & FastAPI', 'MCP Protocol', 'React & Next.js'].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 bg-neutral-800/80 border border-white/[0.05] rounded-md text-xs font-mono text-neutral-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="text-center">
          <p className="text-neutral-600 text-xs mb-3 font-mono">scroll to explore</p>
          <div className="flex justify-center">
            <div className="w-5 h-9 border border-neutral-700 rounded-full flex items-center justify-center animate-bounce">
              <div className="w-1 h-1.5 bg-neutral-600 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
