'use client'
import React from 'react'
import Image from 'next/image'
import heroimg from '@/src/app/assets/heroimg.png'
import { MyCarousel } from '../my-components/Carousels'
import LinkButton from '../my-components/LinkButton'
import { useCart } from '@/src/lib/store'
import { Button } from '@/src/components/ui/button'
import { StickyScrollReveal } from '../my-components/StickyScroll'

export default function Hero() {
  const { numOfItems, addToCart, removeFromCart } = useCart((state) => state);

  return (
    <>
    <div className="bg-rose-100">
    <div className="flex flex-row p-10 px-52 items-center align-middle gap-10 justify-between">
      <div className="border-[15px] border-white rounded-lg">
        <Image className="w-full"
        src={heroimg}
        width={500}
        height={500}
        alt='My Melody Baking'
        />
      </div> 
      <div className="flex flex-col gap-2">
            <div className="text-5xl">Explore into a world of Fluff!</div>
            <div className="text-2xl text-default-500">Storing a variety of different brands, sdakskdaslkdasldajl</div>
            <div className="mt-3"><LinkButton title="Shop All"/></div>
      </div>
    </div>

    {/* Cart Zustand! */}
    <Button variant="ghost" onClick={addToCart}>add to cart</Button>
    <span>{numOfItems}</span>
    <Button variant="ghost" onClick={removeFromCart}>remove an item</Button>
    </div>
    <MyCarousel/>
    <div className="p-0">
      <StickyScrollReveal/>
    </div>
   
    </>
  )
}