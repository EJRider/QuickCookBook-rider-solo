const recipeSugar = (state ='', action) => {
    switch(action.type){
        case 'SAVE_SUGAR':
            return action.payload;
        case 'CLEAN_UP':
            return '';
    }
    return state;
}

export default recipeSugar;