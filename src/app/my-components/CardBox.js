'use client'
import React from 'react'
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";

export default function CardBox({list}) {
  return (
    <>
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
    </>
  )
}
