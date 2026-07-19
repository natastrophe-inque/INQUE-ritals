import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  if (request.method !== 'POST') {
    return response.status(405).json({ message: 'Method not allowed' })
  }

  const { email } = request.body

  if (!email || !email.includes('@')) {
    return response.status(400).json({ message: 'Valid email required' })
  }

  try {
    // Notify the business
    await resend.emails.send({
      from: 'INQUE <onboarding@resend.dev>',
      to: 'inquerituals@gmail.com',
      subject: `New Waitlist Signup: ${email}`,
      html: `
        <h2>New Waitlist Signup</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p>Timestamp: ${new Date().toLocaleString()}</p>
      `,
    })

    // Send confirmation to the subscriber
    await resend.emails.send({
      from: 'INQUE <onboarding@resend.dev>',
      to: email,
      subject: "You're on the list — SALVIX by INQUE",
      html: `
        <div style="background:#0a0a0a;color:#e8e3dd;font-family:Georgia,serif;max-width:600px;margin:0 auto;padding:40px 32px;">
          <h1 style="font-size:1.6rem;font-weight:400;letter-spacing:0.1em;margin-bottom:8px;">INQUE</h1>
          <p style="font-size:0.75rem;letter-spacing:0.2em;text-transform:uppercase;color:#7a8c6e;margin-bottom:32px;">SALVIX</p>
          <h2 style="font-size:1.2rem;font-weight:400;margin-bottom:16px;">You're on the list.</h2>
          <p style="font-size:0.95rem;line-height:1.7;color:#a8a8b0;margin-bottom:16px;">
            Thank you for joining the SALVIX waitlist. You'll be among the first to know when we launch.
          </p>
          <p style="font-size:0.95rem;line-height:1.7;color:#a8a8b0;margin-bottom:32px;">
            Recovery, redefined. We'll be in touch.
          </p>
          <p style="font-size:0.75rem;letter-spacing:0.15em;text-transform:uppercase;color:#5a6c4e;">inquerituals.com</p>
        </div>
      `,
    })

    return response.status(200).json({ message: 'Added to waitlist' })
  } catch (error) {
    console.error('Waitlist error:', error)
    return response.status(500).json({ message: 'Failed to join waitlist' })
  }
}
