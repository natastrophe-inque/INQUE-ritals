import { useReveal } from "../../hooks/useReveal";
import Spiral from "./Spiral";

export default function Positioning() {
  const ref = useReveal();
  return (
    <section
      id="positioning"
      data-testid="positioning-section"
      className="relative bg-[#0B0B0D] border-t border-[rgba(236,234,228,0.05)] overflow-hidden"
    >
      {/* Faint atmospheric spiral, almost invisible */}
      <div
        aria-hidden
        className="absolute pointer-events-none"
        style={{ right: "-10vw", top: "8%" }}
      >
        <Spiral size={380} stroke="#1F3A33" strokeWidth={0.5} opacity={0.10} rotate />
      </div>

      <div className="relative px-6 md:px-12 py-40 md:py-56">
        <div ref={ref} className="reveal max-w-4xl mx-auto text-center">
          <p
            data-testid="positioning-overline"
            className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.46em] text-[#4B5F4F]"
          >
            Aftercare is outdated.
          </p>

          <h2
            data-testid="positioning-headline"
            className="font-display font-light text-[clamp(2.5rem,6.5vw,6rem)] tracking-[-0.02em] leading-[1.02] text-[#ECEAE4] mt-12"
          >
            Recovery is the
            <br />
            <em className="italic font-light text-[#4B5F4F]">new standard.</em>
          </h2>

          <p className="font-body text-[15px] md:text-[16px] leading-[1.95] text-[#9E9E98] mt-16 max-w-xl mx-auto">
            SALVIX exists for the moments after the needle stops — when real
            recovery begins. Engineered for compromised skin. Designed for
            lasting results.
          </p>
        </div>
      </div>
    </section>
  );
}
