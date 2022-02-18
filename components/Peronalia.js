import React from 'react'

function Peronalia({fullname}) {
  
  return (
    <div>
      <div className="flex p-6">
        <div className="h-38 w-38 block p-4">
          <div className="md:flex ">
            <div className="flex h-32 w-32 items-center justify-center rounded-full bg-flesgroen md:shrink-0 ">
              <p className=" text-6xl font-bold text-donkergroen">
                {fullname.charAt()}
              </p>
            </div>
          </div>
        </div>
        <div className="grow  pl-2 ">
          <div className="">
            <div className="mt-2 md:mt-12 w-full text-xl text-donkergroen md:text-5xl">
              {fullname}
            </div>
            <div className="flex flex-col md:flex-row mt-2 w-full ">
                <div className='flex flex-row'>
                    <div className=" mt-2 h-4 w-4 rounded-full bg-white absolute border-2 border-gray-300"></div>
                    <span className=" flex-auto ml-6 text-md text-donkergroen md:mt-1 md:pr-3 ">
                        Gemakzuchtige kwaliteiszoeker
                    </span>
                </div>
                <div className='flex flex-row'>
                    <div className="mr-2 mt-2 h-4 w-4 rounded-full bg-white absolute  border-2 border-gray-300"></div>
                    <span className="flex-auto ml-6 text-md text-donkergroen md:mt-1 md:pr-3">
                    Lid sinds het begin
                    </span>
                </div>
                <div className='flex flex-row'>
                    <div className="mr-2 mt-2 h-4 w-4 rounded-full bg-white absolute  border-2 border-gray-300"></div>
                    <span className="flex-auto ml-6 text-md text-donkergroen md:mt-1 md:pr-3">
                    Beoordelingen
                    </span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Peronalia
