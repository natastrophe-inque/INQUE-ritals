import { ScrollReveal } from '@/components/ui/ScrollReveal'
import type { TraumaType } from '@/types'

const traumaTypes: TraumaType[] = [
  {
    title: 'Tattoo Recovery',
    description: 'Fresh ink places extraordinary demands on the skin, requiring targeted support during the critical healing window.',
  },
  {
    title: 'Barrier Damage',
    description: 'Environmental exposure and daily stress weaken the skin\u2019s natural defenses over time.',
  },
  {
    title: 'Irritation & Redness',
    description: 'Support for skin experiencing visible stress, discomfort, and sensitivity.',
  },
  {
    title: 'Post-Procedure Care',
    description: 'Designed for recovery periods when skin requires additional support beyond standard aftercare.',
  },
]

export default function SkinTraumaSection() {
  return (
    <section
      data-component="src/components/SkinTraumaSection.tsx"
      className="relative bg-black py-24 md:py-36"
    >
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-bone leading-tight mb-16 text-center">
            Skin trauma takes
            <br />
            <span className="italic">many forms.</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-iridescent/10">
          {traumaTypes.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 120}>
              <div className="bg-black p-8 md:p-12 group hover:bg-obsidian transition-colors duration-700">
                <div className="mb-6">
                  <span className="text-xs tracking-[0.2em] uppercase text-iridescent-light/60 font-sans font-light">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-serif text-bone mb-4">
                  {item.title}
                </h3>
                <div className="line-accent mb-5" />
                <p className="text-sm text-silver-muted/70 font-sans font-light leading-relaxed max-w-sm">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-iridescent/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-iridescent/10 to-transparent" />
    </section>
  )
}
