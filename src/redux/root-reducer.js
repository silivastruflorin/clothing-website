/*
    root-reducer represent the overall reducer base on 
    all the reducers that pulls in.

    root reducer = a combination of the other reducers

*/
import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router' // for navigation


/*Import reducer created in our app to be combined with other reducers and to create the root-reducer(this will be in store/<provider>)
    and will be able to pass is as props to our component

    Ex.
                                                Root-reducer (object composed other object)
                            {user:{currentUser:null},shop:{someShopState:null},someAnotherState:null }
                                                    |
                                userReducer -------shopReducer---------AnotherReducer
                            {currentUser:null}   {someShopState:null}      {someAnotherState:null}
                            
*/
import userReducer from "./user/user.reducer";
// import cartReducer from "./cart/cart.reducer";    // replace with the shopSlice reducer
import shopSlice from './cart/cart.reducer.slice';

const rootReducer = (history) => combineReducers(
    {
        router: connectRouter(history),
        userkey: userReducer,      /* returns an object {
                                                        userkey: {
                                                                    currentUser : null
                                                                }
                                                    
                                                    } */
        cartkey : shopSlice
    }
)

export default rootReducer;