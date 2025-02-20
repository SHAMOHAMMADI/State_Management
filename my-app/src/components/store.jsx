import { configureStore } from "@reduxjs/toolkit";
import {CounterSlice} from './CounterSlice.jsx'

export const store = configureStore({
    reducer:{
        counter: CounterSlice.reducer // Register the counter reducer
    }
})