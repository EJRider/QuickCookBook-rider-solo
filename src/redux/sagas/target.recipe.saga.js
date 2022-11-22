import axios from "axios";
import { takeEvery, put } from "redux-saga/effects";

function* getTargetRecipe(action){
    try{
        let response = yield axios.get(`/api/recipe/${action.payload}`);
        yield put({
            type: "STORE_TARGET_RECIPE",
            payload: response.data
        })
 }
 catch(err){
    console.error(err);
 }
}

function* targetRecipeSaga(){
    yield takeEvery('GET_TARGET_RECIPE', getTargetRecipe);
}

export default targetRecipeSaga;