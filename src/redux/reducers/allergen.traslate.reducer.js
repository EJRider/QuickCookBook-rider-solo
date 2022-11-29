const allergenTranslator = (state=[], action) => {
    switch(action.type){
        case 'TRANSLATE_ALLERGEN':
            switch(action.payload){
                case '1':
                    return [
                        ...state, 
                        "Milk"
                    ];
                case '2':
                    return [
                        ...state, 
                        "Eggs"
                        ];
                case '3':
                    return [
                         ...state, 
                        "Fish"
                    ];
                case '4':
                    return[
                        ...state,
                        "Shellfish"
                    ];
                case '5':
                    return [
                        ...state,
                        "Tree Nuts"
                    ];
                case '6': 
                    return [
                        ...state,
                        "Peanuts"
                    ];
                case '7': 
                    return [
                        ...state,
                        "Gluten"
                    ];
                case '8':
                    return [
                        ...state,
                        "Soybeans"
                    ];
            };
        case 'CLEAN_UP':
            return []
    }
    return state;
}

export default allergenTranslator;