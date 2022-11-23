import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function RecipeDetail(){
    const params = useParams();
    const dispatch = useDispatch();
    
    const recipe = useSelector(store=>store.targetRecipe);
    const allergens = useSelector(store=>store.targetAllergens);
    const diets = useSelector(store=>store.targetDiets);
    const ingredients = useSelector(store=>store.targetIngredients);
    

    console.log('ingredients', ingredients);
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
    return (
        <>
        {recipe.length > 0 && <h1>{recipe[0].recipe_name}</h1>}
        <br/>
        <h2>Description: </h2>
        {recipe.length > 0 && <p>{recipe[0].description}</p>}
        <br/>
        <h2>Cooking Instructions: </h2>
        {recipe.length > 0 && <p>{recipe[0].instructions}</p>}
        <br/>
        <h2>Allergens: </h2>
        <ul>
        
        </ul>
        <br/>
        <h2>Diets: </h2>
        <ul>
            {diets.length > 0 && diets.map(diet=>
                <li key={diet.diet_name}>{diet.diet_name}</li>)}
        </ul>
        <br/>
        <h2>Ingredients: </h2>
        <ul>
            {ingredients.length > 0 && ingredients.map(ingredient=>
                <li key={ingredient.ingredient_name}>{ingredient.quantity} {ingredient.ingredient_name}</li>
        )}
        </ul>
        </>
    )
}

export default RecipeDetail;