const recipeSugar = (state ='', action) => {
    switch(action.type){
        case 'SAVE_SUGAR':
            return action.payload;
    }
    return state;
}

export default recipeSugar;