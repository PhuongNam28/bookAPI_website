const initState = {
    addedBooks: []
}


export const addedBooksReducer = (state = initState.addedBooks, action) => {
    switch(action.type) {
        case 'BOOK/ADD_BOOK':
            return [...state, action.payload];
        case 'BOOK/UPDATE_QUANTITY':
            return state.map(book => {
                if (book.id === action.payload.id) {
                    return {
                        ...book,
                        quantity: action.payload.quantity
                    };
                }
                return book;
            });
        case 'BOOK/REMOVE_BOOK':
            return state.filter(book => book.id !== action.payload);
        case 'BOOK/REMOVE_ALLBOOK':
            return {
                ...state,
                cartBooks: [],
            };
        default:
            return state;
    }
}

