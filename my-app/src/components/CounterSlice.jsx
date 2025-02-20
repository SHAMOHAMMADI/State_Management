import { createSlice } from "@reduxjs/toolkit";

export const CounterSlice = createSlice({
    name:"counter",
    initialState:{
        value:0
    },

    reducers: {
        increment : (state)=>{
         state.value += 1;
        },
        decrement : (state)=>{
            // console.log("before decrement:", state.value)
          state.value -=1
          
            // console.log("after decrement :",state.value)
        }
    }
})

