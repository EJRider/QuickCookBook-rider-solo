import { takeEvery } from "redux-saga/effects";
import axios from "axios";
function* deleteById(action){
 yield axios.delete(`/api/recipe/${action.payload}`);
}

function* deleteSaga(){
    yield takeEvery('DELETE_ITEM', deleteById);
}

export default deleteSaga;