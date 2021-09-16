import React, { useEffect, useState } from 'react';
import api from "../../api/api";
import { Select, FormControl, InputLabel, MenuItem, makeStyles } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { changeTrigger } from '../../redux/triggerSlice';


const useStyles = makeStyles({
    root: {

    }
})

const TriggerSelect = () => {
    const classes = useStyles();

    const dispatch = useDispatch();
    const [data, setData] = useState([]);
    const [trigger, setTrigger] = useState('');

    const handleChange = (event) => {
        dispatch(changeTrigger(trigger));
        console.log(trigger)
    };

    const getApi = async () => {
        try {
            const response = await api.get(`/triggers`);
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
                <InputLabel id="trigger">Trigger</InputLabel>
                <Select
                    labelId="trigger"
                    id="trigger"
                    value={trigger}
                    onChange={e => setTrigger(e.target.value)}
                    label="trigger"

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

export default TriggerSelect;