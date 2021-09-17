import React from 'react';
import { AppBar, Toolbar, Typography, Button, makeStyles } from '@material-ui/core';
import DataUsageIcon from '@material-ui/icons/DataUsage';
import { ChatBubbleSharp } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    grow: {
        flexGrow: 1,
    },
    Button: {
        margin: '10px',
    },
    routeLink: {
        color: 'inherit',
        textDecoration: 'none',
    }
})

const Header = () => {
    const classes = useStyles();

    return (
        <div>
            <AppBar sytle={classes.header}>
                <Toolbar variant="dense">
                    <Typography variant="h6" color="white">
                        ZAP SYSTEM
                    </Typography>
                    <div className={classes.grow} />
                    <Button variant="outlined" color="inherit" className={classes.Button} startIcon={<DataUsageIcon />}>
                        <Link to='/' className={classes.routeLink}>Dashboard</Link>
                    </Button>

                    <Button variant="outlined" color="inherit" className={classes.Button} startIcon={<ChatBubbleSharp />}>
                        <Link to='/messages' className={classes.routeLink}>Mensagens</Link>
                    </Button>
                </Toolbar>
            </AppBar>
        </div>

    );
}

export default Header;