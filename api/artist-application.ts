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

  const { name, email, instagram, city, specialty, collaborationType, message, contactOk } = request.body

  if (!name || !email || !city || !specialty) {
    return response.status(400).json({ message: 'Required fields missing' })
  }

  try {
    await resend.emails.send({
      from: 'INQUE Artist Program <onboarding@resend.dev>',
      to: 'inquerituals@gmail.com',
      subject: `New Artist Program Application: ${name}`,
      html: `
        <h2>New Artist Program Application</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${instagram ? `<p><strong>Instagram/Portfolio:</strong> ${instagram}</p>` : ''}
        <p><strong>City:</strong> ${city}</p>
        <p><strong>Specialty:</strong> ${specialty}</p>
        ${collaborationType ? `<p><strong>Collaboration Type:</strong> ${collaborationType}</p>` : ''}
        ${message ? `<p><strong>Message:</strong> ${message}</p>` : ''}
        <p><strong>Open to Contact:</strong> ${contactOk ? 'Yes' : 'No'}</p>
        <p>Submitted: ${new Date().toLocaleString()}</p>
      `,
    })

    return response.status(200).json({ message: 'Application submitted' })
  } catch (error) {
    console.error('Artist application error:', error)
    return response.status(500).json({ message: 'Failed to submit application' })
  }
}
