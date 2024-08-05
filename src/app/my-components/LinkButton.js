import React from 'react'
import Link from 'next/link'
import { buttonVariants } from "@/src/components/ui/button"


export default function LinkButton(props) {
  return (
    <>
        <Link href="/loggedin" className={buttonVariants({ variant: "outline" })}>
        <div className="flex flex-row justify-center align-middle items-center gap-2 text-lg text-zinc-800">{props.icon} {props.title}
        </div>
        </Link>
    </>
  )
}
