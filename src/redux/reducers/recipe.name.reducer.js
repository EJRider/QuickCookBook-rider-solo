const recipeName = (state='', action) => {
    switch(action.type){
        case "SAVE_NAME":
            return action.payload;
    }
    return state;
}

export default recipeName;