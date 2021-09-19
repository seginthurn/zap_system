import { Paper } from '@material-ui/core';
import React from 'react';
import { Line } from 'react-chartjs-2';
import './LineChart.css';


const labels = ['Fev','Mai', 'Jun', 'Jul', 'Ago', 'Set'];

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const data = {
  labels: labels,
  datasets: [
    {
      label: 'Mensagens enviadas',
      data: [getRandom(4000,9000), getRandom(4000,9000), getRandom(4000,9000), getRandom(4000,9000), getRandom(4000,9000), getRandom(4000,9000)],
      fill: false,
      tension: 0.1,
      backgroundColor: '#2196f3',
      borderColor: '#2196f3',
    }
  ]
}

const options = {
  type: 'line',
  data: data,
};


const LineChart = () => {
  return (
    <Paper elevation={12} className="paperLineChart">
      <Line data={data} option={options} />
    </Paper>
  )
}


export default LineChart;


