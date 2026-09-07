'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ChevronLeft, Heart, LoaderCircle, Minus, Plus, Star } from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { ProductCard } from '@/components/product-card';
import { useStore } from '@/components/store-provider';
import { products, getProduct, formatPrice } from '@/lib/products';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useDelayedAction } from '@/components/use-delayed-action';
export default function ProductPage() {
  const params = useParams<{ id: string }>();
  const product = getProduct(params.id);
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState(product?.colors[0] || '');
  const { addToCart, toggleWishlist, wishlist, addRecent } = useStore();
  const wishlistAction = useDelayedAction();
  const cartAction = useDelayedAction();
  const productId = product?.id;
  useEffect(() => {
    if (productId) addRecent(productId);
  }, [addRecent, productId]);
  if (!product)
    return (
      <main>
        <SiteHeader />
        <div className="grid min-h-[60vh] place-content-center text-center">
          <p className="font-serif text-5xl">Piece not found.</p>
          <Link href="/products" className="mt-6 border-b border-ink pb-1">
            Return to the collection
          </Link>
        </div>
        <SiteFooter />
      </main>
    );
  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);
  return (
    <main>
      <SiteHeader />
      <div className="mx-auto max-w-[1440px] px-5 py-6 lg:px-10">
        <Link href="/products" className="inline-flex items-center gap-2 text-xs text-ink/55">
          <ChevronLeft size={14} /> Back to collection
        </Link>
      </div>
      <section className="mx-auto grid max-w-[1440px] gap-10 px-5 pb-20 lg:grid-cols-[1.15fr_.85fr] lg:px-10">
        <div className="grid gap-3 sm:grid-cols-2">
          <img
            src={product.image}
            alt={product.name}
            className="aspect-[4/5] h-full w-full bg-stone object-cover sm:col-span-2"
          />
          <img
            src={product.image}
            alt={`${product.name}, alternate view`}
            className="aspect-square w-full bg-[#e3dbce] object-cover object-left"
          />
          <img
            src={product.image}
            alt={`${product.name}, material detail`}
            className="aspect-square w-full bg-[#ddd3c4] object-cover object-right"
          />
        </div>
        <div className="lg:sticky lg:top-32 lg:self-start">
          <div className="flex justify-between gap-5">
            <div>
              <p className="text-xs tracking-[.18em] text-indigo uppercase">{product.category}</p>
              <h1 className="mt-2 font-serif text-5xl sm:text-6xl">{product.name}</h1>
            </div>
            <button
              onClick={() => wishlistAction.run(() => toggleWishlist(product.id))}
              disabled={wishlistAction.pending}
              aria-busy={wishlistAction.pending}
              aria-label="Save product"
              className="grid size-11 shrink-0 place-items-center border border-ink/20 transition hover:bg-ink hover:text-paper disabled:cursor-wait"
            >
              {wishlistAction.pending ? (
                <LoaderCircle className="animate-spin" size={20} aria-hidden="true" />
              ) : (
                <Heart size={20} fill={wishlist.includes(product.id) ? 'currentColor' : 'none'} />
              )}
            </button>
          </div>
          <div className="mt-5 flex items-center justify-between">
            <p className="text-lg">{formatPrice(product.price)}</p>
            <p className="flex items-center gap-2 text-xs">
              <Star size={13} fill="currentColor" /> {product.rating} ({product.reviews})
            </p>
          </div>
          <p className="mt-7 leading-7 text-ink/65">{product.description}</p>
          <div className="mt-8">
            <p className="mb-3 text-xs tracking-[.15em] uppercase">Finish — {color}</p>
            <div className="flex gap-3">
              {product.colors.map((c) => (
                <button
                  key={c}
                  onClick={() => setColor(c)}
                  aria-label={`Choose ${c}`}
                  className={`size-9 rounded-full border-2 ${color === c ? 'border-indigo p-1' : 'border-transparent'} ${c === 'Sumi' ? 'bg-[#3c352e]' : c === 'Indigo' ? 'bg-indigo' : c === 'Clay' ? 'bg-clay' : 'bg-[#c9ab7a]'}`}
                />
              ))}
            </div>
          </div>
          <div className="mt-8 flex gap-3">
            <div className="flex shrink-0 items-center border border-ink/20">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="p-4"
                aria-label="Decrease quantity"
              >
                <Minus size={15} />
              </button>
              <span className="w-8 text-center text-sm">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="p-4"
                aria-label="Increase quantity"
              >
                <Plus size={15} />
              </button>
            </div>
            <button
              disabled={!product.stock || cartAction.pending}
              aria-busy={cartAction.pending}
              onClick={() => cartAction.run(() => addToCart(product.id, quantity))}
              className="flex flex-1 items-center justify-center gap-2 bg-indigo px-6 py-4 text-sm text-white transition hover:bg-ink disabled:cursor-wait disabled:bg-ink/35"
            >
              {cartAction.pending ? (
                <LoaderCircle className="animate-spin" size={17} aria-hidden="true" />
              ) : null}
              {cartAction.pending
                ? 'Adding to bag'
                : product.stock
                  ? 'Add to bag'
                  : 'Currently unavailable'}
            </button>
          </div>
          <Accordion className="mt-10 border-t border-ink/20">
            <AccordionItem value="details">
              <AccordionTrigger className="py-5 text-base">Dimensions & details</AccordionTrigger>
              <AccordionContent className="pb-5 leading-6 text-ink/60">
                <p>{product.dimensions}</p>
                <p className="mt-2">
                  Material: {product.material}. Finished by hand in small batches.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="care">
              <AccordionTrigger className="py-5 text-base">Care</AccordionTrigger>
              <AccordionContent className="pb-5 leading-6 text-ink/60">
                {product.care}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="delivery">
              <AccordionTrigger className="py-5 text-base">Delivery & returns</AccordionTrigger>
              <AccordionContent className="pb-5 leading-6 text-ink/60">
                In-stock pieces arrive in 5–10 working days. Complimentary room-of-choice delivery
                over RM 1,500. Returns accepted within 14 days.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
      <section className="section-reveal border-t border-ink/15">
        <div className="mx-auto max-w-[1440px] px-5 py-20 lg:px-10">
          <h2 className="font-serif text-4xl">You may also like</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
