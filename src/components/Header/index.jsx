import React from 'react';
import { AppBar, Toolbar, Typography, Button, Grid } from '@mui/material';
import DataUsageIcon from '@material-ui/icons/DataUsage';
import { ChatBubbleSharp } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <AppBar>
                <Toolbar className="header">
                    <Grid container spacing={1} alignItems="center">
                        <Grid item xs={12} sm={8}>
                            <Typography variant="h6" color="inherit">
                                ZAP SYSTEM
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <Link to='/' className="link">
                                        <Button variant="outlined" color="inherit" startIcon={<DataUsageIcon />}>Dashboard</Button>
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link className="link" to='/mensagens'>
                                        <Button variant="outlined" color="inherit" startIcon={<ChatBubbleSharp />}>Mensagens</Button>
                                    </Link>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>

    );
}

export default Header;







