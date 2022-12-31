import { configureStore, createSlice } from "@reduxjs/toolkit"
import { productFilter } from "../Types/ProductFilter"
import { CartProductType } from "../Types/CartProduct"
import { stat } from "fs"
const initialFilterState: productFilter = {
  searckey: "",
  brands: [],
  category: "",
  tags: [],
  priceRange: [0, 0],
}
const initialCartState: Array<CartProductType> = []

const filterSlice = createSlice({
  name: "filter",
  initialState: initialFilterState,
  reducers: {
    updateBrandFilter(state, action) {
      state.brands = action.payload
    },
    updateCategoryFilter(state, action) {
      state.category = action.payload
    },
    updateSearchKeyFilter(state, action) {
      state.searckey = action.payload
    },
    updateTags(state, action) {
      state.tags = action.payload
    },
    updatePriceRange(state, action) {
      state.priceRange = action.payload
    },
  },
})

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addToCart(state, action) {
      const cartProduct = state.find(
        (cp) => cp.product.name === action.payload.name
      )
      if (cartProduct) {
        cartProduct.number++
      } else {
        state.push({ product: action.payload, number: 1 })
      }
    },
    deleteFromCart(state, action) {
      const cartProduct = state.find(
        (cp) => cp.product.name === action.payload.name
      )
      if (cartProduct!.number === 1) {
        const indexOfRemoved = state.findIndex(
          (cp) => cp.product.name === cartProduct?.product.name
        )
        state.splice(indexOfRemoved, 1)
      } else {
        cartProduct!.number--
      }
    },
  },
})

export const filterActions = filterSlice.actions
export const cartActions = cartSlice.actions

const store = configureStore({
  reducer: {
    filter: filterSlice.reducer,
    cart: cartSlice.reducer,
  },
})

export default store
