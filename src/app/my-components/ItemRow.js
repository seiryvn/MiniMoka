import React from 'react'
import Image from 'next/image'
import bread from '@/src/app/assets/bread.png'
import cakegirl from '@/src/app/assets/cakegirl.png'

export default function ItemRow(props) {
  return (
    <div className="py-5">
        <div className="flex flex-row gap-24 justify-center align-middle items-center">
            <div className="flex flex-col bg-rose-100 pt-4 px-4 rounded-lg">
                <div>
                  <Image className="rounded-lg shadow-lg"
                    src={bread}
                    width={300}
                    height={300}
                    alt="rilakkuma bread"
                  />
                </div>
                <div className="pt-2 text-lg">Rilakkuma Bread Plush</div>
                <div className="text-lg pb-4">$8329</div>
            </div>
            <div className="flex flex-col">
                <div>
                  <Image className="rounded-lg shadow-lg"
                    src={cakegirl}
                    width={300}
                    height={300}
                    alt="rilakkuma bread"
                  />
                </div>
                <div className="pt-2 text-lg">Rilakkuma Bread Plush</div>
                <div className="text-lg pb-4">$8329</div>
            </div>
            <div className="flex flex-col">
                <div>
                  <Image className="rounded-lg shadow-lg"
                    src={bread}
                    width={300}
                    height={300}
                    alt="rilakkuma bread"
                  />
                </div>
                <div className="pt-2 text-lg">Rilakkuma Bread Plush</div>
                <div className="text-lg pb-4">$8329</div>
            </div>
          </div>
    </div>
  )
}
