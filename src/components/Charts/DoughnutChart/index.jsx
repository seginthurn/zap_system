import { Paper } from '@material-ui/core';
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import './DoughnutChart.css';

const data = {
    labels: [
        'Email',
        'Whatsapp',
        'SMS'
    ],
    datasets: [{
        label: 'Canais mais usados',
        data: [1248, 9805, 400],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
    }]
};


const options = {
    type: 'doughnut',
    data: data,
};

const DoughnutChart = () => {
    return (
        <Paper elevation={12} className="paperDoughnutChart">
            <Doughnut data={data} option={options} />
        </Paper>
    )
}


export default DoughnutChart;


