export const addBookAction = {
    type: 'BOOK/ADD_BOOK',
    payload: {id: 1, bookName: "Wind Call", author: "Muhaha", quantity: 1, price: 20}
}

export const addBook = (data)=>{
    return {
        type: 'BOOK/ADD_BOOK',
        payload: data
    }
}