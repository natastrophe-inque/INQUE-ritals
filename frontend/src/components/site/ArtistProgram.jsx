import { useReveal } from "../../hooks/useReveal";
import Spiral from "./Spiral";

const BENEFITS = [
  {
    no: "01",
    title: "Wholesale terms",
    body: "Verified studios receive priority access, tiered case pricing, and seasonal first-look on Phase 03 product drops.",
  },
  {
    no: "02",
    title: "Co-branded kits",
    body: "Studio-stamped Salvix kits ship to your clients post-session — your insignia, our protocol card, traceable lot numbers.",
  },
  {
    no: "03",
    title: "Editorial support",
    body: "Imagery, education decks, and aftercare protocol cards translated for your floor staff. We make recovery part of the craft.",
  },
];

export default function ArtistProgram() {
  const ref = useReveal();
  return (
    <section
      id="program"
      data-testid="program-section"
      className="relative bg-[#0B0B0D] border-t border-[rgba(236,234,228,0.08)] overflow-hidden"
    >
      <div className="absolute right-[-160px] bottom-[-120px] pointer-events-none">
        <Spiral size={520} stroke="#2B4F47" strokeWidth={0.4} opacity={0.18} rotate />
      </div>

      <div className="relative px-6 md:px-12 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-5">
            <span className="overline" style={{ color: "#5E8B7E" }}>Chapter — 02 / Artist Program</span>
            <h2 className="font-display font-light text-5xl sm:text-6xl lg:text-7xl text-[#ECEAE4] tracking-tight leading-[0.95] mt-6">
              Crafted for
              <br />
              <em className="italic font-light text-[#9E9E98]">artists.</em>
              <br />
              Engineered for
              <br />
              healing.
            </h2>
            <div className="hairline-green my-10" />
            <p className="font-body text-[15px] leading-relaxed text-[#9E9E98] max-w-md">
              The INQUE Artist Program is a closed wholesale partnership for
              tattoo studios committed to ritual-grade aftercare. By
              application — vetted on craft, hygiene, and editorial alignment.
            </p>
            <button
              data-testid="program-apply-cta"
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
              className="btn-sharp filled-green mt-10"
            >
              Apply to the Program
            </button>
          </div>

          <div ref={ref} className="reveal md:col-span-7">
            <ol className="border-t border-[rgba(94,139,126,0.28)]">
              {BENEFITS.map((p) => (
                <li
                  key={p.no}
                  data-testid={`pillar-${p.no}`}
                  className="grid grid-cols-12 gap-6 py-10 border-b border-[rgba(94,139,126,0.28)] group"
                >
                  <div className="col-span-2">
                    <span className="font-mono text-[11px] uppercase tracking-[0.3em]" style={{ color: "#5E8B7E" }}>
                      {p.no} —
                    </span>
                  </div>
                  <div className="col-span-10">
                    <h3 className="font-display text-3xl md:text-4xl font-light text-[#ECEAE4] tracking-tight transition-colors group-hover:text-white">
                      {p.title}
                    </h3>
                    <p className="font-body text-[15px] leading-relaxed text-[#9E9E98] mt-4 max-w-xl">
                      {p.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
