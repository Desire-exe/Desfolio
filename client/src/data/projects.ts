export type Project = {
  id: string
  number: string
  name: string
  tagline: string
  description: string
  stack: string[]
  status: 'live' | 'building' | 'archived'
  liveUrl?: string
  githubUrl?: string
  featured?: boolean
  images: string[]
  accent?: 'ember' | 'violet'
}

export const projects: Project[] = [
  {
    id: 'desire-exe',
    number: '01',
    name: 'Desire-eXe',
    tagline: 'Multi-tenant WhatsApp automation platform',
    description:
      'A production-grade WhatsApp bot platform with a tiered SaaS dashboard (Free/Basic/Pro/Enterprise), multi-session pairing, 20+ API integrations, AI image/video generation, and 10+ group moderation systems. Built on Node.js + Express, with a full web dashboard for auth, sessions, and premium tiers.',
    stack: ['Node.js', 'WhatsApp Web Protocol', 'Express', 'Redis', 'FFmpeg', 'Gemini AI', 'Koyeb'],
    status: 'live',
    githubUrl: 'https://github.com/Desire-exe',
    featured: true,
    images: [
      '/projects/desire-exe-dashboard.png',
      '/projects/desire-exe-auth.png',
      '/projects/desire-exe-docs.png',
    ],
    accent: 'violet',
  },
  {
    id: 'fluxmeet',
    number: '02',
    name: 'FluxMeet',
    tagline: 'Real-time social platform',
    description:
      'A platform where users meet, chat, and interact in real time. Currently in active development — designing the matching system, chat layer, and user flow.',
    stack: ['TypeScript', 'React', 'Express', 'SQLite', 'Framer Motion', 'Vite'],
    status: 'building',
    githubUrl: 'https://github.com/Desire-exe',
    featured: true,
    images: [
      '/projects/fluxmeet-home.png',
      '/projects/fluxmeet-dashboard.png',
      '/projects/fluxmeet-chat.png',
      '/projects/fluxmeet-profile.png',
    ],
    accent: 'ember',
  },
  {
    id: 'session-gen',
    number: '03',
    name: 'Session Generator',
    tagline: 'WhatsApp auth tool',
    description:
      'A lightweight web tool for generating multi-file WhatsApp authentication sessions used by Desire-eXe and other bots. Handles QR auth, pairing codes, and file-based session persistence.',
    stack: ['Node.js', 'WhatsApp Web Protocol', 'Express', 'QR Auth', 'EJS'],
    status: 'live',
    liveUrl: 'https://desire-exe-pair-1.onrender.com/',
    githubUrl: 'https://github.com/Desire-exe',
    images: [
      '/projects/session-gen-home.png',
      '/projects/session-gen-qr-code.png',
      '/projects/session-gen-pc.png',
    ],
    accent: 'ember',
  },
]

export type Lab = {
  title: string
  description: string
  stack: string[]
}

export const labs: Lab[] = [
  {
    title: 'Media Processing Pipeline',
    description:
      'Downloads, converts, and delivers media across multiple platforms using yt-dlp, FFmpeg, and custom wrappers.',
    stack: ['yt-dlp', 'FFmpeg', 'Node.js'],
  },
  {
    title: 'Telegram Pairing Flows',
    description:
      'Auth and pairing systems for Telegram bots with web-based session handling.',
    stack: ['Node.js', 'Telegram API', 'Web Auth'],
  },
  {
    title: 'Security Learning Notes',
    description:
      'Working through TryHackMe paths (Pre-Security, Red Team) — networking, Linux, and offensive-security fundamentals.',
    stack: ['Linux', 'Networking', 'Security'],
  },
  {
    title: 'Chess Teaching Resources',
    description:
      'Material and lesson structure for teaching chess to beginners and running a school chess club.',
    stack: ['Education', 'Community'],
  },
]