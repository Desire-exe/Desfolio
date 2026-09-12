import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Home } from 'lucide-react'
import { usePageTitle } from '@/hooks/usePageTitle'

export function NotFound() {
  usePageTitle('404')

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 z-10">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-2xl mx-auto text-center"
      >
        <p className="font-mono text-xs text-accent tracking-[0.25em] uppercase mb-6">
          error 404
        </p>

        <h1
          className="font-serif italic text-7xl md:text-9xl leading-none bg-clip-text text-transparent animate-gradient mb-8"
          style={{
            backgroundImage:
              'linear-gradient(90deg, #FF3B3B 0%, #FF6B4A 50%, #FF3B3B 100%)',
            backgroundSize: '200% 100%',
          }}
        >
          404.
        </h1>

        <p className="text-base md:text-lg text-text-muted leading-relaxed mb-12">
          This page burnt out. Try somewhere else.
        </p>

        <div className="flex flex-wrap gap-3 justify-center">
          <button
            onClick={() => window.history.back()}
            className="group inline-flex items-center gap-2 px-5 py-3 rounded-md border border-border text-text text-sm hover:bg-surface transition-colors"
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-0.5" />
            Go back
          </button>

          <Link
            to="/"
            className="group inline-flex items-center gap-2 px-5 py-3 rounded-md bg-accent text-bg font-medium text-sm hover:shadow-ember transition-shadow duration-150"
          >
            <Home size={16} />
            Return home
          </Link>
        </div>

        <p className="font-mono text-[10px] text-text-muted/60 mt-12 tracking-widest">
          // 404 · not_found
        </p>
      </motion.div>
    </section>
  )
}