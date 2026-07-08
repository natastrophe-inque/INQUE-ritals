import { useState } from 'react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { useArtistApplications } from '@/hooks/useArtistApplications'

export default function ArtistProgramSection() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [instagram, setInstagram] = useState('')
  const [city, setCity] = useState('')
  const [specialty, setSpecialty] = useState('')
  const [collaborationType, setCollaborationType] = useState('')
  const [message, setMessage] = useState('')
  const [contactOk, setContactOk] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const { submit, loading, error } = useArtistApplications()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !email || !city || !specialty) return
    await submit({ name, email, instagram, city, specialty, collaborationType, message, contactOk })
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
              <span className="text-xs tracking-[0.25em] uppercase text-forest-light font-sans font-light">
                Partnership
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-bone leading-tight mb-6">
              Artist
              <br />
              <span className="italic">Program.</span>
            </h2>
            <p className="text-base md:text-lg text-silver-muted/80 font-sans font-light leading-relaxed mb-4 max-w-md">
              Curated partnership for recovery-focused studios. Trial SALVIX, share feedback, shape the future.
            </p>
            <p className="text-base text-silver-muted/60 font-sans font-light leading-relaxed max-w-md">
              Early access to product testing and collaboration opportunities.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            {submitted ? (
              <div className="glass-panel p-10 text-center animate-fade-in">
                <div className="w-12 h-12 mx-auto mb-6 rounded-full border border-forest-accent/30 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    className="text-forest-accent"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif text-bone mb-3">Thank You</h3>
                <p className="text-sm text-silver-muted/70 font-sans font-light leading-relaxed">
                  We've received your application and will be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-panel p-8 md:p-10 space-y-6 max-h-[600px] overflow-y-auto">
                {/* Name */}
                <div>
                  <label className="block text-xs tracking-[0.2em] uppercase text-forest-light font-sans font-light mb-2">
                    Full Name *
                  </label>
                  <div className="border-b border-forest-accent/20 focus-within:border-forest-accent/60 transition-colors duration-300">
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-transparent py-2 text-sm text-bone font-sans font-light placeholder-silver-muted/30 focus:outline-none"
                      placeholder="Your name"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs tracking-[0.2em] uppercase text-forest-light font-sans font-light mb-2">
                    Email *
                  </label>
                  <div className="border-b border-forest-accent/20 focus-within:border-forest-accent/60 transition-colors duration-300">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-transparent py-2 text-sm text-bone font-sans font-light placeholder-silver-muted/30 focus:outline-none"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Instagram */}
                <div>
                  <label className="block text-xs tracking-[0.2em] uppercase text-forest-light font-sans font-light mb-2">
                    Instagram / Portfolio
                  </label>
                  <div className="border-b border-forest-accent/20 focus-within:border-forest-accent/60 transition-colors duration-300">
                    <input
                      type="text"
                      value={instagram}
                      onChange={(e) => setInstagram(e.target.value)}
                      className="w-full bg-transparent py-2 text-sm text-bone font-sans font-light placeholder-silver-muted/30 focus:outline-none"
                      placeholder="@username or link"
                    />
                  </div>
                </div>

                {/* City */}
                <div>
                  <label className="block text-xs tracking-[0.2em] uppercase text-forest-light font-sans font-light mb-2">
                    City / Location *
                  </label>
                  <div className="border-b border-forest-accent/20 focus-within:border-forest-accent/60 transition-colors duration-300">
                    <input
                      type="text"
                      required
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full bg-transparent py-2 text-sm text-bone font-sans font-light placeholder-silver-muted/30 focus:outline-none"
                      placeholder="Your city"
                    />
                  </div>
                </div>

                {/* Specialty */}
                <div>
                  <label className="block text-xs tracking-[0.2em] uppercase text-forest-light font-sans font-light mb-2">
                    Tattoo Style / Specialty *
                  </label>
                  <div className="border-b border-forest-accent/20 focus-within:border-forest-accent/60 transition-colors duration-300">
                    <input
                      type="text"
                      required
                      value={specialty}
                      onChange={(e) => setSpecialty(e.target.value)}
                      className="w-full bg-transparent py-2 text-sm text-bone font-sans font-light placeholder-silver-muted/30 focus:outline-none"
                      placeholder="e.g., Fine line, Realism, Blackwork"
                    />
                  </div>
                </div>

                {/* Collaboration Type */}
                <div>
                  <label className="block text-xs tracking-[0.2em] uppercase text-forest-light font-sans font-light mb-2">
                    Collaboration Interest
                  </label>
                  <div className="border-b border-forest-accent/20 focus-within:border-forest-accent/60 transition-colors duration-300">
                    <select
                      value={collaborationType}
                      onChange={(e) => setCollaborationType(e.target.value)}
                      className="w-full bg-transparent py-2 text-sm text-bone font-sans font-light placeholder-silver-muted/30 focus:outline-none"
                    >
                      <option value="" className="bg-obsidian text-bone">Select type...</option>
                      <option value="product_testing" className="bg-obsidian text-bone">Product Testing</option>
                      <option value="collaboration" className="bg-obsidian text-bone">Studio Collaboration</option>
                      <option value="both" className="bg-obsidian text-bone">Both</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs tracking-[0.2em] uppercase text-forest-light font-sans font-light mb-2">
                    Message
                  </label>
                  <div className="border-b border-forest-accent/20 focus-within:border-forest-accent/60 transition-colors duration-300">
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-transparent py-2 text-sm text-bone font-sans font-light placeholder-silver-muted/30 focus:outline-none resize-none"
                      placeholder="Tell us about your studio and vision"
                      rows={3}
                    />
                  </div>
                </div>

                {/* Checkbox */}
                <div className="flex items-start gap-3 pt-2">
                  <input
                    type="checkbox"
                    id="contact_ok"
                    checked={contactOk}
                    onChange={(e) => setContactOk(e.target.checked)}
                    className="mt-1 cursor-pointer accent-forest-accent"
                  />
                  <label htmlFor="contact_ok" className="text-xs text-silver-muted/70 font-sans font-light leading-relaxed cursor-pointer">
                    I'm open to being contacted about artist program and collaboration opportunities
                  </label>
                </div>

                {error && (
                  <p className="text-xs text-red-400/70 font-sans font-light">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-bone text-black text-sm tracking-[0.15em] uppercase font-sans font-medium hover:bg-white transition-colors duration-300 disabled:opacity-50 mt-4"
                >
                  {loading ? 'Submitting...' : 'Apply'}
                </button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-forest-accent/20 to-transparent" />
    </section>
  )
}
