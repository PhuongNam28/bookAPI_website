export const addBookAction = {
    type: 'BOOK/ADD_BOOK',
    payload: {id: 1, bookName: "Wind Call", author: "Muhaha", quantity: 1, newPrice: 20, oldPrice: 10}
}

export const addBook = (data)=>{
    return {
        type: 'BOOK/ADD_BOOK',
        payload: data
    }
}

export const updateQuantityAction = {
    type: 'BOOK/UPDATE_QUANTITY',
    payload: { id: 1, quantity: 1 }
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
