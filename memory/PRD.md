# INQUE — Product Requirements Document

## Original problem statement
Luxury dark editorial website for INQUE (Toronto premium tattoo aftercare + artist brand). Matte black + metallic dark green palette, biotech-inspired, with subtle Fibonacci spiral motif (no clipart snails). Sections: Hero, Salvix (Balm + Glide), Artist Program, About INQUE, Contact / Instagram. Mobile-first, editorial typography, restrained brutalist influence, smooth subtle animations only.

## Architecture
- **Backend**: FastAPI + Motor (MongoDB). Two collections: `inquiries`, `artist_applications`. UUID ids, ISO datetime serialization, EmailStr validation, no `_id` leakage.
- **Frontend**: React (CRA), Tailwind, shadcn primitives. Single-page editorial layout. Reusable Spiral SVG (logarithmic / golden-ratio) embossed into Hero, Salvix, ArtistProgram, About, Contact.
- **Design tokens**: `--bg-primary #0B0B0D`, `--inque-green-deep #1A3A34`, `--inque-green #23463F`, `--inque-green-mid #2B4F47`, `--inque-green-light #5E8B7E`, text `#ECEAE4 / #9E9E98 / #6A6A65`. Cormorant Garamond + Outfit + Space Mono.

## Core requirements (static)
- Editorial dark aesthetic, no red/gold/neon, no Halloween gothic, no vampire iconography.
- Subtle spiral motif throughout, never as cartoon snail.
- Capture: consultation, wholesale, artist program applications.
- Mobile-first, restrained motion (IntersectionObserver reveals).

## Implemented (2025-12)
- Hero with reveal animation, spiral motif, CTA → Salvix.
- Marquee with brand taglines ("For the marked.", "Healing, ritualized.", etc.)
- Salvix section with Salvix Balm + Salvix Glide product blocks, stat sidebar, FAQ accordion (shadcn).
- Artist Program section (3 benefit pillars, "Apply" CTA → contact).
- About INQUE section with brand pillars and editorial copy.
- Contact section with 3-tab form (General / Artist Program / Wholesale) wired to `/api/inquiries` and `/api/artist-applications`. Instagram link.
- Footer with INQUE mark, sitemap, channels.
- Backend: `POST/GET /api/inquiries`, `POST/GET /api/artist-applications`. Pytest 10/10.

## Backlog (P1)
- Connect Resend / SendGrid for transactional email on new inquiry submissions.
- Admin route to view captured inquiries + applications (auth required).
- Stripe checkout for direct-to-consumer Salvix orders.

## P2
- Press / lookbook gallery once imagery is delivered.
- Multi-language (EN/FR for Canadian market).
