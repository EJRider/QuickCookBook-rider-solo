import { useDispatch, useSelector } from "react-redux";

function SearchPage () {
    const dispatch = useDispatch();
    const search = useSelector(store=>store.searchReducer)
    const recipes = useSelector(store=>store.storeResults)
    const onSubmit = (e)=>{
        e.preventDefault();
        dispatch({
            type: "SEND_SEARCH",
            payload: search
        });
        dispatch({
            type: "CLEAR_SEARCH"
        });
    }
    return (
        <>
            {search}
            <form onSubmit={onSubmit}>
                <label for="searchForm">Search for a recipe</label>
                <input type="search" id="searchForm" value={search}
                onChange={(e)=>dispatch({type: 'SET_SEARCH', payload: e.target.value})}
                />  
                <button type="submit">Search</button>  
            </form>   
            <br/>
            <br/> 
            <ul>
                {recipes && recipes.map(recipe=>
                    <li key={recipe.id}>{recipe.recipe_name}</li>)}    
            </ul>
        </>
    )
}

export default SearchPage;