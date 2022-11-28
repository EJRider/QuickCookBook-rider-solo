const currentDiet = (state='', action) => {
    switch (action.type){
        case 'SET_CURRENT_DIET':
            return action.payload;
    }
    return state;
}

export default currentDiet;