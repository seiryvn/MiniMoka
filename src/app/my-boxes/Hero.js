'use client'
import React from 'react'
import Image from 'next/image'
import heroimg from '@/src/app/assets/heroimg.png'
import { MyCarousel } from '../my-components/Carousels'
import LinkButton from '../my-components/LinkButton'
import { useCart } from '@/src/lib/store'
import { Button } from '@/src/components/ui/button'
import { StickyScrollReveal } from '../my-components/StickyScroll'
import Overlay from '../my-components/Overlay'
import { TypeWriter } from '../my-components/TypeWriter'
export default function Hero() {
  const { numOfItems, addToCart, removeFromCart } = useCart((state) => state);

  return (
    <>
    <Overlay/>
    <TypeWriter/>
    <div className="bg-stone-200">

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
