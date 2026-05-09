import { Instagram } from "lucide-react";
import { useReveal } from "../../hooks/useReveal";
import Spiral from "./Spiral";

export default function Contact() {
  const ref = useReveal();
  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="relative bg-[#0B0B0D] border-t border-[rgba(236,234,228,0.06)] overflow-hidden"
    >
      {/* Soft closing metallic green glow */}
      <div
        aria-hidden
        className="metal-glow"
        style={{
          width: "90vw",
          height: "60vw",
          left: "50%",
          bottom: "-30vw",
          transform: "translateX(-50%)",
          opacity: 0.45,
        }}
      />
      <div className="absolute -right-32 -bottom-20 pointer-events-none opacity-60">
        <Spiral size={420} stroke="#1A3A34" strokeWidth={0.4} opacity={0.12} rotate />
      </div>

      <div className="relative px-6 md:px-12 py-32 md:py-44">
        <div ref={ref} className="reveal max-w-2xl mx-auto text-center">
          <h2 className="font-display font-light text-[clamp(2rem,4.5vw,4rem)] text-[#ECEAE4] tracking-[-0.02em] leading-[1.05]">
            <em className="italic font-light text-[#9E9E98]">Quiet correspondence.</em>
          </h2>

          <div className="mt-14 flex flex-col items-center gap-6">
            <a
              href="mailto:inquerituals@gmail.com"
              data-testid="contact-email-link"
              className="font-mono text-[12px] uppercase tracking-[0.32em] text-[#ECEAE4] hover:text-[#5E8B7E] transition-colors duration-500"
            >
              inquerituals@gmail.com
            </a>
            <a
              href="https://instagram.com/inque.rituals"
              target="_blank"
              rel="noreferrer"
              data-testid="contact-instagram"
              className="inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.32em] text-[#9E9E98] hover:text-[#5E8B7E] transition-colors duration-500"
            >
              <Instagram size={14} strokeWidth={1.2} />
              <span>@inque.rituals</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
