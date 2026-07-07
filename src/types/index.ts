import type { Database } from './database'

export type ArtistFormData = Database['public']['Tables']['artist_applications']['Insert'] & {
  email: string
}

export type WaitlistFormData = {
  email: string
}
