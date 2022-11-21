import {useSelector, useDispatch} from 'react-redux';

function RecipeBrief({recipe}){
    const dispatch = useDispatch()
    const currentUser = useSelector(store=>store.user);
    const allergens = useSelector(store=>store.allergens);
    
    if(recipe.user_id === currentUser.id){
        return(
            <>
            <li>
                <h3>{recipe.recipe_name}</h3>
                {allergens.length>0 && <p>{allergens[0].allergen_name}, {allergens[1].allergen_name}</p>}
                <p>{recipe.description}</p>
                <p>Likes: {recipe.likes}</p>
                <button>Edit</button> <button onClick={()=>{
                    dispatch({type: 'DELETE_ITEM', payload: recipe.id});
                }}>Delete</button>
            </li>
            </>
        )
    }
    else{
        return(
            <>
            <li>
                <h3>{recipe.recipe_name}</h3>
                {allergens.length>0 && <p>{allergens[0].allergen_name}, {allergens[1].allergen_name}</p>}
                <p>{recipe.description}</p>
                <p>Likes: {recipe.likes}</p>
                <button>Copy Recipe</button> <button>Like</button>
            </li>
            </>
        )
    }
}

export default RecipeBrief;