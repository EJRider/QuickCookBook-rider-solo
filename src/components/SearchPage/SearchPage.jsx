import { useDispatch, useSelector } from "react-redux";
import RecipeBrief from "../RecipeBrief/RecipeBrief";

function SearchPage () {
    const dispatch = useDispatch();
    const search = useSelector(store=>store.searchReducer)
    const recipes = useSelector(store=>store.searchResults)
    const onSubmit = (e)=>{
        e.preventDefault();
        dispatch({
            type: "SEND_SEARCH",
            payload: search
        });
        dispatch({
            type: "CLEAR_SEARCH"
        });
        console.log('search results are', recipes);
    }
    return (
        <>
            <form onSubmit={onSubmit}>
                <label for="searchForm">Search for a recipe</label>
                <input type="text" id="searchForm" value={search}
                onChange={(evt)=>dispatch({type: 'SET_SEARCH', payload: evt.target.value})}
                />  
                <button type="submit">Search</button>  
            </form>   
            <br/>
            <br/> 
            <ul>
                {recipes.length > 0 && recipes.map(recipe=>
                <RecipeBrief key={recipe.id} recipe={recipe}/>)}
            </ul>
        </>
    )
}

export default SearchPage;