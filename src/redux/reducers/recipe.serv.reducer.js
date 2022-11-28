const recipeSize = (state='', action) => {
    switch(action.type){
        case "SAVE_SERV":
            return action.payload;
    }
    return state;
}

export default recipeSize;