import axios from "axios";
import { takeEvery, put } from "redux-saga/effects";

function* getTargetAllergens(action){
    try{
    let response = yield axios.get(`/api/recipe/allergens/${action.payload}`);
    yield put({
        type: "STORE_TARGET_ALLERGENS",
        payload: response.data
    })}
    catch(err){
        console.error(err);
    }

}

function* targetAllergenSaga(){
    yield takeEvery('GET_TARGET_ALLERGENS', getTargetAllergens);
}

export default targetAllergenSaga;