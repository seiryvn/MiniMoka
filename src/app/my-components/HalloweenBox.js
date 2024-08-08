import React from "react";
import CardBox from "./CardBox";

export default function HalloweenBox() {
  const list = [
    {
      title: "'Witch's Helper' Plush",
      img: "https://cdn.discordapp.com/attachments/766728148909031455/1271098063158640681/Untitled559_20240808091923.png?ex=66b619d2&is=66b4c852&hm=46a4a20cb653d1e34c38b49b74db8694cce2179ce026979460aadd7702edd5aa&",
      brand: 'Sumikko Gurashi',
      price: "$40.00",
    },
    {
      title: "Zombie Pup Plush",
      img: "https://cdn.discordapp.com/attachments/766728148909031455/1271098063725002823/Untitled559_20240808091906.png?ex=66b619d2&is=66b4c852&hm=a926b5caaf458e00d3e00095525fad436401bb946ab3b084b5006afe61389e8d&",
      brand: 'Sanrio',
      price: "$50.00",
    },
    {
      title: "Pumpkin Basket Plush",
      img: "https://cdn.discordapp.com/attachments/766728148909031455/1271098064165277776/Untitled559_20240808091853.png?ex=66b619d2&is=66b4c852&hm=c3f375b1b12808663013a159fcd024b1f55dcf9f3dce938b2fa04faa9c1762f5&",
      brand: 'Sanrio',
      price: "$45.00",
    },
    {
      title: "Lantern Plush",
      img: "https://cdn.discordapp.com/attachments/766728148909031455/1271098064668459200/Untitled559_20240808091835.png?ex=66b619d2&is=66b4c852&hm=f009538357d8d52b540c61e3ee4f38dc54b365135a2a94f54878bc54b9da2753&",
      brand: 'Sanrio',
      price: "$50.00",
    },
    {
      title: "Witch's Star Plush",
      img: "https://cdn.discordapp.com/attachments/766728148909031455/1271098065553723486/Untitled559_20240808091812.png?ex=66b619d2&is=66b4c852&hm=d6bd94a83c75083ef39c18b8d2aeb309a6a01b53229451d623f2d397d87dac24&",
      brand: 'Sanrio',
      price: "$50.50",
    },
    {
      title: "Warlock's Star Plush",
      img: "https://cdn.discordapp.com/attachments/766728148909031455/1271098065134030899/Untitled559_20240808091824.png?ex=66b619d2&is=66b4c852&hm=7c2e355b2904be41ef674adf7700f5269bb550a4a8181b2ffa6b0feb266401a9&",
      brand: 'Sanrio',
      price: "$50.50",
    },
    {
      title: "'Bewitched' Plush",
      img: "https://cdn.discordapp.com/attachments/766728148909031455/1271098066610552904/Untitled559_20240808091725.png?ex=66b619d2&is=66b4c852&hm=482d43a19d5879abbd6c2b680ed5b359056b21f33510f3a9bed751ffbf18c19d&",
      brand: 'Sanrio',
      price: "$40.50",
    },
    {
      title: "'Vampire Visitor' Plush",
      img: "https://cdn.discordapp.com/attachments/766728148909031455/1271101747410239599/Untitled559_20240808094410.png?ex=66b61d40&is=66b4cbc0&hm=9e2b9056b895cf4ef303bc09627f7bbf897e174761918bf22727c0f99d6ef158&",
      brand: 'Sumikko Gurashi',
      price: "$45.00",
    },
    {
      title: "'Tuxedo Night' Plush",
      img: "https://cdn.discordapp.com/attachments/766728148909031455/1271098066086268998/Untitled559_20240808091751.png?ex=66b619d2&is=66b4c852&hm=8f16922ee3ffcf0ffb59e2070068a946bb7324cc55c98b654ea426e4c6a4e2f9&",
      brand: 'Sanrio',
      price: "$40.50",
    },
    {
      title: "Ghost Plush",
      img: "https://cdn.discordapp.com/attachments/766728148909031455/1271116818265800827/Untitled559_20240808104419.png?ex=66b62b49&is=66b4d9c9&hm=990f35a4370bb5102e840e2a102ad5db0c4f6cfe33f825d66d9c8d5637d98732&",
      brand: 'Sanrio',
      price: "$40.00",
    },
  ];

  return (
    <div className="flex flex-row justify-center align-middle items-center px-10">
      <CardBox list={list}/>
    </div>
  );
}