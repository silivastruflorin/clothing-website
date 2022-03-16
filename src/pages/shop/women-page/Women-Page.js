import React from "react";
import {useDispatch, useSelector, connect} from 'react-redux'
import { useState, useEffect } from 'react';

import LoadingButton from '@mui/lab/LoadingButton';
import {CartItemsSelector,numberOfItemsSelector,TotalPriceSelector} from '../../../redux/selectors/selectors';
import ItemsDisplay from '../../../components/shop/shop-body/ItemsDisplay.component';
import Container from '@mui/material/Container';
import { GET_PRODUCTS_REQUEST } from '../../../redux/reducers/cart/cart.reducer.slice';
import {IsRetrevingProductsSelector} from '../../../redux/selectors/selectors';


import Loading from "../../../components/loading/loading";



function WomensPage ({CartItems,numberOfItems,totalPrice, getRatings}){
    const dispatch= useDispatch();
    
    useEffect(() => {
            dispatch(GET_PRODUCTS_REQUEST("women's clothing"));
    },[]);

    let IsRetrevingProducts= useSelector(IsRetrevingProductsSelector);


    console.log(totalPrice);
    return(
        <Container maxWidth="xl" >
              {IsRetrevingProducts ? <Loading />: <ItemsDisplay /> }
        </Container>
    )
}

//example with Selectors to get the values from the store
const mapStateToProps = state => {
    return{
        CartItems: CartItemsSelector(state),
        numberOfItems: numberOfItemsSelector(state),
        totalPrice: TotalPriceSelector(state)
    }
}

export default connect(mapStateToProps)(WomensPage);
 