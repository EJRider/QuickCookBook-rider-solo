const currentAllergen = (state='', action) => {
    switch (action.type){
        case 'SET_CURRENT_ALLERGEN':
            return action.payload;
        case 'CLEAN_UP':
            return '';
    }
    return state;
}

export default currentAllergen;