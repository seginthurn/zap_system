import {configureStore} from '@reduxjs/toolkit';
import triggerSlice from './triggerSlice';
import channelSlice from './channelSlice';
import messageSlice from './messageSlice';

export default configureStore({
    reducer: {
        trigger: triggerSlice,
        channel: channelSlice,
        message: messageSlice

    }
})