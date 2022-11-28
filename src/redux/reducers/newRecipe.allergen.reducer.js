const newRecipeAllergen = (state=[], action) => {
    switch (action.type){
        case "SAVE_NR_ALLERGEN":
            return [
                ...state,
                action.payload
            ]
    }
    return state;
}

export default newRecipeAllergen;