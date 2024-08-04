'use client'
import React from "react";
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";

export default function App() {
  const list = [
    {
      title: "Fluffy Bread Plush",
      img: "https://cdn.discordapp.com/attachments/766728148909031455/1268257131577081927/Untitled556_20240731131607.png?ex=66b0613f&is=66af0fbf&hm=1cccb307e19670c46d018a5c7ec38d18b23451d2d7739756dae7d6639cb900b4&",
      brand: 'Rilakkuma',
      price: "$55.00",
    },
    {
      title: "Sakura Mochi Plush",
      img: "https://cdn.discordapp.com/attachments/766728148909031455/1268257130843209779/Untitled556_20240731132040.png?ex=66b0613f&is=66af0fbf&hm=952718491774c7955714492c2ec598916e2777f6115420c79982a6548c950916&",
      brand: 'Sumikko Gurashi',
      price: "$40.00",
    },
    {
      title: "Tamago Sushi Plush",
      img: "https://cdn.discordapp.com/attachments/766728148909031455/1269640483811102720/Untitled556_20240804085728.png?ex=66b0cc58&is=66af7ad8&hm=510ed4c8b0dcff6964345c9dff97b56dcdce8d0b2e130ddfcbf257fe5189812a&",
      brand: 'Sumikko Gurashi',
      price: "$40.00",
    },
    {
      title: "Pancake Plush",
      img: "https://cdn.discordapp.com/attachments/766728148909031455/1269640484251242597/Untitled556_20240804085713.png?ex=66b0cc58&is=66af7ad8&hm=b1ba725336c5fb20379d301e69510258db54f1abdf6b3613ea80a663ca270bd6&",
      brand: 'Pusheen',
      price: "$70.00",
    },
    {
      title: "Late Night Snack Plush",
      img: "https://cdn.discordapp.com/attachments/766728148909031455/1269646740558970912/Untitled556_20240804092242.png?ex=66b0d22b&is=66af80ab&hm=29c91dbb8aae8bc3095c507f492787faeee819ac02c4e9ef5754f2dbf48b7990&",
      brand: 'Pusheen',
      price: "$50.00",
    },
    {
      title: "Strawberry Shortcake Plush",
      img: "https://cdn.discordapp.com/attachments/766728148909031455/1269640483257188456/Untitled556_20240804085747.png?ex=66b0cc57&is=66af7ad7&hm=9f1bda25016d5865ec5a6d12447dab8a384965c1c5ad8e3b3261e60a5cbd5362&",
      brand: 'Sumikko Gurashi',
      price: "$30.50",
    },
    {
      title: "Dumpling Plush",
      img: "https://cdn.discordapp.com/attachments/766728148909031455/1268257132193779844/Untitled556_20240731131545.png?ex=66b0613f&is=66af0fbf&hm=bd49f22910f90614b8e571e37bc69d25f49d1071c47ec658fa9ccba0dfbc7ac1&",
      brand: 'Rilakkuma',
      price: "$30.50",
    },
    {
      title: "Lavendar Cupcake Plush",
      img: "https://cdn.discordapp.com/attachments/766728148909031455/1269646741041578137/Untitled556_20240804092221.png?ex=66b0d22b&is=66af80ab&hm=77b7b121e24a61a5c44a6e833f6cfefa6bb983e92db91cbcbe77b4e5892143bf&",
      brand: 'Hello Kitty',
      price: "$40.00",
    },
  ];

  return (
    <div className="gap-10 grid grid-cols-2 sm:grid-cols-4">
      {list.map((item, index) => (
        <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
          <CardBody className="overflow-visible p-2">
            <Image
              shadow="sm"
              radius="lg"
              width='100%'
              height='400'
              alt={item.title}
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-md flex flex-col gap-1 items-start text-start pt-1">
            <p className="text-default-500">{item.brand}</p>
            <b>{item.title}</b>
            <p>{item.price}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}