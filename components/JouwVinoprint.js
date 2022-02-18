import React, { useEffect, useState } from 'react'
import DoughnutChart from '../components/DoughnutChart'
import WijnClusters from '../components/WijnClusters'
import GrapeFavourites from '../components/GrapeFavourites'

function JouwVinoprint({
  red_cluster_scores,
  white_cluster_scores,
  grape_favourites,
}) {
  const [clusterscores, setClusterscores] = useState(red_cluster_scores)
  const [grapefavouritecolor, setGrapefavouritecolor] = useState('R')

  const changeWineTypeWhite = () => {
    setClusterscores(white_cluster_scores)
    setGrapefavouritecolor('W')
  }

  const changeWineTypeRed = () => {
    setClusterscores(red_cluster_scores)
    setGrapefavouritecolor('R')
  }

  return (
    <div>
      <div className="flex flex-row">
        <div className="p-6 text-2xl text-donkergroen md:text-5xl">
          Jouw vinoprint
        </div>
        <div className="grow"></div>
        <div className="mt-6 mr-6 h-10 w-40 flex-none rounded-full bg-wittewijn pr-2">
          <div className="mt-1 ml-1 flex flex-row">
            <div className="mr-2 h-10">
              <button
                name="red"
                onClick={changeWineTypeRed}
                className="h-7 w-7 rounded-full bg-kurkbruin font-mono font-bold text-white hover:bg-blue-700"
              >
                +
              </button>{' '}
              Rood
            </div>
            <div className="h-10 ">
              <button
                name="white"
                onClick={changeWineTypeWhite}
                className="h-7 w-7 rounded-full bg-kurkbruin font-mono font-bold text-white hover:bg-blue-700"
              >
                +
              </button>{' '}
              Wit
            </div>
          </div>
        </div>
      </div>
      <div className="md:flex">
        <WijnClusters />
        <DoughnutChart cluster_scores={clusterscores} />
      </div>

      <GrapeFavourites
        grape_favourites={grape_favourites}
        grape_favouritecolor={grapefavouritecolor}
      />
    </div>
  )
}
export default JouwVinoprint
