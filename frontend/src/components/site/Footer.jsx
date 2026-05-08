export default function Footer() {
  return (
    <footer
      data-testid="site-footer"
      className="relative bg-[#0A0A0C] border-t border-[rgba(232,230,225,0.08)]"
    >
      <div className="px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <h3 className="font-display text-4xl md:text-5xl font-light text-[#E8E6E1] tracking-tight leading-[0.95]">
              Obsidian
              <br />
              <em className="italic font-light text-[#6B8570]">Atelier.</em>
            </h3>
            <p className="font-body text-[14px] text-[#A3A3A0] mt-6 max-w-sm leading-relaxed">
              A closed studio for tattoo as permanent object — and SALVIX, the
              biotech aftercare that holds it.
            </p>
          </div>

          <div className="md:col-span-3">
            <span className="overline">Studio</span>
            <ul className="mt-6 space-y-3 font-mono text-[11px] uppercase tracking-[0.24em] text-[#A3A3A0]">
              <li>Lisbon — Portugal</li>
              <li>Mon — Sat</li>
              <li>By appointment</li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <span className="overline">Index</span>
            <ul className="mt-6 space-y-3">
              {[
                ["Tattoos", "tattoos"],
                ["SALVIX", "salvix"],
                ["Program", "program"],
                ["Inquire", "inquire"],
              ].map(([l, id]) => (
                <li key={id}>
                  <button
                    data-testid={`footer-link-${id}`}
                    onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })}
                    className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#A3A3A0] hover:text-[#E8E6E1] transition-colors"
                  >
                    — {l}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <span className="overline">Channels</span>
            <ul className="mt-6 space-y-3 font-mono text-[11px] uppercase tracking-[0.24em] text-[#A3A3A0]">
              <li>
                <a
                  href="mailto:atelier@obsidian.studio"
                  data-testid="footer-email"
                  className="hover:text-[#E8E6E1] transition-colors"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  data-testid="footer-instagram"
                  className="hover:text-[#E8E6E1] transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.are.na"
                  target="_blank"
                  rel="noreferrer"
                  data-testid="footer-arena"
                  className="hover:text-[#E8E6E1] transition-colors"
                >
                  Are.na
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="hairline mt-16 mb-6" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.28em] text-[#70706D]">
          <span>© MMXXV Obsidian Atelier · All rights reserved</span>
          <span>SALVIX™ — Cu-GHK Recovery Protocol</span>
        </div>
      </div>
    </footer>
  );
}
