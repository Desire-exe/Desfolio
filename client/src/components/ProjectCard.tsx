import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { ArrowUpRight, Github } from 'lucide-react'
import type { Project } from '@/data/projects'
import { Lightbox } from './Lightbox'

type Props = {
  project: Project
  featured?: boolean
}

const statusStyles: Record<Project['status'], string> = {
  live: 'text-accent',
  building: 'text-accent-soft',
  archived: 'text-text-muted',
}

const statusLabel: Record<Project['status'], string> = {
  live: 'live',
  building: 'building',
  archived: 'archived',
}

export function ProjectCard({ project }: Props) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const [currentImage, setCurrentImage] = useState(0)

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-100, 100], [3, -3])
  const rotateY = useTransform(x, [-100, 100], [-3, 3])

  const accent = project.accent === 'violet'
    ? { border: 'group-hover:border-violet-500/40', glow: '0 0 60px rgba(139,92,246,0.20)' }
    : { border: 'group-hover:border-accent/40', glow: '0 0 60px rgba(255,59,59,0.20)' }

  useEffect(() => {
    if (project.images.length <= 1) return
    const t = setInterval(() => {
      setCurrentImage((i) => (i + 1) % project.images.length)
    }, 4000)
    return () => clearInterval(t)
  }, [project.images.length])

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    x.set(e.clientX - rect.left - rect.width / 2)
    y.set(e.clientY - rect.top - rect.height / 2)
  }
  const onLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{ perspective: 1200 }}
      >
        <motion.div
          onMouseMove={onMove}
          onMouseLeave={onLeave}
          style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
          whileHover={{ boxShadow: accent.glow }}
          transition={{ duration: 0.3 }}
          className={`group relative h-full rounded-lg border border-border bg-surface/60 backdrop-blur-sm overflow-hidden ${accent.border} transition-colors`}
        >
          {/* Image carousel → link to detail */}
          {project.images.length > 0 && (
            <div className="relative aspect-video overflow-hidden border-b border-border">
              <Link to={`/projects/${project.id}`} className="block absolute inset-0">
                <img
                  src={project.images[currentImage]}
                  alt={`${project.name} screenshot`}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent" />
              </Link>

              {/* Dots */}
              {project.images.length > 1 && (
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                  {project.images.map((_, i) => (
                    <button
                      key={i}
                      onClick={(e) => {
                        e.preventDefault()
                        setCurrentImage(i)
                      }}
                      className={`h-1 rounded-full transition-all ${
                        i === currentImage ? 'w-4 bg-accent' : 'w-1 bg-text-muted/60'
                      }`}
                      aria-label={`Image ${i + 1}`}
                    />
                  ))}
                </div>
              )}

              {/* Lightbox trigger button — top-right corner */}
              <button
                onClick={() => setLightboxIndex(currentImage)}
                className="absolute top-3 right-3 z-10 p-1.5 rounded-md bg-bg/60 backdrop-blur text-text-muted hover:text-text opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Expand image"
              >
                <ArrowUpRight size={14} />
              </button>
            </div>
          )}

          <Link to={`/projects/${project.id}`} className="block p-6 md:p-8">
            <div className="flex items-start justify-between mb-6">
              <span className="font-mono text-xs text-text-muted">{project.number}</span>
              <span className={`font-mono text-xs ${statusStyles[project.status]}`}>
                ● {statusLabel[project.status]}
              </span>
            </div>

            <h3 className="font-serif italic text-2xl md:text-3xl text-text leading-tight">
              {project.name}
            </h3>
            <p className="font-mono text-xs md:text-sm text-text-muted mt-2">
              {project.tagline}
            </p>

            <p className="text-sm md:text-base text-text-muted leading-relaxed mt-6">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-6">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[10px] md:text-xs px-2 py-1 rounded border border-border text-text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4 mt-8 pt-6 border-t border-border">
             <span className="inline-flex items-center gap-1.5 text-sm text-text group-hover:text-accent transition-colors">
              View project <ArrowUpRight size={14} />
            </span>
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-text transition-colors"
                >
                  <Github size={14} /> Code
                </a>
              )}
            </div>
          </Link>
        </motion.div>
      </motion.div>

      <Lightbox
        images={project.images}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onIndexChange={(i) => {
          setLightboxIndex(i)
          setCurrentImage(i)
        }}
      />
    </>
  )
}