import { ScrollReveal } from '@/components/ui/ScrollReveal'
import type { Ingredient } from '@/types'

const ingredients: Ingredient[] = [
  { name: 'Snail Mucin', subtitle: 'Regeneration Support' },
  { name: 'Copper Peptides', subtitle: 'Signal-Driven Repair' },
  { name: 'Centella Asiatica', subtitle: 'Botanical Recovery' },
  { name: 'Ectoin', subtitle: 'Barrier Defence' },
  { name: 'Panthenol', subtitle: 'Calming Support' },
  { name: 'Ceramides', subtitle: 'Barrier Reinforcement' },
]

export default function FormulaSection() {
  return (
    <section
      id="formula"
      data-component="src/components/FormulaSection.tsx"
      className="relative bg-obsidian py-24 md:py-36"
    >
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="mb-4">
            <span className="text-xs tracking-[0.25em] uppercase text-forest-light font-sans font-light">
              The Formula
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-bone leading-tight mb-6">
            Engineered
            <br />
            <span className="italic">for recovery.</span>
          </h2>
          <p className="max-w-xl text-base md:text-lg text-silver-muted/80 font-sans font-light leading-relaxed mb-16">
            Six performance-selected ingredients. Together, they support compromised skin through every stage of healing.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-forest-accent/10">
          {ingredients.map((ingredient, i) => (
            <ScrollReveal key={ingredient.name} delay={i * 80}>
              <div className="bg-obsidian p-8 md:p-10 group hover:bg-forest-deep/30 transition-colors duration-700">
                <div className="mb-4">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-forest-light/50 font-sans font-light">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-serif text-bone mb-3">
                  {ingredient.name}
                </h3>
                <div className="line-accent mb-4" />
                <p className="text-xs tracking-[0.12em] uppercase text-silver-muted/60 font-sans font-light leading-relaxed">
                  {ingredient.subtitle}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={400}>
          <p className="mt-16 text-center text-xs tracking-[0.2em] uppercase text-forest-light/50 font-sans font-light">
            For the marked.
          </p>
        </ScrollReveal>
      </div>

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-forest-accent/20 to-transparent" />
    </section>
  )
}
