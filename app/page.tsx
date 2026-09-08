import Link from 'next/link';
import { ArrowRight, Leaf, PackageCheck, Ruler } from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { RecentProducts } from '@/components/recent-products';
import { FeaturedProductsCarousel } from '@/components/featured-products-carousel';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Japanese-Minimalist Furniture for Quiet Homes',
  description:
    'Discover calm, enduring furniture shaped by Japanese restraint and crafted from honest materials for modern Malaysian homes.',
  path: '/',
});

const principles = [
  {
    Icon: Leaf,
    title: 'Honest materials',
    copy: 'Responsibly sourced timber, natural fibres, and low-VOC finishes.',
  },
  {
    Icon: Ruler,
    title: 'Considered proportions',
    copy: 'Designed for real homes, from compact apartments to open living rooms.',
  },
  {
    Icon: PackageCheck,
    title: 'Delivered with care',
    copy: 'Protective, recyclable packaging and scheduled delivery across Malaysia.',
  },
];

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <section className="relative min-h-[calc(100svh-112px)] overflow-hidden bg-stone">
        <img
          src="/images/kanso-hero.png"
          alt="A calm Japanese-inspired living room with an oak sofa and coffee table"
          loading="eager"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover object-[63%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-paper/95 via-paper/55 to-transparent" />
        <div className="relative mx-auto flex min-h-[calc(100svh-112px)] max-w-[1440px] items-center px-5 py-20 lg:px-10">
          <div className="max-w-xl">
            <p className="mb-6 text-xs font-medium tracking-[.24em] text-indigo uppercase">
              The quiet collection — 2026
            </p>
            <h1 className="font-serif text-[clamp(3.25rem,7vw,7rem)] leading-[.9] tracking-[-.045em]">
              Less, but
              <br />
              better lived.
            </h1>
            <p className="mt-7 max-w-md text-base leading-7 text-ink/70">
              Furniture shaped by Japanese restraint and made for the rhythm of modern life. Honest
              materials, thoughtful proportions, lasting calm.
            </p>
            <Link
              href="/products"
              className="mt-9 inline-flex items-center gap-5 border-b border-ink pb-2 text-sm font-medium tracking-wide transition-all hover:gap-7"
            >
              Explore the collection <ArrowRight size={17} strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </section>
      <section className="section-reveal mx-auto max-w-[1440px] px-5 py-20 lg:px-10 lg:py-28">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="text-xs tracking-[.2em] text-indigo uppercase">Pieces with presence</p>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl">Made for everyday rituals</h2>
          </div>
          <Link href="/products" className="hidden items-center gap-3 text-sm sm:flex">
            View all <ArrowRight size={16} />
          </Link>
        </div>
        <FeaturedProductsCarousel />
      </section>
      <section className="section-reveal bg-indigo text-paper">
        <div className="mx-auto grid max-w-[1440px] lg:grid-cols-2">
          <div className="min-h-[520px] overflow-hidden">
            <img
              src="/images/nara-sideboard.png"
              alt="Nara oak sideboard"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex items-center px-7 py-16 lg:px-20">
            <div>
              <p className="text-xs tracking-[.2em] text-paper/55 uppercase">The Nara collection</p>
              <h2 className="mt-4 max-w-lg font-serif text-5xl leading-[1.02] sm:text-6xl">
                Storage that gives the room space to breathe.
              </h2>
              <p className="mt-6 max-w-md leading-7 text-paper/65">
                Sliding doors, softened corners, and precisely matched oak grain. Everything you
                need, with nothing shouting for attention.
              </p>
              <Link
                href="/products/nara-sideboard"
                className="mt-8 inline-flex items-center gap-4 border-b border-paper/70 pb-2 text-sm"
              >
                Discover Nara <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="section-reveal mx-auto grid max-w-[1440px] gap-8 px-5 py-16 sm:grid-cols-3 lg:px-10 lg:py-20">
        {principles.map(({ Icon, title, copy }) => (
          <div key={title} className="border-t border-ink/20 pt-6">
            <Icon size={24} strokeWidth={1.2} />
            <h3 className="mt-5 font-serif text-2xl">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-ink/60">{copy}</p>
          </div>
        ))}
      </section>
      <RecentProducts />
      <SiteFooter />
    </main>
  );
}
