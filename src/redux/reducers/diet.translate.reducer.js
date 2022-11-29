const dietTranslator = (state=[], action) => {
    switch(action.type){
        case 'TRANSLATE_DIET':
            switch(action.payload){
                case '1':
                    return [
                        ...state, 
                        "Vegetarian"
                    ];
                case '2':
                    return [
                        ...state, 
                        "Vegan"
                        ];
                case '3':
                    return [
                         ...state, 
                        "Low Sodium"
                    ];
                case '4':
                    return[
                        ...state,
                        "Kosher"
                    ];
                case '5':
                    return [
                        ...state,
                        "Halal"
                    ];
                case '6': 
                    return [
                        ...state,
                        "Keto"
                    ];
                case '7': 
                    return [
                        ...state,
                        "High Fiber"
                    ];
                case '8':
                    return [
                        ...state,
                        "Cardiac"
                    ];
            };
        case 'CLEAN_UP':
            return []
    }
    return state;
}

export default dietTranslator;