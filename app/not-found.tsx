import Link from 'next/link';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
export default function NotFound() {
  return (
    <main className="page-enter">
      <SiteHeader />
      <section className="grid min-h-[60vh] place-content-center px-5 text-center">
        <p className="text-xs tracking-[.2em] text-indigo uppercase">404 · A quiet corner</p>
        <h1 className="mt-4 font-serif text-6xl">Nothing lives here yet.</h1>
        <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-ink/55">
          The page may have moved, but the collection is right where you left it.
        </p>
        <Link href="/" className="mx-auto mt-7 border-b border-ink pb-1 text-sm">
          Return home
        </Link>
      </section>
      <SiteFooter />
    </main>
  );
}
