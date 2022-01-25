import { createSelector } from '@reduxjs/toolkit';

const selectCartItems = state => state.cartkey.cartItems;
const selectTotalPrice = state => state.cartkey.totalPrice;



export const CartItemsSelector = createSelector(selectCartItems,(test)=> {return test});
export const TotalPriceSelector = createSelector(selectTotalPrice,(price)=> {return price});
export const numberOfItemsSelector = createSelector(
    CartItemsSelector,
    (cartItems) => {
       return  cartItems.length
    }
)
