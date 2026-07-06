import { useState, useEffect, useCallback } from 'react'
import { supabase } from '../lib/supabase'

interface UseTableOptions {
  table: string
  select?: string
  orderBy?: string
  ascending?: boolean
}

export function useTable<T extends Record<string, unknown>>({
  table,
  select = '*',
  orderBy = 'created_at',
  ascending = false,
}: UseTableOptions) {
  const [data, setData] = useState<T[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetch = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const { data: result, error: err } = await supabase
        .from(table)
        .select(select)
        .order(orderBy, { ascending })

      if (err) throw err
      setData((result as T[]) || [])
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to fetch data')
    } finally {
      setLoading(false)
    }
  }, [table, select, orderBy, ascending])

  useEffect(() => {
    fetch()
  }, [fetch])

  return { data, loading, error, refetch: fetch }
}
