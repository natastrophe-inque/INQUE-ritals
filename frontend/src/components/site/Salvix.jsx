import { useReveal } from "../../hooks/useReveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import Spiral, { SpiralDivider } from "./Spiral";

const PRODUCTS = [
  {
    no: "01",
    name: "Salvix Balm",
    tagline: "Phase II — restoration",
    weight: "30 ml · jar",
    body: "A semi-occlusive recovery balm rebuilt around copper-peptide GHK and biotech squalane. Locks pigment, accelerates dermal closure, leaves no greasy residue. Applied from day three through full epithelial repair.",
    notes: ["Cu-GHK 0.1%", "Biotech squalane", "Bisabolol", "Sea fennel"],
    vessel: "jar",
  },
  {
    no: "02",
    name: "Salvix Glide",
    tagline: "Phase 0 — workflow",
    weight: "150 ml · pump",
    body: "An ultra-clean tattooing glide formulated alongside artists. Slips the needle without clogging, conditions the skin in real time, and washes off without ghosting the stencil. Vegan, fragrance-free, pH-balanced.",
    notes: ["Glycerin 8%", "Allantoin", "Plant lecithin", "Studio-grade pH 5.4"],
    vessel: "tube",
  },
];

const FAQS = [
  { q: "Is INQUE Salvix vegan and fragrance-free?", a: "Yes. Every formulation is plant-derived, biotech-grown, fragrance-free, and clinically tested on freshly tattooed skin only." },
  { q: "Where is Salvix manufactured?", a: "Formulated and filled in small batch in Toronto, at a CDMO certified for cosmetic biotech actives. Every batch is traceable by lot number on the base of the jar." },
  { q: "What is the recovery protocol?", a: "Salvix Glide during the session. Salvix Balm from day three onward, twice daily for fourteen days. Full protocol card ships with every order." },
  { q: "Do you wholesale to studios?", a: "Yes — through the INQUE Artist Program. Studios are vetted on craft, hygiene standards, and editorial alignment." },
];

