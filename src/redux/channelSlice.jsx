import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: "channel",
    initialState: {
        name: ''
    },
    reducers: {
        changeChannel(state, { payload }) {
            return {
                ...state,
                name: payload
            }
        }
    }
})

export const { changeChannel } = slice.actions;
export default slice.reducer;
export const selectChannel = state => state.channel.name;