import { createClient } from '@supabase/supabase-js'
import type { Database } from '../types/database'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY
const supabaseAccessToken = import.meta.env.VITE_SUPABASE_ACCESS_TOKEN

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Run provision_supabase_tenant first.')
}

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  global: {
    headers: supabaseAccessToken
      ? { Authorization: `Bearer ${supabaseAccessToken}` }
      : {},
  },
})
