import React from 'react';
import {AppBar, Toolbar, Typography, Button, makeStyles } from '@material-ui/core';
import DataUsageIcon from '@material-ui/icons/DataUsage';
import { ChatBubbleSharp } from '@material-ui/icons';
import {Link} from 'react-router-dom';

const useStyles = makeStyles({
    grow: {
        flexGrow: 1,
    },
    Button: {
        margin: '10px',
    },
    header: {
        marginBottom: "10px",
    }
})

const Header = () => {
    const classes = useStyles();

    return (
        <div>
            <AppBar sytle={classes.header} position="static">
                <Toolbar variant="dense">
                    <Typography variant="h6" color="white">
                        LOREM IPSUM
                    </Typography>
                    <div className={classes.grow} />
                    <Button variant="outlined" color="inherit" className={classes.Button} startIcon={<DataUsageIcon />}><Link to="/messages">Clique aqui</Link></Button>
                    <Button variant="outlined" color="inherit" className={classes.Button} startIcon={<ChatBubbleSharp />}>Mensagens</Button>
                </Toolbar>
            </AppBar>
        </div>

    );
}

export default Header;