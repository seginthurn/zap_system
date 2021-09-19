import { Paper } from '@material-ui/core';
import React from 'react';
import { Line } from 'react-chartjs-2';


const labels = ['2019', '2020', '2021', '2022'];

const data = {
  labels: labels,
  datasets: [
    {
      label: 'Number of votes',
      data: ['10', '2', '15', '21'],
      fill: false,
      backgroundColor: 'tomato',
      borderColor: 'royal-blue',
    }
  ]
}


const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const LineChart = () => {
  return (
    <Paper>
      <Line data={data} option={options} />
    </Paper>
  )
}


export default LineChart;


