import React from 'react'
import Image from 'next/image'
import BoxRila from '../../my-components/BoxRila'
import holidayc from '@/src/app/assets/holidayc.png'
export default function page() {
  return (
    <>
    <div className="flex justify-center align-middle items-center">
      <div className="bg-rose-100 flex  flex-row justify-between py-10 pr-0 gap-14">
          <div className="flex flex-col text-middle gap-3 pl-28 align-middle items-center justify-center">
            <div className="text-5xl">Find your Festive comfort-buddy!</div>
            <div className="text-2xl text-default-500">Step into a Winter Wonderland with our collection of plushies that capture the essence of the season. Soft, cuddly, and full of holiday magic.</div>
          </div>
          <div className="mr-24 w-full">
            <Image
            src={holidayc}
            width={400}
            height={400}
            alt='Gingerbread baking with Hello Kitty'
            />
          </div>
        </div>
    </div>
      
      <div className="m-10">
        <div className="flex flex-col gap-24">
          <BoxRila/>
        </div>
      </div>
    </>
  )
}
