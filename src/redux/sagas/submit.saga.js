import axios from "axios";
import {put, takeEvery} from 'redux-saga/effects';

function* submitRecipe(action){
    try{
        let response= yield axios.post({url: `/api/recipe/`, data: action.payload})
    }
    catch(err){
        console.error(err);
    }
}

function* submitSaga(){
    yield takeEvery('SUBMIT_RECIPE', submitRecipe);
}

export default submitSaga;