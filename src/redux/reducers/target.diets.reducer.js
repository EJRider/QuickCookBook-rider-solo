const targetDiets = (state=[], action)=>{
    switch (action.type){
        case'STORE_TARGET_DIETS':
            return action.payload;
    }
    return state;
}

export default targetDiets;