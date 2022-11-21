import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";

function* sendSearch(action){
    try{    
    let response = yield axios.get(`/api/search/${action.payload}`);
    console.log(response.data);
    yield put({
        type: 'SAVE_RESULTS',
        payload: response.data
    });
}
    catch(error){
        console.error('search failed', error);
    }
}

function* searchSaga(){
    yield takeEvery('SEND_SEARCH', sendSearch);
}

export default searchSaga;