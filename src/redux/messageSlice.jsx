import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'message',
    initialState: {
        id: 0,
        channel: '',
        trigger: '',
        timer: '',
        message: ''
    },
    reducers: {
        changeMessage(state, { payload }) {
            return {
                ...state,
                id: payload.id,
                channel: payload.channel,
                trigger: payload.trigger,
                timer: payload.timer,
                message: payload.message

            }
        }
    }
})

export const { changeMessage } = slice.actions;
export default slice.reducer;
export const selectMessage = state => state.message.message;
export const selectTimer = state => state.message.timer;