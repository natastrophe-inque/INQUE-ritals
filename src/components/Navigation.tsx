import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, []);

  const links = [
    { label: 'Science', href: '#science' },
    { label: 'Formula', href: '#formula' },
    { label: 'Story', href: '#founder' },
    { label: 'Partnership', href: '#artist-program' },
  ]

  return (
    <>
      {/* Fixed INQUE text mark - top left */}
      <div
        className={cn(
          'fixed top-6 left-6 z-30 transition-all duration-700',
          'text-sm tracking-[0.3em] uppercase font-sans font-light',
          'bg-gradient-to-r from-forest-deep via-forest-rich to-forest-accent',
          'bg-clip-text text-transparent',
          'pointer-events-none'
        )}
        aria-hidden="true"
      >
        INQUE
      </div>

      <header
        data-component="src/components/Navigation.tsx"
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'bg-obsidian/90 backdrop-blur-xl border-b border-forest-accent/10'
            : 'bg-transparent'
        )}
      >
        <nav className="mx-auto max-w-7xl flex items-center justify-between px-6 py-5">
          {/* Empty space where logo used to be */}
          <div className="w-0" />

          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm tracking-[0.15em] uppercase text-silver-muted hover:text-bone transition-colors duration-300 font-sans font-light"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#waitlist"
              className="text-sm tracking-[0.15em] uppercase text-forest-light hover:text-bone border border-forest-accent/30 hover:border-bone/40 px-5 py-2 transition-all duration-300 font-sans"
            >
              Waitlist
            </a>
          </div>

          <button
            className="md:hidden text-silver-muted hover:text-bone transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className="text-xs tracking-[0.2em] uppercase font-sans">
              {menuOpen ? 'Close' : 'Menu'}
            </span>
          </button>
        </nav>

        {menuOpen && (
          <div className="md:hidden bg-obsidian/95 backdrop-blur-xl border-t border-forest-accent/10 animate-fade-in-down">
            <div className="flex flex-col px-6 py-8 gap-6">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm tracking-[0.15em] uppercase text-silver-muted hover:text-bone transition-colors font-sans font-light"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#waitlist"
                onClick={() => setMenuOpen(false)}
                className="text-sm tracking-[0.15em] uppercase text-forest-light border border-forest-accent/30 px-5 py-3 text-center transition-all font-sans font-light"
              >
                Join the Waitlist
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
