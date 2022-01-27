//declare a default value for state
const INITIAL_STATE = {
    cartItems : [],
    numberOfItemsInCart: 0,
    totalPrice: 0,
    rating: []     // used with saga to get Rating and count
}

const cartReducer = (state = INITIAL_STATE , action) => {
    switch(action.type){
        case 'ADD_ITEMS_TO_CART':
            let cartItemsUpdated =  [...state.cartItems, action.payload];
            return{
                ...state,
                cartItems : cartItemsUpdated,
                numberOfItemsInCart: cartItemsUpdated.length, //will be deleted when using selectors
                totalPrice : cartItemsUpdated.map(item => item.price).reduce((previousValue, currentValue) => previousValue + currentValue).toFixed(2) //2 decimals
            }
            
        case 'DELETE_ITEMS_FROM_CART':
            return{
                    
            }
        //Saga actions: see file redux.sagas.js
        case 'ITEM_INFO_GET_SUCCESEED':
            // console.log(action.ratings)
            return {
                ...state,
                rating : action.ratings //yelded by redux.sagas.js
            }
            
        case 'ITEM_INFO_GET_FAILED':
            console.log(action.payload)
            return state;

        default: 
            return state;
    }
        

}

export default cartReducer;