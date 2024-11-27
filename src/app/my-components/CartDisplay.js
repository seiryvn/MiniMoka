import React from 'react'
import Image from 'next/image'

export default function CartDisplay({item}) {
  return (
    <>
    <div className="p-4 pb-0">
        <div>
            <Image src={item.image} width={200} height={200} alt={item.figure_name}/>
        </div>
        <div>
            <h1>{item.figure_name}</h1>
            <h2>{item.price}</h2>
        </div>
    </div>
    </>
  )
}
