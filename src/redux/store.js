import { createStore, applyMiddleware } from "redux";
/* 
    Action ---Middleware---> Root Reducer ---> Store ---> DOM Changes

    Actions are dispatched we catch them and the Middleware are some functions that receive Actions in and
    do something with the Actions and then pass them out into the Root reducer.


*/

import logger from "redux-logger"; //middleware that will be used later to debug code 
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import rootReducer from './root-reducer'; //file that we created

export const history = createBrowserHistory();

//Set up middleware
const middlewares = [logger,routerMiddleware(history)]; //we put all the middlewares that we use in an array

//Create Store 
const store = createStore(rootReducer(history), applyMiddleware(...middlewares)); //tackes the root reducer  and the middlewares as parameter


export default store;


