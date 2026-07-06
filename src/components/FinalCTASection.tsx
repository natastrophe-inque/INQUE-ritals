import { useState } from 'react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { useWaitlist } from '@/hooks/useWaitlist'

export default function FinalCTASection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const { join, loading, error } = useWaitlist()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    await join(email)
    setSubmitted(true)
  }

  return (
    <section
      id="waitlist"
      data-component="src/components/FinalCTASection.tsx"
      className="relative bg-black py-24 md:py-40"
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="w-[500px] h-[500px] rounded-full bg-iridescent/3 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
        <ScrollReveal>
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-iridescent" />
            <span className="text-xs tracking-[0.25em] uppercase text-iridescent-light font-sans font-light">
              SALVIX
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-bone leading-tight mb-6">
            Recovery,
            <br />
            <span className="italic">refined.</span>
          </h2>

          <p className="text-base md:text-lg text-silver-muted/70 font-sans font-light leading-relaxed mb-12">
            Join the waitlist and be among the first to experience advanced biotech recovery for skin under trauma.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          {submitted ? (
            <div className="animate-fade-in">
              <div className="w-14 h-14 mx-auto mb-6 rounded-full border border-iridescent/30 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  className="text-iridescent"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-lg font-serif text-bone mb-2">
                You are on the list.
              </p>
              <p className="text-sm text-silver-muted/60 font-sans font-light">
                We will notify you when SALVIX becomes available.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto">
              <div className="flex-1 w-full border-b border-iridescent/20 focus-within:border-iridescent/60 transition-colors duration-300">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full bg-transparent py-3 text-sm text-bone font-sans font-light placeholder-silver-muted/30 focus:outline-none text-center sm:text-left"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto px-10 py-3.5 bg-bone text-black text-sm tracking-[0.15em] uppercase font-sans font-medium hover:bg-white transition-colors duration-300 whitespace-nowrap disabled:opacity-50"
              >
                {loading ? 'Joining...' : 'Join the Waitlist'}
              </button>
            </form>
          )}
          {error && (
            <p className="mt-4 text-xs text-red-400/70 font-sans font-light">
              {error}
            </p>
          )}
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <p className="mt-20 text-xs tracking-[0.2em] uppercase text-iridescent-light/40 font-sans font-light">
            INQUE
          </p>
        </ScrollReveal>
      </div>

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-iridescent/20 to-transparent" />
    </section>
  )
}
