import { configureStore } from '@reduxjs/toolkit';
import triggerSlice from './triggerSlice';
import channelSlice from './channelSlice';
import messageSlice from './messageSlice';
import timerSlice from './timerSlice';

export default configureStore({
    reducer: {
        trigger: triggerSlice,
        channel: channelSlice,
        message: messageSlice,
        timer: timerSlice

    }
})