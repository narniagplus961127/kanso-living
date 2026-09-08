import type { Metadata } from 'next';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import './globals.css';
import { StoreProvider } from '@/components/store-provider';
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from '@/lib/seo';

const sans = Manrope({ variable: '--font-kanso-sans', subsets: ['latin'] });
const serif = Cormorant_Garamond({
  variable: '--font-kanso-serif',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: `${SITE_NAME} — Furniture for a quieter home`, template: `%s — ${SITE_NAME}` },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    'Japanese minimalist furniture',
    'furniture Malaysia',
    'solid wood furniture',
    'oak furniture',
    'Kanso Living',
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_MY',
    url: '/',
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Furniture for a quieter home`,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} — Furniture for a quieter home`,
    description: SITE_DESCRIPTION,
  },
  category: 'furniture',
};

const websiteStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  inLanguage: 'en-MY',
  publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-MY">
      <body className={`${sans.variable} ${serif.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteStructuredData).replace(/</g, '\\u003c'),
          }}
        />
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
