'use client';
import { useMemo, useState } from 'react';
import { Filter, Search, X } from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { ProductCard } from '@/components/product-card';
import { products } from '@/lib/products';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select';
import { useStore } from '@/components/store-provider';
import { useSearchParams } from 'next/navigation';

const categories = ['Seating', 'Storage', 'Tables'];
const materials = ['White Oak', 'Smoked Oak', 'Ash', 'Walnut'];
function Filters({
  selected,
  setSelected,
  price,
  setPrice,
  clear,
}: {
  selected: string[];
  setSelected: (v: string[]) => void;
  price: number[];
  setPrice: (v: number[]) => void;
  clear: () => void;
}) {
  const toggle = (v: string) =>
    setSelected(selected.includes(v) ? selected.filter((x) => x !== v) : [...selected, v]);
  return (
    <div>
      <div className="mb-7 flex items-center justify-between">
        <p className="text-xs font-semibold tracking-[.18em] uppercase">Filters</p>
        <button onClick={clear} className="text-xs text-ink/50 underline underline-offset-4">
          Clear all
        </button>
      </div>
      <div className="border-t border-ink/15 py-6">
        <p className="mb-4 font-serif text-xl">Category</p>
        <div className="space-y-3">
          {categories.map((item) => (
            <label key={item} className="flex cursor-pointer items-center gap-3 text-sm">
              <Checkbox checked={selected.includes(item)} onCheckedChange={() => toggle(item)} />
              {item}
            </label>
          ))}
        </div>
      </div>
      <div className="border-t border-ink/15 py-6">
        <p className="mb-4 font-serif text-xl">Material</p>
        <div className="space-y-3">
          {materials.map((item) => (
            <label key={item} className="flex cursor-pointer items-center gap-3 text-sm">
              <Checkbox checked={selected.includes(item)} onCheckedChange={() => toggle(item)} />
              {item}
            </label>
          ))}
        </div>
      </div>
      <div className="border-t border-ink/15 py-6">
        <div className="mb-5 flex justify-between">
          <p className="font-serif text-xl">Price</p>
          <span className="text-xs text-ink/55">
            RM {price[0]} — {price[1]}
          </span>
        </div>
        <Slider
          value={price}
          min={500}
          max={4000}
          step={50}
          onValueChange={(value) => setPrice(value as number[])}
        />
      </div>
    </div>
  );
}

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const { wishlist } = useStore();
  const savedOnly = searchParams.get('saved') === 'true';
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<string[]>([]);
  const [price, setPrice] = useState([500, 4000]);
  const [sort, setSort] = useState('featured');
  const [visible, setVisible] = useState(8);
  const clear = () => {
    setSelected([]);
    setPrice([500, 4000]);
    setQuery('');
  };
  const filtered = useMemo(() => {
    const result = products.filter(
      (p) =>
        (!savedOnly || wishlist.includes(p.id)) &&
        (!query || p.name.toLowerCase().includes(query.toLowerCase())) &&
        (!selected.some((v) => categories.includes(v)) || selected.includes(p.category)) &&
        (!selected.some((v) => materials.includes(v)) || selected.includes(p.material)) &&
        p.price >= price[0] &&
        p.price <= price[1],
    );
    return [...result].sort((a, b) =>
      sort === 'low'
        ? a.price - b.price
        : sort === 'high'
          ? b.price - a.price
          : sort === 'new'
            ? Number(Boolean(b.badge)) - Number(Boolean(a.badge))
            : b.rating - a.rating,
    );
  }, [query, selected, price, sort, savedOnly, wishlist]);
  return (
    <main>
      <SiteHeader />
      <section className="mx-auto max-w-[1440px] px-5 pt-12 pb-10 lg:px-10 lg:pt-16">
        <p className="text-xs tracking-[.22em] text-indigo uppercase">
          {savedOnly ? 'Your edit' : 'The collection'}
        </p>
        <div className="mt-3 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <h1 className="font-serif text-5xl sm:text-7xl">
              {savedOnly ? 'Saved pieces.' : 'Objects for quiet living.'}
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-6 text-ink/60">
              {savedOnly
                ? 'A considered shortlist, kept on this device.'
                : 'Useful, enduring pieces shaped by honest materials and the space around them.'}
            </p>
          </div>
          <p className="text-xs text-ink/50">{filtered.length} pieces</p>
        </div>
      </section>
      <div className="border-y border-ink/15">
        <div className="mx-auto flex max-w-[1440px] items-center gap-3 px-5 py-4 lg:px-10">
          <div className="relative min-w-0 flex-1 lg:max-w-md">
            <Search className="absolute top-1/2 left-0 -translate-y-1/2 text-ink/45" size={18} />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search the collection"
              className="w-full bg-transparent py-2 pr-8 pl-7 text-sm outline-none"
            />
            {query && (
              <button
                aria-label="Clear search"
                onClick={() => setQuery('')}
                className="absolute top-1/2 right-0 -translate-y-1/2"
              >
                <X size={16} />
              </button>
            )}
          </div>
          <Sheet>
            <SheetTrigger className="flex items-center gap-2 border border-ink/20 px-3 py-2 text-sm lg:hidden">
              <Filter size={16} /> Filter
            </SheetTrigger>
            <SheetContent side="left" className="bg-paper">
              <SheetHeader>
                <SheetTitle className="font-serif text-3xl font-normal">Refine</SheetTitle>
                <SheetDescription>Find a piece by category, material, or price.</SheetDescription>
              </SheetHeader>
              <div className="overflow-y-auto px-4">
                <Filters
                  selected={selected}
                  setSelected={setSelected}
                  price={price}
                  setPrice={setPrice}
                  clear={clear}
                />
              </div>
            </SheetContent>
          </Sheet>
          <NativeSelect
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="w-[138px]"
          >
            <NativeSelectOption value="featured">Featured</NativeSelectOption>
            <NativeSelectOption value="new">New arrivals</NativeSelectOption>
            <NativeSelectOption value="low">Price: low</NativeSelectOption>
            <NativeSelectOption value="high">Price: high</NativeSelectOption>
          </NativeSelect>
        </div>
      </div>
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-10 lg:grid-cols-[220px_1fr] lg:px-10">
        <aside className="hidden lg:block">
          <Filters
            selected={selected}
            setSelected={setSelected}
            price={price}
            setPrice={setPrice}
            clear={clear}
          />
        </aside>
        <section>
          {filtered.length ? (
            <>
              <div className="grid gap-x-5 gap-y-12 sm:grid-cols-2 xl:grid-cols-3">
                {filtered.slice(0, visible).map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              {visible < filtered.length && (
                <div className="mt-14 text-center">
                  <button
                    onClick={() => setVisible((v) => v + 4)}
                    className="border border-ink px-8 py-3 text-sm"
                  >
                    Load more
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="grid min-h-[420px] place-content-center text-center">
              <p className="font-serif text-4xl">Nothing found.</p>
              <p className="mt-3 text-sm text-ink/55">
                {savedOnly
                  ? 'Save pieces with the heart icon to see them here.'
                  : 'Try widening your search or clearing the filters.'}
              </p>
              <button onClick={clear} className="mx-auto mt-6 border-b border-ink pb-1 text-sm">
                Clear filters
              </button>
            </div>
          )}
        </section>
      </div>
      <SiteFooter />
    </main>
  );
}
