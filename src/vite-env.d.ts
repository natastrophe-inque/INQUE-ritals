/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SUPABASE_URL: string
  readonly VITE_SUPABASE_ANON_KEY: string
  readonly VITE_SUPABASE_ACCESS_TOKEN?: string
  readonly VITE_SCHEMA_NAME?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
