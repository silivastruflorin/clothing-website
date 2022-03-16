import { call, put, takeEvery } from 'redux-saga/effects';
//Cart actions
import {
ITEM_INFO_REQUESTED, 
ITEM_INFO_GET_SUCCESEED,
ITEM_INFO_GET_FAILED,
GET_PRODUCTS_REQUEST,
GET_PRODUCTS_REQUEST_SUCCESEED,
GET_PRODUCTS_REQUEST_FAILED} from './../reducers/cart/cart.reducer.slice';
//user actions
import {AUTH_REUEST,
       AUTH_REUEST_SUCCESEED, 
       AUTH_REUEST_FAILED, 
       AUTH_LOGOUT_REQ, 
       AUTH_LOGOUT_REQ_SUCCESS,
       AUTH_LOGOUT_REQ_FAILED } from './../reducers/user/userSlice.reducer'

//firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut  } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsOg9OCglm66iUb55FRY7rSJYf6k5K2hU",
  authDomain: "clothingwebsite-7cab5.firebaseapp.com",
  projectId: "clothingwebsite-7cab5",
  storageBucket: "clothingwebsite-7cab5.appspot.com",
  messagingSenderId: "5578873663",
  appId: "1:5578873663:web:1bb5c85dc7dca40306918a"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// console.log(app);

//implement watcher 
export default function* mySaga() {
    yield takeEvery(ITEM_INFO_REQUESTED, fetchItemInfo);
    yield takeEvery(GET_PRODUCTS_REQUEST, fetchProducts);
    yield takeEvery(AUTH_REUEST, authentificationWorker);
    yield takeEvery(AUTH_LOGOUT_REQ, DeAuthentificationWorker);

}

// API tools to be used by workers
function ApiSingleProduct(id) {
   return fetch(`https://fakestoreapi.com/products/${id}`)       // fetch returns a promise
            .then(res=>res.json())
        
}

function ApiAllProductsFromCategory(productCategory) {
   return fetch(`https://fakestoreapi.com/products/category/${productCategory}`)       // fetch returns a promise
            .then(res=>res.json())
        
}

//implement workers
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

function* authentificationWorker(action) {
   const auth = getAuth();
   let user = null;
    try {
      yield signInWithEmailAndPassword(auth, action.payload.email, action.payload.password)
           .then((userCredential) => {
             // Signed in 
             user = userCredential.user;
             console.log(userCredential)
             // ...
           })
           .catch((error) => {
                throw error;
           })
      yield put(AUTH_REUEST_SUCCESEED(user));
   } catch (e) {
      yield put(AUTH_REUEST_FAILED(e));
      console.log("problem with the yeld call",e);
   }
   // 
   //
}

function* DeAuthentificationWorker(action) {
   let loggedOut = false;
   const auth = getAuth();
   try{
      signOut(auth).then(() => {
         console.log("logged out")
        // Sign-out successful.
         loggedOut = true;
      }).catch((error) => {
        // An error happened.
         throw error;
      });
      yield put(AUTH_LOGOUT_REQ_SUCCESS())
   }catch(e){
     yield put(AUTH_LOGOUT_REQ_FAILED(e));
   }
   

}