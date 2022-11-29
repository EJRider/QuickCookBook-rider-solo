const recipeInst = (state='', action) => {
    switch(action.type){
        case 'SAVE_INST':
            return action.payload;
        case 'CLEAN_UP':
            return '';
    }
    return state;
}

export default recipeInst