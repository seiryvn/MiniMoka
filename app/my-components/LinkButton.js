import React from 'react'
import Link from 'next/link'
import { buttonVariants } from "@/components/ui/button"


export default function LinkButton(props) {
  return (
    <>
        <Link href="/" className={buttonVariants({ variant: "ghost" })}>
        <div className="flex flex-row justify-center align-middle items-center gap-2 text-lg text-zinc-800">{props.icon} {props.title}
        </div>
        </Link>
    </>
  )
}
