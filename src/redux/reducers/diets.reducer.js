const diets = (state = [], action) => {
    switch (action.type){
        case 'STORE_DIETS':
            return action.payload;
    }
    return state;
}

export default diets;