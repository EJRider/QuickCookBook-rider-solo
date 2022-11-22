const searchResults = (state=[], action) => {
    switch(action.type){
        case 'SAVE_RESULTS':
            return action.payload;
    }
    return state; 
}

export default searchResults;