import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
    cartItems : [],
    // numberOfItemsInCart: 0,   //replaced by selectors
    // totalPrice: 0,           //replaced by selectors
    rating: [],    // used with saga to get Rating and count
    isRetrevingInfoProduct: false,
    productsOnPage: [],
    isRetrevingProducts: false
}

const shopSlice = createSlice({
  name: 'shopReducer',
  initialState: INITIAL_STATE,
  reducers: {
    ADD_ITEMS_TO_CART: (state, action) => {
        state.cartItems = [...state.cartItems, action.payload];
      //logic to be implemented
    },

    DELETE_ITEMS_FROM_CART: (state, action) => {
        //logic to be implemented
      },

    ITEM_INFO_REQUESTED: (state, action) => {
        //logic to be implemented
        state.isRetrevingInfoProduct = true;
    },

    ITEM_INFO_GET_SUCCESEED: (state, action) => {
       //logic to be implemented
       state.isRetrevingInfoProduct = false;
       state.rating = action.payload;
      },

    ITEM_INFO_GET_FAILED(state, action) {
        console.log(action.payload);
        //logic to be implemented
        },
    GET_PRODUCTS_REQUEST: (state, action) => {
    //logic to be implemented
        state.isRetrevingProducts = true;
    },
    GET_PRODUCTS_REQUEST_SUCCESEED: (state, action) => {
        //logic to be implemented
        state.isRetrevingProducts = false;
        state.productsOnPage = action.payload;
        console.log(action)
        },
    GET_PRODUCTS_REQUEST_FAILED(state, action) {
    //logic to be implemented
    console.log(action.payload);
    },
  },
})

export const { ADD_ITEMS_TO_CART, 
              DELETE_ITEMS_FROM_CART, 
              ITEM_INFO_REQUESTED, 
              ITEM_INFO_GET_SUCCESEED,
              ITEM_INFO_GET_FAILED,
              GET_PRODUCTS_REQUEST,
              GET_PRODUCTS_REQUEST_SUCCESEED,
              GET_PRODUCTS_REQUEST_FAILED
            } = shopSlice.actions
export default shopSlice.reducer;