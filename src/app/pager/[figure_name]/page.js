import React from 'react'
import { createClient } from '@/utils/supabase/server'
import Image from 'next/image';
import { MyCarousel } from '../../my-components/Carousels';
import CartButton from '../../my-components/CartButton';

export default async function ItemPage({params}) {
    const figure_name = params.figure_name.replaceAll('%20', ' ');
    console.log("Figure Nmame: ");
    console.log(figure_name)
    const supabase = createClient();
    const {data, error} = await supabase.from("MiniMoka").select("*").eq("figure_name", figure_name).single();

  return (
    <>
    {/* page decor for each goes here */}
        <div className="flex justify-center align-middle items-center m-10">
            <div className="flex flex-row max-h-[200vh] max-w-[200vh] bg-stone-200 rounded-lg shadow-lg border-default-300 border-[1px] p-5 text-center gap-36 pl-20">
                <div className="flex flex-col gap-3">
                    {/* <Image
                    src={data.image}
                    className="rounded-lg"
                    width={450}
                    height={450}
                    alt={data.figure_name}
                    /> */}
                    <MyCarousel img={data.images}/>
                </div>
                <div className="my-5 flex flex-col items-start align-middle justify-start gap-5 mx-5">
                    <h1 className="text-3xl">{figure_name}</h1>
                    <h2 className="text-3xl">${data.price.toFixed(2)}</h2>
                    <CartButton/>
                    <h2 className="text-3xl">{data.description}</h2>
                </div>
            </div>
        </div>
    </>
  )
}
