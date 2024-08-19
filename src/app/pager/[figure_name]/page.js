import React from 'react'
import { createClient } from '@/utils/supabase/server'
import Image from 'next/image';
import { Button } from '@nextui-org/react';

export default async function ItemPage({params}) {
    const figure_name = params.figure_name.replace('%20', ' ');
    console.log("Figure Nmame: ");
    console.log(figure_name)
    const supabase = createClient();
    const {data, error} = await supabase.from("MiniMoka").select("*").eq("figure_name", figure_name).single();
    console.log("Data: ")
    console.log(data);
    console.log(`Error: ${error}`)

  return (
    <>
    {/* page decor for each goes here */}
        <div className="flex justify-center align-middle items-center m-10">
            <div className="flex flex-row max-h-[200vh] max-w-[200vh] bg-stone-200 rounded-lg shadow-lg border-default-300 border-[1px] p-5 text-center gap-36">
                <div className="flex flex-col gap-3">
                    <Image
                    src={data.image}
                    className="rounded-lg"
                    width={450}
                    height={450}
                    alt={data.figure_name}
                    />
                </div>
                <div className="my-5 flex flex-col items-start align-middle justify-start gap-5 mx-5">
                    <h1 className="text-3xl">{figure_name}</h1>
                    <h2 className="text-3xl">${data.price}</h2>
                    <Button className="bg-white border-[2px] border-default-500 text-3xl p-6">Add to Cart</Button>
                    <h2 className="text-3xl">{data.description}</h2>
                </div>
            </div>
        </div>
    </>
  )
}
