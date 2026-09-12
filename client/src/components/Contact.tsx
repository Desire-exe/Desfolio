import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Check, Loader2, MessageCircle } from 'lucide-react'
import { SectionEyebrow } from './SectionEyebrow'

type Status = 'idle' | 'loading' | 'ok' | 'error'

const API_BASE = import.meta.env.VITE_API_URL ?? ''

export function Contact() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())

    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('failed')
      setStatus('ok')
      form.reset()
      setTimeout(() => setStatus('idle'), 4000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <section id="contact" className="relative px-6 md:px-12 py-24 md:py-32 z-10">
      <div className="max-w-3xl mx-auto">
        <SectionEyebrow number="04" label="Contact" />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-serif italic text-3xl md:text-5xl text-text leading-tight mb-4">
            Let's build something.
          </h2>
          <p className="text-sm md:text-base text-text-muted mb-10">
            Open for freelance and full-time roles. Drop a line.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="name"
                required
                placeholder="Name"
                className="w-full px-4 py-3 rounded-md bg-surface/60 border border-border text-text placeholder:text-text-muted/60 focus:border-accent/60 focus:outline-none transition-colors font-mono text-sm"
              />
              <input
                name="email"
                type="email"
                required
                placeholder="Email"
                className="w-full px-4 py-3 rounded-md bg-surface/60 border border-border text-text placeholder:text-text-muted/60 focus:border-accent/60 focus:outline-none transition-colors font-mono text-sm"
              />
            </div>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Message"
              className="w-full px-4 py-3 rounded-md bg-surface/60 border border-border text-text placeholder:text-text-muted/60 focus:border-accent/60 focus:outline-none transition-colors font-mono text-sm resize-none"
            />

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="submit"
                disabled={status === 'loading' || status === 'ok'}
                className="group inline-flex items-center gap-2 px-5 py-3 rounded-md bg-accent text-bg font-medium text-sm hover:shadow-ember transition-shadow duration-150 disabled:opacity-60"
              >
                {status === 'loading' && <><Loader2 size={16} className="animate-spin" /> Sending</>}
                {status === 'ok' && <><Check size={16} /> Sent</>}
                {status === 'error' && <>Try again</>}
                {status === 'idle' && <>Send message <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" /></>}
              </button>

              <a
                href="https://wa.me/2348161262401"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-border text-text text-sm hover:bg-surface transition-colors"
              >
                <MessageCircle size={16} strokeWidth={1.75} />
                Chat on WhatsApp
              </a>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}