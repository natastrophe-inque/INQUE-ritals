import { useEffect, useRef, useState } from "react";
import Spiral from "./Spiral";

export default function Hero() {
  const ref = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let raf;
    const onScroll = () => {
      raf = requestAnimationFrame(() => setScrollY(window.scrollY));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    // trigger entrance reveal
    const t = setTimeout(() => ref.current?.classList.add("visible"), 80);
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
      clearTimeout(t);
    };
  }, []);

  const py = (factor) => `translate3d(0, ${scrollY * factor}px, 0)`;

  return (
    <section
      data-testid="hero-section"
      className="relative h-[100svh] overflow-hidden bg-[#0B0B0D] grain"
    >
      {/* Layer 1 — atmospheric backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 parallax-layer"
        style={{
          transform: py(0.18),
          backgroundImage:
            "url('https://images.unsplash.com/photo-1705254613799-da8cea6925bc?crop=entropy&cs=srgb&fm=jpg&q=85&w=2200')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "grayscale(100%) contrast(1.05) brightness(0.55)",
          opacity: 0.5,
        }}
      />

      {/* Layer 2 — metallic green glow */}
      <div
        aria-hidden
        className="metal-glow parallax-layer"
        style={{
          width: "70vw",
          height: "70vw",
          right: "-15vw",
          top: "-10vw",
          transform: py(-0.08),
        }}
      />
      <div
        aria-hidden
        className="metal-glow parallax-layer"
        style={{
          width: "55vw",
          height: "55vw",
          left: "-20vw",
          bottom: "-15vw",
          transform: py(0.04),
          opacity: 0.6,
        }}
      />

      {/* Layer 3 — gradient veil */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0D]/80 via-transparent to-[#0B0B0D]" />

      {/* Layer 4 — animated spiral, drifts up on scroll */}
      <div
        aria-hidden
        className="absolute parallax-layer pointer-events-none"
        style={{
          right: "-8vw",
          top: "8vh",
          transform: py(-0.22),
        }}
      >
        <Spiral size={620} stroke="#5E8B7E" strokeWidth={0.45} opacity={0.22} rotate />
      </div>

      {/* Top frame */}
      <div className="absolute top-24 md:top-28 left-6 md:left-12 right-6 md:right-12 flex items-start justify-between text-[#6A6A65] z-20">
        <div className="flex items-center gap-3">
          <span className="block w-1.5 h-1.5 rounded-full bg-[#5E8B7E] pulse-dot" />
          <span className="overline">Toronto · Live</span>
        </div>
        <span className="overline hidden md:block">N° 001 / Edition MMXXV</span>
      </div>

      {/* Center stack — wordmark + tagline */}
      <div
        ref={ref}
        className="reveal-stagger absolute inset-0 z-10 flex flex-col items-center justify-center px-4"
      >
        <p className="overline mb-8 md:mb-10" style={{ color: "#5E8B7E" }}>
          For the marked.
        </p>

        <h1
          data-testid="hero-headline"
          className="wordmark text-center"
          style={{ transform: `translate3d(0, ${-scrollY * 0.15}px, 0)` }}
        >
          INQUE
        </h1>

        <div className="mt-10 md:mt-14 max-w-xl text-center">
          <p className="font-display italic text-2xl md:text-3xl font-light text-[#9E9E98] leading-snug tracking-tight">
            Healing, ritualized.
          </p>
          <p className="font-body font-light text-[14px] md:text-[15px] leading-relaxed text-[#6A6A65] mt-6 max-w-md mx-auto">
            A Toronto biotech aftercare house — engineered for tattoo artists,
            formulated for the recovery of newly inked skin.
          </p>
        </div>

        <button
          data-testid="hero-cta-shop"
          onClick={() => document.getElementById("salvix")?.scrollIntoView({ behavior: "smooth" })}
          className="btn-sharp green mt-12 md:mt-14"
        >
          Discover Salvix
        </button>
      </div>

      {/* Bottom indicator */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex flex-col items-center gap-3 text-[#6A6A65]">
        <span className="block w-px h-10 bg-gradient-to-b from-transparent via-[#5E8B7E] to-transparent" />
        <span className="overline">Scroll</span>
      </div>

      {/* Side rails */}
      <div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 hidden md:block z-20">
        <span className="overline" style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
          Ritual · Regeneration
        </span>
      </div>
      <div className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 hidden md:block z-20">
        <span className="overline" style={{ writingMode: "vertical-rl" }}>
          Salvix · Cu-GHK · 5.4 pH
        </span>
      </div>
    </section>
  );
}
