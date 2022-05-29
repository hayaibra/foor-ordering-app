import { createSlice } from "@reduxjs/toolkit";

const initState = { value: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState: initState,
  reducers: {
    add: (state, action) => {
      state.value += action.payload;
    },
    zero: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default counterSlice.reducer;
export const { add,zero } = counterSlice.actions;
