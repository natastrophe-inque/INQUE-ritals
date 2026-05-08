import { useReveal } from "../../hooks/useReveal";

const WORKS = [
  {
    no: "01",
    title: "Reliquary",
    medium: "Black-grey · Single needle",
    note: "Anatomical iconography rendered in calligraphic line.",
    img: "https://images.unsplash.com/photo-1642015927416-2811fcccbd04?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
  },
  {
    no: "02",
    title: "Vespertine",
    medium: "Fine line · Botanical",
    note: "Late-bloom florals rendered with apothecary precision.",
    img: "https://images.unsplash.com/photo-1761426457327-6e848190af28?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
  },
  {
    no: "03",
    title: "Memento",
    medium: "Blackwork · Sculptural",
    note: "Architectural negative space, monochrome sigils.",
    img: "https://images.unsplash.com/photo-1642015927385-7789187dc913?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
  },
];

export default function Tattoos() {
  const ref = useReveal();
  return (
    <section
      id="tattoos"
      data-testid="tattoos-section"
      className="relative bg-[#0A0A0C] border-t border-[rgba(232,230,225,0.08)]"
    >
      <div className="px-6 md:px-12 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-4">
            <span className="overline">Chapter — 01</span>
            <h2 className="font-display font-light text-5xl sm:text-6xl lg:text-7xl tracking-tight text-[#E8E6E1] mt-6 leading-[0.95]">
              The work,
              <br />
              <em className="font-light italic text-[#A3A3A0]">in monochrome.</em>
            </h2>
            <div className="hairline my-10" />
            <p className="font-body text-[15px] leading-relaxed text-[#A3A3A0] max-w-md">
              Each piece is drafted privately, conceived for a single body and
              never repeated. The atelier accepts a limited number of collectors
              per season.
            </p>
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#4A5D4E] mt-8">
              Booking — by inquiry only
            </p>
          </div>

          <div ref={ref} className="reveal md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-px bg-[rgba(232,230,225,0.08)] border border-[rgba(232,230,225,0.08)]">
            {WORKS.map((w, i) => (
              <article
                key={w.no}
                data-testid={`work-${w.no}`}
                className={`group relative bg-[#0A0A0C] p-6 md:p-8 flex flex-col justify-between min-h-[360px] ${
                  i === 0 ? "sm:col-span-2 sm:min-h-[420px]" : ""
                }`}
              >
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-700"
                  style={{
                    backgroundImage: `url('${w.img}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: "grayscale(100%) contrast(1.1) brightness(0.65)",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0A0A0C]/85" />

                <div className="relative flex items-start justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#A3A3A0]">
                    N° {w.no}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#70706D]">
                    {w.medium}
                  </span>
                </div>

                <div className="relative">
                  <h3 className="font-display text-3xl md:text-4xl font-light text-[#E8E6E1] tracking-tight">
                    {w.title}
                  </h3>
                  <p className="font-body text-[14px] text-[#A3A3A0] mt-3 max-w-md leading-relaxed">
                    {w.note}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
