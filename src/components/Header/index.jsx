import React from 'react';
import { AppBar, Toolbar, Typography, Button, makeStyles} from '@material-ui/core';
import DataUsageIcon from '@material-ui/icons/DataUsage';
import { ChatBubbleSharp } from '@material-ui/icons';

const useStyles = makeStyles({
    grow: {
        flexGrow: 1,
    },
    Button: {
        margin: '10px',
    }
})

const Header = () => {
    const classes = useStyles();

    return (
        <div>
            <AppBar>
                <Toolbar>
                    <Typography variant="h6" color="white">
                        Zap System
                    </Typography>
                    <div className={classes.grow} />
                    <Button variant="outlined" color="inherit" className={classes.Button} startIcon={<DataUsageIcon/>}>Dashboard</Button> 
                    <Button variant="outlined" color="inherit" className={classes.Button} startIcon={<ChatBubbleSharp/>}>Mensagens</Button> 
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;