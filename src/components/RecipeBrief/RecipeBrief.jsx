import {useSelector, useDispatch} from 'react-redux';

function RecipeBrief({recipe}){
    const dispatch = useDispatch()
    if(recipe.user_id === currentUser.id){
        dispatch({
            type: "GET_BRIEF",
            payload: recipe.recipe_id
        });
        
        return(
            <>
            <li>
                <h3>{recipe.recipe_name}</h3>
                <p>{recipe.description}</p>
                <p>Allergens: {recipe.allergens}</p>
            </li>
            </>
        )
    }
}