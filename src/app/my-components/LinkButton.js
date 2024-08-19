import React from 'react'
import Link from 'next/link'
import { buttonVariants } from "@/src/components/ui/button"


export default function LinkButton({title}) {
  return (
    <>
        <Link href="/docs/all" className=' relative'>
        <div className="flex justify-center align-middle items-center w-40 h-10 rounded-xl bg-transparent text-zinc-800 border-[2px] border-zinc-800  text-2xl">{title}
        </div>
        </Link>
    </>
  )
}
