import { ScrollReveal } from '@/components/ui/ScrollReveal'

interface TraumaType {
  number: string
  title: string
  description: string
}

const traumaTypes: TraumaType[] = [
  {
    number: '01',
    title: 'Tattoo Recovery',
    description: 'Support skin through the full tattoo healing cycle.',
  },
  {
    number: '02',
    title: 'Barrier Damage',
    description: 'Restore compromised protective barriers.',
  },
  {
    number: '03',
    title: 'Irritation & Redness',
    description: 'Calm reactive and inflamed skin.',
  },
  {
    number: '04',
    title: 'Post-Procedure',
    description: 'Recovery care for all skin procedures.',
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
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-bone leading-tight mb-16">
            Skin trauma
            <br />
            <span className="italic">takes many forms.</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {traumaTypes.map((item, i) => (
            <ScrollReveal key={item.number} delay={i * 100}>
              <div className="group">
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-3xl md:text-4xl font-serif text-forest-accent/40 font-light">
                    {item.number}
                  </span>
                  <h3 className="text-xl md:text-2xl font-serif text-bone">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm md:text-base text-silver-muted/70 font-sans font-light leading-relaxed ml-16">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-forest-accent/20 to-transparent" />
    </section>
  )
}
