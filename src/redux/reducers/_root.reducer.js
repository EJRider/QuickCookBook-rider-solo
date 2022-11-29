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
import targetRecipe from './target.recipe.reducer';
import targetIngredients from './target.ingredients.reducer';
import diets from './diets.reducer';
import targetDiets from './target.diets.reducer';
import targetAllergens from './target.allergen.reducer';
import currentDiet from './current.diet.recuder';
import currentAllergen from './current.allergen.reducer';
import newRecipeDiets from './newRecipe.diets.reducer';
import newRecipeAllergen from './newRecipe.allergen.reducer';
import recipeName from './recipe.name.reducer';
import recipeDesc from './recipe.desc.reducer';
import recipeInst from './recipe.inst.reducer';
import recipeCal from './recipe.cal.reducer';
import recipeCarb from './recipe.carb.reducer';
import recipeFat from './recipe.fat.reducer';
import recipePro from './recipe.pro.reducer';
import recipeSize from './recipe.serv.reducer';
import recipeSugar from './recipe.sugar.reducer';
import allergenTranslator from './allergen.traslate.reducer';
import dietTranslator from './diet.translate.reducer';
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
  targetRecipe,
  diets,
  targetIngredients,
  targetAllergens,
  targetDiets,
  currentDiet,
  currentAllergen,
  newRecipeDiets,
  newRecipeAllergen,
  recipeName,
  recipeDesc,
  recipeInst, 
  recipeCal,
  recipeCarb,
  recipeFat,
  recipePro,
  recipeSize,
  recipeSugar,
  allergenTranslator,
  dietTranslator,
});

export default rootReducer;
