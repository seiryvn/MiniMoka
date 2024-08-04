import React from 'react'
import Image from 'next/image'
import CardBox from '../../my-components/CardBox'
import foodc from '@/src/app/assets/foodc.png'
export default function page() {
  
  return (
    <>
    <div className="flex justify-center align-middle items-center">
      <div className="bg-rose-100 flex  flex-row justify-between py-10 pr-0 gap-14">
          <div className="flex flex-col text-middle gap-3 pl-28 align-middle items-center justify-center">
            <div className="text-5xl">Welcome to the Food Collection!</div>
            <div className="text-2xl text-default-500">With a variety of foods ranging from snacks to sweet desserts and yummy meals, our food collection stores the cutest plushies with delicious designs.</div>
          </div>
          <div className="mr-24 w-full">
            <Image
            src={foodc}
            width={400}
            height={400}
            alt='Pusheen with Pizza'
            />
          </div>
        </div>
    </div>
      
      <div className="m-10">
        <div className="flex flex-col gap-24">
          <CardBox/>
        </div>
      </div>
    </>
  )
}
