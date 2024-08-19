'use client'
import React from 'react'
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import { useRouter } from 'next/navigation';

export default function CardItem({item}) {
    const router = useRouter();
    function handlePress() {
        router.push(`/pager/${item.figure_name}`)
    }
  return (
    <>
         <Card shadow="sm" isPressable 
          onPress={handlePress}
          className="w-[200px]">
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
              <p className="text-default-500">{item.figure_brand}</p>
              <b>{item.figure_name} {item.figure_character}</b>
              <p>${item.price.toFixed(2)}</p>
            </CardFooter>
          </Card>
    </>
  )
}
