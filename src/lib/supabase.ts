import { createClient } from '@supabase/supabase-js'
import type { Database } from '../types/database'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY
const supabaseAccessToken = import.meta.env.VITE_SUPABASE_ACCESS_TOKEN
const schemaName = import.meta.env.VITE_SCHEMA_NAME

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Run provision_supabase_tenant first.')
}

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  db: { schema: schemaName || 'public' },
  global: {
    headers: supabaseAccessToken
      ? { Authorization: `Bearer ${supabaseAccessToken}` }
      : {},
  },
})
