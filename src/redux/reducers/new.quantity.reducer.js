const newQuantity = (state='', action)=>{
    switch(action.type){
        case 'LOG_QUANTITY':
            return action.payload;
        case 'CLEAN_UP':
            return '';
    }
    return state;
}

export default newQuantity;