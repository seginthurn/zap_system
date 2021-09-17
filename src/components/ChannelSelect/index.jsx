import React, { useEffect, useState } from 'react';
import api from "../../api/api";
import { Select, FormControl, InputLabel, MenuItem, makeStyles } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { selectChannel, changeChannel } from '../../redux/channelSlice';

const ChannelSelect = () => {
    const channel = useSelector(selectChannel);
    const [apiData, setApiData] = useState([]);
    const dispatch = useDispatch();

    const getApi = async () => {
        try {
            const response = await api.get(`/channels`);
            setApiData(response.data);
        } catch (error) {
            alert("Erro GET na api");
        }

    };

    const createChannels = () => {
        return (
            apiData.map(item => <MenuItem key={item.id} value={item.name}>{item.name}</MenuItem>)
        )
    }

    useEffect(() => {
        getApi();
    }, [channel]);

    return (
        <React.Fragment>
            <FormControl variant="outlined" fullWidth={true}>
                <InputLabel id="channel">Channel</InputLabel>
                <Select
                    labelId="channel"
                    id="channel"
                    value={channel}
                    onChange={e => dispatch(changeChannel(e.target.value))}
                    label="channel"
                >
                    <MenuItem value="">
                        <em>Nenhum</em>
                    </MenuItem>
                    {
                        createChannels()
                    }
                </Select>
            </FormControl>
        </React.Fragment>
    );
}

export default ChannelSelect;