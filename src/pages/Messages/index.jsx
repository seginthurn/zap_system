import { Typography, Grid, Button, Divider } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import TimerInput from '../../components/TimerInput';
import TriggerSelect from '../../components/TriggerSelect';
import ChannelSelect from '../../components/ChannelSelect';
import MessagesTable from '../../components/MessagesTable';
import { selectTrigger } from '../../redux/triggerSlice';
import { selectTimer } from '../../redux/timerSlice';
import { selectChannel } from '../../redux/channelSlice';
import api from '../../api/api';
import { changeMessage } from '../../redux/messageSlice';
import { Link } from 'react-router-dom';
import './Messages.css';

function Messages() {
    const trigger = useSelector(selectTrigger);
    const timer = useSelector(selectTimer);
    const channel = useSelector(selectChannel);
    const dispatch = useDispatch();


    const handleSearch = async (e) => {
        e.preventDefault();

        try {
            const response = await api.get(`/messages?trigger_like=${trigger}&&channel_like=${channel}&&timer_like=${timer}`);
            dispatch(changeMessage(response.data));
        } catch (error) {
            alert("Pesquisa inválida")
        }
    }

    return (
        <div className="Messages">
            <Grid container spacing={1} alignItems="center">
                <Grid item xs={8}>
                    <Typography variant="h3" color="primary">Mensagens</Typography>
                </Grid>
                <Grid item>
                    <Button variant="outlined" color="primary" onClick={e => handleSearch(e)}>Pesquisar</Button>
                </Grid>
                <Grid item>
                    <Button variant="contained" color="primary">
                        <Link to='/mensagens/nova_mensagem' className="link">Nova Mensagem</Link>
                    </Button>
                </Grid>
            </Grid>

            <Grid container spacing={1} alignItems="center">
                <Grid item xs={4}>
                    <TriggerSelect />
                </Grid>
                <Grid item xs>
                    <ChannelSelect />
                </Grid>
                <Grid item xs >
                    <form onSubmit={e => handleSearch(e)}>
                        <TimerInput />
                    </form>
                </Grid>
            </Grid>

            <Grid >
                <Grid>
                    <Divider />
                </Grid>
            </Grid>

            <Grid container>
                <Grid item xs={12}>
                    <MessagesTable />
                </Grid>
            </Grid>
        </div>
    );
}

export default Messages;


