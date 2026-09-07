import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
export const metadata = { title: 'Our Story' };
export default function About() {
  return (
    <main>
      <SiteHeader />
      <section className="mx-auto max-w-[1440px] px-5 py-16 lg:px-10 lg:py-24">
        <p className="text-xs tracking-[.22em] text-indigo uppercase">Our story</p>
        <h1 className="mt-5 max-w-5xl font-serif text-[clamp(3.5rem,8vw,8rem)] leading-[.9] tracking-[-.04em]">
          We make space for what matters.
        </h1>
      </section>
      <section className="section-reveal mx-auto grid max-w-[1440px] gap-10 px-5 pb-24 lg:grid-cols-2 lg:px-10">
        <div className="overflow-hidden">
          <img
            src="/images/kanso-hero.png"
            alt="Kanso Living interior"
            className="aspect-[4/5] h-full w-full object-cover object-right"
          />
        </div>
        <div className="flex items-center lg:px-16">
          <div>
            <p className="font-serif text-3xl leading-snug">
              Kanso began with a simple question: what if furniture made a room feel quieter, not
              fuller?
            </p>
            <div className="mt-8 space-y-5 text-sm leading-7 text-ink/65">
              <p>
                Our studio in Kuala Lumpur draws from Japanese principles of restraint, naturalness,
                and respect for materials. We work with small-scale makers who understand that the
                best details are often the ones you feel rather than see.
              </p>
              <p>
                Each piece begins with proportion. We refine the line, remove the unnecessary, and
                choose materials that become more expressive with time. The result is furniture that
                belongs to your life without competing with it.
              </p>
            </div>
            <Link
              href="/products"
              className="mt-9 inline-flex items-center gap-4 border-b border-ink pb-2 text-sm"
            >
              Explore our collection <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
      <section className="section-reveal bg-indigo text-paper">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-20 sm:grid-cols-3 lg:px-10 lg:py-28">
          {[
            [
              '01',
              'Material honesty',
              'We celebrate grain, weave, texture, and the small variations that make every piece distinct.',
            ],
            [
              '02',
              'Patient craft',
              'Our partners combine precise modern tools with joinery refined over generations.',
            ],
            [
              '03',
              'Longer lives',
              'Replaceable parts, repairable finishes, and enduring forms keep furniture in use.',
            ],
          ].map(([n, title, copy]) => (
            <article key={n}>
              <p className="text-xs tracking-[.2em] text-paper/45">{n}</p>
              <h2 className="mt-8 font-serif text-3xl">{title}</h2>
              <p className="mt-4 text-sm leading-6 text-paper/60">{copy}</p>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
