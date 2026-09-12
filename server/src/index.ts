import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { contactRouter } from './routes/contact'
import { statusRouter } from './routes/status'
import { contactLimiter } from './middleware/rateLimit'

const app = express()
const PORT = Number(process.env.PORT ?? 3001)

app.set('trust proxy', 1)

const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:4173',
  process.env.FRONTEND_URL,
  'https://desire-exe.my.id',
  'https://www.desire-exe.my.id',
].filter(Boolean) as string[]

app.use(
  cors({
    origin(origin, cb) {
      if (!origin || allowedOrigins.includes(origin)) return cb(null, true)
      return cb(new Error('Not allowed by CORS'))
    },
    credentials: false,
  }),
)

app.use(express.json({ limit: '64kb' }))

app.get('/health', (_req, res) => res.json({ ok: true }))

app.use('/api/contact', contactLimiter, contactRouter)
app.use('/api/status', statusRouter)

app.use((_req, res) => res.status(404).json({ error: 'Not found' }))

app.use((err: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error('[error]', err)
  res.status(500).json({ error: 'Server error' })
})

app.listen(PORT, () => {
  console.log(`\n  desfolio server`)
  console.log(`  → http://localhost:${PORT}`)
  console.log(`  → health: http://localhost:${PORT}/health\n`)
})