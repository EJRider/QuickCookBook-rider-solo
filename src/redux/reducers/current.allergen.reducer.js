const currentAllergen = (state='', action) => {
    switch (action.type){
        case 'SET_CURRENT_ALLERGEN':
            return action.payload;
    }
    return state;
}

export default currentAllergen;