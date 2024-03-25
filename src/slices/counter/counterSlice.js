import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      if(state.value < 1){
        state.value = 0;
      }else{
        state.value -= 1;
      }
    },
    incrementByFive: (state)=>{
        state.value += 5;
    },
    decrementByFive: (state)=>{
        if(state.value < 5){
            state.value = 0;
        }else{
            state.value -= 5;
        }
    },
    multiplication: (state) =>{
        state.value = (state.value * 2)
    },
    division: (state)=>{
        state.value = (state.value / 2)
    },
    incrementByThree: (state, action)=>{
        state.value += action.payload
    }
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByFive, decrementByFive, multiplication, division, incrementByThree } = counterSlice.actions;

export default counterSlice.reducer;
