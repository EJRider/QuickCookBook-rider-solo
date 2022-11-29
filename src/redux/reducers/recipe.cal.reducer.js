const recipeCal = (state='', action) => {
    switch(action.type){
        case 'SAVE_CAL':
            return action.payload;
        case 'CLEAN_UP':
            return '';
    }
    return state;
}

export default recipeCal;