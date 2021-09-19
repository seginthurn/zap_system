import { Paper } from '@material-ui/core';
import React from 'react';
import { Bar } from 'react-chartjs-2';
import './BarChart.css';


const labels = ['Fev', 'Mai', 'Jun', 'Jul', 'Ago', 'Set'];

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const data = {
    labels: labels,
    datasets: [
        {
            label: 'Contas Criadas',
            data: [getRandom(1000, 3000), getRandom(1000, 3000), getRandom(1000, 3000), getRandom(1000, 3000), getRandom(1000, 3000), getRandom(1000, 3000)],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
            ],
            borderWidth: 1
        }
    ]
}

const options = {
    type: 'bar',
    data: data,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    },
};

const BarChart = () => {
    return (
        <Paper elevation={12} className="paperBarChart">
            <Bar data={data} option={options} />
        </Paper>
    )
}


export default BarChart;