/** CSS-rendered black-glass jar with metallic green cap */
function GlassJar() {
  return (
    <div className="relative w-[200px] h-[260px] md:w-[240px] md:h-[300px]">
      {/* Cap */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[55%] h-[16%] glass-cap" style={{ borderRadius: "2px 2px 0 0" }}>
        <div className="absolute inset-x-2 top-1 h-px bg-[rgba(255,255,255,0.18)]" />
      </div>
      {/* Body */}
      <div className="absolute top-[14%] left-0 right-0 bottom-0 glass-vessel" style={{ borderRadius: "2px" }}>
        {/* Label */}
        <div className="absolute inset-x-6 top-[28%] bottom-[22%] flex flex-col items-center justify-center text-center">
          <span className="font-mono text-[8px] tracking-[0.4em] uppercase" style={{ color: "#5E8B7E" }}>INQUE</span>
          <span className="font-display text-xl font-light text-[#ECEAE4] mt-2 tracking-tight">Salvix</span>
          <span className="font-display italic text-sm font-light text-[#9E9E98] tracking-tight">Balm</span>
          <div className="w-8 h-px bg-[rgba(94,139,126,0.55)] my-3" />
          <span className="font-mono text-[7px] tracking-[0.3em] uppercase text-[#6A6A65]">30 ml · Cu-GHK</span>
        </div>
        {/* Embossed spiral */}
        <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2 opacity-30">
          <Spiral size={36} stroke="#5E8B7E" strokeWidth={0.7} opacity={0.7} />
        </div>
      </div>
      {/* Reflection on surface */}
      <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-[80%] h-12 opacity-20 blur-md"
        style={{ background: "linear-gradient(180deg, rgba(94,139,126,0.4), transparent)", transform: "translateX(-50%) scaleY(-1)" }} />
    </div>
  );
}

/** CSS-rendered black-glass tube */
function GlassTube() {
  return (
    <div className="relative w-[140px] h-[320px] md:w-[170px] md:h-[380px]">
      {/* Cap */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[10%] glass-cap" style={{ borderRadius: "1px" }}>
        <div className="absolute inset-x-2 top-1 h-px bg-[rgba(255,255,255,0.18)]" />
      </div>
      {/* Body — tapered tube */}
      <div className="absolute top-[10%] left-0 right-0 bottom-0 glass-vessel"
        style={{ clipPath: "polygon(8% 0, 92% 0, 100% 100%, 0% 100%)", borderRadius: "1px" }}>
        <div className="absolute inset-x-4 top-[24%] bottom-[18%] flex flex-col items-center justify-center text-center">
          <span className="font-mono text-[7px] tracking-[0.4em] uppercase" style={{ color: "#5E8B7E" }}>INQUE</span>
          <span className="font-display text-lg font-light text-[#ECEAE4] mt-2 tracking-tight">Salvix</span>
          <span className="font-display italic text-xs font-light text-[#9E9E98] tracking-tight">Glide</span>
          <div className="w-6 h-px bg-[rgba(94,139,126,0.55)] my-3" />
          <span className="font-mono text-[6px] tracking-[0.3em] uppercase text-[#6A6A65]">150 ml</span>
          <div className="mt-4 opacity-35">
            <Spiral size={26} stroke="#5E8B7E" strokeWidth={0.7} opacity={0.7} />
          </div>
        </div>
      </div>
      <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-[80%] h-12 opacity-20 blur-md"
        style={{ background: "linear-gradient(180deg, rgba(94,139,126,0.4), transparent)", transform: "translateX(-50%) scaleY(-1)" }} />
    </div>
  );
}

export default function Salvix() {
  const ref = useReveal();
  return (
    <section
      id="salvix"
      data-testid="salvix-section"
      className="relative bg-[#0B0B0D] border-t border-[rgba(236,234,228,0.08)] overflow-hidden"
    >
      <div className="absolute -left-32 top-32 pointer-events-none">
        <Spiral size={420} stroke="#23463F" strokeWidth={0.5} opacity={0.18} rotate />
      </div>

      <div className="relative px-6 md:px-12 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
          <aside className="md:col-span-3 md:sticky md:top-24">
            <span className="overline" style={{ color: "#5E8B7E" }}>Chapter — 02 / Salvix</span>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#9E9E98] mt-6 leading-relaxed">
              Advanced aftercare
              <br />for tattooed skin.
            </p>
            <div className="hairline-green my-8" />
            <ul className="space-y-3">
              {[
                ["pH", "5.4 ± 0.2"],
                ["Peptide", "Cu-GHK"],
                ["Carrier", "Squalane"],
                ["Origin", "Toronto"],
                ["Vegan", "Certified"],
              ].map(([k, v]) => (
                <li key={k} className="flex items-center justify-between border-b border-[rgba(236,234,228,0.08)] pb-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#6A6A65]">{k}</span>
                  <span className="font-mono text-[11px] tracking-[0.18em] text-[#ECEAE4]">{v}</span>
                </li>
              ))}
            </ul>
          </aside>

          <div ref={ref} className="reveal md:col-span-9">
            <h2 className="font-display font-light text-5xl sm:text-6xl lg:text-7xl text-[#ECEAE4] tracking-tight leading-[0.95]">
              <em className="italic font-light text-[#9E9E98]">Skin recovery,</em>
              <br />
              elevated.
            </h2>

            <p className="font-body text-[16px] leading-relaxed text-[#9E9E98] mt-10 max-w-2xl">
              Salvix is the in-house biotech protocol of INQUE — a two-piece
              system of <em>Glide</em> and <em>Balm</em> that runs from the chair
              through full dermal recovery. Built with artists, engineered for
              healing.
            </p>

            {/* Cinematic product blocks with CSS-rendered glass vessels */}
            <div className="mt-20 space-y-px bg-[rgba(236,234,228,0.08)] border border-[rgba(236,234,228,0.08)]">
              {PRODUCTS.map((p, i) => (
                <article
                  key={p.no}
                  data-testid={`product-${p.no}`}
                  className={`grid grid-cols-1 md:grid-cols-12 gap-8 bg-[#0B0B0D] p-8 md:p-12 brushed-metal hover:bg-[#101012] transition-colors duration-700 ${
                    i === 1 ? "md:[direction:rtl]" : ""
                  }`}
                >
                  {/* Vessel mockup column */}
                  <div className="md:col-span-4 flex items-center justify-center min-h-[320px] md:[direction:ltr]">
                    <div className="absolute md:relative">
                      <div
                        className="absolute inset-0 -z-10 metal-glow"
                        style={{ width: "300px", height: "300px", left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
                      />
                      {p.vessel === "jar" ? <GlassJar /> : <GlassTube />}
                    </div>
                  </div>

                  {/* Copy */}
                  <div className="md:col-span-5 md:[direction:ltr]">
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em]" style={{ color: "#5E8B7E" }}>
                      N° {p.no} — {p.tagline}
                    </span>
                    <h3 className="font-display text-4xl md:text-5xl font-light text-[#ECEAE4] tracking-tight mt-6">
                      {p.name}
                    </h3>
                    <p className="font-body text-[15px] leading-[1.8] text-[#9E9E98] mt-5 max-w-xl">
                      {p.body}
                    </p>
                    <p className="font-mono text-[11px] tracking-[0.18em] text-[#ECEAE4] mt-8">{p.weight}</p>
                  </div>

                  {/* Active matrix */}
                  <div className="md:col-span-3 flex flex-col justify-end md:[direction:ltr]">
                    <span className="overline mb-3">Active matrix</span>
                    <ul className="space-y-2">
                      {p.notes.map((n) => (
                        <li key={n} className="font-mono text-[11px] tracking-[0.18em] text-[#ECEAE4]">
                          ◦ {n}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>

            <SpiralDivider className="mt-20" />

            <div className="mt-12">
              <span className="overline">Q. & A.</span>
              <Accordion type="single" collapsible className="mt-6 border-t border-[rgba(236,234,228,0.12)]">
                {FAQS.map((f, i) => (
                  <AccordionItem
                    key={i}
                    value={`item-${i}`}
                    className="border-b border-[rgba(236,234,228,0.12)]"
                  >
                    <AccordionTrigger
                      data-testid={`salvix-faq-trigger-${i}`}
                      className="font-display text-xl md:text-2xl font-light text-[#ECEAE4] hover:no-underline py-6"
                    >
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="font-body text-[14px] text-[#9E9E98] leading-relaxed pb-8 max-w-2xl">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
