import { useReveal } from "../../hooks/useReveal";
import Spiral from "./Spiral";

const PILLARS = [
  {
    n: "01",
    title: "Barrier Repair",
    body: "Reinforces the dermal lipid barrier the moment ink-trauma breaks it open.",
  },
  {
    n: "02",
    title: "Biotech Actives",
    body: "Recombinant peptides and bio-fermented mucin — engineered, not foraged.",
  },
  {
    n: "03",
    title: "Recovery Focused",
    body: "Not a generic salve. Formulated for the days the skin is most fragile.",
  },
  {
    n: "04",
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
      className="relative bg-[#0B0B0D] border-t border-[rgba(236,234,228,0.05)] overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute pointer-events-none"
        style={{ left: "-14vw", bottom: "5%" }}
      >
        <Spiral size={420} stroke="#1F3A33" strokeWidth={0.5} opacity={0.08} rotate />
      </div>

      <div className="relative px-6 md:px-12 py-32 md:py-44">
        <div ref={ref} className="reveal max-w-5xl mx-auto">
          <div className="text-center">
            <p className="font-mono text-[10px] uppercase tracking-[0.46em] text-[#6F8077]">
              Why Salvix
            </p>
            <h2 className="font-display font-light text-[clamp(2.25rem,5vw,4.5rem)] tracking-[-0.02em] leading-[1.05] text-[#ECEAE4] mt-8">
              The science beneath
              <br />
              <em className="italic font-light text-[#9E9E98]">the ritual.</em>
            </h2>
          </div>

          <div className="mt-20 md:mt-24 grid grid-cols-1 md:grid-cols-2 gap-px bg-[rgba(111,128,119,0.14)] border border-[rgba(111,128,119,0.14)]">
            {PILLARS.map((p, i) => (
              <article
                key={p.title}
                data-testid={`pillar-${i}`}
                className="bg-[#0B0B0D] p-10 md:p-14 transition-colors duration-700 hover:bg-[#0F1011]"
              >
                <div className="flex items-baseline gap-6">
                  <span className="font-mono text-[10px] uppercase tracking-[0.36em] text-[#3A4A3E]">
                    {p.n}
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl font-light text-[#ECEAE4] tracking-tight">
                    {p.title}
                  </h3>
                </div>
                <div className="w-10 h-px bg-[#1F3A33] mt-6" />
                <p className="font-body text-[14px] md:text-[15px] leading-[1.85] text-[#9E9E98] mt-6 max-w-md">
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
