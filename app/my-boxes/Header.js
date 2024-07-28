'use client'
import React from 'react'
import Modal from '../my-components/Modal'

export default function Header() {
  
  return (
    <>
    <div className="bg-rose-100">
        <div className="flex flex-row py-1 px-5 justify-end align-middle">
        {/* <LinkButton icon={<CgProfile />}title="Sign In"/> */}
        <Modal/>
        </div>
    </div>
    </>
  )
}
