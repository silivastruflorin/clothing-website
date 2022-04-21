import { createStore } from "redux";
import {applyMiddleware, compose } from "redux";
//Custom imports 
import {createReducerManager} from './reducerManager';


export function configureStore(middlewares, staticReducers) {
    const reducerManager = createReducerManager(staticReducers)
  
    //enables the dev tools
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    // Create a store with the root reducer function being the one exposed by the manager.
    const store = createStore(reducerManager.reduce, composeEnhancers(applyMiddleware(...middlewares)))
  
    // Optional: Put the reducer manager on the store so it is easily accessible
    store.reducerManager = reducerManager

    return store
  }