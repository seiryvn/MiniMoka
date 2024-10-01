"use client";
import Image from "next/image";

export function ContentCard({logged1, logged2, logged3, logged4}) {
    
    return (
    <>
    <a href={`/docs/${logged1}`}>
    <div className="max-w-xs w-full group/card">
      <div
        className={
          " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-2xl border-[2px] border-default-500 max-w-sm mx-auto flex flex-col justify-between p-4 bg-[url(https://rrgulcdegwztusptzodr.supabase.co/storage/v1/object/public/minimokabucket/NANCIcontentcard.jpg)] bg-cover"
        }
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-white opacity-20"></div>
        <div className="flex flex-row items-center space-x-4 z-10">
          <div className="flex flex-col">
            <p className="font-normal text-base text-stone-500 relative z-10">
            </p>
            
          </div>
        </div>
        <div className="text content">
          <h1 className="font-bold text-xl md:text-2xl text-black-700 relative z-10">
            Nanci
          </h1>
          <p className="font-normal text-sm text-black-500 relative z-10 my-4">
          Mixing traditional artistry, beauty is captured with Nanci.
          </p>
        </div>
      </div>
    </div>
    </a>
    {/* TWO */}
    <a href={`/docs/${logged2}`}>
    <div className="max-w-xs w-full group/card">
      <div
        className={
          " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-2xl border-[2px] border-default-500  max-w-sm mx-auto flex flex-col justify-between p-4 bg-[url(https://rrgulcdegwztusptzodr.supabase.co/storage/v1/object/public/minimokabucket/AZURAcontentcard.jpg)] bg-cover"
        }
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-white opacity-20"></div>
        <div className="flex flex-row items-center space-x-4 z-10">
          <div className="flex flex-col">
            <p className="font-normal text-base text-stone-500 relative z-10">
            </p>
            
          </div>
        </div>
        <div className="text content">
          <h1 className="font-bold text-xl md:text-2xl text-black-700 relative z-10">
            Azura
          </h1>
          <p className="font-normal text-sm text-black-500 relative z-10 my-4">
          Elevate your display with the enchanting Azura series.
          </p>
        </div>
      </div>
    </div>
    </a>
    {/* THREE */}
    <a href={`/docs/${logged3}`}>
    <div className="max-w-xs w-full group/card">
      <div
        className={
          " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-2xl border-[2px] border-default-500  max-w-sm mx-auto flex flex-col justify-between p-4 bg-[url(https://rrgulcdegwztusptzodr.supabase.co/storage/v1/object/public/minimokabucket/HIRONOcontentcard.jpg)] bg-cover"
        }
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-white opacity-20"></div>
        <div className="flex flex-row items-center space-x-4 z-10">
          <div className="flex flex-col">
            <p className="font-normal text-base text-stone-50 relative z-10">
            
            </p>
          </div>
        </div>
        <div className="text content">
          <h1 className="font-bold text-xl md:text-2xl text-black-700 relative z-10">
            Hirono
          </h1>
          <p className="font-normal text-sm text-black-500 relative z-10 my-4">
          Hirono figurines: Where artistry meets charm.
          </p>
        </div>
      </div>
    </div>
    </a>
    {/* FOUR */}
    <a href={`/docs/${logged4}`}>
    <div className="max-w-xs w-full group/card">
      <div
        className={
          " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-2xl border-[2px] border-default-500  max-w-sm mx-auto flex flex-col justify-between p-4 bg-[url(https://rrgulcdegwztusptzodr.supabase.co/storage/v1/object/public/minimokabucket/SKULLcontentcard.jpg)] bg-cover"
        }
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-white opacity-20"></div>
        <div className="flex flex-row items-center space-x-4 z-10">
          <div className="flex flex-col">
            <p className="font-normal text-base text-gray-50 relative z-10">
            </p>
          </div>
        </div>
        <div className="text content">
          <h1 className="font-bold text-xl md:text-2xl text-black-700 relative z-10">
            Skull Panda
          </h1>
          <p className="font-normal text-sm text-black-500 relative z-10 my-4">
          Elevate your collection with the iconic Skull Panda figurines.
          </p>
        </div>
      </div>
    </div>
    </a>
    </>
  );
}
