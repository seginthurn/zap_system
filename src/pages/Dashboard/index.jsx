import React from 'react';
import LineChart from '../../components/Charts/LineChart';
import BarChart from '../../components/Charts/BarChart';
import DoughnutChart from '../../components/Charts/DoughnutChart';

import { Grid } from '@mui/material';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="Dashboard">
            <Grid container spacing={2} xs={12} className="dashGrid">
                <Grid item xs={12} sm={6}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}><BarChart />
                        </Grid>
                        <Grid item xs={12}><LineChart /></Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <DoughnutChart />
                </Grid>
            </Grid>
        </div>
    );
}

export default Dashboard;


