import axios from "axios";
import { takeEvery, put } from "redux-saga/effects";
function* getAllergens(){
    try{
        let response = yield axios.get('/api/recipe/allergens');
        yield put({
            type: "STORE_ALLERGENS",
            payload: response.data
         });
        }
        catch(err){
            console.error(err);
        }
}

function* allergenSaga(){
    yield takeEvery("GET_ALLERGENS", getAllergens);
}

export default allergenSaga