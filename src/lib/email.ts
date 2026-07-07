import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendWaitlistEmail(email: string) {
  try {
    const result = await resend.emails.send({
      from: 'Waitlist <onboarding@resend.dev>',
      to: 'inquerituals@gmail.com',
      subject: `New Waitlist Signup: ${email}`,
      html: `
        <h2>New Waitlist Signup</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p>Timestamp: ${new Date().toLocaleString()}</p>
      `,
    })
    return result
  } catch (error) {
    console.error('Failed to send waitlist email:', error)
    throw error
  }
}

export async function sendArtistApplicationEmail(data: {
  name: string
  studio: string
  city: string
  email: string
}) {
  try {
    const result = await resend.emails.send({
      from: 'Artist Program <onboarding@resend.dev>',
      to: 'inquerituals@gmail.com',
      subject: `New Artist Program Application: ${data.name}`,
      html: `
        <h2>New Artist Program Application</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Studio:</strong> ${data.studio}</p>
        <p><strong>City:</strong> ${data.city}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p>Timestamp: ${new Date().toLocaleString()}</p>
      `,
    })
    return result
  } catch (error) {
    console.error('Failed to send artist application email:', error)
    throw error
  }
}
