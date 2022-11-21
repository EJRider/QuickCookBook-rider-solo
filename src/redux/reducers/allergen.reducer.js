const allergens= (state= [], action) => {
    switch (action.type){
        case 'STORE_ALLERGENS':
            return action.payload;
    }
    return state;
}

export default allergens;