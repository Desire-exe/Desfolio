import { motion } from 'framer-motion'

export function Aurora() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Base fiery aurora gradients */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(60% 50% at 15% 10%, rgba(255, 59, 59, 0.18) 0%, transparent 60%),
            radial-gradient(50% 40% at 85% 20%, rgba(255, 90, 31, 0.16) 0%, transparent 60%),
            radial-gradient(70% 60% at 50% 100%, rgba(255, 138, 0, 0.12) 0%, transparent 70%),
            #0B0708
          `,
        }}
      />

      {/* Top-left: crimson ember */}
      <motion.div
        className="absolute -top-40 -left-40 h-[650px] w-[650px] rounded-full blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(255,59,59,0.35) 0%, rgba(255,59,59,0.10) 45%, transparent 70%)',
        }}
        animate={{
          x: [0, 140, 60, 0],
          y: [0, 80, 160, 0],
          scale: [1, 1.2, 1.05, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Top-right: ember orange */}
      <motion.div
        className="absolute top-1/4 -right-40 h-[550px] w-[550px] rounded-full blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(255,90,31,0.32) 0%, rgba(255,90,31,0.10) 45%, transparent 70%)',
        }}
        animate={{
          x: [0, -120, -40, 0],
          y: [0, 100, -60, 0],
          scale: [1, 1.18, 0.95, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Bottom-center: amber glow */}
      <motion.div
        className="absolute -bottom-52 left-1/3 h-[600px] w-[600px] rounded-full blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(255,138,0,0.28) 0%, rgba(255,138,0,0.08) 50%, transparent 75%)',
        }}
        animate={{
          x: [0, 80, -60, 0],
          y: [0, -80, -30, 0],
          scale: [1, 1.12, 1.02, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Mid-right: hot spot (subtle) */}
      <motion.div
        className="absolute top-2/3 right-1/4 h-[400px] w-[400px] rounded-full blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(255,107,74,0.22) 0%, transparent 70%)',
        }}
        animate={{
          x: [0, -60, 40, 0],
          y: [0, 60, -40, 0],
          scale: [1, 1.1, 0.98, 1],
        }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Grain overlay for warmth/texture */}
      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '180px 180px',
        }}
      />

      {/* Optional: heat vignette (darkened corners) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 40%, rgba(11,7,8,0.55) 100%)',
        }}
      />
    </div>
  )
}