import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Github, FolderCode, User, Mail } from 'lucide-react'
import { WhatsAppIcon } from './icons/WhatsAppIcon'

const links = [
  { to: '/projects', label: 'work',    Icon: FolderCode },
  { to: '/about',    label: 'about',   Icon: User },
  { to: '/contact',  label: 'contact', Icon: Mail },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-md bg-bg/70 border-b border-border'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 md:px-6 py-3 md:py-4">
        <Link to="/" className="flex items-center" aria-label="Home">
          <img
            src="/logo-light.png"
            alt="DΞSIRΞ-ΞXΞ"
            className="h-7 md:h-8 w-auto object-contain"
          />
        </Link>

        <div className="flex items-center gap-0.5 md:gap-1">
          {links.map(({ to, label, Icon }) => {
            const active = location.pathname.startsWith(to)
            return (
              <Link
                key={to}
                to={to}
                className={`group inline-flex items-center gap-2 px-2 md:px-3 py-2 rounded-md text-sm transition-colors ${
                  active
                    ? 'text-text bg-surface'
                    : 'text-text-muted hover:text-text hover:bg-surface'
                }`}
              >
                <Icon size={16} strokeWidth={1.75} />
                <span className="font-mono hidden sm:inline">{label}</span>
              </Link>
            )
          })}

          <a
            href="https://wa.me/2348161262401?text=Hi%20Desire%2C%20my%20name%20is%20"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="ml-1 md:ml-2 inline-flex items-center justify-center p-2 rounded-md text-text-muted hover:text-accent hover:bg-surface transition-colors"
          >
            <WhatsAppIcon size={16} />
          </a>

          <a
            href="https://github.com/Desire-exe"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="inline-flex items-center justify-center p-2 rounded-md text-text-muted hover:text-text hover:bg-surface transition-colors"
          >
            <Github size={16} strokeWidth={1.75} />
          </a>
        </div>
      </nav>
    </motion.header>
  )
}