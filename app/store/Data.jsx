import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    cutomerName: null,
    phoneNumber: null,
    address: null,
    id: 1,
    finalTotal: 0,
    info: [],
    bill: [],
  },
  reducers: {
    sorting: (state, action) => {
      state.cutomerName = action.payload;
      state.phoneNumber = action.payload;
      state.address = action.payload;
      state.id += 1;
      state.info.push(action.payload);
      state.bill.push(state.finalTotal);
    },
    reset: (state, action) => {
      state.cutomerName = null;
      state.phoneNumber = null;
      state.address = null;
      state.id = 0;
      state.info = [];
      state.bill = [];
    },
  },
});

export default dataSlice.reducer;
export const { sorting, reset } = dataSlice.actions;
