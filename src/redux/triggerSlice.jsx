import {createSlice} from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'trigger',
    initialState: {
        triggerId: ''
    },
    reducers: {
        changeTrigger(state, {payload}){
            return{
                ...state,
                triggerId: payload,
            }
        }
    }
})

export const {changeTrigger} = slice.actions;
export default slice.reducer;
export const selectTriggerName = state => state.name; 