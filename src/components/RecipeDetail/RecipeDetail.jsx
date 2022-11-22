import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function RecipeDetail(){
    const params = useParams();
    const dispatch = useDispatch();
    /* 
    const recipe = useSelector(store=>store.targetRecipe);
    const allergens = useSelector(store=>store.allergens);
    const diets = useSelector(store=>store.diets);
    const ingredients = useSelector(store=>store.targetIngredients);
    */
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
        RecipeDetails
        </>
    )
}

export default RecipeDetail;