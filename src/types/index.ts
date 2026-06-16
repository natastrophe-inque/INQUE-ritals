export interface WaitlistEntry {
  id: string
  email: string
  created_at: string
}

export interface ArtistApplication {
  id: string
  name: string
  studio: string
  city: string
  created_at: string
}

export type SectionId =
  | 'hero'
  | 'science'
  | 'skin-trauma'
  | 'formula'
  | 'founder'
  | 'artist-program'
  | 'final-cta'
