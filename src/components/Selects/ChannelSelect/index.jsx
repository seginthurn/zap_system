import React, { useEffect, useState } from 'react';
import api from "../../../Utils/api/api";
import { Select, FormControl, InputLabel, MenuItem } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { selectChannel, changeChannel } from '../../../redux/channelSlice';
import { modalError } from '../../Modals/modals';

const ChannelSelect = (props) => {
    const channel = useSelector(selectChannel);
    const dispatch = useDispatch();
    const [apiData, setApiData] = useState([]);


    const getApi = async () => {
        try {
            const response = await api.get(`/channels`);
            setApiData(response.data);
        } catch (error) {
            modalError("Algo de errado aconteceu, lamentamos por isso");
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
            <FormControl required={props.required} variant="outlined" fullWidth={true}>
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


