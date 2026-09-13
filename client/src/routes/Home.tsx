import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Hero } from '@/components/Hero'
import { ProjectCard } from '@/components/ProjectCard'
import { SectionEyebrow } from '@/components/SectionEyebrow'
import { projects } from '@/data/projects'
import { usePageTitle } from '@/hooks/usePageTitle'

export function Home() {
  usePageTitle()
  const featured = projects.slice(0, 2)

  return (
    <>
      <Hero />

      {/* Featured projects */}
      <section id="selected-work" className="relative px-6 md:px-12 py-24 md:py-32 z-10 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <SectionEyebrow number="01" label="Selected Work" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featured.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 flex justify-center"
          >
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-md border border-border text-text text-sm hover:bg-surface hover:border-accent/40 transition-colors"
            >
              See all projects
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About teaser */}
      <section className="relative px-6 md:px-12 py-24 md:py-32 z-10">
        <div className="max-w-4xl mx-auto">
          <SectionEyebrow number="02" label="About" />
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif italic text-2xl md:text-4xl text-text leading-snug"
          >
            I didn't start with expensive hardware or a clear roadmap. I started
            by breaking things, fixing them, and refusing to leave a problem
            unsolved.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8"
          >
            <Link
              to="/about"
              className="group inline-flex items-center gap-2 font-mono text-sm text-accent hover:text-accent-soft transition-colors"
            >
              Read more
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative px-6 md:px-12 py-24 md:py-32 z-10">
        <div className="max-w-4xl mx-auto">
          <SectionEyebrow number="03" label="Contact" />
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif italic text-3xl md:text-5xl text-text leading-tight mb-6"
          >
            Let's build something.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-text-muted mb-8"
          >
            Open for freelance and full-time roles.
          </motion.p>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 px-5 py-3 rounded-md bg-accent text-bg font-medium text-sm hover:shadow-ember transition-shadow duration-150"
          >
            Get in touch
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>
    </>
  )
}