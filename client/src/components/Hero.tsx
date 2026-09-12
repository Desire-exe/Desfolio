import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Github } from 'lucide-react'
import { fadeUp, letter, letterContainer, stagger } from '@/lib/motion'
import { Typewriter } from './Typewriter'
import { useMagnetic } from '@/hooks/useMagnetic'

export function Hero() {
  const ctaRef = useMagnetic<HTMLAnchorElement>(0.2)
  const ghRef = useMagnetic<HTMLAnchorElement>(0.15)

  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-12 pt-28 pb-20 z-10">
      <motion.div
        variants={stagger(0.12)}
        initial="hidden"
        animate="show"
        className="relative max-w-4xl mx-auto w-full"
      >
        <motion.p
          variants={fadeUp}
          className="font-mono text-xs md:text-sm text-accent mb-8"
        >
          <Typewriter text="> full stack web developer · nigeria" speed={30} delay={400} />
        </motion.p>

        <motion.h1
          variants={letterContainer}
          initial="hidden"
          animate="show"
          className="font-serif italic text-5xl md:text-7xl lg:text-8xl leading-[0.95] select-none bg-clip-text text-transparent animate-gradient"
          style={{
            backgroundImage:
              'linear-gradient(90deg, #F5EDEE 0%, #FF6B4A 35%, #FF3B3B 55%, #F5EDEE 100%)',
            backgroundSize: '250% 100%',
            filter: 'drop-shadow(0 0 30px rgba(255,59,59,0.15))',
          }}
        >
          {'From database'.split('').map((ch, i) => (
            <motion.span key={i} variants={letter} className="inline-block">
              {ch === ' ' ? '\u00A0' : ch}
            </motion.span>
          ))}
          <br />
          {'to design.'.split('').map((ch, i) => (
            <motion.span key={`b-${i}`} variants={letter} className="inline-block">
              {ch === ' ' ? '\u00A0' : ch}
            </motion.span>
          ))}
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 1.1 }}
          className="mt-8 h-px w-24 bg-accent origin-left"
          style={{ boxShadow: '0 0 16px rgba(255,59,59,0.55)' }}
        />

        <motion.p
          variants={fadeUp}
          className="font-sans text-base md:text-lg text-text-muted mt-8 max-w-xl leading-relaxed"
        >
          <Typewriter
            text="I build web products end to end · React on the front · Node on the back · real users in between."
            speed={18}
            delay={1400}
          />
        </motion.p>

        <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mt-12">
          <Link
            ref={ctaRef as unknown as React.Ref<HTMLAnchorElement>}
            to="/projects"
            className="group inline-flex items-center gap-2 px-5 py-3 rounded-md bg-accent text-bg font-medium text-sm hover:shadow-ember transition-shadow duration-150 will-change-transform"
          >
            View work
            <ArrowRight
              size={16}
              className="transition-transform duration-150 group-hover:translate-x-0.5"
            />
          </Link>

          <a
            ref={ghRef}
            href="https://github.com/Desire-exe"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-border text-text text-sm hover:bg-surface transition-colors will-change-transform"
          >
            <Github size={16} strokeWidth={1.75} />
            GitHub
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}