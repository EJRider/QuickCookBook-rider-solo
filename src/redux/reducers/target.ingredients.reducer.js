const targetIngredients = (state=[], action)=> {
    switch(action.type){
        case 'STORE_TARGET_INGREDIENTS':
            return action.payload;
    }
    return state;
}

export default targetIngredients;