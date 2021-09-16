import React, { useEffect, useState } from 'react';
import api from "../../api/api";
import { Select, FormControl, InputLabel, MenuItem, makeStyles } from '@material-ui/core';
import { useDispatch} from 'react-redux';
import { changeChannel} from '../../redux/channelSlice';


const useStyles = makeStyles({
    root: {
        width: '20vw'
    }
})

const ChannelSelect = () => {
    const classes = useStyles();

    const dispatch = useDispatch();
    const [data, setData] = useState([]);
    const [channel, setChannel] = useState('');

    const handleChange = (event) => {
        dispatch(changeChannel(channel));
        console.log(channel)
    };

    const getApi = async () => {
        try {
            const response = await api.get(`/channels`);
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
                <InputLabel id="channel">Channel</InputLabel>
                <Select
                    labelId="channel"
                    id="channel"
                    value={channel}
                    onChange={e => setChannel(e.target.value)}
                    label="channel"
                >
                    <MenuItem value="">
                        <em>Nenhum</em>
                    </MenuItem>
                    {
                        data.map(item => <MenuItem value={item.id}>{item.name}</MenuItem>)
                    }
                </Select>
            </FormControl>
        </React.Fragment>
    );
}

export default ChannelSelect;