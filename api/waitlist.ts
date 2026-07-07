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

    return response.status(200).json({ message: 'Added to waitlist' })
  } catch (error) {
    console.error('Waitlist error:', error)
    return response.status(500).json({ message: 'Failed to join waitlist' })
  }
}
