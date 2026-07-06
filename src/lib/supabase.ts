import { createClient } from '@supabase/supabase-js'
import type { Database } from '../types/database'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-key'

let supabase: ReturnType<typeof createClient<Database>> | null = null

try {
  supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
    global: {
      headers: import.meta.env.VITE_SUPABASE_ACCESS_TOKEN
        ? { Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ACCESS_TOKEN}` }
        : {},
    },
  })
} catch (error) {
  console.warn('Supabase initialization failed:', error)
}

export const initializeSupabase = () => {
  if (supabaseUrl === 'https://placeholder.supabase.co' || supabaseAnonKey === 'placeholder-key') {
    console.warn('Supabase environment variables not configured. Forms will not work.')
    return false
  }
  return true
}

export { supabase }
