"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"

const slides = ["Design tokens", "Component kit", "Motion presets", "Icons"]

export default function CarouselDemo() {
  return (
    <div className="flex flex-col gap-6">
      <Carousel className="mx-12 max-w-xs">
        <CarouselContent>
          {slides.map((label) => (
            <CarouselItem key={label}>
              <div className="flex aspect-video items-center justify-center rounded-xl bg-muted text-sm font-medium text-muted-foreground">
                {label}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <Carousel
        orientation="vertical"
        opts={{ align: "start" }}
        className="mx-auto w-full max-w-xs"
      >
        <CarouselContent className="h-48">
          {slides.slice(0, 3).map((label) => (
            <CarouselItem key={label} className="basis-1/3">
              <div className="flex h-full items-center justify-center rounded-lg bg-muted text-sm text-muted-foreground">
                {label}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
