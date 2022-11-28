const recipePro = (state='', action) => {
    switch(action.type){
        case 'SAVE_PRO':
            return action.payload;
    }
    return state;
}

export default recipePro;