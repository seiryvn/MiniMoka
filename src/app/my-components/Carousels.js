'use client'
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import lpsdeer from "@/src/app/displaycase/lpsdeer.png"
import pmfairy from "@/src/app/displaycase/pmfairy.png"
import rilakkuma from "@/src/app/displaycase/rilakkuma.png"
import hellokitty from "@/src/app/displaycase/hellokitty.png"
import sumikko from "@/src/app/displaycase/sumikko.png"
import sylcalico from "@/src/app/displaycase/sylcalico.png"
import lpsemecat from "@/src/app/displaycase/lpsemecat.png"
import sylguitar from "@/src/app/displaycase/sylguitar.png"
import pmmulan from "@/src/app/displaycase/pmmulan.png"
import { Card, CardContent } from "@/src/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/src/components/ui/carousel"

export function MyCarousel() {
  const images = [lpsdeer, hellokitty, rilakkuma, pmfairy, sylcalico, sumikko, lpsemecat, sylguitar, pmmulan]

  return (
    <Carousel 
    plugins={[
      Autoplay({
        delay: 4000,
      }),
    ]}
    opts={{
      loop: true
    }}
    className="w-full max-w-xs">
      <CarouselContent>
        {images.map((link, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                  <CardContent className="flex aspect-square p-1">
                    <Image src={link} alt={index} width={500} height={500}/>
                  </CardContent>
                </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
