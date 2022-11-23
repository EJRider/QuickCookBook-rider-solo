const targetAllergens = (state=[], action)=> {
    switch (action.type){
        case'STORE_TARGET_ALLERGENS':
            return action.payload;
    }
    return state;
}

export default targetAllergens;