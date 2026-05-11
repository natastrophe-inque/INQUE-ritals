import { Instagram } from "lucide-react";
import { SpiralMark } from "./Spiral";

export default function Footer() {
  return (
    <footer
      data-testid="site-footer"
      id="contact"
      className="relative bg-[#0B0B0D] border-t border-[rgba(236,234,228,0.06)]"
    >
      <div className="px-6 md:px-12 py-20 md:py-24">
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-10">
          {/* Brand seal */}
          <div className="flex flex-col items-center gap-5">
            <SpiralMark size={32} className="opacity-80" />
            <span className="font-display tracking-[0.36em] text-[18px] text-[#ECEAE4]">
              INQUE
            </span>
          </div>

          {/* Contact lines */}
          <div className="flex flex-col items-center gap-4">
            <a
              href="mailto:inquerituals@gmail.com"
              data-testid="contact-email-link"
              className="font-mono text-[11px] uppercase tracking-[0.34em] text-[#9E9E98] hover:text-[#4B5F4F] transition-colors duration-500"
            >
              inquerituals@gmail.com
            </a>
            <a
              href="https://instagram.com/inque.rituals"
              target="_blank"
              rel="noreferrer"
              data-testid="contact-instagram"
              className="inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.34em] text-[#9E9E98] hover:text-[#4B5F4F] transition-colors duration-500"
            >
              <Instagram size={12} strokeWidth={1.2} />
              <span>@inque.rituals</span>
            </a>
          </div>

          {/* Tagline */}
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#6A6A65]">
            For the marked.
          </p>

          {/* Bottom line */}
          <div className="w-full pt-8 mt-4 border-t border-[rgba(236,234,228,0.06)] flex flex-col md:flex-row items-center justify-between gap-3">
            <span className="font-mono text-[9px] uppercase tracking-[0.34em] text-[#6A6A65]">
              © MMXXV INQUE · Toronto
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.34em] text-[#6A6A65]">
              Biotech Recovery Skincare
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
