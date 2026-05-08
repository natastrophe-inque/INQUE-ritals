import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { id: "tattoos", label: "Tattoos" },
  { id: "salvix", label: "SALVIX" },
  { id: "program", label: "Artist Program" },
  { id: "inquire", label: "Inquire" },
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
        scrolled ? "bg-[#0A0A0C]/85 backdrop-blur-md border-b border-[rgba(232,230,225,0.08)]" : ""
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-12 h-16 md:h-20">
        <button
          data-testid="brand-logo"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-display text-[22px] md:text-[26px] tracking-[0.2em] text-[#E8E6E1] hover:text-white transition-colors"
        >
          OBSIDIAN
        </button>

        <nav className="hidden md:flex items-center gap-10">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              data-testid={`nav-${item.id}`}
              onClick={() => handleClick(item.id)}
              className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#A3A3A0] hover:text-[#E8E6E1] transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          data-testid="mobile-menu-toggle"
          onClick={() => setOpen(!open)}
          className="md:hidden font-mono text-[11px] uppercase tracking-[0.28em] text-[#E8E6E1]"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <div data-testid="mobile-menu" className="md:hidden bg-[#0A0A0C] border-t border-[rgba(232,230,225,0.08)] px-6 py-8">
          <div className="flex flex-col gap-6">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                data-testid={`mobile-nav-${item.id}`}
                onClick={() => handleClick(item.id)}
                className="text-left font-mono text-[12px] uppercase tracking-[0.3em] text-[#A3A3A0] hover:text-[#E8E6E1]"
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
