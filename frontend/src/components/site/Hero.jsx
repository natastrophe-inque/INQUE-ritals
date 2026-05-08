import { useReveal } from "../../hooks/useReveal";

export default function Hero() {
  const ref = useReveal();
  return (
    <section
      data-testid="hero-section"
      className="relative min-h-[100svh] flex items-end overflow-hidden bg-[#0A0A0C] grain"
    >
      <div className="hero-glow" />

      {/* Faint background image */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1705254613799-da8cea6925bc?crop=entropy&cs=srgb&fm=jpg&q=85&w=1800')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "grayscale(100%) contrast(1.05)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-[#0A0A0C]/70 to-transparent" />

      {/* Top frame index */}
      <div className="absolute top-24 md:top-28 left-6 md:left-12 right-6 md:right-12 flex items-start justify-between text-[#70706D]">
        <span className="overline">N° 001 / Atelier</span>
        <span className="overline hidden md:block">Edition — MMXXV</span>
      </div>

      {/* Content */}
      <div ref={ref} className="reveal relative z-10 w-full px-6 md:px-12 pb-20 md:pb-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-1 hidden md:flex flex-col gap-3">
            <span className="overline rotate-180" style={{ writingMode: "vertical-rl" }}>
              Gothic · Luxury
            </span>
          </div>

          <div className="md:col-span-8">
            <p className="overline mb-8">A Studio of Permanence</p>
            <h1
              data-testid="hero-headline"
              className="font-display font-light text-[15vw] md:text-[10.5vw] leading-[0.92] tracking-[-0.02em] text-[#E8E6E1]"
            >
              Gothic
              <br />
              <span className="italic font-light text-[#A3A3A0]">luxury,</span>
              <br />
              etched in skin.
            </h1>
          </div>

          <div className="md:col-span-3 flex flex-col justify-end gap-8">
            <p className="font-body font-light text-[15px] leading-relaxed text-[#A3A3A0] max-w-xs">
              Singular, hand-drawn tattoo work and the SALVIX biotech aftercare
              system — a closed atelier for collectors of permanent objects.
            </p>
            <button
              data-testid="hero-cta-inquire"
              onClick={() => document.getElementById("inquire")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-sharp self-start"
            >
              Inquire
            </button>
          </div>
        </div>
      </div>

      {/* Bottom-left technical line */}
      <div className="absolute bottom-6 left-6 md:left-12 flex items-center gap-3 text-[#70706D]">
        <span className="block w-8 h-px bg-[#70706D]" />
        <span className="overline">Scroll · 01 — 04</span>
      </div>
    </section>
  );
}
