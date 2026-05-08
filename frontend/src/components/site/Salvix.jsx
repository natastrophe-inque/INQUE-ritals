import { useReveal } from "../../hooks/useReveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

const PROTOCOL = [
  { step: "01", title: "Cleanse", body: "Microbiome-safe biosurfactant suspends ink-side debris without disrupting healing." },
  { step: "02", title: "Repair", body: "Recombinant peptide complex accelerates dermal closure across freshly tattooed tissue." },
  { step: "03", title: "Veil", body: "Botanical occlusive — squalane, sea fennel, copper — protects pigment saturation." },
];

const FAQS = [
  { q: "Is SALVIX vegan and fragrance-free?", a: "Yes. Every formulation is plant-derived, biotech-grown, fragrance-free, and tested on freshly tattooed skin only." },
  { q: "When does the protocol begin?", a: "Phase 01 is applied within 6 hours of the session. Phase 02 begins on day 3. Phase 03 maintains the work indefinitely." },
  { q: "Where is SALVIX manufactured?", a: "Formulated in Lisbon. Filled in small batch at a CDMO certified for cosmetic biotech actives in northern Portugal." },
];

export default function Salvix() {
  const ref = useReveal();
  return (
    <section
      id="salvix"
      data-testid="salvix-section"
      className="relative bg-[#0A0A0C] border-t border-[rgba(232,230,225,0.08)]"
    >
      <div className="px-6 md:px-12 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
          {/* Left rail */}
          <aside className="md:col-span-3 md:sticky md:top-24">
            <span className="overline" style={{ color: "#6B8570" }}>Sub-Brand — SALVIX</span>
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#A3A3A0] mt-6 leading-relaxed">
              Biotech aftercare
              <br />for permanent objects.
            </p>
            <div className="hairline my-8" />
            <ul className="space-y-3">
              {[
                ["pH", "5.4 ± 0.2"],
                ["Peptide", "Cu-GHK"],
                ["Carrier", "Squalane"],
                ["Tested", "Phase III Atelier"],
              ].map(([k, v]) => (
                <li key={k} className="flex items-center justify-between border-b border-[rgba(232,230,225,0.08)] pb-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#70706D]">{k}</span>
                  <span className="font-mono text-[11px] tracking-[0.18em] text-[#E8E6E1]">{v}</span>
                </li>
              ))}
            </ul>
          </aside>

          {/* Main */}
          <div ref={ref} className="reveal md:col-span-9">
            <h2 className="font-display font-light text-5xl sm:text-6xl lg:text-7xl text-[#E8E6E1] tracking-tight leading-[0.95]">
              <span style={{ color: "#6B8570" }}>SALVIX.</span>{" "}
              <em className="italic font-light text-[#A3A3A0]">A clinical aftercare</em>
              <br />
              for the gothic body.
            </h2>

            <p className="font-body text-[16px] leading-relaxed text-[#A3A3A0] mt-10 max-w-2xl">
              SALVIX is the in-house aftercare system of Obsidian Atelier — a
              three-phase biotech protocol developed alongside dermatologists
              to hold pigment, accelerate dermal closure, and preserve the
              integrity of every line we draw.
            </p>

            {/* Protocol grid */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 border-t border-l border-[rgba(232,230,225,0.08)]">
              {PROTOCOL.map((p) => (
                <div
                  key={p.step}
                  data-testid={`protocol-${p.step}`}
                  className="border-r border-b border-[rgba(232,230,225,0.08)] p-8 md:p-10 group transition-colors duration-500 hover:bg-[#121214]"
                >
                  <div className="flex items-baseline justify-between">
                    <span className="font-mono text-[11px] uppercase tracking-[0.28em]" style={{ color: "#6B8570" }}>
                      Phase {p.step}
                    </span>
                    <span className="block w-6 h-px bg-[#4A5D4E] group-hover:w-12 transition-all duration-500" />
                  </div>
                  <h3 className="font-display text-3xl md:text-4xl font-light text-[#E8E6E1] mt-8">{p.title}</h3>
                  <p className="font-body text-[14px] text-[#A3A3A0] leading-relaxed mt-4">{p.body}</p>
                </div>
              ))}
            </div>

            {/* FAQ accordion */}
            <div className="mt-20">
              <span className="overline">Q. & A.</span>
              <Accordion type="single" collapsible className="mt-6 border-t border-[rgba(232,230,225,0.12)]">
                {FAQS.map((f, i) => (
                  <AccordionItem
                    key={i}
                    value={`item-${i}`}
                    className="border-b border-[rgba(232,230,225,0.12)]"
                  >
                    <AccordionTrigger
                      data-testid={`salvix-faq-trigger-${i}`}
                      className="font-display text-xl md:text-2xl font-light text-[#E8E6E1] hover:no-underline py-6"
                    >
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="font-body text-[14px] text-[#A3A3A0] leading-relaxed pb-8 max-w-2xl">
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
