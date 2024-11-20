'use client'
import React from 'react'
import { useCart } from '@/src/lib/hooks'
import { Button } from '@nextui-org/react';

export default function CartButton({ figure_name, image, price, product_id
}) {
    const addToCart = useCart((state) => state.addToCart);

    function useAddToCart() {
        addToCart({
            figure_name: figure_name,
            image: image,
            price: price,
            product_id: product_id,
        });
    }
  return (
    <Button onClick={useAddToCart}>Add to Cart</Button>
  )
}
