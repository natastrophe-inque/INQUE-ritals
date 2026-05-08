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
      {/* Single soft metallic green glow — top right */}
      <div
        aria-hidden
        className="metal-glow parallax-layer"
        style={{
          width: "55vw",
          height: "55vw",
          right: "-15vw",
          top: "-10vw",
          transform: py(-0.06),
          opacity: 0.5,
        }}
      />

      {/* Subtle drifting spiral */}
      <div
        aria-hidden
        className="absolute parallax-layer pointer-events-none"
        style={{
          right: "-6vw",
          top: "12vh",
          transform: py(-0.18),
        }}
      >
        <Spiral size={520} stroke="#5E8B7E" strokeWidth={0.4} opacity={0.14} rotate />
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
      </div>

      {/* Quiet scroll indicator */}
      <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center">
        <span className="block w-px h-12 bg-gradient-to-b from-transparent via-[#5E8B7E]/60 to-transparent" />
      </div>
    </section>
  );
}
