import React from 'react'
import LinkButton from './LinkButton'
import { TypeWriter } from './TypeWriter'
export default function Overlay() {
  return (
    <>
        <div
            className="hero w-full h-[750px]"
            style={{
                backgroundImage: "url(https://www.strangecattoys.com/cdn/shop/products/66e54d4fly1h7ztj5shgdj218v0u040f.jpg?v=1670430874)",
            }}>
            <div className="hero-overlay bg-opacity-50"></div>
            <div>
            <div className="flex justify-center align-middle text-center items-center max-w-[900px] mb-96">
                <div className="flex flex-col gap-[15px]">
                    <TypeWriter/>
                </div>
                </div>
            </div>
        </div>
    </>
  )
}
