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

export default function MySheet() {
  return (
    <div>
        <Sheet>
        <SheetTrigger className="pl-3 align-middle items-center justify-center flex flex-row gap-2 my-2 text-lg"><MdShoppingCart/> Cart</SheetTrigger>
        <SheetContent>
            <SheetHeader>
            <SheetTitle className="text-2xl">Your Mini Moka Cart</SheetTitle>
            <SheetDescription>
                This action cannot be undone. This will permanently delete your account
                and remove your data from our servers.
            </SheetDescription>
            </SheetHeader>
            <div>
              <Button className="text-lg">Checkout</Button>
            </div>
        </SheetContent>
        </Sheet>
    </div>
  )
}
