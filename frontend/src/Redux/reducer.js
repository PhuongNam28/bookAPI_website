import { combineReducers } from 'redux';

const initState = {
    addedBooks: []
}
const shippingInitState = 
{
    shippingInfo: {}
}

// Reducer cho addedBooks trong giỏ hàng
const addedBooksReducer = (state = initState.addedBooks, action) => {
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
        default:
            return state;
    }
}

const shippingReducer = (state = shippingInitState.shippingInfo, action) => {
    switch(action.type) {
        case 'ADD_SHIPPING_INFO':
            return {
                ...state,
                shippingInfo: action.payload
            };
        default:
            return state;
    }
};


const rootReducer = combineReducers({
    addedBooks: addedBooksReducer,
    shippings: shippingReducer
});

export default rootReducer;
