import { configureStore,createSlice } from "@reduxjs/toolkit";
import { notInitialized } from "react-redux/es/utils/useSyncExternalStore";
import { updateHeritageClause } from "typescript";
import { productFilter } from "../Types/ProductFilter";

const initialState:productFilter = {searckey:"", brands:[],category:"",tags:[],priceRange:[]}

 const filterSlice = createSlice({name:'filter', initialState, reducers:{
    updateBrandFilter(state,action){
        state.brands = action.payload;
    },
    updateCategoryFilter(state,action){
        state.category = action.payload;
    },
    updateSearchKeyFilter(state,action){
        state.searckey = action.payload;
    },
    updateTags(state,action){
        state.tags = action.payload
    },
    updatePriceRange(state,action){
    state.priceRange=action.payload
    }
 }})


// const cartSlice = createSlice
export const filterActions = filterSlice.actions;


const store = configureStore({
    reducer: {filter:filterSlice.reducer, 
        // cart:cartSlice.reducer
    }
});

export default store;