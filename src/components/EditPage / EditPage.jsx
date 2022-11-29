import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useParams } from "react-router-dom";




function EditRecipe (){
    const history = useHistory();
    const dispatch = useDispatch();
    const params = useParams();
    const recipe = useSelector(store=>store.targetRecipe);
    const allergens = useSelector(store=>store.targetAllergens);
    const diets = useSelector(store=>store.targetDiets);
    const ingredients = useSelector(store=>store.targetIngredients);
    const newIngredient = useSelector(store=>store.newIngredient);
    const newQuantity = useSelector(store=>store.newQuantity);
    const newIngredients = useSelector(store=>store.newIngredients);
    const currentAllergen = useSelector(store=>store.currentAllergen);
    const currentDiet = useSelector(store=>store.currentDiet);
    const storedDiets = useSelector(store=>store.newRecipeDiets);
    const storedAllergens = useSelector(store=>store.newRecipeAllergen);   
    const storedName = useSelector(store=>store.recipeName);
    const storedDesc = useSelector(store=>store.recipeDesc);
    const storedInst = useSelector(store=>store.recipeInst);
    const storedCal = useSelector(store=>store.recipeCal);
    const storedCarb = useSelector(store=>store.recipeCarb);
    const storedFat = useSelector(store=>store.recipeFat);
    const storedPro = useSelector(store=>store.recipePro);
    const storedSize = useSelector(store=>store.recipeSize);
    const storedSugar = useSelector(store=>store.recipeSugar);
    const userId = useSelector(store=>store.user)
    const aTrans = useSelector(store=>store.allergenTranslator);
    const dTrans = useSelector(store=>store.dietTranslator);
    
    useEffect(()=>{
        dispatch({
            type: 'GET_TARGET_RECIPE',
            payload: params.id
        })
        dispatch({
            type: 'GET_TARGET_INGREDIENTS',
            payload: params.id
        })
        dispatch({
            type: 'GET_TARGET_ALLERGENS',
            payload: params.id
        })
        dispatch({
            type: 'GET_TARGET_DIETS',
            payload: params.id
        })
    },[params.id])

    function waiter(){
        dispatch({
            type: "SAVE_NAME",
            payload: recipe[0].recipe_name
        })
        dispatch({
            type:"SAVE_DESC",
            payload: recipe[0].description
        });
        dispatch({
            type: "SAVE_INST",
            payload: recipe[0].instructions
        })
        dispatch({
            type: "SAVE_NR_ALLERGEN",
            payload: allergens
        })
        dispatch({
            type: "TRANSLATE_ALLERGEN",
            payload: allergens
        })
        dispatch({
            type: "SAVE_EDIT_DIET",
            payload: diets
        })
        dispatch({
            type: "TRANSLATE_EDIT_DIET",
            payload: diets
        })
        dispatch({
            type: 'EDIT_INGREDIENTS',
            payload: ingredients
        })
        dispatch({
            type: 'SAVE_CAL',
            payload: recipe[0].calories
        })
        dispatch({
            type: 'SAVE_PRO',
            payload: recipe[0].protein
        })
        dispatch({
            type: 'SAVE_SUGAR',
            payload: recipe[0].sugar
        })
        dispatch({
            type: 'SAVE_FAT',
            payload: recipe[0].fats
        })
        dispatch({
            type: 'SAVE_CARB',
            payload: recipe[0].carbohydrates
        })
        dispatch({
            type: 'SAVE_SERV',
            payload: recipe[0].serving_size
        })}

    const submitRecipe = ()=>{
        dispatch({type: 'DELETE_ITEM', payload: recipe.id})
        dispatch({type: 'FETCH_USER'});
        dispatch({
            type: 'UPDATE_RECIPE',
            payload: {
                user: userId.id,
                recipeName: storedName,
                recipeDesc: storedDesc,
                recipeInst: storedInst,
                recipeAllergens: storedAllergens,
                recipeDiets: storedDiets,
                recipeIngredients: newIngredients,
                recipeCal: storedCal,
                recipePro: storedPro,
                recipeSugar: storedSugar,
                recipeFat: storedFat,
                recipeCarb: storedCarb,
                recipeSize: storedSize
            }
        })
        dispatch({type: 'CLEAN_UP'});
        history.push(`/user`);
    }

    return(
        <>
            <h1 onClick={waiter}>Edit Recipe</h1>
                <label for='recipe-name'>Recipe Name:</label>
                <input
                type="text"
                id="recipe-name"
                onChange={(e)=>{dispatch({type: 'SAVE_NAME', payload: e.target.value})}}
                value={storedName}
                />
                <br/>
                <br/>
                <label for='recipe-desc'>Recipe Description: </label>
                <textarea 
                id="recipe-desc"
                onChange={(e)=>{dispatch({type: 'SAVE_DESC', payload: e.target.value})}}
                value={storedDesc}
                />
                <br />
                <br/>
                <label for='recipe-inst'>Recipe Instructions: </label>
                <textarea 
                type="text"
                id="recipe-inst"
                onChange={(e)=>{dispatch({type: 'SAVE_INST', payload: e.target.value})}}
                value={storedInst}
                />
                <br/>
                <br/>
                <h2>Allergens</h2>
                <div className="allergens">
                <select name="allergens" id="allergens" onChange={(e)=>{dispatch({type: 'SET_CURRENT_ALLERGEN', payload: e.target.value})}}>
                        <option key={0} defaultValue={0} hidden>Select an Allergen</option>
                        <option value={1} >Milk</option>
                        <option value={2}>Eggs</option>
                        <option value={3}>Fish</option>
                        <option value={4}>Shellfish</option>
                        <option value={5}>Tree Nut</option>
                        <option value={6}>Peanut</option>
                        <option value={7}>Gluten</option>
                        <option value={8}>Soybeans</option>
                    </select>
                    <br/>
                    <br/>
                    <button onClick={()=>{dispatch({type: 'SAVE_NR_ALLERGEN', payload: currentAllergen}), dispatch({type: 'TRANSLATE_ALLERGEN', payload: currentAllergen})}}>Add Allergen</button>
                    <br/>
                    <br/>
                    <ul>
                        {aTrans.length > 0 && aTrans.map(allergen => 
                       <li key={allergen}>{allergen} <button>Remove</button></li>)}

                    </ul>
               </div>
               <br/>
               <h2>Diets</h2>
               <div className="diets">
                    <select name="diets" id="diets" onChange={(e)=>{dispatch({type: 'SET_CURRENT_DIET', payload: e.target.value})}}>
                        <option key={0} defaultValue={0} hidden>Select a Diet</option>
                        <option value={1}>Vegetarian</option>
                        <option value={2}>Vegan</option>
                        <option value={3}>Low Sodium</option>
                        <option value={4}>Kosher</option>
                        <option value={5}>Halal</option>
                        <option value={6}>Keto</option>
                        <option value={7}>High Fiber</option>
                        <option value={8}>Cardiac</option>
                    </select>
                    <br/>
                    <br/>
                    <button onClick={()=>{dispatch({type: "SAVE_NR_DIET", payload: currentDiet}), dispatch({type: 'TRANSLATE_DIET', payload: currentDiet})}}>Add Diet</button>

                    <br/>
                    <br/>

                    <ul>
                        {dTrans.length > 0 && dTrans.map(diet => 
                            <li key={diet}>{diet} <button>Remove</button></li>
                        )}
                    </ul>
                </div>
                <br/>
                <h2>Ingredients</h2>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <input 
                                    type="text"
                                    id='newIngredient'
                                    onChange={(e)=>{dispatch({type: 'LOG_INGREDIENT', payload: e.target.value})}}
                                    value={newIngredient}
                                    />
                                </td>
                                 <td>
                                    <input 
                                    type="text"
                                    id='newQuantity'
                                    onChange={(e)=>{dispatch({type: 'LOG_QUANTITY', payload: e.target.value})}}
                                    value={newQuantity}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <button onClick={()=>{dispatch({type: 'ADD_INGREDIENT', payload: {ingredient_name: newIngredient, quantity: newQuantity}}), dispatch({type: 'CLEAR_INPUT'})}}>Add Ingredient</button>
                </div>
                <br/>
                <ul>
                    {newIngredients.length > 0 && newIngredients.map(ingredient => 
                        <li key={ingredient.ingredient_name}>{ingredient.quantity} {ingredient.ingredient_name} <button>Remove Ingredient</button></li>
                        )}
                </ul>
                <br/>
                <br/>
                <div>
                <h2> Nutritional Data</h2>
                    <table>
                    <tbody>
                        <tr>
                            <td>
                            <label for='calories'>Calories: </label>
                            <input
                            type="text"
                            id="calories"
                            onChange={(e)=>{dispatch({type: 'SAVE_CAL', payload: e.target.value})}}
                            value={storedCal}
                            ></input>
                            </td>
                            <td>
                            <label for="protein">Protein: </label>
                            <input
                            type="text"
                            id="protein"
                            onChange={(e)=>{dispatch({type: 'SAVE_PRO', payload: e.target.value})}}
                            value={storedPro}
                            ></input>
                            </td>
                            <td>
                            <label for="sugar">Sugar: </label>
                            <input
                            type="text"
                            id="sugar"
                            onChange={(e)=>{dispatch({type: 'SAVE_SUGAR', payload: e.target.value})}}
                            value={storedSugar}
                            ></input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            <label for="fats">Fats: </label>
                            <input
                            type="text"
                            id="fats"
                            onChange={(e)=>{dispatch({type: 'SAVE_FAT', payload: e.target.value})}}
                            value={storedFat}
                            ></input>
                            </td>
                            <td>
                            <label for="carbohydrates">Carbohydrates: </label>
                            <input
                            type="text"
                            id="carbohydrates"
                            onChange={(e)=>{dispatch({type: 'SAVE_CARB', payload: e.target.value})}}
                            value={storedCarb}
                            ></input>
                            </td>
                            <td>
                            <label for="servingSize">Serving Size: </label>
                            <input
                            type="text"
                            id="servingSize"
                            onChange={(e)=>{dispatch({type: 'SAVE_SERV', payload: e.target.value})}}
                            value={storedSize}
                            ></input>
                            </td>
                        </tr>
                    </tbody>
                    </table>
                    </div>
                <button onClick={submitRecipe}>Submit Recipe</button>
        </>
    )
}

export default EditRecipe;