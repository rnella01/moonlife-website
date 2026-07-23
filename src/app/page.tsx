import { MoonGlyph, Wordmark } from "@/components/logo";
import { ProductCard } from "@/components/product-card";
import { CATEGORIES, CATEGORY_PILLS } from "@/lib/products";

const NAV_ICONS = [
  {
    label: "Home",
    active: true,
    d: "M4 11.5 12 4l8 7.5V20a1 1 0 0 1-1 1h-5v-6h-4v6H5a1 1 0 0 1-1-1z",
  },
  {
    label: "Search",
    active: false,
    d: "M10.5 3a7.5 7.5 0 1 0 4.77 13.3l4.2 4.2 1.42-1.42-4.2-4.2A7.5 7.5 0 0 0 10.5 3zm0 2a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11z",
  },
  {
    label: "Wishlist",
    active: false,
    d: "M12 21S4 14.5 4 9.5A4.5 4.5 0 0 1 12 6a4.5 4.5 0 0 1 8 3.5C20 14.5 12 21 12 21z",
  },
  {
    label: "Bag",
    active: false,
    d: "M7 8V6a5 5 0 0 1 10 0v2h3l-1 13H5L4 8zm2 0h6V6a3 3 0 0 0-6 0z",
  },
];

function SidebarRail() {
  return (
    <nav
      aria-label="Primary"
      className="hidden md:flex fixed left-0 top-0 h-full w-[64px] bg-pure-white flex-col items-center py-[16px] gap-[8px] z-10"
    >
      <a href="#" aria-label="Moonlife home" className="mb-[16px]">
        <MoonGlyph size={28} />
      </a>
      {NAV_ICONS.map((icon) => (
        <a
          key={icon.label}
          href="#"
          aria-label={icon.label}
          className={`flex items-center justify-center w-[48px] h-[48px] rounded-pills ${
            icon.active ? "bg-canvas-mist" : ""
          }`}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
            <path d={icon.d} fill={icon.active ? "#000000" : "#787574"} />
          </svg>
        </a>
      ))}
      <div className="mt-auto">
        <div
          className="w-[32px] h-[32px] rounded-full bg-canvas-mist ring-1 ring-faint-border"
          aria-label="Profile"
        />
      </div>
    </nav>
  );
}

function SearchBar() {
  return (
    <form
      role="search"
      className="relative w-full max-w-[560px] mx-auto"
      action="#"
    >
      <label htmlFor="site-search" className="sr-only">
        Search Moonlife
      </label>
      <input
        id="site-search"
        type="search"
        placeholder="What are you shopping for today?"
        className="w-full rounded-full bg-pure-white border border-black/10 py-[14px] pl-[20px] pr-[64px] text-body-lg placeholder:text-muted-gray outline-none focus-visible:ring-2 focus-visible:ring-shop-violet"
      />
      <button
        type="submit"
        aria-label="Search"
        className="absolute right-[6px] top-1/2 -translate-y-1/2 w-[48px] h-[48px] rounded-full bg-shop-violet shadow-violet flex items-center justify-center"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M4 12h14m-6-7 7 7-7 7"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </button>
    </form>
  );
}

