import { useState, useEffect } from "react";
import { SpiralMark } from "./Spiral";

const NAV_ITEMS = [
  { id: "salvix", label: "Salvix" },
  { id: "why", label: "Why" },
  { id: "program", label: "Artist Program" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* Persistent floating brand mark — top-left, always visible, atmospheric */}
      <button
        data-testid="brand-logo"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed top-6 md:top-7 left-6 md:left-12 z-[60] flex items-center gap-2 group brand-breath"
        aria-label="INQUE — return to top"
      >
        <SpiralMark size={16} className="opacity-70 group-hover:opacity-100 transition-opacity duration-700" />
        <span className="brand-floating text-[13px] md:text-[14px]">
          INQUE
        </span>
      </button>

      {/* Right-side navigation rail */}
      <header
        data-testid="site-navbar"
        className={`fixed top-0 right-0 left-0 z-50 transition-colors duration-700 ${
          scrolled ? "bg-[#0B0B0D]/55 backdrop-blur-md" : ""
        }`}
      >
        <div className="flex items-center justify-end px-6 md:px-12 h-16 md:h-20">
          <nav className="hidden md:flex items-center gap-10">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                data-testid={`nav-${item.id}`}
                onClick={() => handleClick(item.id)}
                className="font-mono text-[10px] uppercase tracking-[0.32em] text-[#9E9E98] hover:text-[#5E8B7E] transition-colors duration-500"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            data-testid="mobile-menu-toggle"
            onClick={() => setOpen(!open)}
            className="md:hidden font-mono text-[11px] uppercase tracking-[0.3em] text-[#ECEAE4]"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>

        {open && (
          <div data-testid="mobile-menu" className="md:hidden bg-[#0B0B0D]/95 backdrop-blur-md border-t border-[rgba(236,234,228,0.08)] px-6 py-8">
            <div className="flex flex-col gap-6">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  data-testid={`mobile-nav-${item.id}`}
                  onClick={() => handleClick(item.id)}
                  className="text-left font-mono text-[12px] uppercase tracking-[0.3em] text-[#9E9E98] hover:text-[#5E8B7E]"
                >
                  — {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
}
