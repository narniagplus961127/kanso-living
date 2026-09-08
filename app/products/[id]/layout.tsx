import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { formatPrice, getProduct, products } from '@/lib/products';
import { createPageMetadata, SITE_NAME, SITE_URL } from '@/lib/seo';

type ProductLayoutProps = Readonly<{
  children: ReactNode;
  params: Promise<{ id: string }>;
}>;

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export async function generateMetadata({ params }: ProductLayoutProps): Promise<Metadata> {
  const { id } = await params;
  const product = getProduct(id);

  if (!product) {
    return {
      title: 'Product not found',
      robots: { index: false, follow: false },
    };
  }

  const description = `${product.description} ${product.material}, ${product.color}. ${formatPrice(product.price)}.`;
  const metadata = createPageMetadata({
    title: product.name,
    description,
    path: `/products/${product.id}`,
  });

  return {
    ...metadata,
    openGraph: {
      ...metadata.openGraph,
      images: [{ url: product.image, alt: `${product.name} by ${SITE_NAME}` }],
    },
    twitter: {
      ...metadata.twitter,
      images: [product.image],
    },
    other: {
      'product:price:amount': String(product.price),
      'product:price:currency': 'MYR',
      'product:availability': product.stock ? 'in stock' : 'out of stock',
    },
  };
}

export default async function ProductLayout({ children, params }: ProductLayoutProps) {
  const { id } = await params;
  const product = getProduct(id);

  if (!product) return children;

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    image: [`${SITE_URL}${product.image}`],
    description: product.description,
    sku: product.id,
    category: product.category,
    material: product.material,
    color: product.color,
    brand: { '@type': 'Brand', name: SITE_NAME },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: product.rating,
      reviewCount: product.reviews,
    },
    offers: {
      '@type': 'Offer',
      url: `${SITE_URL}/products/${product.id}`,
      priceCurrency: 'MYR',
      price: product.price,
      availability: product.stock ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
      itemCondition: 'https://schema.org/NewCondition',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
        }}
      />
      {children}
    </>
  );
}
