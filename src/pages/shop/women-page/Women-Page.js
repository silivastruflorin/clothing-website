import React from "react";
import {connect} from 'react-redux';
import {CartItemsSelector,numberOfItemsSelector,TotalPriceSelector} from '../../../redux/selectors/selectors'

function WomensPage ({CartItems,numberOfItems,totalPrice}){
    console.log(totalPrice);
    return(
        <div>
            This is the women's page
        </div>
    )
}

//example with Selectors
const mapStateToProps = state => {
    return{
        CartItems: CartItemsSelector(state),
        numberOfItems: numberOfItemsSelector(state),
        totalPrice: TotalPriceSelector(state)
    }
}

export default connect(mapStateToProps)(WomensPage);