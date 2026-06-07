import { Badge } from '@/components/ui/badge'
import { featuredSkills, skills } from '@/lib/constants'

export default function SkillsSection() {
  const aiCategories = ['Agentic AI & Orchestration', 'AI Evaluation & Observability', 'LLMs & Model Infrastructure']

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <p className="text-xs font-mono text-violet-400 tracking-[0.2em] uppercase mb-3">// skills</p>
          <h2 className="text-4xl font-bold text-neutral-100 tracking-tight mb-3">
            Core Competencies
          </h2>
          <p className="text-neutral-500 text-base">Depth where it matters, breadth across the stack</p>
        </div>

        {/* Featured Skills — Tier Cards */}
        <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-4">
          {featuredSkills.map((skill) => (
            <div
              key={skill.name}
              className="group p-5 rounded-xl bg-neutral-900/60 border border-white/[0.06] hover:border-violet-500/30 hover:bg-neutral-900 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-base font-semibold text-neutral-100">{skill.name}</h3>
                <span className={`text-xs font-mono px-2 py-0.5 rounded-md border flex-shrink-0 ml-3 ${
                  skill.tier === 'Expert'
                    ? 'bg-violet-500/15 text-violet-300 border-violet-500/25'
                    : 'bg-neutral-800 text-neutral-400 border-neutral-700'
                }`}>
                  {skill.tier}
                </span>
              </div>
              <p className="text-sm text-neutral-500 leading-relaxed">{skill.detail}</p>
            </div>
          ))}
        </div>

        {/* Full Skills by Category */}
        <div>
          <h3 className="text-xl font-semibold text-neutral-100 mb-8 tracking-tight">Full Technology Stack</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {skills.map((skillGroup) => {
              const isAI = aiCategories.includes(skillGroup.category)
              return (
                <div
                  key={skillGroup.category}
                  className={`rounded-xl p-6 border transition-all duration-300 group ${
                    isAI
                      ? 'bg-violet-950/20 border-violet-500/15 hover:border-violet-500/30 hover:shadow-lg hover:shadow-violet-500/5'
                      : 'bg-neutral-900/50 border-white/[0.05] hover:border-white/10'
                  }`}
                >
                  <h4 className={`text-sm font-semibold mb-4 transition-colors ${
                    isAI ? 'text-violet-300 group-hover:text-violet-200' : 'text-neutral-300 group-hover:text-neutral-100'
                  }`}>
                    {skillGroup.category}
                  </h4>

                  <div className="flex flex-wrap gap-1.5">
                    {skillGroup.items.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className={`text-xs font-mono cursor-default transition-all duration-200 ${
                          isAI
                            ? 'bg-violet-500/8 border-violet-500/20 text-violet-300 hover:bg-violet-500/15'
                            : 'bg-neutral-800/80 border-neutral-700/50 text-neutral-400 hover:bg-neutral-800'
                        }`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
