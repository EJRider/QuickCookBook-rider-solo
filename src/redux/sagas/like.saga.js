import axios from "axios"
import {takeEvery, put} from "redux-saga/effects"

function* likePost(action){
    try{
        let response = yield axios.put(`/api/recipe/likes/${action.payload}`)
        yield put({
            type: "GET_RECIPES"
    })}
    catch(err){
        console.error(err);
    }
}

function* likePostSaga(){
    yield takeEvery('LIKE_POST', likePost);
}

export default likePostSaga;