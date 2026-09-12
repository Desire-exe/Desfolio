import { Router } from 'express'

export const statusRouter = Router()

statusRouter.get('/', (_req, res) => {
  res.json({
    status: 'ok',
    now: new Date().toISOString(),
    uptime: process.uptime(),
    building: 'FluxMeet',
    openTo: 'freelance & full-time roles',
  })
})