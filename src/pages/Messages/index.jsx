import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    page: {
        backgroundColor: "tomato"
    }
})

const Messages = () => {
    const classes = useStyles();

    return ( 
        <div className={classes.page}>
            <h1>Aqui é a pagina do Messages</h1>
        </div>
     );
}
 
export default Messages;