const newRecipeAllergen = (state=[], action) => {
    switch (action.type){
        case "SAVE_NR_ALLERGEN":
            return [
                ...state,
                action.payload
            ]
        case 'CLEAN_UP':
           return [];
    }
    return state;
}

export default newRecipeAllergen;