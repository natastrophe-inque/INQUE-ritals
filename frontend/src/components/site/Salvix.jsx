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
  },
  {
    no: "02",
    name: "Salvix Glide",
    tagline: "Phase 0 — workflow",
    weight: "150 ml · pump",
    body: "An ultra-clean tattooing glide formulated alongside artists. Slips the needle without clogging, conditions the skin in real time, and washes off without ghosting the stencil. Vegan, fragrance-free, pH-balanced.",
    notes: ["Glycerin 8%", "Allantoin", "Plant lecithin", "Studio-grade pH 5.4"],
  },
];

const FAQS = [
  { q: "Is INQUE Salvix vegan and fragrance-free?", a: "Yes. Every formulation is plant-derived, biotech-grown, fragrance-free, and clinically tested on freshly tattooed skin only." },
  { q: "Where is Salvix manufactured?", a: "Formulated and filled in small batch in Toronto, at a CDMO certified for cosmetic biotech actives. Every batch is traceable by lot number on the base of the jar." },
  { q: "What is the recovery protocol?", a: "Salvix Glide during the session. Salvix Balm from day three onward, twice daily for fourteen days. Full protocol card ships with every order." },
  { q: "Do you wholesale to studios?", a: "Yes — through the INQUE Artist Program. Studios are vetted on craft, hygiene standards, and editorial alignment." },
];

export default function Salvix() {
  const ref = useReveal();
  return (
    <section
      id="salvix"
      data-testid="salvix-section"
      className="relative bg-[#0B0B0D] border-t border-[rgba(236,234,228,0.08)] overflow-hidden"
    >
      {/* Subtle embossed spiral, off-canvas */}
      <div className="absolute -left-32 top-32 pointer-events-none">
        <Spiral size={420} stroke="#23463F" strokeWidth={0.5} opacity={0.18} rotate />
      </div>

      <div className="relative px-6 md:px-12 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
          <aside className="md:col-span-3 md:sticky md:top-24">
            <span className="overline" style={{ color: "#5E8B7E" }}>Chapter — 01 / Salvix</span>
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

            {/* Product blocks */}
            <div className="mt-16 space-y-px bg-[rgba(236,234,228,0.08)] border border-[rgba(236,234,228,0.08)]">
              {PRODUCTS.map((p) => (
                <article
                  key={p.no}
                  data-testid={`product-${p.no}`}
                  className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-[#0B0B0D] p-8 md:p-10 brushed-metal hover:bg-[#101012] transition-colors duration-700"
                >
                  <div className="md:col-span-3">
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em]" style={{ color: "#5E8B7E" }}>
                      N° {p.no}
                    </span>
                    <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#6A6A65] mt-3">{p.tagline}</p>
                    <p className="font-mono text-[11px] tracking-[0.18em] text-[#ECEAE4] mt-6">{p.weight}</p>
                  </div>
                  <div className="md:col-span-6">
                    <h3 className="font-display text-4xl md:text-5xl font-light text-[#ECEAE4] tracking-tight">
                      {p.name}
                    </h3>
                    <p className="font-body text-[15px] leading-relaxed text-[#9E9E98] mt-5 max-w-xl">
                      {p.body}
                    </p>
                  </div>
                  <div className="md:col-span-3 flex flex-col justify-end">
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
