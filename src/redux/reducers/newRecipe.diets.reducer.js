const newRecipeDiets = (state=[], action) => {
    switch(action.type){
        case "SAVE_NR_DIET":
            [
                ...state,
                action.payload
            ];
        case "SAVE_EDIT_DIET":
            switch(action.payload){
                case '1':
                    return [
                        ...state,
                        1
                    ];
                case '2':
                    return [
                        ...state,
                        2
                    ];
                case '3':
                    return [
                        ...state,
                        3
                    ];
                case '4': 
                return [
                    ...state,
                    4
                ];
                case '5':
                    return [
                        ...state, 
                        5
                    ]
                case '6':
                    return [
                        ...state,
                        6
                    ];
                case '7': 
                    return [
                        ...state,
                        7
                    ];
                case '8':
                    return [
                        ...state,
                        8
                    ]
            };
        case 'CLEAN_UP':
            return [];
    }
    return state;
}

export default newRecipeDiets;