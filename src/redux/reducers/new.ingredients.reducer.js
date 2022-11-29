const newIngredients = (state =[], action) => {
    switch (action.type){
        case 'ADD_INGREDIENT':
            return [...state, action.payload];
        case 'CLEAN_UP':
            return [];
    }
    return state;
}

export default newIngredients;