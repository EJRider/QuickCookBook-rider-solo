const newQuantity = (state='', action)=>{
    switch(action.type){
        case 'LOG_QUANTITY':
            return action.payload;
        case 'CLEAR_QUANTITY':
            return '';
    }
    return state;
}

export default newQuantity;