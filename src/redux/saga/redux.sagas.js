import { call, put, takeEvery } from 'redux-saga/effects'

//implement watcher 
export default function* mySaga() {
    yield takeEvery("ITEM_INFO_REQUESTED", fetchItemInfo);
}

//implement workers

function API(id) {
   return fetch(`https://fakestoreapi.com/products/${id}`)       // fetch returns a promise
            .then(res=>res.json())
        
}

function* fetchItemInfo(action) {
    try {
        
       const item = yield call(API, action.payload.id); //gets passed to API as args
    //    console.log(item.rating)
       yield put({type: "ITEM_INFO_GET_SUCCESEED", ratings: item.rating});    //action will be implemented on cart reducer {type:'',ratings:{}} instead of payload we use directly ratings
    } catch (e) {
       yield put({type: "ITEM_INFO_GET_FAILED", message: e.message});
    }
 }
