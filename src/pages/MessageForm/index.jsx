import React, { useState } from 'react';
import { Typography, Grid, Button, TextField } from '@material-ui/core';
import { useSelector } from 'react-redux';
import TimerInput from '../../components/TimerInput';
import TriggerSelect from '../../components/TriggerSelect';
import ChannelSelect from '../../components/ChannelSelect';
import { selectTrigger } from '../../redux/triggerSlice';
import { selectTimer } from '../../redux/timerSlice';
import { selectChannel } from '../../redux/channelSlice';
import { Link } from 'react-router-dom';
import "./MessageForm.css";
import messageSchema from '../../schemas/messageSchema';
import api from '../../api/api';


function MessageForm() {
    const trigger = useSelector(selectTrigger);
    const timer = useSelector(selectTimer);
    const channel = useSelector(selectChannel);
    const [value, setValue] = useState('');

    const createMessage = async (e) => {
        e.preventDefault();
        const payload = {
            "channel": channel,
            "trigger": trigger,
            "timer": timer,
            "message": value
        }

        messageSchema
            .isValid(payload)
            .then(valid => {
                if (valid) {
                    api.post("/messages", payload);
                    alert("Mensagem Cadastrada com sucesso")
                } else {
                    alert('Verique os campos e tente novamente');
                }
            })


    }

    return (
        <div className="MessageForm">
            <Grid container spacing={1} alignItems="center">
                <Grid item xs={8}>
                    <Typography variant="h3" color="primary">Nova Mensagem</Typography>
                </Grid>
                <Grid item>
                    <Button variant="outlined" color="primary">
                        <Link to='/mensagens' className="link">Voltar</Link>
                    </Button>
                </Grid>
                <Grid item>
                    <Button variant="contained" color="primary" onClick={e => createMessage(e)}>Cadastrar</Button>
                </Grid>
            </Grid>

            <form onSubmit={(e) => createMessage(e)}>
                <Grid container spacing={1} alignItems="center">
                    <Grid item xs={4}>
                        <TriggerSelect />
                    </Grid>
                    <Grid item xs>
                        <ChannelSelect />
                    </Grid>
                    <Grid item xs >
                        <TimerInput />
                    </Grid>
                </Grid>

                <Grid container>
                    <Grid item xs={12}>
                        <TextField
                            id="outlined-multiline-static"
                            label="Mensagem"
                            multiline
                            rows={10}
                            fullWidth={true}
                            onChange={e => setValue(e.target.value)}
                        />
                    </Grid>
                </Grid>
            </form>
        </div>
    );
}

export default MessageForm;


