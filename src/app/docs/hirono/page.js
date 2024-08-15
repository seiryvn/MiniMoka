import React from 'react'
import BoxHirono from '../../my-components/BoxHirono'
import { TypeHirono } from '../../my-components/TypeHirono'
import MyHero from '../../my-components/MyHero'

export default function page() {
  return (
    <>
    <div>
      <MyHero intro={<TypeHirono/>} title="About Hirono" description="Created by contemporary artist Lang, Hirono is a complex character. Through Hirono Lang aims to highlight the subtle fluctuations of life, its ups and downs, and attempts to freeze in time the elusive feelings that reveal our true character: love, joy, sadness, fear, kindness, cowardice and others. Hirono is the epitome of growth, and a personification of profound human emotions." link="https://prod-out-res.popmart.com/cms/pc_Main_Pic_3fbc1fc362.jpg?updated_at=2023-01-31T07:42:53.084Z?x-oss-process=image/format,webp" author="Lang is a Beijing-based artist working in various media spanning painting, sculpture, toys and animation."/>
      <div>
        <BoxHirono/>
      </div>
    </div>
    </>
  )
}
