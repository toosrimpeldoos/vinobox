import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import BesteWijnen from '../public/beste-wijnen.jpg'

function createStar(thisScore, thisValue) {
  if (thisScore >= thisValue) {
    return <span>&#9733;</span>
  } else {
    return <span>&#9734;</span>
  }
}

export default function GrapeFavourites({
  grape_favourites,
  grape_favouritecolor,
}) {
  return (
    <div className="flex w-full flex-row">
      <div className="p-8 lg:w-2/5">
        <div className="mb-2 text-sm font-semibold tracking-wide text-donkergroen lg:text-xl">
          Jouw favoriete druif
        </div>
        <div>
          {grape_favourites
            .filter((grapefavourite) =>
              grapefavourite.Type.includes(grape_favouritecolor)
            )
            .map((grapefavourite, index) => {
              return (
                <div key={index + 1} className="flex w-full max-w-md">
                  <div className=" w-3/4 text-donkergroen ">
                    {index + 1}. {grapefavourite.Name}
                  </div>
                  <div className=" w-1/4 text-donkergroen ">
                    {createStar(grapefavourite.mean_score, 1)}
                    {createStar(grapefavourite.mean_score, 2)}
                    {createStar(grapefavourite.mean_score, 3)}
                    {createStar(grapefavourite.mean_score, 4)}
                    {createStar(grapefavourite.mean_score, 5)}
                  </div>
                </div>
              )
            })}
        </div>
      </div>
      <div className=" relative max-h-64 grow ">
        <Image
          alt="Vinobox"
          layout="fill"
          objectFit="cover"
          src={BesteWijnen}
        />
      </div>
    </div>
  )
}
