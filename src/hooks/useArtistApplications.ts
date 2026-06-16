import { useState } from 'react'
import { supabase } from '../lib/supabase'

interface ArtistFormData {
  name: string
  studio: string
  city: string
}

export function useArtistApplications() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const submit = async (data: ArtistFormData) => {
    setLoading(true)
    setError(null)
    setSuccess(false)
    try {
      const { error: err } = await supabase
        .from('artist_applications')
        .insert(data)

      if (err) throw err
      setSuccess(true)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return { submit, loading, error, success }
}
