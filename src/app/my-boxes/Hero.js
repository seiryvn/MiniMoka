import React from 'react'
import { MyCarousel } from '../my-components/Carousels'

export default function Hero() {
  return (
    <>
    <div className="bg-rose-100">
    <div className="flex flex-row p-5 px-52 items-center align-middle justify-between">
        <div>BOX</div>
        <MyCarousel/>
    </div>
    </div>
    </>
  )
}
