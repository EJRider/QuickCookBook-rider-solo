import axios from "axios";
import { takeEvery, put } from "redux-saga/effects";
function* getDiets(){
    try{let response = yield axios.get('/api/recipe/diets');
    yield put({
        type: "STORE_DIETS",
        payload: response.data
    })}
    catch(err){
        console.error(err);
    }
}

function* dietSaga(){
    yield takeEvery('GET_DIETS', getDiets);
}

export default dietSaga;

