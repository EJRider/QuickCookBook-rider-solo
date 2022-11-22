const newIngredients = (state =[], action) => {
    switch (action.type){
        case 'ADD_INGREDIENT':
            return [...state, action.payload];
    }
    return state;
}

export default newIngredients;