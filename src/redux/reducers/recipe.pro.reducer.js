const recipePro = (state='', action) => {
    switch(action.type){
        case 'SAVE_PRO':
            return action.payload;
        case 'CLEAN_UP':
            return '';
    }
    return state;
}

export default recipePro;