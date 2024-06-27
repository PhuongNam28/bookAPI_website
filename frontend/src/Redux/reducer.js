import { combineReducers } from 'redux';

const initState = {
    addedBooks: []
}
const shippingInitState = 
{
    shippingInfo: {}
}
const user = 
{
    currentUser: null
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

const userReducer = (state = user.currentUser, action) => {
    switch(action.type) {
        case 'LOG_IN':
            return {
                ...state,
                currentUser: action.payload
            };
        case 'LOG_OUT':
            return {
                ...state,
                currentUser: null,
            };
        default:
            return state;
    }
};


const rootReducer = combineReducers({
    addedBooks: addedBooksReducer,
    shippings: shippingReducer,
    users: userReducer,
});

export default rootReducer;
