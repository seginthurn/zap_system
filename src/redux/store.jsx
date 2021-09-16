import {configureStore} from '@reduxjs/toolkit';
import triggerSlice from './triggerSlice';
import channelSlice from './channelSlice';

export default configureStore({
    reducer: {
        trigger: triggerSlice,
        channel: channelSlice,

    }
})