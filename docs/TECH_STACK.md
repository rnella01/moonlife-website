# Tech Stack — Research & Rationale

Researched and verified July 2026. Decisions below drive the scaffold in this repo; layers marked *planned* are documented now and provisioned when the feature needs them.

## Chosen stack

| Layer | Choice | Version | Status |
|---|---|---|---|
| Framework | Next.js (App Router) | 16.2.x (Active LTS) | ✅ in repo |
| Language | TypeScript | 5.9 | ✅ in repo |
| Styling | Tailwind CSS | 4.3.x | ✅ in repo |
| Components | shadcn/ui (CLI v4) | — | planned (add as UI grows) |
| Database / auth / storage | Supabase (Postgres) | — | planned (products, orders, auth) |
| Payments | Razorpay | — | planned (checkout) |
| Deployment | Vercel Git integration | — | ✅ connected, push-to-deploy |
| Images | Next `<Image>` + Vercel Image Optimization | — | ✅ available |

## Rationale

**Next.js App Router** — the first-party path for e-commerce on Vercel. Cache Components + PPR are stable in Next.js 16 (opt in via `cacheComponents: true` in `next.config.ts`): a static shell is prerendered and dynamic parts (cart, price, stock) stream via Suspense — ideal for product pages once we have live inventory.

**Tailwind v4 + shadcn/ui** — the dominant React UI stack in 2026. Tailwind v4's CSS-first `@theme` maps directly onto the token tables in [`DESIGN.md`](../DESIGN.md). shadcn/ui components are copy-in (we own the code) and accessible by default.

**Supabase over headless commerce** — for a single small Indian garments store, Supabase gives full ownership, a generous free tier, and auth + storage + Postgres in one, with no per-order platform tax. Checkout logic stays in the Next.js app next to the payment gateway.

**Razorpay for payments** — best fit for an Indian storefront: native UPI (~70%+ of Indian digital transactions), COD, cards, payment links, T+1 settlement, clean API. *Cashfree* is the cost-optimization alternative (0% on UPI/RuPay vs Razorpay's ~2%, 15-minute settlement) — revisit if UPI volume gets high. *Stripe India* is geared to international/B2B and lacks local UPI depth.

**Vercel Git integration** — every push builds, every PR gets a stable preview URL, merge to `main` deploys production. No extra CI needed; a standard Next app needs no `vercel.json`.

## Rejected alternatives

- **Shopify headless / Hydrogen** — monthly fee + revenue-based costs; ties a one-store shop to Shopify's model.
- **Vercel Commerce template** — now maintained Shopify-only; not useful with a Supabase backend.
- **Medusa** — capable TS commerce backend, but real setup and ops overhead; too heavy for a single-store MVP.
- **Saleor** — GraphQL/enterprise-oriented; more infrastructure than this store needs.
- **Stripe (India)** — weaker local UPI/COD support than Razorpay/Cashfree.

## Sources

- [Next.js 16 release](https://nextjs.org/blog/next-16) · [Next.js LTS status](https://endoflife.date/nextjs)
- [Tailwind CSS releases](https://releases.sh/tailwind-css)
- [shadcn CLI v4 changelog](https://ui.shadcn.com/docs/changelog/2026-03-cli-v4)
- [Razorpay vs Stripe vs PayU vs Cashfree (2026)](https://codingclave.com/blog/razorpay-vs-stripe-vs-payu-vs-cashfree-2026)
- [Vercel Git integration docs](https://vercel.com/docs/git)
- [Next.js Commerce (Shopify-only)](https://github.com/vercel/commerce) · [Medusa vs Shopify 2026](https://www.buildwithmatija.com/blog/medusa-vs-shopify-2026-cost-b2b-headless-tradeoffs)
