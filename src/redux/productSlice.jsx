// import {createSlice} from '@reduxjs/toolkit'
// import  sampleData  from '../assets/mockData'

// const allProducts = sampleData;

// const initialState = {
//     products : allProducts,
//     searchTerm :"",
//     filteredData: allProducts
// }

// const productSlice = createSlice({
//     name :"products",
//     initialState,
//     reducers :{
//         // set all products
//         setProducts(state, action){
//             state.products = action.payload;
//             state.filteredData = action.payload;
//         },
//         // Search functionality
//         setSearchTerm(state, action){
//             state.searchTerm = action.payload

//         //     if (!state.searchTerm.trim()) {
//         //         state.filteredData = state.products; // Show all products if search is empty
//         //         return;
//         //     }

//         //     state.filteredData = state.products.filter(product =>
//         //         product.name.toLowerCase().includes(state.searchTerm.toLowerCase())
//         //     )


//         state.filteredData = state.products.filter(product =>
//             product.name.toLowerCase().includes(action.payload.toUppercase())
//         );

//         }
//     },
    
// })

// export const {setProducts , setSearchTerm} = productSlice.actions;
// export default productSlice.reducer;

import {createSlice} from '@reduxjs/toolkit'
import  sampleData  from '../assets/mockData'


const allProducts = sampleData;

const initialState = {
    products : allProducts,
    searchTerm :"",
    filteredData: allProducts
}

const productSlice = createSlice({
    name :"products",
    initialState,
    reducers :{
        // set all products
        setProducts(state, action){
            state.products = action.payload;
            state.filteredData = action.payload;
        },
        // Search functionality
        setSearchTerm(state, action){
            state.searchTerm = action.payload

            if (!state.searchTerm.trim()) {
                state.filteredData = state.products; // Show all products if search is empty
                return;
            }

            state.filteredData = state.products.filter(product =>
                product.product_name.toLowerCase().includes(state.searchTerm.toLowerCase())
            )
        }
    },
    
})

export const {setProducts , setSearchTerm} = productSlice.actions;
export default productSlice.reducer;