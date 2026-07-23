# Moonlife Website

E-commerce storefront for **Moonlife**, a garments store in India — everyday wear, ethnic classics, and kidswear.

## Tech stack

| Layer | Choice |
|---|---|
| Framework | [Next.js](https://nextjs.org) (App Router, TypeScript) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) with design tokens from [`DESIGN.md`](./DESIGN.md) |
| Visuals | Inline SVG (logo, garment placeholder art) |
| Hosting | [Vercel](https://vercel.com) — push-to-deploy from `main`, preview deployments per branch |
| Database | Supabase (planned — products, orders) |
| Payments | Razorpay (planned — UPI/cards for Indian customers) |

See [`docs/TECH_STACK.md`](./docs/TECH_STACK.md) for the research and rationale behind these choices.

## Getting started

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # production build
pnpm lint
```

## Project structure

```
src/
  app/            # App Router pages, layout, global styles (tokens live in globals.css)
  components/     # logo (crescent wordmark), product cards, SVG garment art
  lib/            # product/category data (placeholder until Supabase)
DESIGN.md         # design system: tokens, components, do's & don'ts
PROMPTS.md        # running log of build prompts
```

## Design system

All UI decisions flow from [`DESIGN.md`](./DESIGN.md): white-canvas discovery layout, 28px card radii, pill-shaped controls, a single violet accent (`#5433eb`) reserved for the wordmark moon and search submit, and warm earth-tone product imagery. The tokens are wired into Tailwind v4 via `@theme` in `src/app/globals.css`.
