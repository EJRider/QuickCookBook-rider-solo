const recipeCal = (state='', action) => {
    switch(action.type){
        case 'SAVE_CAL':
            return action.payload;
    }
    return state;
}

export default recipeCal;