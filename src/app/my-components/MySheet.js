'use client'
import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/src/components/ui/sheet"
  import { MdShoppingCart } from "react-icons/md";
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/src/lib/hooks';

export default function MySheet() {
  const router = useRouter();
  const cart = useCart();
  
  async function Checkout(){
    const response = await fetch("../../checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        cart: cart.cartItems
      })
    });
    const data = await response.json();
    router.push(data.message);
  }
  return (
    <div>
        <Sheet>
        <SheetTrigger className="pl-3 align-middle items-center justify-center flex flex-row gap-2 my-2 text-lg"><MdShoppingCart/> Cart</SheetTrigger>
        <SheetContent>
            <SheetHeader>
            <SheetTitle className="text-2xl">Your Mini Moka Cart</SheetTitle>
            <SheetDescription>
                Shopping Cart with Stripe under Construction!
            </SheetDescription>
            </SheetHeader>
            <div className="flex flex-col my-5 gap-7 align-middle items-center justify-center">
              <Button onClick={Checkout} className="text-lg border-2 border-black">Checkout</Button>
            </div>
        </SheetContent>
        </Sheet>
    </div>
  )
}
