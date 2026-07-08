export type ArtistFormData = {
  name: string
  email: string
  instagram?: string
  city: string
  specialty: string
  collaborationType?: string
  message?: string
  contactOk?: boolean
}

export type WaitlistFormData = {
  email: string
}

export type FeatureCard = {
  title: string
  description: string
  icon?: string
}

export type Ingredient = {
  name: string
  subtitle: string
}
