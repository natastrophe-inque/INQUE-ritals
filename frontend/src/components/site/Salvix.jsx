import { useReveal } from "../../hooks/useReveal";
import Spiral from "./Spiral";

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
        style={{ right: "-12vw", top: "20%" }}
      >
        <Spiral size={520} stroke="#23463F" strokeWidth={0.5} opacity={0.08} rotate />
      </div>

      <div className="relative px-6 md:px-12 py-32 md:py-48">
        <div ref={ref} className="reveal max-w-3xl mx-auto text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.4em]" style={{ color: "#5E8B7E" }}>
            Salvix
          </p>

          <h2
            data-testid="salvix-headline"
            className="font-display font-light text-[clamp(2.5rem,6vw,5.5rem)] tracking-[-0.02em] leading-[1.05] text-[#ECEAE4] mt-8"
          >
            Tattoo Balm
            <br />
            <em className="italic font-light text-[#9E9E98]">&amp; Glide.</em>
          </h2>

          <div className="mt-16 md:mt-20 max-w-xl mx-auto space-y-5">
            <p className="font-display italic text-xl md:text-2xl font-light text-[#9E9E98] tracking-tight leading-snug">
              Tattoo aftercare is outdated.
            </p>
            <p className="font-body text-[14px] md:text-[15px] leading-[1.85] text-[#9E9E98]">
              SALVIX is a biotech-informed balm and glide designed for marked skin.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
