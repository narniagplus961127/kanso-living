import type { Metadata } from 'next';

export const SITE_NAME = 'Kanso Living';
export const SITE_URL = 'https://kanso-living.vercel.app';
export const SITE_DESCRIPTION =
  'Japanese-minimalist furniture crafted in honest materials for calm, considered homes in Malaysia.';

export function createPageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const canonicalPath = path === '/' ? '/' : path.replace(/\/$/, '');
  const socialTitle = `${title} — ${SITE_NAME}`;

  return {
    title: { absolute: socialTitle },
    description,
    alternates: { canonical: canonicalPath },
    openGraph: {
      type: 'website',
      locale: 'en_MY',
      url: canonicalPath,
      siteName: SITE_NAME,
      title: socialTitle,
      description,
    },
    twitter: {
      card: 'summary_large_image',
      title: socialTitle,
      description,
    },
  };
}
