import { type ReactNode, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Props = {
  children: ReactNode
}

export function PageTransition({ children }: Props) {
  const [flashing, setFlashing] = useState(true)

  useEffect(() => {
    setFlashing(true)
    const t = setTimeout(() => setFlashing(false), 900)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      <AnimatePresence>
        {flashing && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[150] bg-bg flex flex-col items-center justify-center pointer-events-none px-6"
          >
            <motion.img
              src="/logo-light.png"
              alt="DΞSIRΞ-ΞXΞ"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="h-12 md:h-16 w-auto mb-8"
              style={{ filter: 'drop-shadow(0 0 24px rgba(255,59,59,0.35))' }}
            />

            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="font-mono text-[10px] md:text-xs text-text-muted tracking-[0.25em] uppercase text-center"
            >
              Can you feel the burn of
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif italic text-3xl md:text-4xl mt-3 text-center bg-clip-text text-transparent animate-gradient"
              style={{
                backgroundImage: 'linear-gradient(90deg, #FF3B3B 0%, #FF6B4A 50%, #FF3B3B 100%)',
                backgroundSize: '200% 100%',
              }}
            >
              DΞSIRΞ-ΞXΞ?
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: flashing ? 0 : 1 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10"
      >
        {children}
      </motion.div>
    </>
  )
}