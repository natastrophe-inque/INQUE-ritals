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
      className="relative min-h-[100svh] overflow-hidden bg-[#0B0B0D] flex items-center justify-center"
    >
      {/* Subtle film grain */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none mix-blend-screen opacity-[0.04]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Soft radial vignette to deepen the centre */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 48%, rgba(34,53,43,0.10) 0%, rgba(11,11,13,0) 45%)",
        }}
      />

      {/* Centerpiece: organic shell spiral wrapping the wordmark */}
      <div
        ref={ref}
        className="reveal-stagger relative z-10 flex items-center justify-center"
      >
        <div
          aria-hidden
          className="absolute"
          style={{
            transform: `translate3d(0, ${-scrollY * 0.04}px, 0)`,
          }}
        >
          <Spiral
            size={420}
            stroke="#22352B"
            strokeWidth={0.6}
            opacity={0.42}
          />
        </div>

        <h1
          data-testid="hero-headline"
          className="wordmark-pewter relative z-20"
          style={{ transform: `translate3d(0, ${-scrollY * 0.06}px, 0)` }}
        >
          INQUE
        </h1>
      </div>

      {/* Subtle copy stack beneath */}
      <div className="absolute left-0 right-0 bottom-[16%] md:bottom-[14%] z-10 flex flex-col items-center px-6 text-center">
        <p className="font-display text-base md:text-lg font-light text-[#8A8478] tracking-tight">
          SALVIX Recovery Balm
        </p>
        <p className="font-body text-[12px] md:text-[13px] text-[#6A6A65] mt-3 max-w-md leading-relaxed">
          Advanced biotech recovery for tattooed skin.
        </p>
      </div>

      {/* Hairline scroll mark */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center">
        <span className="block w-px h-10 bg-gradient-to-b from-transparent via-[#22352B] to-transparent" />
      </div>
    </section>
  );
}
