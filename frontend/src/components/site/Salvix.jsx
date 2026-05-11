import { useReveal } from "../../hooks/useReveal";
import Spiral, { SpiralMark } from "./Spiral";

const INGREDIENTS = [
  { name: "Snail Mucin", note: "Mucopolysaccharide regeneration" },
  { name: "Ectoin", note: "Osmolyte barrier defence" },
  { name: "Panthenol", note: "Pro-vitamin B5 calming" },
  { name: "Peptides", note: "Signal-driven repair" },
];

/** Matte black soft-touch tube with embossed metallic green spiral sigil */
function MatteTube() {
  return (
    <div className="relative w-[160px] h-[360px] md:w-[200px] md:h-[440px]">
      {/* Cap */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-[7%]"
        style={{
          background: "linear-gradient(180deg, #1A1C1A 0%, #0E0F0E 100%)",
          borderTop: "1px solid rgba(94,139,126,0.18)",
          boxShadow: "inset 0 -1px 0 rgba(0,0,0,0.8)",
        }}
      />
      {/* Body — matte black soft-touch */}
      <div
        className="absolute top-[7%] left-0 right-0 bottom-0 overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 80% 30% at 50% 6%, rgba(94,139,126,0.06), transparent 60%), linear-gradient(180deg, #131416 0%, #0C0D0E 50%, #08090A 100%)",
          clipPath: "polygon(10% 0, 90% 0, 100% 100%, 0% 100%)",
          border: "1px solid rgba(94,139,126,0.10)",
          boxShadow:
            "inset 18px 0 30px rgba(0,0,0,0.55), inset -18px 0 30px rgba(0,0,0,0.55), inset 0 1px 0 rgba(94,139,126,0.10), 0 60px 80px -40px rgba(0,0,0,0.9)",
        }}
      >
        {/* Soft-touch matte sheen */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(110deg, rgba(94,139,126,0.04) 0%, transparent 30%, transparent 70%, rgba(94,139,126,0.03) 100%)",
          }}
        />
        {/* Embossed dark green spiral sigil */}
        <div className="absolute top-[34%] left-1/2 -translate-x-1/2 opacity-90">
          <Spiral size={70} strokeWidth={1.2} stroke="#2B4F47" opacity={0.85} glow={false} />
        </div>
        {/* Brand mark */}
        <div className="absolute top-[62%] left-1/2 -translate-x-1/2 text-center">
          <p className="font-display text-[15px] tracking-[0.18em] text-[#5E8B7E]">SALVIX</p>
          <p className="font-mono text-[8px] uppercase tracking-[0.32em] text-[#6A6A65] mt-2">
            Recovery Balm
          </p>
        </div>
      </div>
      {/* Reflection */}
      <div
        className="absolute -bottom-14 left-1/2 -translate-x-1/2 w-[80%] h-14 opacity-15 blur-md"
        style={{
          background: "linear-gradient(180deg, rgba(94,139,126,0.4), transparent)",
          transform: "translateX(-50%) scaleY(-1)",
        }}
      />
    </div>
  );
}

export default function Salvix() {
  const ref = useReveal();
  return (
    <section
      id="salvix"
      data-testid="salvix-section"
      className="relative bg-[#0B0B0D] border-t border-[rgba(236,234,228,0.06)] overflow-hidden"
    >
      {/* Faint background spiral */}
      <div
        aria-hidden
        className="absolute pointer-events-none"
        style={{ right: "-14vw", top: "10%" }}
      >
        <Spiral size={520} stroke="#23463F" strokeWidth={0.9} opacity={0.08} rotate glow={false} />
      </div>

      <div className="relative px-6 md:px-12 py-32 md:py-44">
        <div ref={ref} className="reveal max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
            {/* Tube visual */}
            <div className="md:col-span-5 flex justify-center">
              <div className="relative">
                <div
                  className="absolute -z-10 metal-glow"
                  style={{
                    width: "380px",
                    height: "380px",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
                <MatteTube />
              </div>
            </div>

            {/* Copy */}
            <div className="md:col-span-7">
              <p className="font-mono text-[10px] uppercase tracking-[0.4em]" style={{ color: "#5E8B7E" }}>
                Salvix
              </p>

              <h2
                data-testid="salvix-headline"
                className="font-display font-light text-[clamp(2.25rem,5vw,4.75rem)] tracking-[-0.02em] leading-[1.05] text-[#ECEAE4] mt-6"
              >
                Recovery Balm.
              </h2>

              <p className="font-display italic text-xl md:text-2xl font-light text-[#9E9E98] mt-6 tracking-tight leading-snug">
                Advanced biotech recovery for tattooed skin.
              </p>

              <p className="font-body text-[14px] md:text-[15px] leading-[1.85] text-[#9E9E98] mt-8 max-w-xl">
                A next-generation recovery treatment engineered to support
                healing, comfort, and barrier restoration for compromised
                tattooed skin.
              </p>

              {/* Ingredient highlights */}
              <ul className="mt-14 grid grid-cols-2 gap-px bg-[rgba(94,139,126,0.18)] border border-[rgba(94,139,126,0.18)] max-w-xl">
                {INGREDIENTS.map((ing) => (
                  <li
                    key={ing.name}
                    data-testid={`ingredient-${ing.name.toLowerCase().replace(/\s/g, "-")}`}
                    className="bg-[#0B0B0D] p-5 md:p-6"
                  >
                    <p className="font-display text-base md:text-lg font-light text-[#ECEAE4] tracking-tight">
                      {ing.name}
                    </p>
                    <p className="font-mono text-[9px] uppercase tracking-[0.28em] text-[#6A6A65] mt-2">
                      {ing.note}
                    </p>
                  </li>
                ))}
              </ul>

              <div className="mt-12 flex items-center gap-4">
                <SpiralMark size={14} />
                <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#5E8B7E]">
                  For the marked.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
