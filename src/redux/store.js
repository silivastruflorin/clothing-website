import { createStore, applyMiddleware, compose } from "redux";

/* 
    Action ---Middleware---> Root Reducer ---> Store ---> DOM Changes

    Actions are dispatched we catch them and the Middleware are some functions that receive Actions in and
    do something with the Actions and then pass them out into the Root reducer.


*/

import logger from "redux-logger"; //middleware that will be used later to debug code 
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import rootReducer from './root-reducer'; //file that we created
import createSagaMiddleware from 'redux-saga';
//User defined
import mySaga from './saga/redux.sagas';

export const history = createBrowserHistory();
// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Set up middleware
const middlewares = [logger,routerMiddleware(history),sagaMiddleware]; //we put all the middlewares that we use in an array

//Create Store 
const store = createStore(rootReducer(history), composeEnhancers(applyMiddleware(...middlewares))); //tackes the root reducer  and the middlewares as parameter

console.log(store.getState())

// Then run the saga
sagaMiddleware.run(mySaga)


export default store;


