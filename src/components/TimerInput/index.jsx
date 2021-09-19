import React from 'react';
import { FormControl, TextField } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { changeTimer } from '../../redux/timerSlice';

const TimerInput = () => {

    const dispatch = useDispatch();

    return (
        <React.Fragment>
            <FormControl variant="outlined" onChange={e => dispatch((changeTimer(e.target.value)))} fullWidth={true}>
                <TextField id="filled-basic" label="Timer" variant="outlined" />
            </FormControl>
        </React.Fragment>
    );
}

export default TimerInput;



