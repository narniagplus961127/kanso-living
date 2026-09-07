import Link from 'next/link';
export function SiteFooter() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-16 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-10 lg:py-20">
        <div>
          <p className="font-serif text-4xl tracking-[.1em]">KANSO</p>
          <p className="mt-5 max-w-sm text-sm leading-6 text-paper/60">
            Thoughtful furniture, honest materials, and space to breathe. Designed in Kuala Lumpur,
            made with patient hands.
          </p>
        </div>
        <div>
          <p className="mb-5 text-xs tracking-[.2em] text-paper/50 uppercase">Explore</p>
          <div className="flex flex-col gap-3 text-sm">
            <Link href="/products">Collection</Link>
            <Link href="/about">Our story</Link>
            <Link href="/faq">Care & FAQ</Link>
          </div>
        </div>
        <div>
          <p className="mb-5 text-xs tracking-[.2em] text-paper/50 uppercase">Stay close</p>
          <p className="text-sm text-paper/70">
            Monthly notes on considered spaces and new pieces.
          </p>
          <form className="mt-5 flex border-b border-paper/40" action="#">
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email address"
              className="min-w-0 flex-1 bg-transparent py-3 text-sm outline-none placeholder:text-paper/40"
            />
            <button className="text-xs tracking-widest uppercase">Join</button>
          </form>
        </div>
      </div>
      <div className="mx-auto flex max-w-[1440px] flex-col gap-3 border-t border-paper/15 px-5 py-6 text-xs text-paper/45 sm:flex-row sm:justify-between lg:px-10">
        <p>© 2026 Kanso Living. Frontend demonstration.</p>
        <p>Kuala Lumpur, Malaysia</p>
      </div>
    </footer>
  );
}
