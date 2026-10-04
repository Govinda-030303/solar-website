# SolarVolt — Company Website

A production-quality solar energy company website built with **Next.js 16**, **TypeScript**, and **Tailwind CSS v4**.

![SolarVolt](https://img.shields.io/badge/Next.js-16-black?logo=nextdotjs) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript) ![Tailwind](https://img.shields.io/badge/Tailwind-v4-06B6D4?logo=tailwindcss)

## ✨ Features

- **4 Pages**: Home, About, Services, Contact
- **SEO Optimized**: Metadata, Open Graph, Twitter cards, JSON-LD schema, sitemap, robots.txt
- **Contact Form**: Server Actions + Zod validation + honeypot spam protection
- **Responsive**: Mobile-first design tested at 375px, 768px, 1280px
- **Accessible**: Semantic HTML, ARIA labels, visible focus states, contrast ≥ 4.5:1
- **Performance**: Server Components by default, minimal client JS, optimized animations
- **Security Headers**: X-Content-Type-Options, Referrer-Policy, X-Frame-Options
- **Scroll Animations**: Fade, slide, and scale effects respecting `prefers-reduced-motion`

## 🚀 Getting Started

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx              # Root layout with Header/Footer, fonts, metadata
│   ├── page.tsx                # Home page (Hero, Services, Testimonials, FAQ, CTA)
│   ├── about/page.tsx          # About page (Mission, Values, Team)
│   ├── services/page.tsx       # Services page (detailed service sections)
│   ├── contact/page.tsx        # Contact page (form + contact info)
│   ├── actions/contact.ts      # Server Action for contact form
│   ├── sitemap.ts              # Dynamic sitemap generation
│   ├── robots.ts               # robots.txt configuration
│   └── not-found.tsx           # Custom 404 page
├── components/
│   ├── layout/ (Header, Footer)
│   ├── sections/ (Hero, Services, HowItWorks, Testimonials, FAQ, CTA, ContactForm)
│   └── ui/ (Button, Card, Container, Section, Input, AnimateOnScroll)
├── content/
│   └── site.ts                 # ⚡ ALL editable content lives here
├── lib/
│   ├── utils.ts                # Utility functions
│   └── validations.ts          # Zod form schemas
└── .env.example                # Required environment variables
```

## ✏️ Editing Content

**All website copy is in one file:** [`content/site.ts`](content/site.ts)

Edit this file to change:
- Company name, tagline, contact details
- Navigation links
- Hero text, stats, and CTAs
- Service descriptions and features
- Testimonials
- FAQ items
- Team members
- Footer text and certifications

No component files need to be touched for content changes.

## 🔑 Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

| Variable | Description | Required |
|----------|-------------|----------|
| `RESEND_API_KEY` | API key for Resend email service | For production |
| `CONTACT_EMAIL` | Email destination for contact form | For production |
| `NEXT_PUBLIC_SITE_URL` | Production site URL | For SEO |

## 🚢 Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push to GitHub
2. Import in Vercel
3. Add environment variables
4. Deploy

## 📋 Checklist — Before Launch

- [ ] Replace placeholder content in `content/site.ts` with real copy
- [ ] Add company logo (replace Sun icon in Header/Footer)
- [ ] Add real photos for team members and hero section
- [ ] Set up Resend API key for contact form emails
- [ ] Update `metadataBase` URL in `app/layout.tsx`
- [ ] Update sitemap and robots.txt URLs
- [ ] Add Google Analytics or Plausible (optional)
- [ ] Test on real devices at 375px, 768px, 1280px
- [ ] Run Lighthouse audit — target ≥ 90 on all categories

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| Next.js 16 | Framework (App Router) |
| TypeScript | Type safety |
| Tailwind CSS v4 | Styling |
| Lucide React | Icons |
| Zod | Form validation |
| Framer Motion | Animations (available, not currently used) |

---

Built with ☀️ by SolarVolt
