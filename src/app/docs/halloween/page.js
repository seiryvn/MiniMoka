import React from 'react'
import Image from 'next/image'
import HalloweenBox from '../../my-components/HalloweenBox'
import hallo from '@/src/app/assets/hallo.png'
export default function page() {
  
  return (
    <>
    <div className="flex justify-center align-middle items-center">
      <div className="bg-rose-100 flex  flex-row justify-between py-10 pr-0 gap-14">
          <div className="flex flex-col text-middle gap-3 pl-28 align-middle items-center justify-center">
            <div className="text-5xl">Follow us through this enchanting night!</div>
            <div className="text-2xl text-default-500">With spooky costumes and the scent of sweet pumpkins outside your doorstep, this night of wonders awaits you!</div>
          </div>
          <div className="mr-24 w-full">
            <Image
            src={hallo}
            width={350}
            height={350}
            alt='Molang with Bats and Pumpkin Balloons'
            />
          </div>
        </div>
    </div>
      
      <div className="m-10">
        <div className="flex flex-col gap-24">
          <HalloweenBox/>
        </div>
      </div>
    </>
  )
}
