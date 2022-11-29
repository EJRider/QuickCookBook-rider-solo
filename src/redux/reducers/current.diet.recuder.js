const currentDiet = (state='', action) => {
    switch (action.type){
        case 'SET_CURRENT_DIET':
            return action.payload;
        case 'CLEAN_UP':
            return '';
    }
    return state;
}

export default currentDiet;