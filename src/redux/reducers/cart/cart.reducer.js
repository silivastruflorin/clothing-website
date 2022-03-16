//declare a default value for state
const INITIAL_STATE = {
    cartItems : [],
    // numberOfItemsInCart: 0,   //replaced by selectors
    // totalPrice: 0,           //replaced by selectors
    rating: [],    // used with saga to get Rating and count
    isRetrevingInfoProduct: false,
    productsOnPage: [],
    isRetrevingProducts: false
}

const cartReducer = (state = INITIAL_STATE , action) => {
    switch(action.type){
        case 'ADD_ITEMS_TO_CART':
            let cartItemsUpdated =  [...state.cartItems, action.payload];
            return{
                ...state,
                cartItems : cartItemsUpdated,
                // numberOfItemsInCart: cartItemsUpdated.length, //will be deleted when using selectors
                // totalPrice : cartItemsUpdated.map(item => item.price).reduce((previousValue, currentValue) => previousValue + currentValue).toFixed(2) //2 decimals
            }
            
        case 'DELETE_ITEMS_FROM_CART':
            return{
                    
            }
        //Saga actions: see file redux.sagas.js
        case 'ITEM_INFO_REQUESTED':
            return {
                ...state,
                isRetrevingInfoProduct : true  //saga is retreiving data form api(loading)
            }
        case 'ITEM_INFO_GET_SUCCESEED':
            // console.log(action.ratings)
            return {
                ...state,
                rating : action.ratings, //yelded by redux.sagas.js
                isRetrevingInfoProduct : false  //data was retreived using saga
            }
            
        case 'ITEM_INFO_GET_FAILED':
            console.log(action.payload)
            return state;
        
         //Saga actions: see file redux.sagas.js
        case 'GET_PRODUCTS_REQUEST':
            return {
                ...state,
                isRetrevingProducts : true  //saga is retreiving data form api(loading)
            }

        case 'GET_PRODUCTS_REQUEST_SUCCESEED':
            // console.log(action.ratings)
            return {
                ...state,
                productsOnPage: action.products, //yelded by redux.sagas.js
                isRetrevingProducts : false  //saga is retreiving data form api(loading)
            }
            
        case 'GET_PRODUCTS_REQUEST_FAILED':
            console.log(action.payload)
            return state;         

        default: 
            return state;
    }
        

}

export default cartReducer;