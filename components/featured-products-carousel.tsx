'use client';

import { ProductCard } from '@/components/product-card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { products } from '@/lib/products';

export function FeaturedProductsCarousel() {
  return (
    <Carousel opts={{ align: 'start', loop: true }} aria-label="Featured products">
      <CarouselContent className="-ml-5">
        {products.map((product) => (
          <CarouselItem
            key={product.id}
            className="basis-[88%] pl-5 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
          >
            <ProductCard product={product} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="mt-10 flex justify-end gap-3">
        <CarouselPrevious className="static inset-auto m-0 size-11 translate-none border-ink/20 bg-transparent hover:bg-ink hover:text-paper" />
        <CarouselNext className="static inset-auto m-0 size-11 translate-none border-ink/20 bg-transparent hover:bg-ink hover:text-paper" />
      </div>
    </Carousel>
  );
}
