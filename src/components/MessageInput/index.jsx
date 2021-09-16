import React, { useEffect, useState } from 'react';
import api from "../../api/api";
import { TextField, FormControl, InputLabel, MenuItem, makeStyles } from '@material-ui/core';
import { useDispatch} from 'react-redux';
import {changeMessage} from '../../redux/messageSlice';


const useStyles = makeStyles({
    root: {
        
    }
})

const MessageInput = () => {
    const classes = useStyles();

    const dispatch = useDispatch();
    const [data, setData] = useState([]);
    const [message, setMessage] = useState('');

    const handleChange = (event) => {
        dispatch(changeMessage(message));
        console.log(message)
    };

    const getApi = async () => {
        try {
            const response = await api.get(`/messages`);
            setData(response.data);
        } catch (error) {

        }

    };

    useEffect(() => {
        getApi();
    });

    return (
        <React.Fragment>
            <FormControl variant="outlined" onChange={handleChange()} fullWidth={true}>
                <TextField id="filled-basic" label="Mensagem" variant="outlined" />
            </FormControl>
        </React.Fragment>
    );
}

export default MessageInput;