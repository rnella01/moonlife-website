import { GarmentArt } from "@/components/garment-art";
import { formatINR, type Product } from "@/lib/products";

function Stars({ rating }: { rating: number }) {
  const full = Math.round(rating);
  return (
    <span aria-label={`${rating} out of 5 stars`} className="text-[9px] tracking-[-0.02em]">
      <span aria-hidden="true">{"★".repeat(full)}{"☆".repeat(5 - full)}</span>
    </span>
  );
}

export function ProductCard({
  product,
  className = "",
}: {
  product: Product;
  className?: string;
}) {
  return (
    <article
      className={`bg-pure-white rounded-cards shadow-card overflow-hidden ${className}`}
    >
      <div className="p-[8px]">
        <GarmentArt
          kind={product.kind}
          tone={product.tone}
          className="w-full aspect-square rounded-card-inner"
        />
      </div>
      <div className="px-[16px] pb-[14px] pt-[4px] flex flex-col gap-[4px]">
        <h3 className="text-body font-medium tracking-[-0.014em]">
          {product.name}
        </h3>
        <div className="flex items-center gap-[6px] text-muted-gray">
          <Stars rating={product.rating} />
          <span className="text-[9px]">({product.reviews})</span>
        </div>
        <p className="text-body-sm text-ink-black">{formatINR(product.price)}</p>
      </div>
    </article>
  );
}