function HeroConstellation() {
  const featured = [
    { product: CATEGORIES[0].products[0], delay: "0s", className: "-rotate-3 translate-y-[12px]" },
    { product: CATEGORIES[1].products[1], delay: "0.12s", className: "translate-y-[-8px]" },
    { product: CATEGORIES[2].products[0], delay: "0.24s", className: "rotate-2 translate-y-[16px]" },
    { product: CATEGORIES[0].products[2], delay: "0.36s", className: "rotate-6 translate-y-[-4px] hidden lg:block" },
  ];
  return (
    <div className="flex justify-center items-end gap-[12px] mb-[40px]">
      {featured.map(({ product, delay, className }) => (
        <div
          key={product.id}
          className={`moonrise w-[150px] sm:w-[180px] shrink-0 ${className}`}
          style={{ "--rise-delay": delay } as React.CSSProperties}
        >
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}

function CategoryPills() {
  return (
    <ul className="flex flex-wrap justify-center gap-[12px] list-none">
      {CATEGORY_PILLS.map((pill) => (
        <li key={pill.label}>
          <a
            href={`#${pill.label.toLowerCase().replace(/\s/g, "-")}`}
            className="inline-flex items-center gap-[8px] rounded-full bg-pure-white border border-faint-border shadow-pill py-[6px] pl-[8px] pr-[16px] text-body-lg"
          >
            <span
              className="w-[16px] h-[16px] rounded-full"
              style={{ backgroundColor: pill.dot }}
              aria-hidden="true"
            />
            {pill.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

function SectionHeader({ title }: { title: string }) {
  return (
    <h2 className="flex items-center gap-[8px] text-display font-medium mb-[24px]">
      {title}
      <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="m9 5 7 7-7 7"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </h2>
  );
}

function StoreBand() {
  return (
    <section className="bg-slate-ink rounded-cards text-pure-white px-[32px] py-[48px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-[24px]">
      <div className="max-w-[480px]">
        <h2 className="text-display font-medium mb-[8px]">
          Visit the Moonlife store
        </h2>
        <p className="text-body text-cool-stone">
          Our brick and mortar store in India carries the full collection.
          Online orders ship across the country.
        </p>
      </div>
      <a
        href="#"
        className="rounded-full bg-pure-white text-ink-black text-body font-medium py-[10px] px-[24px] shrink-0"
      >
        Get directions
      </a>
    </section>
  );
}

function Footer() {
  const groups = [
    { title: "Shop", links: ["Women", "Men", "Kids", "New arrivals"] },
    { title: "Help", links: ["Shipping", "Returns", "Size guide", "Contact"] },
    { title: "Moonlife", links: ["Our story", "Store location", "Instagram"] },
  ];
  return (
    <footer className="bg-ink-black text-pure-white mt-[64px]">
      <div className="max-w-[1200px] mx-auto px-[24px] py-[48px] grid grid-cols-2 sm:grid-cols-4 gap-[32px]">
        <div className="col-span-2 sm:col-span-1">
          <Wordmark className="text-body-lg font-medium text-pure-white" mask="#000000" />
          <p className="text-body-sm text-cool-stone mt-[12px]">
            Garments for every phase.
          </p>
        </div>
        {groups.map((group) => (
          <nav key={group.title} aria-label={group.title}>
            <h3 className="text-body-sm text-cool-stone mb-[12px]">
              {group.title}
            </h3>
            <ul className="flex flex-col gap-[8px] list-none">
              {group.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-body">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="border-t border-white/10">
        <p className="max-w-[1200px] mx-auto px-[24px] py-[16px] text-caption text-cool-stone">
          © {new Date().getFullYear()} Moonlife. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <SidebarRail />
      <main className="md:pl-[64px]">
        <div className="max-w-[1200px] mx-auto px-[24px]">
          {/* Hero */}
          <section className="pt-[64px] pb-[80px] text-center">
            <HeroConstellation />
            <h1 className="text-[40px] sm:text-[52px] tracking-[-0.05em] font-medium text-shop-violet mb-[8px]">
              <Wordmark />
            </h1>
            <p className="text-body-lg text-muted-gray mb-[32px]">
              Garments for every phase — everyday wear, ethnic classics, and
              kidswear from our store in India.
            </p>
            <SearchBar />
            <div className="mt-[32px]">
              <CategoryPills />
            </div>
          </section>

          {/* Category sections */}
          <div className="flex flex-col gap-[64px] pb-[64px]">
            {CATEGORIES.map((category) => (
              <section key={category.slug} id={category.slug}>
                <SectionHeader title={category.title} />
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-[12px]">
                  {category.products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </section>
            ))}
            <StoreBand />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
