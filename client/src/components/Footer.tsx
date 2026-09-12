import { Github, Twitter, Linkedin, Mail, MessageCircle } from 'lucide-react'

const socials = [
  { href: 'https://github.com/Desire-exe',        Icon: Github,         label: 'GitHub' },
  { href: 'https://wa.me/2348161262401',          Icon: MessageCircle,  label: 'WhatsApp' },
  { href: 'https://twitter.com/yourhandle',       Icon: Twitter,        label: 'Twitter' },
  { href: 'https://linkedin.com/in/yourhandle',   Icon: Linkedin,       label: 'LinkedIn' },
  { href: 'mailto:zaddyexe097@gmail.com',         Icon: Mail,           label: 'Email' },
]

export function Footer() {
  return (
    <footer className="relative px-6 md:px-12 py-12 border-t border-border z-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src="/logo-light.png" alt="DΞSIRΞ-ΞXΞ" className="h-6 w-auto object-contain" />
          <span className="font-mono text-xs text-text-muted">
            built by <span className="text-text">Daramola Daniel</span>
          </span>
        </div>

        <div className="flex items-center gap-1">
          {socials.map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="inline-flex items-center justify-center p-2 rounded-md text-text-muted hover:text-text hover:bg-surface transition-colors"
            >
              <Icon size={16} strokeWidth={1.75} />
            </a>
          ))}
        </div>

        <p className="font-mono text-[10px] md:text-xs text-text-muted">
          © {new Date().getFullYear()} · all rights reserved
        </p>
      </div>
    </footer>
  )
}