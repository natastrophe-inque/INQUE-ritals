import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const logoUrl = 'https://storage.googleapis.com/figapp-44eac.appspot.com/chat-attachments/r3WdwFyRdNZyvkZVSQVC0wEW5J13/5721d477-3d95-4df8-b4b7-d9046eda000f/images/1781646464680-lzqm5qp7mws.jpg'

  const links = [
    { label: 'Science', href: '#science' },
    { label: 'Formula', href: '#formula' },
    { label: 'Story', href: '#founder' },
    { label: 'Partnership', href: '#artist-program' },
  ]

  return (
    <>
      <header
        data-component="src/components/Navigation.tsx"
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'bg-obsidian/90 backdrop-blur-xl border-b border-iridescent/10'
            : 'bg-transparent'
        )}
      >
        <nav className="mx-auto max-w-7xl flex items-center justify-between px-6 py-5">
          <a
            href="#"
            className={cn(
              'flex items-center gap-3 transition-all duration-500',
              scrolled ? 'opacity-100' : 'opacity-0'
            )}
          >
            <img
              src={logoUrl}
              alt="INQUE"
              className="h-7 w-auto"
            />
          </a>

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
              className="text-sm tracking-[0.15em] uppercase text-iridescent-light hover:text-bone border border-iridescent/30 hover:border-bone/40 px-5 py-2 transition-all duration-300 font-sans font-light"
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
          <div className="md:hidden bg-obsidian/95 backdrop-blur-xl border-t border-iridescent/10 animate-fade-in-down">
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
                className="text-sm tracking-[0.15em] uppercase text-iridescent-light border border-iridescent/30 px-5 py-3 text-center transition-all font-sans font-light"
              >
                Join the Waitlist
              </a>
            </div>
          </div>
        )}
      </header>

      <div
        className={cn(
          'fixed bottom-8 right-8 z-40 transition-all duration-700',
          scrolled ? 'opacity-60 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        )}
      >
        <a href="#" aria-label="Back to top">
          <img
            src={logoUrl}
            alt="INQUE"
            className="h-14 w-auto hover:opacity-100 transition-opacity duration-300"
          />
        </a>
      </div>
    </>
  )
}
