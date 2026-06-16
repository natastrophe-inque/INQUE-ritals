export interface Database {
  public: {
    Tables: {
      waitlist: {
        Row: {
          id: string
          email: string
          created_at: string
        }
        Insert: {
          id?: string
          email: string
          created_at?: string
        }
        Update: {
          id?: string
          email?: string
          created_at?: string
        }
      }
      artist_applications: {
        Row: {
          id: string
          name: string
          studio: string
          city: string
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          studio: string
          city: string
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          studio?: string
          city?: string
          created_at?: string
        }
      }
    }
  }
}
