import React from "react";
import CardBox from "./CardBox";

export default function FestiveBox() {
  const list = [
    {
      title: "'Santa 4 U' Plush",
      img: "https://cdn.discordapp.com/attachments/766728148909031455/1270804527226028144/Untitled556_20240807140213.png?ex=66b50871&is=66b3b6f1&hm=4db2f41c76514521280308e0ec3448bf527799600f9bd2e743dd5ff0cda8b6df&",
      brand: 'Rilakkuma',
      price: "$60.00",
    },
    {
      title: "'Fuzzy Snow' Plush",
      img: "https://cdn.discordapp.com/attachments/766728148909031455/1270804531105497160/Untitled556_20240807140045.png?ex=66b50872&is=66b3b6f2&hm=867c010262daf22fbffa03975d8b10d6e8c56363470a20e52f7368f4cad4f7aa&",
      brand: 'Sumikko Gurashi',
      price: "$40.00",
    },
    {
      title: "'Kuromi Eve' Plush",
      img: "https://cdn.discordapp.com/attachments/766728148909031455/1270804529604198481/Untitled556_20240807140114.png?ex=66b50872&is=66b3b6f2&hm=02a1183f5472a8379a57de803940545515175ce31fe7e2a70b8fd428b9ff93aa&",
      brand: 'Sanrio',
      price: "$50.00",
    },
    {
      title: "'My Melody Eve' Plush",
      img: "https://cdn.discordapp.com/attachments/766728148909031455/1270804529130110976/Untitled556_20240807140129.png?ex=66b50872&is=66b3b6f2&hm=bce3d1e83f81a5d2017f7be370ea0dc74aaa42aaffe6089bec917cb7f79bb7e6&",
      brand: 'Sanrio',
      price: "$50.00",
    },
    {
      title: "'Winter Jacket' Plush",
      img: "https://cdn.discordapp.com/attachments/766728148909031455/1270804531751551108/Untitled556_20240807140030.png?ex=66b50872&is=66b3b6f2&hm=baafb105798f737b2c66f472c7030e5272b2f81e7a18b6af13b6382b19b0c2f4&",
      brand: 'Molang',
      price: "70.00",
    },
    {
      title: "'Christmas Star' Plush",
      img: "https://cdn.discordapp.com/attachments/766728148909031455/1270804530426150983/Untitled556_20240807140103.png?ex=66b50872&is=66b3b6f2&hm=a39c9889eac2bc524a8e3d10693efa85ff91dd6afd766a6b1da8b53711bd7f7c&",
      brand: 'Sumikko Gurashi',
      price: "$40.00",
    },
    {
      title: "'Gingerbread Elf' Plush",
      img: "https://cdn.discordapp.com/attachments/766728148909031455/1270804527771160686/Untitled556_20240807140155.png?ex=66b50871&is=66b3b6f1&hm=28210e41d9add99804a6dc878ad3847ed835d1830b6b208c715919378c480ae9&",
      brand: 'Rilakkuma',
      price: "$40.00",
    },
    {
      title: "'Cozy Bear' Plush",
      img: "https://cdn.discordapp.com/attachments/766728148909031455/1270804528316551178/Untitled556_20240807140142.png?ex=66b50871&is=66b3b6f1&hm=d47bfd62eef2517bcce0f5e9834e2431407b78216748d51a076e1ecba83ba2fc&",
      brand: 'Rilakkuma',
      price: "$40.00",
    },
  ];

  return (
    <div className="flex flex-row justify-center align-middle items-center px-10">
      <CardBox list={list}/>
    </div>
  );
}