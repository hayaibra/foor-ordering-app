import { createSlice } from "@reduxjs/toolkit";

const initState = {
  product: [],
  quantity: 0,
  total: 0,
  finalTotal: [],
  date: "",
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initState,
  reducers: {
    addProduct: (state, action) => {
      state.product.push(action.payload);
      state.quantity += 1;
      state.total = action.payload.price * action.payload.quantity;
      state.finalTotal.push(state.total);
      state.date = action.payload;
    },
    resett:(state , action ) => {
      state.product=[];
      state.quantity =0;
      state.total = 0;
      state.finalTotal=[];
      state.date = null;
    }
  },
});

export default cartSlice.reducer;
export const { addProduct, resett } = cartSlice.actions;
