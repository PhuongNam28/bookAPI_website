import {addedBooksReducer} from "./BookRedux/bookReducer"
import {shippingReducer} from "./ShippingRedux/shippingReducer"
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    addedBooks: addedBooksReducer,
    shippings: shippingReducer

});

export default rootReducer;
