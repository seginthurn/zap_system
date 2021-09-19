import React from 'react';
import { FormControl, TextField } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { changeTimer, selectTimer } from '../../../redux/timerSlice';

const TimerInput = (props) => {
    const timer = useSelector(selectTimer);
    const dispatch = useDispatch();

    return (
        <React.Fragment>
            <FormControl variant="outlined" onChange={e => dispatch((changeTimer(e.target.value)))} fullWidth={true}>
                <TextField  required={props.required} id="filled-basic" label="Timer" variant="outlined" value={timer} />
            </FormControl>
        </React.Fragment>
    );
}

export default TimerInput;



