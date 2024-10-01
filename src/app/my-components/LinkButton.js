'use client'
import React from 'react'
import Link from 'next/link'
import { Button } from '@nextui-org/react'
import { buttonVariants } from "@/src/components/ui/button"
import { useRouter } from 'next/navigation'

export default function LinkButton({title}) {
  const router = useRouter();
  return (
    <>
        <Link href="/docs/all" className=' relative'>
        <div>
          <Button onClick={() => router.push('/docs/all')} className="flex justify-center align-middle items-center w-40 h-10 rounded-xl bg-transparent text-zinc-800 border-[2px] border-zinc-800  text-2xl">{title}</Button>
        </div>
        </Link>
    </>
  )
}
