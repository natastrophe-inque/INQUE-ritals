import { ScrollReveal } from '@/components/ui/ScrollReveal'

export default function FounderSection() {
  return (
    <section
      id="founder"
      data-component="src/components/FounderSection.tsx"
      className="relative bg-black py-24 md:py-36"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <ScrollReveal>
            <div className="mb-4">
              <span className="text-xs tracking-[0.25em] uppercase text-forest-light font-sans font-light">
                Origins
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-bone leading-tight mb-8">
              Born in tattoo.
              <br />
              <span className="italic">Built for recovery.</span>
            </h2>
            <p className="text-base md:text-lg text-silver-muted/80 font-sans font-light leading-relaxed mb-6 max-w-lg">
              Created by a tattoo artist who saw the gap between luxury skincare and modern aftercare. SALVIX bridges that divide.
            </p>
            <p className="text-base text-silver-muted/60 font-sans font-light leading-relaxed max-w-lg italic">
              Recovery deserves the same innovation as the procedures that require it.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="relative">
              <div className="aspect-[3/4] bg-forest-deep/20 flex items-center justify-center overflow-hidden">
                <div className="text-center p-12">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full border border-forest-accent/30 flex items-center justify-center">
                    <span className="text-2xl font-serif text-forest-light italic">I</span>
                  </div>
                  <p className="text-sm text-silver-muted/50 font-sans font-light leading-relaxed">
                    INQUE
                  </p>
                  <p className="text-xs text-forest-light/40 font-sans font-light tracking-[0.2em] uppercase mt-2">
                    Est. 2025
                  </p>
                </div>
              </div>
              <div className="absolute -top-3 -left-3 w-16 h-16 border-t border-l border-forest-accent/20" />
              <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b border-r border-forest-accent/20" />
            </div>
          </ScrollReveal>
        </div>
      </div>

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-forest-accent/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-forest-accent/10 to-transparent" />
    </section>
  )
}
