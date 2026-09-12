import { motion } from 'framer-motion'
import { SectionEyebrow } from './SectionEyebrow'
import { stack } from '@/data/stack'

export function Stack() {
  return (
    <section id="stack" className="relative px-6 md:px-12 py-24 md:py-32 z-10">
      <div className="max-w-4xl mx-auto">
        <SectionEyebrow number="04" label="Stack" />

        <div className="space-y-12">
          {stack.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
            >
              {/* Category label */}
              <h3 className="font-mono text-xs text-accent tracking-[0.25em] uppercase mb-4">
                {group.label}
              </h3>

              {/* Animated gradient strength bar */}
              <div className="relative h-px w-full bg-border mb-5 overflow-hidden">
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.1,
                    ease: [0.22, 1, 0.36, 1],
                    delay: i * 0.08 + 0.2,
                  }}
                  className="absolute inset-y-0 left-0 origin-left bg-gradient-animated"
                  style={{
                    width: `${group.strength * 100}%`,
                    boxShadow: '0 0 12px rgba(255,59,59,0.5)',
                  }}
                />
              </div>

              {/* Tech chips */}
              <div className="flex flex-wrap gap-2">
                {group.items.map((item, j) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.35,
                      ease: [0.22, 1, 0.36, 1],
                      delay: i * 0.08 + j * 0.03 + 0.3,
                    }}
                    className="font-mono text-xs md:text-sm px-3 py-1.5 rounded-md border border-border bg-surface/40 text-text-muted hover:text-text hover:border-accent/40 hover:bg-surface transition-all duration-200 cursor-default"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}