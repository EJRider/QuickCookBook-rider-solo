import { useDispatch, useSelector } from "react-redux";

function NewRecipe(){
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
    }
    return(
        <>
            <h1>New Recipe</h1>
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
                    <button onClick={()=>{dispatch({type: 'SAVE_NR_ALLERGEN', payload: currentAllergen})}}>Add Allergen</button>
                    <br/>
                    <br/>
                    <ul>
                        {storedAllergens.length > 0 && storedAllergens.map(allergen => 
                            // {switch (allergen){
                            //     case 1:
                            //         <li key={allergen}>Milk <button>Remove</button></li>;
                            //     case 2: 
                            //         <li key={allergen}>Eggs <button>Remove</button></li>;
                            //     case 3:
                            //         <li key={allergen}>Fish <button>Remove</button></li>;
                            //     case 4:
                            //         <li key={allergen}>Shellfish <button>Remove</button></li>;
                            //     case 5: 
                            //         <li key={allergen}>Tree Nut <button>Remove</button></li>;
                            //     case 6: 
                            //         <li key={allergen}>Peanut <button>Remove</button></li>;
                            //     case 7:
                            //         <li key={allergen}>Gluten <button>Remove</button></li>;
                            //     case 8:
                            //         <li key={allergen}>Soybeans <button>Remove</button></li>;
                            //     }})}
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
                    <button onClick={()=>{dispatch({type: "SAVE_NR_DIET", payload: currentDiet})}}>Add Diet</button>

                    <br/>
                    <br/>

                    <ul>
                        {storedDiets.length > 0 && storedDiets.map(diet => 
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
                    <button onClick={()=>{dispatch({type: 'ADD_INGREDIENT', payload: {ingredient_name: newIngredient, quantity: newQuantity}})}}>Add Ingredient</button>
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