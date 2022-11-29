const recipeName = (state='', action) => {
    switch(action.type){
        case "SAVE_NAME":
            return action.payload;
        case 'CLEAN_UP':
            return '';
    }
    return state;
}

export default recipeName;