import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import searchSaga from './search.saga';
import userRecipeSaga from './recipe.get.saga';
import allergenSaga from './allergens.saga';
import deleteSaga from './delete.saga';
import dietSaga from './diets.saga';
import targetRecipeSaga from './target.recipe.saga';
import targetIngredientSaga from './target.ingredient.saga';
import targetAllergenSaga from './target.allergens.saga';
import targetDietsSaga from './target.diets.saga';
import likePostSaga from './like.saga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    searchSaga(),
    userRecipeSaga(),
    allergenSaga(),
    deleteSaga(),
    dietSaga(),
    targetRecipeSaga(),
    targetIngredientSaga(),
    targetAllergenSaga(),
    targetDietsSaga(),
    likePostSaga(),
  ]);
}
