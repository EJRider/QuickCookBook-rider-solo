import axios from "axios";
import {takeEvery, put} from 'redux-saga/effects';

function* sendGet (){
    try{
        let response = yield axios.get('/api/recipe');
        yield put({
            type: 'STORE_RECIPES',
            payload: response.data
        });
    }
    catch(err){
        console.error('error in getting information',err);
    }
}

function* userRecipeSaga(){
    yield takeEvery('GET_RECIPES', sendGet);
}

export default userRecipeSaga;