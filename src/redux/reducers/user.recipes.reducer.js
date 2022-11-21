const userRecipes = (state=[], action) => {
    switch (action.type){
        case 'STORE_RECIPES':
            return action.payload;
        case 'STORE_NEW_RECIPE':
            return [...state, action.payload];
    }
    return state;
}

export default userRecipes;