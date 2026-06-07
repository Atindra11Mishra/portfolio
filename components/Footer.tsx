import { Github, Linkedin, Mail, Twitter } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/[0.05] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-7 h-7 rounded-lg bg-violet-500/20 border border-violet-500/30 flex items-center justify-center text-sm font-black text-violet-300">
                A
              </span>
              <h3 className="text-sm font-semibold text-neutral-300">Atindra Mishra</h3>
            </div>
            <p className="text-neutral-500 text-xs font-mono">AI Engineer — Agentic Systems & LLMOps</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-mono text-neutral-500 mb-4 uppercase tracking-[0.15em]">// quick links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-neutral-500 hover:text-neutral-100 transition-colors text-sm">Home</a></li>
              <li><a href="#projects" className="text-neutral-500 hover:text-neutral-100 transition-colors text-sm">Projects</a></li>
              <li><a href="#experience" className="text-neutral-500 hover:text-neutral-100 transition-colors text-sm">Experience</a></li>
              <li><a href="#contact" className="text-neutral-500 hover:text-neutral-100 transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-xs font-mono text-neutral-500 mb-4 uppercase tracking-[0.15em]">// connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/Atindra11Mishra/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-violet-400 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/atindra-mishra-ab0577202/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-violet-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/AtinMishra11"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-violet-400 transition-colors"
                aria-label="Twitter / X"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="mailto:atin.mishra11@gmail.com"
                className="text-neutral-500 hover:text-violet-400 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/[0.05] pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-600 font-mono">
            <p>Built with Next.js, Tailwind CSS v4</p>
            <p>&copy; {currentYear} Atindra Mishra. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
