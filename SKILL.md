---
name: nextjs-company-website
description: Builds a professional, fast, SEO-friendly company website with Next.js (App Router), TypeScript and Tailwind CSS. Use this skill whenever the user mentions building, scaffolding, designing or improving a company/business/startup/corporate website, landing page, marketing site, About/Services/Contact pages, or a portfolio site in Next.js, even if they don't say "skill" or give full requirements.
---

# Next.js Company Website

Build a production-quality company website: clean design, fast, accessible, SEO-ready, easy for non-developers to edit.

## 1. Before coding: gather inputs (ask once, concisely)

If not already provided, ask for these in ONE message, and proceed with sensible defaults for anything left unanswered:

- Company name, tagline, industry, target audience
- Pages needed (default: Home, About, Services, Contact; optional: Blog, Case Studies, Careers, Pricing)
- Brand colors, logo, fonts (default: neutral modern palette, one primary color)
- Contact details, social links, office address
- Contact-form destination (default: email via Resend)
- Language(s) / i18n needs

State assumptions in one line, then build. Don't block on missing info.

## 2. Stack defaults

- Next.js (latest stable) with **App Router**, **TypeScript**, `src/` directory
- **Tailwind CSS** + `lucide-react` icons; `shadcn/ui` only if the user wants a component library
- `next/font` for fonts, `next/image` for ALL images
- `framer-motion` only for subtle, purposeful motion (fade/slide on scroll). Respect `prefers-reduced-motion`
- Forms: Server Actions + `zod` validation; email via Resend (or the user's provider)
- Deployment target: Vercel (mention alternatives only if asked)

Scaffold with:

```bash
npx create-next-app@latest company-site --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
```

## 3. Project structure

```
src/
├── app/
│   ├── layout.tsx            # fonts, metadata, Header/Footer
│   ├── page.tsx              # Home
│   ├── about/page.tsx
│   ├── services/page.tsx
│   ├── contact/page.tsx
│   ├── blog/ (optional)      # MDX or CMS-backed
│   ├── actions/contact.ts    # Server Action
│   ├── sitemap.ts
│   ├── robots.ts
│   ├── not-found.tsx
│   └── opengraph-image.tsx
├── components/
│   ├── layout/ (Header, Footer, MobileNav)
│   ├── sections/ (Hero, Features, Services, Testimonials, CTA, FAQ, Team)
│   └── ui/ (Button, Card, Container, Section, Input)
├── content/site.ts           # ALL copy, nav links, contact info, socials
└── lib/ (utils.ts, validations.ts, seo.ts)
```

**Rule:** keep every editable string (company name, nav, services, testimonials, contact info) in `src/content/site.ts` so content changes never require touching components.

## 4. Build order

1. Scaffold project, set up fonts, color tokens (CSS variables in `globals.css` + Tailwind theme), `Container`/`Section`/`Button` primitives
2. `content/site.ts` with realistic placeholder content (no lorem ipsum, write plausible copy for the industry)
3. Header (sticky, responsive, accessible mobile menu) and Footer
4. Home page sections in this order: Hero (clear value proposition + primary CTA) → social proof/logos → Services/Features → How it works → Testimonials → FAQ → final CTA
5. About, Services, Contact pages
6. Contact form with Server Action, validation, honeypot spam field, success/error states
7. SEO + metadata + sitemap + robots + OG image
8. Run lint, type-check, build; fix all errors

## 5. Design standards

- Pick ONE distinctive direction (e.g., editorial, bold-modern, minimal-corporate) and apply it consistently. Avoid generic template look: no default purple gradients, no stock-card grids everywhere
- Max 2 font families; clear type scale; generous whitespace; consistent spacing scale
- One primary CTA per section; button labels are verbs ("Book a demo", not "Submit")
- Mobile-first; test layouts at 375px, 768px, 1280px
- Contrast ratio ≥ 4.5:1; visible focus states; semantic HTML (`header`, `main`, `nav`, `footer`, one `h1` per page); alt text on every image; labels on every input
- Use real image slots with `next/image` and descriptive alt text; if no assets exist, use clean placeholders and list what the user must replace

## 6. SEO and performance

- `export const metadata` (or `generateMetadata`) on every page: unique title, description, canonical, Open Graph, Twitter card
- Title template in root layout: `%s | Company Name`
- Add JSON-LD `Organization` schema on the home page
- Prefer Server Components; add `"use client"` only for interactivity (menu toggle, form state, animations)
- Set `priority` on the hero image only; lazy-load the rest; define `sizes`
- Avoid layout shift: fixed dimensions or aspect ratios on media
- Target Lighthouse ≥ 90 on all four categories

## 7. Security and quality

- Never commit secrets; use `.env.local` and provide `.env.example`
- Validate all form input server-side with `zod`; add basic rate limiting or honeypot
- Add security headers in `next.config.ts` (X-Content-Type-Options, Referrer-Policy, X-Frame-Options)
- Include cookie/consent banner and Privacy Policy page only if analytics or tracking is added
- Keep components small and typed; no `any`; no unused dependencies

## 8. Optional add-ons (only if requested)

- Blog: MDX with `next-mdx-remote` or a headless CMS (Sanity/Contentful)
- i18n: `next-intl`
- Analytics: Vercel Analytics or Plausible
- Dark mode: `next-themes`
- Newsletter: Resend/Mailchimp integration

## 9. Definition of done

Before telling the user it's finished, verify:

- [ ] `npm run lint` and `npm run build` pass with no errors
- [ ] All pages render and navigate correctly on mobile and desktop
- [ ] Contact form works (or clearly documented env vars needed)
- [ ] Metadata, sitemap and robots are present
- [ ] `README.md` explains: how to run, where to edit content (`content/site.ts`), env vars, how to deploy to Vercel

Finish with a short summary: what was built, assumptions made, and a checklist of items the user must supply (logo, photos, real copy, env keys).
