const recipeCarb = (state='', action) => {
    switch(action.type){
        case 'SAVE_CARB':
            return action.payload;
    }
    return state;
}

export default recipeCarb;