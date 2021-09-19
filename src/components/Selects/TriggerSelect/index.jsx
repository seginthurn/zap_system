import React, { useMemo, useState } from 'react';
import api from "../../../Utils/api/api";
import { Select, FormControl, InputLabel, MenuItem } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { selectTrigger, changeTrigger } from '../../../redux/triggerSlice';
import { modalError } from '../../Modals/modals';
const TriggerSelect = (props) => {
    const trigger = useSelector(selectTrigger);
    const [apiData, setApiData] = useState([]);
    const dispatch = useDispatch();

    const getApi = async () => {
        try {
            const response = await api.get(`/triggers`);
            setApiData(response.data);

        } catch (error) {
            modalError("Algo de errado aconteceu, lamentamos por isso");
        }

    };

    const createTriggers = () => {
        return (
            apiData.map(item => <MenuItem key={item.id} value={item.name}>{item.name}</MenuItem>)
        )
    }

    useMemo(() => {
        getApi();
    }, []);

    return (
        <React.Fragment>
            <FormControl variant="outlined" required={props.required} fullWidth={true}>
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


