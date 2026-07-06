import { ScrollReveal } from '@/components/ui/ScrollReveal'
import type { FeatureCard } from '@/types'

const cards: FeatureCard[] = [
  {
    title: 'Barrier Repair',
    description: 'Supports the skin's protective barrier when trauma leaves it compromised.',
    icon: 'shield',
  },
  {
    title: 'Biotech Actives',
    description: 'Advanced peptides and recovery-focused ingredients selected for performance.',
    icon: 'flask',
  },
  {
    title: 'Hydration Architecture',
    description: 'Multi-layer moisture support designed to help stressed skin retain hydration.',
    icon: 'droplet',
  },
  {
    title: 'Recovery Focused',
    description: 'Created specifically for periods of irritation, sensitivity, and healing.',
    icon: 'pulse',
  },
]

function FeatureIcon({ icon }: { icon?: string }) {
  if (!icon) return null
  
  const paths: Record<string, JSX.Element> = {
    shield: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
      />
    ),
    flask: (
      <>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3h6" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 3v6.3c0 .7-.3 1.4-.8 1.8L5 16c-1.2 1.4-.4 3.5 1.5 3.5h11c1.9 0 2.7-2.1 1.5-3.5l-4.2-4.9c-.5-.4-.8-1.1-.8-1.8V3" />
      </>
    ),
    droplet: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"
      />
    ),
    pulse: (
      <>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </>
    ),
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="text-iridescent"
    >
      {paths[icon]}
    </svg>
  )
}

export default function ScienceSection() {
  return (
    <section
      id="science"
      data-component="src/components/ScienceSection.tsx"
      className="relative bg-obsidian py-24 md:py-36"
    >
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="mb-4">
            <span className="text-xs tracking-[0.25em] uppercase text-iridescent-light font-sans font-light">
              Why SALVIX
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-bone leading-tight mb-6">
            The science beneath
            <br />
            <span className="italic">the ritual.</span>
          </h2>
          <p className="max-w-xl text-base md:text-lg text-silver-muted/80 font-sans font-light leading-relaxed mb-16">
            Luxury should not come at the expense of efficacy. SALVIX combines modern skin science with recovery-focused formulation to support skin when it is most vulnerable.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-iridescent/10">
          {cards.map((card, i) => (
            <ScrollReveal key={card.title} delay={i * 100}>
              <div className="bg-obsidian p-8 md:p-10 group hover:bg-deep-green/50 transition-colors duration-700">
                <div className="mb-5">
                  <FeatureIcon icon={card.icon} />
                </div>
                <h3 className="text-xl md:text-2xl font-serif text-bone mb-3">
                  {card.title}
                </h3>
                <div className="line-accent mb-4" />
                <p className="text-sm text-silver-muted/70 font-sans font-light leading-relaxed">
                  {card.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-iridescent/20 to-transparent" />
    </section>
  )
}
