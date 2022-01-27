import React from "react";
import {connect} from 'react-redux';
import {CartItemsSelector,numberOfItemsSelector,TotalPriceSelector} from '../../../redux/selectors/selectors';
import ItemsDisplay from '../../../components/shop/shop-body/ItemsDisplay.component';
import Container from '@mui/material/Container';

function WomensPage ({CartItems,numberOfItems,totalPrice, getRatings}){
    console.log(totalPrice);
    return(
        <Container maxWidth="xl">
            <ItemsDisplay productCategory="women's clothing" />
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
