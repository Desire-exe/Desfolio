import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowUpRight, Github, Check } from 'lucide-react'
import { projects } from '@/data/projects'
import { Lightbox } from '@/components/Lightbox'
import { useState } from 'react'
import { usePageTitle } from '@/hooks/usePageTitle'

const caseStudies: Record<string, { highlights: string[]; features: { title: string; desc: string }[] }> = {
  'desire-exe': {
    highlights: [
      'Multi-tenant architecture with tiered SaaS access (Free / Basic / Pro / Enterprise)',
      'Multi-session WhatsApp pairing — unlimited linked numbers with isolated credential stores',
      '20+ API integrations with fallback chains (Gemini, MangaDex, OMDB, GDELT, ACRCloud, Last.fm)',
      '10+ group moderation systems with per-group JSON persistence',
      'AI image + video generation pipelines (Gemini, FFmpeg, Sharp)',
      'Smart session reconnection logic — status 440/428/515 handling with exponential backoff',
    ],
    features: [
      { title: 'Tiered Dashboard',      desc: 'Free/Basic/Pro/Enterprise with enforced upgrade paths and force-re-login on tier change.' },
      { title: 'Multi-Session Pairing', desc: 'Isolated sessions per linked number, each with its own credential store.' },
      { title: 'Moderation Suite',      desc: 'Anti-link, anti-mention, anti-delete, anti-edit, anti-badwords, warn/kick with 3-strike rules.' },
      { title: 'Media Pipeline',        desc: 'FFmpeg + Sharp + yt-dlp for stickers, video conversion, and audio extraction.' },
      { title: 'AI Layer',              desc: 'Gemini chat, image analysis, imagine/animate, upscale, removebg, style transfer.' },
      { title: 'Web Status Pages',      desc: 'QR / pairing auth, dashboard, docs, dev portal — all mobile-responsive.' },
    ],
  },
}

export function ProjectDetail() {
  const { id } = useParams<{ id: string }>()
  const project = projects.find((p) => p.id === id)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  usePageTitle(project?.name ?? 'Not Found')

  if (!project) return <Navigate to="/projects" replace />

  const study = caseStudies[project.id]
  const isFlagship = !!study

  return (
    <>
      <section className="relative px-6 md:px-12 pt-32 md:pt-40 pb-24 md:pb-32 z-10">
        <div className="max-w-5xl mx-auto">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 font-mono text-xs text-text-muted hover:text-text transition-colors mb-10"
          >
            <ArrowLeft size={14} /> all projects
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs text-accent">[{project.number}]</span>
              <span className="font-mono text-xs text-text-muted">● {project.status}</span>
            </div>

            <h1 className="font-serif italic text-4xl md:text-6xl lg:text-7xl text-text leading-tight">
              {project.name}
            </h1>
            <p className="font-mono text-sm md:text-base text-text-muted mt-3">
              {project.tagline}
            </p>

            <div className="flex flex-wrap gap-2 mt-8">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[10px] md:text-xs px-2 py-1 rounded border border-border text-text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>

            {(project.liveUrl || project.githubUrl) && (
              <div className="flex flex-wrap items-center gap-4 mt-10">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-accent text-bg font-medium text-sm hover:shadow-ember transition-shadow"
                  >
                    View live <ArrowUpRight size={16} />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-border text-text text-sm hover:bg-surface transition-colors"
                  >
                    <Github size={16} /> Code
                  </a>
                )}
              </div>
            )}
          </motion.div>

          {project.images.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-16"
            >
              {project.images.map((img, i) => (
                <button
                  key={img}
                  onClick={() => setLightboxIndex(i)}
                  className={`relative group overflow-hidden rounded-lg border border-border ${
                    i === 0 && project.images.length % 2 !== 0 ? 'md:col-span-2' : ''
                  }`}
                >
                  <img
                    src={img}
                    alt={`${project.name} screenshot ${i + 1}`}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              ))}
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-20"
          >
            <h2 className="font-mono text-xs text-accent tracking-[0.2em] uppercase mb-6">
              Overview
            </h2>
            <p className="text-base md:text-lg text-text-muted leading-relaxed">
              {project.description}
            </p>
          </motion.div>

          {isFlagship && study && (
            <>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="mt-20"
              >
                <h2 className="font-mono text-xs text-accent tracking-[0.2em] uppercase mb-6">
                  What I Built
                </h2>
                <ul className="space-y-3">
                  {study.highlights.map((h) => (
                    <li key={h} className="flex gap-3 text-sm md:text-base text-text-muted leading-relaxed">
                      <Check size={16} className="text-accent shrink-0 mt-1" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="mt-20"
              >
                <h2 className="font-mono text-xs text-accent tracking-[0.2em] uppercase mb-6">
                  Systems & Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {study.features.map((f) => (
                    <div
                      key={f.title}
                      className="rounded-md border border-border bg-surface/40 p-5 hover:border-accent/30 transition-colors"
                    >
                      <h3 className="font-sans text-sm text-text">{f.title}</h3>
                      <p className="text-xs md:text-sm text-text-muted leading-relaxed mt-2">
                        {f.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </>
          )}
        </div>
      </section>

      <Lightbox
        images={project.images}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onIndexChange={setLightboxIndex}
      />
    </>
  )
}