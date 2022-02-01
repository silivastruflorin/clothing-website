import { createSelector } from '@reduxjs/toolkit';

const selectCartItems = state => state.cartkey.cartItems;
const selectRatings = state => state.cartkey.rating;
const selectProducts = state => state.cartkey.productsOnPage;
const selectIsRetreived = state => state.cartkey.isRetrevingData;




export const CartItemsSelector = createSelector(selectCartItems,(test)=>  test);
export const numberOfItemsSelector = createSelector(
    CartItemsSelector,
    (cartItems) => {
       return  cartItems.length
    }
)
export const RatingsSelector = createSelector(selectRatings,(ratigs)=> ratigs);
export const ProductsSelector = createSelector(selectProducts,(products)=>  products);
export const selectIsRetreivedSelector = createSelector(selectIsRetreived,(isRetrevingData)=>  isRetrevingData);

export const TotalPriceSelector = createSelector(CartItemsSelector,(items)=> items.length ? items.map(item => item.price).reduce((previousValue, currentValue) => previousValue + currentValue).toFixed(2) : null );