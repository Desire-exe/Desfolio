export type StackGroup = {
  label: string
  items: string[]
  strength: number
}

export const stack: StackGroup[] = [
  {
    label: 'Languages',
    items: ['JavaScript', 'TypeScript', 'SQL'],
    strength: 1,
  },
  {
    label: 'Frontend',
    items: ['React', 'HTML5', 'CSS3', 'Vite', 'Framer Motion', 'Tailwind CSS'],
    strength: 0.92,
  },
  {
    label: 'Backend',
    items: ['Node.js', 'Express', 'REST APIs', 'WebSockets'],
    strength: 0.95,
  },
  {
    label: 'Data',
    items: ['SQLite', 'PostgreSQL', 'Prisma', 'JSON Persistence'],
    strength: 0.78,
  },
  {
    label: 'Media & Tooling',
    items: ['FFmpeg', 'yt-dlp', 'Sharp', 'Protocol Buffers', 'Regex'],
    strength: 0.68,
  },
  {
    label: 'Deploy',
    items: ['Git', 'GitHub', 'Koyeb', 'Render', 'Replit'],
    strength: 0.82,
  },
]