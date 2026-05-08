# INQUE — Product Requirements Document

## Original problem statement
Luxury dark editorial site for INQUE — Toronto biotech tattoo aftercare. Matte black + metallic dark green, subtle Fibonacci spiral motif, persistent floating top-left wordmark, oversized serif typography, sparse minimal layouts, restrained motion. Sections: Hero / Manifesto / Salvix (Balm + Glide) / Artist Program / Contact.

## Architecture
- **Backend**: FastAPI + Motor. Collections: `inquiries`, `artist_applications`. UUID ids, ISO datetime serialization, EmailStr validation, no `_id` leakage.
- **Frontend**: React (CRA), Tailwind, shadcn primitives, Sonner toasts. Single page with IntersectionObserver reveals + parallax hero.
- **Design tokens**: bg `#0B0B0D`, greens `#1A3A34 / #23463F / #2B4F47 / #5E8B7E`, text `#ECEAE4 / #9E9E98 / #6A6A65`. Cormorant Garamond + Outfit + Space Mono.

## Implemented (iteration 4 — minimalist redesign, 2025-12)
- Persistent floating top-left INQUE wordmark in metallic green with soft glow + breath animation.
- Cinematic Hero: massive INQUE wordmark with parallax + drifting spiral, italic "For the marked." tagline, quiet scroll line.
- Manifesto section: single oversized headline "Tattoo aftercare, reengineered."
- Salvix section: two CSS-rendered black-glass vessels (Balm jar + Glide tube) with metallic-green caps, embossed spiral, "Advanced recovery for tattooed skin." subhead.
- Artist Program: invitation-style minimal form (artist, email, instagram, location, message → POST /api/artist-applications) with success state.
- Contact: link-only (mailto + Instagram), soft closing metallic green glow.
- Footer: single line + spiral mark.
- Backend: `POST/GET /api/inquiries`, `POST/GET /api/artist-applications`. Pytest 11/11.

## Removed in iteration 4 (vs iteration 3)
- Marquee (taglines ribbon), About section, BrandPhilosophy 3-column principles, Salvix sidebar with pH/Cu-GHK stats, Salvix FAQ accordion, Salvix active-matrix ingredient lists, Hero side rails / Edition / Toronto-Live pulse / Discover-Salvix CTA, Contact tabbed form (general/wholesale/program).

## Backlog (P1)
- Resend / SendGrid: email notification on every Artist Program application.
- Lightweight admin route to view captured applications (auth required).
- Stripe checkout for direct Salvix orders (Balm + Glide bundle).

## P2
- Real product photography to replace CSS glass mockups when available.
- EN/FR for the Canadian market.
- "Find a partner studio" map of approved Artist Program members.
