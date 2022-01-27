import { createSelector } from '@reduxjs/toolkit';

const selectCartItems = state => state.cartkey.cartItems;
const selectTotalPrice = state => state.cartkey.totalPrice;
const selectRatings = state => state.cartkey.rating;



export const CartItemsSelector = createSelector(selectCartItems,(test)=> {return test});
export const TotalPriceSelector = createSelector(selectTotalPrice,(price)=> {return price});
export const numberOfItemsSelector = createSelector(
    CartItemsSelector,
    (cartItems) => {
       return  cartItems.length
    }
)

export const RatingsSelector = createSelector(selectRatings,(ratigs)=> {return ratigs});
