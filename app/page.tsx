import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import SkillsSection from '@/components/SkillsSection'
import ProjectsSection from '@/components/ProjectsSection'
import ExperienceSection from '@/components/ExperienceSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Page() {
  return (
    <main
      className="min-h-screen"
      style={{ background: `radial-gradient(ellipse 75% 55% at 80% 0%, rgba(139,92,246,0.26) 0%, transparent 65%), radial-gradient(ellipse 60% 50% at 10% 95%, rgba(99,102,241,0.22) 0%, transparent 65%), radial-gradient(ellipse 45% 40% at 12% 42%, rgba(245,158,11,0.07) 0%, transparent 60%), oklch(0.09 0 0)` }}
    >
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
