import { useReveal } from "../../hooks/useReveal";
import { SpiralDivider } from "./Spiral";

const PRINCIPLES = [
  {
    no: "I.",
    title: "Skincare science, applied to ink.",
    body: "Every formulation begins in clinical dermatology — copper peptides, biotech squalane, plant lecithin — then is tuned for one purpose: holding pigment while the dermis closes.",
  },
  {
    no: "II.",
    title: "Ritual over routine.",
    body: "Recovery is not a chore. Salvix is paced as a three-phase ritual that mirrors the work itself — slow, deliberate, sacred.",
  },
  {
    no: "III.",
    title: "Built with the chair, not the lab.",
    body: "Co-developed alongside Toronto tattoo artists. Tested on freshly tattooed skin. Iterated until the studio insisted on it.",
  },
];

export default function BrandPhilosophy() {
  const ref = useReveal();
  return (
    <section
      id="philosophy"
      data-testid="philosophy-section"
      className="relative bg-[#0B0B0D] border-t border-[rgba(236,234,228,0.08)] overflow-hidden"
    >
      {/* Atmospheric editorial backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1761426457327-6e848190af28?crop=entropy&cs=srgb&fm=jpg&q=85&w=2000')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "grayscale(100%) contrast(1.1) brightness(0.6)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0D] via-[#0B0B0D]/85 to-[#0B0B0D]" />

      <div className="relative px-6 md:px-12 py-32 md:py-40">
        <div className="max-w-7xl mx-auto">
          {/* Massive editorial pull-quote */}
          <div ref={ref} className="reveal text-center max-w-5xl mx-auto">
            <span className="overline" style={{ color: "#5E8B7E" }}>Brand Philosophy</span>

            <h2
              data-testid="philosophy-headline"
              className="font-display font-light text-[clamp(2.75rem,7vw,6.5rem)] tracking-[-0.02em] leading-[0.96] text-[#ECEAE4] mt-10"
            >
              <span className="block">Where ink</span>
              <span className="block italic text-[#5E8B7E]">meets regeneration.</span>
            </h2>

            <SpiralDivider className="my-14 md:my-16 max-w-md mx-auto" />

            <p className="font-body font-light text-[16px] md:text-[18px] leading-[1.85] text-[#9E9E98] max-w-2xl mx-auto">
              INQUE is a Toronto-born biotech house writing aftercare as the
              second act of a tattoo. We treat new ink the way luxury skincare
              treats the face — with formulation rigor, restraint, and ritual.
            </p>
          </div>

          {/* Three-column editorial principles */}
          <div className="mt-24 md:mt-32 grid grid-cols-1 md:grid-cols-3 gap-px bg-[rgba(94,139,126,0.20)] border border-[rgba(94,139,126,0.20)]">
            {PRINCIPLES.map((p, i) => (
              <article
                key={p.no}
                data-testid={`principle-${i}`}
                className="bg-[#0B0B0D] p-10 md:p-12 brushed-metal hover:bg-[#101012] transition-colors duration-700"
              >
                <span
                  className="font-display text-5xl md:text-6xl font-light"
                  style={{ color: "#2B4F47" }}
                >
                  {p.no}
                </span>
                <h3 className="font-display text-2xl md:text-3xl font-light text-[#ECEAE4] tracking-tight mt-8 leading-tight">
                  {p.title}
                </h3>
                <p className="font-body text-[14px] leading-[1.75] text-[#9E9E98] mt-6">
                  {p.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
