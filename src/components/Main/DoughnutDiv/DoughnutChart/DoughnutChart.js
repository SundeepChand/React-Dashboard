import React from 'react'
import { Doughnut, Chart } from 'react-chartjs-2'

// some of this code is a variation on https://jsfiddle.net/cmyker/u6rr5moq/
var originalDoughnutDraw = Chart.controllers.doughnut.prototype.draw;
Chart.helpers.extend(Chart.controllers.doughnut.prototype, {
  draw: function() {
    originalDoughnutDraw.apply(this, arguments);

    var chart = this.chart.chart;
    var ctx = chart.ctx;
    var width = chart.width;
    var height = chart.height;

    var fontSize = (height / 96).toFixed(2);
    ctx.font = fontSize + "em Verdana";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#54d5ff";

    var text = chart.config.data.text,
        textX = Math.round((width - ctx.measureText(text).width) / 2),
        textY = height / 2 + 20;

    ctx.fillText(text, textX, textY);
  }
})

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
  text: '80'
}

const DoughnutExample = () => {
  return (
    <React.Fragment>
      <Doughnut data={data} options={{ responsive: true, maintainAspectRatio: true, cutoutPercentage: 80 }} />
    </React.Fragment>
  )
}

export default DoughnutExample

// import React from 'react';
// import { Doughnut, Chart } from 'react-chartjs-2';



// const data = {
// 	labels: [
// 		'Red',
// 		'Green',
// 		'Yellow'
// 	],
// 	datasets: [{
// 		data: [300, 50, 100],
// 		backgroundColor: [
// 		'#FF6384',
// 		'#36A2EB',
// 		'#FFCE56'
// 		],
// 		hoverBackgroundColor: [
// 		'#FF6384',
// 		'#36A2EB',
// 		'#FFCE56'
// 		]
// 	}],
//   text: '23%'
// };

// const DoughnutChart = () => {
//   return (
//     <div>
//       <h2>React Doughnut with Text Example</h2>
//       <Doughnut data={data} />
//     </div>
//   )
// }

// export default DoughnutChart
