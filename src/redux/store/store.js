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
import mySaga from './../saga/redux.sagas';
import { configureStore } from "./configureStore";
import userSliceReducer from "../reducers/user/userSlice.reducer";
import shopSlice from '../reducers/cart/cart.reducer.slice';

//used for navigation (connected-react-router)
export const history = createBrowserHistory();
// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();
//Set up middleware
const middlewares = [logger, routerMiddleware(history), sagaMiddleware]; //we put all the middlewares that we use in an array

//these reducers will be loaded at application start-up
const staticReducers = {
        router: connectRouter(history),
        UserReducer: userSliceReducer,    //name of the reducer given in the slice : reducer
        shopReducer : shopSlice,          //name of the reducer given in the slice : reducer
}

//Create Store 
const store = configureStore(middlewares, staticReducers);

/*
To add a new reducer, one can now call store.reducerManager.add("asyncState", asyncReducer).

To remove a reducer, one can now call store.reducerManager.remove("asyncState")
*/


// Then run the saga
sagaMiddleware.run(mySaga)


// console.log(store.getState())
export default store;


