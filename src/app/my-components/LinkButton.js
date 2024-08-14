import React from 'react'
import Link from 'next/link'
import { buttonVariants } from "@/src/components/ui/button"


export default function LinkButton({title}) {
  return (
    <>
        <Link href="/docs/all">
        <div className="flex justify-center align-middle items-center w-40 h-10 rounded-xl bg-transparent text-black border-[2px] border-black  text-2xl">{title}
        </div>
        </Link>
    </>
  )
}
