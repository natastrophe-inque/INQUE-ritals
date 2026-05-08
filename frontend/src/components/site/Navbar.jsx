import { useState, useEffect } from "react";
import { SpiralMark } from "./Spiral";

const NAV_ITEMS = [
  { id: "salvix", label: "Salvix" },
  { id: "program", label: "Artist Program" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      data-testid="site-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-[#0B0B0D]/85 backdrop-blur-md border-b border-[rgba(236,234,228,0.08)]" : ""
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-12 h-16 md:h-20">
        <button
          data-testid="brand-logo"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-3 group"
        >
          <SpiralMark size={20} className="opacity-80 group-hover:opacity-100 transition-opacity" />
          <span className="font-display text-[22px] md:text-[26px] tracking-[0.32em] text-[#ECEAE4]">
            INQUE
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-10">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              data-testid={`nav-${item.id}`}
              onClick={() => handleClick(item.id)}
              className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#9E9E98] hover:text-[#ECEAE4] transition-colors"
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
        <div data-testid="mobile-menu" className="md:hidden bg-[#0B0B0D] border-t border-[rgba(236,234,228,0.08)] px-6 py-8">
          <div className="flex flex-col gap-6">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                data-testid={`mobile-nav-${item.id}`}
                onClick={() => handleClick(item.id)}
                className="text-left font-mono text-[12px] uppercase tracking-[0.3em] text-[#9E9E98] hover:text-[#ECEAE4]"
              >
                — {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
