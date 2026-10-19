import type { RootState } from "./../store";
import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  value: number;
}

const initialState: IInitialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    incrementBy: (state, action) => {
      state.value += action.payload;
    },
    decrement: (state) => {
      if (state.value > 0) {
        state.value -= 1;
      }
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

export const selectValue = (state: RootState) => state.counter.value;
export const { decrement, increment, incrementBy,reset } = counterSlice.actions;
export const countReducer = counterSlice.reducer;
