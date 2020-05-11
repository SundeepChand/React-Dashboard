import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015'],
  datasets: [
    {
      label: 'Desktops',
      fill: false,
      lineTension: 0.3,
      backgroundColor: 'rgba(162, 98, 240, 0.4)',
      borderColor: 'rgba(162, 98, 240, 1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(162, 98, 240, 1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(162, 98, 240, 1)',
      pointHoverBorderColor: 'rgba(162, 98, 240, 1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [50, 75, 25, 50, 75, 50, 75, 100]
    },
    {
      label: 'Tablets',
      fill: false,
      lineTension: 0.3,
      backgroundColor: 'rgba(58, 234, 248, 0.4)',
      borderColor: 'rgba(58, 234, 248, 1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(58, 234, 248, 1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(58, 234, 248, 1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 3,
      pointHitRadius: 10,
      data: [0, 50, 75, 50, 15, 35, 40, 50]
    }
  ]
};

const LineChart = () => {
  return (
    <div>
      <Line data={data} width={500} height={300} options={{ responsive: true }} />
    </div>
  )
}

export default LineChart
