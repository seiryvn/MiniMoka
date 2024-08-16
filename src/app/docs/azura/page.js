import React from 'react'
import BoxAzura from '../../my-components/BoxAzura'
import { TypeAzura } from '../../my-components/TypeAzura'
import MyHero from '../../my-components/MyHero'

export default function page() {
  return (
    <>
      <div>
        <MyHero intro={<TypeAzura/>} title="About Azura" description="
Azura captures a mystical aura of confidence and inspiration. Each piece portrays Azura in her enchanting, otherworldly outfits, shimmering with ethereal grace. Renowned for her magical ability to ignite dreams and aspirations, Azura encourages you to pursue your passions with unwavering courage. Embrace the mystical essence of Azura and let her magical influence guide your path." link="https://prod-out-res.popmart.com/cms/pc_Main_Pic_14ab8c9085.jpg?updated_at=2023-01-31T07:42:28.310Z?x-oss-process=image/format,webp" author="Two Clouds, is the creator and designer of Azura. She likes all things soft and gentle, which is a prominent feature in her work."/>
        <BoxAzura/>
      </div>
    </>
  )
}
