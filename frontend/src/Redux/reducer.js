import { combineReducers } from 'redux';

const initState = {
    addedBooks: []
}

// Reducer cho addedBooks trong giỏ hàng
const addedBooksReducer = (state = initState.addedBooks, action) => {
    switch(action.type) {
        case 'BOOK/ADD_BOOK':
            // Thêm sách vào giỏ hàng
            return [...state, action.payload];
        case 'BOOK/UPDATE_QUANTITY':
            // Cập nhật số lượng của sách trong giỏ hàng
            return state.map(book => {
                if (book.id === action.payload.id) {
                    return {
                        ...book,
                        quantity: action.payload.quantity
                    };
                }
                return book;
            });
        default:
            return state;
    }
}

// Reducer gốc kết hợp các reducers con
const rootReducer = combineReducers({
    addedBooks: addedBooksReducer,
});

export default rootReducer;
