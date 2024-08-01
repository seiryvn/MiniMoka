import React from 'react'
import NavMenu from '../my-components/NavMenu'
// import sanrio from './assets/sanrio.png'

export default function Navigation() {
  return (
    <>
      <div className="flex flex-col p-3 gap-4 align-middle justify-center items-center">
        <div>
          <div><NavMenu/></div>
        </div>
      </div>
    </>
  )
}
