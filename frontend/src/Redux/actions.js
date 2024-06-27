
export const addBook = (data)=>{
    return {
        type: 'BOOK/ADD_BOOK',
        payload: data
    }
}

export const updateQuantity = (id, quantity) => {
    return {
        type: 'BOOK/UPDATE_QUANTITY',
        payload: { id, quantity }
    }
}

export const removeBook = (id) => ({
  type: 'BOOK/REMOVE_BOOK',
  payload: id
});

// xac nhan thong tin thanh toan
export const setShippingInfo = (shippingDetails) => {
    return {
    type: 'ADD_SHIPPING_INFO',
    payload: shippingDetails
    }
};

export const logIn = (currentUser) => {
    return {
    type: 'LOG_IN',
    payload: currentUser
    }
};