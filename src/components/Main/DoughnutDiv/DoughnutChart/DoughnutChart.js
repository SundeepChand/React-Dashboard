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
		'#cccccc',
		],
		hoverBackgroundColor: [
		'#23c5fa',
		'#969696',
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
