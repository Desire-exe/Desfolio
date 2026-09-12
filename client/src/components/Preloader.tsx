import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function Preloader() {
  const [show, setShow] = useState(() => {
    if (typeof window === 'undefined') return false
    return !sessionStorage.getItem('desfolio:preloaded')
  })
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (!show) return

    let p = 0
    const tick = setInterval(() => {
      p += Math.random() * 18 + 6
      if (p >= 100) {
        p = 100
        clearInterval(tick)
        setTimeout(() => {
          setShow(false)
          sessionStorage.setItem('desfolio:preloaded', '1')
        }, 400)
      }
      setProgress(Math.min(p, 100))
    }, 100)
    return () => clearInterval(tick)
  }, [show])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[200] bg-bg flex flex-col items-center justify-center"
        >
          <motion.img
            src="/logo-light.png"
            alt="DΞSIRΞ-ΞXΞ"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="h-16 md:h-20 w-auto mb-8"
            style={{ filter: 'drop-shadow(0 0 24px rgba(255,59,59,0.30))' }}
          />

          <div className="w-48 md:w-64 h-px bg-border overflow-hidden">
            <motion.div
              className="h-full bg-accent"
              style={{ boxShadow: '0 0 12px rgba(255,59,59,0.7)' }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.15, ease: 'easeOut' }}
            />
          </div>

          <p className="font-mono text-[10px] md:text-xs text-text-muted mt-4 tracking-[0.3em] uppercase">
            {Math.round(progress)}%
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}