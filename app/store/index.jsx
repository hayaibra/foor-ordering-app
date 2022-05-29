import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Counter";
import cartReducer from "./Cart";
import dataReducer from "./Data";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
    data: dataReducer,
  },
});

export default store;
