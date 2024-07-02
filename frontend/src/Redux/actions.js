
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

export const removeAllBooks = () => ({
    type: 'BOOK/REMOVE_ALLBOOK',
});

// xac nhan thong tin thanh toan
export const setShippingInfo = (shippingDetails) => {
    return {
    type: 'ADD_SHIPPING_INFO',
    payload: shippingDetails
    }
<<<<<<< Updated upstream
};
=======
};
>>>>>>> Stashed changes
