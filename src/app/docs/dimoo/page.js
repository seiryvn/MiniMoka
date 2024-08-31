import React from 'react'
import BoxDimoo from '../../my-components/BoxDimoo'
import MyHero from '../../my-components/MyHero'
import { TypeDimoo } from '../../my-components/TypeDimoo'

export default function page() {
  return (
    <>
      <div>
        <MyHero intro={<TypeDimoo/>} title="About Dimoo" description="In the real world, Dimoo is a shy little boy who wants to explore and meet new friends, but he's often held back by his fears. In the dream world, he meets the adventurous Baby Cloud who loves hiding in Dimoo's hair. Together, they meet new friends, support one another, grow together, and experience healing and happiness, while striving for coexistence." link="https://prod-out-res.popmart.com/cms/ayan_b9a86f0dfa.jpg?updated_at=2023-01-12T07:52:14.827Z?x-oss-process=image/format,webp" author="Ayan is an artist from China specializing in illustration and toy design. Her work is full of internal mythology and centers around Dimoo."/>
        <BoxDimoo/>
      </div>
      
    </>
  )
}
