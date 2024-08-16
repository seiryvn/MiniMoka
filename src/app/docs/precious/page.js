import React from 'react'
import BoxPrecious from '../../my-components/BoxPrecious'
import MyHero from '../../my-components/MyHero'
import { TypePrecious } from '../../my-components/TypePrecious'

export default function page() {
  return (
    <>
      <div>
        <MyHero intro={<TypePrecious/>} title="About Precious Moments" description="These figurines capture the essence of gentle, heartwarming moments with exquisite detail. Each piece is hand-crafted, with delicate features and soft colors that evoke a sense of tranquility and nostalgia. Designed to celebrate life's special occasions, these figurines serve as lasting reminders of cherished memories. Embrace the beauty of life's simple joys with these timeless treasures." link="https://scontent-iad3-1.xx.fbcdn.net/v/t1.6435-9/175610497_4408760465817916_6370913482143722480_n.png?_nc_cat=108&ccb=1-7&_nc_sid=13d280&_nc_ohc=BpXDLSL4QJQQ7kNvgGAFmPs&_nc_ht=scontent-iad3-1.xx&oh=00_AYDpCNJ8RW7UR0hJGUdgh0uhmUbPLB6UzEygfUgbBNyYQg&oe=66E5DB52" author="Inspired by faith, family, and friends, Samuel J. Butcher began drawing the endearing teardrop-eyed children he called “Precious Moments”."/>
        <BoxPrecious/>
      </div>
      
    </>
  )
}
