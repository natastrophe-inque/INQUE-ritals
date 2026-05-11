import { useReveal } from "../../hooks/useReveal";

const INGREDIENTS = ["Snail Mucin", "Ectoin", "Panthenol", "Peptides"];

export default function Salvix() {
  const ref = useReveal();
  return (
    <section
      id="salvix"
      data-testid="salvix-section"
      className="relative bg-[#0B0B0D] border-t border-[rgba(236,234,228,0.05)] overflow-hidden"
    >
      <div className="relative px-6 md:px-12 py-40 md:py-56">
        <div ref={ref} className="reveal max-w-3xl mx-auto text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.46em] text-[#4B5F4F]">
            Salvix
          </p>

          <h2
            data-testid="salvix-headline"
            className="font-display font-light text-[clamp(2.25rem,5vw,4.75rem)] tracking-[-0.02em] leading-[1.04] text-[#ECEAE4] mt-10"
          >
            Recovery Balm.
          </h2>

          <p className="font-display italic text-lg md:text-xl font-light text-[#8A8478] mt-10 tracking-tight">
            Advanced biotech recovery for tattooed skin.
          </p>

          <p className="font-body text-[14px] md:text-[15px] leading-[1.95] text-[#9E9E98] mt-12 max-w-xl mx-auto">
            A next-generation recovery treatment engineered to support healing,
            comfort, and barrier restoration for compromised tattooed skin.
          </p>

          {/* Ingredient hairlines — minimal typography only */}
          <ul className="mt-20 md:mt-24 flex flex-wrap justify-center gap-x-10 gap-y-4">
            {INGREDIENTS.map((ing) => (
              <li
                key={ing}
                data-testid={`ingredient-${ing.toLowerCase().replace(/\s/g, "-")}`}
                className="font-mono text-[10px] uppercase tracking-[0.34em] text-[#9E9E98]"
              >
                {ing}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
