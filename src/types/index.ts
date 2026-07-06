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

export interface FeatureCard {
  title: string
  description: string
  icon: string
}

export interface TraumaType {
  title: string
  description: string
  icon?: string
}

export interface Ingredient {
  name: string
  subtitle: string
  percentage?: number
  description?: string
}

export type SectionId =
  | 'hero'
  | 'science'
  | 'skin-trauma'
  | 'formula'
  | 'founder'
  | 'artist-program'
  | 'final-cta'

export interface ArtistFormData {
  name: string
  studio: string
  city: string
}
