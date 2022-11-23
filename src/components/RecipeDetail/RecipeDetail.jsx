import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function RecipeDetail(){
    const params = useParams();
    const dispatch = useDispatch();
    
    const recipe = useSelector(store=>store.targetRecipe);
    const allergens = useSelector(store=>store.allergens);
    const diets = useSelector(store=>store.diets);
    const ingredients = useSelector(store=>store.targetIngredients);
    
    let storedAllergens = [];
    
    let storedDiets = [];
    if(allergens.length>0 && recipe) {
        storedAllergens = allergens.filter(allergen => allergen.recipe_id === params.id);
        console.log('storedAllergens', storedAllergens)
    }
    if(diets.length > 0){
        storedDiets = diets.filter(diet=>diet.recipes_id === params.id);
        console.log('storedDiets', storedDiets);
        
    }

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
        {storedAllergens.length > 0 && storedAllergens.map(allergen => (
            <li key={allergen.allergen_name}>{allergen.allergen_name}</li>
            ))}
        </ul>
        <br/>
        <h2>Diets: </h2>
        <ul>
            {storedDiets.length > 0 && storedDiets.map(diet => (
                <li key={diet}>{diet.diet_name}</li>
            ))}
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