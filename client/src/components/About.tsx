import { motion } from 'framer-motion'
import { MapPin, Crown, Shield } from 'lucide-react'
import { SectionEyebrow } from './SectionEyebrow'

export function About() {
  return (
    <section id="about" className="relative px-6 md:px-12 py-24 md:py-32 z-10">
      <div className="max-w-4xl mx-auto">
        <SectionEyebrow number="03" label="About" />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
        <div className="mb-6">
  <h3 className="font-serif italic text-3xl md:text-4xl text-text">
    DΞSIRΞ-ΞXΞ
  </h3>
  <p className="font-mono text-xs text-text-muted mt-2">
    also known as Daramola Daniel · Full Stack Developer
  </p>
  <p className="font-mono text-xs text-text-muted mt-1 inline-flex items-center gap-1">
    <MapPin size={12} /> Nigeria
  </p>
</div>
          <div className="space-y-5 text-sm md:text-base text-text-muted leading-relaxed">
            <p>
              I didn't start with expensive hardware or a clear roadmap. I started
              by breaking things, fixing them, and refusing to leave a problem
              unsolved.
            </p>
            <p>
              I've learned tech by actually using it — building WhatsApp
              automation, Telegram tools, AI integrations, and web apps. Real
              systems, real bugs, real solutions. My biggest project,{' '}
              <span className="text-text">Desire-eXe</span>, started as a small
              idea and grew into a multi-tenant WhatsApp automation platform.
            </p>
            <p>
              What makes me different: I don't just want to know how to code. I
              want to understand{' '}
              <span className="text-text">
                how systems work underneath, why they break, and how to make them
                better.
              </span>
            </p>
          </div>

          <blockquote className="mt-10 pl-5 border-l-2 border-accent">
            <p className="font-serif italic text-lg md:text-xl text-text leading-snug">
              I build to learn. I break to understand. I fix to grow.
            </p>
            <cite className="font-mono text-xs text-text-muted not-italic block mt-3">
              — DΞSIRΞ-ΞXΞ
            </cite>
          </blockquote>

          {/* Beyond Code */}
          <div className="mt-16 pt-12 border-t border-border">
            <h4 className="font-mono text-xs text-accent tracking-[0.2em] uppercase mb-8">
              Beyond Code
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <Crown size={20} strokeWidth={1.75} className="text-accent shrink-0 mt-1" />
                <div>
                  <h5 className="font-sans text-sm text-text">Chess Instructor</h5>
                  <p className="font-mono text-xs text-text-muted mt-1">
                    Hallstarz College
                  </p>
                  <p className="text-sm text-text-muted leading-relaxed mt-2">
                    Teaching beginners and intermediate players — openings,
                    tactics, and endgames. Built lesson plans and ran a
                    school-wide chess club.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Shield size={20} strokeWidth={1.75} className="text-accent shrink-0 mt-1" />
                <div>
                  <h5 className="font-sans text-sm text-text">
                    Security & Networking
                  </h5>
                  <p className="font-mono text-xs text-text-muted mt-1">
                    TryHackMe · Pre-Security / Red Team
                  </p>
                  <p className="text-sm text-text-muted leading-relaxed mt-2">
                    Learning offensive-security fundamentals, Linux, and
                    networking — expanding how I think about systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}