import { call, put, takeEvery } from 'redux-saga/effects'
import {
         ITEM_INFO_REQUESTED, 
         ITEM_INFO_GET_SUCCESEED,
         ITEM_INFO_GET_FAILED,
         GET_PRODUCTS_REQUEST,
         GET_PRODUCTS_REQUEST_SUCCESEED,
         GET_PRODUCTS_REQUEST_FAILED} from '../cart/cart.reducer.slice';

//implement watcher 
export default function* mySaga() {
    yield takeEvery(ITEM_INFO_REQUESTED, fetchItemInfo);
    yield takeEvery(GET_PRODUCTS_REQUEST, fetchProducts);
}

//implement workers

function ApiSingleProduct(id) {
   return fetch(`https://fakestoreapi.com/products/${id}`)       // fetch returns a promise
            .then(res=>res.json())
        
}

function ApiAllProductsFromCategory(productCategory) {
   return fetch(`https://fakestoreapi.com/products/category/${productCategory}`)       // fetch returns a promise
            .then(res=>res.json())
        
}

function* fetchItemInfo(action) {
    try {
        
       const item = yield call(ApiSingleProduct, action.payload.id); //gets passed to API as args
    //    console.log(item.rating)
       yield put(ITEM_INFO_GET_SUCCESEED(item.rating));    //action will be implemented on cart reducer {type:'',ratings:{}} instead of payload we use directly ratings
    } catch (e) {
       yield put(ITEM_INFO_GET_FAILED(e.message));
    }
 }


 function* fetchProducts(action) {
   try {
       
      const products = yield call(ApiAllProductsFromCategory, action.payload); //gets passed to API as args
   //    console.log(item.rating)
      yield put(GET_PRODUCTS_REQUEST_SUCCESEED(products));    //action will be implemented on cart reducer {type:'',products:{}} instead of payload we use directly ratings
   } catch (e) {
      yield put(GET_PRODUCTS_REQUEST_FAILED(e.message));
   }
}
