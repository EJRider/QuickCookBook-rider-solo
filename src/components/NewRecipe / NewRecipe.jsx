import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function NewRecipe(){
    const history = useHistory();
    const dispatch = useDispatch();
    const newIngredient = useSelector(store=>store.newIngredient);
    const newQuantity = useSelector(store=>store.newQuantity);
    const ingredients = useSelector(store=>store.newIngredients);
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
    

    const submitRecipe = ()=>{
        dispatch({type: 'FETCH_USER'});
        dispatch({
            type: 'SUBMIT_RECIPE',
            payload: {
                user: userId.id,
                recipeName: storedName,
                recipeDesc: storedDesc,
                recipeInst: storedInst,
                recipeAllergens: storedAllergens,
                recipeDiets: storedDiets,
                recipeIngredients: ingredients,
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

    const dummyFill = () => {
        dispatch({
            type: "SAVE_NAME",
            payload: "Gluten Free Vegan Pizza"
        })
        dispatch({
            type:"SAVE_DESC",
            payload: "Not something I'd usually make, but an old friend is came into town and suggested this recipe. Hopefully it's as good as they say it is"
        });
        dispatch({
            type: "SAVE_INST",
            payload: "Preheat oven to 400°F or 200°C. Cover crust with tomato paste, vegan mozzarella, mushrooms, and red onion. Bake for according to crust directions or until golden brown. Once done remove pizza from oven and add tomatoes and basil, then let cool for 3 to 5 minutes"
        })
        dispatch({
            type: 'SAVE_NR_DIET',
            payload: [1,2,3,4,5,6,7,8]
        })
        dispatch({
            type: 'TRANSLATE_DIET', 
            payload: '1'
        })
        dispatch({
            type: 'TRANSLATE_DIET', 
            payload: '2'
        })
        dispatch({
            type: 'TRANSLATE_DIET', 
            payload: '3'
        })
        dispatch({
            type: 'TRANSLATE_DIET', 
            payload: '4'
        })
        dispatch({
            type: 'TRANSLATE_DIET', 
            payload: '5'
        })
        dispatch({
            type: 'TRANSLATE_DIET', 
            payload: '6'
        })
        dispatch({
            type: 'TRANSLATE_DIET', 
            payload: '7'
        })
        dispatch({
            type: 'TRANSLATE_DIET', 
            payload: '8'
        })
        dispatch({
            type: 'DUMMY_INGREDIENTS',
            payload: [{ingredient_name: 'Gluten Free Crust', quantity: '1'}, {ingredient_name:'tomato paste', quantity:'6 tablespoons'}, {ingredient_name:'vegan mozzarella', quantity: '8oz sliced'}, {ingredient_name: 'mushrooms', quantity:'2 large sliced'}, {ingredient_name:'red onion', quantity:'1/4 chopped'}, {ingredient_name:'cherry tomatoes', quantity:'6 chopped'}, {ingredient_name: 'basil', quantity: '2 teaspoons chopped'} ]
        })
        dispatch({
            type: 'SAVE_CAL',
            payload: 520
        })
        dispatch({
            type: 'SAVE_PRO',
            payload: 23.4
        })
        dispatch({
            type: 'SAVE_SUGAR',
            payload: 11.4
        })
        dispatch({
            type: 'SAVE_FAT',
            payload: 6.1
        })
        dispatch({
            type: 'SAVE_CARB',
            payload: 104.7
        })
        dispatch({
            type: 'SAVE_SERV',
            payload: '2 slices'
        })
    }

    return(
        <>
            <h1 onClick={dummyFill}>New Recipe</h1>
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
                    {ingredients.length > 0 && ingredients.map(ingredient => 
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

export default NewRecipe;