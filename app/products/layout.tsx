import type { ReactNode } from 'react';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Japanese-Minimalist Furniture',
  description:
    'Explore Kanso Living furniture for quiet modern homes, including seating, storage, tables, and beds crafted in oak, ash, and walnut.',
  path: '/products',
});

export default function ProductsLayout({ children }: Readonly<{ children: ReactNode }>) {
  return children;
}
