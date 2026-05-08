import { useReveal } from "../../hooks/useReveal";

const PILLARS = [
  {
    no: "01",
    title: "Mentorship",
    body: "One-on-one studio time across twelve months with the founding artist. Editorial composition, line discipline, and the ethics of permanence.",
  },
  {
    no: "02",
    title: "Residency",
    body: "Up to three apprentices per cohort live and work inside the atelier. Daily critique, archival access, model sittings, and shared library.",
  },
  {
    no: "03",
    title: "Imprint",
    body: "Graduates leave with a signed editorial portfolio and a formal release to draw under the Obsidian seal in their own studio.",
  },
];

export default function ArtistProgram() {
  const ref = useReveal();
  return (
    <section
      id="program"
      data-testid="program-section"
      className="relative bg-[#0A0A0C] border-t border-[rgba(232,230,225,0.08)]"
    >
      <div className="px-6 md:px-12 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-5">
            <span className="overline">Chapter — 03 / Artist Program</span>
            <h2 className="font-display font-light text-5xl sm:text-6xl lg:text-7xl text-[#E8E6E1] tracking-tight leading-[0.95] mt-6">
              An atelier
              <br />
              <em className="italic font-light text-[#A3A3A0]">teaches more</em>
              <br />
              than it sells.
            </h2>
            <div className="hairline my-10" />
            <p className="font-body text-[15px] leading-relaxed text-[#A3A3A0] max-w-md">
              Cohort 02 opens in Spring. We accept three apprentices per
              year — by application, on portfolio, on conversation. There is no fee.
              There is rarely a second invitation.
            </p>
            <button
              data-testid="program-apply-cta"
              onClick={() =>
                document.getElementById("inquire")?.scrollIntoView({ behavior: "smooth" })
              }
              className="btn-sharp green mt-10"
            >
              Apply — Cohort 02
            </button>
          </div>

          <div ref={ref} className="reveal md:col-span-7">
            <ol className="border-t border-[rgba(232,230,225,0.12)]">
              {PILLARS.map((p) => (
                <li
                  key={p.no}
                  data-testid={`pillar-${p.no}`}
                  className="grid grid-cols-12 gap-6 py-10 border-b border-[rgba(232,230,225,0.12)] group"
                >
                  <div className="col-span-2">
                    <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#4A5D4E]">
                      {p.no} —
                    </span>
                  </div>
                  <div className="col-span-10">
                    <h3 className="font-display text-3xl md:text-4xl font-light text-[#E8E6E1] tracking-tight transition-colors group-hover:text-white">
                      {p.title}
                    </h3>
                    <p className="font-body text-[15px] leading-relaxed text-[#A3A3A0] mt-4 max-w-xl">
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
