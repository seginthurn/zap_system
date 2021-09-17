import React, { useEffect, useState } from 'react';
import { FormControl, TextField } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { selectTimer, changeTimer } from '../../redux/timerSlice'

const TimerInput = () => {
    const timer = useSelector(selectTimer);
    const dispatch = useDispatch();

    return (
        <React.Fragment>
            <FormControl variant="outlined" onChange={e => dispatch((changeTimer(e.target.value)))} fullWidth={true}>
                <TextField id="filled-basic" label="Timer   " variant="outlined" />
            </FormControl>
        </React.Fragment>
    );
}

export default TimerInput;