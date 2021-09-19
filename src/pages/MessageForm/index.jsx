import React, { useState } from 'react';
import { Paper, Typography, Grid, Button, TextField } from '@material-ui/core';
import { useSelector } from 'react-redux';
import TimerInput from '../../components/Inputs/TimerInput';
import TriggerSelect from '../../components/Selects/TriggerSelect';
import ChannelSelect from '../../components/Selects/ChannelSelect';
import { selectTrigger } from '../../redux/triggerSlice';
import { selectTimer } from '../../redux/timerSlice';
import { selectChannel } from '../../redux/channelSlice';
import { Link } from 'react-router-dom';
import "./MessageForm.css";
import messageSchema from '../../Utils/schemas/messageSchema';
import api from '../../Utils/api/api';
import { modalError, modalSucess } from '../../components/Modals/modals';

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
                    modalSucess("Mensagem Cadastrada Com Sucesso!")
                } else {
                    modalError('A mensagem não foi cadastrada, verifique os campos e tente novamente');
                }
            })
    }

    return (
        <div className="MessageForm">
            <Grid container spacing={1} alignItems="center">
                <Grid item xs={12} sm={8}>
                    <Typography variant="h3" color="primary">Nova Mensagem</Typography>
                </Grid>
                <Grid item>
                    <Link to='/mensagens' className="link">
                        <Button variant="outlined" color="primary">
                            Voltar
                        </Button>
                    </Link>
                </Grid>

                <Grid item>
                    <Button variant="contained" color="primary" onClick={e => createMessage(e)}>Cadastrar</Button>
                </Grid>
            </Grid>

            <form onSubmit={(e) => createMessage(e)}>
                <Paper elevation={24} className="paper">
                    <Typography variant="h6" color="primary">Campos</Typography>
                    <Grid container spacing={1} alignItems="center">
                        <Grid item xs={12} sm={4}>
                            <TriggerSelect required={true} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <ChannelSelect required={true} />
                        </Grid>
                        <Grid item xs={12} sm={4} >
                            <TimerInput required={true} />
                        </Grid>
                    </Grid>
                </Paper>
                <Grid component={Paper} elevation={24} container className="paper">
                    <Grid item xs={12}>
                        <TextField
                            id="outlined-multiline-static"
                            label="Mensagem"
                            multiline
                            rows={20}
                            fullWidth={true}
                            onChange={e => setValue(e.target.value)}
                            required={true}
                        />
                    </Grid>
                </Grid>
            </form>
        </div >
    );
}

export default MessageForm;


