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
    // Notify the business
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

    // Send confirmation to the applicant
    await resend.emails.send({
      from: 'INQUE Artist Program <onboarding@resend.dev>',
      to: email,
      subject: 'Your Artist Program Application — INQUE',
      html: `
        <div style="background:#0a0a0a;color:#e8e3dd;font-family:Georgia,serif;max-width:600px;margin:0 auto;padding:40px 32px;">
          <h1 style="font-size:1.6rem;font-weight:400;letter-spacing:0.1em;margin-bottom:8px;">INQUE</h1>
          <p style="font-size:0.75rem;letter-spacing:0.2em;text-transform:uppercase;color:#7a8c6e;margin-bottom:32px;">Artist Program</p>
          <h2 style="font-size:1.2rem;font-weight:400;margin-bottom:16px;">Application Received</h2>
          <p style="font-size:0.95rem;line-height:1.7;color:#a8a8b0;margin-bottom:16px;">
            Thank you, ${name}. We have received your application for the INQUE Artist Program from ${city}.
          </p>
          <p style="font-size:0.95rem;line-height:1.7;color:#a8a8b0;margin-bottom:32px;">
            We review applications carefully and will be in touch shortly. In the meantime, if you have any questions reply to this email.
          </p>
          <p style="font-size:0.75rem;letter-spacing:0.15em;text-transform:uppercase;color:#5a6c4e;">Recovery, refined.</p>
        </div>
      `,
    })

    return response.status(200).json({ message: 'Application submitted' })
  } catch (error) {
    console.error('Artist application error:', error)
    return response.status(500).json({ message: 'Failed to submit application' })
  }
}
