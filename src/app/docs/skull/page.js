import React from 'react'
import BoxSkull from '../../my-components/BoxSkull'
import { TypeSkull } from '../../my-components/TypeSkull'
import MyHero from '../../my-components/MyHero'

export default function page() {
  return (
    <>
      <div>
        <MyHero intro={<TypeSkull/>} title="About Skull Panda" description="Skullpanda emerged as a distinctive kind of existence. As a universal symbiont, it travels freely between planets, looks for itself, plays different roles and experiences different lives. The first time you see Skullpanda, you are gripped by an inexplicable force. It dwells in the darkness of empty endless space, presenting itself as a wide openness, the kind that has no bounds." link="https://prod-out-res.popmart.com/cms/_1e9bf60b03.jpg?updated_at=2023-01-12T07:52:10.484Z?x-oss-process=image/format,webp" author="Xiongmiao is an artist, CG designer and scenographer from China. She's the founder of art studio Beizhai, toy studio Lazy North, and Skullpanda."/>
        <BoxSkull/>
      </div>
    </>
  )
}
