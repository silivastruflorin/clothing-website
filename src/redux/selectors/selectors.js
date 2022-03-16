import { createSelector } from '@reduxjs/toolkit';

const selectCartItems = state => state.cartkey.cartItems;
const selectRatings = state => state.cartkey.rating;
const selectProducts = state => state.cartkey.productsOnPage;
const selectInfoIsRetreived = state => state.cartkey.isRetrevingInfoProduct;
const selectIsRetrevingProducts = state => state.cartkey.isRetrevingProducts;
const selectIsLoggedIn = state => state.userkey.loggedIn;
const selectCurrentUser = state => state.userkey.currentUser;


export const CartItemsSelector = createSelector(selectCartItems,(test)=>  test);
export const numberOfItemsSelector = createSelector(
    CartItemsSelector,
    (cartItems) => {
       return  cartItems.length
    }
)
export const RatingsSelector = createSelector(selectRatings,(ratigs)=> ratigs);
export const ProductsSelector = createSelector(selectProducts,(products)=>  products);
export const InfoIsRetreivedSelector = createSelector(selectInfoIsRetreived,(isRetrevingInfoProduct)=>  isRetrevingInfoProduct);
export const IsRetrevingProductsSelector = createSelector(selectIsRetrevingProducts,(isRetrevingProducts)=>  isRetrevingProducts);

export const TotalPriceSelector = createSelector(CartItemsSelector,(items)=> items.length ? items.map(item => item.price).reduce((previousValue, currentValue) => previousValue + currentValue).toFixed(2) : null );


export const IsLoggedInSelector = createSelector(selectIsLoggedIn,(loggedIn)=>  loggedIn);
export const CurrentUserSelector = createSelector(selectCurrentUser,(user)=>  user);