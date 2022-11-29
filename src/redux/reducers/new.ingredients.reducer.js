const newIngredients = (state =[], action) => {
    switch (action.type){
        case 'ADD_INGREDIENT':
            return [...state, action.payload];
        case 'DUMMY_INGREDIENTS':
            return action.payload;
        case 'EDIT_INGREDIENTS':
            return action.payload;
        case 'CLEAN_UP':
            return [];
    }
    return state;
}

export default newIngredients;