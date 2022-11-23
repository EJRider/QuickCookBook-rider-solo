import axios from "axios";
import { takeEvery,put } from "redux-saga/effects";

function* getTargetDiets(action){
    try{
        let response= yield axios.get(`/api/recipe/diets/${action.payload}`);
        yield put({
            type: 'STORE_TARGET_DIETS',
            payload: response.data
        })
    }
    catch(err){
        console.error(err);
    }
}

function* targetDietsSaga(){
    yield takeEvery('GET_TARGET_DIETS',getTargetDiets);
}

export default targetDietsSaga;