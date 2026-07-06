import { useState } from 'react'
import { supabase } from '../lib/supabase'

export function useWaitlist() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const join = async (email: string) => {
    setLoading(true)
    setError(null)
    setSuccess(false)
    try {
      const { error: err } = await supabase
        .from('waitlist')
        .insert({ email } as never)

      if (err) {
        if (err.code === '23505') {
          setError('This email is already on the waitlist.')
        } else {
          throw err
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
