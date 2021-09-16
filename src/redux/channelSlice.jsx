import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: "channel",
    initialState: {
        channelId: {}
    },
    reducers:{
        changeChannel(state, {payload}){
            return {
                ...state,
                channelId: payload
            }
        }
    }
})

export const {changeChannel} = slice.actions;
export default slice.reducer;
export const selectChannelName = state => state.name; 