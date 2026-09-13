import { motion } from 'framer-motion'

export function ScrollHint() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 2.2, ease: [0.22, 1, 0.36, 1] }}
      aria-hidden
      className="pointer-events-none absolute bottom-8 left-6 md:left-12 flex flex-col items-center"
    >
      {/* Wire */}
      <div className="relative h-16 w-px overflow-hidden bg-border">
        {/* Traveling ember dot */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-accent"
          style={{ boxShadow: '0 0 12px rgba(255,59,59,0.9)' }}
          animate={{ y: [-6, 64] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: [0.4, 0, 0.6, 1],
            repeatDelay: 0.3,
          }}
        />
      </div>

      {/* Chevron */}
      <motion.svg
        width="10"
        height="6"
        viewBox="0 0 10 6"
        fill="none"
        className="mt-1 text-accent"
        animate={{ y: [0, 3, 0], opacity: [0.4, 1, 0.4] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <path
          d="M1 1L5 5L9 1"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>
    </motion.div>
  )
}