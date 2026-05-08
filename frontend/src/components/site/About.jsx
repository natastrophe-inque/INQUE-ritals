import { useReveal } from "../../hooks/useReveal";
import Spiral, { SpiralDivider } from "./Spiral";

const PILLARS = [
  { k: "Origin", v: "Toronto · Canada" },
  { k: "Founded", v: "MMXXV" },
  { k: "Discipline", v: "Biotech aftercare" },
  { k: "Distribution", v: "Studios + Direct" },
];

export default function About() {
  const ref = useReveal();
  return (
    <section
      id="about"
      data-testid="about-section"
      className="relative bg-[#0B0B0D] border-t border-[rgba(236,234,228,0.08)] overflow-hidden"
    >
      <div className="relative px-6 md:px-12 py-24 md:py-32">
        <div ref={ref} className="reveal grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-4">
            <span className="overline">Chapter — 03 / About</span>
            <div className="mt-8">
              <Spiral size={140} stroke="#5E8B7E" strokeWidth={0.7} opacity={0.85} />
            </div>

            <ul className="mt-12 border-t border-[rgba(236,234,228,0.12)]">
              {PILLARS.map(({ k, v }) => (
                <li
                  key={k}
                  className="flex items-center justify-between border-b border-[rgba(236,234,228,0.12)] py-4"
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#6A6A65]">{k}</span>
                  <span className="font-mono text-[11px] tracking-[0.18em] text-[#ECEAE4]">{v}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-8">
            <h2 className="font-display font-light text-5xl sm:text-6xl lg:text-7xl text-[#ECEAE4] tracking-tight leading-[0.95]">
              The mark
              <br />
              is permanent.
              <br />
              <em className="italic font-light text-[#5E8B7E]">The recovery</em>
              <br />
              <em className="italic font-light text-[#5E8B7E]">should be sacred.</em>
            </h2>

            <SpiralDivider className="my-14" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-3xl">
              <p className="font-body text-[15px] leading-[1.85] text-[#9E9E98]">
                INQUE was founded in Toronto by tattoo artists tired of
                pharmacy-shelf aftercare — the petroleum, the perfume, the
                vague promises. We wanted something quiet, clinical, and
                unmistakably premium for the work we put on people for life.
              </p>
              <p className="font-body text-[15px] leading-[1.85] text-[#9E9E98]">
                The result is Salvix — a two-piece biotech system built on
                copper peptides, plant-grown squalane, and a manufacturing
                discipline borrowed from luxury skincare. No shortcuts. No
                fragrance. Only what serves the regeneration of marked skin.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-[rgba(94,139,126,0.28)] pt-10">
              {[
                ["I.", "Vegan + biotech"],
                ["II.", "Fragrance-free"],
                ["III.", "Made in Toronto"],
                ["IV.", "Tested on tattooed skin"],
              ].map(([n, t]) => (
                <div key={n}>
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em]" style={{ color: "#5E8B7E" }}>
                    {n}
                  </span>
                  <p className="font-display text-xl md:text-2xl font-light text-[#ECEAE4] mt-3 leading-snug">
                    {t}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
