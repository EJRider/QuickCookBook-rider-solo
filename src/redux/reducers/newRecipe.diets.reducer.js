const newRecipeDiets = (state=[], action) => {
    switch(action.type){
        case "SAVE_NR_DIET":
            return [
                ...state,
                action.payload
            ];
        case 'CLEAN_UP':
            return [];
    }
    return state;
}

export default newRecipeDiets;