const recipeSize = (state='', action) => {
    switch(action.type){
        case "SAVE_SERV":
            return action.payload;
        case 'CLEAN_UP':
            return '';
    }
    return state;
}

export default recipeSize;