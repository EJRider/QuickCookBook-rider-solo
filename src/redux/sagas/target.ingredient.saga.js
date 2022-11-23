import axios from "axios";
import { takeEvery, put } from "redux-saga/effects";

function* getTargetIngredients(action){
    try{
        let response = yield axios.get(`/api/recipe/ingredient/${action.payload}`);
        yield put({
            type: 'STORE_TARGET_INGREDIENTS',
            payload: response.data
        })
    }
    catch(err){
        console.error(err);
    }
}

function* targetIngredientSaga(){
    yield takeEvery('GET_TARGET_INGREDIENTS', getTargetIngredients);
}

export default targetIngredientSaga;