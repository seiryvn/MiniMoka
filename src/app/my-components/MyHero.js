import React from 'react'

export default function MyHero({intro, title, description, author, link}) {
  return (
    <>
    <div>
        <div className="px-10 m-10 flex flex-col justify-center align-middle items-center">
          <div>
            {intro}
          </div>
          <div className="flex flex-row gap-20 justify-center align-middle items-center  mb-10">
            <div className=" h-full w-full lg:min-w-[95vh] lg:max-w-[105vh] bg-stone-200 rounded-lg shadow-lg border-default-300 border-[1px] md:min-w[50vh] md:max-w-[80vh] sm:min-w-[10vh] sm:max-w-[50vh]">
              <div className="flex flex-col text-start p-10 gap-5 align-middle">
                <h1 className="text-xl">{title}</h1>
                <h3 className="text-default-500">{description}</h3>
              </div>
            </div>
            {/* divider */}
            <div className=" h-[50vh] max-h-[50vh] w-full bg-stone-100 rounded-lg shadow-lg border-default-300 border-[1px] md:max-w-[80vh] sm:min-w-[10vh] sm:max-w-[50vh]">
              <div className="flex flex-row p-10 gap-5 align-middle text-center justify-center items-center">
                <img
                  className="mask mask-squircle h-[180px] w-[180px] p-0 m-0"
                  src={link} 
                />
                <div className="flex flex-col gap-5">
                  <h1 className="text-xl">MEET THE ARTIST</h1>
                  <h3 className="text-default-500">{author}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
        
    </>
  )
}
