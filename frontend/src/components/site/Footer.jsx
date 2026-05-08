import { Instagram } from "lucide-react";
import { SpiralMark } from "./Spiral";

export default function Footer() {
  return (
    <footer
      data-testid="site-footer"
      className="relative bg-[#0B0B0D] border-t border-[rgba(236,234,228,0.08)]"
    >
      <div className="px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <SpiralMark size={28} />
              <h3 className="font-display text-4xl md:text-5xl font-light text-[#ECEAE4] tracking-[0.18em]">
                INQUE
              </h3>
            </div>
            <p className="font-body text-[14px] text-[#9E9E98] mt-6 max-w-sm leading-relaxed">
              Toronto biotech aftercare for tattooed skin.
              <br />
              <em className="italic text-[#5E8B7E]">For the marked.</em>
            </p>
          </div>

          <div className="md:col-span-3">
            <span className="overline">House</span>
            <ul className="mt-6 space-y-3 font-mono text-[11px] uppercase tracking-[0.26em] text-[#9E9E98]">
              <li>Toronto — Canada</li>
              <li>Mon — Fri</li>
              <li>Wholesale by application</li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <span className="overline">Index</span>
            <ul className="mt-6 space-y-3">
              {[
                ["Salvix", "salvix"],
                ["Program", "program"],
                ["About", "about"],
                ["Contact", "contact"],
              ].map(([l, id]) => (
                <li key={id}>
                  <button
                    data-testid={`footer-link-${id}`}
                    onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })}
                    className="font-mono text-[11px] uppercase tracking-[0.26em] text-[#9E9E98] hover:text-[#ECEAE4] transition-colors"
                  >
                    — {l}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <span className="overline">Channels</span>
            <ul className="mt-6 space-y-3 font-mono text-[11px] uppercase tracking-[0.26em] text-[#9E9E98]">
              <li>
                <a href="mailto:hello@inque.studio" data-testid="footer-email" className="hover:text-[#ECEAE4] transition-colors">
                  Email
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/inque.studio"
                  target="_blank"
                  rel="noreferrer"
                  data-testid="footer-instagram"
                  className="inline-flex items-center gap-2 hover:text-[#5E8B7E] transition-colors"
                >
                  <Instagram size={12} strokeWidth={1.4} /> Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="hairline mt-16 mb-6" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.3em] text-[#6A6A65]">
          <span>© MMXXV INQUE · All rights reserved</span>
          <span style={{ color: "#5E8B7E" }}>SALVIX™ — Cu-GHK Recovery Protocol</span>
        </div>
      </div>
    </footer>
  );
}
