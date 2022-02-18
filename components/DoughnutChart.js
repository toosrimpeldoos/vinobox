import React from 'react'

import 'chart.js/auto'
import { Doughnut } from 'react-chartjs-2'

// import from tailwind the config to use in chart
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../tailwind.config.js'

const fullConfig = resolveConfig(tailwindConfig)

/*
"red_cluster_scores": {
  "Fris en toegankelijk": 3.7692307692,
  "Rijk en kruidig": 3.8,
  "Vol en robuust": 3.9090909091,
  "Vol en toegankelijk": 4.25
},
"white_cluster_scores": {
  "Droog en fris": 3.8,
  "Vol en rijp": 3.75
}
*/

function setChartData(rating_counts) {
  const chartLabels = []
  const chartValues = []
  for (var key in rating_counts) {
    if (rating_counts.hasOwnProperty(key)) {
      if (rating_counts[key] > 0) {
        chartLabels.push(key)
        chartValues.push(rating_counts[key])
      }
    }
  }

  const chartData = {
    labels: chartLabels,
    datasets: [
      {
        data: chartValues,
        backgroundColor: [
          fullConfig.theme.backgroundColor['flesgroen'],
          fullConfig.theme.backgroundColor['wittewijn'],
          fullConfig.theme.backgroundColor['rodewijn'],
          fullConfig.theme.backgroundColor['kurkbruin'],
        ],
        hoverBackgroundColor: [
          fullConfig.theme.backgroundColor['flesgroen'],
          fullConfig.theme.backgroundColor['wittewijn'],
          fullConfig.theme.backgroundColor['rodewijn'],
          fullConfig.theme.backgroundColor['kurkbruin'],
        ],
      },
    ],
  }
  return chartData
}

function DoughnutChart(cluster_scores) {
  const chartData = setChartData(cluster_scores.cluster_scores)
  if (chartData.labels.length !== 0) {
    return (
      <div className="w-full w-4/5 max-w-xl p-8 md:w-2/5 ">
        <Doughnut data={chartData}></Doughnut>
      </div>
    )
  } else {
    return (
      <div className="w-full max-w-xl p-8">
        {' '}
        Helaas nog geen resultaten bekend.
      </div>
    )
  }
}

export default DoughnutChart
