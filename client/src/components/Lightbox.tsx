import { useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

type Props = {
  images: string[]
  index: number | null
  onClose: () => void
  onIndexChange: (i: number) => void
}

export function Lightbox({ images, index, onClose, onIndexChange }: Props) {
  const open = index !== null

  const next = useCallback(() => {
    if (index === null) return
    onIndexChange((index + 1) % images.length)
  }, [index, images.length, onIndexChange])

  const prev = useCallback(() => {
    if (index === null) return
    onIndexChange((index - 1 + images.length) % images.length)
  }, [index, images.length, onIndexChange])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open, next, prev, onClose])

  return (
    <AnimatePresence>
      {open && index !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] bg-bg/95 backdrop-blur-md flex items-center justify-center px-4"
          onClick={onClose}
        >
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-6 right-6 p-2 rounded-md text-text-muted hover:text-text hover:bg-surface transition-colors z-10"
          >
            <X size={20} />
          </button>

          {images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prev() }}
                aria-label="Previous"
                className="absolute left-4 md:left-8 p-3 rounded-md text-text-muted hover:text-text hover:bg-surface transition-colors z-10"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); next() }}
                aria-label="Next"
                className="absolute right-4 md:right-8 p-3 rounded-md text-text-muted hover:text-text hover:bg-surface transition-colors z-10"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}

          <motion.img
            key={index}
            src={images[index]}
            alt=""
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-[92vw] rounded-lg border border-border shadow-ember-sm"
          />

          {images.length > 1 && (
            <div
              className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2"
              onClick={(e) => e.stopPropagation()}
            >
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => onIndexChange(i)}
                  aria-label={`Image ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? 'w-6 bg-accent' : 'w-1.5 bg-text-muted/40 hover:bg-text-muted'
                  }`}
                />
              ))}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}