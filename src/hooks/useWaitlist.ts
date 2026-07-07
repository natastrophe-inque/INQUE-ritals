import { useState } from 'react'

export function useWaitlist() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const join = async (email: string) => {
    setLoading(true)
    setError(null)
    setSuccess(false)

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      const result = await response.json()

      if (!response.ok) {
        if (result.message?.includes('already')) {
          setError('This email is already on the waitlist.')
        } else {
          throw new Error(result.message || 'Failed to join waitlist')
        }
      } else {
        setSuccess(true)
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return { join, loading, error, success }
}
