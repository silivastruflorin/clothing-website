/* 
    Action ---Middleware---> Root Reducer ---> Store ---> DOM Changes

    Actions are dispatched we catch them and the Middleware are some functions that receive Actions in and
    do something with the Actions and then pass them out into the Root reducer.


*/

import logger from "redux-logger"; //middleware that will be used later to debug code 
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
//User defined
import rootReducer from './root-reducer'
import mySaga from './../saga/redux.sagas';
import { configureStore } from "./configureStore";
import userSliceReducer from "../reducers/user/userSlice.reducer";
import shopSlice from '../reducers/cart/cart.reducer';

//used for navigation (connected-react-router)
export const history = createBrowserHistory();
// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();
//Set up middleware
const middlewares = [logger, routerMiddleware(history), sagaMiddleware]; //we put all the middlewares that we use in an array

//these reducers will be loaded at application start-up
const staticReducers = {
        router: connectRouter(history),
        userkey: userSliceReducer,     
        cartkey : shopSlice,
}

//Create Store 
const store = configureStore(middlewares,staticReducers);

// Then run the saga
sagaMiddleware.run(mySaga)


// console.log(store.getState())
export default store;


