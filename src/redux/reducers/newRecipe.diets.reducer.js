const newRecipeDiets = (state=[], action) => {
    switch(action.type){
        case "SAVE_NR_DIET":
            return [
                ...state,
                action.payload
            ]
    }
    return state;
}

export default newRecipeDiets;