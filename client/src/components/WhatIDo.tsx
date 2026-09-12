import { motion } from 'framer-motion'
import { Code2, Server, Database, Sparkles, Workflow, Palette } from 'lucide-react'
import { SectionEyebrow } from './SectionEyebrow'

const capabilities = [
  { Icon: Code2,    title: 'Full-Stack Dev',   desc: 'React → Node, end to end.' },
  { Icon: Server,   title: 'Backend Systems',  desc: 'APIs, auth, real-time.' },
  { Icon: Database, title: 'Data & Storage',   desc: 'Postgres, SQLite, Prisma.' },
  { Icon: Sparkles, title: 'AI Integration',   desc: 'LLMs into products.' },
  { Icon: Workflow, title: 'Automation',       desc: 'Bots, pipelines, tools.' },
  { Icon: Palette,  title: 'UI / UX',          desc: 'Clean, sharp interfaces.' },
]

export function WhatIDo() {
  return (
    <section id="services" className="relative px-6 md:px-12 py-24 md:py-32 z-10">
      <div className="max-w-6xl mx-auto">
        <SectionEyebrow number="02" label="What I Do" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {capabilities.map(({ Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.06 }}
              className="group rounded-md border border-border bg-surface/40 p-6 hover:border-accent/40 hover:bg-surface/60 transition-colors"
            >
              <Icon
                size={20}
                strokeWidth={1.75}
                className="text-accent mb-4 group-hover:scale-110 transition-transform duration-300"
              />
              <h3 className="font-sans text-sm md:text-base text-text">{title}</h3>
              <p className="text-xs md:text-sm text-text-muted mt-1.5">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}