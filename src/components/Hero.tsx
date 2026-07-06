import { useEffect, useRef } from 'react'

export default function Hero() {
  const rippleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = rippleRef.current
    if (!el) return

    let raf: number
    let start: number | null = null

    const animate = (timestamp: number) => {
      if (!start) start = timestamp
      const elapsed = timestamp - start
      const progress = (elapsed % 16000) / 16000

      if (el) {
        const scale = 0.85 + Math.sin(progress * Math.PI * 2) * 0.08
        const opacity = 0.12 + Math.sin(progress * Math.PI * 2) * 0.06
        el.style.transform = `scale(${scale})`
        el.style.opacity = String(opacity)
      }

      raf = requestAnimationFrame(animate)
    }

    raf = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(raf)
  }, [])

  const spiralUrl = 'https://storage.googleapis.com/figapp-44eac.appspot.com/chat-attachments/r3WdwFyRdNZyvkZVSQVC0wEW5J13/5721d477-3d95-4df8-b4b7-d9046eda000f/images/1781646465279-xzma1cstds.jpg'
  const logoUrl = 'https://storage.googleapis.com/figapp-44eac.appspot.com/chat-attachments/r3WdwFyRdNZyvkZVSQVC0wEW5J13/5721d477-3d95-4df8-b4b7-d9046eda000f/images/1781646464680-lzqm5qp7mws.jpg'

  return (
    <section
      data-component="src/components/Hero.tsx"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          ref={rippleRef}
          className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full flex items-center justify-center"
        >
          <img
            src={spiralUrl}
            alt=""
            className="w-full h-full object-contain opacity-20"
            style={{
              filter: 'brightness(1.4) saturate(0.6) hue-rotate(160deg)',
            }}
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none'
            }}
          />
        </div>
        <div className="absolute w-[700px] h-[700px] md:w-[1000px] md:h-[1000px] rounded-full border border-iridescent/5 animate-ripple-slow" />
        <div className="absolute w-[900px] h-[900px] md:w-[1200px] md:h-[1200px] rounded-full border border-iridescent/[0.03] animate-ripple-reverse" />
      </div>

      <div className="absolute inset-0 bg-dark-radial opacity-80" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 flex flex-col items-center text-center">
        <div className="mb-12 animate-fade-in-down">
          <img
            src={logoUrl}
            alt="INQUE"
            className="w-64 md:w-80 h-auto object-contain"
            onError={(e) => {
              (e.target as HTMLImageElement).style.opacity = '0'
            }}
          />
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-medium text-bone leading-[1.05] tracking-tight mb-6 animate-fade-in-up">
          SKIN UNDER
          <br />
          <span className="italic font-normal">TRAUMA</span>
        </h1>

        <p className="text-lg md:text-xl font-serif italic text-silver/70 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Recovery is part of the art.
        </p>

        <p className="max-w-lg text-sm md:text-base text-silver-muted/80 font-sans font-light leading-relaxed mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          SALVIX is an advanced biotech recovery balm designed to support compromised skin through tattoo recovery, barrier damage, irritation, and environmental stress.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <a
            href="#waitlist"
            className="group relative px-10 py-3.5 bg-bone text-black text-sm tracking-[0.15em] uppercase font-sans font-medium hover:bg-white transition-colors duration-300"
          >
            Join the Waitlist
            <span className="absolute inset-0 border border-bone/0 group-hover:border-bone/30 transition-colors duration-500" />
          </a>
          <a
            href="#science"
            className="px-10 py-3.5 text-sm tracking-[0.15em] uppercase text-silver-muted hover:text-bone font-sans font-light transition-colors duration-300 border border-transparent hover:border-silver-muted/30"
          >
            Explore the Science
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  )
}
