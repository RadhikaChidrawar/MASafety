import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.products.find(
        (item) => item.product_id === newItem.product_id
      );

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.product_price;
      } else {
        state.products.push({
          product_id: newItem.product_id,
          product_name: newItem.product_name,
          product_Description: newItem.product_Description,
          product_price: newItem.product_price,
          product_star: newItem.product_star,
          delivery_time: newItem.delivery_time,
          product_image: newItem.product_image,
          quantity: 1,
          totalPrice: newItem.product_price,
        });
      }

      state.totalPrice += newItem.product_price;
      state.totalQuantity++;
    },

    removeFromCart(state, action) {
      const id = action.payload;
      const findItem = state.products.find((item) => item.product_id === id);
      if (findItem) {
        state.totalPrice -= findItem.totalPrice;
        state.totalQuantity -= findItem.quantity;
        state.products = state.products.filter(
          (item) => item.product_id !== id
        );
      }
    },

    incressQuentity(state, action) {
      const id = action.payload;
      const findItem = state.products.find((item) => item.product_id === id);
      if (findItem) {
        findItem.quantity++;
        findItem.totalPrice += findItem.product_price;
        state.totalQuantity++;
        state.totalPrice += findItem.product_price;
      }
    },

    decressQuentity(state, action) {
      const id = action.payload;
      const findItem = state.products.find((item) => item.product_id === id);
      if (findItem && findItem.quantity > 1) {
        findItem.quantity--;
        findItem.totalPrice -= findItem.product_price;
        state.totalQuantity--;
        state.totalPrice -= findItem.product_price;
      }
    },
    // add custom quentity
    updateQuantity: (state, action) => {
      const { product_id, quantity } = action.payload;
      const item = state.products.find((p) => p.product_id === product_id);
      if (item && quantity > 0) {
        item.quantity = quantity;
      }
      // Update totals
      state.totalQuantity = state.products.reduce(
        (acc, p) => acc + p.quantity,
        0
      );
      state.totalPrice = state.products.reduce(
        (acc, p) => acc + p.quantity * p.product_price,
        0
      );
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incressQuentity,
  decressQuentity,
  updateQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
