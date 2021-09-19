import React from 'react';
import LineChart from '../../components/LineChart';
import { Grid } from '@mui/material';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="Dashboard">
            <Grid container spacing={2}>
                <Grid item sm={1} />
                <Grid item xs={12} sm={4}>
                    <LineChart />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <LineChart />
                </Grid>
            </Grid>
        </div>
    );
}

export default Dashboard;


