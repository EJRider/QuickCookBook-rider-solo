import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import searchReducer from './search.reducer';
import searchResults from './search.results.reducer';
import userRecipes from './user.recipes.reducer';
import allergens from './allergen.reducer';
import newIngredients from './new.ingredients.reducer';
import newIngredient from './newIngredient.reducer';
import newQuantity from './new.quantity.reducer';
import targetAllergens from './target.allergen.reducer';
import targetRecipe from './target.recipe.reducer';
import targetDiets from './target.diets.reducer';
import targetIngredients from './target.ingredients.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga



// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  searchReducer,
  searchResults,
  userRecipes,
  allergens, 
  newIngredients, 
  newIngredient,
  newQuantity,
  targetAllergens,
  targetRecipe,
  targetDiets,
  targetIngredients,
});

export default rootReducer;
