const searchResults = (action=[], state) => {
    switch(action.type){
        case 'SAVE_RESULTS':
            return action.payload;
    }
    return state; 
}

export default searchResults;