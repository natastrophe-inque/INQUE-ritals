import { useState } from 'react'
import type { ArtistFormData } from '../types'

export function useArtistApplications() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const submit = async (data: ArtistFormData) => {
    setLoading(true)
    setError(null)
    setSuccess(false)

    try {
      // For now, just store locally and show success
      // Email will be sent via Supabase trigger or manual backend
      console.log('Artist application submitted:', data)
      
      // Simulate a short delay
      await new Promise(resolve => setTimeout(resolve, 800))
      
      setSuccess(true)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return { submit, loading, error, success }
}
