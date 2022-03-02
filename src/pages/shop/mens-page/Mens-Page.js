import React from "react";
import {useDispatch, useSelector, connect} from 'react-redux'
import { useState, useEffect } from 'react';


import Container from '@mui/material/Container';
import ItemsDisplay from '../../../components/shop/shop-body/ItemsDisplay.component'
import {IsRetrevingProductsSelector} from '../../../redux/selectors/selectors'
import { GET_PRODUCTS_REQUEST } from '../../../redux/cart/cart.reducer.slice';
import Loading from "../../../components/loading/loading";




function MensPage ()  {
    let IsRetrevingProducts= useSelector(IsRetrevingProductsSelector);
    const dispatch= useDispatch();
    
    
    useEffect(() => {
            dispatch(GET_PRODUCTS_REQUEST("men's%20clothing"));
    },[]);

    

    return(
        <Container maxWidth="xl">
             {IsRetrevingProducts ? <Loading />: <ItemsDisplay /> }
        </Container>
      
    )
}

export default MensPage;