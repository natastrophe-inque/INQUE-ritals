import { useReveal } from "../../hooks/useReveal";
import Spiral from "./Spiral";

/** CSS-rendered black-glass jar */
function GlassJar() {
  return (
    <div className="relative w-[200px] h-[260px] md:w-[220px] md:h-[290px]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[55%] h-[15%] glass-cap" style={{ borderRadius: "2px 2px 0 0" }} />
      <div className="absolute top-[13%] left-0 right-0 bottom-0 glass-vessel" style={{ borderRadius: "2px" }}>
        <div className="absolute inset-x-6 top-[34%] flex flex-col items-center text-center">
          <span className="font-display text-xl font-light text-[#ECEAE4] tracking-tight">Salvix</span>
          <span className="font-display italic text-sm font-light text-[#9E9E98] tracking-tight mt-1">Balm</span>
        </div>
        <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 opacity-30">
          <Spiral size={28} stroke="#5E8B7E" strokeWidth={0.7} opacity={0.7} />
        </div>
      </div>
    </div>
  );
}

/** CSS-rendered black-glass tube */
function GlassTube() {
  return (
    <div className="relative w-[140px] h-[300px] md:w-[160px] md:h-[340px]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[9%] glass-cap" style={{ borderRadius: "1px" }} />
      <div
        className="absolute top-[9%] left-0 right-0 bottom-0 glass-vessel"
        style={{ clipPath: "polygon(8% 0, 92% 0, 100% 100%, 0% 100%)", borderRadius: "1px" }}
      >
        <div className="absolute inset-x-4 top-[34%] flex flex-col items-center text-center">
          <span className="font-display text-lg font-light text-[#ECEAE4] tracking-tight">Salvix</span>
          <span className="font-display italic text-xs font-light text-[#9E9E98] tracking-tight mt-1">Glide</span>
        </div>
        <div className="absolute bottom-[12%] left-1/2 -translate-x-1/2 opacity-30">
          <Spiral size={24} stroke="#5E8B7E" strokeWidth={0.7} opacity={0.7} />
        </div>
      </div>
    </div>
  );
}

export default function Salvix() {
  const ref = useReveal();
  return (
    <section
      id="salvix"
      data-testid="salvix-section"
      className="relative bg-[#0B0B0D] border-t border-[rgba(236,234,228,0.06)]"
    >
      <div className="px-6 md:px-12 py-32 md:py-40">
        <div ref={ref} className="reveal max-w-5xl mx-auto">
          {/* Heading */}
          <div className="text-center">
            <h2 className="font-display font-light text-[clamp(2.25rem,5.5vw,5rem)] text-[#ECEAE4] tracking-[-0.02em] leading-[1.05]">
              Salvix.
              <br />
              <em className="italic font-light text-[#9E9E98]">Balm &amp; Glide.</em>
            </h2>
            <p className="font-body text-[14px] md:text-[15px] text-[#6A6A65] mt-8 tracking-wide">
              Advanced recovery for tattooed skin.
            </p>
          </div>

          {/* Two product vessels */}
          <div className="mt-32 md:mt-40 grid grid-cols-1 md:grid-cols-2 gap-24 md:gap-12 items-end justify-items-center">
            <article data-testid="product-01" className="relative flex flex-col items-center">
              <div className="absolute -z-10 metal-glow" style={{ width: "320px", height: "320px", left: "50%", top: "50%", transform: "translate(-50%, -50%)" }} />
              <GlassJar />
              <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-[#6A6A65] mt-12">Balm</span>
            </article>

            <article data-testid="product-02" className="relative flex flex-col items-center">
              <div className="absolute -z-10 metal-glow" style={{ width: "320px", height: "320px", left: "50%", top: "50%", transform: "translate(-50%, -50%)" }} />
              <GlassTube />
              <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-[#6A6A65] mt-12">Glide</span>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
