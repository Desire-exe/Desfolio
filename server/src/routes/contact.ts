import { Router } from 'express'
import { z } from 'zod'
import { prisma } from '../lib/prisma'
import { resend, TO_EMAIL, FROM_EMAIL } from '../lib/resend'

export const contactRouter = Router()

const contactSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email().max(200),
  message: z.string().min(1).max(2000),
})

contactRouter.post('/', async (req, res) => {
  const parsed = contactSchema.safeParse(req.body)
  if (!parsed.success) {
    return res.status(400).json({ error: 'Invalid input', details: parsed.error.flatten() })
  }

  const { name, email, message } = parsed.data
  const ip = req.ip ?? null
  const userAgent = req.get('user-agent') ?? null

  try {
    const saved = await prisma.contact.create({
      data: { name, email, message, ip, userAgent },
    })

    try {
      await resend.emails.send({
        from: FROM_EMAIL,
        to: TO_EMAIL,
        replyTo: email,
        subject: `New message from ${name}`,
        html: `
          <div style="font-family: -apple-system, sans-serif; line-height: 1.6; color: #111;">
            <h2 style="margin: 0 0 16px;">New contact form submission</h2>
            <p><strong>Name:</strong> ${escapeHtml(name)}</p>
            <p><strong>Email:</strong> ${escapeHtml(email)}</p>
            <p><strong>Message:</strong></p>
            <blockquote style="border-left: 2px solid #FF3B3B; padding-left: 12px; margin-left: 0; color: #444;">
              ${escapeHtml(message).replace(/\n/g, '<br/>')}
            </blockquote>
            <p style="color: #888; font-size: 12px; margin-top: 24px;">
              Saved to DB: ${saved.id} · ${new Date().toISOString()}
            </p>
          </div>
        `,
      })
    } catch (emailErr) {
      console.error('[contact] email send failed:', emailErr)
    }

    return res.json({ ok: true, id: saved.id })
  } catch (err) {
    console.error('[contact] db save failed:', err)
    return res.status(500).json({ error: 'Something went wrong' })
  }
})

function escapeHtml(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}