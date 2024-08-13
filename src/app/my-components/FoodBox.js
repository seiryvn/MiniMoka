import React from "react";
import CardBox from "./CardBox";
import { createClient } from "@/utils/supabase/client";

export default async function FoodBox() {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('MiniMoka')
    .select('*')
    // .eq('plush_group', 'Food')

  // const list = [
  //   {
  //     title: "Fluffy Bread Plush",
  //     img: "https://cdn.discordapp.com/attachments/766728148909031455/1268257131577081927/Untitled556_20240731131607.png?ex=66b0613f&is=66af0fbf&hm=1cccb307e19670c46d018a5c7ec38d18b23451d2d7739756dae7d6639cb900b4&",
  //     brand: 'Rilakkuma',
  //     price: "$55.00",
  //   },
  //   {
  //     title: "Sakura Mochi Plush",
  //     img: "https://cdn.discordapp.com/attachments/766728148909031455/1268257130843209779/Untitled556_20240731132040.png?ex=66b0613f&is=66af0fbf&hm=952718491774c7955714492c2ec598916e2777f6115420c79982a6548c950916&",
  //     brand: 'Sumikko Gurashi',
  //     price: "$40.00",
  //   },
  //   {
  //     title: "Tamago Sushi Plush",
  //     img: "https://cdn.discordapp.com/attachments/766728148909031455/1269640483811102720/Untitled556_20240804085728.png?ex=66b0cc58&is=66af7ad8&hm=510ed4c8b0dcff6964345c9dff97b56dcdce8d0b2e130ddfcbf257fe5189812a&",
  //     brand: 'Sumikko Gurashi',
  //     price: "$40.00",
  //   },
  //   {
  //     title: "Pancake Plush",
  //     img: "https://cdn.discordapp.com/attachments/766728148909031455/1269640484251242597/Untitled556_20240804085713.png?ex=66b0cc58&is=66af7ad8&hm=b1ba725336c5fb20379d301e69510258db54f1abdf6b3613ea80a663ca270bd6&",
  //     brand: 'Pusheen',
  //     price: "$70.00",
  //   },
  //   {
  //     title: "Late Night Snack Plush",
  //     img: "https://cdn.discordapp.com/attachments/766728148909031455/1269646740558970912/Untitled556_20240804092242.png?ex=66b0d22b&is=66af80ab&hm=29c91dbb8aae8bc3095c507f492787faeee819ac02c4e9ef5754f2dbf48b7990&",
  //     brand: 'Pusheen',
  //     price: "$50.00",
  //   },
  //   {
  //     title: "Strawberry Shortcake Plush",
  //     img: "https://cdn.discordapp.com/attachments/766728148909031455/1269640483257188456/Untitled556_20240804085747.png?ex=66b0cc57&is=66af7ad7&hm=9f1bda25016d5865ec5a6d12447dab8a384965c1c5ad8e3b3261e60a5cbd5362&",
  //     brand: 'Sumikko Gurashi',
  //     price: "$30.50",
  //   },
  //   {
  //     title: "Dumpling Plush",
  //     img: "https://cdn.discordapp.com/attachments/766728148909031455/1268257132193779844/Untitled556_20240731131545.png?ex=66b0613f&is=66af0fbf&hm=bd49f22910f90614b8e571e37bc69d25f49d1071c47ec658fa9ccba0dfbc7ac1&",
  //     brand: 'Rilakkuma',
  //     price: "$30.50",
  //   },
  //   {
  //     title: "Ice Cream Sandwich Plush",
  //     img: "https://cdn.discordapp.com/attachments/766728148909031455/1271097999870791724/Untitled559_20240808092101.png?ex=66b619c3&is=66b4c843&hm=da6382e6b4755e0d106616d54e5d80484a76174530ebef1f43e297fd0bbb63c0&",
  //     brand: 'Pusheen',
  //     price: "$65.50",
  //   },
  //   {
  //     title: "Lavendar Cupcake Plush",
  //     img: "https://cdn.discordapp.com/attachments/766728148909031455/1269646741041578137/Untitled556_20240804092221.png?ex=66b0d22b&is=66af80ab&hm=77b7b121e24a61a5c44a6e833f6cfefa6bb983e92db91cbcbe77b4e5892143bf&",
  //     brand: 'Hello Kitty',
  //     price: "$40.00",
  //   },
  //   {
  //     title: "White Peach Plush",
  //     img: "https://cdn.discordapp.com/attachments/766728148909031455/1271097997056278550/Untitled559_20240808092817.png?ex=66b619c2&is=66b4c842&hm=216c74cb3f18f956801b7e8d761f7b8a0da75b6d9b81d0581a8db61b453d8741&",
  //     brand: 'Sumikko Gurashi',
  //     price: "$50.00",
  //   },
  //   {
  //     title: "Butter Pancake Plush",
  //     img: "https://cdn.discordapp.com/attachments/766728148909031455/1271100718694006804/Untitled559_20240808093948.png?ex=66b61c4b&is=66b4cacb&hm=22338fa785a26c4688f38446231d7c50f1fe1c19fee58dff01eb888fef928b3b&",
  //     brand: 'Molang',
  //     price: "$50.00",
  //   },
  //   {
  //     title: "Cheeseburger Plush",
  //     img: "https://cdn.discordapp.com/attachments/766728148909031455/1271098001561092117/Untitled559_20240808092009.png?ex=66b619c3&is=66b4c843&hm=cc85ab5abf1284cdb67a1b83360cf6713522558131f2804fb9174c2025013b03&",
  //     brand: 'Rilakkuma',
  //     price: "$70.00",
  //   },
  //   {
  //     title: "Frosted Cake Plush",
  //     img: "https://cdn.discordapp.com/attachments/766728148909031455/1271097996506955888/Untitled559_20240808092847.png?ex=66b619c2&is=66b4c842&hm=9fa7c3cd4ffc3963a846c46b012708f47ba247de069e37caca158bf8b86dfc9b&",
  //     brand: 'Sumikko Gurashi',
  //     price: "$60.00",
  //   },
  //   {
  //     title: "Pineapple Plush",
  //     img: "https://cdn.discordapp.com/attachments/766728148909031455/1271097999258550383/Untitled559_20240808092111.png?ex=66b619c2&is=66b4c842&hm=062ac71a4de3570c386cef927c40929b11b2a3efc7fd759f4ca0921f7ba596fe&",
  //     brand: 'Pusheen',
  //     price: "$80.00",
  //   },
  //   {
  //     title: "Dorayaki Plush",
  //     img: "https://cdn.discordapp.com/attachments/766728148909031455/1271098002047635468/Untitled559_20240808091942.png?ex=66b619c3&is=66b4c843&hm=60f3f2afe41873c23ddb0ef82c5b955771ad9956f9ac2756e89b13225a6871a7&",
  //     brand: 'Rilakkuma',
  //     price: "$65.00",
  //   },
  //   {
  //     title: "Baguette Plush",
  //     img: "https://cdn.discordapp.com/attachments/766728148909031455/1271098001057648735/Untitled559_20240808092022.png?ex=66b619c3&is=66b4c843&hm=62058ac45fe15c10495ee8903a2e1053340c2c94ceb91aa43851cfc731a22874&",
  //     brand: 'Sanrio',
  //     price: "$60.00",
  //   },
  //   {
  //     title: "Choco-Milk Plush",
  //     img: "https://cdn.discordapp.com/attachments/766728148909031455/1271097998700445811/Untitled559_20240808092141.png?ex=66b619c2&is=66b4c842&hm=4d78944ce65a637915a648cd66cc78a62e003bc41cc73a6790ad491dbe847bec&",
  //     brand: 'Pusheen',
  //     price: "$75.00",
  //   },
  //   {
  //     title: "Banana Plush",
  //     img: "https://cdn.discordapp.com/attachments/766728148909031455/1271097997803126844/Untitled559_20240808092803.png?ex=66b619c2&is=66b4c842&hm=2100bea1400bab65b713ef167a85ac2b0c6836a601d8e3724ad833ecc5325031&",
  //     brand: 'Sumikko Gurashi',
  //     price: "$55.50",
  //   },
  //   {
  //     title: "S'Mores Plush",
  //     img: "https://cdn.discordapp.com/attachments/766728148909031455/1271098000327966853/Untitled559_20240808092039.png?ex=66b619c3&is=66b4c843&hm=4f20bc66dafeb891d15f90d13d8ae094f9d550911db34114987f78bc6b9fee83&",
  //     brand: 'Pusheen',
  //     price: "$80.50",
  //   },
  // ];

  return (
    <div className="flex flex-row justify-center align-middle items-center px-10">
       <div className="flex flex-wrap gap-14 justify-center align-middle items-center">
      {data.map((item) => (
          <Card shadow="sm" key={item.id} isPressable onPress={() => console.log("item pressed")}className="w-[200px]">
            <CardBody className="overflow-visible p-2">
              <Image
                shadow="sm"
                radius="lg"
                width='200'
                height='400'
                alt={item.id}
                src={item.image}
              />
            </CardBody>
            <CardFooter className="text-md flex flex-col gap-1 items-start text-start pt-1">
              <p className="text-default-500">{item.plush_brand}</p>
              <b>{item.plush_name}</b>
              <p>{item.price}</p>
            </CardFooter>
          </Card>
        ))}
    </div>
    </div>
  );
}