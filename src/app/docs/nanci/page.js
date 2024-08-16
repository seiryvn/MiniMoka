import React from 'react'
import BoxNanci from '../../my-components/BoxNanci'
import MyHero from '../../my-components/MyHero'
import { TypeNanci } from '../../my-components/TypeNanci'

export default function page() {
  return (
    <>
      <div>
        <MyHero intro={<TypeNanci/>} title="About Nanci" description="With closed eyes and tilted head, Nanci blows bubbles, galloping freely through dreams and boundless imagination, unburdened and unrestricted. Nanci often wears traditional Chinese clothing that combines elegance with modern trends, and she sometimes lives in a dream world of her own imagination. She embodies the ultimate romance and healing, helping people relieve their stress." link="https://rolife.robotime.com/wp-content/uploads/sites/4/2024/01/%E8%8B%A5%E6%9D%A5logo-2023RGB-%E5%9C%86%E5%BD%A2%E5%A4%B4%E5%83%8F.png" author="Rolife is a leading Chinese cultural and creative toy brand established in 2017. Working under Rolife, SADIE is the designer behind Nanci."/>
        <BoxNanci/>
      </div>
    </>
  )
}
