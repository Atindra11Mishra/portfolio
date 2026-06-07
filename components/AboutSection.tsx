export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs font-mono text-violet-400 tracking-[0.2em] uppercase mb-3">// about</p>
        <h2 className="text-4xl font-bold text-neutral-100 tracking-tight mb-12">About Me</h2>

        <div className="max-w-none text-neutral-300">
          <p className="text-lg leading-relaxed mb-6">
            I&apos;m an AI Engineer focused on building systems that are production-ready from the first commit.
            My work spans multi-agent orchestration with LangGraph, eval-driven RAG pipelines, and the LLMOps
            infrastructure that keeps AI applications reliable at scale.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            At Invasion Media I lead AI feature development architecting LangGraph agent pipelines,
            wiring LangSmith observability, and running systematic evals before any model change ships.
          </p>

          <p className="text-lg leading-relaxed text-neutral-400">
            I believe the gap between an &ldquo;AI demo&rdquo; and an &ldquo;AI product&rdquo; is eval coverage and observability.
            That&apos;s where I spend my energy.
          </p>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-14">
          <div className="bg-neutral-900/60 border border-white/[0.06] rounded-xl p-6 hover:border-violet-500/25 transition-colors duration-200">
            <div className="text-3xl font-black font-mono tabular-nums text-violet-400 mb-2">3+</div>
            <div className="text-neutral-400 text-sm">Projects Deployed</div>
          </div>
          <div className="bg-neutral-900/60 border border-white/[0.06] rounded-xl p-6 hover:border-violet-500/25 transition-colors duration-200">
            <div className="text-3xl font-black font-mono tabular-nums text-violet-400 mb-2">2+</div>
            <div className="text-neutral-400 text-sm">Years in Software Dev</div>
          </div>
          <div className="bg-neutral-900/60 border border-white/[0.06] rounded-xl p-6 hover:border-violet-500/25 transition-colors duration-200">
            <div className="text-3xl font-black font-mono tabular-nums text-violet-400 mb-2">20+</div>
            <div className="text-neutral-400 text-sm">AI & Web Frameworks</div>
          </div>
        </div>
      </div>
    </section>
  )
}
