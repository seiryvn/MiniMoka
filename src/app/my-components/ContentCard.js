"use client";
import Image from "next/image";

export function ContentCard({logged1, logged2, logged3, logged4}) {
    
    return (
    <>
    <a href={`/docs/${logged1}`}>
    <div className="max-w-xs w-full group/card">
      <div
        className={
          " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-2xl border-[2px] border-default-500 max-w-sm mx-auto flex flex-col justify-between p-4 bg-[url(https://i.pinimg.com/originals/a7/ec/66/a7ec6693a7c1e3a80b802e9a1fd6de0a.jpg)] bg-cover"
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
          " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-2xl border-[2px] border-default-500  max-w-sm mx-auto flex flex-col justify-between p-4 bg-[url(https://i.pinimg.com/originals/78/f9/a6/78f9a6beb570dd76650dd00ab74b80b6.jpg)] bg-cover"
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
          " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-2xl border-[2px] border-default-500  max-w-sm mx-auto flex flex-col justify-between p-4 bg-[url(https://i.pinimg.com/originals/b2/47/09/b24709d2d513fc9eb8b1d6cfdc83bf10.jpg)] bg-cover"
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
          " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-2xl border-[2px] border-default-500  max-w-sm mx-auto flex flex-col justify-between p-4 bg-[url(https://i.pinimg.com/originals/91/c7/d4/91c7d44f8d02bab4b0feefb0e97dab46.jpg)] bg-cover"
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
            Card with Author avatar, complete name and time to read - most
            suitable for blogs.
          </p>
        </div>
      </div>
    </div>
    </a>
    </>
  );
}
