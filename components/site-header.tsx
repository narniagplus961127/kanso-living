'use client';

import Link from 'next/link';
import { Heart, Menu, Search, ShoppingBag } from 'lucide-react';
import { useState } from 'react';
import { useStore } from '@/components/store-provider';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const links = [
  ['Collection', '/products'],
  ['Our Story', '/about'],
  ['FAQ', '/faq'],
];
export function SiteHeader() {
  const { cart, wishlist, setCartOpen } = useStore();
  const [menuOpen, setMenuOpen] = useState(false);
  const count = cart.reduce((n, l) => n + l.quantity, 0);
  return (
    <>
      <div className="bg-ink px-4 py-2 text-center text-[11px] tracking-[0.12em] text-paper sm:text-xs">
        Complimentary delivery across Malaysia on orders over RM 1,500
      </div>
      <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper/95 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 lg:px-10">
          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger className="lg:hidden" aria-label="Open navigation">
              <Menu size={22} strokeWidth={1.5} />
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-[88vw] border-r-0 bg-indigo text-paper sm:max-w-sm"
            >
              <SheetHeader>
                <SheetTitle className="font-serif text-3xl font-normal text-paper">
                  KANSO
                </SheetTitle>
                <SheetDescription className="text-paper/60">
                  Furniture for a quieter home.
                </SheetDescription>
              </SheetHeader>
              <nav className="mt-12 flex flex-col px-4">
                {links.map(([label, href]) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className="border-b border-paper/15 py-5 font-serif text-3xl"
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/" className="font-serif text-2xl tracking-[0.14em]">
            KANSO
          </Link>
          <nav className="hidden items-center gap-9 text-sm lg:flex" aria-label="Main navigation">
            {links.map(([label, href]) => (
              <Link key={href} href={href} className="transition-colors hover:text-indigo">
                {label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/products" aria-label="Search products">
              <Search size={20} strokeWidth={1.5} />
            </Link>
            <Link
              href="/products?saved=true"
              aria-label={`${wishlist.length} saved items`}
              className="relative hidden sm:block"
            >
              <Heart size={20} strokeWidth={1.5} />
              {wishlist.length > 0 && (
                <span className="absolute -top-2 -right-2 size-2 rounded-full bg-clay" />
              )}
            </Link>
            <button
              onClick={() => setCartOpen(true)}
              aria-label={`Open shopping bag with ${count} items`}
              className="relative"
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              <span className="absolute -top-2 -right-2 grid size-4 place-items-center rounded-full bg-indigo text-[10px] text-white">
                {count}
              </span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
