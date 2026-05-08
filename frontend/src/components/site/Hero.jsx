import { useReveal } from "../../hooks/useReveal";
import Spiral from "./Spiral";

export default function Hero() {
  const ref = useReveal();
  return (
    <section
      data-testid="hero-section"
      className="relative min-h-[100svh] flex items-end overflow-hidden bg-[#0B0B0D] grain"
    >
      <div className="hero-glow" />

      {/* Editorial brushed-metal background */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1705254613799-da8cea6925bc?crop=entropy&cs=srgb&fm=jpg&q=85&w=1800')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "grayscale(100%) contrast(1.05) brightness(0.85)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-[#0B0B0D]/72 to-[#0B0B0D]/30" />

      {/* Embossed spiral motif — top right */}
      <div className="absolute -top-24 -right-24 md:top-12 md:right-8 pointer-events-none">
        <Spiral size={520} stroke="#5E8B7E" strokeWidth={0.4} opacity={0.18} rotate />
      </div>

      {/* Top frame index */}
      <div className="absolute top-24 md:top-28 left-6 md:left-12 right-6 md:right-12 flex items-start justify-between text-[#6A6A65]">
        <span className="overline">N° 001 / Toronto</span>
        <span className="overline hidden md:block">Ed. — MMXXV</span>
      </div>

      <div ref={ref} className="reveal relative z-10 w-full px-6 md:px-12 pb-20 md:pb-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-1 hidden md:flex flex-col gap-3">
            <span className="overline rotate-180" style={{ writingMode: "vertical-rl" }}>
              Ritual · Regeneration
            </span>
          </div>

          <div className="md:col-span-8">
            <p className="overline mb-8" style={{ color: "#5E8B7E" }}>For the marked.</p>
            <h1
              data-testid="hero-headline"
              className="font-display font-light text-[14vw] md:text-[10vw] leading-[0.92] tracking-[-0.02em] text-[#ECEAE4]"
            >
              Healing,
              <br />
              <span className="italic font-light text-[#9E9E98]">ritualized.</span>
            </h1>
            <p className="font-body font-light text-[15px] leading-relaxed text-[#9E9E98] mt-10 max-w-md">
              INQUE is a Toronto biotech aftercare house — engineered for
              tattoo artists, formulated for the recovery of newly inked skin.
              Where ink meets regeneration.
            </p>
          </div>

          <div className="md:col-span-3 flex flex-col justify-end gap-8">
            <div className="space-y-2">
              <span className="overline">The Range</span>
              <div className="space-y-1 mt-4">
                <p className="font-display text-2xl text-[#ECEAE4] tracking-tight">Salvix Balm</p>
                <p className="font-display text-2xl text-[#ECEAE4] tracking-tight">Salvix Glide</p>
              </div>
            </div>
            <button
              data-testid="hero-cta-shop"
              onClick={() => document.getElementById("salvix")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-sharp green self-start"
            >
              Discover Salvix
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-6 md:left-12 flex items-center gap-3 text-[#6A6A65]">
        <span className="block w-8 h-px bg-[#5E8B7E]" />
        <span className="overline">Scroll · 01 — 04</span>
      </div>
    </section>
  );
}
