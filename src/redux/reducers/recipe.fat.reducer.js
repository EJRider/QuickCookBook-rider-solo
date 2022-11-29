const recipeFat = (state='', action) => {
    switch(action.type){
        case 'SAVE_FAT':
            return action.payload;
        case 'CLEAN_UP':
            return '';
    }
    return state;
}

export default recipeFat;