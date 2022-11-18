function SearchPage () {
    const onSubmit = (e)=>{
        e.preventDefault();
    }
    return (
        <>
            <form onSubmit={onSubmit}>
                <label for="searchForm">Search for a recipe</label>
                <input type="search" id="searchForm"/>  
                <button type="submit">Search</button>  
            </form>        
        </>
    )
}

export default SearchPage;