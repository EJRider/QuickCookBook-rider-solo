const searchReducer = (state='', action) => {
    switch(action.type){
        case "SET_SEARCH":
            return action.payload;
        case "CLEAR_SEARCH":
            return '';
    }
    return state;
}

export default searchReducer;