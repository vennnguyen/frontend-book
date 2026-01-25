import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import type { Product } from "@/types/product"

interface CarouselOptionsProps {
  products: Product[]
}

export default function CarouselOptions({ products }: CarouselOptionsProps) {
  return (
    <div className="w-full p-6 flex justify-center">
      <Carousel
        className="w-full"
        opts={{ align: "start", loop: true }}
      >
        <CarouselContent>
          {products.map((product) => (
            <CarouselItem
            key={product.id}
            className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
          >
            <Card className="group relative overflow-hidden">
              <CardContent className="p-2">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-40 w-full object-cover rounded-md"
                />
                <h3 className="mt-2 text-sm font-medium">
                  {product.name}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {product.author}
                </p>
              </CardContent>

              <div className="absolute inset-x-0 bottom-0 h-12 bg-black/80 text-white flex items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform">
                Xem chi tiết
              </div>
            </Card>
          </CarouselItem>

          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
