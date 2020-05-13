import React from 'react'
import { Doughnut } from 'react-chartjs-2'

const data = {
	labels: [
		'Blue',
		'Gray',
	],
	datasets: [{
		data: [80, 20],
		backgroundColor: [
    '#54d5ff',
		'#C9C9C9',
		],
		hoverBackgroundColor: [
		'rgb(28, 184, 206)',
		'#A1A1A1',
    ]
  }],
}

const DoughnutExample = () => {
  return (
    <React.Fragment>
      <Doughnut data={data} options={{ responsive: true, maintainAspectRatio: true, cutoutPercentage: 80 }} />
    </React.Fragment>
  )
}

export default DoughnutExample
