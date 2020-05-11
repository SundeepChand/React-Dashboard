import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const data = {
	labels: [
		'Blue',
		'Gray',
	],
	datasets: [{
		data: [80, 20],
		backgroundColor: [
    'rgba(58, 234, 248, 1)',
		'#C9C9C9',
		],
		hoverBackgroundColor: [
		'rgba(28, 184, 206, 1)',
		'#A1A1A1',
		]
	}]
};

const DoughnutExample = () => {
  return (
    <React.Fragment>
      <Doughnut data={data} options={{ responsive: true }} />
    </React.Fragment>
  )
}

export default DoughnutExample
