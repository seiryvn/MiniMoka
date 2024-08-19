'use client'
import React from 'react'
import CardItem from './CardItem';
export default function CardBox({list}) {

  return (
    <div className="flex flex-wrap gap-14 justify-center align-middle items-center">
      {list.map((item) => (
          <CardItem item={item} key={item.id}/>
        ))}
    </div>
  )
}
