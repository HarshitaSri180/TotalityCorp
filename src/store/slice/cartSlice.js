// src/store/slice/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartData: [],
  loading: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    setCartData(state, action) {
      state.cartData = [...state.cartData, action.payload];
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    clearCart(state) {
      state.cartData = [];
    },
    removeProduct(state, action) {
      state.cartData = state.cartData.filter(item => item.id !== action.payload)
    },
  },
});

export const { setCartData, setLoading, clearCart, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
