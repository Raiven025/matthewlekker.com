# Matthew Lekker Photography — Project Instructions

## CRITICAL SECURITY CONSTRAINT
**NEVER touch, modify, or change DNS/domain settings on the live Hostinger site at matthewlekker.com.**
The live site runs on Hostinger Website Builder and must remain 100% untouched until Matthew approves the switch.
All work is on the Vercel preview only.

## Project Overview
- **Live preview (Vercel):** https://matthewlekker-com.vercel.app
- **GitHub repo:** https://github.com/Raiven025/matthewlekker.com.git
- **Old live site (DO NOT TOUCH):** https://matthewlekker.com (Hostinger)
- **Goal:** Replace Hostinger site with this Next.js build once Matthew approves

## Session Setup
At the start of every session:
1. Run `mcp__Claude_Preview__preview_start` with name `dev`
2. Immediately set preview to desktop: `mcp__Claude_Preview__preview_resize` with `preset: "desktop"`

## Tech Stack
- **Framework:** Next.js 15 App Router (TypeScript)
- **Styling:** Tailwind CSS v4 — `@import "tailwindcss"` syntax, `@layer utilities` for custom classes
- **Animations:** Framer Motion 12 — `useScroll`, `useTransform`, `useMotionValue`, `animate()`, `useInView`, `useReducedMotion`
- **Fonts:** Raleway (headings, weights 200–600, NO italic) + Inter (body, weights 300–500) via `next/font/google`
- **Deployment:** Vercel — auto-deploys on push to `main`

## Design System
- **Background:** `#0a0a0a` (sections), `#111111` (alternating)
- **Gold accent:** `#c9a96e`
- **Text:** white with opacity variants (`text-white/50`, `text-white/35`, etc.)
- **No italic text ever** — use `<span className="text-[#c9a96e]">` for emphasis instead of `<em>`
- **Fonts:** Raleway for all headings, Inter for body

## Critical CSS Rule — Tailwind v4
In `globals.css`, NEVER add bare CSS resets outside `@layer`. Unlayered CSS beats `@layer utilities` in the cascade and breaks all spacing. Tailwind v4 Preflight already handles resets inside `@layer base`.

## Pages & Components
```
app/
  page.tsx                          Home (Hero + About + ImmersiveGallery + Testimonials + CTA)
  about/page.tsx                    Full about page (bio, stats, services, process)
  portfolio/page.tsx                Portfolio index (4 category blocks)
  portfolio/residential/page.tsx    23 photos
  portfolio/exterior/page.tsx       12 photos (drone + macdonald)
  portfolio/commercial/page.tsx     13 photos
  portfolio/hospitality/page.tsx    10 photos
  contact/page.tsx                  Contact form (Formspree — ID pending)
  blog/page.tsx                     Coming Soon placeholder
  components/
    Navbar.tsx
    Hero.tsx              Parallax hero, bg: lekk4989 image
    About.tsx             CountUp stats + Matthew's bio
    ImmersiveGallery.tsx  Scroll-pinned horizontal sweep (300vh container, 18 photos)
    Testimonials.tsx      3 placeholder cards (need real ones from Matthew)
    Contact.tsx           Contact CTA section
    Portfolio.tsx         Home portfolio preview grid
    Footer.tsx            Centered footer
```

## Matthew — Real Content
- **Full name:** Matthew Lesperance
- **Location:** New Jersey
- **Tagline:** "Elevated Perspectives"
- **Headshot image:** `1612275894979-mePJN4ke0NU5KGan.jpeg` (zyrosite CDN)
- **Email:** info@matthewlekker.com
- **Instagram:** @matthewlekker
- **Service areas:** NJ, NY, CT (shown as 3+)

## Image CDN
All images on Hostinger's Zyrosite CDN:
```
https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=900,fit=crop/AMqlLZQweECGbqM2/[FILENAME]
```
**WARNING:** These links break when Hostinger account is cancelled. Download and self-host all images before switching domains.

### Key images
- **Hero bg:** `lekk4989-dxo_deepprime-3-large-oDrL06IDHBdwHOVp.jpeg`
- **Matthew headshot:** `1612275894979-mePJN4ke0NU5KGan.jpeg`
- **Hotel hero:** `hotel-edit-lights-off-mnlJBRJ04buk5bnK.jpg`
- **Hospitality:** `foyer-3-AQEezpRyNMtqZ7v1.jpeg`, `foyer-bar-A1az6J2BkRtWbaeG.jpeg`, `red-room-m7VDNKnvvOseg1yY.jpeg`
- **Drone/exterior:** `dji_0363`, `dji_0455`, `dji_0475`, `dji_0519`, `dji_0543`, `dji_0558`, `dji_0594`, `dji_0597-1`
- **MacDonald property:** `macdonald-3`, `macdonald-4`, `macdonald-18`, `macdonald-24`

## Pending Items Before Domain Switch
1. **Formspree Form ID** — replace `YOUR_FORM_ID` in `app/contact/page.tsx`
2. **Real testimonials** — replace Sarah Mitchell, James Thornton, Emily Reyes in `Testimonials.tsx`
3. **Confirm stats** — verify "10+ years" and "500+ spaces" with Matthew
4. **Self-host all images** — download from zyrosite CDN before cancelling Hostinger
5. **Domain switch** — point matthewlekker.com DNS to Vercel once approved

## Extracting Images from Old Site
The old Hostinger SPA uses these internal routes (not /portfolio/residential etc.):
- `/matthew-lekker-residential-interior-photography`
- `/matthew-lekker-commercial-interior-photography`
- `/hotel-interior-photography`
- `/residential-exterior-architectural-photography`
- `/matthew-lekker-architectural-photography` (About page)
- `/matthew-lekker-architectural-photography-portfolio`
- `/contact-architectural-photographer`
- `/blog-list`

To extract images from any page:
```bash
curl -s "https://matthewlekker.com[route]" | grep -oE 'AMqlLZQweECGbqM2/[a-zA-Z0-9_.-]+\.(jpg|jpeg|png|webp)' | sort -u
```
