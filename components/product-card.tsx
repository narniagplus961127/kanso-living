'use client';
import Link from 'next/link';
import { Heart, Plus } from 'lucide-react';
import { Product, formatPrice } from '@/lib/products';
import { useStore } from '@/components/store-provider';
export function ProductCard({ product }: { product: Product }) {
  const { addToCart, toggleWishlist, wishlist } = useStore();
  const saved = wishlist.includes(product.id);
  return (
    <article className="group">
      <div className="relative aspect-[4/5] overflow-hidden bg-[#e8e1d6]">
        <Link href={`/products/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.025]"
          />
        </Link>
        {product.badge && (
          <span className="absolute top-3 left-3 bg-paper px-3 py-1 text-[10px] tracking-[.18em] uppercase">
            {product.badge}
          </span>
        )}
        <button
          onClick={() => toggleWishlist(product.id)}
          aria-label={saved ? `Remove ${product.name} from wishlist` : `Save ${product.name}`}
          className="absolute top-3 right-3 grid size-10 place-items-center bg-paper/90"
        >
          <Heart size={18} strokeWidth={1.4} fill={saved ? 'currentColor' : 'none'} />
        </button>
        <button
          disabled={!product.stock}
          onClick={() => addToCart(product.id)}
          className="absolute right-0 bottom-0 flex items-center gap-2 bg-indigo px-4 py-3 text-xs text-white transition hover:bg-ink disabled:bg-ink/40"
        >
          <Plus size={15} />
          {product.stock ? 'Add' : 'Unavailable'}
        </button>
      </div>
      <Link href={`/products/${product.id}`} className="mt-4 block">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-serif text-xl">{product.name}</h3>
            <p className="mt-1 text-xs text-ink/50">
              {product.material} · {product.color}
            </p>
          </div>
          <p className="shrink-0 text-sm">{formatPrice(product.price)}</p>
        </div>
      </Link>
    </article>
  );
}
