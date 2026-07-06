import { useState } from 'react'
import { supabase, initializeSupabase } from '../lib/supabase'
import type { ArtistFormData } from '../types'

export function useArtistApplications() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const submit = async (data: ArtistFormData) => {
    setLoading(true)
    setError(null)
    setSuccess(false)

    if (!initializeSupabase()) {
      setError('Form submissions are not yet available. Please check back soon.')
      setLoading(false)
      return
    }

    try {
      const { error: err } = await supabase!
        .from('artist_applications')
        .insert(data as never)

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
