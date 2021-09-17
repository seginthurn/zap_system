import React from 'react';
import LineChart from '../../components/LineChart';
import { Grid, Paper, makeStyles, } from '@material-ui/core';


const useStyles = makeStyles({
    root: {
        padding: '10px',
        marginTop: '100px'
    },

})


const Dashboard = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
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