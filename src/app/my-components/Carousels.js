'use client'
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import { Card, CardContent } from "@/src/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/src/components/ui/carousel"

export function MyCarousel({img}) {

  return (
    <Carousel 
    plugins={[
      // Autoplay({
      //   delay: 4000,
      // }),
    ]}
    opts={{
      loop: false
    }}
    className="w-full max-w-xs">
      <div className="p-0 m-0 bg-stone-100 rounded-lg shadow-lg">
      <CarouselContent>
        {img.map((link, index) => (
          <CarouselItem key={index}>
            <div className="p-0">
              {/* <Card> */}
                  <CardContent className="flex aspect-square p-1">
                    <Image src={link} alt={index} width={450} height={450} className="rounded-lg"/>
                  </CardContent>
                {/* </Card> */}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      </div>
      <CarouselNext/>
      <CarouselPrevious/>
    </Carousel>
  )
}
