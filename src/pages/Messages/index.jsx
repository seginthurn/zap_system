import { Typography, Grid, makeStyles, Button, InputLabel, FormControl, Input, FormHelperText } from '@material-ui/core';
import React, { useState } from 'react';
import ChannelSelect from '../../components/ChannelSelect';
import TriggerSelect from '../../components/TriggerSelect';
import MessageInput from '../../components/MessageInput';

const useStyles = makeStyles({
    root: {
        marginTop: "100px"
    }
})

const Messages = () => {
    const classes = useStyles();

    const [error, setError] = useState(false);
    const [message, setMessage] = useState('Insira seu nome aqui');
    const [form, setForm] = useState('');

    function handleInputForm(event) {
        event.preventDefault();
        if (!form || form != 'Gabriel') {
            setError(true);
            console.log(error)
        } else if (form === '') {
            setError(false);
        }
    }

    return (
        <React.Fragment>
                <Grid container className={classes.root} spacing={2}>
                    <Grid item sx={12} sm={6}>
                        <Typography variant="h3" color="primary">Mensagens</Typography>
                    </Grid>
                    <Grid item sx={6}>
                        <Button variant="outlined" color="primary">Pequisar</Button>
                    </Grid>
                    <Grid item sx={6}>
                        <Button variant="contained" color="primary">Nova Mensagem</Button>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={3}>
                        <TriggerSelect />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <ChannelSelect />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <MessageInput />
                    </Grid>
                </Grid>
        </React.Fragment>
    );
}

export default Messages;