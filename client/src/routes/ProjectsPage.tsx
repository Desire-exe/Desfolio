import { motion } from 'framer-motion'
import { SectionEyebrow } from '@/components/SectionEyebrow'
import { ProjectCard } from '@/components/ProjectCard'
import { projects, labs } from '@/data/projects'
import { usePageTitle } from '@/hooks/usePageTitle'

export function ProjectsPage() {
  usePageTitle('Projects')

  return (
    <section className="relative px-6 md:px-12 pt-32 md:pt-40 pb-24 md:pb-32 z-10">
      <div className="max-w-6xl mx-auto">
        <SectionEyebrow number="01" label="All Projects" />

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif italic text-4xl md:text-6xl text-text leading-tight mb-16"
        >
          Selected work.
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Labs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="font-mono text-xs text-text-muted tracking-[0.2em] uppercase">
              Labs · smaller experiments
            </span>
            <span className="flex-1 h-px bg-border" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {labs.map((lab) => (
              <div
                key={lab.title}
                className="rounded-md border border-border bg-surface/40 p-5 hover:border-accent/30 transition-colors"
              >
                <h4 className="font-sans text-sm text-text">{lab.title}</h4>
                <p className="text-xs text-text-muted leading-relaxed mt-2">
                  {lab.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {lab.stack.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-[10px] px-1.5 py-0.5 rounded border border-border text-text-muted"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}