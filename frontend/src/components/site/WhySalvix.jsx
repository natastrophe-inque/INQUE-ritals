import { useReveal } from "../../hooks/useReveal";
import Spiral from "./Spiral";

const PILLARS = [
  {
    title: "Barrier Repair",
    body: "Reinforces the dermal lipid barrier the moment ink-trauma breaks it open.",
  },
  {
    title: "Biotech Actives",
    body: "Recombinant peptides and bio-fermented mucin engineered, not foraged.",
  },
  {
    title: "Recovery Focused",
    body: "Not a generic salve. Formulated for the days the skin is most fragile.",
  },
  {
    title: "Tattoo Specific",
    body: "Calibrated for pigment retention, line integrity, and saturated black work.",
  },
];

export default function WhySalvix() {
  const ref = useReveal();
  return (
    <section
      id="why"
      data-testid="why-section"
      className="relative bg-[#0B0B0D] border-t border-[rgba(236,234,228,0.06)] overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute pointer-events-none"
        style={{ left: "-14vw", bottom: "5%" }}
      >
        <Spiral size={460} stroke="#23463F" strokeWidth={0.9} opacity={0.07} rotate glow={false} />
      </div>

      <div className="relative px-6 md:px-12 py-32 md:py-44">
        <div ref={ref} className="reveal max-w-5xl mx-auto">
          <div className="text-center">
            <p className="font-mono text-[10px] uppercase tracking-[0.4em]" style={{ color: "#5E8B7E" }}>
              Why Salvix
            </p>
            <h2 className="font-display font-light text-[clamp(2.25rem,5vw,4.5rem)] tracking-[-0.02em] leading-[1.05] text-[#ECEAE4] mt-6">
              The science beneath
              <br />
              <em className="italic font-light text-[#9E9E98]">the ritual.</em>
            </h2>
          </div>

          <div className="mt-20 md:mt-24 grid grid-cols-1 md:grid-cols-2 gap-px bg-[rgba(94,139,126,0.18)] border border-[rgba(94,139,126,0.18)]">
            {PILLARS.map((p, i) => (
              <article
                key={p.title}
                data-testid={`pillar-${i}`}
                className="bg-[#0B0B0D] p-10 md:p-12 transition-colors duration-700 hover:bg-[#101012]"
              >
                <h3 className="font-display text-2xl md:text-3xl font-light text-[#ECEAE4] tracking-tight">
                  {p.title}
                </h3>
                <div className="w-10 h-px bg-[#2B4F47] mt-5" />
                <p className="font-body text-[14px] md:text-[15px] leading-[1.8] text-[#9E9E98] mt-6 max-w-md">
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
