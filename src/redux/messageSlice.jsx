import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'message',
    initialState: {
        messageItem: [
            {
                id: 0,
                channel: '',
                trigger: '',
                timer: '',
                message: ''
            }
        ]

    },

    reducers: {
        changeMessage(state, { payload }) {
            return {
                ...state,
                messageItem: payload

            }
        }
    }
})

export const { changeMessage } = slice.actions;
export default slice.reducer;
export const selectMessage = state => state.message.messageItem;

