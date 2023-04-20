import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import {toDoSlice} from "./slices/todoSlice";
const makeStore = () =>
    configureStore({
        reducer: {
            nodes:toDoSlice.reducer,
        },
        devTools: true,
    });

export const wrapper = createWrapper(makeStore);