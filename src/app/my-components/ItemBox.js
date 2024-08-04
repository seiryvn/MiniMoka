import React from 'react'
import Image from 'next/image'

export default function ItemBox(props) {
  return (
    <div>
      <div className="flex flex-col bg-rose-100 pt-4 px-4 rounded-lg">
        <div>
          <Image className="rounded-lg shadow-lg"
            src={props.Image}
            width={300}
            height={300}
            alt={props.index}
          />
        </div>
        <div className="pt-2 text-lg">{props.title}</div>
        <div className="text-lg pb-4">${props.price}</div>
    </div>
    </div>
  )
}
