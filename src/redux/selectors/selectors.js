import { createSelector } from '@reduxjs/toolkit';

const selectCartItems = state => state.cartkey.cartItems;
const selectTotalPrice = state => state.cartkey.totalPrice;
const selectRatings = state => state.cartkey.rating;
const selectProducts = state => state.cartkey.productsOnPage;




export const CartItemsSelector = createSelector(selectCartItems,(test)=>  test);
export const TotalPriceSelector = createSelector(selectTotalPrice,(price)=>  price);
export const numberOfItemsSelector = createSelector(
    CartItemsSelector,
    (cartItems) => {
       return  cartItems.length
    }
)
export const RatingsSelector = createSelector(selectRatings,(ratigs)=> ratigs);
export const ProductsSelector = createSelector(selectProducts,(products)=>  products);