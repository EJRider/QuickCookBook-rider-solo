const recipeInst = (state='', action) => {
    switch(action.type){
        case 'SAVE_INST':
            return action.payload;
    }
    return state;
}

export default recipeInst