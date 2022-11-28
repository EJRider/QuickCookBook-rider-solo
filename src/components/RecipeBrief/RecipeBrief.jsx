import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';

function RecipeBrief({recipe}){
    const history = useHistory();
    const dispatch = useDispatch()
    const currentUser = useSelector(store=>store.user);
    const allergens = useSelector(store=>store.allergens);
    let storedAllergens = [];
    const diets = useSelector(store=>store.diets);
    let storedDiets = [];
    if(diets.length > 0){
        storedDiets = diets.filter(diet=>diet.recipes_id === recipe.id);
    }
    if(allergens.length>0) {
        storedAllergens = allergens.filter(allergen => allergen.recipe_id === recipe.id);
    }

    if(recipe.user_id === currentUser.id){
        return(
            <>
            <li>
                <h3 onClick={()=>{history.push(`/recipe/${recipe.id}`)}}>{recipe.recipe_name}</h3>
                Allergens: 
                <ul>
                    {storedAllergens.length > 0 && storedAllergens.map(allergen => (
                    <li key={allergen}>{allergen.allergen_name}</li>
                    ))}
                </ul>
                Diets: 
                <ul>
                        {storedDiets.length > 0 && storedDiets.map(diet => (
                            <li key={diet}>{diet.diet_name}</li>
                        ))}
                </ul>
                <p>{recipe.description}</p>
                <p>Likes: {recipe.likes}</p>
                <button>Edit</button> <button onClick={()=>{
                    dispatch({type: 'DELETE_ITEM', payload: recipe.id}), dispatch({type: 'GET_RECIPES'});
                }}>Delete</button>
            </li>
            </>
        )
    }
    else{
        return(
            <>
            <li>
                <h3 onClick={()=>{history.push(`/recipe/${recipe.id}`)}}> {recipe.recipe_name}</h3>
                {allergens.length>0 && <p>{allergens[0].allergen_name}, {allergens[1].allergen_name}</p>}
                <p>{recipe.description}</p>
                <p>Likes: {recipe.likes}</p>
                <button onClick={()=>{dispatch({type:'LIKE_POST', payload: recipe.id })}}>Like</button>
            </li>
            </>
        )
    }
}

export default RecipeBrief;