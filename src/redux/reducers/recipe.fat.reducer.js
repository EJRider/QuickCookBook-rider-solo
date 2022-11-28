const recipeFat = (state='', action) => {
    switch(action.type){
        case 'SAVE_FAT':
            return action.payload;
    }
    return state;
}

export default recipeFat;