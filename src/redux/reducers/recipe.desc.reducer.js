const recipeDesc = (state='', action) => {
    switch(action.type){
        case 'SAVE_DESC':
            return action.payload;
        case 'CLEAN_UP':
            return '';
    }
    return state;
}

export default recipeDesc;