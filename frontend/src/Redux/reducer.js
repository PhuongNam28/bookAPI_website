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
        case 'BOOK/REMOVE_ALLBOOK':
            return {
                ...state,
                cartBooks: [],
            };
        default:
            return state;
    }
}

//Reducer shipping
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

<<<<<<< Updated upstream

const rootReducer = combineReducers({
    addedBooks: addedBooksReducer,
    shippings: shippingReducer
=======
const rootReducer = combineReducers({
    addedBooks: addedBooksReducer,
    shippings: shippingReducer,
>>>>>>> Stashed changes
});

export default rootReducer;
