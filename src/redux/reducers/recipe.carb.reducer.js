const recipeCarb = (state='', action) => {
    switch(action.type){
        case 'SAVE_CARB':
            return action.payload;
        case 'CLEAN_UP':
            return '';
    }
    return state;
}

export default recipeCarb;