import { useState } from 'react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { useWaitlist } from '@/hooks/useWaitlist'

export default function FinalCTASection() {
  const [email, setEmail] = useState('')
  const { join, loading, error, success } = useWaitlist()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    await join(email)
    if (!error) setEmail('')
  }

  return (
    <section
      id="waitlist"
      data-component="src/components/FinalCTASection.tsx"
      className="relative bg-obsidian py-24 md:py-36"
    >
      <div className="mx-auto max-w-4xl px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="mb-4">
              <span className="text-xs tracking-[0.25em] uppercase text-forest-light font-sans font-light">
                Join Us
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-bone leading-tight mb-6">
              The Future
              <br />
              <span className="italic">of Recovery.</span>
            </h2>
            <p className="text-base md:text-lg text-silver-muted/80 font-sans font-light leading-relaxed max-w-2xl mx-auto">
              SALVIX is coming. Be first to know when we launch.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <form onSubmit={handleSubmit} className="glass-panel p-8 md:p-12 max-w-lg mx-auto">
            <div className="mb-8">
              <label className="block text-xs tracking-[0.2em] uppercase text-forest-light font-sans font-light mb-4">
                Email Address
              </label>
              <div className="border-b border-forest-accent/20 focus-within:border-forest-accent/60 transition-colors duration-300">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full bg-transparent py-3 text-sm text-bone font-sans font-light placeholder-silver-muted/30 focus:outline-none"
                />
              </div>
            </div>

            {error && <p className="text-xs text-red-400/70 font-sans font-light mb-4">{error}</p>}

            {success ? (
              <div className="text-center py-4">
                <p className="text-sm text-forest-light font-sans font-light">
                  ✓ You're on the list
                </p>
              </div>
            ) : (
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 bg-bone text-black text-sm tracking-[0.15em] uppercase font-sans font-medium hover:bg-white transition-colors duration-300 disabled:opacity-50"
              >
                {loading ? 'Joining...' : 'Join the Waitlist'}
              </button>
            )}
          </form>
        </ScrollReveal>
      </div>

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-forest-accent/20 to-transparent" />
    </section>
  )
}
