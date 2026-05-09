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
      className="relative h-[100svh] overflow-hidden bg-[#0B0B0D]"
    >
      {/* Faint background spiral motif — entire visual atmosphere */}
      <div
        aria-hidden
        className="absolute parallax-layer pointer-events-none"
        style={{
          right: "-12vw",
          top: "10vh",
          transform: py(-0.18),
        }}
      >
        <Spiral size={620} stroke="#5E8B7E" strokeWidth={0.4} opacity={0.10} rotate />
      </div>
      <div
        aria-hidden
        className="absolute parallax-layer pointer-events-none"
        style={{
          left: "-10vw",
          bottom: "-10vh",
          transform: py(0.05),
        }}
      >
        <Spiral size={460} stroke="#23463F" strokeWidth={0.5} opacity={0.08} />
      </div>

      {/* Centered wordmark + tagline */}
      <div
        ref={ref}
        className="reveal-stagger absolute inset-0 z-10 flex flex-col items-center justify-center px-6"
      >
        <h1
          data-testid="hero-headline"
          className="wordmark text-center"
          style={{ transform: `translate3d(0, ${-scrollY * 0.12}px, 0)` }}
        >
          INQUE
        </h1>

        <p className="font-display italic text-xl md:text-2xl font-light text-[#9E9E98] mt-12 md:mt-16 tracking-tight">
          For the marked.
        </p>

        <p className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.4em] text-[#6A6A65] mt-8">
          Biotech tattoo aftercare. Ritualized.
        </p>
      </div>

      {/* Quiet scroll line */}
      <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center">
        <span className="block w-px h-12 bg-gradient-to-b from-transparent via-[#5E8B7E]/50 to-transparent" />
      </div>
    </section>
  );
}
