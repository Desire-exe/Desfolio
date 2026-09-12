import { Resend } from 'resend'

if (!process.env.RESEND_API_KEY) {
  console.warn('[resend] RESEND_API_KEY is not set — emails will not send')
}

export const resend = new Resend(process.env.RESEND_API_KEY ?? '')

export const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? 'zaddyexe097@gmail.com'
export const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL ?? 'onboarding@resend.dev'