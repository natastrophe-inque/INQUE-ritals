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

  return (
    <section
      data-testid="hero-section"
      className="relative h-[100svh] overflow-hidden bg-[#0B0B0D]"
    >
      {/* Centered snail-shell spiral — the visual centerpiece */}
      <div
        aria-hidden
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ transform: `translate3d(0, ${-scrollY * 0.08}px, 0)` }}
      >
        <div className="spiral-breath">
          <Spiral
            size={760}
            stroke="#5E8B7E"
            strokeWidth={1.1}
            opacity={0.7}
            rotate
          />
        </div>
      </div>

      {/* Soft radial glow behind the wordmark */}
      <div
        aria-hidden
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div
          className="rounded-full"
          style={{
            width: "60vmin",
            height: "60vmin",
            background:
              "radial-gradient(circle at center, rgba(94,139,126,0.10) 0%, rgba(43,79,71,0.05) 35%, transparent 70%)",
            filter: "blur(20px)",
          }}
        />
      </div>

      {/* Centered wordmark + tagline */}
      <div
        ref={ref}
        className="reveal-stagger absolute inset-0 z-10 flex flex-col items-center justify-center px-6"
      >
        <h1
          data-testid="hero-headline"
          className="wordmark-metal text-center"
          style={{ transform: `translate3d(0, ${-scrollY * 0.12}px, 0)` }}
        >
          INQUE
        </h1>

        <p className="font-display italic text-xl md:text-2xl font-light text-[#9E9E98] mt-10 md:mt-14 tracking-tight">
          For the marked.
        </p>

        <p className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.4em] text-[#6A6A65] mt-6">
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
