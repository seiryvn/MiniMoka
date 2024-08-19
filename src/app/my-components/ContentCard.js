"use client";
import Image from "next/image";

export function ContentCard({logged, link}) {
    
    return (
    <>

    <a href={`/docs/hirono`}>
    <div className="max-w-xs w-full group/card">
      <div
        className={
          " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4 bg-[url(https://i.pinimg.com/originals/ce/66/ab/ce66abb87cfa09bea0692f40bd22fe46.jpg)] bg-cover"
        }
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-white opacity-20"></div>
        <div className="flex flex-row items-center space-x-4 z-10">
          <div className="flex flex-col">
            <p className="font-normal text-base text-gray-50 relative z-10">
              Manu Arora
            </p>
            <p className="text-sm text-gray-400">2 min read</p>
          </div>
        </div>
        <div className="text content">
          <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
            Author Card
          </h1>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
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
