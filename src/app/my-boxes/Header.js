import React from 'react'
import Image from 'next/image'
import sanrio from '@/src/app/assets/sanrio.png'
import orb from '@/src/app/assets/orb.png'
import Modal from '../my-components/Modal'
import SignOut from '../my-components/SignOut'
import { createClient } from '@/utils/supabase/server'

export default async function Header() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  const userdata = data.user;
  return (
    <>
    <div className="bg-stone-200">
        <div className="flex flex-row py-1 px-5 justify-end align-middle gap-10">
        {userdata? <SignOut/> : <Modal/>}
        </div>
    </div>
    <div className="flex flex-row mt-3 align-middle justify-center items-center">
      <Image
        src={orb}
        width={70}
        height={70}
        alt="Sanrio Logo"
      />
      <div className="p-3 text-5xl text-zinc-800">Mini Moka</div>
    </div>
    </>
  )
}
