import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'trigger',
    initialState: {
        name: ''
    },
    reducers: {
        changeTrigger(state, { payload }) {
            return {
                ...state,
                name: payload,
            }
        }
    }
});

export const { changeTrigger } = slice.actions;
export default slice.reducer;
export const selectTrigger = state => state.trigger.name;


