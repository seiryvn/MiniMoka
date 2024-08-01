import React from 'react'
import ItemRow from '../../my-components/ItemRow'
export default function page() {
  return (
    <>
      <div className="mt-5 mx-10 mb-5">
        <div className="flex flex-col gap-24">
          <ItemRow/>
          <ItemRow/>
        </div>
      </div>
    </>
  )
}
