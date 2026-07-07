import { useState } from 'react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { useArtistApplications } from '@/hooks/useArtistApplications'

export default function ArtistProgramSection() {
  const [name, setName] = useState('')
  const [studio, setStudio] = useState('')
  const [city, setCity] = useState('')
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const { submit, loading, error } = useArtistApplications()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !studio || !city || !email) return
    await submit({ name, studio, city, email })
    setSubmitted(true)
  }

  return (
    <section
      id="artist-program"
      data-component="src/components/ArtistProgramSection.tsx"
      className="relative bg-obsidian py-24 md:py-36"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <ScrollReveal>
            <div className="mb-4">
              <span className="text-xs tracking-[0.25em] uppercase text-iridescent-light font-sans font-light">
                Studio Partnership
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-bone leading-tight mb-6">
              Artist
              <br />
              <span className="italic">Program.</span>
            </h2>
            <p className="text-base md:text-lg text-silver-muted/80 font-sans font-light leading-relaxed mb-4 max-w-md">
              A curated partnership for tattoo studios and recovery-focused artists. Trial SALVIX in your room. Share honest, professional feedback.
            </p>
            <p className="text-base text-silver-muted/60 font-sans font-light leading-relaxed max-w-md">
              Help shape the future of tattoo recovery through product testing, feedback, and early access.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            {submitted ? (
              <div className="glass-panel p-10 text-center animate-fade-in">
                <div className="w-12 h-12 mx-auto mb-6 rounded-full border border-iridescent/30 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    className="text-iridescent"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif text-bone mb-3">Application Received</h3>
                <p className="text-sm text-silver-muted/70 font-sans font-light leading-relaxed">
                  Thank you for your interest in the Artist Program. We will be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-panel p-8 md:p-10 space-y-8">
                <div>
                  <label className="block text-xs tracking-[0.2em] uppercase text-iridescent-light font-sans font-light mb-3">
                    Name
                  </label>
                  <div className="border-b border-iridescent/20 focus-within:border-iridescent/60 transition-colors duration-300">
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-transparent py-3 text-sm text-bone font-sans font-light placeholder-silver-muted/30 focus:outline-none"
                      placeholder="Your name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs tracking-[0.2em] uppercase text-iridescent-light font-sans font-light mb-3">
                    Email
                  </label>
                  <div className="border-b border-iridescent/20 focus-within:border-iridescent/60 transition-colors duration-300">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-transparent py-3 text-sm text-bone font-sans font-light placeholder-silver-muted/30 focus:outline-none"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs tracking-[0.2em] uppercase text-iridescent-light font-sans font-light mb-3">
                    Studio / Shop
                  </label>
                  <div className="border-b border-iridescent/20 focus-within:border-iridescent/60 transition-colors duration-300">
                    <input
                      type="text"
                      required
                      value={studio}
                      onChange={(e) => setStudio(e.target.value)}
                      className="w-full bg-transparent py-3 text-sm text-bone font-sans font-light placeholder-silver-muted/30 focus:outline-none"
                      placeholder="Your studio name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs tracking-[0.2em] uppercase text-iridescent-light font-sans font-light mb-3">
                    City
                  </label>
                  <div className="border-b border-iridescent/20 focus-within:border-iridescent/60 transition-colors duration-300">
                    <input
                      type="text"
                      required
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full bg-transparent py-3 text-sm text-bone font-sans font-light placeholder-silver-muted/30 focus:outline-none"
                      placeholder="Your city"
                    />
                  </div>
                </div>

                {error && (
                  <p className="text-xs text-red-400/70 font-sans font-light">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 bg-bone text-black text-sm tracking-[0.15em] uppercase font-sans font-medium hover:bg-white transition-colors duration-300 disabled:opacity-50"
                >
                  {loading ? 'Submitting...' : 'Apply'}
                </button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-iridescent/20 to-transparent" />
    </section>
  )
}
