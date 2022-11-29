const newIngredient = (state='', action)=>{
    switch(action.type){
        case 'LOG_INGREDIENT':
            return action.payload;
        case 'CLEAN_UP':
            return '';
    }
    return state;
}

export default newIngredient;