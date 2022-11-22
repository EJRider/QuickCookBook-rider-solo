const targetRecipe = (state=[], action) => {
    switch(action.type){
        case 'STORE_TARGET_RECIPE':
            return action.payload;
    }
    return state;
}

export default targetRecipe;