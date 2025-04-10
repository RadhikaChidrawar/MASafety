// import {createSlice} from '@reduxjs/toolkit'

// const initialState = {
//     products : [],
//     totalQuantity :0,
//     totalPrice:0,
// }

// const cartSlice = createSlice({
//     name :"cart",
//     initialState,
//     reducers :{
//         addToCart(state, action){
//             const newItem = action.payload;
//             const itemIndex = state.products.find((item)=> item.id === newItem.id)
//             if(itemIndex){
//                 itemIndex.quantity++;
//                 itemIndex.totalPrice += newItem.price
//             }else{
//                 state.products.push({
//                     id: newItem.id,
//                     name: newItem.name,
//                     price: newItem.price,
//                     quantity: 1,
//                     totalPrice: newItem.price,
//                     image : newItem.image
//                 })
//             }
//             // state.totalQuantity += newItem.price;
//             state.totalPrice += newItem.price;
//             state.totalQuantity ++;
//         },
//         removeFromCart(state, action) {
//             const id = action.payload;
//             const findItem = state.products.find((item) => item.id === id);
//             if (findItem) {
//                 state.totalPrice -= findItem.totalPrice;
//                 state.totalQuantity -= findItem.quantity; 
//                 state.products = state.products.filter(item => item.id !== id); 
//             }
//         },
//         incressQuentity(state, action){
//             const id = action.payload;
//             const findItem = state.products.find((item) => item.id === id);
//             if(findItem){
//                 findItem.quantity++;
//                 findItem.totalPrice += findItem.price
//                 state.totalQuantity ++;
//                 state.totalPrice += findItem.price
//             }
//         },
//         decressQuentity(state, action){
//             const id = action.payload;
//             const findItem = state.products.find((item) => item.id === id);
//             if(findItem.quantity > 1){
//                 if(findItem){
//                     findItem.quantity--;
//                     findItem.totalPrice -= findItem.price
//                     state.totalQuantity --;
//                     state.totalPrice -= findItem.price
//                 }
//             }
//         },
//     },
    
// })

// export const {setProducts} = cartSlice.actions;
// export const {addToCart ,  removeFromCart , incressQuentity ,decressQuentity} = cartSlice.actions;
// export default cartSlice.reducer;


import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const itemIndex = state.products.find((item) => item.product_id === newItem.product_id);

      if (itemIndex) {
        itemIndex.quantity++;
        itemIndex.totalPrice += newItem.product_price;
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
        state.products = state.products.filter((item) => item.product_id !== id);
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
  },
});

export const {
  addToCart,
  removeFromCart,
  incressQuentity,
  decressQuentity,
} = cartSlice.actions;

export default cartSlice.reducer;
