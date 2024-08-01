'use client'
import React from 'react'
import Image from 'next/image'
import sanrio from '@/src/app/assets/sanrio.png'
import Modal from '../my-components/Modal'
import Navigation from './Navigation'

export default function Header() {
  
  return (
    <>
    <div className="bg-rose-100">
        <div className="flex flex-row py-1 px-5 justify-end align-middle">
        <Modal/>
        </div>
    </div>
    <div className="flex flex-row mt-3 align-middle justify-center items-center">
      <Image
        src={sanrio}
        width={100}
        height={100}
        alt="Sanrio Logo"
      />
      <div className="p-3 text-5xl text-zinc-800">Mini Moka</div>
    </div>
    </>
  )
}
