import React, { useEffect, useState } from 'react';
import api from "../../api/api";
import { Select, FormControl, InputLabel, MenuItem, makeStyles } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { selectTrigger, changeTrigger } from '../../redux/triggerSlice';

const TriggerSelect = () => {
    const trigger = useSelector(selectTrigger);
    const [apiData, setApiData] = useState([]);
    const dispatch = useDispatch();

    const getApi = async () => {
        try {
            const response = await api.get(`/triggers`);
            setApiData(response.data);

        } catch (error) {
            alert("Erro GET na api");
        }

    };

    const createTriggers = () => {
        return (
            apiData.map(item => <MenuItem key={item.id} value={item.name}>{item.name}</MenuItem>)
        )
    }

    useEffect(() => {
        getApi();
    }, [trigger]);

    return (
        <React.Fragment>
            <FormControl variant="outlined" fullWidth={true}>
                <InputLabel id="trigger">Trigger</InputLabel>
                <Select
                    labelId="trigger"
                    id="trigger"
                    value={trigger}
                    onChange={e => dispatch(changeTrigger(e.target.value))}
                    label="trigger"

                >
                    <MenuItem value="">
                        <em>Nenhum</em>
                    </MenuItem>
                    {
                        createTriggers()
                    }

                </Select>
            </FormControl>
        </React.Fragment>
    );
}

export default TriggerSelect;