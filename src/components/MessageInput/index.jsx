import React, { useEffect, useState } from 'react';
import api from "../../api/api";
import { TextField, FormControl } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { selectMessage, changeMessage } from '../../redux/messageSlice';
import { selectTrigger } from '../../redux/triggerSlice';
import { selectChannel } from '../../redux/channelSlice';

const MessageInput = () => {
    const message = useSelector(selectMessage);
    const trigger = useSelector(selectTrigger);
    const channel = useSelector(selectChannel);
    const [messageField, setMessageField] = useState('')


    const [apiData, setApiData] = useState([]);
    const dispatch = useDispatch();

    const getApi = async () => {
        try {
            const response = await api.get(`/messages`);
            setApiData(response.data);

        } catch (error) {
            alert("Erro GET na api");
        }

    };

    useEffect(() => {
        getApi();
    }, [message]);

    return (
        <React.Fragment>
            <FormControl variant="outlined" onChange={e => setMessageField(e.target.value)} fullWidth={true}>
                <TextField id="filled-basic" label="Mensagem" variant="outlined" />
            </FormControl>
        </React.Fragment>
    );
}

export default MessageInput;