import { motion } from 'framer-motion'

type Props = {
  number: string
  label: string
}

export function SectionEyebrow({ number, label }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="flex items-center gap-3 mb-12 md:mb-16"
    >
      <span className="font-mono text-xs md:text-sm text-accent">[{number}]</span>
      <span className="font-mono text-xs md:text-sm text-text-muted tracking-[0.2em] uppercase">
        {label}
      </span>
      <span className="flex-1 h-px bg-border" />
    </motion.div>
  )
}