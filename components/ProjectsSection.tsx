import { projects } from '@/lib/constants'
import ProjectCard from './ProjectCard'

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-mono text-violet-400 tracking-[0.2em] uppercase mb-3">// projects</p>
        <h2 className="text-4xl font-bold text-neutral-100 tracking-tight mb-10">Projects</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
