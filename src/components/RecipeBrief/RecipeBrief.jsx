import {useSelector, useDispatch} from 'react-redux';

function RecipeBrief({recipe}){
    const dispatch = useDispatch()
    const currentUser = useSelector(store=>store.user);
    const allergens = useSelector(store=>store.allergens);
    let storedAllergens = [];
    if(allergens.length>0) {
        storedAllergens = allergens.filter(allergen => allergen.recipe_id === recipe.id);
    }

    if(recipe.user_id === currentUser.id){
        return(
            <>
            <li>
                <h3>{recipe.recipe_name}</h3>
                <table>
                <tr>
                    {storedAllergens.length > 0 && storedAllergens.map(allergen => (
                    <td key={allergen}>{allergen.allergen_name}</td>
                    ))}
                </tr>
                </table>
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