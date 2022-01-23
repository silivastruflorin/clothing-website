//declare a default value for state
const INITIAL_STATE = {
    cartItems : [],
    numberOfItemsInCart: 0,
    totalPrice: 0
}

const cartReducer = (state = INITIAL_STATE , action) => {
    switch(action.type){
        case 'ADD_ITEMS_TO_CART':
            let cartItemsUpdated =  [...state.cartItems, action.payload];
            return{
                ...state,
                cartItems : cartItemsUpdated,
                numberOfItemsInCart: state.numberOfItemsInCart + 1,
                totalPrice : cartItemsUpdated.map(item => item.price).reduce((previousValue, currentValue) => previousValue + currentValue).toFixed(2) //2 decimals
            }
            
        case 'DELETE_ITEMS_FROM_CART':
            return{
                    
            }

        default: 
            return state;
    }
        

}

export default cartReducer;