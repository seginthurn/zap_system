import { Paper, Typography, Grid, Button } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import TimerInput from '../../components/Inputs/TimerInput';
import TriggerSelect from '../../components/Selects/TriggerSelect';
import ChannelSelect from '../../components/Selects/ChannelSelect';
import MessagesTable from '../../components/Tables/MessagesTable';
import { selectTrigger, changeTrigger } from '../../redux/triggerSlice';
import { selectTimer, changeTimer } from '../../redux/timerSlice';
import { selectChannel, changeChannel } from '../../redux/channelSlice';
import api from '../../Utils/api/api';
import { changeMessage } from '../../redux/messageSlice';
import { Link } from 'react-router-dom';
import './Messages.css';
import { modalError } from '../../components/Modals/modals';

function Messages() {
    const trigger = useSelector(selectTrigger);
    const timer = useSelector(selectTimer);
    const channel = useSelector(selectChannel);
    const dispatch = useDispatch();

    const handleSearch = async (e) => {
        if (e) {
            e.preventDefault();
        }
        try {
            const response = await api.get(`/messages?trigger_like=${trigger}&&channel_like=${channel}&&timer_like=${timer}`);
            dispatch(changeMessage(response.data));
        } catch (error) {
            modalError("Algo de errado aconteceu, lamentamos por isso");
        }
    }

    const cleanSearch = async () => {
        try {
            const response = await api.get(`/messages`);
            dispatch(changeMessage(response.data));
            dispatch(changeTrigger(''));
            dispatch(changeChannel(''));
            dispatch(changeTimer(''));

        } catch (error) {
            modalError("Algo de errado aconteceu, lamentamos por isso");
        }
    }

    useEffect(()=>{
        handleSearch();
    })

    return (
        <div className="Messages">
            <Grid container spacing={1} alignItems="center">
                <Grid item xs={12} sm={8}>
                    <Typography variant="h3" color="primary">Mensagens</Typography>
                </Grid>
                <Grid item>
                    <Button variant="outlined" color="primary" onClick={() => cleanSearch()}>Limpar pesquisa</Button>
                </Grid>
                <Grid item>
                    <Button variant="contained" color="primary">
                        <Link to='/mensagens/nova_mensagem' className="link">Nova Mensagem</Link>
                    </Button>
                </Grid>
            </Grid>

            <Paper className="messagePaper" elevation={24}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={4}>
                        <TriggerSelect />
                    </Grid>
                    <Grid item xs={12} sm>
                        <ChannelSelect />
                    </Grid>
                    <Grid item xs={12} sm >
                        <form onSubmit={e => handleSearch(e)}>
                            <TimerInput />
                        </form>
                    </Grid>
                </Grid>
            </Paper>

            <Grid container>
                <Grid item xs={12}>
                    <MessagesTable />
                </Grid>
            </Grid>

        </div>
    );
}

export default Messages;


