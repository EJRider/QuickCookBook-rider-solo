const newIngredient = (state='', action)=>{
    switch(action.type){
        case 'LOG_INGREDIENT':
            return action.payload;
        case 'CLEAR_INGREDIENT':
            return '';
    }
    return state;
}

export default newIngredient