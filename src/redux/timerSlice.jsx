import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'timer',
    initialState: {
        timer: ''
    },
    reducers: {
        changeTimer(state, { payload }) {
            return {
                ...state,
                timer: payload,
            }
        }
    }
})

export const { changeTimer } = slice.actions;
export default slice.reducer;
export const selectTimer = state => state.timer.timer;