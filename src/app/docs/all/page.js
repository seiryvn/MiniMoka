import React from 'react'
import BoxAll from '../../my-components/BoxAll'

export default function page() {
  return (
    <>
      <div className=" mt-5 mb-16 flex justify-center align-middle items-center">
        <div className=" h-full w-full min-w-[95vh] max-w-[105vh] bg-stone-200 rounded-lg shadow-lg border-default-300 border-[1px]">
            <div className="flex flex-col justify-center align-middle items-center m-10 gap-5">
              <h1 className="text-3xl">Figurine Trove</h1>
              <h3 className="text-2xl text-default-500">Collect to your taste at Mini Moka !</h3>
            </div>
          </div>
      </div>
        
        <BoxAll/>
    </>
  )
}
