import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: "message",
    initialState: {
        id: null,
        channel: '',
        trigger: '',
        timer: '',
        message: '',
    },
    reducers: {
        changeMessage(state, {payload}){
            return({
                ...state,
                payload
            })
        }
    }
})


export const {changeMessage} = slice.actions;
export default slice.reducer;
export const selectMessage = state => state.name; 