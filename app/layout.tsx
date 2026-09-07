import type { Metadata } from 'next';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import './globals.css';
import { StoreProvider } from '@/components/store-provider';

const sans = Manrope({ variable: '--font-kanso-sans', subsets: ['latin'] });
const serif = Cormorant_Garamond({ variable: '--font-kanso-serif', subsets: ['latin'], weight: ['400', '500', '600'] });

export const metadata: Metadata = { title: { default: 'Kanso Living — Furniture for a quieter home', template: '%s — Kanso Living' }, description: 'Japanese-minimalist furniture crafted in honest materials for calm, considered homes.' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body className={`${sans.variable} ${serif.variable}`}><StoreProvider>{children}</StoreProvider></body></html>; }
